import tw, { styled } from 'twin.macro';

const Layout = styled.div`
  ${tw`grid grid-cols-1 gap-4 mt-20 lg:(mt-40 grid-cols-2 gap-8)`}

  & > *:not(:first-child) {
    ${tw`lg:col-start-2`};
  }

  & > *:first-child {
    ${tw`lg:grid-row-end[span 4] mb-12 lg:mb-0`};
  }
`;

const AboutPageLayout = ({ children }) => <Layout>{children}</Layout>;

export default AboutPageLayout;
