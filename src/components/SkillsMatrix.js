import React from 'react';
import { skillGroups } from '../data/site';
import Reveal from './Reveal';

function SkillsMatrix({ onSkillClick, activeProjectId }) {
  return (
    <section className="section section--paper" id="skills">
      <Reveal>
        <div className="section-heading section-heading--paper">
          <span className="section-heading__kicker">Skills matrix</span>
          <h2>Technical depth by domain</h2>
          <p>
            Core skills are backed by portfolio projects. Click a skill to jump to a related project.
            Items marked &ldquo;Learning + building&rdquo; are actively developed — not overstated.
          </p>
        </div>
      </Reveal>

      <div className="skills-matrix">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 70}>
            <article className="skills-matrix__group">
              <h3>{group.title}</h3>
              <div className="skills-matrix__items">
                {group.items.map((item) => {
                  const isLinked = item.projectIds && item.projectIds.length > 0;
                  const isActive =
                    isLinked && activeProjectId && item.projectIds.includes(activeProjectId);

                  if (isLinked && onSkillClick) {
                    return (
                      <button
                        key={item.name}
                        type="button"
                        className={`skill-chip skill-chip--clickable ${item.level === 'learning' ? 'skill-chip--learning' : ''} ${isActive ? 'skill-chip--active' : ''}`}
                        onClick={() => onSkillClick(item.projectIds[0])}
                      >
                        {item.name}
                        {item.level === 'learning' ? (
                          <em className="skill-chip__note">Learning + building</em>
                        ) : null}
                      </button>
                    );
                  }

                  return (
                    <span
                      key={item.name}
                      className={`skill-chip ${item.level === 'learning' ? 'skill-chip--learning' : ''}`}
                    >
                      {item.name}
                      {item.level === 'learning' ? (
                        <em className="skill-chip__note">Learning + building</em>
                      ) : null}
                    </span>
                  );
                })}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default SkillsMatrix;
