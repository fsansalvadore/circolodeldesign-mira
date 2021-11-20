import { CmsProvider, UiduProvider } from '@uidu/api.js/react';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import NextHead from 'next/head';
import GlobalStyles from '../components/GlobalStyles';
import MaintenancePage from '../layouts/MaintenanceLayout';
import TransitionLayout from '../layouts/TransitionLayout';
import { AnimatePresence } from 'framer-motion';
import { Footer, MainNavigation } from '../components/Blocks';

const defaultSeo: DefaultSeoProps = {
  title: undefined,
  titleTemplate: '%s | Mira',
  defaultTitle: 'Mira',
  description: 'Mira',
  twitter: {
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    // images: [{ url: "/mira.png" }],
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
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap"
            rel="stylesheet"
          />
        </NextHead>
        <GlobalStyles />
        {pageProps.isInMaintenanceMode &&
        process.env.NODE_ENV !== 'development' ? (
          <MaintenancePage>
            <Component {...pageProps} />
          </MaintenancePage>
        ) : (
          <>
            <MainNavigation menu={pageProps.menu} />
            <AnimatePresence
              exitBeforeEnter
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <TransitionLayout>
                <Component {...pageProps} key={pageProps.page.slug} />
              </TransitionLayout>
            </AnimatePresence>
            <Footer footer={pageProps.footer} />
          </>
        )}
      </CmsProvider>
    </UiduProvider>
  );
};

export default App;
