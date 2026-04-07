import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from '@tanstack/react-router';
import ThemeToggle from '@/components/shared/ThemeToggle';

const Nav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const viewportHeight = window.innerHeight;
    if (latest > viewportHeight * 0.15) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const navItems = [
    { label: 'Deji', path: '/' },
    { label: 'Work', path: '/work' },
    { label: 'Writing', path: '/writing' },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText('agunbiade.adedeji94@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border-subtle)',
            transition: 'border-color 0.35s ease',
          }}
          className="fixed top-0 left-0 right-0 gap-2 z-[100] pointer-events-none"
        >
          <div className='max-w-2xl mx-auto w-full md:flex items-center justify-between px-6 py-4'>
            <nav
              className="pointer-events-auto inline-flex mb-4 md:mb-0 md:flex items-center gap-1 px-1.5 py-1.5 rounded-full"
              style={{
                background: 'var(--bg-pill)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-pill)',
                transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
              }}
            >
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative px-3.5 py-1 rounded-full text-xs  font-medium transition-colors duration-200 z-10"
                    style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{ background: 'var(--bg-active-pill)' }}
                        transition={{ type: 'spring', bounce: 0.18, duration: 0.5 }}
                      />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pointer-events-auto flex items-center gap-2">


              {/* Available for work */}
              <motion.button
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs  font-medium"
                style={{
                  background: 'var(--bg-pill)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  boxShadow: 'var(--shadow-status)',
                  transition: 'background 0.35s ease, border-color 0.35s ease, color 0.35s ease',
                }}
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00DB6D] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00DB6D]" />
                </span>
                <span>Available for work</span>
              </motion.button>

              {/* Copy email */}
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={copyEmail}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs  font-medium"
                style={{
                  background: 'var(--bg-pill)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  boxShadow: 'var(--shadow-status)',
                  transition: 'background 0.35s ease, border-color 0.35s ease, color 0.35s ease',
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      className="text-[#00DB6D]"
                    >
                      ✓ Copied!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                    >
                      ⌘ email
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Theme toggle */}
              <ThemeToggle />
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Nav;
