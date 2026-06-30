import React, { useCallback, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectMissions from './components/ProjectMissions';
import ProofWall from './components/ProofWall';
import SkillZones from './components/SkillZones';
import StickyCta from './components/StickyCta';
import WhatIBuild from './components/WhatIBuild';

function App() {
  const [highlightedProjectId, setHighlightedProjectId] = useState(null);

  const handleSkillClick = useCallback((projectId) => {
    setHighlightedProjectId(projectId);
    const mission = document.getElementById(`mission-${projectId}`);
    if (mission) {
      mission.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <div className="page-shell">
      <div className="page-backdrop" aria-hidden="true" />
      <Header />

      <main className="page-content" id="top">
        <Hero />
        <WhatIBuild />
        <ProjectMissions highlightedProjectId={highlightedProjectId} />
        <SkillZones onSkillClick={handleSkillClick} activeProjectId={highlightedProjectId} />
        <ProofWall />
        <About />
      </main>

      <Contact />
      <StickyCta />
    </div>
  );
}

export default App;
