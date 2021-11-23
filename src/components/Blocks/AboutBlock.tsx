import { findByShortname } from '../../utils/common';
import { Paragraph, Button, Link } from '../Base';
import parse from 'html-react-parser';
import 'twin.macro';

export const AboutBlock = ({ fields }) => {
  const content =
    findByShortname(fields, 'paragrafo-introduttivo')?.content?.value ?? '';
  const link = findByShortname(fields, 'link')?.content?.value ?? '';

  return (
    <div>
      <Paragraph>{content}</Paragraph>
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
