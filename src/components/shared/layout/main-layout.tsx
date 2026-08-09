import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import Nav from '@/components/shared/layout/nav';
import { footerLinks, socialLinks } from '@/lib/site';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollerRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-dvh bg-[var(--bg-base)] text-[var(--text-primary)]">
      <div
        ref={scrollerRef}
        className="scroll-fade-b scroll-fade-b-[18%] h-dvh overflow-y-auto"
      >
        <Nav />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="footer-row">
            <div className="footer-links">
              {footerLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
            <div className="footer-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
              <span className="footer-link">2026</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
