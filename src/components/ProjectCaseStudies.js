import React from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { projects } from '../data/site';
import Reveal from './Reveal';

function DemoStatus({ liveDemo }) {
  const className =
    liveDemo.status === 'local'
      ? 'demo-pill demo-pill--local'
      : liveDemo.status === 'live'
        ? 'demo-pill demo-pill--live'
        : 'demo-pill demo-pill--soon';

  return <span className={className}>{liveDemo.label}</span>;
}

function ScreenshotPanel({ project }) {
  if (project.screenshot) {
    return (
      <div className="case-study__media">
        <img src={project.screenshot} alt={`${project.title} screenshot`} loading="lazy" />
      </div>
    );
  }

  return (
    <div className="case-study__media case-study__media--placeholder" aria-hidden="true">
      <span className="case-study__placeholder-label">Local demo available</span>
      <span className="case-study__placeholder-sub">Screenshot coming soon</span>
    </div>
  );
}

function ProjectCaseStudies() {
  return (
    <section className="section" id="projects">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Featured case studies</span>
          <h2>Production-style portfolio projects</h2>
          <p>
            Each card is a reference implementation with synthetic data, tests, and a documented local
            test path. Cloud live demos are marked honestly — no invented URLs.
          </p>
        </div>
      </Reveal>

      <div className="case-studies">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 60}>
            <article className="case-study">
              <ScreenshotPanel project={project} />

              <div className="case-study__content">
                <div className="case-study__top">
                  <span className="case-study__number">{String(index + 1).padStart(2, '0')}</span>
                  <DemoStatus liveDemo={project.liveDemo} />
                </div>

                <h3>{project.title}</h3>
                <p className="case-study__role">{project.roleFit}</p>

                <div className="case-study__block">
                  <span className="case-study__label">Problem solved</span>
                  <p>{project.problem}</p>
                </div>

                <div className="case-study__block">
                  <span className="case-study__label">What it proves</span>
                  <ul>
                    {project.proves.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="case-study__meta">
                  <div className="case-study__tags">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  {project.tests ? (
                    <span className="case-study__tests">{project.tests} tests</span>
                  ) : null}
                </div>

                <div className="case-study__command">
                  <Terminal size={16} aria-hidden="true" />
                  <code>{project.localTest}</code>
                </div>

                <div className="case-study__links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  {project.deployGuide ? (
                    <a href={project.deployGuide} target="_blank" rel="noreferrer">
                      Deploy guide
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

export default ProjectCaseStudies;
