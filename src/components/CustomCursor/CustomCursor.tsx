import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-hover')
      ) {
        setCursorHovered(true);
      }
    };

    const handleMouseOut = () => {
      setCursorHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.3,
      },
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      transition: {
        type: 'spring',
        mass: 0.3,
      },
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      transition: {
        type: 'spring',
        mass: 0.2,
      },
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 0,
      transition: {
        type: 'spring',
        mass: 0.2,
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 w-[32px] h-[32px] rounded-full border-2 border-foreground pointer-events-none z-50 mix-blend-difference"
        variants={cursorVariants}
        animate={cursorHovered ? 'hover' : 'default'}
      />
      <motion.div
        className="fixed left-0 top-0 w-2 h-2 rounded-full bg-foreground pointer-events-none z-50 mix-blend-difference"
        variants={dotVariants}
        animate={cursorHovered ? 'hover' : 'default'}
      />
    </>
  );
};

export default CustomCursor;
