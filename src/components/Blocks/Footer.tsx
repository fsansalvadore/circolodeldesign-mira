import tw, { styled } from 'twin.macro';
import { findByShortname } from '../../utils/common';
import { MaxWidthContent, Link } from '../Base';
import { motion } from 'framer-motion';
import lottie from 'lottie-web';
import MiraLogoJson from '../../assets/animations/mira-white.json';
import { useEffect, useRef } from 'react';

const PartnersRow = styled.div`
  ${tw`flex border-b last:border-none`}

  & > div {
    ${tw`p-4 first:pl-0 last:pr-0 border-r last:border-r-0`}
  }
  &:first-child > div {
    ${tw`pt-0 `}
  }
  &:last-child > div {
    ${tw`pb-0 `}
  }
`;

const PartnersWrapper = styled.div`
  ${tw`flex flex-col`}
`;

const LottieLogo = styled.div`
  ${tw`h-10! w-auto -ml-3 lg:w-40 lg:h-20 z-0 max-height[80px]! max-width[200px]! lg:max-width[500px]! height[auto]! min-height[20px]!`}
`;

const partnersSchema = {
  row1: [
    {
      shortname: 'un-progetto-di',
      label: 'Un progetto di',
    },
    {
      shortname: 'partner-scientifici',
      label: 'Partner scientifici',
    },
    {
      shortname: 'in-collaborazione-con',
      label: 'In collaborazione con',
    },
  ],
  row2: [
    {
      shortname: 'un-progetto-di',
      label: 'Un progetto di',
    },
  ],
};

export const Footer = ({ footer = null }) => {
  const logoRef = useRef(null);
  const partners =
    findByShortname(footer.blocks, 'partners-footer')?.fields[0]?.content
      ?.items ?? [];
  const infoBlock = findByShortname(footer.blocks, 'informazioni');
  const socialsBlock = findByShortname(footer.blocks, 'socials');

  useEffect(() => {
    lottie.loadAnimation({
      container: logoRef.current,
      animationData: MiraLogoJson,
    });
  }, []);
  // console.log('footer', footer);
  // const link = findByShortname(footer.fields, 'link')?.content?.list ?? [];
  return (
    <footer tw="py-5 lg:py-10 text-xs border-t border-t-white mt-4 lg:mt-8">
      <MaxWidthContent tw="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-20">
        <div tw="flex-shrink min-width[150px]">
          <Link href="/" tw="">
            <LottieLogo
              as={motion.div}
              initial={{ opacity: 0 }}
              ref={logoRef}
              animate={{
                opacity: 1,
                transition: { delay: 0.8, duration: 0.5 },
              }}
            />
          </Link>
        </div>
        <div tw="flex-grow flex justify-start">
          <PartnersWrapper>
            <PartnersRow>
              {partnersSchema['row1'].map((partner, index) => {
                // const list = findByShortname(footer.fields, 'link')?.content?.list ?? [];

                return (
                  <div key={`partner-${index}`}>
                    <p>{partner.label}</p>
                    {/* <div>{partner}</div> */}
                  </div>
                );
              })}
            </PartnersRow>
            <PartnersRow>
              {partnersSchema['row2'].map((partner, index) => {
                return <div key={`partner-${index}`}>Logo</div>;
              })}
            </PartnersRow>
          </PartnersWrapper>
        </div>
        <div tw="flex-shrink flex flex-col">
          <p>
            Circolo Del Design
            <br />
            Via S. Francesco da Paola 17
            <br />
            10123 Torino
            <br />
            info@circolodeldesign.it | +39 331 432 1195
          </p>
          <div tw="flex space-x-3 mt-4">
            {[1, 2, 3, 4].map((social, index) => {
              <div key={`social-${index}`}>fb</div>;
            })}
          </div>
        </div>
      </MaxWidthContent>
    </footer>
  );
};
