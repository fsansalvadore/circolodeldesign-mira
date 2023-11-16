import tw, { css, styled } from 'twin.macro';
import { findByShortname } from '../../utils/common';
import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import { MaxWidthContent, Link, RichText, SocialIcon } from '../Base';
import lottie from 'lottie-web';
import MiraLogoJson from '../../assets/animations/mira-nocopy.json';
import { useEffect, useRef } from 'react';

const PartnersRow = styled.div`
  ${tw`flex-grow flex flex-col lg:flex-row border-b last:border-none w-full lg:w-auto lg:flex-shrink!`}

  & > div {
    ${tw`py-4 border-b last:border-b-0 lg:(px-4 border-b-0 first:pl-0 last:pr-0 border-r last:border-r-0)`}
  }
  &:first-child > div {
    ${tw`lg:pt-0`}
  }
  &:last-child > div {
    ${tw`lg:pb-0`}
  }
`;

const PartnersWrapper = styled.div`
  ${tw`flex-grow lg:flex-grow-0 flex flex-col w-full lg:w-auto`}
`;

const LottieLogo = styled.div`
  ${tw`h-8! w-24 lg:w-32 lg:h-14 z-0 !max-h-[30px] !max-w-[150px] lg:!max-w-[500px] h-[auto] min-h-[20px]`}
`;

const StyledImage = tw.img`relative z-0 !h-auto !max-h-9 max-w-[100px] w-full !object-contain object-left`;

const ImageWrapper = styled(Link)`
  ${tw`relative flex-shrink! col-span-1 self-start items-center flex justify-start overflow-visible`}
`;
const FooterWrapper = styled.footer<{ inverted?: boolean }>`
  ${tw`pt-5 pb-20 lg:py-10 text-xs border-t border-t-white mt-4 lg:mt-8`}

  ${({ inverted }) => inverted && tw`text-white filter mix-blend-difference`}
`;

const StyledLink = tw(Link)`w-10 h-10 flex items-center justify-center`;

const partnersSchemas = [
  [
    {
      shortname: 'un-progetto-di',
      label: 'Un progetto di',
    },
    {
      shortname: 'partner',
      label: 'Partner',
    },
    {
      shortname: 'partner-scientifici',
      label: 'Partner scientifici',
    },
  ],
  [
    {
      shortname: 'in-collaborazione-con',
      label: 'In collaborazione con',
    },
    {
      shortname: 'con-il-sostegno-di',
      label: 'Con il sostegno di',
    },
  ],
];

export const Footer = ({ footer = null, colorVariant }) => {
  const logoRef = useRef(null);
  const partners = findByShortname(footer.blocks, 'partners-footer');
  const infoBlock = findByShortname(footer.blocks, 'informazioni');
  const infoBlockContent =
    findByShortname(infoBlock.fields, 'testo')?.content?.value ?? '';
  const socialsBlock = findByShortname(footer.blocks, 'socials');
  const socials = findByShortname(socialsBlock.fields, 'lista')?.content
    ?.items ?? [''];

  useEffect(() => {
    if (!lottie) return;

    lottie.loadAnimation({
      container: logoRef.current,
      animationData: MiraLogoJson,
    });

    return () => lottie.destroy();
  }, []);

  return (
    <FooterWrapper inverted={colorVariant.mode === 'light'}>
      <MaxWidthContent tw="flex flex-col max-w-[100vw] space-y-6 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-16">
        <div tw="flex-shrink min-w-[150px]">
          <Link href="/">
            {lottie && (
              <LottieLogo
                as={motion.div}
                initial={{ opacity: 0 }}
                ref={logoRef}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.8, duration: 0.5 },
                }}
              />
            )}
          </Link>
        </div>
        <div tw="flex-grow flex lg:justify-start! lg:items-start">
          <PartnersWrapper>
            {partnersSchemas.map((row, rowIndx) => (
              <PartnersRow key={`row-${rowIndx}`}>
                {row.map((partner, schemaIndx) => {
                  const list =
                    findByShortname(partners.fields, partner.shortname)?.content
                      ?.items ?? [];

                  return (
                    <div
                      key={`partner-${schemaIndx}`}
                      tw="w-full lg:w-auto flex flex-col items-start"
                    >
                      <p tw="mb-2 whitespace-nowrap">{partner.label}</p>
                      {list.length > 1 ? (
                        <div tw="flex space-x-5 justify-start">
                          {list.map((logo, partIndx) => {
                            const image =
                              findByShortname(logo.fields, 'logo')?.content
                                ?.value?.url ?? '';
                            const altText =
                              findByShortname(logo.fields, 'alt-text')?.content
                                ?.value ?? '';
                            const link =
                              findByShortname(logo.fields, 'link')?.content
                                ?.value ?? '';

                            return (
                              <ImageWrapper
                                href={link}
                                target="_blank"
                                key={`partner-${schemaIndx}-${partIndx}-${altText}`}
                              >
                                <StyledImage src={image} alt={altText} />
                              </ImageWrapper>
                            );
                          })}
                        </div>
                      ) : (
                        <div tw="flex justify-start">
                          {list.map((logo, partIndx) => {
                            const image =
                              findByShortname(logo.fields, 'logo')?.content
                                ?.value?.url ?? '';
                            const altText =
                              findByShortname(logo.fields, 'alt-text')?.content
                                ?.value ?? '';
                            const link =
                              findByShortname(logo.fields, 'link')?.content
                                ?.value ?? '';

                            return (
                              <ImageWrapper
                                href={link}
                                target="_blank"
                                key={`partner-${schemaIndx}-${partIndx}-${altText}`}
                              >
                                <StyledImage src={image} alt={altText} />
                              </ImageWrapper>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </PartnersRow>
            ))}
          </PartnersWrapper>
        </div>
        <div tw="flex-shrink flex flex-col lg:justify-between">
          {infoBlockContent && <RichText>{parse(infoBlockContent)}</RichText>}

          <div tw="flex space-x-3 py-2 lg:py-0 mt-4">
            <Link href="/privacy" tw="font-bold">
              Informativa sulla Privacy
            </Link>
          </div>
          <div tw="flex space-x-3 mt-4">
            {socials?.map((social, index) => {
              const name =
                findByShortname(social.fields, 'nome')?.content?.value ?? '';
              const link =
                findByShortname(social.fields, 'link')?.content?.value ?? '';
              if (!link || !link?.length) return null;

              return (
                <StyledLink href={link} target="_blank" key={`social-${index}`}>
                  <SocialIcon name={name} />
                </StyledLink>
              );
            })}
          </div>
        </div>
      </MaxWidthContent>
    </FooterWrapper>
  );
};
