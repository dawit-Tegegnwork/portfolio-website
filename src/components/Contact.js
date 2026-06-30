import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/site';
import Reveal from './Reveal';

function Contact() {
  return (
    <footer className="site-footer" id="contact">
      <Reveal>
        <div className="site-footer__content">
          <div>
            <span className="section-heading__kicker">Contact</span>
            <h2>Want someone who can build, debug, document, and keep systems useful?</h2>
            <p>
              Open to international opportunities in backend engineering, healthcare software, AI
              workflows, data integration, and application support.
            </p>
          </div>

          <div className="site-footer__actions">
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              Email Dawit
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
            <a
              className="button button--ghost"
              href={profile.liveSite}
              target="_blank"
              rel="noreferrer"
            >
              Live portfolio
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>

      <p className="site-footer__fineprint">
        © {new Date().getFullYear()} {profile.name}. Health-Tech Systems Lab · synthetic data only.
      </p>
    </footer>
  );
}

export default Contact;
