import React from 'react';
import { cn } from '../../lib/utils';
import { motion, type MotionProps } from 'framer-motion';

// Combine MotionProps with standard HTMLElement attributes, omitting conflicting keys from MotionProps
interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  title?: string;
  animate?: boolean;
}

const defaultAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, id, title,animate = true, ...props }, ref) => {
    const animationProps = animate
      ? {
          initial: 'hidden',
          whileInView: 'visible',
          viewport: { once: true, margin: '-100px' },
          variants: defaultAnimation,
        }
      : {};

    return (
      <motion.section
        ref={ref}
        id={id}
        className={cn('px-8 md:px-0 py-16 md:py-24 md:max-w-7xl md:mx-auto', className)}
        {...animationProps}
        {...props} // Pass remaining props (including standard HTML attributes)
      >
        {title && <h2 className="text-3xl md:text-5xl pb-4 border-b-2 border-foreground mb-12">{title}</h2>}
        {children}
      </motion.section>
    );
  },
);

Section.displayName = 'Section';

export { Section };
