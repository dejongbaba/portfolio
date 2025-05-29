import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../UI/Button';
import { useTheme } from '../../theme/ThemeProvider';

const ThemeToggler = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <Button
      variant="text"
      size="sm"
      onClick={toggleTheme}
      aria-label={`Switch to ${
        themeMode === 'light' ? 'dark' : 'light'
      } mode`}
      className="w-10 h-10 p-0 flex items-center justify-center"
    >
      {themeMode === 'light' ? (
        <motion.div
          initial={{ opacity: 0, rotate: -30 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Moon className="h-5 w-5" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, rotate: -30 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Sun className="h-5 w-5" />
        </motion.div>
      )}
    </Button>
  );
};

export { ThemeToggler };
