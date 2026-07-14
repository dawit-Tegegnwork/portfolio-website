import React from 'react';
import { expertise } from '../data/site';
import Reveal from './Reveal';

function Expertise() {
  return (
    <section className="section" id="expertise">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Technical expertise</span>
          <h2>The stack I use in production</h2>
          <p>
            PHP/Laravel-first full stack — React, Next.js, Tailwind CSS, Node.js, REST APIs,
            PostgreSQL/MySQL, Frappe/ERPNext, Odoo, Docker, Linux, and RBAC workflows.
          </p>
        </div>
      </Reveal>

      <div className="expertise-grid">
        {expertise.map((zone, index) => (
          <Reveal key={zone.id} delay={index * 50}>
            <article
              className="expertise-card"
              style={{ '--expertise-accent': zone.accent }}
            >
              <h3>{zone.title}</h3>
              <div className="expertise-card__items">
                {zone.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
