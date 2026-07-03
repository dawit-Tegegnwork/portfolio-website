import React from 'react';
import { availability, profile } from '../data/site';
import Reveal from './Reveal';

function About() {
  return (
    <section className="section section--about" id="about">
      <Reveal>
        <div className="about-panel field-note">
          <span className="field-note__pin" aria-hidden="true" />
          <span className="section-heading__kicker">About Dawit</span>
          <h2>Digital health systems modernization engineer</h2>
          <p className="about-panel__lead">{profile.about}</p>
          <div className="about-panel__international">
            <span>{availability.location}</span>
            <span>{availability.timezone}</span>
            <span>{availability.remote}</span>
            {availability.languages.map((lang) => (
              <span key={lang}>{lang}</span>
            ))}
          </div>
          <p className="about-panel__note">
            All portfolio work is <strong>production-style modernization labs</strong> with synthetic
            data — reference implementations for evaluation, not deployed hospital, NGO, or government
            systems.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default About;
