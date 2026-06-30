import React, { useCallback, useEffect, useState } from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';
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

  return <span className={className}>{liveDemo.label}</span>;
}

function ProjectExplorer({ highlightedProjectId, onProjectHighlight }) {
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const selectedIndex = projects.findIndex((p) => p.id === selectedId);
  const selected = projects[selectedIndex] || projects[0];

  useEffect(() => {
    if (highlightedProjectId && projects.some((p) => p.id === highlightedProjectId)) {
      setSelectedId(highlightedProjectId);
    }
  }, [highlightedProjectId]);

  const selectByOffset = useCallback(
    (offset) => {
      const next = (selectedIndex + offset + projects.length) % projects.length;
      const nextId = projects[next].id;
      setSelectedId(nextId);
      if (onProjectHighlight) onProjectHighlight(nextId);
    },
    [selectedIndex, onProjectHighlight]
  );

  useEffect(() => {
    const handleKey = (event) => {
      const tag = event.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON') return;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        selectByOffset(1);
      }
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        selectByOffset(-1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectByOffset]);

  const handleSelect = (id) => {
    setSelectedId(id);
    if (onProjectHighlight) onProjectHighlight(id);
  };

  return (
    <section className="section" id="projects" tabIndex={-1}>
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Featured case studies</span>
          <h2>Pick a project — copy the command, run it locally</h2>
          <p>
            Interactive explorer for six production-style reference implementations. Use arrow keys
            to switch projects. All demos use synthetic data.
          </p>
          <p className="explorer-hint">
            <kbd>↑</kbd> <kbd>↓</kbd> to switch · click <strong>Copy</strong> to run in your terminal
          </p>
        </div>
      </Reveal>

      <div className="project-explorer">
        <div className="project-explorer__list" role="tablist" aria-label="Portfolio projects">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={selectedId === project.id}
              className={`project-tab ${selectedId === project.id ? 'project-tab--active' : ''}`}
              style={{ '--tab-accent': project.accent }}
              onClick={() => handleSelect(project.id)}
            >
              <span className="project-tab__num">{String(index + 1).padStart(2, '0')}</span>
              <span className="project-tab__title">{project.shortTitle}</span>
              <span className="project-tab__meta">{project.tests} tests</span>
            </button>
          ))}
        </div>

        <Reveal key={selected.id} className="project-explorer__detail">
          <article
            className="project-detail"
            role="tabpanel"
            style={{ '--detail-accent': selected.accent }}
          >
            <div className="project-detail__media">
              <img src={selected.screenshot} alt={`${selected.title} preview`} loading="lazy" />
            </div>

            <div className="project-detail__content">
              <div className="project-detail__top">
                <DemoStatus liveDemo={selected.liveDemo} />
                <span className="project-detail__role">{selected.roleFit}</span>
              </div>

              <h3>{selected.title}</h3>

              <div className="project-detail__block">
                <span className="case-study__label">Problem solved</span>
                <p>{selected.problem}</p>
              </div>

              <div className="project-detail__block">
                <span className="case-study__label">What it proves</span>
                <ul>
                  {selected.proves.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-detail__tags">
                {selected.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-detail__command">
                <Terminal size={16} aria-hidden="true" />
                <code>{selected.localTest}</code>
                <CopyButton text={selected.localTest} />
              </div>

              <div className="project-detail__links">
                <a href={selected.github} target="_blank" rel="noreferrer">
                  GitHub
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                {selected.deployGuide ? (
                  <a href={selected.deployGuide} target="_blank" rel="noreferrer">
                    Deploy guide
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectExplorer;
