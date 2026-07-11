import React from 'react';
import { ArrowUpRight, Building2, Github, Stethoscope } from 'lucide-react';
import { availability, heroStats, profile, rolePathways } from '../data/site';
import AnimatedCounter from './AnimatedCounter';
import PulseLine from './PulseLine';
import Reveal from './Reveal';
import SystemsMap from './SystemsMap';

function highlightHeadline(text, keywords) {
  const pattern = new RegExp(
    `(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi'
  );
  const parts = text.split(pattern);

  return parts.map((part, index) =>
    keywords.some((kw) => kw.toLowerCase() === part.toLowerCase()) ? (
      <mark key={`${part}-${index}`} className="mark">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Reveal className="hero__copy">
        <span className="eyebrow">
          <span className="pulse-dot pulse-dot--live" aria-hidden="true" />
          {profile.title}
        </span>

        <h1 id="hero-heading" className="hero__title">
          {highlightHeadline(profile.headline, profile.headlineHighlights)}
        </h1>

        <div className="hero__pulse" aria-hidden="true">
          <PulseLine beats={5} />
          <span className="hero__pulse-label">system status · all green</span>
        </div>

        <p className="hero__summary">{profile.subheadline}</p>

        <div className="availability-chip" aria-label="Availability">
          <span className="pulse-dot pulse-dot--live" aria-hidden="true" />
          <span>{availability.location}</span>
          <span className="availability-chip__sep">/</span>
          <span>{availability.timezone}</span>
          <span className="availability-chip__sep">/</span>
          <span>{availability.remote}</span>
        </div>

        <div className="hero__actions">
          <a className="button button--primary" href="#lab-hep-assist">
            <Stethoscope size={18} aria-hidden="true" />
            View Healthcare AI
          </a>
          <a className="button button--secondary" href="#lab-eris">
            <Building2 size={18} aria-hidden="true" />
            View eRIS Modernization
          </a>
          <a
            className="button button--ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </Reveal>

      <Reveal className="hero__panel" delay={100}>
        <div className="hero__stats" role="list" aria-label="Portfolio metrics">
          {heroStats.map((stat) => (
            <div key={stat.label} className="hero__stat" role="listitem">
              <AnimatedCounter value={stat.value} className="hero__stat-value" />
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="role-preview">
          <span className="role-preview__badge">
            <span className="pulse-dot pulse-dot--live" aria-hidden="true" />
            Recruiter pathways
          </span>
          <ul className="role-preview__list">
            {rolePathways.map((role, index) => (
              <li key={role.id}>
                <a
                  href={`#role-${role.id}`}
                  className="role-preview__item"
                  style={{ '--role-accent': role.accent }}
                >
                  <span className="role-preview__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <strong>{role.title}</strong>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <SystemsMap />
      </Reveal>
    </section>
  );
}

export default Hero;
