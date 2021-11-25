import tw, { styled } from 'twin.macro';
import { findByShortname } from '../../utils/common';
import { HighlightTitleLabel, RichText } from '../Base';
import parse from 'html-react-parser';
import Image from 'next/image';

const ElementsWrapper = styled.div<{ cols: number }>`
  ${tw`grid`}

  ${({ cols }) =>
    cols === 1 ? tw`grid-cols-1` : tw`grid-cols-2 gap-4 lg:gap-8`}
`;

const StyledImage = styled(Image)`
  ${tw`relative z-0 max-height[80px]! height[auto]! min-height[50px]!`}

  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;
const GridItem = styled.div`
  ${tw`relative col-span-1 self-start items-start flex`}

  > div {
    position: unset !important;
  }
`;

interface ColophonContent {
  testo?: string;
  image?: string;
}

const ColophonContent = ({ testo, image }: ColophonContent) => {
  return (
    <div>
      {image ? (
        <GridItem>
          <StyledImage
            src={image}
            alt={testo ?? ''}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={'/blur.png'}
            priority
          />
        </GridItem>
      ) : (
        <GridItem>
          <RichText>{parse(testo)}</RichText>
        </GridItem>
      )}
    </div>
  );
};

interface ColophonSectionInterface {
  label?: string;
  cols?: number;
  items?: any[];
  testo?: any;
}

export const ColophonSection = ({
  label,
  cols = 1,
  items,
  testo,
}: ColophonSectionInterface) => {
  return (
    <div tw="mt-0 mb-4 text-base lg:(text-lg mb-8)">
      <HighlightTitleLabel>{label}</HighlightTitleLabel>
      <ElementsWrapper cols={cols}>
        {items?.map((item, index) => {
          const testo =
            findByShortname(item.fields, 'testo')?.content?.value ?? '';
          const immagine =
            findByShortname(item.fields, 'immagine')?.content?.value?.url ?? '';

          return (
            <ColophonContent
              key={`item-${index}`}
              image={immagine}
              testo={testo}
            />
          );
        })}
        {testo && <ColophonContent testo={testo} />}
      </ElementsWrapper>
    </div>
  );
};

export const ColophonBlock = ({ fields }) => {
  const label =
    findByShortname(fields, 'titolo-etichetta')?.content?.value ?? '';
  const cols = findByShortname(fields, 'n-colonne')?.content?.value ?? '1';
  const items = findByShortname(fields, 'elementi')?.content?.items ?? [];
  const props = { label, cols: parseInt(cols), items };

  return <ColophonSection {...props} />;
};
