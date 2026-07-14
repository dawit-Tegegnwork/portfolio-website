import React from 'react';
import { FileDown } from 'lucide-react';
import { availability, profile } from '../data/site';
import Reveal from './Reveal';

function About() {
  const cvHref = `${process.env.PUBLIC_URL || ''}/${profile.cvFilename}`;

  return (
    <section className="section section--about" id="about">
      <Reveal>
        <div className="about-panel field-note">
          <span className="field-note__pin" aria-hidden="true" />
          <span className="section-heading__kicker">About Dawit</span>
          <h2>Senior Full-Stack Developer · ERP / LIMS · Digital Health</h2>
          <p className="about-panel__lead">{profile.about}</p>
          <p className="about-panel__lead">
            Education: BSc in Computer Science and Engineering — Adama Science and Technology
            University, Ethiopia (Sep 2017–Sep 2021).
          </p>
          <div className="about-panel__international">
            <span>{availability.location}</span>
            <span>{availability.timezone}</span>
            <span>{availability.remote}</span>
            {availability.languages.map((lang) => (
              <span key={lang}>{lang}</span>
            ))}
          </div>
          <p className="about-panel__note">
            <strong>Professional delivery</strong> (OpenELIS, ERPNext, hospital systems) is described
            from my CV and employer work. <strong>Public labs</strong> below are synthetic,
            production-style reference projects recruiters can clone and run — not the confidential
            production systems themselves.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <a className="text-link" href={cvHref} download>
              <FileDown size={18} aria-hidden="true" />
              Download full CV (PDF)
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default About;
