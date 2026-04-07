import React from 'react';
import Nav from '@/app/layout/Nav';
// import ThemeToggle from '@/components/shared/ThemeToggle';
import CursorTrail from '@/components/shared/CursorTrail';
import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from '@tanstack/react-router';
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const [mousePos, setMousePos] = React.useState({ x: -1, y: -1 });

  React.useEffect(() => {
    const move = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const navItems = [
    { label: 'Deji', path: '/' },
    { label: 'Work', path: '/work' },
    { label: 'Writing', path: '/writing' },
  ];
  const location = useLocation();
  const currentPath = location.pathname;
  const [copied, setCopied] = React.useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('agunbiade.adedeji94@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <div
      className="min-h-screen  pt-20 pb-16 text-foreground overflow-x-hidden cursor-none"
    // style={{ background: '#030303' }}
    >
      {/* Particle trail */}
      <CursorTrail />

      {/* Custom green cursor */}
      {/* <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        animate={{ x: mousePos.x - 3, y: mousePos.y - 3 }}
        transition={{ type: 'spring', damping: 28, stiffness: 220, mass: 0.4 }}
        style={{ width: 6, height: 6, background: '#00DB6D', mixBlendMode: theme === 'dark' ? 'screen' : 'multiply' }}
      /> */}

      {/* Fixed top nav */}
      <Nav />
      <div className='max-w-2xl px-6 mx-auto space-y-4 my-4'>
        <div className="flex items-center gap-2">
          <nav
            className="pointer-events-auto inline-flex items-center gap-1 px-1.5 py-1.5 rounded-full"
            style={{
              background: 'var(--bg-pill)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-pill)',
              transition: 'background 0.35s ease, border-color 0.35s ease',
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
          {/* <ThemeToggle /> */}
        </div>

        {/* Row 2: Status pills */}
        {currentPath === '/' && (
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
                    ⌘ Copy email
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        )}
      </div>
      {/* Page content */}
      <main>{children}</main>

      {/* Floating "Ask me anything" widget — sebiomo.com style */}
      {/* <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center gap-3 rounded-full pl-5 pr-2 py-2"
          style={{
            background: 'var(--bg-pill)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-pill)',
            transition: 'background 0.35s ease, border-color 0.35s ease',
          }}
        >
          <input
            type="text"
            placeholder="Ask me anything"
            className="bg-transparent border-none outline-none text-xs  w-40 md:w-48"
            style={{
              color: 'rgba(199, 202, 216, 0.7)',
              fontFamily: '"Google Sans", "Inter", sans-serif',
            }}
          />
          <button
            className="flex items-center justify-center rounded-full w-8 h-8 shrink-0 transition-all hover:opacity-80"
            style={{
              background: 'rgba(199, 202, 216, 0.08)',
              border: '1px solid rgba(199, 202, 216, 0.06)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(199,202,216,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </button>
        </motion.div>
      </div> */}


    </div>
  );
};

export default MainLayout;
