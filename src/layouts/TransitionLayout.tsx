import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { backgroundVariant, contentVariant } from '../utils/motion';
import { useRouter } from 'next/router';
import 'twin.macro';

type TransitionFase = 'initial' | 'final';

const TransitionLayout = ({ children }) => {
  const router = useRouter();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] =
    useState<TransitionFase>('final');

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('final');
  }, [children, setDisplayChildren, displayChildren, setTransitionStage]);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      console.log('router start');
      setTransitionStage('initial');
    });
  }, [router, router.events]);

  return (
    <motion.div
      variants={backgroundVariant}
      initial="hidden"
      animate={transitionStage === 'final' ? 'show' : 'hidden'}
      exit="hidden"
      tw="w-screen h-screen fixed z-behind left-0 right-0 top-0 bottom-0"
    >
      <motion.div
        variants={contentVariant}
        initial="hidden"
        animate={transitionStage === 'final' ? 'show' : 'hidden'}
        exit="hidden"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default TransitionLayout;
