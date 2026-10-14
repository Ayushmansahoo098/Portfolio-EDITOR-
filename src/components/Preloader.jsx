import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DURATION_MS = 2600;
const STAGES = ['ASSETS', 'TIMELINE', 'RENDER', 'OUTPUT'];

function FilmStrip() {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='40'%3E%3Crect x='3' y='13' width='18' height='14' rx='2' ry='2' fill='%23f4efe7' stroke='rgba(165,92,67,0.18)' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'left center',
      }}
    />
  );
}

function TimelineRuler({ progress }) {
  return (
    <div className="w-full space-y-[6px]">
      {/* Tick marks */}
      <div className="flex justify-between px-1">
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-[2px]">
            <span className="text-[7px] font-mono" style={{ color: 'rgba(165,92,67,0.35)' }}>{i * 10}</span>
            <div
              className={`w-px ${i % 5 === 0 ? 'h-2.5' : 'h-1.5'}`}
              style={{ background: i % 5 === 0 ? 'rgba(165,92,67,0.4)' : 'rgba(165,92,67,0.15)' }}
            />
          </div>
        ))}
      </div>

      {/* Main progress track */}
      <div className="relative h-[3px] rounded-full overflow-visible" style={{ background: 'rgba(165,92,67,0.12)' }}>
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #a55c43, #34463d)',
            boxShadow: '0 0 12px rgba(165,92,67,0.4)',
          }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full shadow-lg"
          style={{
            left: `calc(${progress}% - 5px)`,
            background: '#a55c43',
            boxShadow: '0 0 10px rgba(165,92,67,0.8)',
          }}
        />
      </div>

      {/* Bottom labels */}
      <div className="flex justify-between items-center px-px">
        <span className="text-[9px] uppercase tracking-[0.2em] font-mono" style={{ color: 'rgba(165,92,67,0.5)' }}>
          {progress < 100 ? 'Loading edit suite...' : '▶ Ready'}
        </span>
        <span
          className="text-[10px] font-mono font-bold"
          style={{ color: progress < 100 ? '#a55c43' : '#34463d' }}
        >
          {Math.floor(progress)}%
        </span>
      </div>
    </div>
  );
}

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [timecode, setTimecode] = useState('00:00:00:00');
  const [done, setDone] = useState(false);

  const handleComplete = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    const startTime = performance.now();

    const tick = () => {
      const elapsed = performance.now() - startTime;
      const p = Math.min((elapsed / DURATION_MS) * 100, 100);
      setProgress(p);

      const totalFrames = Math.floor(p * 0.72);
      const secs = Math.floor(totalFrames / 24);
      const mins = Math.floor(secs / 60);
      const frames = totalFrames % 24;
      setTimecode(
        `${String(mins).padStart(2, '0')}:${String(secs % 60).padStart(2, '0')}:${String(frames).padStart(2, '0')}:${String(Math.floor(p % 24)).padStart(2, '0')}`
      );

      if (p < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          setTimeout(handleComplete, 700);
        }, 350);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [handleComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
          style={{ background: '#f4efe7' }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Subtle texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Warm ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(165,92,67,0.08) 0%, rgba(52,70,61,0.06) 50%, transparent 75%)',
              filter: 'blur(40px)',
            }}
          />

          {/* TOP film strip */}
          <div className="absolute top-0 left-0 right-0 h-10 border-b flex items-center" style={{ background: '#e8dfd2', borderColor: 'rgba(165,92,67,0.12)' }}>
            <FilmStrip />
          </div>

          {/* BOTTOM film strip */}
          <div className="absolute bottom-0 left-0 right-0 h-10 border-t flex items-center" style={{ background: '#e8dfd2', borderColor: 'rgba(165,92,67,0.12)' }}>
            <FilmStrip />
          </div>

          {/* LEFT decorative side panel */}
          <div className="absolute left-4 top-14 bottom-14 flex flex-col gap-2 opacity-15 hidden md:flex overflow-hidden pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="w-7 h-5 rounded-sm flex-shrink-0" style={{ border: '1px solid rgba(165,92,67,0.4)', background: 'rgba(165,92,67,0.05)' }} />
            ))}
          </div>

          {/* RIGHT decorative side panel */}
          <div className="absolute right-4 top-14 bottom-14 flex flex-col gap-2 opacity-15 hidden md:flex overflow-hidden pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="w-7 h-5 rounded-sm flex-shrink-0" style={{ border: '1px solid rgba(165,92,67,0.4)', background: 'rgba(165,92,67,0.05)' }} />
            ))}
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 px-6 w-full max-w-lg md:max-w-2xl">

            {/* Timecode */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ background: '#a55c43' }}
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="font-mono text-[11px] md:text-xs tracking-[0.35em]" style={{ color: 'rgba(165,92,67,0.7)' }}>
                TC: {timecode}
              </span>
            </motion.div>

            {/* Main name */}
            <motion.div
              className="text-center px-2"
              initial={{ opacity: 0, y: 20, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.12em' }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="font-serif leading-none tracking-normal sm:tracking-wider"
                style={{ fontSize: 'clamp(2.25rem, 8.5vw, 6.5rem)', color: '#24231f' }}
              >
                AYUSHMAN
                <span style={{ color: '#a55c43' }}>.</span>
              </h1>
              <motion.p
                className="tracking-[0.25em] sm:tracking-[0.45em] uppercase text-[9px] sm:text-[10px] md:text-xs mt-2"
                style={{ color: '#71695f' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Editor &amp; Visual Storyteller
              </motion.p>
            </motion.div>

            {/* Timeline ruler + progress */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, scaleX: 0.85 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <TimelineRuler progress={progress} />
            </motion.div>

            {/* Stage indicators */}
            <motion.div
              className="flex flex-wrap justify-center gap-2.5 sm:gap-4 md:gap-6 px-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {STAGES.map((label, i) => {
                const isActive = progress >= (i + 1) * 25;
                const isCurrent = progress >= i * 25 && progress < (i + 1) * 25;
                return (
                  <div key={label} className="flex items-center gap-1.5">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full"
                      animate={{
                        backgroundColor: isActive
                          ? '#a55c43'
                          : isCurrent
                          ? '#34463d'
                          : 'rgba(165,92,67,0.15)',
                        boxShadow: isActive
                          ? '0 0 6px rgba(165,92,67,0.7)'
                          : isCurrent
                          ? '0 0 6px rgba(52,70,61,0.5)'
                          : 'none',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <span
                      className="text-[8px] md:text-[9px] uppercase tracking-wider font-mono transition-colors duration-300"
                      style={{
                        color: isActive
                          ? '#a55c43'
                          : isCurrent
                          ? '#34463d'
                          : 'rgba(165,92,67,0.2)',
                      }}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </motion.div>

          </div>

          {/* Bottom-right credit */}
          <div className="absolute bottom-14 right-6 text-[8px] font-mono tracking-widest uppercase" style={{ color: 'rgba(165,92,67,0.2)' }}>
            Edit Suite v2.0
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
