import { Slider } from '../Base';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { findByShortname } from '../../utils/common';

const Wrapper = styled.div`
  ${tw`relative mx-auto -mt-20 w-screen min-height[250px] h-auto`}
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  max-width: 1000%;
  width: auto;
`;

const ImageWrapper = styled.div`
  ${tw`transition-all transform w-full height[30vh] lg:height[50vh] before:(content[""] absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-black opacity-40 z-10)`}

  transition: height 0.45s cubic-bezier(0.5, 0.01, 0, 0.8);
`;

const StyledImage = styled(Image)`
  ${tw`absolute z-0 w-full h-full`}
`;

const Slide = ({ slide }) => {
  const image =
    findByShortname(slide.fields, 'immagine')?.content?.value?.url ??
    '/blur.png';
  const altText =
    findByShortname(slide.fields, 'alt-text')?.content?.value ?? '';

  return (
    <ImageWrapper>
      <StyledImage
        src={image}
        alt={altText ?? ''}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        blurDataURL={'/blur.png'}
        priority
      />
    </ImageWrapper>
  );
};

export const GalleryBlock = ({ fields }) => {
  const items = findByShortname(fields, 'slides')?.content?.items ?? [];

  const slides = items?.map((item, i) => (
    <Slide key={`quote-${i}`} slide={item} />
  ));

  return (
    <Wrapper>
      <Slider slides={slides} hasPagination spaceBetween={0} />
    </Wrapper>
  );
};
