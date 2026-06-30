export const profile = {
  name: 'Dawit Tegegnwork Wubale',
  title: 'AI & Backend Software Engineer',
  tagline: 'Healthcare AI · Digital Health Systems · Backend APIs · Data Integration · Application Support',
  headline: 'I build backend and AI systems for healthcare, data, and real-world operations.',
  headlineHighlights: ['backend', 'AI systems', 'healthcare', 'real-world operations'],
  subheadline:
    'Software engineer focused on Python, Java, FastAPI, Spring Boot, PostgreSQL, AI workflows, and digital health systems.',
  credibility: ['53 tests', '6 repos', 'Run any demo in 3 minutes'],
  about:
    'Dawit is a software engineer from Ethiopia building backend, AI, and digital health systems. His work focuses on practical APIs, data workflows, healthcare software, and production support patterns.',
  github: 'https://github.com/dawit-Tegegnwork',
  linkedin: 'https://www.linkedin.com/in/dawit-wubale',
  email: 'dawittegegnwork@gmail.com',
  liveSite: 'https://dawit-tegegnwork.github.io/portfolio-website/',
  cvFilename: 'Dawit-Tegegnwork-CV.pdf',
};

export const availability = {
  location: 'Based in Ethiopia',
  timezone: 'UTC+3',
  remote: 'Open to remote',
  languages: ['English — professional working', 'Amharic — native', 'Oromiffa — conversational'],
};

export const heroStats = [
  { label: 'portfolio_health', status: 'ok', detail: '53 automated tests passing' },
  { label: 'repos', status: 'ok', detail: '6 production-style reference implementations' },
  { label: 'ci', status: 'ok', detail: 'GitHub Actions on every pinned repo' },
  { label: 'data', status: 'ok', detail: 'Synthetic data only — safe recruiter demos' },
  { label: 'docker', status: 'ok', detail: 'Docker Compose stacks ready to run' },
  { label: 'timezone', status: 'info', detail: 'Addis Ababa · UTC+3 · remote-friendly' },
];

export const navigation = [
  { href: '#experience', label: 'Experience' },
  { href: '#focus', label: 'Focus' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const experience = [
  {
    id: 'orbit',
    period: 'Sep 2025 — Present',
    role: 'Software Engineer — AI & Healthcare Systems',
    company: 'Orbit Health',
    location: 'Addis Ababa, Ethiopia',
    highlights: [
      'Develop healthcare software modules and AI-enabled features within an operational EMR platform.',
      'Contribute to intelligent documentation assistance, workflow automation, and clinical decision-support patterns.',
      'Integrate machine learning capabilities while preserving system reliability and clinical usability.',
    ],
  },
  {
    id: 'imedary',
    period: 'Oct 2024 — Aug 2025',
    role: 'Healthcare Software Developer',
    company: 'iMedary',
    location: 'Remote',
    highlights: [
      'Customized hospital software for patient flow, medical records, and administrative workflows.',
      'Supported remote implementation and integration across distributed teams.',
      'Adapted solutions to practical deployment constraints in smaller facilities.',
    ],
  },
  {
    id: 'dsrh',
    period: 'Sep 2021 — Sep 2024',
    role: 'Software Developer — Healthcare Information Systems',
    company: 'Defence Specialized Referral Hospital',
    location: 'Addis Ababa, Ethiopia',
    highlights: [
      'Contributed to designing and building a hospital-wide EMR from scratch over three years.',
      'Built modules for patient registration, outpatient documentation, pharmacy, and lab integration.',
      'Worked with clinical staff to reflect real workflows; delivered training materials and user guides.',
    ],
  },
];

export const roleLanes = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    summary: 'REST APIs, auth, data models, and deployment-ready services.',
    skills: ['Python', 'FastAPI', 'Go', 'PostgreSQL', 'Docker', 'CI/CD'],
    projects: ['Healthcare AI Workflow Assistant', 'Enterprise Workflow Management System', 'Golang Transaction API'],
  },
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI',
    summary: 'Human-in-the-loop AI workflows with audit trails and structured extraction.',
    skills: ['LLM workflows', 'Structured extraction', 'Audit logging', 'Review states'],
    projects: ['Healthcare AI Workflow Assistant'],
  },
  {
    id: 'digital-health',
    title: 'Digital Health & Interoperability',
    summary: 'EMR concepts, case data systems, and integration-minded API design.',
    skills: ['OpenMRS', 'DHIS2', 'FHIR/HL7 concepts', 'Data integration'],
    projects: ['CPIMS Information Management Demo', 'Healthcare AI Workflow Assistant'],
  },
  {
    id: 'support',
    title: 'Application Support / Production Operations',
    summary: 'Incident triage, runbooks, UAT, SQL checks, and release readiness.',
    skills: ['Runbooks', 'Triage', 'UAT planning', 'Troubleshooting', 'Monitoring'],
    projects: ['Application Support Runbook Lab', 'Enterprise Workflow Management System'],
  },
];

const screenshotBase = `${process.env.PUBLIC_URL || ''}/screenshots`;

export const projects = [
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI Workflow Assistant',
    shortTitle: 'Healthcare AI',
    roleFit: 'Healthcare AI / Backend',
    accent: '#e8a849',
    problem:
      'Clinical teams need AI-assisted extraction with mandatory human review — not autonomous decisions.',
    proves: [
      'Human-in-the-loop AI workflow',
      'Structured extraction pipeline',
      'Audit logging for reviewer actions',
      'FastAPI + SQLModel API design',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'OpenAPI'],
    tests: 12,
    github: 'https://github.com/dawit-Tegegnwork/healthcare-ai-workflow-assistant',
    liveDemo: { status: 'coming-soon', label: 'Live demo coming soon' },
    localTest: 'docker compose up --build && curl http://localhost:8000/health',
    screenshot: `${screenshotBase}/healthcare-ai.png`,
    deployGuide:
      'https://github.com/dawit-Tegegnwork/healthcare-ai-workflow-assistant/blob/main/docs/RENDER_DEPLOY.md',
  },
  {
    id: 'enterprise-workflow',
    title: 'Enterprise Workflow Management System',
    shortTitle: 'Enterprise Workflow',
    roleFit: 'Backend / Enterprise APIs',
    accent: '#d4725a',
    problem: 'Organizations need approval workflows with roles, audit trails, and exportable reporting.',
    proves: ['JWT authentication', 'RBAC with role lanes', 'Approval state machine', 'CSV export + audit trail'],
    stack: ['FastAPI', 'SQLModel', 'JWT', 'RBAC', 'Docker'],
    tests: 9,
    github: 'https://github.com/dawit-Tegegnwork/enterprise-workflow-management-system',
    liveDemo: { status: 'coming-soon', label: 'Live demo coming soon' },
    localTest: 'docker compose up --build && curl http://localhost:8001/health',
    screenshot: `${screenshotBase}/enterprise-workflow.png`,
    deployGuide:
      'https://github.com/dawit-Tegegnwork/enterprise-workflow-management-system/blob/master/docs/RENDER_DEPLOY.md',
  },
  {
    id: 'golang-api',
    title: 'Golang Transaction API',
    shortTitle: 'Go Transaction API',
    roleFit: 'Backend / Financial API',
    accent: '#b8956b',
    problem: 'Wallet-style transfers must be idempotent, auditable, and safe under retries.',
    proves: ['Go REST API design', 'Idempotency keys', 'Transaction-safe transfers', 'Append-only audit log'],
    stack: ['Go', 'PostgreSQL', 'REST', 'Docker'],
    tests: 10,
    github: 'https://github.com/dawit-Tegegnwork/golang-transaction-api',
    liveDemo: { status: 'coming-soon', label: 'Live demo coming soon' },
    localTest: 'docker compose up --build && curl http://localhost:8080/health',
    screenshot: `${screenshotBase}/golang-api.png`,
  },
  {
    id: 'firebase',
    title: 'Node Firebase Mobile Backend',
    shortTitle: 'Firebase Backend',
    roleFit: 'Mobile Backend',
    accent: '#ffc457',
    problem: 'Mobile apps need serverless backends with rules, functions, and emulator-first testing.',
    proves: ['Firebase Cloud Functions', 'Firestore security rules', 'Emulator-based integration tests'],
    stack: ['Node.js', 'TypeScript', 'Firebase', 'Cloud Functions'],
    tests: 3,
    github: 'https://github.com/dawit-Tegegnwork/node-firebase-mobile-backend',
    liveDemo: { status: 'local', label: 'Local emulator demo' },
    localTest: 'npm run demo',
    screenshot: `${screenshotBase}/firebase-emulator.svg`,
  },
  {
    id: 'cpims',
    title: 'CPIMS Information Management Demo',
    shortTitle: 'CPIMS Demo',
    roleFit: 'NGO / Public Health Data',
    accent: '#9cb686',
    problem: 'Case systems need completeness scoring, duplicate detection, and quality reporting.',
    proves: ['Synthetic case records', 'Data quality metrics', 'Duplicate candidate review', 'CSV import/export'],
    stack: ['FastAPI', 'SQLite', 'Data quality', 'Docker'],
    tests: 12,
    github: 'https://github.com/dawit-Tegegnwork/cpims-information-management-demo',
    liveDemo: { status: 'coming-soon', label: 'Live demo coming soon' },
    localTest: 'docker compose up --build && curl http://localhost:8000/health',
    screenshot: `${screenshotBase}/cpims.png`,
  },
  {
    id: 'runbook',
    title: 'Application Support Runbook Lab',
    shortTitle: 'Runbook Lab',
    roleFit: 'Application Support / Production Support',
    accent: '#c97b5a',
    problem: 'Support teams need triage workflows, documentation, and repeatable data health checks.',
    proves: ['Incident triage board', 'UAT and release runbooks', 'Ticket tracker API', 'SQL health-check script'],
    stack: ['FastAPI', 'Runbooks', 'Docker', 'Support ops'],
    tests: 7,
    github: 'https://github.com/dawit-Tegegnwork/application-support-runbook-lab',
    liveDemo: { status: 'coming-soon', label: 'Live demo coming soon' },
    localTest: 'docker compose up --build && curl http://localhost:8010/health',
    screenshot: `${screenshotBase}/runbook.png`,
  },
];

export const skillGroups = [
  {
    title: 'Backend',
    items: [
      { name: 'Python', level: 'core', projectIds: ['healthcare-ai', 'enterprise-workflow', 'cpims', 'runbook'] },
      { name: 'FastAPI', level: 'core', projectIds: ['healthcare-ai', 'enterprise-workflow', 'cpims', 'runbook'] },
      { name: 'Java', level: 'core', projectIds: [] },
      { name: 'Spring Boot', level: 'learning', projectIds: [] },
      { name: 'REST APIs', level: 'core', projectIds: ['healthcare-ai', 'enterprise-workflow', 'golang-api'] },
      { name: 'PostgreSQL', level: 'core', projectIds: ['healthcare-ai', 'enterprise-workflow', 'golang-api'] },
      { name: 'MySQL', level: 'core', projectIds: [] },
    ],
  },
  {
    title: 'AI',
    items: [
      { name: 'LLM workflows', level: 'core', projectIds: ['healthcare-ai'] },
      { name: 'RAG fundamentals', level: 'learning', projectIds: [] },
      { name: 'Prompt engineering', level: 'core', projectIds: ['healthcare-ai'] },
      { name: 'Structured extraction', level: 'core', projectIds: ['healthcare-ai'] },
      { name: 'Evaluation basics', level: 'learning', projectIds: [] },
    ],
  },
  {
    title: 'Health / Digital',
    items: [
      { name: 'OpenMRS', level: 'core', projectIds: [] },
      { name: 'DHIS2', level: 'core', projectIds: [] },
      { name: 'FHIR/HL7 concepts', level: 'learning', projectIds: [] },
      { name: 'EMR systems', level: 'core', projectIds: ['healthcare-ai'] },
      { name: 'Data integration', level: 'core', projectIds: ['cpims'] },
    ],
  },
  {
    title: 'DevOps / Support',
    items: [
      { name: 'Docker', level: 'core', projectIds: ['healthcare-ai', 'enterprise-workflow', 'golang-api', 'cpims', 'runbook'] },
      { name: 'CI/CD', level: 'core', projectIds: [] },
      { name: 'Linux', level: 'core', projectIds: [] },
      { name: 'Troubleshooting', level: 'core', projectIds: ['runbook'] },
      { name: 'Deployment support', level: 'core', projectIds: ['runbook'] },
    ],
  },
];

export const proofItems = [
  { value: '53', label: 'automated tests passing across portfolio repos' },
  { value: '6', label: 'production-style reference implementations' },
  { value: '6', label: 'GitHub Actions CI workflows' },
  { value: '100%', label: 'synthetic data — safe recruiter demos' },
  { value: 'Docker', label: 'compose stacks for local evaluation' },
  { value: 'Live', label: 'portfolio site on GitHub Pages' },
];
