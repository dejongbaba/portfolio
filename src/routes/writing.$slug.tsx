import React from 'react';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet-async';
import { BlurFade } from '@/components/ui/blur-fade';
import { articles, getArticleBySlug } from '@/lib/portfolio';

export const Route = createFileRoute('/writing/$slug')({
  component: ArticlePage,
  notFoundComponent: ArticleNotFound,
});

function ArticleNotFound() {
  return (
    <section className="page-intro">
      <BlurFade>
        <p>Article not found</p>
        <h1>This article is not available.</h1>
        <Link to="/writing" className="text-link">
          -&gt; Back to writing
        </Link>
      </BlurFade>
    </section>
  );
}

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    throw notFound();
  }

  const relatedArticles = articles.filter(item => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{article.title} - Adedeji Agunbiade</title>
        <meta name="description" content={article.summary} />
      </Helmet>

      <article>
        <BlurFade>
          <section className="case-hero">
            <div>
              <p>{article.topic} - {article.year}</p>
              <h1>{article.title}</h1>
            </div>
            <p>{article.summary}</p>
          </section>
        </BlurFade>

        {article.externalUrl && (
          <BlurFade>
            <section className="external-cta">
              <span>Originally published on {new URL(article.externalUrl).hostname}</span>
              <a href={article.externalUrl} target="_blank" rel="noopener noreferrer">
                Read the original article -&gt;
              </a>
            </section>
          </BlurFade>
        )}

        <BlurFade>
          <section className="article-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href = '', children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </section>
        </BlurFade>

        <section className="section-shell related-work">
          <BlurFade>
            <div className="section-kicker">
              <span>More writing</span>
              <Link to="/writing">View all</Link>
            </div>
          </BlurFade>
          <div className="related-grid related-grid-articles">
            {relatedArticles.map(item => (
              <BlurFade key={item.slug} delay={0.04} inView>
                <Link to="/writing/$slug" params={{ slug: item.slug }} className="related-card">
                  <div className="related-article-block">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.topic} - {item.year}</p>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}