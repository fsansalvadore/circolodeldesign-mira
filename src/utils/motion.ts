export const backgroundVariant = {
  hidden: {
    backgroundColor: 'hsl(0, 100, 50)',
    transition: {
      staggerChildren: 0.5,
      duration: 0.7,
    },
  },
  show: {
    backgroundColor: 'hsl(-120, 100, 50)',
    transition: {
      staggerChildren: 0.5,
      duration: 0.7,
    },
  },
};

export const contentVariant = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};
