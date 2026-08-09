import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/context/sound-context';

interface SoundToggleProps {
  size?: number;
}

const SoundToggle: React.FC<SoundToggleProps> = ({ size = 14 }) => {
  const { isSoundOn, toggleSound } = useSound();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleSound}
      aria-pressed={isSoundOn}
      aria-label={isSoundOn ? 'Turn sound off' : 'Turn sound on'}
      title={isSoundOn ? 'Sound on' : 'Sound off'}
      className="theme-control-button"
      data-active={isSoundOn ? 'true' : 'false'}
    >
      <span className="theme-control-glow" aria-hidden="true" />
      <AnimatePresence mode="wait" initial={false}>
        {isSoundOn ? (
          <motion.span
            key="sound-on"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="theme-control-icon theme-control-icon--sound"
          >
            <Volume2 size={size} strokeWidth={1.8} />
          </motion.span>
        ) : (
          <motion.span
            key="sound-off"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="theme-control-icon theme-control-icon--sound"
          >
            <VolumeX size={size} strokeWidth={1.8} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default SoundToggle;
