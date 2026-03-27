import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DURATION_MS = 2800; // total loading time in ms
const STAGES = ['ASSETS', 'TIMELINE', 'RENDER', 'OUTPUT'];

function FilmStrip() {
  return (
    <div className="flex items-center gap-[6px] px-2 overflow-hidden w-full">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-[18px] h-[14px] rounded-[2px] bg-[#030303] border border-white/[0.08]"
        />
      ))}
    </div>
  );
}

function TimelineRuler({ progress }) {
  return (
    <div className="w-full space-y-[6px]">
      {/* Tick marks */}
      <div className="flex justify-between px-1">
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-[2px]">
            <span className="text-[7px] text-white/20 font-mono">{i * 10}</span>
            <div className={`w-px ${i % 5 === 0 ? 'h-2.5 bg-white/25' : 'h-1.5 bg-white/10'}`} />
          </div>
        ))}
      </div>

      {/* Main progress track */}
      <div className="relative h-[3px] bg-white/[0.07] rounded-full overflow-visible">
        {/* Filled portion */}
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #FF8C00, #a855f7, #7B3FE4)',
            boxShadow: '0 0 12px rgba(255,140,0,0.5)',
          }}
        />
        {/* Playhead dot */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          style={{ left: `calc(${progress}% - 5px)` }}
        />
      </div>

      {/* Bottom labels */}
      <div className="flex justify-between items-center px-px">
        <span className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-mono">
          {progress < 100 ? 'Initializing Edit Suite...' : '▶ Ready to play'}
        </span>
        <span
          className="text-[10px] font-mono font-bold"
          style={{ color: progress < 100 ? '#FF8C00' : '#4ade80' }}
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

      // Timecode based on progress
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
        // Give a brief pause at 100% before exiting
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
          style={{ background: '#040404' }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Subtle scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)',
            }}
          />

          {/* Ambient glow orb behind name */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(255,140,0,0.12) 0%, rgba(123,63,228,0.08) 50%, transparent 75%)',
              filter: 'blur(40px)',
            }}
          />

          {/* TOP film strip */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-[#080808] border-b border-white/[0.06] flex items-center">
            <FilmStrip />
          </div>

          {/* BOTTOM film strip */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#080808] border-t border-white/[0.06] flex items-center">
            <FilmStrip />
          </div>

          {/* LEFT decorative side panel */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-10 hidden md:flex">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-7 h-5 border border-white/40 rounded-sm bg-white/5" />
            ))}
          </div>

          {/* RIGHT decorative side panel */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-10 hidden md:flex">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-7 h-5 border border-white/40 rounded-sm bg-white/5" />
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
              {/* Record indicator */}
              <motion.div
                className="w-2 h-2 rounded-full bg-red-500"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="font-mono text-[11px] md:text-xs text-[#FF8C00]/70 tracking-[0.35em]">
                TC: {timecode}
              </span>
            </motion.div>

            {/* Main name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20, letterSpacing: '0.4em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.15em' }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="font-display text-[clamp(3.5rem,10vw,7rem)] leading-none text-white tracking-widest"
              >
                AYUSHMAN
                <span
                  style={{
                    background: 'linear-gradient(135deg, #FF8C00, #7B3FE4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  .
                </span>
              </h1>
              <motion.p
                className="text-[#9CA3AF] tracking-[0.45em] uppercase text-[10px] md:text-xs mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Cinematic Editor &amp; Visual Storyteller
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
              className="flex gap-4 md:gap-6"
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
                          ? '#FF8C00'
                          : isCurrent
                          ? '#7B3FE4'
                          : 'rgba(255,255,255,0.12)',
                        boxShadow: isActive
                          ? '0 0 6px rgba(255,140,0,0.7)'
                          : isCurrent
                          ? '0 0 6px rgba(123,63,228,0.7)'
                          : 'none',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <span
                      className="text-[8px] md:text-[9px] uppercase tracking-wider font-mono transition-colors duration-300"
                      style={{
                        color: isActive
                          ? '#FF8C00'
                          : isCurrent
                          ? '#a78bfa'
                          : 'rgba(255,255,255,0.2)',
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
          <div className="absolute bottom-14 right-6 text-[8px] text-white/15 font-mono tracking-widest uppercase">
            Edit Suite v1.0
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
