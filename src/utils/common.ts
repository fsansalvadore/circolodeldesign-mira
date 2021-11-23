import { colorVariants } from '../utils/motion';

export const findByShortname = (fields: any[] = [], shortname: string) => {
  return fields?.find((field) => field?.shortname === shortname);
};

export const shuffle = (array) => {
  return array.sort((a, b) => 0.5 - Math.random());
};

export const handleColorBySlug = (slug) => {
  if (!slug) return;
  switch (slug) {
    case 'about':
      return { variant: colorVariants.orange, mode: 'dark' };
    case 'press-area':
      return { variant: colorVariants.green, mode: 'dark' };
    case 'ricerche-e-report':
      return { variant: colorVariants.fucsia, mode: 'dark' };
    case 'index':
      return { variant: colorVariants.blue, mode: 'dark' };
    case slug.includes('ricerche/'):
    default:
      return { variant: colorVariants.white, mode: 'light' };
  }
};
