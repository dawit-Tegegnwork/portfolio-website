import React from 'react';
import { proofItems } from '../data/site';
import AnimatedCounter from './AnimatedCounter';
import Reveal from './Reveal';

function ProofWall() {
  return (
    <section className="section section--sand" id="proof">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Proof</span>
          <h2>CV credibility + public lab evidence</h2>
          <p>
            Years of production delivery (OpenELIS, ERP, hospital systems) plus open labs with tests,
            Docker, and CI that you can verify before the interview.
          </p>
        </div>
      </Reveal>

      <div className="proof-wall">
        {proofItems.map((item, index) => (
          <Reveal key={item.label} delay={index * 50}>
            <article className="proof-card" style={{ '--proof-accent': item.accent }}>
              <span className="proof-card__badge">{item.badge}</span>
              <strong>
                <AnimatedCounter value={item.value} />
              </strong>
              <span>{item.label}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default ProofWall;
