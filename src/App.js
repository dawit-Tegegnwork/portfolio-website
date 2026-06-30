import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCaseStudies from './components/ProjectCaseStudies';
import ProofBar from './components/ProofBar';
import RoleLanes from './components/RoleLanes';
import SkillsMatrix from './components/SkillsMatrix';

function App() {
  return (
    <div className="page-shell">
      <div className="page-backdrop" aria-hidden="true" />
      <Header />

      <main className="page-content" id="top">
        <Hero />
        <RoleLanes />
        <ProjectCaseStudies />
        <SkillsMatrix />
        <ProofBar />
        <About />
      </main>

      <Contact />
    </div>
  );
}

export default App;
