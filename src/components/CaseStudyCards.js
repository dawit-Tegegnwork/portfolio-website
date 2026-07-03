import React from 'react';
import { ArrowUpRight, Github, Terminal } from 'lucide-react';
import { caseStudies } from '../data/site';
import CopyButton from './CopyButton';
import Reveal from './Reveal';

function CaseStudyCards() {
  return (
    <section className="section section--sand" id="cases">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Case studies</span>
          <h2>Problem → modernization → how to test</h2>
          <p>
            Each card is a self-contained modernization lab. Clone, run Docker, and verify with the
            commands below.
          </p>
        </div>
      </Reveal>

      <div className="case-grid">
        {caseStudies.map((study, index) => (
          <Reveal key={study.id} delay={index * 50}>
            <article
              id={`case-${study.id}`}
              className="case-card"
              style={{ '--case-accent': study.accent }}
            >
              <div className="case-card__header">
                <img
                  src={study.screenshot}
                  alt={`${study.title} preview`}
                  loading="lazy"
                  className="case-card__thumb"
                />
                <div>
                  <span className="case-card__role">{study.roleFit}</span>
                  <h3>{study.title}</h3>
                  <span className="status-badge status-badge--ok">{study.tests} tests</span>
                </div>
              </div>

              <div className="case-card__block">
                <span className="case-card__label">Problem</span>
                <p>{study.problem}</p>
              </div>

              <div className="case-card__block">
                <span className="case-card__label">Modernization</span>
                <p>{study.modernization}</p>
              </div>

              <div className="case-card__block">
                <span className="case-card__label">Stack</span>
                <div className="case-card__stack">
                  {study.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="case-card__block">
                <span className="case-card__label">How to test</span>
                <div className="case-card__command">
                  <Terminal size={16} aria-hidden="true" />
                  <code>{study.howToTest}</code>
                  <CopyButton text={study.howToTest} label="Copy test command" />
                </div>
              </div>

              <a
                className="case-card__github"
                href={study.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} aria-hidden="true" />
                View on GitHub
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default CaseStudyCards;
