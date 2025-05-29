import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../UI/Section';
import { cn } from '../../lib/utils';
import { Plus, Minus } from 'lucide-react';

// Services data
const services = [
  {
    id: 1,
    icon: '🎨',
    title: 'Web applications',
    description:
      'I create memorable and consistent applications that helps businesses stand out in their market. ',
  },
  {
    id: 2,
    icon: '📦',
    title: 'Mobile applications',
    description:
      'I build mobile applications that are clean user-compelling and easy to use.',
  },
  {
    id: 3,
    icon: '🖥️',
    title: 'Landing pages',
    description:
      'I create high converting landing pages for businesses and brands focusing on conversion and engagement.',
  },
  {
    id: 4,
    icon: '🖥️',
    title: 'Ecommerce Websites',
    description:
      'I design and develop responsive, user-friendly and high converting ecommerce websites that are optimized for both desktop and mobile experiences, focusing on conversion and engagement.',
  },
];

const About: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };

  return (
    <Section id="about" title="About" className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-16">
          <motion.p
            className="text-2xl mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I am a product-oriented software engineer with over 5
            years of experience in designing and building scalable
            mission-critical software systems. I enjoy creating
            delightful, human-centered digital experiences. I have a
            proven track record of delivering successful projects
            across various industries including telecommunication,
            gaming, education, telemedicine, fintech, and e-commerce.
          </motion.p>

          <motion.p
            className="text-2xl mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I’m a very strong believer of developing talents, so you
            can find me training young developing engineers in the
            technology space from time to time.
          </motion.p>
        </div>

        <div className="w-full">
          <motion.h3
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I build, design and contribute to products that help
            businesses grow and scale.
          </motion.h3>

          <div className="mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={cn(
                  'p-6 border-t border-border transition-colors cursor-pointer',
                  expanded === service.id && 'bg-muted-foreground/0',
                )}
                onClick={() => toggleExpand(service.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">
                    {service.title}
                  </h3>
                  <button
                    className="w-8 h-8 flex items-center justify-center text-muted-foreground"
                    aria-label={
                      expanded === service.id ? 'Collapse' : 'Expand'
                    }
                  >
                    {expanded === service.id ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </button>
                </div>

                <AnimatePresence>
                  {expanded === service.id && (
                    <motion.div
                      className="text-muted-foreground mt-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
