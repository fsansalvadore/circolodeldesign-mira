import { CmsProvider, UiduProvider } from '@uidu/api.js/react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import NextHead from 'next/head';
import { useState } from 'react';
import { CookieBanner } from '../components/Base';
import { Footer } from '../components/Blocks';
import GlobalStyles from '../components/GlobalStyles';
import MaintenancePage from '../layouts/MaintenanceLayout';
import TransitionLayout from '../layouts/TransitionLayout';
import { handleColorBySlug } from '../utils/common';

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
    // images: [{ url: '/Mira_thumbnail.jpg' }],
  },
};

const App = ({ Component, pageProps, router }) => {
  const [colorVariant, setColorVariant] = useState(
    handleColorBySlug(router.asPath) ?? 'blue',
  );

  if (!process.env.NEXT_PUBLIC_API_ENDPOINT)
    return (
      <>
        <GlobalStyles />
        <Component />
      </>
    );

  console.log(
    'process.env.NEXT_PUBLIC_API_ENDPOINT',
    process.env.NEXT_PUBLIC_API_ENDPOINT,
  );

  return (
    <UiduProvider endpoint={process.env.NEXT_PUBLIC_API_ENDPOINT}>
      <CmsProvider projectId={process.env.NEXT_PUBLIC_PROJECT_ID}>
        <DefaultSeo {...defaultSeo} />
        <NextHead>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </NextHead>
        <GlobalStyles />
        <CookieBanner />
        {(pageProps.isInMaintenanceMode &&
          process.env.NODE_ENV !== 'development') ||
        !pageProps.page ? (
          <MaintenancePage>
            <Component {...pageProps} />
          </MaintenancePage>
        ) : (
          <>
            {/* {!!pageProps.menu && (
              <MainNavigation
                menu={pageProps.menu}
                colorVariant={colorVariant}
              />
            )} */}
            <AnimatePresence
              exitBeforeEnter
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <TransitionLayout
                footer={() =>
                  pageProps.footer && (
                    <Footer
                      footer={pageProps.footer}
                      colorVariant={colorVariant}
                    />
                  )
                }
                menu={pageProps.menu}
                page={pageProps.page}
                colorVariant={colorVariant}
                setColorVariant={setColorVariant}
                key={router.asPath}
              >
                <Component {...pageProps} />
              </TransitionLayout>
            </AnimatePresence>
          </>
        )}
      </CmsProvider>
    </UiduProvider>
  );
};

export default App;
