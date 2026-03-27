import { useState, useEffect, useCallback, useRef } from 'react';
import { scrollState } from './useScrollAnimation';

/**
 * Returns which sections should be mounted based on scroll progress.
 * Sections mount slightly early (with buffer) and never unmount once shown,
 * so the user never sees a pop-in.
 */
export function useSectionVisibility() {
  const [visible, setVisible] = useState({
    about: false,
    projects: false,
    skills: false,
    contact: false,
  });

  // Use a ref to avoid re-creating the interval closure
  const visibleRef = useRef(visible);
  visibleRef.current = visible;

  useEffect(() => {
    const interval = setInterval(() => {
      const p = scrollState.progress;
      const cur = visibleRef.current;

      // Mount each section when user scrolls near it
      // Section positions: about=0.25, projects=0.50, skills=0.75, contact=1.0
      const next = {
        about: cur.about || p > 0.12,
        projects: cur.projects || p > 0.35,
        skills: cur.skills || p > 0.58,
        contact: cur.contact || p > 0.75,
      };

      // Only update state if something changed
      if (
        next.about !== cur.about ||
        next.projects !== cur.projects ||
        next.skills !== cur.skills ||
        next.contact !== cur.contact
      ) {
        setVisible(next);
      }
    }, 200); // Check every 200ms — lightweight polling

    return () => clearInterval(interval);
  }, []);

  return visible;
}
