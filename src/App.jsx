import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThreeScene } from './components/ThreeScene';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';

function App() {
  const [loaded, setLoaded] = useState(false);

  // Setup global scroll tracking (always active so scroll state exists)
  useScrollAnimation();

  return (
    <>
      {/* ─── Global overlays (always mounted) ─── */}
      <CustomCursor />
      <ScrollProgressBar />

      {/* ─── Cinematic preloader ─── */}
      <AnimatePresence mode="wait">
        {!loaded && (
          <Preloader key="preloader" onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      {/* ─── Main site ─── */}
      <div className="relative w-full text-textPrimary h-full bg-transparent">
        {/* 3D SCENE */}
        <ThreeScene />

        {/* SCROLL CONTAINER */}
        <div id="scroll-container" className="h-[500vh] w-full relative z-0 pointer-events-none">

          {/* Logo */}
          <div className="absolute top-6 left-6 md:top-12 md:left-12 opacity-80 z-20 mix-blend-difference pointer-events-none">
            <p className="font-display text-2xl md:text-4xl tracking-widest text-[#FF8C00]">
              AYUSHMAN<span className="text-[#7B3FE4]">SAHOO</span>
            </p>
            <div className="w-full flex gap-1 mt-1">
              <div className="h-[2px] w-1/3 bg-[#FF8C00]"></div>
              <div className="h-[2px] w-2/3 bg-[#7B3FE4]"></div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-20 text-textSecondary text-xs uppercase tracking-widest pointer-events-none flex flex-col items-center gap-2">
            <span>Scroll down to navigate</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-textSecondary to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
