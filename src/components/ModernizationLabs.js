import React from 'react';
import { ArrowUpRight, Github, Terminal } from 'lucide-react';
import { modernizationLabs } from '../data/site';
import CopyButton from './CopyButton';
import Reveal from './Reveal';

function ModernizationLabs() {
  return (
    <section className="section section--sand" id="labs">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Modernization Labs</span>
          <h2>Flagship systems you can run and inspect</h2>
          <p>
            Production-style reference implementations with synthetic data — modernization labs, not
            deployed clinical or government systems.
          </p>
        </div>
      </Reveal>

      <div className="lab-grid">
        {modernizationLabs.map((lab, index) => (
          <Reveal key={lab.id} delay={index * 70}>
            <article
              id={`lab-${lab.id}`}
              className="lab-card"
              style={{ '--lab-accent': lab.accent }}
            >
              <div className="lab-card__media">
                <img src={lab.screenshot} alt={`${lab.name} preview`} loading="lazy" />
                <span className="lab-card__tag">{lab.tag}</span>
              </div>

              <div className="lab-card__body">
                <h3>{lab.name}</h3>

                <div className="lab-card__block">
                  <span className="lab-card__label">Problem</span>
                  <p>{lab.problem}</p>
                </div>

                <div className="lab-card__block">
                  <span className="lab-card__label">Modernization</span>
                  <p>{lab.modernization}</p>
                </div>

                <div className="lab-card__stack">
                  {lab.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {lab.tests ? (
                  <span className="status-badge status-badge--ok">{lab.tests} tests</span>
                ) : null}

                <div className="lab-card__command">
                  <Terminal size={16} aria-hidden="true" />
                  <code>{lab.localTest}</code>
                  <CopyButton text={lab.localTest} label="Copy run command" />
                </div>

                <div className="lab-card__actions">
                  <a
                    className="button button--primary"
                    href={lab.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} aria-hidden="true" />
                    GitHub
                  </a>
                  {lab.docsUrl ? (
                    <a
                      className="button button--secondary"
                      href={lab.docsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Docs &amp; runbook
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default ModernizationLabs;
