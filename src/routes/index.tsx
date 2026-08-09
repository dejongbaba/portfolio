import React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import { BlurFade } from '@/components/ui/blur-fade';
import { articles, clients, experience, projects, services } from '@/lib/portfolio';

export const Route = createFileRoute('/')({
  component: PortfolioHome,
});

function PortfolioHome() {
  return (
    <>
      <Helmet>
        <title>Adedeji Agunbiade - Senior Full-stack Software Engineer</title>
        <meta
          name="description"
          content="Selected work, case studies, and writing by Adedeji Agunbiade, a senior full-stack software engineer in Lagos."
        />
      </Helmet>

      <BlurFade>
        <section className="hero-section">
          <h1 className="hero-title">
            I&apos;m Adedeji - a senior software engineer building backend systems and full-stack products that hold up in the real world
          </h1>
        </section>
      </BlurFade>

      <section id="work" className="section-shell">
        <BlurFade inView>
          <div className="section-kicker">
            <span>Featured work</span>
            <span>2019-2026</span>
          </div>
        </BlurFade>

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
                  <p>{project.category}</p>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="about" className="split-section">
        <BlurFade inView>
          <h2>About me</h2>
        </BlurFade>
        <BlurFade delay={0.08} inView>
          <div className="prose-block">
            <p className="lead-copy">
              I am a senior full-stack engineer with a practical eye for product quality. I build APIs, distributed services, and React frontends for logistics, fintech, education, and commerce products.
            </p>
            <p>
              My work sits close to the edge where systems meet people: booking deliveries, moving money, tracking operations, and helping teams make better decisions. I care about performance, clear state, reliable data flow, and interfaces that feel calm even when the domain is complicated.
            </p>
            <p>
              Outside shipping product work, I write about JavaScript, React, architecture, and the habits that help engineers build with more clarity.
            </p>
          </div>
        </BlurFade>
      </section>

      <section className="portrait-band" aria-label="Adedeji at work">
        <BlurFade inView>
          <img src="/assets/images/profile-image.jpg" alt="Adedeji Agunbiade" />
        </BlurFade>
      </section>

      <section className="split-section list-section">
        <BlurFade inView>
          <h2>Experience</h2>
        </BlurFade>
        <div className="line-list">
          {experience.map((item, index) => (
            <BlurFade key={item.company} className="line-item" delay={index * 0.04} inView>
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <span>{item.period}</span>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="two-column-lists">
        <div>
          <BlurFade inView>
            <h2>Services</h2>
          </BlurFade>
          <div className="line-list">
            {services.map((service, index) => (
              <BlurFade key={service} className="line-item compact" delay={index * 0.04} inView>
                <h3>{service}</h3>
              </BlurFade>
            ))}
          </div>
        </div>
        <div>
          <BlurFade inView>
            <h2>Selected teams</h2>
          </BlurFade>
          <div className="line-list">
            {clients.map((client, index) => (
              <BlurFade key={client} className="line-item compact" delay={index * 0.04} inView>
                <h3>{client}</h3>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="split-section list-section">
        <BlurFade inView>
          <h2>Writing</h2>
        </BlurFade>
        <div className="line-list">
          {articles.slice(0, 3).map((article, index) => (
            <BlurFade key={article.slug} className="line-item writing-row" delay={index * 0.04} inView>
              <Link to="/writing/$slug" params={{ slug: article.slug }} className="contents">
                <div>
                  <h3>{article.title}</h3>
                  <p>{article.topic}</p>
                </div>
                <span>{article.year}</span>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-panel">
        <BlurFade inView>
          <h2>Want to build something resilient? Drop me an email.</h2>
          <a href="mailto:agunbiade.adedeji94@gmail.com">-&gt; agunbiade.adedeji94@gmail.com</a>
        </BlurFade>
      </section>
    </>
  );
}