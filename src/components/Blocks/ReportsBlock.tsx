import tw, { styled, css } from 'twin.macro';
import Image from 'next/image';
import { HighlightTitleLabel, Link } from '../Base';
import { findByShortname } from '../../utils/common';

const data = [
  {
    // label: 'Ricerca',
    title: 'Lorem ipsum',
    link: '/ricerche/ricerca-2',
    image: '/images/photo-1635172552297-adcbdb0086ef.jpg',
    colonneDesktop: 2,
    colonneMobile: 2,
  },
  {
    // label: 'Report',
    title: 'Lorem ipsum',
    link: '/ricerche/ricerca-2',
    image: '/images/photo-1635752782385-bc676ec52709.jpg',
    colonneDesktop: 1,
    colonneMobile: 1,
  },
  {
    // label: 'Report',
    title: 'Lorem ipsum',
    link: '/ricerche/ricerca-2',
    image: '/images/photo-1636228447444-4ec83a373baa.jpg',
    colonneDesktop: 1,
    colonneMobile: 1,
  },
  {
    // label: 'Ricerca',
    title: 'Lorem ipsum',
    link: '/ricerche/ricerca-2',
    image: '/images/photo-1636652966789-e944cbb413a3.jpg',
    colonneDesktop: 1,
    colonneMobile: 1,
  },
  {
    // label: 'Report',
    title: 'Lorem ipsum',
    link: '/ricerche/ricerca-2',
    image: '/images/photo-1637226670958-50b46255d18c.jpg',
    colonneDesktop: 1,
    colonneMobile: 1,
  },
  {
    // label: 'Report',
    title: 'Lorem ipsum',
    link: '/ricerche/ricerca-2',
    image: '/images/photo-1637400691569-2c5f391e37a5.jpg',
    colonneDesktop: 1,
    colonneMobile: 2,
  },
];

const DynamicGrid = tw.div`relative grid grid-cols-2 gap-4 mt-4 lg:(mt-8 gap-8)`;

const InfoWrapper = styled.div`
  ${tw`absolute z-20 text-xl lg:text-3xl w-full h-full left-0 top-0 right-0 bottom-0 flex flex-col items-center justify-center visible opacity-100 transform transition filter filter[blur(-5px)]`}
  transition: visibility 0.15s ease, opacity 0.15s ease;
`;

const ImageWrapper = styled.div`
  ${tw`absolute z-0 w-full h-full filter transition-all mix-blend-screen filter[blur(5px)]`}

  transition: all 0.45s cubic-bezier(0.2, 0.01, 0, 0.1);
`;

const StyledImage = styled(Image)`
  ${tw`absolute z-0 w-full h-full`}
`;

const GridItem = styled(Link)<{
  colonneDesktop: number;
  colonneMobile: number;
}>`
  ${tw`relative col-span-1 max-height[500px]`}

  ${({ colonneDesktop, colonneMobile }) => css`
    grid-column-start: span ${colonneMobile};
    height: ${colonneDesktop === 2 ? `50vw` : `40vw`};

    @media (min-width: 1024px) {
      grid-column-start: span ${colonneDesktop};
      height: ${colonneDesktop === 2 ? `40vw` : `35vw`};
    }
  `}

  &:hover {
    ${InfoWrapper} {
      ${tw`invisible opacity-0 filter[blur(4px)]`}
    }
    ${ImageWrapper} {
      ${tw`filter[blur(0px)] mix-blend-normal`}
    }
  }

  transition: all 0.15s cubic-bezier(0.2, 0.01, 0, 0.1);
`;

export const ReportsBlock = ({ fields }) => {
  const reports =
    findByShortname(fields, 'lista-ricerche')?.content?.items ?? [];
  return (
    <div>
      <DynamicGrid>
        {reports.map((item, index) => {
          const title =
            findByShortname(item.fields, 'titolo')?.content?.value ?? '';
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

          return (
            <GridItem
              key={index}
              href={link}
              colonneDesktop={parseInt(colsDesktop) ?? 1}
              colonneMobile={parseInt(colsMobile) ?? 1}
            >
              <InfoWrapper>
                {/* {!!item.label && (
                <HighlightTitleLabel tw="py-1 px-3 mb-3 text-lg" inverse>
                  {item.label}
                </HighlightTitleLabel>
              )} */}
                {!!title && (
                  <HighlightTitleLabel tw="py-1 px-3">
                    {title}
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
