import React from 'react';
import { FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/site';
import Reveal from './Reveal';

function Contact() {
  const cvHref = `${process.env.PUBLIC_URL || ''}/${profile.cvFilename}`;

  return (
    <footer className="site-footer" id="contact">
      <Reveal>
        <div className="site-footer__content">
          <div>
            <span className="section-heading__kicker">Contact</span>
            <h2>Hiring for full-stack, LIMS, or ERP delivery?</h2>
            <p>
              Open to international roles as a Senior Full-Stack Developer across React/Next.js,
              Laravel/Node.js, digital health / LIMS, and enterprise ERP platforms.
            </p>
          </div>

          <div className="site-footer__actions">
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              {profile.email}
            </a>
            <a
              className="button button--secondary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              className="button button--ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a className="button button--ghost" href={cvHref} download>
              <FileDown size={18} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>
      </Reveal>

      <p className="site-footer__fineprint">
        © {new Date().getFullYear()} {profile.name}. Production experience from my CV; public labs
        use synthetic data only.
      </p>
    </footer>
  );
}

export default Contact;
