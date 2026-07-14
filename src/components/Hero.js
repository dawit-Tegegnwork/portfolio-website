import React from 'react';
import { ArrowDownRight, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { availability, profile } from '../data/site';
import Reveal from './Reveal';

function Hero() {
  const cvHref = `${process.env.PUBLIC_URL || ''}/${profile.cvFilename}`;

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Reveal className="hero__copy">
        <p className="hero__overline">
          {profile.name} / {profile.title}
        </p>
        <p className="hero__tagline">{profile.tagline}</p>
        <h1 id="hero-heading" className="hero__title">
          Building useful software for <em>{profile.headlineEmphasis}</em> and the people who run
          them.
        </h1>
      </Reveal>

      <Reveal className="hero__intro" delay={80}>
        <figure className="hero__portrait">
          <img
            src={`${process.env.PUBLIC_URL || ''}/dawit-portrait.jpg`}
            alt="Dawit Tegegnwork Wubale"
          />
          <figcaption>
            <span>Hello from Addis Ababa.</span>
            <small>OpenELIS · ERPNext · Laravel · React</small>
          </figcaption>
        </figure>
        <p>{profile.subheadline}</p>
        <p className="hero__location">
          {availability.location} / {availability.timezone} / {availability.remote}
        </p>
        <div className="hero__actions">
          <a className="text-link" href="#experience">
            Experience <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a className="text-link" href="#delivery">
            Enterprise delivery <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a className="text-link" href={cvHref} download>
            <FileDown size={18} aria-hidden="true" />
            Download CV
          </a>
          <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={19} />
          </a>
          <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={19} />
          </a>
        </div>
      </Reveal>

      <div className="hero__index" aria-hidden="true">
        Senior Full-Stack · React/Next.js · Laravel/Node.js · ERP/LIMS ↓
      </div>
    </section>
  );
}

export default Hero;
