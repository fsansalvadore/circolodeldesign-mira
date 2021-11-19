import { CmsProvider, UiduProvider } from '@uidu/api.js/react';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import NextHead from 'next/head';
import GlobalStyles from '../components/GlobalStyles';
import DefaultPage from '../layouts/DefaultPage';
import MaintenancePage from '../layouts/MaintenanceLayout';

const defaultSeo: DefaultSeoProps = {
  title: undefined,
  titleTemplate: '%s | Example',
  defaultTitle: 'Example',
  description: 'Example',
  twitter: {
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    // images: [{ url: "/example.png" }],
  },
};

const App = ({ Component, pageProps }) => {
  if (!process.env.NEXT_PUBLIC_API_ENDPOINT)
    return (
      <>
        <GlobalStyles />
        <Component />
      </>
    );

  return (
    <UiduProvider endpoint={process.env.NEXT_PUBLIC_API_ENDPOINT}>
      <CmsProvider projectId={process.env.NEXT_PUBLIC_PROJECT_ID}>
        <DefaultSeo {...defaultSeo} />
        <NextHead>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
        </NextHead>
        {pageProps.isInMaintenanceMode ? (
          <MaintenancePage>
            <GlobalStyles />
            <Component {...pageProps} />
          </MaintenancePage>
        ) : (
          <DefaultPage>
            <GlobalStyles />
            {pageProps ? <Component {...pageProps} /> : <Component />}
          </DefaultPage>
        )}
      </CmsProvider>
    </UiduProvider>
  );
};

export default App;
