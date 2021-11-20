// color definitions
const colors = {
  blue: { color: 'hsla(211, 79%, 49%, 1)', mode: 'dark' },
  orange: { color: 'hsla(15, 80%, 52%, 1)', mode: 'dark' },
  green: { color: 'hsla(169, 72%, 23%, 1)', mode: 'dark' },
  fucsia: { color: 'hsla(308, 81%, 50%, 1)', mode: 'dark' },
  white: { color: 'hsla(0, 0%, 100%, 1)', mode: 'light' },
  black: { color: 'hsla(0, 0%, 0%, 1)', mode: 'dark' },
};

// transition definitions
const transitions = {
  background: {
    staggerChildren: 0.5,
    duration: 1,
    type: 'spring',
    mass: 0.5,
  },
  content: {
    duration: 0.2,
    type: 'spring',
  },
};

// color mode variant
export const textVariant = {
  dark: { color: colors.white.color, ...transitions.background },
  light: { color: colors.black.color, ...transitions.background },
};

export const backgroundVariant = {
  hidden: {
    backgroundColor: colors.blue.color,
    ...transitions.background,
  },
  show: {
    backgroundColor: colors.orange.color,
    ...transitions.background,
  },
};

// for background colors
export const colorVariants = {
  blue: {
    backgroundColor: colors.blue.color,
    color: colors.white.color,
    ...transitions.background,
  },
  orange: {
    backgroundColor: colors.orange.color,
    color: colors.white.color,
    ...transitions.background,
  },
  green: {
    backgroundColor: colors.green.color,
    color: colors.white.color,
    ...transitions.background,
  },
  fucsia: {
    backgroundColor: colors.fucsia.color,
    color: colors.white.color,
    ...transitions.background,
  },
  white: {
    backgroundColor: colors.white.color,
    color: colors.black.color,
    ...transitions.background,
  },
};

// variant for page content that needs to hide for page transition
export const contentVariant = {
  hidden: {
    opacity: 0,
    ...transitions.content,
  },
  show: {
    opacity: 1,
    ...transitions.content,
  },
};
