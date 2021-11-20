const colors = {
  blue: { color: 'hsla(211, 79%, 49%, 1)', mode: 'dark' },
  orange: { color: 'hsla(15, 80%, 52%, 1)', mode: 'dark' },
  green: { color: 'hsla(169, 72%, 23%, 1)', mode: 'dark' },
  fucsia: { color: 'hsla(308, 81%, 50%, 1)', mode: 'dark' },
  white: { color: 'hsla(0, 0%, 100%, 1)', mode: 'light' },
  black: { color: 'hsla(0, 0%, 0%, 1)', mode: 'dark' },
};

const transition = {
  background: {
    staggerChildren: 0.5,
    duration: 1,
    type: 'spring',
    mass: 0.5,
  },
  content: {
    duration: 0.2,
    type: 'spring',
    // damping: 300,
  },
};

export const backgroundVariant = {
  hidden: {
    backgroundColor: colors.blue.color,
    ...transition.background,
  },
  show: {
    backgroundColor: colors.orange.color,
    ...transition.background,
  },
};

export const colorVariants = {
  blue: {
    backgroundColor: colors.blue.color,
    color: colors.white.color,
    ...transition.background,
  },
  orange: {
    backgroundColor: colors.orange.color,
    color: colors.white.color,
    ...transition.background,
  },
  green: {
    backgroundColor: colors.green.color,
    color: colors.white.color,
    ...transition.background,
  },
  fucsia: {
    backgroundColor: colors.fucsia.color,
    color: colors.white.color,
    ...transition.background,
  },
  white: {
    backgroundColor: colors.blue.color,
    color: colors.black.color,
    ...transition.background,
  },
};

export const contentVariant = {
  hidden: {
    opacity: 0,
    ...transition.content,
  },
  show: {
    opacity: 1,
    ...transition.content,
  },
};
