import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import { BlurFade } from '@/components/ui/blur-fade';
import { clients, experience, services } from '@/lib/portfolio';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Adedeji Agunbiade</title>
        <meta name="description" content="About Adedeji Agunbiade, senior full-stack software engineer in Lagos." />
      </Helmet>

      <section className="page-intro">
        <BlurFade>
          <p>About</p>
          <h1>I build software with a bias for clarity, performance, and product usefulness.</h1>
        </BlurFade>
      </section>

      <section className="split-section">
        <BlurFade>
          <h2>Profile</h2>
        </BlurFade>
        <BlurFade delay={0.08}>
          <div className="prose-block">
            <p className="lead-copy">
              I am Adedeji Agunbiade, a senior software engineer based in Lagos, Nigeria. My work spans backend systems, API design, React frontends, and cloud-native delivery.
            </p>
            <p>
              I have worked across logistics, fintech, commerce, and education products. The throughline is simple: take complex operational domains and make them reliable, understandable, and shippable.
            </p>
            <p>
              I enjoy teams that value direct communication, strong execution, and engineering decisions that survive real users.
            </p>
          </div>
        </BlurFade>
      </section>

      <section className="portrait-band" aria-label="Adedeji portrait">
        <BlurFade>
          <img src="/assets/images/adedeji-thumbnail.jpg" alt="Adedeji Agunbiade" />
        </BlurFade>
      </section>

      <section className="two-column-lists">
        <div>
          <BlurFade>
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
        </div>
        <div>
          <BlurFade>
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
      </section>

      <section className="split-section list-section">
        <BlurFade>
          <h2>Selected teams</h2>
        </BlurFade>
        <div className="line-list">
          {clients.map((client, index) => (
            <BlurFade key={client} className="line-item compact" delay={index * 0.04} inView>
              <h3>{client}</h3>
            </BlurFade>
          ))}
        </div>
      </section>
    </>
  );
}