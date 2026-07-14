import React from 'react';
import { Bot, Cloud, Database, FileCheck, GitBranch, Shield } from 'lucide-react';
import { whatIImprove } from '../data/site';
import Reveal from './Reveal';

const improveIcons = {
  workflow: GitBranch,
  audit: FileCheck,
  validation: Database,
  api: Cloud,
  deploy: Cloud,
  safety: Shield,
};

function WhatIImprove() {
  return (
    <section className="section" id="improve">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">What I improve</span>
          <h2>Outcomes enterprise operations actually need</h2>
          <p>
            The operational gaps I close when building or modernizing multi-user business,
            laboratory, and service platforms.
          </p>
        </div>
      </Reveal>

      <div className="improve-grid">
        {whatIImprove.map((item, index) => {
          const Icon = improveIcons[item.icon] || Bot;
          return (
            <Reveal key={item.id} delay={index * 50}>
              <article
                className="improve-card"
                style={{ '--improve-accent': item.accent }}
              >
                <span className="improve-card__icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default WhatIImprove;
