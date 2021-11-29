import 'twin.macro';
import React from 'react';
import { Paragraph } from '../Base';
import parse from 'html-react-parser';
import { findByShortname } from '../../utils/common';

export const HomeIntroBlock = ({ fields }) => {
  const colLeft = findByShortname(fields, 'colonna-1')?.content?.value ?? '';
  const colRight = findByShortname(fields, 'colonna-2')?.content?.value ?? '';

  return (
    <div tw="h-auto lg:min-height[500px] max-height[800px] padding[15vw 0 10vw 0] md:(pt-40 pb-32) lg:(pt-96 pb-72) flex items-center">
      <div tw="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-20">
        {!!colLeft && (
          <Paragraph tw="text-3xl lg:text-4xl">{parse(colLeft)}</Paragraph>
        )}
        {!!colRight && <Paragraph>{parse(colRight)}</Paragraph>}
      </div>
    </div>
  );
};
