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
          <h2>Where my CV maps to your opening</h2>
          <p>
            Senior Full-Stack, LIMS/digital health, ERP platforms, and application support —
            each lane links to public labs you can run, plus enterprise delivery above.
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
                <a href="#delivery" className="role-card__lab-link">
                  Enterprise delivery
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                {role.labIds.map((labId) => (
                  <a key={labId} href={`#lab-${labId}`} className="role-card__lab-link">
                    Public lab
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
