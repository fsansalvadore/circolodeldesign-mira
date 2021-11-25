import tw, { styled } from 'twin.macro';
import {
  motion,
  useViewportScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useWindowSize } from 'react-use';
import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import Piano1 from '../../assets/animations/piano_sfocato1.json';
import Piano2 from '../../assets/animations/piano_sfocato2.json';
import Piano3 from '../../assets/animations/piano_sfocato3.json';

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
  ${tw`absolute overflow-visible! opacity-30 md:opacity-100 width[200px] height[auto]! min-height[50px]! pointer-events-none`}

  will-change: transform;
  > div {
    ${tw`overflow-visible!`}
    position: unset !important;
  }
  svg {
    will-change: transform;
  }
`;
// const StyledGif = styled(Image)`
//   ${tw`w-auto overflow-visible! height[200px] height[auto]! min-height[50px]!`}

//   object-fit: contain;
//   width: 100% !important;
//   position: relative !important;
//   height: unset !important;
// `;

type ElementProps = {
  src: JSON | any;
  speed: number;
};

const Element = ({ speed = 0, src = Piano1, ...rest }: ElementProps) => {
  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  const ref = useRef();

  useEffect(() => {
    // lottie.destroy();
    lottie.loadAnimation({
      container: ref.current,
      animationData: src,
    });
    // return () => lottie.destroy();
  }, [src]);

  return (
    <GifWrapper
      as={motion.div}
      variant={gifVariant}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit="exit"
      transition={transition}
      style={{ y: transform }}
      {...rest}
    >
      {/* <StyledGif src={src} alt="" layout="fill" /> */}
      <div ref={ref} />
    </GifWrapper>
  );
};

export const ParallaxComposition = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowSize();

  // useEffect(() => {
  //   return () => lottie.destroy();
  // }, []);

  useEffect(() => {
    if (width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) return;

  return (
    <>
      <Element
        speed={isMobile ? 1 : 4}
        src={Piano1}
        tw="left[20vw] top[10vh]"
      />
      <Element
        speed={isMobile ? -2 : -5}
        src={Piano3}
        tw="left[2vw] top[70vh] width[100px]"
      />
      <Element
        speed={isMobile ? 2 : -2}
        src={Piano2}
        tw="left[70vw] top[120vh] width[100px] bg-opacity-40"
      />
      <Element
        speed={isMobile ? 4 : 10}
        src={Piano2}
        tw="left[60vw] top[-5vh] width[100px]"
      />
      <Element
        speed={isMobile ? 2.25 : 7.5}
        src={Piano3}
        tw="left[50vw] top[45vh] width[400px]"
      />
      <Element
        speed={isMobile ? 1.75 : 2.5}
        src={Piano1}
        tw="left[90vw] top[80vh] width[100px]"
      />
    </>
  );
};
