import { ChevronRightIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import tw, { css, styled } from 'twin.macro';
import { findByShortname } from '../../utils/common';
import { Link, MaxWidthContent } from '../Base';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { AnimatePresence, motion } from 'framer-motion';
import { colorVariants, transitions } from '../../utils/motion';
import lottie from 'lottie-web';
import MiraBlack from '../../assets/animations/mira-black.json';
import MiraWhite from '../../assets/animations/mira-white.json';

const SubMenuWrapper = styled.div`
  ${tw`absolute left-0 flex flex-col invisible space-y-5 transform translate-y-10 opacity-0 top-0`}
  transition: visibility 100ms ease, opacity 100ms, transform 100ms ease;
`;
const SubMenuItem = styled(Link)<{ $isActive?: boolean }>`
  ${tw`w-full p-6 font-bold text-white bg-gray-400 text-base hover:bg-miraBlue whitespace-nowrap`}

  ${({ $isActive }) => $isActive && tw`bg-miraBlue`}
`;
const NavWrapper = styled(motion.div)<{ onWhite?: boolean; bgColor?: string }>`
  ${tw`w-full h-20 fixed left-0 right-0 top-0 z-100 flex justify-center bg-transparent before:(content[""] absolute left-0 right-0 top-0 bottom-0 w-full height[150%])`}
  transition: background 1s ease;

  ${({ onWhite, bgColor }) =>
    !onWhite &&
    css`
      &:before {
        background: linear-gradient(
          to top,
          rgba(255, 255, 255, 0) 0%,
          ${bgColor} 100%
        );
      }
    `}
`;
const NavContent = tw(MaxWidthContent)`flex items-center justify-between`;
const DesktopNavWrapper = tw.div`hidden lg:flex items-center`;
const MobileNavWrapper = tw.div`flex items-center`;
const NavItems = tw.nav`flex items-center text-sm lg:space-x-12 xl:space-x-20`;
const MobileSubMenuWrapper = styled.div`
  ${tw`flex flex-col space-y-5`}
`;
const MobileSubmenuButton = styled.button`
  ${tw`flex items-center justify-center px-8 rounded`}

  svg {
    ${tw`transform rotate-0`}
  }
`;
const AccordionHeader = tw.button`w-full flex justify-between items-center text-left`;
const AccordionBody = styled.div`hidden`;
const MobileSubMenuItem = tw.div`w-full text-lg md:text-3xl flex flex-col`;
const Accordion = styled.div<{ $isSubmenuOpen?: boolean }>`
  ${tw`flex flex-col w-full`}

  ${({ $isSubmenuOpen }) =>
    $isSubmenuOpen &&
    css`
      ${AccordionBody} {
        ${tw`block`}
      }
      ${MobileSubmenuButton} svg {
        ${tw`transform rotate-90`}
      }
    `}
`;

const NavLink = styled(Link)<{ $isActive?: boolean; $isSubmenuOpen?: boolean }>`
  ${tw`relative w-full flex-grow items-center py-2 md:py-8 font-bold lg:(w-auto py-4 border-b-2 border-transparent) hover:underline`}

  ${({ $isActive }) => $isActive && tw`underline!`}

  &:hover {
    ${SubMenuWrapper} {
      ${tw`visible transform translate-y-0 opacity-100`}
    }
  }
`;
const MobileMenuButton = styled.button<{ mode: string }>`
  ${tw`p-1 lg:p-4 flex items-center justify-center rounded transition-colors transform`}

  ${({ mode }) => css`
    color: ${mode};
  `}
`;
const MobileMenuWrapper = tw(
  motion.div,
)`fixed z-50 bottom-0 top-0 py-4 md:py-8 w-screen height[100vh - 60px] flex flex-col bg-white text-black`;

const LottieLogo = styled.div`
  ${tw`h-10! w-auto -ml-3 lg:w-60 lg:h-60 z-0 max-height[80px]! max-width[200px]! lg:max-width[500px]! height[auto]! min-height[30px]!`}
`;

export const MainNavigation = ({ menu, colorVariant, ...rest }) => {
  const router = useRouter();
  const menuRef = useRef(null);
  const lottieRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [subMenuIsOpen, setSubMenuIsOpen] = useState<null | string>(null);

  useEffect(() => {
    lottie.destroy('logo');
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      animationData:
        menuIsOpen || colorVariant.mode === 'light' ? MiraBlack : MiraWhite,
      name: 'logo',
    });
  }, [menuIsOpen, colorVariant]);

  useEffect(() => {
    router.events.on('routeChangeComplete', () => setMenuIsOpen(false));

    return () => {
      router.events.off('routeChangeStart', () => setMenuIsOpen(false));
    };
  }, [router, router.events]);

  // Block scroll if menu is open
  useEffect(() => {
    if (!menuRef?.current) return;
    if (menuIsOpen) disableBodyScroll(menuRef.current);
    else enableBodyScroll(menuRef.current);
  }, [menuIsOpen]);

  if (!menu) return;
  const { blocks: menuItems } = menu;

  return (
    <>
      <NavWrapper
        onWhite={menuIsOpen || colorVariant.mode === 'light'}
        bgColor={
          menuIsOpen
            ? 'rgba(255, 255, 255, 1)'
            : colorVariant.variant.backgroundColor
        }
        {...rest}
      >
        <NavContent>
          <div tw="min-width[150px]">
            <Link href="/" tw="">
              <LottieLogo
                as={motion.div}
                ref={lottieRef}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
              />
            </Link>
          </div>
          <MobileNavWrapper>
            <MobileMenuButton
              onClick={() => setMenuIsOpen((prev) => !prev)}
              mode={
                menuIsOpen ? colorVariants.white : colorVariant.variant.color
              }
            >
              {menuIsOpen ? (
                <XIcon tw="w-10 h-10" />
              ) : (
                <MenuIcon tw="w-10 h-10" />
              )}
            </MobileMenuButton>
          </MobileNavWrapper>
        </NavContent>
      </NavWrapper>
      <AnimatePresence>
        {menuIsOpen && (
          <MobileMenuWrapper
            variants={colorVariants}
            ref={menuRef}
            initial={{
              opacity: 0,
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              transition: {
                ...transitions.background,
                staggerChildren: 0.1,
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              filter: 'blur(10px)',
              transition: { ...transitions.background, duration: 0.3 },
            }}
          >
            <MaxWidthContent
              as={motion.div}
              initial={{
                y: -10,
              }}
              animate={{
                y: 0,
                transition: { duration: 0.4 },
              }}
              exit={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              tw="flex flex-col h-full items-center justify-center text-center"
            >
              {!!menuItems &&
                menuItems
                  ?.filter(
                    (item) =>
                      !findByShortname(item.fields, 'non-mostrare-nel-menu')
                        ?.content?.value,
                  )
                  ?.map((navItem, i) => {
                    const subMenuItems =
                      findByShortname(navItem.fields, 'menu-secondario')
                        ?.content?.items ?? null;
                    const label =
                      findByShortname(navItem.fields, 'titolo')?.content
                        ?.value ?? '';
                    const slug =
                      findByShortname(navItem.fields, 'slug')?.content?.value ??
                      '';

                    if (!!subMenuItems?.length) {
                      return (
                        <MobileSubMenuItem key={`mobile-${slug}`}>
                          <Accordion>
                            <AccordionHeader>
                              <NavLink
                                href={slug}
                                key={slug}
                                $isActive={router.asPath === slug}
                                $isSubmenuOpen={subMenuIsOpen === slug}
                              >
                                {label}
                              </NavLink>
                              <MobileSubmenuButton
                                onClick={() =>
                                  setSubMenuIsOpen((prev) =>
                                    prev === slug ? null : slug,
                                  )
                                }
                              >
                                <ChevronRightIcon tw="w-12 h-12  text-black" />
                              </MobileSubmenuButton>
                            </AccordionHeader>
                            {subMenuIsOpen === slug && (
                              <AccordionBody>
                                <MobileSubMenuWrapper>
                                  {subMenuItems?.map((subMenuItem, index) => {
                                    const subMenuSlug = findByShortname(
                                      subMenuItem.fields,
                                      'slug',
                                    )?.content?.value;
                                    const subMenuLabel = findByShortname(
                                      subMenuItem.fields,
                                      'titolo',
                                    )?.content?.value;

                                    return (
                                      <SubMenuItem
                                        key={`second-mobile-${subMenuItem.shortname}-${index}`}
                                        href={`/${slug}/${subMenuSlug}`}
                                        $isActive={router.asPath.includes(
                                          subMenuSlug,
                                        )}
                                      >
                                        {subMenuLabel}
                                      </SubMenuItem>
                                    );
                                  })}
                                </MobileSubMenuWrapper>
                              </AccordionBody>
                            )}
                          </Accordion>
                        </MobileSubMenuItem>
                      );
                    } else {
                      return (
                        <MobileSubMenuItem>
                          <NavLink
                            href={slug}
                            key={slug}
                            $isActive={router.asPath === slug}
                          >
                            {label}
                          </NavLink>
                        </MobileSubMenuItem>
                      );
                    }
                  })}
            </MaxWidthContent>
          </MobileMenuWrapper>
        )}
      </AnimatePresence>
    </>
  );
};
