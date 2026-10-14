import React from 'react';

// Waveform bar configuration mimicking the organic sound wave in Picture 2
const WAVEFORM_BARS = [
  { base: 18, dur: '1.1s', delay: '0.0s' },
  { base: 26, dur: '1.3s', delay: '0.15s' },
  { base: 14, dur: '0.9s', delay: '0.3s' },
  { base: 34, dur: '1.4s', delay: '0.05s' },
  { base: 42, dur: '1.2s', delay: '0.2s' },
  { base: 8,  dur: '0.8s', delay: '0.4s' },
  { base: 20, dur: '1.0s', delay: '0.1s' },
  { base: 28, dur: '1.3s', delay: '0.25s' },
  { base: 38, dur: '1.5s', delay: '0.15s' },
  { base: 32, dur: '1.1s', delay: '0.05s' },
  { base: 10, dur: '0.9s', delay: '0.35s' },
  { base: 22, dur: '1.2s', delay: '0.2s' },
  { base: 36, dur: '1.4s', delay: '0.1s' },
  { base: 42, dur: '1.6s', delay: '0.25s' },
  { base: 28, dur: '1.0s', delay: '0.3s' },
  { base: 14, dur: '0.9s', delay: '0.4s' },
  { base: 30, dur: '1.3s', delay: '0.15s' },
  { base: 36, dur: '1.5s', delay: '0.05s' },
  { base: 20, dur: '1.1s', delay: '0.2s' },
  { base: 14, dur: '0.8s', delay: '0.35s' },
];

export function CinematicTextFlow() {
  const textStream = "Can you check in with them and see if the notes from yesterday's meeting were sent out?  •  The transition was really smooth, I think they're going to love this cut  •  Syncing 24fps timeline sequence  •  Applying 35mm film grain & LUT  •  Audio foley locked  •  Exporting 4K ProRes master render  •  ";
  
  // Repeated to ensure infinite continuous stream across any monitor width
  const fullText = textStream.repeat(4);

  return (
    <div className="w-full overflow-hidden py-12 sm:py-16 md:py-20 select-none">
      {/* ─── FULL VIEWPORT TILTED CONTAINER ─── */}
      <div className="relative w-[108%] -ml-[4%] h-14 sm:h-16 flex items-center justify-center transform -rotate-[2deg]">

        {/* ─── LAYER 1: BASE LAYER (Dark text on light background, visible on left) ─── */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap text-[#24231f]/75 font-sans text-sm sm:text-base md:text-lg font-medium tracking-wide">
            <span className="pr-8">{fullText}</span>
            <span className="pr-8">{fullText}</span>
          </div>
        </div>

        {/* ─── LAYER 2: DARK RIBBON LAYER (Right side: black background + white text, 100% synchronized) ─── */}
        <div
          className="absolute inset-0 flex items-center overflow-hidden pointer-events-none"
          style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
        >
          {/* Black ribbon bar extending from center (50%) to right edge */}
          <div className="absolute left-1/2 right-0 h-11 sm:h-12 md:h-13 bg-[#24231f] shadow-md" />

          {/* White marquee text track — sharing exact identical coordinates and animation as Layer 1 */}
          <div className="flex w-max animate-marquee whitespace-nowrap text-[#f4efe7] font-sans text-sm sm:text-base md:text-lg font-medium tracking-wide relative z-10">
            <span className="pr-8">{fullText}</span>
            <span className="pr-8">{fullText}</span>
          </div>
        </div>

        {/* ─── LAYER 3: THE SOUNDWAVE PILL (Dead center at 50%, smoothly overlaps black ribbon) ─── */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex-shrink-0">
          <div className="w-[155px] sm:w-[180px] md:w-[195px] h-[54px] sm:h-[60px] md:h-[64px] rounded-full bg-[#f4efe7] border-[2.5px] border-[#24231f] shadow-[0_8px_24px_rgba(36,35,31,0.16)] flex items-center justify-center gap-[3px] sm:gap-[4px] px-4 cursor-default transition-transform hover:scale-105 duration-300">
            {WAVEFORM_BARS.map((bar, i) => (
              <span
                key={i}
                className="w-[2.5px] sm:w-[3px] rounded-full bg-[#24231f] inline-block"
                style={{
                  height: `${bar.base}px`,
                  animation: `soundwave ${bar.dur} ease-in-out infinite alternate`,
                  animationDelay: bar.delay,
                  transformOrigin: 'center',
                }}
              />
            ))}
          </div>
        </div>

        {/* ─── VIGNETTE / EDGE FADES (Only at outer screen edges) ─── */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#f4efe7] to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#f4efe7] to-transparent pointer-events-none z-20" />

      </div>
    </div>
  );
}

export default CinematicTextFlow;
