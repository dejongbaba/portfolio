import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// interface ContributionDay {
//   color: string;
//   contributionCount: number;
//   contributionLevel: string;
//   date: string;
// }

const HeatmapCard: React.FC = () => {
  // const [data, setData] = useState<number[]>([]);
  // const [totalContributions, setTotalContributions] = useState<number | null>(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchContributions = async () => {
  //     try {
  //       const response = await fetch('https://github-contributions-api.deno.dev/dejongbaba.json');
  //       const result = await response.json();

  //       // Map contributionLevel to 0-4
  //       const levelMap: Record<string, number> = {
  //         'NONE': 0,
  //         'FIRST_QUARTILE': 1,
  //         'SECOND_QUARTILE': 2,
  //         'THIRD_QUARTILE': 3,
  //         'FOURTH_QUARTILE': 4
  //       };

  //       const flattenedData = result.contributions.flat().map((day: ContributionDay) => 
  //         levelMap[day.contributionLevel] || 0
  //       );

  //       setData(flattenedData);
  //       setTotalContributions(result.totalContributions);
  //     } catch (error) {
  //       console.error('Failed to fetch contributions:', error);
  //       // Fallback to random data on error
  //       const fallback = Array.from({ length: 52 * 7 }, () => Math.floor(Math.random() * 4));
  //       setData(fallback);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchContributions();
  // }, []);

  const getColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-black/5 dark:bg-white/5';
      case 1: return 'bg-black/10 dark:bg-white/10';
      case 2: return 'bg-black/30 dark:bg-white/30';
      case 3: return 'bg-black/60 dark:bg-white/60';
      case 4: return 'bg-black/90 dark:bg-white/90';
      default: return 'bg-black/5 dark:bg-white/5';
    }
  };

  return (
    <section className="px-6 py-12 max-w-2xl mx-auto">
      {/* <div className="flex items-center justify-between mb-6">
        <h3
          className="text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{ color: 'var(--text-secondary)' }}
        >
          CONTRIBUTIONS
        </h3>
        <span className="text-[10px] font-bold" style={{ color: 'var(--text-muted)' }}>
          {isLoading ? (
            'Fetching...'
          ) : (
            `${totalContributions?.toLocaleString()} in the last year`
          )}
        </span>
      </div>

      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[700px]">
          {isLoading ? (
            Array.from({ length: 52 * 7 }).map((_, i) => (
              <div
                key={i}
                className="w-[11px] h-[11px] rounded-[3px] bg-black/5 dark:bg-white/5 animate-pulse"
              />
            ))
          ) : (
            data.map((level, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 52) * 0.005 }}
                className={`w-[11px] h-[11px] rounded-[3px] border border-black/5 dark:border-white/5 ${getColor(level)}`}
              />
            ))
          )}
        </div>
      </div> */}

      {/* Footer */}
      <footer className="pt-20 pb-16 px-2 md:px-6 max-w-2xl mx-auto">
        <div
          className="w-full mb-10"
          style={{ height: 1, background: 'var(--border-subtle)', transition: 'background 0.35s ease' }}
        />

        {/* Socials */}
        <div className="mb-8">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            Socials
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: 'GitHub ↗', href: 'https://github.com/dejongbaba' },
              { label: 'LinkedIn ↗', href: 'https://linkedin.com/in/adedeji-agunbiade/' },
              { label: 'Hashnode ↗', href: 'https://luccithedev.hashnode.dev/' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200 dark:hover:text-white hover:text-black"
                style={{ color: 'var(--text-secondary)' }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            Tools
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {['TypeScript', 'Node.js', 'React', 'NestJS', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'C#'].map((t) => (
              <span
                key={t}
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default HeatmapCard;
