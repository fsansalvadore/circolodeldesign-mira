import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { contentVariant, colorVariants, transitions } from '../utils/motion';
import { useRouter } from 'next/router';
import 'twin.macro';
import { MaxWidthContent } from '../components/Base';
import { ParallaxComposition } from '../components/Base/ParallaxComposition';
import { handleColorBySlug } from '../utils/common';
import AboutPageLayout from './AboutPageLayout';

const TransitionLayout = ({
  footer: Footer,
  page,
  colorVariant,
  setColorVariant,
  children,
}) => {
  const router = useRouter();

  useEffect(() => {
    setColorVariant(handleColorBySlug(page.slug).variant);
  }, [router, page.slug, setColorVariant]);

  console.log('page', page);
  console.log('router', router);
  return (
    <motion.div
      variants={colorVariants}
      initial={colorVariant}
      animate={colorVariant}
      tw="w-screen min-h-screen relative"
    >
      {page?.slug === 'index' && <ParallaxComposition />}
      <motion.div
        variants={contentVariant}
        initial="initial"
        animate={{
          y: 0,
          opacity: 1,
          transition: transitions.content,
        }}
        exit="exit"
      >
        <MaxWidthContent tw="py-20">
          {router.query.slug === 'about' ? (
            <AboutPageLayout>{children}</AboutPageLayout>
          ) : (
            children
          )}
        </MaxWidthContent>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default TransitionLayout;
