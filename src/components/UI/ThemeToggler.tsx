import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme/ThemeProvider';
import { Button } from './Button';
import { Moon, Sun } from 'lucide-react';

const ThemeToggler: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <Button
      variant="text"
      onClick={toggleTheme}
      aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
      className="h-10 w-10 p-0"
    >
      <motion.div
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 30 }}
        key={themeMode}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
        className="flex h-6 w-6 items-center justify-center"
      >
        {themeMode === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </motion.div>
    </Button>
  );
};

export default ThemeToggler;
 