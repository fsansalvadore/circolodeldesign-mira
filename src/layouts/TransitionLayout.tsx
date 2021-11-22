import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { contentVariant, colorVariants } from '../utils/motion';
import { useRouter } from 'next/router';
import 'twin.macro';
import { MaxWidthContent } from '../components/Base';

type TransitionFase = 'initial' | 'final';

const handleColorBySlug = (slug) => {
  switch (slug) {
    case 'about':
      return { variant: colorVariants.orange, mode: 'dark' };
    case 'press-area':
      return { variant: colorVariants.green, mode: 'dark' };
    case 'ricerche-e-report':
      return { variant: colorVariants.fucsia, mode: 'dark' };
    case slug.includes('ricerca/'):
      return { variant: colorVariants.white, mode: 'light' };
    default:
      return { variant: colorVariants.blue, mode: 'dark' };
  }
};

const TransitionLayout = ({
  footer: Footer,
  page,
  setColorMode,
  colorVariant,
  setColorVariant,
  children,
}) => {
  const router = useRouter();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] =
    useState<TransitionFase>('final');
  const [pageColor, setPageColor] = useState(colorVariants.blue);

  useEffect(() => {
    setPageColor(handleColorBySlug(page.slug).variant);
    setColorVariant(handleColorBySlug(page.slug).variant);
    setColorMode(handleColorBySlug(page.slug).mode);
  }, [router, page.slug, setColorMode, setColorVariant]);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setTransitionStage('initial');
      setPageColor(handleColorBySlug(page.slug).variant);
      setColorVariant(handleColorBySlug(page.slug).variant);
      setColorMode(handleColorBySlug(page.slug).mode);
    });
  }, [router, router.events, page.slug, setColorMode, setColorVariant]);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('final');
  }, [children, setDisplayChildren, displayChildren, setTransitionStage]);

  return (
    <motion.div
      variants={colorVariants}
      initial="blue"
      animate={pageColor}
      exit={pageColor}
      tw="w-screen min-h-screen"
    >
      <motion.div
        variants={contentVariant}
        initial="hidden"
        animate={transitionStage === 'final' ? 'show' : 'hidden'}
        exit="hidden"
        tw="mt-20"
      >
        <MaxWidthContent as={motion.div}>{children}</MaxWidthContent>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default TransitionLayout;
