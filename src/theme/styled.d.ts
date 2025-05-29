import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      background: string;
      backgroundAlt: string;
      text: string;
      textSecondary: string;
      primary: string;
      secondary: string;
      accent: string;
      border: string;
      card: string;
      error: string;
      success: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    fontWeights: {
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
 