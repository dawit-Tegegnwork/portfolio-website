import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { rolePathways } from '../data/site';
import Reveal from './Reveal';

function RolePathways() {
  return (
    <section className="section" id="roles">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Role pathways</span>
          <h2>Four ways to evaluate my fit</h2>
          <p>
            Each pathway maps to modernization labs with tests, Docker, and documentation — not
            slide decks.
          </p>
        </div>
      </Reveal>

      <div className="role-grid">
        {rolePathways.map((role, index) => (
          <Reveal key={role.id} delay={index * 60}>
            <article
              id={`role-${role.id}`}
              className="role-card"
              style={{ '--role-accent': role.accent }}
            >
              <h3>{role.title}</h3>
              <p>{role.summary}</p>
              <div className="role-card__skills">
                {role.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="role-card__labs">
                {role.labIds.map((labId) => (
                  <a key={labId} href={`#lab-${labId}`} className="role-card__lab-link">
                    View lab
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default RolePathways;
