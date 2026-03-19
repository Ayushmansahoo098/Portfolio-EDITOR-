import { Html, Float } from '@react-three/drei';
import { Mail, Phone, Instagram } from 'lucide-react';
import { motion, useDragControls } from 'framer-motion';

export function ContactSection() {
  const dragControls = useDragControls();

  return (
    <Float floatIntensity={0.5} rotationIntensity={0.2}>
      <Html transform position={[0, 0, 0]} className="w-[90vw] md:w-[800px] pointer-events-none">
        
        <motion.div 
          drag 
          dragControls={dragControls} 
          dragListener={false} 
          dragMomentum={false}
          className="glass-panel text-center shadow-lg bg-black/50 backdrop-blur-xl border border-white/20 relative overflow-hidden pointer-events-auto"
        >
          {/* Subtle drag header */}
          <div 
            onPointerDown={(e) => dragControls.start(e)}
            className="w-full h-6 bg-white/5 border-b border-white/10 cursor-grab active:cursor-grabbing flex items-center justify-center touch-none"
          >
            <div className="w-12 h-1 bg-white/20 rounded-full"></div>
          </div>
          
          <div className="p-6 md:p-16">
            {/* Subtle light effect inside panel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accentOrange to-transparent"></div>
            
            <h2 className="font-display text-3xl md:text-6xl tracking-wider mb-2 md:mb-4 gradient-text">LET'S CREATE</h2>
            <p className="text-textSecondary text-sm md:text-base mb-8 md:mb-12 max-w-lg mx-auto">
              Ready to bring your vision to life? Let's discuss your next project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="mailto:ayushmansahoo098@gmail.com" className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accentOrange transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-accentOrange/10 flex items-center justify-center mb-4 text-accentOrange group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="text-xs text-textMuted mb-2 uppercase tracking-widest">Email</div>
                <div className="text-white text-xs truncate w-full text-center">ayushmansahoo098@gmail.com</div>
              </a>

              <a href="tel:+917077731427" className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accentPurple transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-accentPurple/10 flex items-center justify-center mb-4 text-accentPurple group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div className="text-xs text-textMuted mb-2 uppercase tracking-widest">Phone</div>
                <div className="text-white text-xs truncate w-full text-center">+91 7077731427</div>
              </a>

              <a href="https://www.instagram.com/ayushman_098/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accentOrange transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-accentOrange/10 flex items-center justify-center mb-4 text-accentOrange group-hover:scale-110 transition-transform">
                  <Instagram size={24} />
                </div>
                <div className="text-xs text-textMuted mb-2 uppercase tracking-widest">Instagram</div>
                <div className="text-white text-xs truncate w-full text-center">@ayushman_098</div>
              </a>
            </div>

            <div className="mt-8 md:mt-16 text-textMuted text-xs">
              <p>© 2026 All Rights Reserved.</p>
              <p className="mt-2 text-[10px] tracking-wide">made with <span className="text-red-500">♥</span> by Ayushman</p>
            </div>
          </div>
        </motion.div>
      </Html>
    </Float>
  );
}
