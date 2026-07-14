import React from 'react';
import { experience } from '../data/site';
import Reveal from './Reveal';

function ExperienceTimeline() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Professional experience</span>
          <h2>Five years of production systems, not slideware</h2>
          <p>
            Hands-on full-stack delivery across healthcare, research laboratories, ERP, and hospital
            operations — from OpenELIS customization to day-to-day production support.
          </p>
        </div>
      </Reveal>

      <div className="experience-timeline">
        {experience.map((job, index) => (
          <Reveal key={job.id} delay={index * 70}>
            <article
              className="experience-card"
              style={{ '--exp-accent': job.accent }}
            >
              <div className="experience-card__meta">
                <span className="experience-card__period">{job.period}</span>
                <span className="experience-card__location">{job.location}</span>
              </div>
              <h3>{job.role}</h3>
              <p className="experience-card__company">{job.company}</p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 48)}>{bullet}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
