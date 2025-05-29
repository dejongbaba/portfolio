import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { ThemeMode } from '../types';

interface ThemeContextProps {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem(
      'theme',
    ) as ThemeMode | null;
    if (savedTheme) {
      setThemeMode(savedTheme);
      savedTheme === 'dark'
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    } else {
      // Check for user system preference
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setThemeMode(prefersDarkMode ? 'dark' : 'light');
      prefersDarkMode
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);

    // Add or remove dark class to the document
    newTheme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
