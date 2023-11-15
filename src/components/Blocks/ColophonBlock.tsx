import tw, { styled } from 'twin.macro';
import { findByShortname } from '../../utils/common';
import { HighlightTitleLabel, RichText } from '../Base';
import parse from 'html-react-parser';
import { slateToHtml } from '@slate-serializers/html';
import Image from 'next/image';

const ElementsWrapper = styled.div<{ cols: number }>`
  ${tw`grid`}

  ${({ cols }) =>
    cols === 1 ? tw`grid-cols-1` : tw`grid-cols-2 gap-4 lg:gap-8`}
`;

const StyledImage = styled(Image)`
  ${tw`relative z-0 !max-h-[50px] !h-[auto] !min-h-[35px]`}

  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;
const GridItem = styled.div`
  ${tw`relative flex items-start self-start col-span-1`}

  > div {
    position: unset !important;
  }
`;

interface ColophonContent {
  testo?: any;
  image?: string;
}

const ColophonContent = ({ testo, image }: ColophonContent) => {
  return (
    <div tw="mb-2">
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
          <RichText>{parse(slateToHtml(testo))}</RichText>
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
  immagine?: string;
}

export const ColophonSection = ({
  label,
  cols = 1,
  items,
  testo,
  immagine,
  ...rest
}: ColophonSectionInterface) => {
  return (
    <div tw="my-0 text-base lg:(text-lg mb-4)" {...rest}>
      {!!label && <HighlightTitleLabel>{label}</HighlightTitleLabel>}
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
        {!!testo && testo !== '<p></p>' && <ColophonContent testo={testo} />}
        {!!immagine && (
          <div>
            <Image
              width="200"
              height={80}
              src={immagine}
              alt=""
              objectFit="contain"
              objectPosition="left"
              placeholder="blur"
              blurDataURL={'/blur.png'}
              priority
            />
          </div>
        )}
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
