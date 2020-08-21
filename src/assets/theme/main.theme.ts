/* eslint-disable no-useless-computed-key */
import { DefaultTheme } from 'styled-components';

import { Fonts, Colors, Breakpoints, FontWeight } from 'shared/enums';

export const main: DefaultTheme = {
  color: {
    brand: {
      primary: Colors.GRAYISH_BLUE_DARK,
      secondary: Colors.DARK_BLUE,
    },
    bg: {
      default: Colors.WHITE,
      wash: Colors.ASH,
    },
    text: {
      default: Colors.GRAYISH_BLUE,
      reverse: Colors.WHITE,
      wash: Colors.GRAYISH_BLUE_LIGHT,
    },
  },
  font: {
    primary: Fonts.PRIMARY,
  },
  density: {
    thin: FontWeight.THIN,
    ['extra-light']: FontWeight.EXTRA_LIGHT,
    light: FontWeight.LIGHT,
    regular: FontWeight.REGULAR,
    medium: FontWeight.MEDIUM,
    ['semi-bold']: FontWeight.SEMI_BOLD,
    bold: FontWeight.BOLD,
    ['extra-bold']: FontWeight.EXTRA_BOLD,
    heavy: FontWeight.HEAVY,
  },
  breakpoint: {
    mobile: Breakpoints.MOBILE,
    desktop: Breakpoints.DESKTOP,
  },
};
