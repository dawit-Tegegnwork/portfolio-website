import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Healthcare AI Workflow Assistant',
      url: 'https://github.com/dawit-Tegegnwork/healthcare-ai-workflow-assistant',
      description:
        'FastAPI assistant with structured extraction, human review workflow, PostgreSQL audit logs, and synthetic clinical notes.',
      note: 'Portfolio demo · synthetic data · human review required',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Enterprise Workflow Management System',
      url: 'https://github.com/dawit-Tegegnwork/enterprise-workflow-management-system',
      description:
        'JWT auth, RBAC, approval transitions, audit trail, dashboard counts, and CSV export for generic enterprise requests.',
      note: 'Portfolio demo · no employer-specific data',
      tech: ['FastAPI', 'SQLModel', 'JWT', 'RBAC'],
    },
    {
      title: 'Golang Transaction API',
      url: 'https://github.com/dawit-Tegegnwork/golang-transaction-api',
      description:
        'Wallet-style backend with deposits, withdrawals, transfers, idempotency keys, and transaction-safe PostgreSQL operations.',
      note: 'Portfolio demo · fintech-style patterns',
      tech: ['Go', 'PostgreSQL', 'REST', 'Docker'],
    },
    {
      title: 'Node Firebase Mobile Backend',
      url: 'https://github.com/dawit-Tegegnwork/node-firebase-mobile-backend',
      description:
        'Transport operations demo using Firebase emulators, Cloud Functions, Firestore rules, and notification workflows.',
      note: 'Emulator-only · no paid Firebase required',
      tech: ['TypeScript', 'Firebase', 'Cloud Functions'],
    },
    {
      title: 'CPIMS Information Management Demo',
      url: 'https://github.com/dawit-Tegegnwork/cpims-information-management-demo',
      description:
        'Synthetic case records with completeness checks, duplicate detection, CSV import/export, and data quality reporting.',
      note: 'Not official CPIMS · synthetic cases only',
      tech: ['FastAPI', 'SQLite', 'Data quality'],
    },
    {
      title: 'Application Support Runbook Lab',
      url: 'https://github.com/dawit-Tegegnwork/application-support-runbook-lab',
      description:
        'Incident triage, UAT, release checklists, SQL data-quality checks, and optional issue tracker demo for support roles.',
      note: 'Documentation-first · synthetic incidents',
      tech: ['Runbooks', 'FastAPI', 'Support ops'],
    },
    {
      title: 'eCHIS → DHIS2 OpenHIM Mediator',
      url: 'https://github.com/dawit-Tegegnwork/echis-dhis2-mediator',
      description:
        'OpenHIM integration prototype routing synthetic eCHIS-style community health reports into DHIS2-compatible payloads.',
      note: 'Digital health integration demo',
      tech: ['Node.js', 'OpenHIM', 'DHIS2', 'Docker'],
    },
    {
      title: 'LIS Analyzer Integration Demo',
      url: 'https://github.com/dawit-Tegegnwork/lis-analyzer-integration-demo',
      description:
        'Public-safe Python demo for laboratory analyzer integration using synthetic lab data and LIS-ready payloads.',
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
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-gray-500 text-sm mb-4">{project.note}</p>
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
