import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { backgroundVariant, contentVariant } from '../utils/motion';
import { useRouter } from 'next/router';
import 'twin.macro';

type TransitionFase = 'initial' | 'final';

const TransitionLayout = ({ footer: Footer, children }) => {
  const router = useRouter();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] =
    useState<TransitionFase>('final');

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      console.log('router start');
      setTransitionStage('initial');
    });
  }, [router, router.events]);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('final');
  }, [children, setDisplayChildren, displayChildren, setTransitionStage]);

  return (
    <motion.div
      variants={backgroundVariant}
      initial="hidden"
      animate={transitionStage === 'final' ? 'show' : 'hidden'}
      exit="hidden"
      tw="w-screen min-h-screen"
    >
      <motion.div
        variants={contentVariant}
        initial="hidden"
        animate={transitionStage === 'final' ? 'show' : 'hidden'}
        exit="hidden"
      >
        {children}
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default TransitionLayout;
