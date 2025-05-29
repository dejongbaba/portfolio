import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../UI/Section';
import { Button } from '../UI/Button';
import { Col, Row } from 'components/UI/Grid';

const ContentCreation: React.FC = () => {
  return (
    <Section
      id="content-creation"
      className="relative overflow-hidden"
    >
      <h2 className="text-5xl font-bold mb-16  border-foreground pb-2 border-b-2">Content Creation</h2>
      <Row>
        <Col sm={12}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-8 md:mb-0 md:pr-8">
            <motion.p
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              I share my 7-year personal journey through my design
              thinking, my process, and my personality. The channel has
              helped over 100,000 designers to better understand the
              tools I use everyday. Figure, Webflow & more. Just the
              beginning!
            </motion.p>

            <ul className="my-8 space-y-4">
              <motion.li
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-foreground mr-2">—</span>
                <span>Sharing design knowledge and techniques</span>
              </motion.li>
              <motion.li
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-foreground mr-2">—</span>
                <span>Tutorials and deep dives into design tools</span>
              </motion.li>
              <motion.li
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-foreground mr-2">—</span>
                <span>Building a community of designers</span>
              </motion.li>
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="text">
                Get in contact about a sponsorship →
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="relative w-full h-full min-h-[400px] overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/assets/images/content-creation.jpg"
              alt="Content Creation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      
        </Col>
      </Row>
      
    </Section>
  );
};

export default ContentCreation;
