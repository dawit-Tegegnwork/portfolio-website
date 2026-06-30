import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/site';

function StickyCta() {
  return (
    <div className="sticky-cta" aria-label="Quick contact">
      <a className="sticky-cta__btn sticky-cta__btn--primary" href={`mailto:${profile.email}`}>
        <Mail size={18} aria-hidden="true" />
        Let&apos;s talk
      </a>
      <a
        className="sticky-cta__btn sticky-cta__btn--secondary"
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin size={18} aria-hidden="true" />
        LinkedIn
      </a>
    </div>
  );
}

export default StickyCta;
