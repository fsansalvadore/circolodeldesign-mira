import { findByShortname } from '../../utils/common';
import { Paragraph, Button, Link } from '../Base';
import 'twin.macro';
import parse from 'html-react-parser';
import { ColophonSection } from './ColophonBlock';

export const AboutBlock = ({ fields }) => {
  const content =
    findByShortname(fields, 'paragrafo-introduttivo')?.content?.value ?? '';
  const link = findByShortname(fields, 'link')?.content?.value ?? '';
  const testoCta = findByShortname(fields, 'testo-cta')?.content?.value ?? '';
  const colophonSections =
    findByShortname(fields, 'colophon-sinistra')?.content?.items ?? [];

  return (
    <div tw="flex flex-col">
      {!!content && <Paragraph>{parse(content)}</Paragraph>}
      {!!link && (
        <div tw="mt-4 lg:mt-8">
          <Button as={Link} href={link} target="_blank" size="big">
            {testoCta}
          </Button>
        </div>
      )}
      {!!colophonSections && (
        <div tw="mt-14 lg:mt-20 block">
          {colophonSections?.map((section, index) => {
            const label =
              findByShortname(section.fields, 'titolo-etichetta')?.content
                ?.value ?? '';
            const content =
              findByShortname(section.fields, 'testo')?.content?.value ?? '';

            return (
              <ColophonSection
                key={`col-${index}`}
                cols={1}
                label={label}
                testo={content}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
