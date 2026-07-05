import React from 'react';

function buildPath(beats, width, mid) {
  const seg = width / beats;
  let d = `M0 ${mid}`;
  for (let i = 0; i < beats; i += 1) {
    const x = i * seg;
    d +=
      ` L${x + seg * 0.3} ${mid}` +
      ` L${x + seg * 0.38} ${mid - 6}` +
      ` L${x + seg * 0.46} ${mid + 34}` +
      ` L${x + seg * 0.54} ${mid - 48}` +
      ` L${x + seg * 0.62} ${mid + 10}` +
      ` L${x + seg * 0.7} ${mid}` +
      ` L${x + seg} ${mid}`;
  }
  return d;
}

function PulseLine({ className = '', beats = 6, color = 'currentColor' }) {
  const width = 1200;
  const height = 100;
  const mid = height / 2;
  const d = buildPath(beats, width, mid);

  return (
    <svg
      className={`pulse-line ${className}`.trim()}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      role="presentation"
      aria-hidden="true"
    >
      <path className="pulse-line__base" d={d} stroke={color} fill="none" />
      <path className="pulse-line__sweep" d={d} stroke={color} fill="none" />
    </svg>
  );
}

export default PulseLine;
