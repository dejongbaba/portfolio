import React from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import SoundToggle from '@/components/shared/sound-toggle';
import ThemeToggle from '@/components/shared/theme-toggle';
import { mainNav } from '@/lib/site';

const Nav: React.FC = () => {
  const location = useLocation();

  return (
    <header className="site-header">
      <a
        href="mailto:agunbiade.adedeji94@gmail.com"
        className="top-strip"
        aria-label="Email Adedeji"
      >
        Available for senior full-stack engineering work - say hello
      </a>

      <div className="site-nav">
        <Link to="/" className="brand-mark" aria-label="Adedeji home">
          DEJI
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {mainNav.map(item => {
            const isAnchor = item.href?.includes('#');
            const isActive = !isAnchor && item.to === location.pathname;

            if (isAnchor) {
              return (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.to}
                to={item.to!}
                className="nav-link"
                data-active={isActive ? 'true' : 'false'}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-controls" aria-label="Site controls">
          <SoundToggle size={13} />
          <ThemeToggle size={13} />
        </div>
      </div>
    </header>
  );
};

export default Nav;
