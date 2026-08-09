import React from 'react';

const DesignSystemCard: React.FC = () => {
  return (
    <section className="px-6 py-12 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bento-card p-8 flex flex-col justify-between h-[300px]">
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5" />
            <div className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="w-8 h-8 rounded-full bg-accent-blue" />
            <div className="w-8 h-8 rounded-full bg-black/30 dark:bg-white/30" />
            <div className="w-8 h-8 rounded-full bg-black/50 dark:bg-white/50" />
            <div className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10" />
            <div className="w-8 h-8 rounded-full border border-black/5 dark:border-white/5" />
          </div>
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <div className="w-40 h-1 bg-black/10 dark:bg-white/10 rounded-full" />
              <div className="w-32 h-1 bg-black/10 dark:bg-white/10 rounded-full" />
              <div className="w-48 h-1 bg-black/10 dark:bg-white/10 rounded-full" />
              <div className="w-24 h-1 bg-black/10 dark:bg-white/10 rounded-full" />
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold block" style={{ color: 'var(--text-primary)' }}>Aa</span>
              <span
                className="text-[10px] uppercase tracking-widest font-bold"
                style={{ color: 'var(--text-muted)' }}
              >
                GOOGLE SANS
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Design System</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Tokens, components, and guidelines that unify product experiences
            </p>
          </div>
          <svg
            className="w-5 h-5 shrink-0"
            style={{ color: 'var(--text-muted)' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

      <div className="bento-card p-8 flex flex-col justify-between h-[300px]">
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-20 h-24">
            <div className="absolute inset-0 border-2 border-black/10 dark:border-white/10 rounded-t-full" />
            <div className="absolute bottom-0 left-0 right-0 h-10 border-2 border-black/10 dark:border-white/10 rounded-b-lg" />
            <div className="absolute bottom-4 left-4 right-4 h-6 bg-accent-blue/20 blur-md rounded-full animate-pulse" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Playground</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Experiments, prototypes, and things I'm tinkering with
            </p>
          </div>
          <svg
            className="w-5 h-5 shrink-0"
            style={{ color: 'var(--text-muted)' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default DesignSystemCard;
