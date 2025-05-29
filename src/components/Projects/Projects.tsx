import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import React from 'react';
import { Section } from '../UI/Section';

// Sample project data
const projectsData = [
  {
    id: '01',
    title: 'Sendbox App',
    image: '/assets/images/buildco.png',
    className:
      'dark:bg-black bg-white border-2 dark:border-white border-black',
    category: 'Logistics & Ecommerce',
    link: 'https://app.sendbox.co/auth/login',
  },
  {
    id: '02',
    title: 'Backup Cash App',
    image: '/assets/images/backupcash.png',
    category: 'Wealth & Finance',
    className:
      'dark:bg-black bg-white border-2 dark:border-white border-black',
    link: 'https://mybackupcash.com',
  },
  {
    id: '03',
    title: 'Kobosafe App',
    image: '/assets/images/kobosafe.png',
    category: 'Insurance',
    className:
      'dark:bg-black bg-white border-2 dark:border-white border-black',
    link: 'https://safe.kobo360.com',
  },
  {
    id: '04',
    title: 'Payfasta App',
    className:
      'dark:bg-black bg-white border-2 dark:border-white border-black',
    image: '/assets/images/payfasta.png',
    category: 'Finance',
    link: 'https://payfasta.com',
  },
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects" className="relative">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground mb-16"
      >
        Some of the projects I've worked on and proud of
      </motion.p>
      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 1, duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className={cn(
                'relative h-[180px] overflow-hidden cursor-pointer group',
                project.className,
              )}
            >
              <div className=" p-6 dark:text-white text-black  z-10">
                <span className="block text-sm opacity-80 mb-2">
                  {project.id}
                </span>
                <h3 className="text-2xl mb-1">{project.title}</h3>
                <p className="text-base opacity-80 mb-2">
                  {project.category}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-white pb-1 text-black hover:text-black dark:hover:text-white border-b-2 border-transparent hover:border-black dark:hover:border-black"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
