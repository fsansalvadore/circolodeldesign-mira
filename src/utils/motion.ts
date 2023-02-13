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
export const transitions = {
  background: {
    when: 'beforeChildren',
    delayChildren: 4,
    duration: 1,
    ease: [0.6, 0.01, 0, 0.8],
  },
  content: {
    type: 'spring',
  },
};

// for background colors
export const colorVariants = {
  blue: {
    backgroundColor: colors.blue.color,
    color: colors.white.color,
    transition: transitions.background,
  },
  orange: {
    backgroundColor: colors.orange.color,
    color: colors.white.color,
    transition: transitions.background,
  },
  green: {
    backgroundColor: colors.green.color,
    color: colors.white.color,
    transition: transitions.background,
  },
  fucsia: {
    backgroundColor: colors.fucsia.color,
    color: colors.white.color,
    transition: transitions.background,
  },
  white: {
    backgroundColor: colors.white.color,
    color: colors.black.color,
    transition: transitions.background,
  },
};

// variant for page content that needs to hide for page transition
export const contentVariant = {
  initial: {
    y: -5,
    opacity: 0,
    transition: transitions.content,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: transitions.content,
  },
  exit: {
    y: -3,
    opacity: 0,
    transition: { duration: 0.4, ...transitions.content },
  },
};
