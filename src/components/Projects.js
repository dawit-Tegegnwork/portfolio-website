import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Enterprise Hospital Management System",
      description: "Developed a comprehensive hospital management system revolutionizing patient care workflow.",
      impact: "Improved operational efficiency by 40%, reduced paperwork by 70%",
      tech: ["Python", "SQL", "React", "Docker"]
    },
    {
      title: "AI-Powered Diagnostic Assistant",
      description: "Implemented a machine learning system for preliminary diagnosis, achieving 90% accuracy.",
      impact: "Reduced diagnosis time by 45%",
      tech: ["TensorFlow", "Python", "scikit-learn"]
    },
    {
      title: "Healthcare Data Integration Platform",
      description: "Built a scalable data pipeline processing millions of healthcare records.",
      impact: "99.9% uptime, processes 2M+ records daily",
      tech: ["Apache Spark", "Python", "AWS"]
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-green-600 font-medium mb-4">{project.impact}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
