import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import NextHead from 'next/head';
import CookieConsent, { Cookies } from 'react-cookie-consent';

const Title = tw.p`font-bold mb-3 text-xl lg:text-3xl`;

const Paragraph = tw.p``;

const StyledLink = styled.a`
  ${tw`underline hover:underline`}
`;

const CookieWrapper = styled.div`
  ${tw`fixed z-100 w-full bottom-20 left-10 lg:left-auto right-10 text-white p-20 lg:p-40`}
`;

const Wrapper = styled.div`
  .CookieConsent {
    ${tw`right-0! mx-auto! items-center! w-screen! bottom-0! left-0!`}
  }
`;

export const CookieBanner: React.FC = () => {
  const [hideBanner, setHideBanner] = useState<boolean>(false);
  const [accepted, setAccepted] = useState<boolean>(false);
  const [unmount, setUnmount] = useState<boolean>(false);

  // const FB_PIXEL_ID = '';

  const acceptCookie = () => {
    setAccepted(true);
    Cookies.set('cookie-consent', 'true', { expires: 150 });
  };

  const rejectCookies = () => {
    setAccepted(false);
    Cookies.remove('cookie-consent');
  };

  useEffect(() => {
    setUnmount(!!Cookies.get('cookie-consent'));
  }, []);

  useEffect(() => {
    if (accepted) setHideBanner(true);
  }, [accepted]);

  if (unmount || hideBanner) {
    return (
      <NextHead>
        <>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
                  page_path: window.location.pathname,
                  });
                  `,
            }}
          />
        </>
      </NextHead>
    );
  }

  return (
    <Wrapper>
      <CookieWrapper>
        <CookieConsent
          buttonText="Accetta"
          cookieName="tagManager"
          debug
          buttonStyle={{
            color: '#1A7ADE',
            fontSize: '16px',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '60px',
            background: '#ffffff',
          }}
          style={{
            display: 'flex',
            right: '0',
            margin: '0',
            left: '0',
            fontWeight: 'bold',
            position: 'fixed',
            background: '#1A7ADE',
            boxShadow: '0 0 32px rgba(0, 0, 0, 0.25)',
            padding: '16px',
            height: 'auto',
          }}
          contentStyle={{
            height: 'auto',
            flex: 'auto',
          }}
          expires={150}
          hideOnAccept
          onAccept={acceptCookie}
          enableDeclineButton
          flipButtons
          declineButtonText="Rifiuta"
          declineButtonStyle={{
            color: '#1A7ADE',
            fontSize: '16px',
            padding: '10px 20px',
            borderRadius: '60px',
            background: '#fff',
            marginLeft: 0,
          }}
          onDecline={rejectCookies}
        >
          <Title>Informativa sulla Privacy</Title>
          <Paragraph>
            Su questo sito utilizziamo cookie tecnici necessari alla navigazione
            o utili a migliorare i nostri servizi e ottimizzare
            l&apos;esperienza utente. Per saperne di più, vai alla{' '}
            <StyledLink href="/privacy">Privacy Policy</StyledLink>.
          </Paragraph>
        </CookieConsent>
      </CookieWrapper>
    </Wrapper>
  );
};
