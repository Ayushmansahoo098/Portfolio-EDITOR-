import { Html, Float } from '@react-three/drei';
import { useCountUp } from '../../hooks/useCountUp';

function StatCard({ value, label, color, duration, decimals = 0, suffix = '' }) {
  const count = useCountUp(value, duration, decimals);
  return (
    <div className="bg-white/5 p-3 md:p-4 rounded-md text-center border border-white/5 relative overflow-hidden group">
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-md"
        style={{ background: `radial-gradient(circle at 50% 50%, ${color}18, transparent 70%)` }}
      />
      <p className="text-2xl md:text-3xl font-display mb-1" style={{ color }}>
        {decimals > 0 ? count.toFixed(decimals) : count}
        {suffix}
      </p>
      <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-textMuted text-balance">
        {label}
      </p>
    </div>
  );
}

export function AboutSection() {
  return (
    <Float floatIntensity={1} rotationIntensity={0.3}>
      <Html transform position={[0, 0, 0]} className="w-[90vw] md:w-[600px] pointer-events-auto shadow-2xl">
        <div className="glass-panel p-6 md:p-8 text-left border border-white/20 bg-black/40 backdrop-blur-xl rounded-lg">
          {/* Fake Adobe-like header */}
          <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-2">
            <span className="text-xs uppercase tracking-widest text-textSecondary flex-1">Inspector</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-white">ABOUT ME</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accentOrange to-accentPurple mb-6"></div>
          
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <img src="https://i.ibb.co/65WFRjC/Chat-GPT-Image-Jan-15-2026-06-28-06-PM.png" alt="Ayushman Sahoo" className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-xl border border-white/10 shadow-lg mx-auto md:mx-0" />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-display tracking-wider mb-2">Ayushman Sahoo</h3>
              <p className="text-accentOrange text-sm font-semibold mb-3">Editor &amp; Motion Designer</p>
              <p className="text-sm text-textSecondary leading-relaxed">
                From leading edits as a senior college editor to delivering agency-grade commercials. 
                My focus is rhythm, emotion, and cinematic flow.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-8">
            <StatCard
              value={1.5}
              label={"Years\nExperience"}
              color="#FF8C00"
              duration={1600}
              decimals={1}
              suffix="+"
            />
            <StatCard
              value={300}
              label={"Videos\nDelivered"}
              color="#7B3FE4"
              duration={2000}
              suffix="+"
            />
            <div className="bg-white/5 p-3 md:p-4 rounded-md text-center border border-white/5">
              <p className="text-lg md:text-xl font-display text-white mt-1 mb-2">PRO</p>
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-textMuted text-balance">Skill<br/>Level</p>
            </div>
          </div>
          
        </div>
      </Html>
    </Float>
  );
}

