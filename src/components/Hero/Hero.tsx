import { Section } from 'components/UI/Section';
import { motion } from 'framer-motion';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <Section
      id="hero"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4  md:gap-8 items-center pt-24  pb-0"
    >
      <div className="pr-8 md:pr-0 md:ml-16">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-2 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Adedeji Agunbiade
        </motion.h1>
        <motion.p
          className="text-3xl md:text-5xl mb-8 font-light "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          a software engineer based in Lagos, Nigeria.
        </motion.p>
        <motion.p
          className="text-3xl md:text-5xl mb-1 font-light "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {' '}
          Available for
        </motion.p>
        <motion.p
          className="text-2xl md:text-3xl mb-8 font-bold "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#contact">
            {' '}
            freelance, consulting & collaborations.
          </a>
        </motion.p>
      </div>

      <motion.div
        className="relative w-full h-full flex  items-center  mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.img
          src="assets/images/adedeji-thumbnail.jpg"
          alt="Adedeji"
          className="max-w-full mx-auto h-auto object-contain"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Section>
  );
};

export default Hero;
