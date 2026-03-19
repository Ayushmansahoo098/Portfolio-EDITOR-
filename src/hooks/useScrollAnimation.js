import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollState = {
  progress: 0,
  currentSection: 0,
};

export const useScrollAnimation = () => {
  useEffect(() => {
    // Create a ScrollTrigger that tracks the overall page scroll
    // and updates our global scrollState object
    const trigger = ScrollTrigger.create({
      trigger: '#scroll-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        scrollState.progress = self.progress;
        // There are 5 sections, so progress * 4 roughly gives 0 to 4
        scrollState.currentSection = Math.round(self.progress * 4);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return scrollState;
};
