import React from 'react';
import { proofItems } from '../data/site';
import Reveal from './Reveal';

function ProofWall() {
  return (
    <section className="section section--sand" id="proof">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Proof wall</span>
          <h2>Evidence you can verify on GitHub</h2>
          <p>
            Automated tests, CI workflows, Docker setups, screenshots, and synthetic-data safety —
            built so recruiters can evaluate quality without scheduling a call first.
          </p>
        </div>
      </Reveal>

      <div className="proof-wall">
        {proofItems.map((item, index) => (
          <Reveal key={item.label} delay={index * 50}>
            <article className="proof-card" style={{ '--proof-accent': item.accent }}>
              <span className="proof-card__badge">{item.badge}</span>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default ProofWall;
