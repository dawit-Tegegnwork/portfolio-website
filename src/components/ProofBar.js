import React from 'react';
import { proofItems } from '../data/site';
import Reveal from './Reveal';

function ProofBar() {
  return (
    <section className="section" id="proof">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Proof</span>
          <h2>Evidence you can verify on GitHub</h2>
          <p>
            Automated tests, CI workflows, Docker setups, and synthetic-data safety — designed so
            recruiters can evaluate engineering quality without scheduling a call first.
          </p>
        </div>
      </Reveal>

      <div className="proof-grid">
        {proofItems.map((item, index) => (
          <Reveal key={item.label} delay={index * 50}>
            <article className="proof-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default ProofBar;
