import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import MainLayout from '@/app/layout/MainLayout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export const Route = createFileRoute('/work')({
  component: WorkPage,
});

const workItems = [
  {
    company: 'Revent Technologies',
    badge: 'Present',
    description: 'Scalable REST APIs for high-volume financial transactions. Kubernetes-aligned services, CDN-optimised performance, Jest-tested business logic.',
    years: '2024–now',
    href: '#',
  },
  {
    company: 'Sendbox',
    badge: null,
    description: 'REST APIs powering multi-region logistics and delivery. −75% API response time, +40% conversion through backend-driven features.',
    years: '2022–24',
    href: '#',
  },
  {
    company: 'Kobo360',
    badge: null,
    description: 'Responsive logistics dashboards with React and REST APIs. CDN-optimised asset delivery, +30% faster engineer onboarding via shared libraries.',
    years: '2020–22',
    href: '#',
  },
  {
    company: 'Tm30',
    badge: null,
    description: 'Backend-integrated fintech solutions for financial transactions and user management. REST API design, +50% system performance improvement.',
    years: '2019–20',
    href: '#',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

function WorkPage() {
  return (
    <MainLayout>
      <Helmet>
        <title>Work | Adedeji Agunbiade</title>
        <meta name="description" content="Selected work history — companies, roles, and impact." />
      </Helmet>

      <section className="px-6 max-w-2xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {workItems.map((item, idx) => (
            <motion.a
              key={item.company}
              href={item.href}
              variants={rowVariants}
              className="group block py-8 border-t transition-colors duration-300"
              style={{
                borderColor: 'var(--border-subtle)',
                borderBottom: idx === workItems.length - 1 ? '1px solid var(--border-subtle)' : undefined,
              }}
            >
              <div className="flex items-start justify-between gap-6">
                {/* Left: Company + description */}
                <div className="flex flex-col gap-1.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="font-semibold text-base leading-tight transition-colors"
                      style={{ color: 'var(--text-primary)', fontFamily: '"Google Sans", "Inter", sans-serif' }}
                    >
                      {item.company}
                    </span>
                    {item.badge && (
                      <span
                        className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{
                          color: '#00DB6D',
                          background: 'rgba(0, 219, 109, 0.1)',
                          border: '1px solid rgba(0, 219, 109, 0.2)',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Right: Year + arrow */}
                <div
                  className="flex items-center gap-2 shrink-0 pt-0.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <span className="text-sm tabular-nums">{item.years}</span>
                  <motion.span
                    className="text-sm"
                    animate={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    style={{ display: 'inline-block' }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </MainLayout>
  );
}
