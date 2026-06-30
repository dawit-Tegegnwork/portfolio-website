import React, { useEffect, useState } from 'react';
import { heroStats } from '../data/site';

function StatusTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= heroStats.length) return undefined;
    const timer = setTimeout(() => setVisibleLines((n) => n + 1), 380);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="status-terminal" aria-label="Portfolio status terminal">
      <div className="status-terminal__chrome">
        <span className="status-terminal__dot status-terminal__dot--red" />
        <span className="status-terminal__dot status-terminal__dot--yellow" />
        <span className="status-terminal__dot status-terminal__dot--green" />
        <span className="status-terminal__title">dawit@portfolio ~ status</span>
      </div>
      <div className="status-terminal__body">
        {heroStats.slice(0, visibleLines).map((line) => (
          <div key={line.label} className="status-terminal__line">
            <span className="status-terminal__prompt">$</span>
            <span className="status-terminal__cmd">check {line.label}</span>
            <span className={`status-terminal__status status-terminal__status--${line.status}`}>
              {line.status === 'ok' ? 'OK' : 'INFO'}
            </span>
            <span className="status-terminal__detail">{line.detail}</span>
          </div>
        ))}
        {visibleLines < heroStats.length ? (
          <div className="status-terminal__line status-terminal__line--cursor">
            <span className="status-terminal__prompt">$</span>
            <span className="status-terminal__cursor" aria-hidden="true" />
          </div>
        ) : (
          <div className="status-terminal__line">
            <span className="status-terminal__prompt">$</span>
            <span className="status-terminal__cmd">ready</span>
            <span className="status-terminal__status status-terminal__status--ok">OK</span>
            <span className="status-terminal__detail">Pick a project below — copy & run locally</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default StatusTerminal;
