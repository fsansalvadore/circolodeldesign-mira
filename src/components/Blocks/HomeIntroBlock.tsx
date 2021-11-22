import 'twin.macro';
import React from 'react';
import { Paragraph, RichText } from '../Base';

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
`;

export const HomeIntroBlock = ({ fields }) => {
  return (
    <div tw="height[80vh] flex items-center">
      <Paragraph tw="columns[2] column-gap[4rem]">{data}</Paragraph>
    </div>
  );
};
