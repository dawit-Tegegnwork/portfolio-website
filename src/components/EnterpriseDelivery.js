import React from 'react';
import { enterpriseDelivery } from '../data/site';
import Reveal from './Reveal';

function EnterpriseDelivery() {
  return (
    <section className="section section--sand" id="delivery">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Selected enterprise delivery</span>
          <h2>What I shipped in real organizations</h2>
          <p>
            Production work from my CV — OpenELIS research LIMS, ERP/LMS platforms, Laravel
            applications, and healthcare integrations. Confidential systems; no fake public demos.
          </p>
        </div>
      </Reveal>

      <div className="delivery-grid">
        {enterpriseDelivery.map((item, index) => (
          <Reveal key={item.id} delay={index * 60}>
            <article
              id={`delivery-${item.id}`}
              className="delivery-card"
              style={{ '--delivery-accent': item.accent }}
            >
              <div className="delivery-card__top">
                <span className="delivery-card__tag">{item.tag}</span>
                <span className="delivery-card__role">{item.roleFit}</span>
              </div>
              <h3>{item.title}</h3>

              <div className="delivery-card__block">
                <span className="delivery-card__label">Challenge</span>
                <p>{item.problem}</p>
              </div>

              <div className="delivery-card__block">
                <span className="delivery-card__label">What I delivered</span>
                <p>{item.modernization}</p>
              </div>

              <div className="delivery-card__stack">
                {item.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <p className="delivery-card__note">{item.note}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default EnterpriseDelivery;
