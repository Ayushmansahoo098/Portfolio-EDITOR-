import { Film, Sliders, Volume2, CheckCircle } from 'lucide-react';

const PILLARS = [
  {
    icon: Film,
    title: 'Narrative Rhythm',
    desc: 'Cutting with intent. Finding the micro-beats in dialogue and pacing so scenes resonate emotionally.',
  },
  {
    icon: Volume2,
    title: 'Acoustic Architecture',
    desc: 'Sound is 60% of the cinematic experience. Layering foley, environmental textures, and bass risers.',
  },
  {
    icon: Sliders,
    title: 'Color & Texture',
    desc: 'Curated look development with grain, shadow separation, and skin tone fidelity that establish atmosphere.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="site-shell">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34463d]"></span>
            <p className="eyebrow text-[#34463d]">Behind The Timeline</p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#24231f] font-normal tracking-tight">
            Crafting stories that linger long after the cut.
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Portrait & Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="image-frame border border-[#d4c9ba] shadow-[0_12px_28px_rgba(36,35,31,0.06)]">
              <img
                src="https://i.ibb.co/65WFRjC/Chat-GPT-Image-Jan-15-2026-06-28-06-PM.png"
                alt="Ayushman Sahoo portrait"
                className="w-full h-[360px] sm:h-[400px] object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Quick credentials card */}
            <div className="p-5 rounded-2xl bg-[#e8dfd2]/40 border border-[#d4c9ba]">
              <div className="flex items-center justify-between border-b border-[#d4c9ba]/50 pb-3 mb-3">
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#24231f]">
                    Ayushman Sahoo
                  </h3>
                  <p className="eyebrow text-[9px] text-[#71695f]">
                    Editor &amp; Motion Designer
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase bg-[#34463d]/10 text-[#34463d] font-semibold">
                  <CheckCircle size={10} />
                  Available
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-[#f4efe7]">
                  <p className="font-serif text-lg font-bold text-[#24231f]">1.5+</p>
                  <p className="text-[9px] text-[#71695f] uppercase tracking-wider font-medium">Years</p>
                </div>
                <div className="p-2 rounded-lg bg-[#f4efe7]">
                  <p className="font-serif text-lg font-bold text-[#a55c43]">300+</p>
                  <p className="text-[9px] text-[#71695f] uppercase tracking-wider font-medium">Videos</p>
                </div>
                <div className="p-2 rounded-lg bg-[#f4efe7]">
                  <p className="font-serif text-lg font-bold text-[#34463d]">100%</p>
                  <p className="text-[9px] text-[#71695f] uppercase tracking-wider font-medium">On Time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-5 text-[#71695f] text-sm sm:text-base leading-relaxed font-light">
              <p>
                My editing journey began behind the director’s monitor and timeline scrub bars of senior college creative teams. Overseeing productions from raw concept to final render taught me the delicate balance between visual spectacle and genuine emotion.
              </p>
              <p>
                Today, I collaborate with brands, creators, and filmmakers to shape high-retention commercial cuts, cinematic documentaries, and viral short-form narratives. I obsess over the invisible details: audio foley cues, micro-pauses that let an actor's gaze register, and the exact frame where a transition lands with maximum weight.
              </p>
              <blockquote className="my-5 p-5 rounded-xl bg-[#e8dfd2]/50 border-l-3 border-[#a55c43] text-[#24231f] font-serif text-base italic leading-snug">
                “Editing is like sculpting time. A cutter does not merely assemble clips; they sculpt human attention and breathe emotion into light and sound.”
              </blockquote>
            </div>

            {/* Three Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-[#d4c9ba]/50">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="p-4 rounded-xl bg-[#e8dfd2]/35 border border-[#d4c9ba] flex flex-col"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#a55c43]/10 text-[#a55c43] flex items-center justify-center mb-2.5">
                      <Icon size={14} />
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-[#24231f] mb-1">
                      {p.title}
                    </h4>
                    <p className="text-[11px] text-[#71695f] leading-normal">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
