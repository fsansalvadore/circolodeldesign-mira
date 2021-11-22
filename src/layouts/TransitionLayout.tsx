import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { contentVariant, colorVariants, transitions } from '../utils/motion';
import { useRouter } from 'next/router';
import 'twin.macro';
import { MaxWidthContent } from '../components/Base';
import { handleColorBySlug } from '../utils/common';

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

  return (
    <motion.div
      variants={colorVariants}
      initial={colorVariant}
      animate={colorVariant}
      tw="w-screen min-h-screen"
    >
      <MaxWidthContent
        as={motion.div}
        variants={contentVariant}
        initial="initial"
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.5, ...transitions.content },
        }}
        exit="exit"
        tw="mt-20"
      >
        {children}
      </MaxWidthContent>
      <Footer />
    </motion.div>
  );
};

export default TransitionLayout;
