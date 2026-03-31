import React from 'react';
import { motion } from 'framer-motion';

// ─── Git log data ──────────────────────────────────────────────────────────────
const gitLogs: Record<string, { date: string; msg: string }[]> = {
  techfront: [
    { date: 'Mar 26', msg: 'Add TypeScript course module' },
    { date: 'Mar 18', msg: 'User progress tracking dashboard' },
    { date: 'Mar 10', msg: 'Mentor session scheduling feature' },
    { date: 'Feb 28', msg: 'Payment integration for premium courses' },
    { date: 'Feb 14', msg: 'Mobile-responsive layout improvements' },
  ],
  olivekiddies: [
    { date: 'Mar 22', msg: 'Interactive quiz module for ages 5–7' },
    { date: 'Mar 12', msg: 'Parent dashboard redesign' },
    { date: 'Feb 25', msg: 'Lesson load performance improvements' },
    { date: 'Feb 10', msg: 'New content pack: shapes and colours' },
    { date: 'Jan 30', msg: 'Auth flow refactor and session persistence' },
  ],
};

// ─── Terminal card ─────────────────────────────────────────────────────────────
const TerminalCard: React.FC<{ project: string }> = ({ project }) => {
  const logs = gitLogs[project] || [];
  return (
    <div
      className="rounded-xl overflow-hidden mt-3 font-mono text-[11px]"
      style={{
        background: 'var(--bg-terminal)',
        border: '1px solid var(--border-card)',
        transition: 'background 0.35s ease, border-color 0.35s ease',
      }}
    >
      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: '1px solid var(--border-card)' }}
      >
        <div className="flex items-center gap-2">
          <span style={{ color: '#00DB6D' }}>$</span>
          <span style={{ color: 'var(--text-secondary)' }}>git log --oneline</span>
          <span
            className="inline-block w-[7px] h-[13px] ml-0.5"
            style={{ background: '#00DB6D', animation: 'pulse 1.2s ease-in-out infinite' }}
          />
        </div>
        <span style={{ color: 'var(--text-muted)', fontSize: 10 }}>▼</span>
      </div>
      {/* Log lines */}
      <div className="px-4 py-3 space-y-2">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-4">
            <span className="shrink-0" style={{ color: 'rgba(0, 219, 109, 0.7)' }}>{log.date}</span>
            <span style={{ color: 'var(--text-secondary)' }}>{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Data ──────────────────────────────────────────────────────────────────────
const buildingItems = [
  {
    title: 'Techfront',
    href: 'https://techfrontio-frontend.onrender.com/',
    description: 'Developer education platform — courses, mentorship, and community',
    meta: null,
    terminalKey: 'techfront',
  },
  {
    title: 'Olive Kiddies',
    href: 'https://olivekiddies-frontend-live.onrender.com/',
    description: 'Interactive learning platform for young children',
    meta: null,
    terminalKey: 'olivekiddies',
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
                  style={{ background: '#00DB6D', boxShadow: '0 0 4px #00DB6D' }}
                />
                {item.meta}
              </span>
            )}
          </div>
          <p className="text-[13px] mt-0.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {item.description}
          </p>
          {item.terminalKey && <TerminalCard project={item.terminalKey} />}
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
