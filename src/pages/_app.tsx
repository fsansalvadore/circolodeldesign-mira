import { CmsProvider, UiduProvider } from '@uidu/api.js/react';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import NextHead from 'next/head';
import GlobalStyles from '../components/GlobalStyles';
import MaintenancePage from '../layouts/MaintenanceLayout';
import TransitionLayout from '../layouts/TransitionLayout';
import { AnimatePresence } from 'framer-motion';
import { Footer, MainNavigation } from '../components/Blocks';
import { useState } from 'react';
import { contentVariant, colorVariants } from '../utils/motion';

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
  const [colorMode, setColorMode] = useState('dark');
  const [colorVariant, setColorVariant] = useState(colorVariants.blue);

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
        {(pageProps.isInMaintenanceMode &&
          process.env.NODE_ENV !== 'development') ||
        !pageProps.page ? (
          <MaintenancePage>
            <Component {...pageProps} />
          </MaintenancePage>
        ) : (
          <>
            {!!pageProps.menu && (
              <MainNavigation
                menu={pageProps.menu}
                colorVariant={colorVariant}
              />
            )}
            <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
              <TransitionLayout
                footer={() =>
                  pageProps.footer && <Footer footer={pageProps.footer} />
                }
                page={pageProps.page}
                setColorMode={setColorMode}
                colorVariant={colorVariant}
                setColorVariant={setColorVariant}
              >
                <Component {...pageProps} key={pageProps.page?.slug} />
              </TransitionLayout>
            </AnimatePresence>
          </>
        )}
      </CmsProvider>
    </UiduProvider>
  );
};

export default App;
