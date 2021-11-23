import { findByShortname } from '../../utils/common';
import { Paragraph, Button, Link } from '../Base';
import 'twin.macro';
import parse from 'html-react-parser';

export const AboutBlock = ({ fields }) => {
  const content =
    findByShortname(fields, 'paragrafo-introduttivo')?.content?.value ?? '';
  const link = findByShortname(fields, 'link')?.content?.value ?? '';

  return (
    <div>
      {!!content && <Paragraph>{parse(content)}</Paragraph>}
      {!!link && (
        <div tw="mt-4 lg:mt-8">
          <Button as={Link} href={link} target="_blank">
            Dowload PDF
          </Button>
        </div>
      )}
    </div>
  );
};
