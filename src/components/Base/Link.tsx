import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import tw from 'twin.macro';

interface Props extends LinkProps {
  href: string;
  target?: string;
  children?: any
}

const StyledLink = tw.a`hover:no-underline`;

export const Link = ({ href, target, children, ...rest }: Props) => {
  const isInternalLink =
    !href?.startsWith('http') &&
    !href?.startsWith('mailto:') &&
    !href?.startsWith('tel:');

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref tw="hover:no-underline" target={target || '_self'} {...rest}>
        {children}
      </NextLink>
    );
  }

  return (
    <StyledLink
      href={href}
      target={target || '_self'}
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </StyledLink>
  );
};
