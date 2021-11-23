import { findByShortname } from '../../utils/common';
import tw from 'twin.macro';
import { HighlightTitleLabel, Paragraph, RichText } from '../Base';
import parse from 'html-react-parser';

const Wrapper = tw.div`py-4 lg:py-16`;

export const ReportInfoBlock = ({ fields }) => {
  const title = findByShortname(fields, 'titolo')?.content?.value ?? '';
  const subtitle = findByShortname(fields, 'sottotitolo')?.content?.value ?? '';
  const descrizione =
    findByShortname(fields, 'descrizione')?.content?.value ?? '';
  const collaboratori =
    findByShortname(fields, 'collaboratori')?.content?.items ?? [];

  return (
    <Wrapper>
      {!!title && (
        <h1 tw="text-3xl lg:text-5xl mb-2 lg:max-width[50%]">{title}</h1>
      )}
      <div tw="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-40">
        <div>
          {!!subtitle && <HighlightTitleLabel>{subtitle}</HighlightTitleLabel>}
          {!!descrizione && (
            <RichText tw="text-base lg:text-xl font-light">
              {parse(descrizione)}
            </RichText>
          )}
        </div>
        <div>
          <HighlightTitleLabel as="h3">Collaboratori</HighlightTitleLabel>
          <div tw="grid grid-cols-1 gap-4 lg:(grid-cols-2)">
            {collaboratori.map((collaboratore, index) => {
              const name =
                findByShortname(collaboratore.fields, 'nome')?.content?.value ??
                '';
              const role =
                findByShortname(collaboratore.fields, 'ruolo')?.content
                  ?.value ?? '';
              return (
                <div tw="text-base lg:text-lg" key={`collab-${index}-${name}`}>
                  <h4>{name}</h4>
                  <span tw="font-light">{role}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
