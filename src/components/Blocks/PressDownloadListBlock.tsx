import { findByShortname } from '../../utils/common';
import { Button, Link } from '../Base';
import 'twin.macro';

export const PressDownloadListBlock = ({ fields }) => {
  const items = findByShortname(fields, 'lista')?.content?.items ?? [];

  return (
    <div tw="py-10 lg:py-20 flex flex-col space-y-10 lg:space-y-16">
      {items.map((item, index) => {
        const text =
          findByShortname(item.fields, 'testo')?.content?.value ?? '';
        const link = findByShortname(item.fields, 'link')?.content?.value ?? '';
        const cta =
          findByShortname(item.fields, 'testo-cta')?.content?.value ??
          'Download press kit';

        return (
          <div key={`press-${index}`} tw="flex flex-col space-y-3 lg:space-y-6">
            <p tw="text-lg lg:text-2xl">{text}</p>
            <div>
              <Button as={Link} href={link} target="_blank">
                {cta}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
