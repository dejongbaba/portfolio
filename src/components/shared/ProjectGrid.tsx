import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  company: string;
  image: string;
  href: string;
}

const projects: Project[] = [
  {
    title: 'Sendbox Delivery',
    description: 'Multi-region logistics and delivery platform powering local and international shipments',
    company: 'Sendbox',
    image: 'https://picsum.photos/seed/sendbox-delivery/800/600',
    href: 'https://business.sendbox.co/',
  },
  {
    title: 'Sendbox Marketplace',
    description: 'Multi-vendor e-commerce marketplace with integrated logistics and payment rails',
    company: 'Sendbox',
    image: 'https://picsum.photos/seed/sendbox-market/800/600',
    href: 'https://marketplace.sendbox.co/',
  },
  {
    title: 'Backup Cash',
    description: 'Technology-driven savings platform offering disciplined saving with competitive interest rates',
    company: 'Personal',
    image: 'https://picsum.photos/seed/backup-cash/800/600',
    href: 'https://www.mybackupcash.com/',
  },
  {
    title: 'Payfasta',
    description: 'Supply chain fintech giving businesses access to vendor credit across multiple countries',
    company: 'Personal',
    image: 'https://picsum.photos/seed/payfasta/800/600',
    href: 'https://patek.netlify.app/',
  },
  {
    title: 'Kobo Safe',
    description: 'Logistics safety management system for fleet operators across West Africa',
    company: 'Kobo360',
    image: 'https://picsum.photos/seed/kobo-safe/800/600',
    href: 'https://www.safe.kobo360.com/',
  },
  {
    title: 'Techfront',
    description: 'Developer education platform with courses, mentorship, and community for engineers',
    company: 'Personal',
    image: 'https://picsum.photos/seed/techfront/800/600',
    href: 'https://techfrontio-frontend.onrender.com/',
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="block group rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid',
        borderColor: hovered ? 'var(--border-hover)' : 'var(--border-card)',
        transition: 'border-color 0.3s ease, background 0.35s ease',
      }}
    >
      {/* Image area */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            filter: hovered ? 'grayscale(0) brightness(0.9)' : 'grayscale(1) brightness(0.5)',
            scale: hovered ? 1.03 : 1,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </div>

      {/* Text */}
      <div className="p-6 flex flex-col gap-2">
        <h3
          className="font-semibold text-base tracking-tight leading-tight transition-colors"
          style={{ color: hovered ? 'var(--text-primary)' : 'var(--text-secondary)' }}
        >
          {project.title}
        </h3>
        <p
          className="text-[13px] leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {project.description}
        </p>
        {project.company && (
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
            {project.company}
          </p>
        )}
      </div>
    </motion.a>
  );
};

const ProjectGrid: React.FC = () => (
  <section className="px-6 py-10 max-w-2xl mx-auto">
    <p
      className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-6"
      style={{ color: 'var(--text-muted)' }}
    >
      Projects
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, idx) => (
        <ProjectCard key={project.title} project={project} index={idx} />
      ))}
    </div>
  </section>
);

export default ProjectGrid;
