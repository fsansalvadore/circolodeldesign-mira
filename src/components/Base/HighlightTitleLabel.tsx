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
  inverse: boolean;
}>`
  ${tw`font-bold text-lg lg:text-2xl !leading-[140%] no-underline inline-block w-auto mb-4`}

  ${({ inverse, highlightBgColor, highlightTextColor }) =>
    inverse
      ? css`
          background: ${highlightTextColor};
          color: ${highlightBgColor};
          padding: 0 10px;
        `
      : css`
          background: ${highlightBgColor};
          color: ${highlightTextColor};
          padding: 0 10px;
        `}
`;

export const HighlightTitleLabel = ({ inverse = false, children, ...rest }) => {
  const router = useRouter();
  const [highlightBgColor] = useState(
    !!router.query?.slug?.length
      ? handleColorBySlug(router.query.slug)?.accentColor
      : colorVariants.blue.color,
  );
  const [highlightTextColor] = useState(
    !!router.query?.slug?.length
      ? handleColorBySlug(router.query.slug)?.variant?.backgroundColor
      : colorVariants.blue.backgroundColor,
  );

  return (
    <Highlight
      highlightBgColor={highlightBgColor || 'white'}
      highlightTextColor={highlightTextColor || 'blue'}
      inverse={inverse}
      {...rest}
    >
      {children}
    </Highlight>
  );
};
