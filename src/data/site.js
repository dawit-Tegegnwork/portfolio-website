export const profile = {
  name: 'Dawit Tegegnwork Wubale',
  title: 'Digital Health Systems Modernization',
  tagline: 'Healthcare AI · Interoperability · Backend APIs · Systems Modernization',
  headline: 'I modernize healthcare systems — safer AI, cleaner APIs, auditable workflows.',
  headlineHighlights: ['modernize healthcare systems', 'safer AI', 'cleaner APIs', 'auditable workflows'],
  subheadline:
    'Software engineer in Ethiopia building production-style modernization labs for health programs, regulatory systems, and clinical operations — with synthetic data, tests, and runbooks recruiters can verify.',
  credibility: [
    '100+ automated tests',
    '9 modernization labs',
    'Docker + CI on every repo',
    'Synthetic data only',
    'Docs & runbooks included',
  ],
  about:
    'Based in Addis Ababa, I work where healthcare operations meet backend engineering: legacy workflow upgrades, API design, data validation, AI safety gates, and deployment-ready patterns that teams can actually maintain.',
  github: 'https://github.com/dawit-Tegegnwork',
  linkedin: 'https://www.linkedin.com/in/dawit-wubale',
  email: 'dawittegegnwork@gmail.com',
  liveSite: 'https://dawit-tegegnwork.github.io/portfolio-website/',
};

export const availability = {
  location: 'Addis Ababa, Ethiopia',
  timezone: 'UTC+3',
  remote: 'Open to remote',
  languages: ['English — professional working', 'Amharic — native', 'Oromiffa — conversational'],
};

export const heroStats = [
  { value: '100+', label: 'automated tests' },
  { value: '9', label: 'modernization labs' },
  { value: '6', label: 'core tech stacks' },
  { value: '100%', label: 'synthetic data' },
];

export const marqueeItems = [
  'FastAPI',
  'React',
  'Python',
  'Go',
  'PostgreSQL',
  'Docker',
  'Vector RAG',
  'FHIR / HL7',
  'DHIS2',
  'OpenHIM',
  'GitHub Actions',
  'JWT / RBAC',
  'AI Safety',
  'Audit Logging',
];

export const navigation = [
  { href: '#roles', label: 'Roles' },
  { href: '#labs', label: 'Labs' },
  { href: '#improve', label: 'Impact' },
  { href: '#proof', label: 'Proof' },
  { href: '#cases', label: 'Case Studies' },
  { href: '#contact', label: 'Contact' },
];

export const rolePathways = [
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI Engineer',
    summary: 'RAG pipelines, safety gates, human review, and evaluation harnesses for health-worker AI.',
    accent: '#0F9E6E',
    labIds: ['hep-assist', 'healthcare-ai'],
    skills: ['Vector RAG', 'Safety gates', 'Human-in-the-loop', 'Audit logging', 'Evaluation'],
  },
  {
    id: 'interop',
    title: 'Digital Health / Interoperability Engineer',
    summary: 'FHIR-minded APIs, mediator patterns, lab integration, and data exchange validation.',
    accent: '#2E5BFF',
    labIds: ['interop-lab', 'eris'],
    skills: ['OpenHIM', 'DHIS2', 'HL7/FHIR concepts', 'Payload validation', 'LIS integration'],
  },
  {
    id: 'backend',
    title: 'Backend / Full Stack Engineer',
    summary: 'REST APIs, RBAC, workflow engines, transaction safety, and mobile backends.',
    accent: '#E8963A',
    labIds: ['bidlens', 'enterprise-workflow', 'golang-api', 'firebase'],
    skills: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Firebase'],
  },
  {
    id: 'support',
    title: 'Application Support / Systems Modernization',
    summary: 'Legacy stabilization, runbooks, triage workflows, and repeatable health checks.',
    accent: '#FF5A36',
    labIds: ['eris', 'runbook'],
    skills: ['Runbooks', 'Incident triage', 'UAT planning', 'SQL checks', 'Migration docs'],
  },
];

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
    screenshot: `${process.env.PUBLIC_URL || ''}/screenshots/bidlens-ai.png`,
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
    screenshot: `${process.env.PUBLIC_URL || ''}/screenshots/hep-assist.svg`,
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
    screenshot: `${process.env.PUBLIC_URL || ''}/screenshots/eris.svg`,
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
    screenshot: `${process.env.PUBLIC_URL || ''}/screenshots/interop-lab.svg`,
  },
];

export const whatIImprove = [
  {
    id: 'legacy',
    title: 'Legacy workflows',
    description: 'Replace manual, paper-heavy processes with state machines, dashboards, and clear status transitions.',
    icon: 'workflow',
    accent: '#FF5A36',
  },
  {
    id: 'audit',
    title: 'Auditability',
    description: 'Append-only audit logs, actor attribution, and review trails that survive compliance questions.',
    icon: 'audit',
    accent: '#0F9E6E',
  },
  {
    id: 'validation',
    title: 'Data validation',
    description: 'Input checks, completeness scoring, duplicate detection, and smoke scripts before go-live.',
    icon: 'validation',
    accent: '#2E5BFF',
  },
  {
    id: 'apis',
    title: 'APIs',
    description: 'OpenAPI-documented REST services with auth, pagination, health endpoints, and predictable errors.',
    icon: 'api',
    accent: '#E8963A',
  },
  {
    id: 'deploy',
    title: 'Deployment readiness',
    description: 'Docker Compose stacks, env templates, health/ready probes, and CI pipelines on every repo.',
    icon: 'deploy',
    accent: '#14150F',
  },
  {
    id: 'ai-safety',
    title: 'AI safety',
    description: 'Refusal gates, human review loops, citation requirements, and evaluation harnesses — not black-box AI.',
    icon: 'safety',
    accent: '#0F9E6E',
  },
];

const screenshotBase = `${process.env.PUBLIC_URL || ''}/screenshots`;

export const caseStudies = [
  {
    id: 'bidlens',
    title: 'BidLens AI Proposal Intelligence',
    roleFit: 'Senior Full Stack / AI Engineer',
    accent: '#155EEF',
    problem:
      'Proposal reviewers need a fast, auditable way to compare vendor scope, prices, and exclusions without delegating decisions to AI.',
    modernization:
      'Responsive Next.js product with TypeScript domain logic, Node.js APIs, Zod validation, configurable LLM extraction, Firestore security rules, reviewer approvals, request IDs, Docker, and CI.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Firestore', 'LLM structured output', 'Docker'],
    howToTest: 'npm install && npm run dev',
    github: 'https://github.com/dawit-Tegegnwork/bidlens-ai',
    tests: 7,
    screenshot: `${screenshotBase}/bidlens-ai.png`,
  },
  {
    id: 'hep-assist',
    title: 'HEP Assist AI RAG Platform',
    roleFit: 'Healthcare AI Engineer',
    accent: '#0F9E6E',
    problem:
      'Health programs need AI-assisted Q&A over approved content, with safety controls and human review before any answer is trusted.',
    modernization:
      'Vector RAG with citation display, emergency/diagnosis refusal gates, reviewer dashboard, golden-question evaluation, and audit log for every interaction.',
    stack: ['Python', 'FastAPI', 'React', 'Vector retrieval', 'Docker', 'GitHub Actions'],
    howToTest: 'docker compose up --build && ./scripts/demo_workflow.sh http://127.0.0.1:8000',
    github: 'https://github.com/dawit-Tegegnwork/hep-assist-ai-rag-platform',
    tests: 65,
    screenshot: `${screenshotBase}/hep-assist.svg`,
  },
  {
    id: 'eris',
    title: 'eRIS Modernization Demo',
    roleFit: 'Systems Modernization / Digital Health',
    accent: '#2E5BFF',
    problem:
      'Regulatory application systems need multi-role review workflows, document checklists, and migration stabilization plans.',
    modernization:
      'JWT-authenticated SPA with RBAC, application lifecycle (submit → review → clarify → approve), status history, and append-only audit trail with migration runbooks.',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'Alembic', 'Docker', 'pytest'],
    howToTest: 'docker compose up --build && open http://localhost:5180 (reviewer@demo.local / Demo123!)',
    github: 'https://github.com/dawit-Tegegnwork/eris-modernization-demo',
    tests: 18,
    screenshot: `${screenshotBase}/eris.svg`,
  },
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI Workflow Assistant',
    roleFit: 'Healthcare AI / Backend',
    accent: '#0F9E6E',
    problem:
      'Clinical teams need structured extraction from notes with mandatory human review — not autonomous AI decisions.',
    modernization:
      'FastAPI workflow engine with mock LLM extraction, reviewer states, PostgreSQL audit logging, and operations dashboard.',
    stack: ['Python', 'FastAPI', 'SQLModel', 'PostgreSQL', 'Docker'],
    howToTest: 'docker compose up --build && curl http://localhost:8000/health',
    github: 'https://github.com/dawit-Tegegnwork/healthcare-ai-workflow-assistant',
    tests: 12,
    screenshot: `${screenshotBase}/healthcare-ai.svg`,
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
    screenshot: `${screenshotBase}/enterprise-workflow.svg`,
  },
  {
    id: 'golang-api',
    title: 'Golang Transaction API',
    roleFit: 'Backend Engineer',
    accent: '#14150F',
    problem: 'Wallet-style transfers must be idempotent, auditable, and safe under network retries.',
    modernization:
      'Go REST API with idempotency keys, transaction-safe transfers, append-only audit log, and auto-seeded demo accounts.',
    stack: ['Go', 'PostgreSQL', 'REST', 'Docker'],
    howToTest: 'docker compose up --build && curl http://localhost:8082/health',
    github: 'https://github.com/dawit-Tegegnwork/golang-transaction-api',
    tests: 10,
    screenshot: `${screenshotBase}/golang-api.svg`,
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
    screenshot: `${screenshotBase}/runbook.svg`,
  },
];

export const proofItems = [
  { value: '100+', label: 'automated tests passing across labs', badge: 'tests', accent: '#0F9E6E' },
  { value: 'Docker', label: 'Compose stacks on every API lab', badge: 'docker', accent: '#2E5BFF' },
  { value: 'CI', label: 'GitHub Actions on every repo', badge: 'ci', accent: '#E8963A' },
  { value: '100%', label: 'synthetic data — safe to evaluate', badge: 'safe', accent: '#FF5A36' },
  { value: 'Docs', label: 'architecture notes & runbooks', badge: 'docs', accent: '#14150F' },
  { value: '9', label: 'modernization labs on GitHub', badge: 'repos', accent: '#0F9E6E' },
];
