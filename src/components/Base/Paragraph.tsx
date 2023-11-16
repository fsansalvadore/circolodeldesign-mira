import React from 'react';
import tw, { css, styled } from 'twin.macro';
import { useState } from 'react';
import { handleColorBySlug } from '../../utils/common';
import { useRouter } from 'next/router';
import { RichText } from './RichText';
import { colorVariants } from '../../utils/motion';

const StyledParagraph = styled(RichText)<{
  highlightBgColor: string;
  highlightTextColor: string;
}>`
  ${tw`font-light text-xl md:text-2xl lg:text-3xl !leading-[140%]`}

  ${({ highlightBgColor, highlightTextColor }) => css`
    u {
      background: ${highlightBgColor};
      color: ${highlightTextColor};
      padding: 0 4px;
      ${tw`no-underline`}
    }
  `}
`;

export const Paragraph = ({ children, ...rest }) => {
  const router = useRouter();
  const [highlightBgColor] = useState(
    !!router.query?.slug?.length
      ? handleColorBySlug(router.query.slug)?.accentColor
      : colorVariants.blue.color,
  );
  const [highlightTextColor] = useState(
    !!router.query?.slug?.length
      ? handleColorBySlug(router.query.slug)?.variant.backgroundColor
      : colorVariants.blue.backgroundColor,
  );

  return (
    <StyledParagraph
      highlightBgColor={highlightBgColor || 'white'}
      highlightTextColor={highlightTextColor || 'blue'}
      {...rest}
    >
      {children}
    </StyledParagraph>
  );
};
