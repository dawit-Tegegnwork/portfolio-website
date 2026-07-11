import React, { useMemo } from 'react';
import { systemsMap } from '../data/site';

function SystemsMap() {
  const { nodes, edges } = systemsMap;

  const nodeMap = useMemo(
    () => Object.fromEntries(nodes.map((node) => [node.id, node])),
    [nodes]
  );

  const paths = useMemo(
    () =>
      edges.map(([fromId, toId], index) => {
        const from = nodeMap[fromId];
        const to = nodeMap[toId];
        if (!from || !to) return null;
        const x1 = from.x;
        const y1 = from.y;
        const x2 = to.x;
        const y2 = to.y;
        const cx = (x1 + x2) / 2;
        const cy = (y1 + y2) / 2 - 6;
        return {
          id: `${fromId}-${toId}-${index}`,
          d: `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`,
        };
      }).filter(Boolean),
    [edges, nodeMap]
  );

  return (
    <div className="systems-map" aria-label="Health-tech systems map">
      <div className="systems-map__frame">
        <span className="systems-map__badge">
          <span className="pulse-dot pulse-dot--live" aria-hidden="true" />
          Systems online
        </span>
        <svg
          className="systems-map__svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-labelledby="systems-map-title"
        >
          <title id="systems-map-title">Connected health-tech system nodes</title>
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E9E8E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1FA85B" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {paths.map((path) => (
            <g key={path.id}>
              <path className="systems-map__line" d={path.d} fill="none" />
              <circle className="systems-map__dot" r="0.9">
                <animateMotion dur="4s" repeatCount="indefinite" path={path.d} />
              </circle>
            </g>
          ))}

          {nodes.map((node, index) => (
            <g
              key={node.id}
              className="systems-map__node"
              transform={`translate(${node.x}, ${node.y})`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <rect
                className="systems-map__node-bg"
                x="-14"
                y="-5.5"
                width="28"
                height="11"
                rx="3"
              />
              <text className="systems-map__node-label" textAnchor="middle" dy="1.2">
                {node.label}
              </text>
              {node.tech.map((tech, techIndex) => (
                <text
                  key={tech}
                  className="systems-map__tech"
                  textAnchor="middle"
                  dy={techIndex === 0 ? 8.5 : 11.5}
                >
                  {tech}
                </text>
              ))}
            </g>
          ))}
        </svg>
        <div className="systems-map__links">
          {nodes.map((node) => (
            <a
              key={node.id}
              className="systems-map__link"
              href={`#lab-${node.missionId}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <span className="sr-only">{node.label} project</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SystemsMap;
