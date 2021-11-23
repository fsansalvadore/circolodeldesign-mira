import 'twin.macro';
import { MaxWidthContent } from '../Base';

export const Footer = ({ footer = null }) => {
  return (
    <footer tw="py-5 lg:py-10 border-t border-t-white mt-4 lg:mt-8">
      <MaxWidthContent>
        <p>Footer</p>
      </MaxWidthContent>
    </footer>
  );
};
