import React from 'react';
import { motion } from 'framer-motion';

const TerminalCard: React.FC = () => {
  return (
    <section className="px-6 py-12 max-w-2xl mx-auto">
      <div className="bento-card overflow-hidden">
        <div
          className="px-4 py-2 flex items-center justify-between"
          style={{
            background: 'var(--bg-terminal)',
            borderBottom: '1px solid var(--border-card)',
            transition: 'background 0.35s ease, border-color 0.35s ease',
          }}
        >
          <div className="flex items-center gap-2">
            <span className="text-accent-green font-mono text-sm">$</span>
            <span className="font-mono text-sm" style={{ color: 'var(--text-primary)' }}>git log --oneline</span>
            <div className="w-1.5 h-4 bg-accent-green animate-pulse ml-1" />
          </div>
          <div className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>▼</div>
        </div>
        <div className="p-4 font-mono text-xs space-y-1.5 h-[200px] overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-3">
            {[
              { date: "Mar 5", msg: "Feed accuracy improvements", hash: "a7c8e2f" },
              { date: "Mar 2", msg: "Time range and state filters for intel feed", hash: "b9d1f3a" },
              { date: "Mar 1", msg: "Auto-generated images for daily brief", hash: "c2e4g6h" },
              { date: "Feb 28", msg: "Three new news sources added", hash: "d8j0k1l" },
              { date: "Feb 25", msg: "Initial deployment of security intel API", hash: "e5m7n9o" },
              { date: "Feb 20", msg: "Refactored background processing queue", hash: "f3p5r7s" },
              { date: "Feb 15", msg: "Integrated OpenAI fine-tuned models", hash: "g1t3v5w" }
            ].map((log, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <span
                  className="text-[10px] whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ color: '#00DB6D' }}
                >
                  {log.date}
                </span>
                <div className="relative flex items-center">
                  <div
                    className="w-[1px] h-8 absolute left-1/2 -top-4"
                    style={{ background: 'var(--border-subtle)' }}
                  />
                  <div
                    className="w-2 h-2 rounded-full border-2 border-[#00DB6D] z-10"
                    style={{ background: 'var(--bg-card)' }}
                  />
                </div>
                <span
                  className="text-xs tracking-tight transition-colors group-hover:opacity-100"
                  style={{ color: 'var(--text-secondary)', opacity: 0.6 }}
                >
                  {log.msg}
                </span>
                <span
                  className="text-[10px] ml-auto font-bold uppercase"
                  style={{ color: 'var(--text-muted)', opacity: 0.4 }}
                >
                  {log.hash}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalCard;
