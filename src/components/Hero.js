import React from 'react';
import { ArrowUpRight, Download, Github } from 'lucide-react';
import { availability, profile } from '../data/site';
import Reveal from './Reveal';
import StatusTerminal from './StatusTerminal';

function highlightHeadline(text, keywords) {
  const pattern = new RegExp(`(${keywords.join('|')})`, 'gi');
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
  const cvUrl = `${process.env.PUBLIC_URL}/${profile.cvFilename}`;
  const hasCv = false; // toggled at build time via env or static check — hide if 404

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Reveal className="hero__copy">
        <span className="eyebrow">{profile.title}</span>
        <p className="hero__name">{profile.name}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="availability-chip" aria-label="Availability">
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
          {hasCv ? (
            <a className="button button--ghost" href={cvUrl} target="_blank" rel="noreferrer">
              <Download size={18} aria-hidden="true" />
              Download CV
            </a>
          ) : null}
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
        <StatusTerminal />
      </Reveal>
    </section>
  );
}

export default Hero;
