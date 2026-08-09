import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/theme-context';

interface ThemeToggleProps {
  size?: number;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ size = 14 }) => {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Dark mode' : 'Light mode'}
      className="theme-control-button"
      data-active={isTransitioning ? 'true' : 'false'}
    >
      <span className="theme-control-glow" aria-hidden="true" />
      <span className="theme-control-orbit" aria-hidden="true" />
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="theme-control-icon theme-control-icon--sun"
          >
            <Sun size={size} strokeWidth={1.8} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="theme-control-icon theme-control-icon--moon"
          >
            <Moon size={size} strokeWidth={1.8} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
