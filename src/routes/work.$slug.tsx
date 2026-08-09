import React from 'react';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import { BlurFade } from '@/components/ui/blur-fade';
import { getProjectBySlug, projects } from '@/lib/portfolio';

export const Route = createFileRoute('/work/$slug')({
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <section className="page-intro">
      <BlurFade>
        <p>Case study not found</p>
        <h1>This project is not available.</h1>
        <Link to="/work" className="text-link">
          -&gt; Back to work
        </Link>
      </BlurFade>
    </section>
  );
}

function ProjectPage() {
  const { slug } = Route.useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    throw notFound();
  }

  const relatedProjects = projects.filter(item => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{project.title} - Case Study - Adedeji Agunbiade</title>
        <meta name="description" content={project.summary} />
      </Helmet>

      <article>
        <BlurFade>
          <section className="case-hero">
            <div>
              <p>{project.category} - {project.year}</p>
              <h1>{project.title}</h1>
            </div>
            <p>{project.summary}</p>
          </section>
        </BlurFade>

        <BlurFade>
          <section className="case-image" style={{ '--project-accent': project.accent } as React.CSSProperties}>
            <img src={project.image} alt="" />
          </section>
        </BlurFade>

        <BlurFade>
          <section className="case-meta">
            <div>
              <span>Company</span>
              <strong>{project.company}</strong>
            </div>
            <div>
              <span>Role</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span>Duration</span>
              <strong>{project.duration}</strong>
            </div>
            <div>
              <span>Live</span>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit project
              </a>
            </div>
          </section>
        </BlurFade>

        <section className="split-section">
          <BlurFade>
            <h2>Problem</h2>
          </BlurFade>
          <BlurFade>
            <p className="lead-copy">{project.problem}</p>
          </BlurFade>
        </section>

        <section className="split-section list-section">
          <BlurFade>
            <h2>Approach</h2>
          </BlurFade>
          <div className="line-list">
            {project.approach.map((item, index) => (
              <BlurFade key={item} className="line-item" delay={index * 0.04} inView>
                <h3>{item}</h3>
              </BlurFade>
            ))}
          </div>
        </section>

        <section className="split-section list-section">
          <BlurFade>
            <h2>Outcome</h2>
          </BlurFade>
          <div className="line-list">
            {project.outcome.map((item, index) => (
              <BlurFade key={item} className="line-item" delay={index * 0.04} inView>
                <h3>{item}</h3>
              </BlurFade>
            ))}
          </div>
        </section>

        <BlurFade>
          <section className="reflection-panel">
            <span>Reflection</span>
            <p>{project.reflection}</p>
          </section>
        </BlurFade>

        <section className="section-shell related-work">
          <BlurFade>
            <div className="section-kicker">
              <span>More work</span>
              <Link to="/work">View all</Link>
            </div>
          </BlurFade>
          <div className="related-grid">
            {relatedProjects.map(item => (
              <BlurFade key={item.slug} delay={0.04} inView>
                <Link to="/work/$slug" params={{ slug: item.slug }} className="related-card">
                  <img src={item.image} alt="" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
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