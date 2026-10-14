import { motion } from 'framer-motion';
import { Layers, Sparkles, CheckCircle2 } from 'lucide-react';

const TOOLS = [
  {
    name: 'Premiere Pro',
    category: 'Non-Linear Timeline',
    img: 'https://i.ibb.co/G3BrsXdk/Premier-pro.png',
    role: 'Primary NLE',
    desc: 'Core assembly, multi-cam synchronization, rhythm cutting, Lumetri color passes, and master exports.',
    skills: ['Pacing & Cut Flow', 'Multi-Cam Sync', 'Audio Ducking'],
  },
  {
    name: 'After Effects',
    category: 'Motion & VFX',
    img: 'https://i.ibb.co/VcGGFJyV/after-effects.png',
    role: 'Motion Graphics',
    desc: 'Kinetic typography, screen replacements, camera tracking, logo stings, and visual effects.',
    skills: ['Kinetic Type', 'Motion Tracking', 'Easing Curves'],
  },
  {
    name: 'Photoshop',
    category: 'Static Imagery',
    img: 'https://i.ibb.co/twH6tYdS/photoshop.png',
    role: 'Key Visuals',
    desc: 'Texture creation, thumbnail composition, matte painting elements, and photographic retouching.',
    skills: ['Thumbnails', 'Color Matching', 'Layer Masks'],
  },
  {
    name: 'Illustrator',
    category: 'Vector Graphics',
    img: 'https://i.ibb.co/C3D16Lhd/illustrator.png',
    role: 'Brand Assets',
    desc: 'Vector icon assets, typography treatments, badges, and brand geometry ready for AE rigging.',
    skills: ['Vector Paths', 'Custom Badges', 'Asset Preparation'],
  },
  {
    name: 'CapCut',
    category: 'Fast Mobile & Social',
    img: 'https://i.ibb.co/Tx2tHTNz/capcut.png',
    role: 'High-Retention Short Form',
    desc: 'Fast-turnaround TikTok, Reel, and Shorts edits utilizing viral pacing, punch-ins, and sound trends.',
    skills: ['Auto-Captions', 'Punch-ins', '9:16 Optimization'],
  },
];

const SPECIALIZATIONS = [
  'Multi-Camera Assembly',
  'Sound Design & Foley Architecture',
  'Kinetic Typography & Titles',
  'Cinematic Color Grading & Match',
  'Speed Ramping & Seamless Transitions',
  'Vertical Social Adaptation (9:16)',
  'High-Retention Hook Crafting',
  'Broadcast & Web Codec Mastering',
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="site-shell">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a55c43]"></span>
              <p className="eyebrow text-[#a55c43]">Creative Arsenal &amp; Suite</p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#24231f] font-normal tracking-tight">
              Tools of the Trade
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#71695f] max-w-md">
            Harnessing dedicated creative software to translate raw ideas into refined, cinematic deliverables.
          </p>
        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {TOOLS.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="tool-card p-5 rounded-2xl bg-[#e8dfd2]/35 border border-[#d4c9ba] hover:border-[#a55c43] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-xl p-2 bg-[#f4efe7] border border-[#d4c9ba] shadow-sm flex items-center justify-center flex-shrink-0">
                    <img
                      src={tool.img}
                      alt={tool.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="eyebrow text-[9px] text-[#71695f]">
                      {tool.category}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#24231f]">
                      {tool.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#71695f] leading-relaxed mb-4">
                  {tool.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#d4c9ba]/50 flex flex-wrap gap-1.5">
                {tool.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#f4efe7] text-[#34463d] border border-[#d4c9ba]/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Workflow Card */}
          <div className="p-5 rounded-2xl bg-[#24231f] text-[#f4efe7] border border-[#24231f] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-[#f4efe7]">
                <Layers size={18} />
              </div>
              <span className="eyebrow text-[9px] text-[#e8dfd2]/60">Workflow</span>
              <h3 className="font-serif text-lg font-normal text-white mb-2">
                Cross-App Dynamic Pipeline
              </h3>
              <p className="text-xs text-[#e8dfd2]/80 leading-relaxed font-light">
                Dynamic Link integration between Premiere and After Effects ensures speed without compromising fidelity. Structured for rapid revisions and seamless versioning.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 mt-4 flex items-center justify-between text-xs text-[#e8dfd2]/60">
              <span>Turnaround Speed</span>
              <span className="font-mono text-[#a55c43] font-bold">Fast &amp; Reliable</span>
            </div>
          </div>
        </div>

        {/* Specializations Strip */}
        <div className="p-6 rounded-2xl bg-[#e8dfd2]/40 border border-[#d4c9ba]">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={15} className="text-[#a55c43]" />
            <h3 className="font-serif text-lg text-[#24231f]">
              Core Capabilities
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SPECIALIZATIONS.map((spec) => (
              <div key={spec} className="flex items-center gap-2 text-xs text-[#24231f] font-medium">
                <CheckCircle2 size={14} className="text-[#34463d] flex-shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
