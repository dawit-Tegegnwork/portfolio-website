import React from 'react';
import { roleLanes } from '../data/site';
import Reveal from './Reveal';

function RoleLanes() {
  return (
    <section className="section" id="focus">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Role lanes</span>
          <h2>Diverse focus, one engineering thread</h2>
          <p>
            Backend depth, healthcare AI, digital health data, and application support — each lane maps
            to portfolio projects you can evaluate in minutes.
          </p>
        </div>
      </Reveal>

      <div className="role-lanes">
        {roleLanes.map((lane, index) => (
          <Reveal key={lane.id} delay={index * 70}>
            <article className="role-lane">
              <div className="role-lane__index">{String(index + 1).padStart(2, '0')}</div>
              <div className="role-lane__body">
                <h3>{lane.title}</h3>
                <p>{lane.summary}</p>
                <div className="role-lane__skills">
                  {lane.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <p className="role-lane__proof">
                  <span className="role-lane__proof-label">Proof projects</span>
                  {lane.projects.join(' · ')}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default RoleLanes;
