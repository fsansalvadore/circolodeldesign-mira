import tw, { styled, css } from 'twin.macro';
import Image from 'next/image';
import { HighlightTitleLabel, Link } from '../Base';
import { findByShortname } from '../../utils/common';

const DynamicGrid = tw.div`relative grid grid-cols-2 gap-4 mt-4 lg:(mt-8 gap-8)`;

const InfoWrapper = styled.div`
  ${tw`absolute z-20 p-4 text-center text-xl lg:text-3xl w-full h-full left-0 top-0 right-0 bottom-0 flex flex-col items-center justify-center visible opacity-100 transform transition filter blur-[-5px]`}
  transition: visibility 0.15s ease, opacity 0.15s ease;
`;

const ImageWrapper = styled.div`
  ${tw`absolute z-0 w-full h-full filter transition-all mix-blend-screen blur-[-5px]`}

  transition: all 0.45s cubic-bezier(0.2, 0.01, 0, 0.1);
`;

const StyledImage = styled(Image)`
  ${tw`absolute z-0 w-full h-full`}
`;

const GridItem = styled(Link)<{
  colonneDesktop: number;
  colonneMobile: number;
}>`
  ${tw`relative col-span-1 max-h-[500px]`}

  ${({ colonneDesktop, colonneMobile }) => css`
    grid-column-start: span ${colonneMobile};
    height: ${colonneDesktop === 2 ? `50vw` : `40vw`};

    @media (min-width: 1024px) {
      grid-column-start: span ${colonneDesktop};
      height: ${colonneDesktop === 2 ? `40vw` : `35vw`};
    }
  `}

  &:hover {
    ${ImageWrapper} {
      ${tw`filter blur-[0] mix-blend-normal`}
    }
  }

  transition: all 0.15s cubic-bezier(0.2, 0.01, 0, 0.1);
`;

export const ReportsBlock = ({ fields }) => {
  const reports =
    findByShortname(fields, 'lista-ricerche')?.content?.items ?? [];
  return (
    <div tw="py-10 lg:py-20">
      <DynamicGrid>
        {reports.map((item, index) => {
          const title =
            findByShortname(item.fields, 'titolo')?.content?.value ?? '';
          const subtitle =
            findByShortname(item.fields, 'sottotitolo')?.content?.value ?? '';
          const link =
            '/ricerche/' +
              findByShortname(item.fields, 'link-slug-della-pagina')?.content
                ?.value ?? '';
          const image =
            findByShortname(item.fields, 'immagine-di-copertina')?.content
              ?.value?.url ?? '/blur.png';
          const colsDesktop =
            findByShortname(item.fields, 'n-colonne-desktop-')?.content
              ?.value ?? 1;
          const colsMobile =
            findByShortname(item.fields, 'n-colonne-mobile-')?.content?.value ??
            1;
          const isDisabled =
            findByShortname(item.fields, 'disabilita-link')?.content?.value ??
            1;

          return (
            <GridItem
              key={index}
              as={isDisabled ? 'div' : Link}
              href={!isDisabled ? link : null}
              colonneDesktop={parseInt(colsDesktop) ?? 1}
              colonneMobile={parseInt(colsMobile) ?? 1}
            >
              <InfoWrapper>
                {!!title && (
                  <HighlightTitleLabel tw="py-1 px-2 mb-2 md:text-2xl lg:text-3xl lg:px-3 !leading-[130%]">
                    {title}
                  </HighlightTitleLabel>
                )}
                {!!subtitle && (
                  <HighlightTitleLabel
                    tw="py-1 px-2 lg:px-3 md:text-2xl lg:text-3xl"
                    inverse
                  >
                    {subtitle}
                  </HighlightTitleLabel>
                )}
              </InfoWrapper>
              <ImageWrapper>
                <StyledImage
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  blurDataURL={'/blur.png'}
                  priority
                />
              </ImageWrapper>
            </GridItem>
          );
        })}
      </DynamicGrid>
    </div>
  );
};
