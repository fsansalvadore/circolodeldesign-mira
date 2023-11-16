import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { contentVariant, colorVariants, transitions } from '../utils/motion';
import { useRouter } from 'next/router';
import 'twin.macro';
import { MaxWidthContent } from '../components/Base';
import { ParallaxComposition } from '../components/Base/ParallaxComposition';
import { handleColorBySlug } from '../utils/common';
import AboutPageLayout from './AboutPageLayout';
import { MainNavigation } from '../components/Blocks';

const TransitionLayout = ({
  footer: Footer,
  menu,
  page,
  colorVariant,
  setColorVariant,
  children,
}) => {
  const router = useRouter();

  useEffect(() => {
    setColorVariant(handleColorBySlug(page.slug));
  }, [router, page.slug, setColorVariant]);

  return (
    <motion.div
      variants={colorVariants}
      initial={colorVariant.variant}
      animate={colorVariant.variant}
      tw="w-screen min-h-screen relative overflow-hidden"
    >
      {!!menu && (
        <MainNavigation
          menu={menu}
          colorVariant={colorVariant}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ...transitions.background, delay: 1 },
          }}
          exit={{ opacity: 0 }}
          page={page}
        />
      )}
      {page?.slug !== 'index' && <ParallaxComposition layout={page?.slug} />}
      {page?.slug !== 'about' && <ParallaxComposition layout={page?.slug} />}
      {page?.slug !== 'press-area' && (
        <ParallaxComposition layout={page?.slug} />
      )}
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
        <MaxWidthContent tw="pt-20 min-h-[75vh]">
          {!!router.query?.slug && router.query.slug[0] === 'about' ? (
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
