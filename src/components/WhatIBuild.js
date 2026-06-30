import React from 'react';
import { projects, whatIBuild } from '../data/site';
import Reveal from './Reveal';

function WhatIBuild() {
  const projectById = Object.fromEntries(projects.map((p) => [p.id, p]));

  return (
    <section className="section" id="build">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">What I build</span>
          <h2>Four lanes of practical health-tech engineering</h2>
          <p>
            Each card maps a real problem to tools I use and a portfolio project you can run locally
            to verify the work.
          </p>
        </div>
      </Reveal>

      <div className="build-grid">
        {whatIBuild.map((card, index) => {
          const proof = projectById[card.proofProjectId];
          return (
            <Reveal key={card.id} delay={index * 70}>
              <article
                className="build-card field-note"
                style={{ '--card-accent': card.accent, '--note-rotate': `${(index % 2 === 0 ? -1 : 1) * 0.6}deg` }}
              >
                <span className="field-note__pin" aria-hidden="true" />
                <h3>{card.title}</h3>
                <div className="build-card__block">
                  <span className="build-card__label">Problem</span>
                  <p>{card.problem}</p>
                </div>
                <div className="build-card__block">
                  <span className="build-card__label">Tools</span>
                  <div className="build-card__tools">
                    {card.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
                {proof ? (
                  <div className="build-card__block">
                    <span className="build-card__label">Proof project</span>
                    <a className="build-card__proof" href={`#mission-${proof.id}`}>
                      {proof.title}
                      <span className="status-badge status-badge--ok">{proof.tests} tests</span>
                    </a>
                  </div>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default WhatIBuild;
