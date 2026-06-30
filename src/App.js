import React, { useCallback, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import ExperienceTimeline from './components/ExperienceTimeline';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectExplorer from './components/ProjectExplorer';
import ProofBar from './components/ProofBar';
import RoleLanes from './components/RoleLanes';
import SkillsMatrix from './components/SkillsMatrix';
import StickyCta from './components/StickyCta';

function App() {
  const [highlightedProjectId, setHighlightedProjectId] = useState(null);

  const handleSkillClick = useCallback((projectId) => {
    setHighlightedProjectId(projectId);
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="page-shell">
      <div className="page-backdrop" aria-hidden="true" />
      <Header />

      <main className="page-content" id="top">
        <Hero />
        <ExperienceTimeline />
        <RoleLanes />
        <ProjectExplorer
          highlightedProjectId={highlightedProjectId}
          onProjectHighlight={setHighlightedProjectId}
        />
        <SkillsMatrix onSkillClick={handleSkillClick} activeProjectId={highlightedProjectId} />
        <ProofBar />
        <About />
      </main>

      <Contact />
      <StickyCta />
    </div>
  );
}

export default App;
