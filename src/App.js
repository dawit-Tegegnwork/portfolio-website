import React from 'react';
import {
  Activity,
  ArrowUpRight,
  Brain,
  Database,
  Download,
  FileText,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

const navigation = [
  { href: '#impact', label: 'Impact' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const metrics = [
  { value: '6.7M+', label: 'registered patients served by platforms I contribute to' },
  { value: '300K', label: 'daily users across the current EMR network' },
  { value: '50+', label: 'health facilities supported in live operations' },
  { value: '80%', label: 'core hospital processes digitized in a major rollout' },
  { value: '9.5M', label: 'medication dispensing records handled in production' },
  { value: '5,000+', label: 'medical professionals supported through training' },
];

const marqueeItems = [
  '50+ facilities in live operation',
  '6.7M+ registered patients on supported platforms',
  '300K daily users across the current network',
  '9.5M medication dispensing records handled',
  '2.5M scheduled appointments in production',
  '5,000+ medical professionals supported through training',
];

const strengths = [
  {
    icon: Workflow,
    title: 'Clinical Workflow Translation',
    description:
      'I turn how clinicians, pharmacists, lab teams, and administrators actually work into software that fits operational reality.',
  },
  {
    icon: Brain,
    title: 'Applied AI In Live Systems',
    description:
      'My recent work focuses on embedding AI-assisted documentation, automation, and decision-support features into production healthcare platforms.',
  },
  {
    icon: Database,
    title: 'Healthcare Data Reliability',
    description:
      'I work with structured and unstructured clinical data, integrations, and validation flows where accuracy and usability matter.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-Grade EMR Delivery',
    description:
      'My background spans hospital-wide EMR modules, lab integration, pharmacy workflows, user training, and long-term platform improvement.',
  },
];

const experience = [
  {
    period: 'Sep 2025 - Present',
    role: 'Software Engineer - AI & Healthcare Systems',
    company: 'Orbit Health',
    location: 'Addis Ababa, Ethiopia',
    highlights: [
      'Develop and maintain healthcare software modules and AI-enabled features within a live EMR platform supporting more than 50 health facilities.',
      'Contribute to systems serving 6.7 million registered patients and roughly 300,000 daily users across Ethiopia.',
      'Support intelligent documentation assistance, workflow automation, and clinical decision-support using both structured and unstructured health data.',
      'Help integrate machine learning capabilities while preserving system reliability and clinical usability in production.',
      'Work in an operational environment handling 9.5 million medication dispensing records and 2.5 million scheduled appointments.',
    ],
  },
  {
    period: 'Oct 2024 - Aug 2025',
    role: 'Healthcare Software Developer',
    company: 'iMedary',
    location: 'Remote',
    highlights: [
      'Customized hospital software modules for patient flow management, medical records, and administrative workflows in smaller facilities.',
      'Supported remote implementation and integration work across distributed teams.',
      'Adapted solutions to practical deployment constraints rather than forcing one-size-fits-all workflows.',
    ],
  },
  {
    period: 'Sep 2021 - Sep 2024',
    role: 'Software Developer - Healthcare Information Systems',
    company: 'Defence Specialized Referral Hospital',
    location: 'Addis Ababa, Ethiopia',
    highlights: [
      'Contributed to a three-year effort to design and build a hospital-wide EMR from scratch.',
      'Helped move approximately 80% of core hospital processes from paper to digital operations.',
      'Built core modules for patient registration, outpatient documentation, pharmacy management, and laboratory result integration.',
      'Worked directly with department heads and senior clinical staff to reflect real workflows in the system architecture.',
      'Connected medical equipment interfaces to the hospital information system and delivered training materials, manuals, and workflow guides.',
      'Contributed to training more than 5,000 medical professionals across the wider network.',
    ],
  },
];

const projects = [
  {
    title: 'Healthcare AI Workflow Assistant',
    link: 'https://github.com/dawit-Tegegnwork/healthcare-ai-workflow-assistant',
    description:
      'Synthetic healthcare AI workflow demo for structured extraction, human review, audit logs, and safe AI-assisted documentation.',
    details: [
      'FastAPI service with note intake, mock LLM extraction, reviewer approval states, and audit-friendly records.',
      'Includes OpenAPI documentation, Docker setup, tests, screenshots, and synthetic demo data only.',
      'Shows practical healthcare AI design without claiming autonomous clinical decision-making.',
    ],
    tags: ['FastAPI', 'Healthcare AI', 'PostgreSQL', 'Audit Logs', 'Docker'],
  },
  {
    title: 'Enterprise Workflow Management System',
    link: 'https://github.com/dawit-Tegegnwork/enterprise-workflow-management-system',
    description:
      'Approval workflow platform demonstrating backend APIs, JWT authentication, role-based access, status transitions, and reporting.',
    details: [
      'Models staff, managers, auditors, requests, approvals, comments, and audit history.',
      'Includes CSV export, API examples, Docker setup, and tests around workflow behavior.',
      'Directly supports backend, full-stack, application support, and enterprise systems roles.',
    ],
    tags: ['FastAPI', 'RBAC', 'JWT', 'Workflow', 'CSV Export'],
  },
  {
    title: 'Golang Transaction API',
    link: 'https://github.com/dawit-Tegegnwork/golang-transaction-api',
    description:
      'Go backend API for wallet-style transactions, idempotency keys, audit logs, deposits, withdrawals, and transfers.',
    details: [
      'Demonstrates transaction-safe API design, PostgreSQL persistence, Docker, and repeat-safe request handling.',
      'Includes endpoint documentation, schema notes, tests, and curl examples for recruiter review.',
      'Useful proof for backend, fintech, payment, and Golang developer applications.',
    ],
    tags: ['Go', 'PostgreSQL', 'REST API', 'Idempotency', 'Transactions'],
  },
  {
    title: 'Node Firebase Mobile Backend',
    link: 'https://github.com/dawit-Tegegnwork/node-firebase-mobile-backend',
    description:
      'Firebase emulator-based transport backend showing TypeScript Cloud Functions, Firestore rules, role-aware workflows, and notifications.',
    details: [
      'Covers dispatcher, driver, and admin flows with trip status updates and generated notification records.',
      'Runs locally with Firebase emulators, avoiding paid services while showing realistic mobile backend structure.',
      'Matches Node.js, TypeScript, Firebase, Cloud Functions, and mobile backend job requirements.',
    ],
    tags: ['Node.js', 'TypeScript', 'Firebase', 'Cloud Functions', 'Firestore'],
  },
  {
    title: 'CPIMS Information Management Demo',
    link: 'https://github.com/dawit-Tegegnwork/cpims-information-management-demo',
    description:
      'Synthetic case information management demo focused on data quality, duplicate detection, CSV import/export, and confidential records handling.',
    details: [
      'Implements case registration, completeness scoring, lifecycle states, duplicate-candidate review, and reporting commands.',
      'Documents privacy rules clearly and uses synthetic records only.',
      'Supports NGO, CPIMS, information management, data systems, and reporting applications.',
    ],
    tags: ['FastAPI', 'Information Management', 'Data Quality', 'CSV', 'NGO Systems'],
  },
  {
    title: 'Application Support Runbook Lab',
    link: 'https://github.com/dawit-Tegegnwork/application-support-runbook-lab',
    description:
      'Application support portfolio repo with runbooks, UAT plans, SQL checks, release checklists, and a synthetic issue tracker.',
    details: [
      'Shows how incidents are triaged, reproduced, documented, escalated, tested, and monitored after release.',
      'Includes practical templates for vendor escalation, user training, data-quality checks, and post-deployment monitoring.',
      'Useful for healthcare application support, implementation, and systems operations roles.',
    ],
    tags: ['Application Support', 'UAT', 'Runbooks', 'SQL Checks', 'FastAPI'],
  },
];

const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'Java', 'Go', 'Node.js', 'TypeScript', 'REST APIs'],
  },
  {
    title: 'AI and Backend',
    items: ['FastAPI', 'LLM workflows', 'RAG concepts', 'Prompting', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Digital Health',
    items: ['OpenMRS', 'OpenELIS', 'Bahmni', 'DHIS2/eCHIS', 'FHIR/HL7 concepts'],
  },
  {
    title: 'Systems Delivery',
    items: ['RBAC', 'Audit logs', 'CI/CD concepts', 'Linux', 'Application support', 'User training'],
  },
];

const languages = [
  'Amharic - Native',
  'English - Professional working proficiency',
  'Oromiffa - Conversational',
];

function App() {
  const resumeUrl = `${process.env.PUBLIC_URL}/Dawit-Tegegnwork-CV.pdf`;

  return (
    <div className="page-shell">
      <div className="page-backdrop" aria-hidden="true" />

      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#top">
            <span className="brand__mark">DT</span>
            <span className="brand__text">Dawit Tegegnwork Wubale</span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="site-nav__link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-content" id="top">
        <section className="hero">
          <div className="hero__copy">
            <span className="eyebrow">Healthcare software engineering with production-scale impact</span>
            <p className="hero__name">Dawit Tegegnwork Wubale</p>
            <h1 className="hero__title">
              Building healthcare software,
              <span className="hero__title-accent">workflow systems, and applied AI</span>
              for real clinical operations.
            </h1>
            <p className="hero__summary">
              Software engineer with more than four years of experience across healthcare information systems and applied AI.
              My work spans hospital-wide EMR development, clinical workflow digitization, lab and device integration, and
              AI-assisted features in live production platforms across Ethiopia.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                View projects
                <ArrowUpRight size={18} />
              </a>
              <a className="button button--secondary" href={resumeUrl} target="_blank" rel="noreferrer">
                Download CV
                <Download size={18} />
              </a>
            </div>

            <div className="hero__meta">
              <a className="meta-link" href="mailto:dawittegegnwork@gmail.com">
                <Mail size={16} />
                dawittegegnwork@gmail.com
              </a>
              <a className="meta-link" href="tel:+251939378664">
                <Phone size={16} />
                +251 939 378 664
              </a>
              <span className="meta-link">
                <MapPin size={16} />
                Bishoftu, Ethiopia
              </span>
              <a
                className="meta-link"
                href="https://github.com/dawit-Tegegnwork"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                github.com/dawit-Tegegnwork
              </a>
            </div>
          </div>

          <aside className="hero__panel">
            <div className="hero-card hero-card--accent">
              <span className="hero-card__label">Current focus</span>
              <h2>AI and healthcare systems in live EMR operations</h2>
              <p>
                Building AI-assisted documentation, workflow automation, and clinical decision-support features inside
                operational healthcare software.
              </p>
            </div>

            <div className="hero-card-grid">
              <div className="hero-card">
                <Activity size={24} />
                <strong>50+ facilities</strong>
                <span>supported in the current production network</span>
              </div>
              <div className="hero-card">
                <Microscope size={24} />
                <strong>Clinical systems</strong>
                <span>EMR, laboratory, pharmacy, imaging, and workflow integrations</span>
              </div>
              <div className="hero-card">
                <FileText size={24} />
                <strong>Implementation depth</strong>
                <span>modules, integrations, training, manuals, and rollout support</span>
              </div>
            </div>
          </aside>
        </section>

        <div className="impact-marquee" aria-label="Impact highlights">
          <div className="impact-marquee__track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="impact-marquee__item">
                <strong>{item}</strong>
              </span>
            ))}
          </div>
        </div>

        <section className="metrics section" id="impact">
          <div className="section-heading">
            <span className="section-heading__kicker">Impact snapshot</span>
            <h2>Evidence from real healthcare delivery environments</h2>
            <p>
              The strongest part of my profile is not generic software work. It is building and improving systems that
              clinicians and hospital teams actually use under operational pressure.
            </p>
          </div>

          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="section-heading__kicker">How I work</span>
            <h2>Strongest where software, operations, and clinical reality meet</h2>
            <p>
              I am at my best when the challenge is messy: real departments, real workflows, demanding users, strict
              data expectations, and software that has to be useful on day one.
            </p>
          </div>

          <div className="strength-grid">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="strength-card">
                  <div className="strength-card__icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <span className="section-heading__kicker">Experience</span>
            <h2>From hospital digitization to AI-enabled EMR delivery</h2>
            <p>
              My career path is consistent: build practical healthcare systems, improve difficult workflows, and move
              complex environments toward reliable digital operations.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.period}-${item.company}`} className="timeline-card">
                <div className="timeline-card__header">
                  <span className="timeline-card__period">{item.period}</span>
                  <h3>{item.role}</h3>
                  <p>
                    {item.company} <span className="timeline-card__dot">-</span> {item.location}
                  </p>
                </div>
                <ul className="timeline-card__list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <span className="section-heading__kicker">Selected work</span>
            <h2>Public-facing projects that reflect my healthcare engineering direction</h2>
            <p>
              These repositories are built as recruiter-readable proof of the roles I target most: backend APIs,
              healthcare AI, digital health, information management, Firebase mobile backends, and application support.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-card__topline" />
                <div className="project-card__content">
                  <div className="project-card__header">
                    <h3>{project.title}</h3>
                    <div className="project-card__links">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        GitHub
                        <ArrowUpRight size={16} />
                      </a>
                      {project.secondaryLink ? (
                        <a href={project.secondaryLink} target="_blank" rel="noreferrer">
                          More
                          <ArrowUpRight size={16} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <p className="project-card__description">{project.description}</p>
                  <ul className="project-card__details">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--split" id="education">
          <div className="section-column">
            <div className="section-heading section-heading--compact">
              <span className="section-heading__kicker">Education</span>
              <h2>Engineering foundation with an AI research thread</h2>
            </div>

            <article className="education-card">
              <div className="education-card__icon">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3>BSc in Computer Science and Engineering</h3>
                <p>Adama Science and Technology University, Adama, Ethiopia</p>
                <span className="education-card__meta">Sep 2017 - Sep 2021</span>
              </div>
            </article>

            <article className="thesis-card">
              <h3>Final year thesis</h3>
              <p>
                AI-Based Weed Detection and Precision Spraying System using Python, OpenCV, and a convolutional neural
                network trained on 4,200 labeled field images covering six weed species.
              </p>
              <p>
                The system was validated across four farms over two growing seasons, which gave me an early practical
                foundation in computer vision and applied machine learning.
              </p>
            </article>
          </div>

          <div className="section-column">
            <div className="section-heading section-heading--compact">
              <span className="section-heading__kicker">Capabilities</span>
              <h2>Technical depth shaped by healthcare delivery work</h2>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article key={group.title} className="skills-card">
                  <h3>{group.title}</h3>
                  <div className="skills-card__items">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <article className="languages-card">
              <h3>Languages</h3>
              <div className="languages-card__items">
                {languages.map((language) => (
                  <span key={language}>{language}</span>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="site-footer__content">
          <div>
            <span className="section-heading__kicker">Contact</span>
            <h2>Open to strong engineering and healthcare technology opportunities</h2>
            <p>
              If you need someone who can connect system architecture, clinical workflows, integrations, and delivery,
              reach out. I am especially aligned with healthcare software, AI-enabled platforms, and technically serious
              product teams.
            </p>
          </div>

          <div className="site-footer__actions">
            <a className="button button--primary" href="mailto:dawittegegnwork@gmail.com">
              <Mail size={18} />
              Email me
            </a>
            <a className="button button--secondary" href={resumeUrl} target="_blank" rel="noreferrer">
              <Download size={18} />
              Open CV
            </a>
            <a
              className="button button--ghost"
              href="https://github.com/dawit-Tegegnwork"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub profile
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
