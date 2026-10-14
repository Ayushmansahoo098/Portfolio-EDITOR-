import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/Sections/HeroSection';
import { CinematicTextFlow } from './components/CinematicTextFlow';
import { ProjectsSection } from './components/Sections/ProjectsSection';
import { ClientWorkSection } from './components/Sections/ClientWorkSection';
import { SkillsSection } from './components/Sections/SkillsSection';
import { ContactSection } from './components/Sections/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4efe7] text-[#24231f] selection:bg-[#a55c43] selection:text-[#f4efe7]">
      {/* ─── Global overlays ─── */}
      <CustomCursor />
      <ScrollProgressBar />

      {/* ─── Cinematic editorial preloader ─── */}
      <AnimatePresence mode="wait">
        {!loaded && (
          <Preloader key="preloader" onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      {/* ─── Main site navigation & sections ─── */}
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />

        <main>
          <HeroSection />
          <CinematicTextFlow />
          <ProjectsSection />
          <ClientWorkSection />
          <SkillsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
