import React from 'react';
import { FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/site';
import Reveal from './Reveal';

function Contact() {
  const cvHref = `${process.env.PUBLIC_URL || ''}/Dawit_Tegegnwork_Wubale_CV.pdf`;

  return (
    <footer className="site-footer" id="contact">
      <Reveal>
        <div className="site-footer__content">
          <div>
            <span className="section-heading__kicker">Contact</span>
            <h2>Let&apos;s build the next enterprise system together</h2>
            <p>
              Available for senior full-stack, enterprise software, ERP, integration, healthcare,
              and laboratory systems roles in Addis Ababa or remotely.
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
