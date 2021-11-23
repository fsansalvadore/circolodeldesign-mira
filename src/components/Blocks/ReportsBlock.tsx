import tw, { styled, css } from 'twin.macro';
import Image from 'next/image';
import { HighlightTitleLabel, Link } from '../Base';

const data = [
  {
    label: 'Lorem ipsum',
    link: '/about',
    image: '/images/photo-1635172552297-adcbdb0086ef.jpg',
    colonneDesktop: 2,
    colonneMobile: 2,
  },
  {
    label: 'Lorem ipsum',
    link: '/',
    image: '/images/photo-1635752782385-bc676ec52709.jpg',
    colonneDesktop: 1,
    colonneMobile: 1,
  },
  {
    label: 'Lorem ipsum',
    link: '/',
    image: '/images/photo-1636228447444-4ec83a373baa.jpg',
    colonneDesktop: 1,
    colonneMobile: 1,
  },
  {
    label: 'Lorem ipsum',
    link: '/',
    image: '/images/photo-1636652966789-e944cbb413a3.jpg',
    colonneDesktop: 1,
    colonneMobile: 1,
  },
  {
    label: 'Lorem ipsum',
    link: '/',
    image: '/images/photo-1637226670958-50b46255d18c.jpg',
    colonneDesktop: 1,
    colonneMobile: 1,
  },
  {
    label: 'Lorem ipsum',
    link: '/',
    image: '/images/photo-1637400691569-2c5f391e37a5.jpg',
    colonneDesktop: 1,
    colonneMobile: 2,
  },
];

const DynamicGrid = tw.div`relative grid grid-cols-2 gap-4 mt-4 lg:(mt-8 gap-8)`;

const InfoWrapper = styled.div`
  ${tw`absolute z-20 text-xl lg:text-3xl w-full h-full left-0 top-0 right-0 bottom-0 flex items-center justify-center visible opacity-100 transform transition filter filter[blur(-5px)]`}
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
  return (
    <div>
      <h2>Reports</h2>
      <DynamicGrid>
        {data.map((item, index) => (
          <GridItem
            key={index}
            href={item.link}
            colonneDesktop={item.colonneDesktop ?? 1}
            colonneMobile={item.colonneMobile ?? 1}
          >
            <InfoWrapper>
              <HighlightTitleLabel tw="py-1 px-3">
                {item.label}
              </HighlightTitleLabel>
            </InfoWrapper>
            <ImageWrapper>
              <StyledImage
                src={`${item.image}`}
                alt={item.label}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                blurDataURL={'/blur.png'}
                priority
              />
            </ImageWrapper>
          </GridItem>
        ))}
      </DynamicGrid>
    </div>
  );
};
