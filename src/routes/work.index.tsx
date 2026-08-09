import React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import { BlurFade } from '@/components/ui/blur-fade';
import { projects } from '@/lib/portfolio';

export const Route = createFileRoute('/work/')({
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <Helmet>
        <title>Work - Adedeji Agunbiade</title>
        <meta name="description" content="Case studies and selected engineering work by Adedeji Agunbiade." />
      </Helmet>

      <section className="page-intro">
        <BlurFade>
          <p>Selected work</p>
          <h1>Systems, product surfaces, and reflections from shipping real software.</h1>
        </BlurFade>
      </section>

      <section className="section-shell">
        <div className="featured-grid">
          {projects.map((project, index) => (
            <BlurFade
              key={project.slug}
              className="featured-card"
              dataOffset={index % 2 === 1 ? 'true' : 'false'}
              delay={index * 0.04}
              inView
            >
              <Link to="/work/$slug" params={{ slug: project.slug }} className="project-link">
                <div className="project-image-wrap" style={{ '--project-accent': project.accent } as React.CSSProperties}>
                  <img src={project.image} alt="" className="project-image" loading={index < 2 ? 'eager' : 'lazy'} />
                  <span className="project-orb" />
                </div>
                <div className="project-caption">
                  <h2>{project.title}</h2>
                  <p>{project.category} - {project.year}</p>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>
    </>
  );
}