import React from 'react';
import { ArrowUpRight, ExternalLink, Play, Terminal } from 'lucide-react';
import { projects } from '../data/site';
import CopyButton from './CopyButton';
import Reveal from './Reveal';

function DemoStatus({ liveDemo }) {
  const className =
    liveDemo.status === 'local'
      ? 'demo-pill demo-pill--local'
      : liveDemo.status === 'live'
        ? 'demo-pill demo-pill--live'
        : 'demo-pill demo-pill--soon';

  if (liveDemo.url) {
    return (
      <a
        className={`${className} demo-pill--link`}
        href={liveDemo.url}
        target="_blank"
        rel="noreferrer"
      >
        {liveDemo.label}
      </a>
    );
  }

  return <span className={className}>{liveDemo.label}</span>;
}

function ProjectMissions({ highlightedProjectId }) {
  return (
    <section className="section section--sand" id="projects" tabIndex={-1}>
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Project Missions</span>
          <h2>Six systems you can inspect, test, and run</h2>
          <p>
            Try live demos on Render (free tier — first load may take ~30s), copy a local command,
            or open GitHub. All synthetic data.
          </p>
        </div>
      </Reveal>

      <div className="mission-grid">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 60}>
            <article
              id={`mission-${project.id}`}
              className={`mission-card ${highlightedProjectId === project.id ? 'mission-card--highlight' : ''}`}
              style={{ '--mission-accent': project.accent }}
            >
              <a
                className="mission-card__media mission-card__media--link"
                href={project.liveDemo.url || project.github}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={project.screenshot}
                  alt={project.screenshotAlt || `${project.title} preview`}
                  loading="lazy"
                />
              </a>

              <div className="mission-card__body">
                <div className="mission-card__top">
                  <span className="mission-card__mission">{project.mission}</span>
                  <DemoStatus liveDemo={project.liveDemo} />
                </div>

                <h3>{project.title}</h3>
                <p className="mission-card__role">{project.roleFit}</p>

                <div className="mission-card__block">
                  <span className="mission-card__label">Real-world problem</span>
                  <p>{project.problem}</p>
                </div>

                <div className="mission-card__block">
                  <span className="mission-card__label">What the system does</span>
                  <p>{project.solution}</p>
                </div>

                <div className="mission-card__proves">
                  {project.proves.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="mission-card__tags">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="mission-card__proof">
                  <span className="status-badge status-badge--ok">{project.tests} tests</span>
                  {project.hasDocker ? <span className="status-badge">Docker</span> : null}
                  {project.hasCi ? <span className="status-badge">CI</span> : null}
                  {project.hasApi ? <span className="status-badge">API</span> : null}
                </div>

                <div className="mission-card__actions">
                  {project.liveDemo.url ? (
                    <a
                      className="button button--primary mission-card__cta"
                      href={project.liveDemo.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Play size={16} aria-hidden="true" />
                      Try live demo
                    </a>
                  ) : null}
                  {project.liveDemo.docsUrl ? (
                    <a
                      className="button button--secondary mission-card__cta"
                      href={project.liveDemo.docsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      API docs
                    </a>
                  ) : null}
                </div>

                <div className="mission-card__command">
                  <Terminal size={16} aria-hidden="true" />
                  <code>{project.localTest}</code>
                  <CopyButton text={project.localTest} label="Copy local demo command" />
                </div>

                <div className="mission-card__links">
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
                  {project.demoGuide ? (
                    <a href={project.demoGuide} target="_blank" rel="noreferrer">
                      Local demo guide
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

export default ProjectMissions;
