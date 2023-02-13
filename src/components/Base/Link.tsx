import React from 'react';
import NextLink from 'next/link';
import tw from 'twin.macro';

interface Props {
  href: string;
  target?: string;
}

const StyledLink = tw.a`hover:no-underline`;

export const Link: React.FC<Props> = ({ href, target, children, ...rest }) => {
  const isInternalLink =
    !href?.startsWith('http') &&
    !href?.startsWith('mailto:') &&
    !href?.startsWith('tel:');

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <StyledLink target={target || '_self'} {...rest}>
          {children}
        </StyledLink>
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
