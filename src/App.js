import React from 'react';
import About from './components/About';
import CaseStudyCards from './components/CaseStudyCards';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import ModernizationLabs from './components/ModernizationLabs';
import ProofWall from './components/ProofWall';
import RolePathways from './components/RolePathways';
import StickyCta from './components/StickyCta';
import WhatIImprove from './components/WhatIImprove';

function App() {
  return (
    <div className="page-shell">
      <div className="page-backdrop" aria-hidden="true" />
      <Header />

      <main className="page-content" id="top">
        <Hero />
        <RolePathways />
        <ModernizationLabs />
        <WhatIImprove />
        <ProofWall />
        <CaseStudyCards />
        <About />
      </main>

      <Contact />
      <StickyCta />
    </div>
  );
}

export default App;
