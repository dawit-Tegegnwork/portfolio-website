export const profile = {
  name: 'Dawit Tegegnwork Wubale',
  title: 'Senior Full-Stack Developer',
  tagline: 'React/Next.js · Laravel/Node.js · ERP/LIMS',
  headline: 'Building useful software for health systems and the people who run them.',
  headlineEmphasis: 'health systems',
  subheadline:
    'Senior-level full-stack engineer with 5 years building, customizing, integrating, and supporting production enterprise systems across healthcare, research laboratories, ERP, and learning platforms.',
  about:
    'Based in Addis Ababa, I serve as a hands-on full-stack engineer for healthcare and enterprise platforms — OpenELIS Global 2, Frappe/ERPNext, Odoo, Laravel APIs, React/Next.js interfaces, SQL-backed workflows, role-based access, reporting, and production troubleshooting. I translate complex operational requirements into secure, maintainable software.',
  github: 'https://github.com/dawit-Tegegnwork',
  linkedin: 'https://www.linkedin.com/in/dawit-wubale',
  email: 'dawittegegnwork@gmail.com',
  phone: '+251 939 378 664',
  liveSite: 'https://dawit-tegegnwork.github.io/portfolio-website/',
  cvFilename: 'Dawit-Tegegnwork-CV.pdf',
  credibility: [
    '5 years production experience',
    'OpenELIS Global 2 primary developer',
    'ERPNext · Odoo · Frappe LMS',
    'React / Next.js / Laravel / Node.js',
    'Healthcare · LIMS · ERP',
  ],
};

export const availability = {
  location: 'Addis Ababa, Ethiopia',
  timezone: 'UTC+3',
  remote: 'Open to remote',
  languages: ['English — professional working', 'Amharic — native'],
};

export const navigation = [
  { href: '#experience', label: 'Experience' },
  { href: '#roles', label: 'Fit' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#labs', label: 'Labs' },
  { href: '#expertise', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const experience = [
  {
    id: 'orbit',
    role: 'Full Stack Engineer & Machine Integration Engineer',
    company: 'eHealth IT Service PLC / Orbit Health',
    location: 'Addis Ababa, Ethiopia',
    period: 'Sep 2025 – Present',
    accent: '#0F9E6E',
    bullets: [
      'Build and maintain production healthcare, laboratory, and internal operational platforms across backend services, React/JavaScript interfaces, REST APIs, SQL workflows, reports, access controls, and deployment support.',
      'Primary hands-on developer for extensive OpenELIS Global 2 customization for AHRI — adapting a clinical LIMS into a research-laboratory platform with domain experts, project management, and partner teams.',
      'Implemented research and pathology workflows: sample creation, QC, slide preparation, staining, microscopy/diagnosis, storage/inventory, reporting, and performance tracking with workflow states, validation, and role-specific actions.',
      'Customize Frappe/ERPNext, Odoo, and Frappe LMS: DocTypes, roles/permissions, forms, approvals, dashboards, reports, learning workflows, and integrations.',
      'Develop and troubleshoot Laravel/PHP, Java, Python, and JavaScript logic; support Docker/Linux environments, UAT, release testing, and live production issues.',
    ],
  },
  {
    id: 'imedway',
    role: 'Software Engineer',
    company: 'iMedway',
    location: 'Remote / Addis Ababa, Ethiopia',
    period: 'Sep 2024 – Aug 2025',
    accent: '#2E5BFF',
    bullets: [
      'Developed and localized hospital-management modules for patient administration, clinical records, reporting, billing/payment, and operational support using web technologies, APIs, and InterSystems IRIS for Health.',
      'Built forms, dashboards, REST API-backed features, and integration workflows; investigated defects across UI, APIs, mappings, database records, permissions, and reports.',
      'Worked with product, clinical, and technical stakeholders on requirements, workflow validation, documentation, and production releases.',
    ],
  },
  {
    id: 'defence',
    role: 'Software Engineer',
    company: 'Defense Specialized Referral Hospital',
    location: 'Bishoftu, Ethiopia',
    period: 'Sep 2021 – Aug 2024',
    accent: '#FF5A36',
    bullets: [
      'Developed, customized, and supported mission-critical hospital information workflows across registration, EMR/LIS processes, user access, SQL-backed reporting, and day-to-day operational data.',
      'Resolved application, database, workflow, and data-quality issues in a live multi-user environment where uptime, confidentiality, accurate permissions, and responsive support were essential.',
      'Partnered with clinicians, laboratory professionals, administrators, and technical teams through requirements, implementation, testing, deployment, training, and production support.',
    ],
  },
];

export const rolePathways = [
  {
    id: 'fullstack',
    title: 'Senior Full-Stack Developer',
    summary: 'React/Next.js frontends with Laravel, Node.js, or Java APIs — complex forms, dashboards, RBAC, and SQL-backed operational workflows.',
    accent: '#FF5A36',
    labIds: ['bidlens', 'eris'],
    skills: ['React', 'Next.js', 'Laravel', 'Node.js', 'TypeScript', 'PostgreSQL/MySQL'],
  },
  {
    id: 'lims',
    title: 'Digital Health / LIMS Engineer',
    summary: 'OpenELIS Global 2, OpenMRS/Bahmni, analyzer integrations, and research-lab workflow customization for real healthcare operations.',
    accent: '#0F9E6E',
    labIds: ['interop-lab', 'hep-assist'],
    skills: ['OpenELIS Global 2', 'OpenMRS/Bahmni', 'LIS workflows', 'Machine integration', 'RBAC'],
  },
  {
    id: 'erp',
    title: 'ERP / Enterprise Platforms',
    summary: 'Frappe/ERPNext, Odoo, and Frappe LMS: DocTypes, permissions, approvals, inventory, learning workflows, and production troubleshooting.',
    accent: '#2E5BFF',
    labIds: ['eris', 'bidlens'],
    skills: ['Frappe/ERPNext', 'Odoo', 'Frappe LMS', 'MariaDB', 'Python/JS'],
  },
  {
    id: 'support',
    title: 'Application Support / Systems Modernization',
    summary: 'UAT, release support, production stabilization, Docker/Linux delivery, and turning messy operational requirements into maintainable software.',
    accent: '#E8963A',
    labIds: ['eris', 'hep-assist'],
    skills: ['UAT', 'Docker/Linux', 'Nginx', 'CI/CD', 'Runbooks'],
  },
];

export const enterpriseDelivery = [
  {
    id: 'ahri-openelis',
    title: 'AHRI Research Laboratory Information System',
    tag: 'Most complex project',
    roleFit: 'Primary full-stack developer',
    accent: '#0F9E6E',
    problem:
      'A general clinical LIMS could not represent AHRI’s research and pathology processes, multi-step sample lifecycle, quality controls, specialist decisions, storage needs, and management reporting.',
    modernization:
      'Owned a substantial share of OpenELIS Global 2 full-stack redesign: workflow behaviour, data-backed forms, validation, permissions, dashboards, and reports — iterating through domain review, UAT, and production follow-up with laboratory experts and partner teams.',
    stack: ['OpenELIS Global 2', 'Java', 'React/JS', 'SQL', 'Docker/Linux', 'RBAC'],
    note: 'Confidential production work — not a public demo. Described here as professional delivery evidence from my CV.',
    github: null,
  },
  {
    id: 'erp-lms',
    title: 'Internal ERP & Learning Platforms',
    tag: 'Enterprise delivery',
    roleFit: 'Frappe / ERPNext / Odoo / LMS',
    accent: '#2E5BFF',
    problem:
      'Organizations need extendable enterprise workflows for users, roles, applications, approvals, inventory, learning content, and operational reporting.',
    modernization:
      'Extended DocTypes/data models, Python and JavaScript logic, roles/permissions, client forms, reports, APIs, MariaDB/MySQL data, deployment checks, and production troubleshooting.',
    stack: ['Frappe', 'ERPNext', 'Odoo', 'Frappe LMS', 'Python', 'MariaDB'],
    note: 'Production internal systems — portfolio framing based on delivered capability, not public source.',
    github: null,
  },
  {
    id: 'laravel-apps',
    title: 'Laravel Enterprise Applications',
    tag: 'Backend & APIs',
    roleFit: 'PHP / Laravel / REST',
    accent: '#FF5A36',
    problem:
      'Business and operational teams need maintainable modules for complex forms, approvals, dashboards, reporting, and external-service integrations.',
    modernization:
      'Built Laravel applications with REST APIs, service-layer patterns, Eloquent ORM, migrations, validation, queues/jobs, authentication, role-based authorization, and MySQL/PostgreSQL — plus Linux/Docker deployment support.',
    stack: ['PHP', 'Laravel', 'Eloquent', 'REST APIs', 'MySQL/PostgreSQL', 'Docker'],
    note: 'Capability proven in production delivery; public labs below show related patterns you can run.',
    github: null,
  },
  {
    id: 'integrations',
    title: 'Healthcare & Payment Integrations',
    tag: 'Interop',
    roleFit: 'APIs · middleware · analyzers',
    accent: '#E8963A',
    problem:
      'Hospital and lab systems must exchange orders, results, payments, and imaging studies reliably across devices, APIs, and databases.',
    modernization:
      'Supported OpenMRS/Bahmni and OpenELIS order/result flows, laboratory analyzers, Orthanc/PACS concepts, and payment/middleware workflows with validation, status handling, failure investigation, and reconciliation-oriented reporting.',
    stack: ['OpenMRS/Bahmni', 'OpenELIS', 'APIs', 'Orthanc/PACS', 'Transaction workflows'],
    note: 'Integration work from live environments — public interoperability labs demonstrate related patterns safely.',
    github: null,
  },
];

export const expertise = [
  {
    id: 'frontend',
    title: 'Frontend',
    accent: '#FF5A36',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5/CSS3', 'Responsive dashboards', 'Complex data-entry UIs'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    accent: '#2E5BFF',
    items: ['PHP/Laravel', 'Eloquent ORM', 'Node.js', 'Java/Spring Boot', 'Python/FastAPI', 'REST APIs', 'Queues/jobs'],
  },
  {
    id: 'platforms',
    title: 'Enterprise Platforms',
    accent: '#0F9E6E',
    items: ['OpenELIS Global 2', 'Frappe/ERPNext', 'Odoo', 'Frappe LMS', 'OpenMRS/Bahmni', 'InterSystems IRIS for Health'],
  },
  {
    id: 'data',
    title: 'Data & Reporting',
    accent: '#E8963A',
    items: ['PostgreSQL', 'MySQL/MariaDB', 'MongoDB', 'SQL modelling', 'Migrations', 'Validation', 'Operational reports'],
  },
  {
    id: 'security',
    title: 'Security & Delivery',
    accent: '#14150F',
    items: ['RBAC', 'Auditability', 'Docker', 'Linux/Ubuntu', 'Nginx', 'Git/GitHub', 'CI/CD', 'UAT', 'Production support'],
  },
];

export const marqueeItems = [
  'React',
  'Next.js',
  'Laravel',
  'Node.js',
  'OpenELIS Global 2',
  'ERPNext',
  'Odoo',
  'PostgreSQL',
  'MySQL',
  'Docker',
  'FastAPI',
  'Spring Boot',
  'OpenMRS/Bahmni',
  'RBAC',
  'LIS workflows',
];

const screenshotBase = `${process.env.PUBLIC_URL || ''}/screenshots`;

/** Public modernization labs — safe for recruiters to clone and run (synthetic data). */
export const modernizationLabs = [
  {
    id: 'bidlens',
    name: 'BidLens AI Proposal Intelligence',
    tag: 'Full Stack AI',
    accent: '#155EEF',
    problem:
      'Operations teams compare inconsistent vendor proposals manually and discover costly scope gaps too late.',
    modernization:
      'Next.js review workspace that normalizes proposal scope, detects omissions and pricing anomalies, supports configurable LLM extraction, and keeps final decisions human-controlled with an audit trail.',
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Firestore', 'LLM integration'],
    github: 'https://github.com/dawit-Tegegnwork/bidlens-ai',
    localTest: 'npm install && npm run dev',
    docsUrl: 'https://github.com/dawit-Tegegnwork/bidlens-ai#run-locally',
    tests: 7,
    screenshot: `${screenshotBase}/bidlens-ai.png`,
  },
  {
    id: 'hep-assist',
    name: 'HEP Assist AI RAG Platform',
    tag: 'Healthcare AI',
    accent: '#0F9E6E',
    problem:
      'Community health workers need approved clinical guidance with citations — not unreviewed LLM answers.',
    modernization:
      'Production-style RAG platform with vector retrieval, safety refusal gates, mandatory human review, evaluation dashboard, and full audit trail. Synthetic guidelines only.',
    stack: ['Python', 'FastAPI', 'React', 'Vector RAG', 'Docker', 'pytest'],
    github: 'https://github.com/dawit-Tegegnwork/hep-assist-ai-rag-platform',
    localTest: 'docker compose up --build',
    docsUrl: 'https://github.com/dawit-Tegegnwork/hep-assist-ai-rag-platform#quick-start-3-minutes',
    tests: 65,
    screenshot: `${screenshotBase}/hep-assist.png`,
  },
  {
    id: 'eris',
    name: 'eRIS Modernization Demo',
    tag: 'Regulatory Systems',
    accent: '#2E5BFF',
    problem:
      'Regulatory information systems need role-based workflows, audit trails, and migration-ready architecture.',
    modernization:
      'Full-stack modernization lab: JWT + RBAC, application review workflow, status timelines, append-only audit log, and GCP-to-local stabilization documentation.',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'JWT', 'RBAC', 'Docker'],
    github: 'https://github.com/dawit-Tegegnwork/eris-modernization-demo',
    localTest: 'docker compose up --build',
    docsUrl: 'https://github.com/dawit-Tegegnwork/eris-modernization-demo#demo-in-3-minutes',
    tests: 18,
    screenshot: `${screenshotBase}/eris.png`,
  },
  {
    id: 'interop-lab',
    name: 'Healthcare Interoperability Lab',
    tag: 'Integration',
    accent: '#E8963A',
    problem:
      'Health programs need validated data exchange between community systems, labs, and national aggregates.',
    modernization:
      'Index of integration modernization labs: eCHIS→DHIS2 OpenHIM mediator, LIS analyzer ingestion, and healthcare AI backends — each with validation, synthetic payloads, and CI.',
    stack: ['OpenHIM', 'Node.js', 'Python', 'DHIS2', 'FHIR/HL7 concepts', 'Docker'],
    github: 'https://github.com/dawit-Tegegnwork/healthcare-integration-portfolio',
    localTest: 'See repo index — each lab has its own docker compose up',
    docsUrl: 'https://github.com/dawit-Tegegnwork/healthcare-integration-portfolio',
    tests: null,
    screenshot: `${screenshotBase}/interop-lab.svg`,
  },
];

export const whatIImprove = [
  {
    id: 'legacy',
    title: 'Legacy workflows',
    description: 'Turn paper-heavy and generic clinical platforms into role-aware, validated operational workflows.',
    icon: 'workflow',
    accent: '#FF5A36',
  },
  {
    id: 'audit',
    title: 'Auditability',
    description: 'Permissions, review trails, and actor attribution that survive compliance and support questions.',
    icon: 'audit',
    accent: '#0F9E6E',
  },
  {
    id: 'validation',
    title: 'Data validation',
    description: 'Workflow states, completeness checks, and SQL-backed rules before go-live and during production support.',
    icon: 'validation',
    accent: '#2E5BFF',
  },
  {
    id: 'apis',
    title: 'APIs & integrations',
    description: 'REST contracts, middleware, analyzer/order-result flows, and defensive handling of failed transactions.',
    icon: 'api',
    accent: '#E8963A',
  },
  {
    id: 'deploy',
    title: 'Deployment readiness',
    description: 'Docker/Linux, Nginx, backups, release validation, and post-deployment stabilization.',
    icon: 'deploy',
    accent: '#14150F',
  },
  {
    id: 'delivery',
    title: 'Stakeholder delivery',
    description: 'Requirements discovery, UAT, documentation, training, and iterative rollout with clinical and lab teams.',
    icon: 'safety',
    accent: '#0F9E6E',
  },
];

export const caseStudies = [
  {
    id: 'bidlens',
    title: 'BidLens AI Proposal Intelligence',
    roleFit: 'Senior Full Stack / AI',
    accent: '#155EEF',
    problem:
      'Proposal reviewers need a fast, auditable way to compare vendor scope, prices, and exclusions without delegating decisions to AI.',
    modernization:
      'Responsive Next.js product with TypeScript domain logic, Node.js APIs, Zod validation, configurable LLM extraction, Firestore security rules, reviewer approvals, Docker, and CI.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Firestore', 'LLM structured output', 'Docker'],
    howToTest: 'npm install && npm run dev',
    github: 'https://github.com/dawit-Tegegnwork/bidlens-ai',
    tests: 7,
    screenshot: `${screenshotBase}/bidlens-ai.png`,
  },
  {
    id: 'hep-assist',
    title: 'HEP Assist AI RAG Platform',
    roleFit: 'Healthcare AI / Full Stack',
    accent: '#0F9E6E',
    problem:
      'Health programs need AI-assisted Q&A over approved content, with safety controls and human review before any answer is trusted.',
    modernization:
      'Vector RAG with citation display, emergency/diagnosis refusal gates, reviewer dashboard, golden-question evaluation, and audit log for every interaction.',
    stack: ['Python', 'FastAPI', 'React', 'Vector retrieval', 'Docker', 'GitHub Actions'],
    howToTest: 'docker compose up --build && ./scripts/demo_workflow.sh http://127.0.0.1:8000',
    github: 'https://github.com/dawit-Tegegnwork/hep-assist-ai-rag-platform',
    tests: 65,
    screenshot: `${screenshotBase}/hep-assist.png`,
  },
  {
    id: 'eris',
    title: 'eRIS Modernization Demo',
    roleFit: 'Systems Modernization',
    accent: '#2E5BFF',
    problem:
      'Regulatory application systems need multi-role review workflows, document checklists, and migration stabilization plans.',
    modernization:
      'JWT-authenticated SPA with RBAC, application lifecycle, status history, and append-only audit trail with migration runbooks.',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'Alembic', 'Docker', 'pytest'],
    howToTest: 'docker compose up --build && open http://localhost:5180',
    github: 'https://github.com/dawit-Tegegnwork/eris-modernization-demo',
    tests: 18,
    screenshot: `${screenshotBase}/eris.png`,
  },
  {
    id: 'enterprise-workflow',
    title: 'Enterprise Workflow Management',
    roleFit: 'Backend / Full Stack',
    accent: '#E8963A',
    problem: 'Organizations need approval workflows with roles, audit trails, and exportable reporting.',
    modernization:
      'JWT + RBAC approval engine with state machine, CSV export, seeded demo requests, and full request history.',
    stack: ['FastAPI', 'SQLModel', 'JWT', 'RBAC', 'Docker'],
    howToTest: 'docker compose up --build && curl http://localhost:8001/health',
    github: 'https://github.com/dawit-Tegegnwork/enterprise-workflow-management-system',
    tests: 9,
    screenshot: `${screenshotBase}/enterprise-workflow.png`,
  },
  {
    id: 'runbook',
    title: 'Application Support Runbook Lab',
    roleFit: 'Application Support',
    accent: '#FF5A36',
    problem: 'Support teams need triage workflows, documentation, and repeatable data health checks.',
    modernization:
      'Incident triage board, UAT/release runbooks, ticket tracker API, and SQL health-check scripts with Docker packaging.',
    stack: ['FastAPI', 'Runbooks', 'Docker', 'Support ops'],
    howToTest: 'docker compose up --build && curl http://localhost:8010/health',
    github: 'https://github.com/dawit-Tegegnwork/application-support-runbook-lab',
    tests: 7,
    screenshot: `${screenshotBase}/runbook.png`,
  },
];

export const proofItems = [
  { value: '5+', label: 'years production healthcare & ERP delivery', badge: 'experience', accent: '#0F9E6E' },
  { value: 'OpenELIS', label: 'primary developer for AHRI research LIMS', badge: 'lims', accent: '#2E5BFF' },
  { value: '3', label: 'professional roles — Orbit · iMedway · Defence Hospital', badge: 'career', accent: '#E8963A' },
  { value: 'ERP', label: 'ERPNext · Odoo · Frappe LMS delivered', badge: 'erp', accent: '#FF5A36' },
  { value: '100+', label: 'automated tests across public labs', badge: 'tests', accent: '#14150F' },
  { value: 'Docker', label: 'Linux · Nginx · CI/CD · production support', badge: 'ops', accent: '#0F9E6E' },
];
