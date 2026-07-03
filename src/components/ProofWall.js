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
          <h2>Evidence you can verify before the interview</h2>
          <p>
            Tests passing, Docker stacks, CI pipelines, synthetic-data safety, and docs/runbooks —
            built so recruiters can evaluate engineering quality on their own schedule.
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
