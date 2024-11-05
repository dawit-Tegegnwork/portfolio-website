import React from 'react';

const skills = [
  {
    category: "Software Development",
    details: [
      "Proficient in JavaScript, Python, and Java",
      "Experience with React, Node.js, and Django",
      "Version control with Git and GitHub"
    ]
  },
  {
    category: "Data Analysis",
    details: [
      "Skilled in data visualization with Tableau and Power BI",
      "Experienced in statistical analysis with R and Python",
      "Proficient in SQL and database management"
    ]
  },
  {
    category: "Healthcare Systems",
    details: [
      "Expertise in healthcare data integration and HL7 standards",
      "Experience with Electronic Health Records (EHR) systems",
      "Knowledge of HIPAA compliance and healthcare regulations"
    ]
  }
];

const Skills = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
            <ul className="list-disc list-inside text-gray-600">
              {skill.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
