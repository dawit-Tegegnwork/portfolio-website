import React from 'react';
import { Bot, Database, Globe, HeartPulse, Server, Wrench } from 'lucide-react';
import { skillZones } from '../data/site';
import Reveal from './Reveal';

const zoneIcons = {
  api: Server,
  interface: Globe,
  data: Database,
  health: HeartPulse,
  ai: Bot,
  ops: Wrench,
};

function SkillZones({ onSkillClick, activeProjectId }) {
  return (
    <section className="section" id="skills">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__kicker">Skills as operating zones</span>
          <h2>Six zones where I ship real systems</h2>
          <p>
            Visual map of technical depth — click a linked tool to jump to its proof project below.
          </p>
        </div>
      </Reveal>

      <div className="skill-zones">
        {skillZones.map((zone, index) => {
          const Icon = zoneIcons[zone.icon] || Server;
          return (
            <Reveal key={zone.id} delay={index * 60}>
              <article className="skill-zone" style={{ '--zone-accent': zone.accent }}>
                <div className="skill-zone__header">
                  <span className="skill-zone__icon" aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <h3>{zone.title}</h3>
                  <span className="pulse-dot pulse-dot--zone" aria-hidden="true" />
                </div>
                <div className="skill-zone__tools">
                  {zone.tools.map((tool) => {
                    const isLinked = tool.projectIds && tool.projectIds.length > 0;
                    const isActive =
                      isLinked && activeProjectId && tool.projectIds.includes(activeProjectId);

                    if (isLinked && onSkillClick) {
                      return (
                        <button
                          key={tool.name}
                          type="button"
                          className={`skill-chip skill-chip--clickable ${isActive ? 'skill-chip--active' : ''}`}
                          onClick={() => onSkillClick(tool.projectIds[0])}
                        >
                          {tool.name}
                        </button>
                      );
                    }

                    return (
                      <span key={tool.name} className="skill-chip">
                        {tool.name}
                      </span>
                    );
                  })}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default SkillZones;
