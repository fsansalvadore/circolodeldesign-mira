import { colorVariants } from '../utils/motion';

export const findByShortname = (fields: any[] = [], shortname: string) => {
  return fields?.find((field) => field?.shortname === shortname);
};

export const shuffle = (array) => {
  return array.sort((a, b) => 0.5 - Math.random());
};

export const hslaToTransparent = (string) => {
  return string.replace(', 1)', ', 0)');
};

export const handleColorBySlug = (slug) => {
  if (!slug) return;

  if (slug === 'about' || slug?.includes('about')) {
    return {
      variant: colorVariants.orange,
      mode: 'dark',
      accentColor: colorVariants.orange.color,
    };
  } else if (slug === 'press-area' || slug?.includes('press-area')) {
    return {
      variant: colorVariants.green,
      mode: 'dark',
      accentColor: colorVariants.green.color,
    };
  } else if (
    slug === 'ricerche' ||
    (slug?.length === 1 && slug?.includes('ricerche'))
  ) {
    return {
      variant: colorVariants.fucsia,
      mode: 'dark',
      accentColor: colorVariants.fucsia.color,
    };
  } else if (slug?.length > 1 && slug?.includes('ricerche')) {
    return {
      variant: colorVariants.white,
      mode: 'light',
      accentColor: colorVariants.fucsia.backgroundColor,
    };
  } else if (slug === 'index' || slug?.includes('index')) {
    return {
      variant: colorVariants.blue,
      mode: 'dark',
      accentColor: colorVariants.blue.color,
    };
  } else {
    return {
      variant: colorVariants.white,
      mode: 'light',
      accentColor: colorVariants.fucsia.backgroundColor,
    };
  }
};
