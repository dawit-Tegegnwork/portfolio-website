import React from 'react';
import { experience } from '../data/site';
import Reveal from './Reveal';

function ExperienceTimeline() {
  return (
    <section className="section section--band" id="experience">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Experience</span>
          <h2>Healthcare software in real operational environments</h2>
          <p>
            Four years building EMR modules, clinical workflows, integrations, and AI-enabled features
            — alongside production-style portfolio projects for recruiter evaluation.
          </p>
        </div>
      </Reveal>

      <div className="experience-timeline">
        {experience.map((item, index) => (
          <Reveal key={item.id} delay={index * 80}>
            <article className="experience-item">
              <div className="experience-item__rail">
                <span className="experience-item__dot" />
                {index < experience.length - 1 ? <span className="experience-item__line" /> : null}
              </div>
              <div className="experience-item__body">
                <span className="experience-item__period">{item.period}</span>
                <h3>{item.role}</h3>
                <p className="experience-item__company">
                  {item.company} · {item.location}
                </p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
