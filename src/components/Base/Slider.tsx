import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Swiper as ISwiper } from 'swiper';
import { A11y, Autoplay, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// install Swiper modules
ISwiper.use([A11y, Autoplay]);

const Wrapper = tw.div`w-full h-[40vw] relative`;

const PaginationWrapper = tw.div`w-full mt-1 flex items-center justify-center`;

const NavigationWrapper = tw.div`absolute right-0 bottom-0 top-0 left-0 z-10 flex items-center justify-between pointer-events-none`;

const NavButton = styled.button<{ $dimmed: boolean }>`
  ${tw`w-[40px] h-[40px] outline-none appearance-none flex items-center justify-center rounded-full bg-miraFucsia transition-opacity pointer-events-auto`}
  ${({ $dimmed }) => $dimmed && tw`opacity-50`}
`;

const StyledSwiper = styled(Swiper)<{
  $hasNavigation?: boolean;
  $centerVertically?: boolean;
}>`
  ${tw`flex items-center h-full!`}
  .swiper-wrapper {
    ${tw`flex h-full!`}

    ${({ $centerVertically }) => $centerVertically && tw`items-center`}
  }
  ${({ $hasNavigation }) => $hasNavigation && tw`mx-60`}
`;

const Bullet = styled.span<{ $active: boolean }>`
  ${tw`flex-grow h-[11px] m-1 border bg-gray-200`}
  ${({ $active }) => !!$active && tw`bg-miraFucsia`}
`;

interface Props {
  slides: JSX.Element[];
  slidesPerView?: number;
  spaceBetween?: number;
  hasPagination?: boolean;
  hasNavigation?: boolean;
  loop?: boolean;
  centerVertically?: boolean;
  slidesPerGroup?: number;
  initialSlide?: number;
  loopedSlides?: number;
  autoplay?: any;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
}

export const Slider: React.FC<Props> = ({
  slides,
  slidesPerView = 1,
  hasPagination,
  hasNavigation,
  breakpoints,
  spaceBetween,
  autoplay = false,
  loop = false,
  centerVertically = false,
  slidesPerGroup = 1,
  initialSlide = 1,
  loopedSlides = 0,
  ...rest
}) => {
  const [swiperInstance, setSwiperInstance] = useState<ISwiper | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    if (!slides || !swiperInstance || !swiperInstance.activeIndex)
      return setActiveSlide(0);
    swiperInstance?.slideTo(activeSlide);
    swiperInstance?.init();
    if (autoplay) swiperInstance.autoplay.start();
  }, [activeSlide, swiperInstance, slides, autoplay]);

  return (
    <>
      {slides && (
        <Wrapper>
          {!!hasNavigation && slides.length > 1 && !!swiperInstance && (
            <NavigationWrapper>
              <NavButton
                onClick={() => swiperInstance?.slidePrev()}
                $dimmed={swiperInstance.isBeginning}
              >
                <ChevronLeftIcon tw="w-20 h-20 text-white" />
              </NavButton>
              <NavButton
                onClick={() => swiperInstance?.slideNext()}
                $dimmed={swiperInstance.isEnd}
              >
                <ChevronRightIcon tw="w-20 h-20 text-white" />
              </NavButton>
            </NavigationWrapper>
          )}
          <StyledSwiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            spaceBetween={spaceBetween ?? 20}
            threshold={2}
            centeredSlides
            slidesPerView={slidesPerView}
            slidesPerGroup={slidesPerGroup}
            updateOnWindowResize
            autoplay={autoplay && { delay: 6000 }}
            onAutoplayStart={autoplay}
            loop={loop}
            initialSlide={initialSlide}
            loopAdditionalSlides={0}
            loopedSlides={loopedSlides}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            breakpoints={breakpoints || {}}
            $hasNavigation={hasNavigation}
            $centerVertically={centerVertically}
            {...rest}
          >
            {slides?.map((slide, index) => (
              <SwiperSlide key={`slide-${index}`} virtualIndex={activeSlide}>
                {slide}
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </Wrapper>
      )}
      {!!hasPagination && slides.length > 1 && (
        <PaginationWrapper>
          {!!swiperInstance &&
            swiperInstance.slides?.map((_, index: number) => (
              <Bullet
                key={`bullet-${index}`}
                $active={activeSlide === index}
                onClick={() => swiperInstance.slideTo(index)}
              />
            ))}
        </PaginationWrapper>
      )}
    </>
  );
};
