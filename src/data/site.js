export const profile = {
  name: 'Dawit Tegegnwork Wubale',
  title: 'AI & Backend Software Engineer',
  tagline: 'Healthcare AI · Digital Health Systems · Backend APIs · Data Integration · Application Support',
  headline: 'I build backend and AI systems for healthcare, data, and real-world operations.',
  subheadline:
    'Software engineer focused on Python, Java, FastAPI, Spring Boot, PostgreSQL, AI workflows, and digital health systems.',
  credibility: [
    '53 passing tests',
    '6 production-style portfolio projects',
    'Synthetic healthcare/data demos',
    'Docker-ready APIs',
  ],
  about:
    'Dawit is a software engineer from Ethiopia building backend, AI, and digital health systems. His work focuses on practical APIs, data workflows, healthcare software, and production support patterns.',
  github: 'https://github.com/dawit-Tegegnwork',
  linkedin: 'https://www.linkedin.com/in/dawit-wubale',
  email: 'dawittegegnwork@gmail.com',
  liveSite: 'https://dawit-tegegnwork.github.io/portfolio-website/',
};

export const navigation = [
  { href: '#focus', label: 'Focus' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#proof', label: 'Proof' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
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

export const projects = [
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI Workflow Assistant',
    roleFit: 'Healthcare AI / Backend',
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
    screenshot:
      'https://raw.githubusercontent.com/dawit-Tegegnwork/healthcare-ai-workflow-assistant/main/docs/screenshots/dashboard.png',
    deployGuide:
      'https://github.com/dawit-Tegegnwork/healthcare-ai-workflow-assistant/blob/main/docs/RENDER_DEPLOY.md',
  },
  {
    id: 'enterprise-workflow',
    title: 'Enterprise Workflow Management System',
    roleFit: 'Backend / Enterprise APIs',
    problem: 'Organizations need approval workflows with roles, audit trails, and exportable reporting.',
    proves: ['JWT authentication', 'RBAC with role lanes', 'Approval state machine', 'CSV export + audit trail'],
    stack: ['FastAPI', 'SQLModel', 'JWT', 'RBAC', 'Docker'],
    tests: 9,
    github: 'https://github.com/dawit-Tegegnwork/enterprise-workflow-management-system',
    liveDemo: { status: 'coming-soon', label: 'Live demo coming soon' },
    localTest: 'docker compose up --build && curl http://localhost:8001/health',
    screenshot:
      'https://raw.githubusercontent.com/dawit-Tegegnwork/enterprise-workflow-management-system/master/docs/screenshots/swagger.png',
    deployGuide:
      'https://github.com/dawit-Tegegnwork/enterprise-workflow-management-system/blob/master/docs/RENDER_DEPLOY.md',
  },
  {
    id: 'golang-api',
    title: 'Golang Transaction API',
    roleFit: 'Backend / Financial API',
    problem: 'Wallet-style transfers must be idempotent, auditable, and safe under retries.',
    proves: ['Go REST API design', 'Idempotency keys', 'Transaction-safe transfers', 'Append-only audit log'],
    stack: ['Go', 'PostgreSQL', 'REST', 'Docker'],
    tests: 10,
    github: 'https://github.com/dawit-Tegegnwork/golang-transaction-api',
    liveDemo: { status: 'coming-soon', label: 'Live demo coming soon' },
    localTest: 'docker compose up --build && curl http://localhost:8080/health',
    screenshot:
      'https://raw.githubusercontent.com/dawit-Tegegnwork/golang-transaction-api/master/docs/screenshots/api-overview.png',
  },
  {
    id: 'firebase',
    title: 'Node Firebase Mobile Backend',
    roleFit: 'Mobile Backend',
    problem: 'Mobile apps need serverless backends with rules, functions, and emulator-first testing.',
    proves: ['Firebase Cloud Functions', 'Firestore security rules', 'Emulator-based integration tests'],
    stack: ['Node.js', 'TypeScript', 'Firebase', 'Cloud Functions'],
    tests: 3,
    github: 'https://github.com/dawit-Tegegnwork/node-firebase-mobile-backend',
    liveDemo: { status: 'local', label: 'Local emulator demo' },
    localTest: 'npm run demo',
    screenshot: null,
  },
  {
    id: 'cpims',
    title: 'CPIMS Information Management Demo',
    roleFit: 'NGO / Public Health Data',
    problem: 'Case systems need completeness scoring, duplicate detection, and quality reporting.',
    proves: ['Synthetic case records', 'Data quality metrics', 'Duplicate candidate review', 'CSV import/export'],
    stack: ['FastAPI', 'SQLite', 'Data quality', 'Docker'],
    tests: 12,
    github: 'https://github.com/dawit-Tegegnwork/cpims-information-management-demo',
    liveDemo: { status: 'coming-soon', label: 'Live demo coming soon' },
    localTest: 'docker compose up --build && curl http://localhost:8000/health',
    screenshot:
      'https://raw.githubusercontent.com/dawit-Tegegnwork/cpims-information-management-demo/master/docs/screenshots/swagger.png',
  },
  {
    id: 'runbook',
    title: 'Application Support Runbook Lab',
    roleFit: 'Application Support / Production Support',
    problem: 'Support teams need triage workflows, documentation, and repeatable data health checks.',
    proves: ['Incident triage board', 'UAT and release runbooks', 'Ticket tracker API', 'SQL health-check script'],
    stack: ['FastAPI', 'Runbooks', 'Docker', 'Support ops'],
    tests: 7,
    github: 'https://github.com/dawit-Tegegnwork/application-support-runbook-lab',
    liveDemo: { status: 'coming-soon', label: 'Live demo coming soon' },
    localTest: 'docker compose up --build && curl http://localhost:8010/health',
    screenshot:
      'https://raw.githubusercontent.com/dawit-Tegegnwork/application-support-runbook-lab/master/docs/screenshots/swagger.png',
  },
];

export const skillGroups = [
  {
    title: 'Backend',
    items: [
      { name: 'Python', level: 'core' },
      { name: 'FastAPI', level: 'core' },
      { name: 'Java', level: 'core' },
      { name: 'Spring Boot', level: 'learning' },
      { name: 'REST APIs', level: 'core' },
      { name: 'PostgreSQL', level: 'core' },
      { name: 'MySQL', level: 'core' },
    ],
  },
  {
    title: 'AI',
    items: [
      { name: 'LLM workflows', level: 'core' },
      { name: 'RAG fundamentals', level: 'learning' },
      { name: 'Prompt engineering', level: 'core' },
      { name: 'Structured extraction', level: 'core' },
      { name: 'Evaluation basics', level: 'learning' },
    ],
  },
  {
    title: 'Health / Digital',
    items: [
      { name: 'OpenMRS', level: 'core' },
      { name: 'DHIS2', level: 'core' },
      { name: 'FHIR/HL7 concepts', level: 'learning' },
      { name: 'EMR systems', level: 'core' },
      { name: 'Data integration', level: 'core' },
    ],
  },
  {
    title: 'DevOps / Support',
    items: [
      { name: 'Docker', level: 'core' },
      { name: 'CI/CD', level: 'core' },
      { name: 'Linux', level: 'core' },
      { name: 'Troubleshooting', level: 'core' },
      { name: 'Deployment support', level: 'core' },
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
