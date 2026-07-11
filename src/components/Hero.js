import React from 'react';
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';
import { availability, profile } from '../data/site';
import Reveal from './Reveal';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Reveal className="hero__copy">
        <p className="hero__overline">Dawit Tegegnwork Wubale / Software engineer</p>
        <h1 id="hero-heading" className="hero__title">
          Building useful software for <em>health systems</em> and the people who run them.
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
            <small>I make complicated systems easier to use.</small>
          </figcaption>
        </figure>
        <p>
          I work across backend engineering, healthcare interoperability, and applied AI.
          My portfolio focuses on practical systems: traceable workflows, dependable APIs,
          safer information tools, and software that can be understood after handover.
        </p>
        <p className="hero__location">
          {availability.location} / {availability.timezone} / {availability.remote}
        </p>
        <div className="hero__actions">
          <a className="text-link" href="#labs">
            Selected work <ArrowDownRight size={18} aria-hidden="true" />
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

      <div className="hero__index" aria-hidden="true">Scroll to meet the work ↓</div>
    </section>
  );
}

export default Hero;
