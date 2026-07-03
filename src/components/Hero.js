import React from 'react';
import { ArrowUpRight, Github, Stethoscope, Building2 } from 'lucide-react';
import { availability, profile, rolePathways } from '../data/site';
import Reveal from './Reveal';

function highlightHeadline(text, keywords) {
  const pattern = new RegExp(
    `(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi'
  );
  const parts = text.split(pattern);

  return parts.map((part, index) =>
    keywords.some((kw) => kw.toLowerCase() === part.toLowerCase()) ? (
      <span key={`${part}-${index}`} className="text-accent">
        {part}
      </span>
    ) : (
      part
    )
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Reveal className="hero__copy">
        <span className="eyebrow">{profile.title}</span>
        <p className="hero__name">{profile.name}</p>

        <div className="availability-chip" aria-label="Availability">
          <span className="pulse-dot pulse-dot--live" aria-hidden="true" />
          <span>{availability.location}</span>
          <span className="availability-chip__sep">·</span>
          <span>{availability.timezone}</span>
          <span className="availability-chip__sep">·</span>
          <span>{availability.remote}</span>
        </div>

        <h1 id="hero-heading" className="hero__title">
          {highlightHeadline(profile.headline, profile.headlineHighlights)}
        </h1>
        <p className="hero__summary">{profile.subheadline}</p>

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

        <div className="credibility-strip" role="list" aria-label="Portfolio credibility">
          {profile.credibility.map((item) => (
            <span key={item} className="credibility-strip__item" role="listitem">
              {item}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="hero__panel" delay={100}>
        <div className="role-preview">
          <span className="role-preview__badge">
            <span className="pulse-dot pulse-dot--live" aria-hidden="true" />
            Recruiter pathways
          </span>
          <p className="role-preview__lead">
            Pick the role lane that matches your opening — each links to a modernization lab you can
            run locally.
          </p>
          <ul className="role-preview__list">
            {rolePathways.map((role) => (
              <li key={role.id}>
                <a
                  href={`#role-${role.id}`}
                  className="role-preview__item"
                  style={{ '--role-accent': role.accent }}
                >
                  <span className="role-preview__dot" aria-hidden="true" />
                  <span>
                    <strong>{role.title}</strong>
                    <small>{role.summary}</small>
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

export default Hero;
