import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ThemeToggleProps {
  size?: number;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ size = 14 }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.08 }}
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center justify-center w-8 h-8 rounded-full"
      style={{
        background: 'var(--bg-pill)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-secondary)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="sun"
            initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{ display: 'flex' }}
          >
            <Sun size={size} strokeWidth={1.8} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{ display: 'flex' }}
          >
            <Moon size={size} strokeWidth={1.8} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
