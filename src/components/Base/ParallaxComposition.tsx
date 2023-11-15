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
import Piano1 from '../../assets/animations/piano_sfocato1-old.json';
import Piano2 from '../../assets/animations/piano_sfocato2-old.json';
import Piano3 from '../../assets/animations/piano_sfocato3-old.json';

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

const ElementWrapper = styled(motion.div)`
  ${tw`absolute overflow-visible! opacity-30 md:opacity-90 w-[200px] !h-[auto] !min-h-[50px] pointer-events-none`}

  > div {
    ${tw`overflow-visible!`}
    position: unset !important;
  }
`;

type ElementProps = {
  src: JSON | any;
  style?: any;
};

const Element = ({ src = Piano1, style, ...rest }: ElementProps) => {
  const ref = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: ref.current,
      animationData: src,
    });
  }, [src]);

  return (
    <ElementWrapper
      variant={gifVariant}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit="exit"
      transition={transition}
      {...rest}
    >
      <div ref={ref} />
    </ElementWrapper>
  );
};

type Layout = 'index' | 'about' | 'press-area';

interface CompositionProps {
  layout: Layout;
}

export const ParallaxComposition = ({ layout }: CompositionProps) => {
  const prefersReducedMotion = useReducedMotion();

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) return;

  if (layout === 'index')
    return (
      <>
        <Element src={Piano1} tw="left-[2vw] top-[22vh]" />
        <Element src={Piano2} tw="left-[15vw] top-[70vh] !w-[150px]" />
        <Element src={Piano2} tw="left-[70vw] top-[130vh] !w-[300px]" />
        <Element src={Piano2} tw="left-[70vw] top-[13vh] !w-[100px]" />
        <Element src={Piano3} tw="left-[55vw] top-[50vh] !w-[400px]" />
        <Element src={Piano1} tw="left-[90vw] top-[90vh] !w-[100px]" />
      </>
    );

  if (layout === 'about')
    return (
      <>
        <Element src={Piano1} tw="left-[80vw] top-[13vh]" />
        <Element src={Piano3} tw="left-[2vw] top-[70vh] w-[100px]" />
        <Element src={Piano3} tw="left-[40vw] top-[170vh] !w-[300px]" />
        <Element src={Piano2} tw="left-[70vw] top-[120vh] w-[100px]" />
        <Element src={Piano2} tw="left-[10vw] top-[120vh] w-[100px]" />
      </>
    );

  if (layout === 'press-area')
    return (
      <>
        <Element src={Piano1} tw="left-[50vw] top-[33vh] !w-[300px]" />
        <Element src={Piano3} tw="left-[2vw] top-[50vh] !w-[100px]" />
        <Element src={Piano2} tw="left-[70vw] top-[13vh]" />
        <Element src={Piano3} tw="left-[85vw] top-[55vh] !w-[100px]" />
      </>
    );

  return null;
};
