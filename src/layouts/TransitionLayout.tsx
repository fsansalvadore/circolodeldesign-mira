import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  backgroundVariant,
  contentVariant,
  colorVariants,
} from '../utils/motion';
import { useRouter } from 'next/router';
import 'twin.macro';

type TransitionFase = 'initial' | 'final';

const handleColorBySlug = (slug) => {
  switch (slug) {
    case 'about':
      return colorVariants.orange;
    case 'press-area':
      return colorVariants.green;
    case 'ricerche-e-report':
      return colorVariants.fucsia;
    case slug.includes('ricerca/'):
      return colorVariants.white;
    default:
      return colorVariants.blue;
  }
};

const TransitionLayout = ({ footer: Footer, page, children }) => {
  const router = useRouter();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] =
    useState<TransitionFase>('final');
  const [pageColor, setPageColor] = useState(colorVariants.blue);

  useEffect(() => {
    setPageColor(handleColorBySlug(page.slug));
  }, [router, page.slug]);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setTransitionStage('initial');
      setPageColor(handleColorBySlug(page.slug));
    });
  }, [router, router.events, page.slug]);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('final');
  }, [children, setDisplayChildren, displayChildren, setTransitionStage]);

  return (
    <motion.div
      variants={backgroundVariant}
      initial="hidden"
      animate={pageColor}
      exit={pageColor}
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
