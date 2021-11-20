import 'twin.macro';
import { MaxWidthContent } from '../Base';

export const Footer = ({ footer = null }) => {
  return (
    <footer tw="py-3 lg:py-6">
      <MaxWidthContent>
        <p>Footer</p>
      </MaxWidthContent>
    </footer>
  );
};
