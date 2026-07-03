import React, { useEffect, useRef, useState } from 'react';

function parseValue(value) {
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { prefix: '', number: null, suffix: String(value) };
  }
  return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] };
}

function AnimatedCounter({ value, duration = 1500, className = '' }) {
  const { prefix, number, suffix } = parseValue(value);
  const ref = useRef(null);
  const [display, setDisplay] = useState(number === null ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (number === null) return undefined;

    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(`${prefix}${number}${suffix}`);
      return undefined;
    }

    let frame;
    let start;
    const isFloat = !Number.isInteger(number);

    const step = (timestamp) => {
      if (start === undefined) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = number * eased;
      const rendered = isFloat ? current.toFixed(1) : Math.round(current);
      setDisplay(`${prefix}${rendered}${suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          frame = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [number, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export default AnimatedCounter;
