import 'styled-components';
import { Colors } from 'shared/enums';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      brand: {
        primary: string;
        secondary: string;
      };
      bg: {
        default: string;
        wash: string;
      };
      text: {
        default: string;
        reverse: string;
        wash: string;
      };
    };
    font: {
      primary: string;
    };
    density: {
      thin: number;
      ['extra-light']: number;
      light: number;
      regular: number;
      medium: number;
      ['semi-bold']: number;
      bold: number;
      ['extra-bold']: number;
      heavy: number;
    };
    breakpoint: {
      mobile: string;
      desktop: string;
    };
  }
}
