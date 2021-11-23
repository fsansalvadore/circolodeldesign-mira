import { useRouter } from 'next/router';
import { useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import { handleColorBySlug } from '../../utils/common';
import { colorVariants } from '../../utils/motion';

type Color = 'white' | 'primary';
type Size = 'small' | 'default';

const StyledButton = styled.button<{
  color?: Color;
  size?: Size;
  $isDisabled?: boolean;
  highlightBgColor: string;
  highlightTextColor: string;
}>`
  ${tw`rounded-full font-medium inline-flex!`}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return tw`px-2 py-3 text-sm lg:(px-4 py-3)`;
      case 'default':
      default:
        return tw`px-3! py-2! lg:(px-6! py-4!)`;
    }
  }}

${({ highlightBgColor, highlightTextColor }) => css`
    background: ${highlightBgColor};
    color: ${highlightTextColor};
    padding: 0 10px;
  `}
  
  ${({ $isDisabled }) => $isDisabled && tw`opacity-50 pointer-events-none`}
`;

interface Props {
  color?: Color;
  size?: Size;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  color,
  size,
  disabled,
  children,
  ...rest
}) => {
  const router = useRouter();
  const [highlightBgColor] = useState(
    handleColorBySlug(router.query.slug)?.variant?.color ??
      colorVariants.blue.color,
  );
  const [highlightTextColor] = useState(
    handleColorBySlug(router.query.slug)?.variant?.backgroundColor ??
      colorVariants.blue.backgroundColor,
  );

  return (
    <StyledButton
      color={color ?? 'primary'}
      size={size ?? 'default'}
      disabled={disabled}
      $isDisabled={disabled}
      highlightBgColor={highlightBgColor || 'white'}
      highlightTextColor={highlightTextColor || 'blue'}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
