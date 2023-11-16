import { findByShortname } from '../../utils/common';
import { Paragraph, Button, Link } from '../Base';
import 'twin.macro';
import parse from 'html-react-parser';

export const CtaParagraphBlock = ({ fields }) => {
  const title = findByShortname(fields, 'titolo')?.content?.value ?? '';
  const content = findByShortname(fields, 'paragrafo')?.content?.value ?? '';
  const ctaLink = findByShortname(fields, 'link-cta')?.content?.value ?? '';
  const ctaText =
    findByShortname(fields, 'testo-cta')?.content?.value ?? 'Scopri di più';

  return (
    <div tw="flex flex-col space-y-3 lg:space-y-8 lg:max-w-[50%] my-4 lg:my-8">
      {!!title && <h2 tw="text-4xl lg:text-6xl">{title}</h2>}
      {!!content && <Paragraph>{parse(content)}</Paragraph>}
      {!!ctaLink && (
        <div tw="mt-4 lg:mt-8">
          <Button as={Link} href={ctaLink} size="big">
            {ctaText}
          </Button>
        </div>
      )}
    </div>
  );
};
