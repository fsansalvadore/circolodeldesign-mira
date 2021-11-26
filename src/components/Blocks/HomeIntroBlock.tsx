import 'twin.macro';
import React from 'react';
import { Paragraph, RichText } from '../Base';
import parse from 'html-react-parser';
import { findByShortname } from '../../utils/common';

const data = `
<p>
<u>At vero eos et</u> accusamus et iusto
<u>odio dignissimos ducimus</u> qui blanditiis praesentium voluptatum
deleniti atque corrupti quos.
</p>
<p></p>
<p>
Occaecati cupiditate non provident, <u>similique sunt in culpa</u> qui
officia deserunt mollitia.
</p>
<p></p>
<p>
Occaecati cupiditate non provident, <u>similique sunt in culpa</u> qui
officia deserunt mollitia.
</p>
`;

export const HomeIntroBlock = ({ fields }) => {
  const colLeft = findByShortname(fields, 'colonna-1')?.content?.value ?? '';
  const colRight = findByShortname(fields, 'colonna-2')?.content?.value ?? '';

  return (
    <div tw="h-auto lg:min-height[500px] max-height[800px] padding[10vw 0] md:py-32 lg:py-72 flex items-center">
      <div tw="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-20">
        {colLeft && <Paragraph>{parse(colLeft)}</Paragraph>}
        {colRight && <Paragraph>{parse(colRight)}</Paragraph>}
      </div>
    </div>
  );
};
