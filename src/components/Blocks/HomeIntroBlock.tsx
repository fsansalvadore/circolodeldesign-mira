import 'twin.macro';
import React from 'react';
import { Paragraph } from '../Base';
import parse from 'html-react-parser';
import { findByShortname } from '../../utils/common';

export const HomeIntroBlock = ({ fields }) => {
  const colLeft = findByShortname(fields, 'colonna-1')?.content?.value ?? '';
  const colRight = findByShortname(fields, 'colonna-2')?.content?.value ?? '';

  return (
    <div tw="h-auto lg:min-height[500px] max-height[800px] padding[10vw 0] md:py-32 lg:py-72 flex items-center">
      <div tw="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-20">
        {!!colLeft && <Paragraph tw="font-bold">{parse(colLeft)}</Paragraph>}
        {!!colRight && <Paragraph tw="font-bold">{parse(colRight)}</Paragraph>}
      </div>
    </div>
  );
};
