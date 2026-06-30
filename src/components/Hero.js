import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { profile } from '../data/site';
import Reveal from './Reveal';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Reveal className="hero__copy">
        <span className="eyebrow">{profile.title}</span>
        <p className="hero__name">{profile.name}</p>
        <p className="hero__tagline">{profile.tagline}</p>
        <h1 id="hero-heading" className="hero__title">
          {profile.headline}
        </h1>
        <p className="hero__summary">{profile.subheadline}</p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View Projects
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a
            className="button button--secondary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
        </div>

        <div className="credibility-strip" role="list" aria-label="Portfolio credibility">
          {profile.credibility.map((item) => (
            <span key={item} className="credibility-strip__item" role="listitem">
              {item}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="hero__panel" delay={100}>
        <div className="hero-card hero-card--accent">
          <span className="hero-card__label">Portfolio positioning</span>
          <h2>Reference implementations recruiters can run locally</h2>
          <p>
            Six production-style portfolio projects with synthetic data, health checks, OpenAPI docs,
            and documented 3-minute test paths — not claims of live hospital or NGO deployments.
          </p>
        </div>

        <div className="hero-card-grid">
          <div className="hero-card">
            <strong>Backend APIs</strong>
            <span>FastAPI, Go, JWT, RBAC, idempotency, audit logs</span>
          </div>
          <div className="hero-card">
            <strong>Healthcare & data</strong>
            <span>AI workflows, case management, data quality, interoperability concepts</span>
          </div>
          <div className="hero-card">
            <strong>Ops-ready demos</strong>
            <span>Docker Compose, CI workflows, runbooks, triage boards</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Hero;
