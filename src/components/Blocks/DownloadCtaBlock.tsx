import 'twin.macro';
import { findByShortname } from '../../utils/common';
import { Button, Link } from '../Base';

export const DownloadCtaBlock = ({ fields }) => {
  const label =
    findByShortname(fields, 'testo-cta')?.content?.value ??
    'Scarica la ricerca';
  const link = findByShortname(fields, 'link')?.content?.value ?? '#';
  const hide = findByShortname(fields, 'non-mostrare')?.content?.value ?? false;
  if (hide) return null;

  return (
    <div tw="flex justify-center py-4 lg:py-8">
      <Button as={Link} href={link} target="_blank" color="fucsia">
        {label}
      </Button>
    </div>
  );
};
