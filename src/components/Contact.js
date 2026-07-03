import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/site';
import Reveal from './Reveal';

function Contact() {
  return (
    <footer className="site-footer" id="contact">
      <Reveal>
        <div className="site-footer__content">
          <div>
            <span className="section-heading__kicker">Contact</span>
            <h2>Let&apos;s talk about your next modernization challenge</h2>
            <p>
              Open to international roles in healthcare AI, digital health interoperability,
              backend engineering, and application support.
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
          </div>
        </div>
      </Reveal>

      <p className="site-footer__fineprint">
        © {new Date().getFullYear()} {profile.name}. Modernization labs use synthetic data only —
        not deployed production systems.
      </p>
    </footer>
  );
}

export default Contact;
