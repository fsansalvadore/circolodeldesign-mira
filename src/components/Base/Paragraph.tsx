import React from 'react';
import tw, { css, styled } from 'twin.macro';
import parse from 'html-react-parser';
import { useState } from 'react';
import { handleColorBySlug } from '../../utils/common';
import { useRouter } from 'next/router';
import { RichText } from '.';

const StyledParagraph = styled(RichText)<{
  highlightBgColor: string;
  highlightTextColor: string;
}>`
  ${tw`text-2xl lg:text-3xl line-height[140%]!`}

  ${({ highlightBgColor, highlightTextColor }) => css`
    u {
      background: ${highlightBgColor};
      color: ${highlightTextColor};
      padding: 0 10px;
      ${tw`no-underline`}
    }
  `}
`;

export const Paragraph = ({ children, ...rest }) => {
  const router = useRouter();
  const [highlightBgColor] = useState(
    handleColorBySlug(router.asPath).variant.color,
  );
  const [highlightTextColor] = useState(
    handleColorBySlug(router.asPath).variant.backgroundColor,
  );

  return (
    <StyledParagraph
      highlightBgColor={highlightBgColor || 'white'}
      highlightTextColor={highlightTextColor || 'blue'}
      {...rest}
    >
      {parse(children)}
    </StyledParagraph>
  );
};
