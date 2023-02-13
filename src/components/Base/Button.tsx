import { useRouter } from 'next/router';
import { useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import { handleColorBySlug } from '../../utils/common';
import { colorVariants } from '../../utils/motion';

type Color = 'blue' | 'green' | 'orange' | 'fucsia' | 'white' | 'black';
type Size = 'small' | 'default' | 'big';

const StyledButton = styled.button<{
  color?: Color;
  size?: Size;
  $isDisabled?: boolean;
  highlightBgColor: string;
  highlightTextColor: string;
}>`
  ${tw`rounded-full w-full md:w-auto font-medium inline-flex! justify-center transform transition-transform hover:-translate-y-1`}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return tw`px-2 py-3 text-sm lg:(px-4 py-3)`;
      case 'big':
        return tw`px-6! py-2! text-xl md:text-2xl lg:(px-8 text-3xl py-3)`;
      case 'default':
      default:
        return tw`px-10! py-3! font-bold lg:(text-lg px-6! py-2!)`;
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
  color = 'white',
  size,
  disabled,
  children,
  ...rest
}) => {
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
    <StyledButton
      color={color}
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

// ${({ color }) => {
//   switch (color) {
//     case 'blue':
//       return tw`bg-white! text-miraBlue`;
//     case 'fucsia':
//       return tw`bg-miraFucsia! text-white`;
//     case 'green':
//       return tw`bg-miraGreen! text-white`;
//     case 'orange':
//       return tw`bg-miraOrange! text-white`;
//     case 'black':
//       return tw`text-white bg-black`;
//     case 'white':
//     default:
//       return tw`bg-white! text-black!`;
//   }
// }}
