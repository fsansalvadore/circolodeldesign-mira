import { findByShortname } from '../../utils/common';
import tw from 'twin.macro';
import { HighlightTitleLabel, RichText } from '../Base';
import parse from 'html-react-parser';
import { ColophonSection } from './ColophonBlock';
import Image from 'next/image';

const Wrapper = tw.div`py-4 lg:py-16`;

export const ReportInfoBlock = ({ fields }) => {
  const title = findByShortname(fields, 'titolo')?.content?.value ?? '';
  const subtitle = findByShortname(fields, 'sottotitolo')?.content?.value ?? '';
  const descrizione =
    findByShortname(fields, 'descrizione')?.content?.value ?? '';
  const colophonSections =
    findByShortname(fields, 'colophon')?.content?.items ?? [];

  return (
    <Wrapper>
      <div tw="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-40">
        <div>
          {!!title && <h1 tw="text-3xl lg:text-5xl mb-2">{title}</h1>}
          {!!subtitle && <HighlightTitleLabel>{subtitle}</HighlightTitleLabel>}
          {!!descrizione && (
            <RichText tw="text-base lg:text-xl font-light">
              {parse(descrizione)}
            </RichText>
          )}
        </div>
        <div>
          <div tw="flex flex-col space-y-4">
            {colophonSections.map((collaboratore, index) => {
              const titolo =
                findByShortname(collaboratore.fields, 'titolo-etichetta')
                  ?.content?.value ?? '';
              const testo =
                findByShortname(collaboratore.fields, 'testo')?.content
                  ?.value ?? '';
              const immagine =
                findByShortname(collaboratore.fields, 'immagine')?.content
                  ?.value?.url ?? '';

              return (
                <ColophonSection
                  key={`colophon-${index}`}
                  label={titolo}
                  testo={testo}
                  immagine={immagine}
                  tw="mb-4"
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
