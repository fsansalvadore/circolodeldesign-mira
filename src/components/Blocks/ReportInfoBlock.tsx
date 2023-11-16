import { findByShortname } from '../../utils/common';
import tw from 'twin.macro';
import {
  Button,
  Link,
  HighlightTitleLabel,
  RichText,
  Paragraph,
} from '../Base';
import parse from 'html-react-parser';
import { slateToHtml } from '@slate-serializers/html';
import { ColophonSection } from './ColophonBlock';
import ReportCard from './ReportCard';

const Wrapper = tw.div`py-4 lg:py-16`;

export const ReportInfoBlock = ({ fields }) => {
  const title = findByShortname(fields, 'titolo')?.content?.value ?? '';
  const subtitle = findByShortname(fields, 'sottotitolo')?.content?.value ?? '';
  const descrizione =
    findByShortname(fields, 'descrizione')?.content?.value ?? '';
  const colophonSections =
    findByShortname(fields, 'colophon')?.content?.items ?? [];
  const reports = findByShortname(fields, 'reports')?.content?.items ?? [];
  const ctaLink = findByShortname(fields, 'link')?.content?.value ?? '';
  const ctaText =
    findByShortname(fields, 'testo-cta')?.content?.value ?? 'Scopri di più';

  return (
    <Wrapper>
      <div tw="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
        <div>
          {!!title && <h1 tw="text-3xl lg:text-5xl mb-2">{title}</h1>}
          {!!subtitle && <HighlightTitleLabel>{subtitle}</HighlightTitleLabel>}
          {!!descrizione && (
            <Paragraph tw="mt-4 lg:mt-8">
              {typeof descrizione === 'string'
                ? parse(descrizione)
                : parse(slateToHtml(descrizione))}
            </Paragraph>
          )}
          {!!ctaLink && (
            <div tw="my-4 lg:mt-8">
              <Button as={Link} href={ctaLink} target="_blank" size="big">
                {ctaText}
              </Button>
            </div>
          )}
          <div tw="mt-6 lg:mt-10">
            {reports.map((report, index) => (
              <ReportCard key={`report-${index}`} report={report} />
            ))}
          </div>
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
