import React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import { BlurFade } from '@/components/ui/blur-fade';
import { articles } from '@/lib/portfolio';

export const Route = createFileRoute('/writing/')({
  component: WritingPage,
});

function WritingPage() {
  return (
    <>
      <Helmet>
        <title>Writing - Adedeji Agunbiade</title>
        <meta name="description" content="Technical articles and engineering writing by Adedeji Agunbiade." />
      </Helmet>

      <section className="page-intro">
        <BlurFade>
          <p>Writing</p>
          <h1>Notes on JavaScript, React, systems, and the craft of building software.</h1>
        </BlurFade>
      </section>

      <section className="section-shell">
        <div className="writing-list">
          {articles.map((article, index) => (
            <BlurFade key={article.slug} delay={index * 0.04} inView>
              <Link to="/writing/$slug" params={{ slug: article.slug }} className="writing-card">
                <div>
                  <p>{article.topic} - {article.year}</p>
                  <h2>{article.title}</h2>
                  <span>{article.summary}</span>
                  {article.externalUrl && <em>Also on {new URL(article.externalUrl).hostname}</em>}
                </div>
                <strong>-&gt;</strong>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>
    </>
  );
}