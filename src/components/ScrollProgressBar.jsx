import { useEffect, useRef } from 'react';
import { scrollState } from '../hooks/useScrollAnimation';

const SECTION_LABELS = ['Hero', 'About', 'Projects', 'Skills', 'Contact'];

export function ScrollProgressBar() {
  const barRef = useRef(null);
  const labelRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let raf;

    const update = () => {
      const p = scrollState.progress;
      const pct = (p * 100).toFixed(2);

      if (barRef.current) {
        barRef.current.style.width = `${pct}%`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${pct}%`;
        glowRef.current.style.opacity = p > 0.01 ? '1' : '0';
      }
      if (labelRef.current) {
        const sectionIdx = Math.min(Math.round(p * 4), 4);
        labelRef.current.textContent = SECTION_LABELS[sectionIdx];
        labelRef.current.style.opacity = p > 0.01 ? '1' : '0';
      }

      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9990] pointer-events-none">
      {/* Track */}
      <div className="relative h-[2px] bg-white/[0.06] w-full">
        {/* Filled bar */}
        <div
          ref={barRef}
          className="absolute top-0 left-0 h-full"
          style={{
            width: '0%',
            background: 'linear-gradient(90deg, #FF8C00, #c084fc, #7B3FE4)',
            transition: 'width 0.05s linear',
          }}
        />
        {/* Glowing playhead */}
        <div
          ref={glowRef}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{
            background: '#FF8C00',
            boxShadow: '0 0 8px 3px rgba(255,140,0,0.6)',
            opacity: 0,
            transition: 'left 0.08s linear',
          }}
        />
      </div>

      {/* Section label — top right */}
      <div
        ref={labelRef}
        className="absolute right-4 top-4 text-[9px] uppercase tracking-[0.3em] font-mono"
        style={{
          color: '#FF8C00',
          opacity: 0,
          transition: 'opacity 0.3s',
          textShadow: '0 0 8px rgba(255,140,0,0.5)',
        }}
      />
    </div>
  );
}
