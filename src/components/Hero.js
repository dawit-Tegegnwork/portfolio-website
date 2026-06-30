import React from 'react';
import { ArrowUpRight, Github, Mail } from 'lucide-react';
import { availability, profile } from '../data/site';
import Reveal from './Reveal';
import SystemsMap from './SystemsMap';

function highlightHeadline(text, keywords) {
  const pattern = new RegExp(`(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
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
          <a className="button button--primary" href="#projects">
            Explore the Lab
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a
            className="button button--secondary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} aria-hidden="true" />
            View GitHub
          </a>
          <a className="button button--ghost" href="#contact">
            <Mail size={18} aria-hidden="true" />
            Contact Me
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
        <SystemsMap />
      </Reveal>
    </section>
  );
}

export default Hero;
