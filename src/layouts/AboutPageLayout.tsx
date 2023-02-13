import tw, { styled } from 'twin.macro';

const Layout = styled.div`
  ${tw`grid grid-cols-1 gap-4 mt-10 md:gap-x-20 lg:(mt-20 grid-cols-2 grid-template-columns[4fr 3fr]! gap-x-32)`}

  & > *:not(:first-child) {
    ${tw`lg:col-start-2`};
  }

  & > *:first-child {
    ${tw`lg:grid-row-end[span 15] mb-4 lg:mb-0`};
  }
`;

const AboutPageLayout = ({ children }) => <Layout>{children}</Layout>;

export default AboutPageLayout;
