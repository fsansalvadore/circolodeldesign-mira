import tw from 'twin.macro';
import React from 'react';
import { RichText } from '../Base';
import parse from 'html-react-parser';
import { findByShortname } from '../../utils/common';

const Heading = tw.h1`text-lg md:text-4xl mb-4 lg:mb-8`;

export const PageBlock = ({ fields }) => {
  const title = findByShortname(fields, 'titolo')?.content?.value ?? '';
  const testo = findByShortname(fields, 'testo')?.content?.value ?? '';

  return (
    <div tw="h-auto py-8 md:(mt-20) flex justify-center">
      <div tw="flex flex-col space-y-4 max-w-screen-md">
        {!!title && <Heading>{parse(title)}</Heading>}
        {!!testo && <RichText>{parse(testo)}</RichText>}
      </div>
    </div>
  );
};
