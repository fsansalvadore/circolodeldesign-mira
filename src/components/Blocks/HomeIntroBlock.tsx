import 'twin.macro';
import React from 'react';
import { Paragraph } from '../Base';
import parse from 'html-react-parser';
import { findByShortname } from '../../utils/common';

export const HomeIntroBlock = ({ fields }) => {
  const colLeft = findByShortname(fields, 'colonna-1')?.content?.value ?? '';
  const colRight = findByShortname(fields, 'colonna-2')?.content?.value ?? '';

  return (
    <div tw="h-auto py-10 min-height[400px] lg:height[calc(100vh - 5rem)] md:pt-40 md:pb-32 lg:py-72 flex items-center">
      <div tw="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-20">
        {!!colLeft && (
          <Paragraph tw="text-3xl lg:text-5xl">{parse(colLeft)}</Paragraph>
        )}
        {!!colRight && <Paragraph>{parse(colRight)}</Paragraph>}
      </div>
    </div>
  );
};
