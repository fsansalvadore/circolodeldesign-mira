import tw, { styled } from 'twin.macro';
import {
  motion,
  useViewportScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import Image from 'next/image';

const transition = {
  type: 'spring',
  duration: 2,
  delay: 1,
};

const gifVariant = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition,
  },
  exit: {
    scale: 0,
    transition,
  },
};

const GifWrapper = styled(motion.div)`
  ${tw`absolute overflow-visible! opacity-30 md:opacity-100 width[200px] height[auto]! min-height[50px]! filter mix-blend-screen! pointer-events-none`}

  > div {
    ${tw`overflow-visible!`}
    position: unset !important;
  }
`;
const StyledGif = styled(Image)`
  ${tw`w-auto overflow-visible! height[200px] height[auto]! min-height[50px]!`}

  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;

type ElementProps = {
  src: string;
  speed: number;
};

const Element = ({
  speed = 0,
  src = '/images/piano_sfocato1.gif',
  ...rest
}: ElementProps) => {
  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <GifWrapper
      as={motion.div}
      variant={gifVariant}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={transition}
      style={{ y: transform }}
      {...rest}
    >
      <StyledGif src={src} alt="" layout="fill" />
    </GifWrapper>
  );
};

export const ParallaxComposition = () => {
  const prefersReducedMotion = useReducedMotion();

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) return;

  return (
    <>
      <Element
        speed={4}
        src="/images/piano_sfocato1.gif"
        tw="left[20vw] top[10vh]"
      />
      <Element
        speed={5}
        src="/images/piano_sfocato3.gif"
        tw="left[2vw] top[60vh] width[100px]"
      />
      <Element
        speed={5}
        src="/images/piano_sfocato2.gif"
        tw="left[70vw] top[110vh] width[100px] bg-opacity-40"
      />
      <Element
        speed={10}
        src="/images/piano_sfocato2.gif"
        tw="left[60vw] top[-5vh] width[100px]"
      />
      <Element
        speed={5.5}
        src="/images/piano_sfocato3.gif"
        tw="left[50vw] top[45vh] width[400px]"
      />
      <Element
        speed={-5}
        src="/images/piano_sfocato1.gif"
        tw="left[90vw] top[80vh] width[100px]"
      />
    </>
  );
};
