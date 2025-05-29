import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Button } from './Button';
import { cn } from '../../lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderProps {
  children: ReactNode[];
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const sliderVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
};

const Slider: React.FC<SliderProps> = ({
  children,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  interval = 5000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const slideCount = children.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();

    if (autoPlay) {
      timeoutRef.current = setTimeout(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
      }, interval);
    }

    return () => resetTimeout();
  }, [currentIndex, autoPlay, interval, slideCount]);

  const handleNext = () => {
    resetTimeout();
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  const handlePrev = () => {
    resetTimeout();
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideCount - 1 : prevIndex - 1,
    );
  };

  const handleDotClick = (index: number) => {
    resetTimeout();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 50;
    const swipe = info.offset.x;

    if (swipe < -threshold) {
      handleNext();
    } else if (swipe > threshold) {
      handlePrev();
    }
  };

  return (
    <div className={cn('relative w-full  mx-auto', className)}>
      <motion.div
        className="flex w-full h-full"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="flex-shrink-0 relative w-full"
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {showArrows && (
        <div className="absolute md:top-1/2 -bottom-10 left-0 right-0 flex justify-between -translate-y-1/2 z-1 pointer-events-none">
          <Button
            variant="outlined"
            size="sm"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="pointer-events-auto hover:bg-white hover:dark:bg-black dark:border-white border-black border-2 text-black  hover:text-white rounded-full w-10 h-10 "
          >
            <ChevronLeft className="absolute dark:text-white hover:text-black text-black z-30 h-6 w-6" />
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={handleNext}
            aria-label="Next slide"
            className="pointer-events-auto hover:bg-white hover:dark:bg-black dark:border-white border-black border-2 text-white  hover:text-black rounded-full w-10 h-10 "
          >
            <ChevronRight className="absolute dark:text-white hover:text-black text-black z-30 h-6 w-6" />
          </Button>
        </div>
      )}

      {showDots && (
        <div className="flex justify-center absolute bottom-5 left-0 right-0 z-10">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                'w-2.5 h-2.5 rounded-full border-none p-0 mx-1.5 cursor-pointer transition-colors',
                index === currentIndex
                  ? 'bg-foreground'
                  : 'bg-white/50 hover:bg-white/80',
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
