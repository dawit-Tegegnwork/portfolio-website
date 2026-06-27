import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'LIS Analyzer Integration Demo',
      url: 'https://github.com/dawit-Tegegnwork/lis-analyzer-integration-demo',
      description:
        'Public-safe Python demo for laboratory analyzer integration using synthetic lab data, validation, and LIS-ready payloads.',
      note: 'Portfolio demo · synthetic data only',
      tech: ['Python', 'Validation', 'LIS workflows'],
    },
    {
      title: 'eCHIS → DHIS2 OpenHIM Mediator',
      url: 'https://github.com/dawit-Tegegnwork/echis-dhis2-mediator',
      description:
        'OpenHIM integration prototype routing synthetic eCHIS-style community health reports through validation into DHIS2-compatible payloads.',
      note: 'Portfolio demo · not a production HIE deployment',
      tech: ['Node.js', 'OpenHIM', 'DHIS2', 'Docker'],
    },
    {
      title: 'MediMind HEP Assist AI',
      url: 'https://github.com/dawit-Tegegnwork/medimind-hep-assist-ai',
      description:
        'FastAPI backend for clinical text preprocessing, synthetic guideline retrieval, and SOAP note drafting.',
      note: 'Portfolio demo · not production clinical AI',
      tech: ['Python', 'FastAPI', 'pytest', 'Docker'],
    },
    {
      title: 'Hospital Management System',
      url: 'https://github.com/dawit-Tegegnwork/hospital-management-system',
      description:
        'Work-in-progress Ethiopian EMR scaffold with patient registration, pharmacy, lab, radiology, and billing module screens.',
      note: 'Work in progress · auth and integrations incomplete',
      tech: ['TypeScript', 'React', 'Vite', 'tRPC', 'MySQL'],
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
