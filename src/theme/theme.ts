import { DefaultTheme } from 'styled-components';

export const fonts = {
  primary: "'Inter', sans-serif",
  secondary: "'Playfair Display', serif",
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

export const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    background: '#FFFFFF',
    backgroundAlt: '#F5F5F5',
    text: '#0A0A0A',
    textSecondary: '#666666',
    primary: '#0A0A0A',
    secondary: '#666666',
    accent: '#0A0A0A',
    border: '#EEEEEE',
    card: '#FFFFFF',
    error: '#FF3B30',
    success: '#34C759',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.05)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.08)',
    large: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },
  fonts,
  fontWeights,
  breakpoints,
};

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    background: '#121212',
    backgroundAlt: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#AAAAAA',
    primary: '#FFFFFF',
    secondary: '#AAAAAA',
    accent: '#FFFFFF',
    border: '#333333',
    card: '#1E1E1E',
    error: '#FF453A',
    success: '#32D74B',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.2)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.3)',
    large: '0 8px 24px rgba(0, 0, 0, 0.4)',
  },
  fonts,
  fontWeights,
  breakpoints,
};
 