import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import MainLayout from '@/app/layout/MainLayout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export const Route = createFileRoute('/writing')({
  component: WritingPage,
});

const articles = [
  {
    title: 'Streamlining React Development with MobX for State Management',
    href: 'https://luccithedev.hashnode.dev/streamlining-react-development-with-mobx-for-state-management',
  },
  {
    title: 'Deep Dive into Functional Programming in JavaScript: Higher Order Functions and Immutability',
    href: 'https://luccithedev.hashnode.dev/deep-dive-into-functional-programming-in-javascript-higher-order-functions-and-immutability',
  },
  {
    title: 'Complete Guide to Vue.js Authorization and Access Control',
    href: 'https://www.cerbos.dev/blog/complete-guide-to-vue-js-authorization-and-access-control',
  },
  {
    title: 'Getting Started with SQL Using SQL Server Management Studio',
    href: 'https://luccithedev.hashnode.dev/getting-started-with-sql-using-sql-server-management-studio',
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

function WritingPage() {
  return (
    <MainLayout>
      <Helmet>
        <title>Writing | Adedeji Agunbiade</title>
        <meta name="description" content="Articles on JavaScript, TypeScript, React, and building scalable systems." />
      </Helmet>

      <section className="px-2 md:px-6 max-w-2xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {articles.map((article, idx) => (
            <motion.a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={rowVariants}
              className="group flex items-center justify-between gap-6 py-6 border-t transition-all duration-300"
              style={{
                borderColor: 'var(--border-subtle)',
                borderBottom: idx === articles.length - 1 ? '1px solid var(--border-subtle)' : undefined,
              }}
            >
              <span
                className="text-base font-medium leading-snug transition-colors duration-200 dark:group-hover:text-white group-hover:text-black"
                style={{ color: 'var(--text-secondary)' }}
              >
                {article.title}
              </span>
              <span
                className="shrink-0 text-base transition-transform duration-200 group-hover:translate-x-0.5"
                style={{ color: 'var(--text-muted)' }}
              >
                →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </MainLayout>
  );
}
