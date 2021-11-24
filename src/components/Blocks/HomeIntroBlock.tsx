import 'twin.macro';
import React from 'react';
import { Paragraph, RichText } from '../Base';
import parse from 'html-react-parser';

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
  return (
    <div tw="h-auto lg:min-height[500px] max-height[800px] padding[10vw 0] md:py-32 lg:py-72 flex items-center">
      <Paragraph tw="lg:(columns[2] column-gap[3rem])">{parse(data)}</Paragraph>
    </div>
  );
};
