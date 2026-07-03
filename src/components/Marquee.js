import React from 'react';
import { marqueeItems } from '../data/site';

function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee__item">
            {item}
            <span className="marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
