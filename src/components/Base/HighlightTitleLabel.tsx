import React from 'react';
import tw, { css, styled } from 'twin.macro';
import { useState } from 'react';
import { handleColorBySlug } from '../../utils/common';
import { useRouter } from 'next/router';
import { RichText } from './RichText';
import { colorVariants } from '../../utils/motion';

const Highlight = styled(RichText)<{
  highlightBgColor: string;
  highlightTextColor: string;
}>`
  ${tw`font-bold text-lg lg:text-2xl line-height[140%]! no-underline inline-block w-auto mb-4`}

  ${({ highlightBgColor, highlightTextColor }) => css`
    background: ${highlightBgColor};
    color: ${highlightTextColor};
    padding: 0 10px;
  `}
`;

export const HighlightTitleLabel = ({ children, ...rest }) => {
  const router = useRouter();
  const [highlightBgColor] = useState(
    handleColorBySlug(router.query.slug)?.accentColor ??
      colorVariants.blue.color,
  );
  const [highlightTextColor] = useState(
    handleColorBySlug(router.query.slug)?.variant?.backgroundColor ??
      colorVariants.blue.backgroundColor,
  );

  return (
    <Highlight
      highlightBgColor={highlightBgColor || 'white'}
      highlightTextColor={highlightTextColor || 'blue'}
      {...rest}
    >
      {children}
    </Highlight>
  );
};
