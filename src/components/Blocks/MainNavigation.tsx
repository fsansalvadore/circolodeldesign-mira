import { ChevronRightIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import tw, { css, styled } from 'twin.macro';
import { data as mainNavigation } from '../../data/mainNavigation.data';
import { findByShortname } from '../../utils/common';
import { Link, MaxWidthContent } from '../Base';

const SubMenuWrapper = styled.div`
  ${tw`absolute left-0 flex flex-col invisible space-y-5 transform translate-y-10 opacity-0 top-40`}
  transition: visibility 100ms ease, opacity 100ms, transform 100ms ease;
`;
const SubMenuItem = styled(Link)<{ $isActive?: boolean }>`
  ${tw`w-full p-6 font-bold text-white bg-gray-400 text-base md:text-base hover:bg-primary whitespace-nowrap`}

  ${({ $isActive }) => $isActive && tw`bg-primary`}
`;
const NavWrapper = tw.div`w-full h-60 lg:h-10 fixed left-0 right-0 top-0 z-50 flex justify-center bg-white shadow-md`;
const NavContent = tw(
  MaxWidthContent,
)`w-full flex items-center justify-between`;
const DesktopNavWrapper = tw.div`hidden lg:flex items-center`;
const MobileNavWrapper = tw.div`flex lg:hidden items-center`;
const NavItems = tw.nav`flex items-center lg:space-x-12 xl:space-x-20`;
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
const MobileSubMenuItem = tw.div`w-full flex flex-col border-b border-gray-200`;
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
  ${tw`relative w-full flex-grow items-center py-10 md:py-20 font-bold lg:(w-auto py-10 border-b-2 border-transparent) hover:text-primary`}

  ${({ $isActive }) => $isActive && tw`text-primary! lg:border-primary`}

  &:hover {
    ${SubMenuWrapper} {
      ${tw`visible transform translate-y-0 opacity-100`}
    }
  }
`;
const MobileMenuButton = tw.button`p-8 flex items-center justify-center rounded`;
const MobileMenuWrapper = tw.div`fixed z-50 bottom-0 top-60 py-10 md:py-20 w-screen height[100vh - 60px] flex flex-col bg-white text-black`;

export const MainNavigation = ({ menu }) => {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [subMenuIsOpen, setSubMenuIsOpen] = useState<null | string>(null);
  const { width } = useWindowSize();
  const brandLogo = findByShortname(mainNavigation.blocks, 'brand-logo');

  useEffect(() => {
    if (width >= 1024) setMenuIsOpen(false);
  }, [width]);

  useEffect(() => {
    router.events.on('routeChangeComplete', () => setMenuIsOpen(false));

    return () => {
      router.events.off('routeChangeStart', () => setMenuIsOpen(false));
    };
  }, [router.events]);

  if (!menu) return <div>Loading...</div>;

  const { blocks: menuItems } = menu;

  return (
    <>
      <NavWrapper>
        <NavContent>
          <div tw="min-width[150px]">
            <Link href="/">
              <Image
                width={100}
                height={50}
                src={findByShortname(brandLogo.fields, 'logo').content.src}
                alt={findByShortname(brandLogo.fields, 'logo').content.altText}
                tw="w-auto h-16"
                placeholder="blur"
                blurDataURL={'/blur.png'}
                priority
              />
            </Link>
          </div>
          <DesktopNavWrapper>
            <NavItems>
              {!!menuItems &&
                menuItems
                  .filter(
                    (item) =>
                      !findByShortname(item.fields, 'non-mostrare-nel-menu')
                        ?.content?.value,
                  )
                  ?.map((navItem) => {
                    const subMenuItems =
                      findByShortname(navItem.fields, 'menu-secondario')
                        ?.content?.items ?? [];
                    const label =
                      findByShortname(navItem.fields, 'titolo')?.content
                        ?.value ?? '';
                    const slug =
                      findByShortname(navItem.fields, 'slug')?.content?.value ??
                      '';

                    return (
                      <NavLink
                        href={slug}
                        key={`main-${slug}`}
                        $isActive={router.asPath === slug}
                      >
                        {label}
                        {!!subMenuItems && (
                          <SubMenuWrapper>
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
                                  key={`second-sub-${subMenuItem.shortname}-${index}`}
                                  href={`${slug}/${subMenuSlug}`}
                                  $isActive={router.asPath.includes(
                                    subMenuSlug,
                                  )}
                                >
                                  {subMenuLabel}
                                </SubMenuItem>
                              );
                            })}
                          </SubMenuWrapper>
                        )}
                      </NavLink>
                    );
                  })}
            </NavItems>
          </DesktopNavWrapper>
          <MobileNavWrapper>
            <MobileMenuButton onClick={() => setMenuIsOpen((prev) => !prev)}>
              {menuIsOpen ? (
                <XIcon tw="w-24 h-24 text-black" />
              ) : (
                <MenuIcon tw="w-24 h-24  text-black" />
              )}
            </MobileMenuButton>
          </MobileNavWrapper>
        </NavContent>
      </NavWrapper>
      {menuIsOpen && (
        <MobileMenuWrapper>
          <MaxWidthContent tw="flex flex-col">
            {!!menuItems &&
              menuItems
                ?.filter(
                  (item) =>
                    !findByShortname(item.fields, 'non-mostrare-nel-menu')
                      ?.content?.value,
                )
                ?.map((navItem, i) => {
                  const subMenuItems =
                    findByShortname(navItem.fields, 'menu-secondario')?.content
                      ?.items ?? null;
                  const label =
                    findByShortname(navItem.fields, 'titolo')?.content?.value ??
                    '';
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
                              <ChevronRightIcon tw="w-24 h-24  text-black" />
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
    </>
  );
};
