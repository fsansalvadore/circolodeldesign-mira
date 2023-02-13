const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const createSpacingPlugin = require('./tailwind.plugin.spacing.js');
// const { plugin: spacingPlugin, pxToRem } = createSpacingPlugin();

module.exports = {
  theme: {
    colors: {
      ...colors,
      current: 'currentColor',
      transparent: 'transparent',
      miraBlue: '#1A7ADE',
      miraGreen: '#E75323',
      miraOrange: '#0096DE',
      miraFucsia: '#E71ACD',
    },
    fontFamily: {
      sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
    },
    // fontSize: {
    //   base: [pxToRem(16), 1.25],
    //   8: [pxToRem(8), 1.25],
    //   10: [pxToRem(10), 1.25],
    //   12: [pxToRem(12), 1.25],
    //   14: [pxToRem(14), 1.25],
    //   16: [pxToRem(16), 1.25],
    //   18: [pxToRem(18), 1.25],
    //   21: [pxToRem(21), 1.25],
    //   24: [pxToRem(24), 1.25],
    //   30: [pxToRem(30), 1.25],
    //   38: [pxToRem(38), 1.25],
    //   40: [pxToRem(40), 1.25],
    //   48: [pxToRem(48), 1.25],
    //   60: [pxToRem(60), 1.25],
    //   80: [pxToRem(80), 1.25],
    //   130: [pxToRem(130), 1.25],
    // },
    zIndex: {
      behind: -1,
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      100: 100,
      auto: 'auto',
    },
    rotate: {
      0: '0deg',
      '-30': '-30deg',
      '-90': '-90deg',
      90: '90deg',
      '-45': '-45deg',
      45: '45deg',
      180: '180deg',
    },
    extend: {
      borderRadius: {
        '1/2': '50%',
      },
      screens: {
        'has-hover': { raw: '(hover:hover)' },
        'max-content': '1280px',
      },
      padding: {
        '9/16': '56.25%',
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      borderWidth: ['last', 'first'],
      boxShadow: ['focus'],
    },
  },
  corePlugins: {
    backdropGrayscale: true,
  },
  // plugins: [spacingPlugin],
};
