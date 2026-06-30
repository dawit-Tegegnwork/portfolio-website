import React from 'react';
import { availability, profile } from '../data/site';
import Reveal from './Reveal';

function About() {
  return (
    <section className="section section--about" id="about">
      <Reveal>
        <div className="about-panel">
          <span className="section-heading__kicker">About</span>
          <h2>Engineering for healthcare, data, and operations</h2>
          <p className="about-panel__lead">{profile.about}</p>
          <div className="about-panel__international">
            <span>{availability.location}</span>
            <span>{availability.remote}</span>
            {availability.languages.map((lang) => (
              <span key={lang}>{lang}</span>
            ))}
          </div>
          <p className="about-panel__note">
            Portfolio projects use <strong>synthetic data only</strong> and are reference
            implementations — not deployed production systems used by hospitals, NGOs, or clients.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default About;
