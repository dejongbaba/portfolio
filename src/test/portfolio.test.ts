import { describe, expect, it } from 'vitest';
import { articles, getArticleBySlug, getProjectBySlug, projects } from '@/lib/portfolio';

describe('portfolio content model', () => {
  it('provides unique project slugs for case-study routes', () => {
    const slugs = projects.map(project => project.slug);
    const uniqueSlugs = new Set(slugs);

    expect(uniqueSlugs.size).toBe(projects.length);
    expect(getProjectBySlug('sendbox-delivery')?.title).toBe('Sendbox Delivery');
  });

  it('keeps every project case study complete enough to render', () => {
    for (const project of projects) {
      expect(project.summary).toBeTruthy();
      expect(project.problem).toBeTruthy();
      expect(project.approach.length).toBeGreaterThan(1);
      expect(project.outcome.length).toBeGreaterThan(1);
      expect(project.reflection).toBeTruthy();
      expect(project.liveUrl).toMatch(/^https?:\/\//);
    }
  });

  it('provides unique article slugs for article routes', () => {
    const slugs = articles.map(article => article.slug);
    const uniqueSlugs = new Set(slugs);

    expect(uniqueSlugs.size).toBe(articles.length);
    expect(getArticleBySlug('tailwind-v4-shadcn-blur-fade')?.title).toBe(
      "Migrating to Tailwind v4 and adopting shadcn's blur-fade",
    );
  });

  it('keeps writing entries with markdown content and valid external links', () => {
    expect(articles.length).toBeGreaterThan(0);

    for (const article of articles) {
      expect(article.title).toBeTruthy();
      expect(article.content).toBeTruthy();
      expect(article.summary).toBeTruthy();
      if (article.externalUrl) {
        expect(article.externalUrl).toMatch(/^https?:\/\//);
      }
    }
  });
});
