import React from 'react';
import { motion } from 'framer-motion';

// ─── Data ──────────────────────────────────────────────────────────────────────
const buildingItems = [
  {
    title: 'Techfront',
    href: 'https://techfrontio-frontend.onrender.com/',
    description: 'Developer education platform — courses, mentorship, and community',
    meta: null,
  },
  {
    title: 'Olive Kiddies',
    href: 'https://olivekiddies-frontend-live.onrender.com/',
    description: 'Interactive learning platform for young children',
    meta: null,
  },
];

const builtItems = [
  { title: 'Sendbox', href: 'https://business.sendbox.co/', description: 'Local and international delivery platform · Web' },
  { title: 'Sendbox Marketplace', href: 'https://marketplace.sendbox.co/', description: 'Multi-vendor e-commerce marketplace · Web' },
  { title: 'Backup Cash', href: 'https://www.mybackupcash.com/', description: 'Disciplined savings with competitive interest rates · Web' },
  { title: 'Payfasta', href: 'https://patek.netlify.app/', description: 'Supply chain fintech — multi-country vendor credit · Web' },
  { title: 'Kobo Safe', href: 'https://www.safe.kobo360.com/', description: 'Logistics safety management platform · Web' },
  { title: 'Edusponsor', href: 'http://www.edusponsor.com/', description: 'Education sponsorship platform · Web' },
];

// ─── Variants ──────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

// ─── List item ─────────────────────────────────────────────────────────────────
const ListItem: React.FC<{
  title: string;
  href: string;
  description: string;
}> = ({ title, href, description }) => (
  <motion.div
    variants={rowVariants}
    className="group py-5 border-t"
    style={{ borderColor: 'var(--border-subtle)' }}
  >
    <div className="flex items-center justify-between">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 w-fit"
      >
        <span
          className="font-semibold text-[15px] transition-colors duration-200"
          style={{ lineHeight: 1.3, color: 'var(--text-primary)' }}
        >
          {title}
        </span>
        <span
          className="text-sm transition-colors duration-200"
          style={{ color: 'var(--text-muted)' }}
        >
          ↗
        </span>
      </a>
    </div>
    <p className="text-[13px] mt-0.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
      {description}
    </p>
  </motion.div>
);

// ─── Component ─────────────────────────────────────────────────────────────────
const CurrentlyBuilding: React.FC = () => (
  <section className="px-6 pb-8 max-w-2xl mx-auto">
    {/* CURRENTLY BUILDING */}
    <p
      className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-2"
      style={{ color: 'var(--text-muted)' }}
    >
      Currently Building
    </p>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {buildingItems.map((item) => (
        <motion.div
          key={item.title}
          variants={rowVariants}
          className="group py-5 border-t"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <div className="flex items-center justify-between">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <span
                className="font-semibold text-[15px]"
                style={{ lineHeight: 1.3, color: 'var(--text-primary)' }}
              >
                {item.title}
              </span>
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>↗</span>
            </a>
            {item.meta && (
              <span className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: '#3B82F6', boxShadow: '0 0 4px #3B82F6' }}
                />
                {item.meta}
              </span>
            )}
          </div>
          <p className="text-[13px] mt-0.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>

    {/* BUILT */}
    <p
      className="text-[10px] font-semibold uppercase tracking-[0.2em] mt-10 mb-2"
      style={{ color: 'var(--text-muted)' }}
    >
      Built
    </p>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {builtItems.map((item) => (
        <ListItem key={item.title} {...item} />
      ))}
      <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }} />
    </motion.div>
  </section>
);

export default CurrentlyBuilding;
