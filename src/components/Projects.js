import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Healthcare AI Workflow Assistant',
      url: 'https://github.com/dawit-Tegegnwork/healthcare-ai-workflow-assistant',
      deployUrl: 'https://github.com/dawit-Tegegnwork/healthcare-ai-workflow-assistant/blob/main/docs/RENDER_DEPLOY.md',
      screenshot: 'https://raw.githubusercontent.com/dawit-Tegegnwork/healthcare-ai-workflow-assistant/main/docs/screenshots/dashboard.png',
      description:
        'Reference implementation for human-in-the-loop clinical note workflows with structured AI extraction and audit logging.',
      proves: ['FastAPI + SQLModel', 'Human review workflow', 'Synthetic clinical notes only'],
      note: 'Portfolio demo · auto-seed · HTML dashboard',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Enterprise Workflow Management System',
      url: 'https://github.com/dawit-Tegegnwork/enterprise-workflow-management-system',
      deployUrl: 'https://github.com/dawit-Tegegnwork/enterprise-workflow-management-system/blob/master/docs/RENDER_DEPLOY.md',
      screenshot: 'https://raw.githubusercontent.com/dawit-Tegegnwork/enterprise-workflow-management-system/master/docs/screenshots/swagger.png',
      description:
        'JWT-backed approval workflow API with RBAC, audit trail, seeded demo requests, and CSV export.',
      proves: ['JWT + RBAC', 'Approval state machine', 'Audit + CSV reporting'],
      note: 'Portfolio demo · seeded workflows',
      tech: ['FastAPI', 'SQLModel', 'JWT', 'RBAC'],
    },
    {
      title: 'Golang Transaction API',
      url: 'https://github.com/dawit-Tegegnwork/golang-transaction-api',
      screenshot: 'https://raw.githubusercontent.com/dawit-Tegegnwork/golang-transaction-api/master/docs/screenshots/api-overview.png',
      description:
        'Wallet-style REST API demonstrating idempotency keys, transaction-safe transfers, and audit logs.',
      proves: ['Go + PostgreSQL', 'Idempotency headers', 'Auto-seed demo account'],
      note: 'Portfolio demo · fintech patterns',
      tech: ['Go', 'PostgreSQL', 'REST', 'Docker'],
    },
    {
      title: 'Node Firebase Mobile Backend',
      url: 'https://github.com/dawit-Tegegnwork/node-firebase-mobile-backend',
      description:
        'Mobile backend reference using Firebase emulators, Cloud Functions, and Firestore security rules.',
      proves: ['Cloud Functions', 'Firestore rules', 'Emulator-first dev'],
      note: 'Emulator-only · npm run demo',
      tech: ['TypeScript', 'Firebase', 'Cloud Functions'],
    },
    {
      title: 'CPIMS Information Management Demo',
      url: 'https://github.com/dawit-Tegegnwork/cpims-information-management-demo',
      screenshot: 'https://raw.githubusercontent.com/dawit-Tegegnwork/cpims-information-management-demo/master/docs/screenshots/swagger.png',
      description:
        'Synthetic case management with completeness scoring, duplicate detection, and operations dashboard.',
      proves: ['Data quality reporting', 'CSV import/export', 'Status lifecycle rules'],
      note: 'Not official CPIMS · synthetic cases',
      tech: ['FastAPI', 'SQLite', 'Data quality'],
    },
    {
      title: 'Application Support Runbook Lab',
      url: 'https://github.com/dawit-Tegegnwork/application-support-runbook-lab',
      screenshot: 'https://raw.githubusercontent.com/dawit-Tegegnwork/application-support-runbook-lab/master/docs/screenshots/swagger.png',
      description:
        'Support operations portfolio: runbooks plus a working triage board and ticket tracker API.',
      proves: ['Incident runbooks', 'Triage board UI', 'SQL health-check script'],
      note: 'Documentation-first · Docker ready',
      tech: ['Runbooks', 'FastAPI', 'Support ops'],
    },
    {
      title: 'eCHIS → DHIS2 OpenHIM Mediator',
      url: 'https://github.com/dawit-Tegegnwork/echis-dhis2-mediator',
      description:
        'OpenHIM integration prototype routing synthetic eCHIS-style community health reports into DHIS2-compatible payloads.',
      proves: ['OpenHIM', 'DHIS2 payloads', 'Digital health integration'],
      note: 'Digital health integration demo',
      tech: ['Node.js', 'OpenHIM', 'DHIS2', 'Docker'],
    },
    {
      title: 'LIS Analyzer Integration Demo',
      url: 'https://github.com/dawit-Tegegnwork/lis-analyzer-integration-demo',
      description:
        'Public-safe Python demo for laboratory analyzer integration using synthetic lab data and LIS-ready payloads.',
      proves: ['Lab validation', 'LIS payloads', 'Synthetic lab data'],
      note: 'Portfolio demo · synthetic lab data',
      tech: ['Python', 'Validation', 'LIS workflows'],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            {project.screenshot && (
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="w-full h-40 object-cover object-top rounded-md mb-4 border border-gray-200"
              />
            )}
            <h3 className="text-xl font-bold mb-2">
              <a
                href={project.url}
                className="text-blue-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
            </h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <p className="text-sm font-medium text-gray-800 mb-1">What it proves</p>
            <ul className="text-sm text-gray-600 mb-3 list-disc list-inside">
              {project.proves.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm mb-4">{project.note}</p>
            {project.deployUrl && (
              <p className="text-sm mb-4">
                <a
                  href={project.deployUrl}
                  className="text-green-700 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cloud deploy guide →
                </a>
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
