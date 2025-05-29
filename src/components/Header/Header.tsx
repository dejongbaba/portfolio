import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Container } from '../UI/Container';
import ThemeToggler from '../UI/ThemeToggler';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

// Navigation items
const navItems = [
  { title: 'Work', path: 'projects' },
  { title: 'About', path: 'about' },
  { title: 'Publications', path: 'publications' },
  { title: 'Contact', path: 'contact' },
];

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'py-4 bg-background/80 backdrop-blur shadow-sm'
          : 'py-6 bg-transparent',
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold font-serif cursor-pointer">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer"
            >
              AA
            </ScrollLink>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.path}
                to={item.path}
                smooth={true}
                duration={500}
                offset={-100}
                activeClass="after:w-full"
                spy={true}
                className="cursor-pointer relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all hover:after:w-full"
              >
                {item.title}
              </ScrollLink>
            ))}
            <ThemeToggler />
          </nav>

          <button
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            className="md:hidden flex items-center justify-center w-10 h-10 relative z-[101]"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-background z-50 flex flex-col items-center justify-center p-8"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.path}
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    activeClass="active"
                    spy={true}
                    onClick={closeMenu}
                    className="my-4 text-2xl cursor-pointer"
                  >
                    {item.title}
                  </ScrollLink>
                ))}
                <div className="mt-8">
                  <ThemeToggler />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </motion.header>
  );
};

export default Header;
