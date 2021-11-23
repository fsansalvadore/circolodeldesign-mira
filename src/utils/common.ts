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
      return {
        variant: colorVariants.orange,
        mode: 'dark',
        accentColor: colorVariants.orange.color,
      };
    case 'press-area':
      return {
        variant: colorVariants.green,
        mode: 'dark',
        accentColor: colorVariants.green.color,
      };
    case 'ricerche-e-report':
      return {
        variant: colorVariants.fucsia,
        mode: 'dark',
        accentColor: colorVariants.fucsia.color,
      };
    case 'index':
      return {
        variant: colorVariants.blue,
        mode: 'dark',
        accentColor: colorVariants.blue.color,
      };
    case slug.includes('ricerche/'):
    default:
      return {
        variant: colorVariants.white,
        mode: 'light',
        accentColor: colorVariants.fucsia.backgroundColor,
      };
  }
};
