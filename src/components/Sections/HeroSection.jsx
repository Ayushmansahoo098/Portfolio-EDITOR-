import { motion } from 'framer-motion';
import { Play, Sparkles, Eye, Film } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="about" className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden">
      <div id="hero" className="site-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left / Hero Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8dfd2] border border-[#d4c9ba] w-fit mb-5">
              <Sparkles size={12} className="text-[#a55c43]" />
              <span className="eyebrow text-[10px] text-[#34463d]">
                Cinematic Editor &amp; Visual Storyteller
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-normal text-[#24231f] tracking-tight leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-5">
              Sculpting emotion through{' '}
              <span className="italic font-normal text-[#a55c43]">rhythm</span>,{' '}
              light &amp; <span className="italic font-normal text-[#34463d]">cut.</span>
            </h1>

            {/* Subhead / Philosophy */}
            <p className="text-sm sm:text-base md:text-lg text-[#71695f] font-light leading-relaxed max-w-2xl mb-6 sm:mb-7">
              From leading campus productions to delivering agency-grade commercial and narrative edits.
              Editing is not just trimming video—it is shaping time, commanding human attention, and igniting feeling.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-7">
              <a
                href="#projects"
                className="action-button w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#24231f] text-[#f4efe7] hover:bg-[#a55c43]"
              >
                <Play size={13} className="fill-current" />
                <span>Explore Works</span>
              </a>

              <a
                href="#contact"
                className="action-button w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-transparent text-[#24231f] border border-[#24231f]/25 hover:border-[#24231f] hover:bg-[#e8dfd2]/50"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick credentials strip */}
            <div className="pt-5 border-t border-[#d4c9ba]/50 grid grid-cols-3 gap-2 sm:gap-6 max-w-md">
              <div>
                <p className="font-serif text-xl sm:text-3xl font-medium text-[#24231f]">2+</p>
                <p className="eyebrow text-[8px] sm:text-[9px] text-[#71695f] mt-0.5">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-3xl font-medium text-[#24231f]">400+</p>
                <p className="eyebrow text-[8px] sm:text-[9px] text-[#71695f] mt-0.5">Videos Delivered</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-3xl font-medium text-[#a55c43] whitespace-nowrap">20+ M</p>
                <p className="eyebrow text-[8px] sm:text-[9px] text-[#71695f] mt-0.5">Total Views</p>
              </div>
            </div>

          </motion.div>

          {/* Right / Hero Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Decorative ring */}
            <div className="hero-ring" />

            {/* Portrait Card */}
            <div className="relative w-full max-w-[340px] sm:max-w-[390px]">
              <div className="image-frame hero-frame border border-[#d4c9ba] shadow-[0_20px_40px_rgba(36,35,31,0.09)]">
                <img
                  src="https://i.ibb.co/65WFRjC/Chat-GPT-Image-Jan-15-2026-06-28-06-PM.png"
                  alt="Ayushman Sahoo - Video Editor & Motion Designer"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-top"
                  loading="eager"
                />

                {/* Editorial Caption Bar */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 bg-[#f4efe7]/95 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-[#d4c9ba]/80 flex items-center justify-between">
                  <div>
                    <p className="font-serif text-xs sm:text-sm font-semibold text-[#24231f] tracking-tight">
                      Ayushman Sahoo
                    </p>
                    <p className="eyebrow text-[8px] sm:text-[9px] text-[#71695f]">
                      Lead Timeline Editor
                    </p>
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-medium uppercase tracking-wider bg-[#34463d] text-[#f4efe7]">
                    00:01:24:18
                  </span>
                </div>
              </div>

              {/* Accent badge */}
              <div className="absolute -top-3 -left-2 sm:-left-4 bg-[#34463d] text-[#f4efe7] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md flex items-center gap-1.5 z-30">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                <span className="text-[8px] sm:text-[9px] font-mono tracking-widest uppercase">REC</span>
              </div>

              {/* Floating Impact Stat Box: 20+ M Views & 400 Videos Delivered */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="absolute -top-3 sm:-top-6 right-0 sm:-right-6 lg:-right-8 z-30 bg-[#f4efe7]/95 backdrop-blur-md border border-[#d4c9ba] shadow-[0_16px_32px_rgba(36,35,31,0.12)] rounded-2xl px-3 py-2 sm:px-4 sm:py-3 select-none"
              >
                <div className="flex items-center gap-2.5 sm:gap-4">
                  {/* Views Metric */}
                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#a55c43]/10 text-[#a55c43] flex items-center justify-center shrink-0">
                      <Eye size={15} />
                    </div>
                    <div>
                      <div className="font-serif text-sm sm:text-base lg:text-lg font-bold text-[#24231f] leading-none">
                        20+ M
                      </div>
                      <p className="eyebrow text-[7.5px] sm:text-[9px] text-[#71695f] mt-0.5">
                        Views
                      </p>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="w-px h-6 sm:h-7 bg-[#d4c9ba]" />

                  {/* Videos Delivered Metric */}
                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#34463d]/10 text-[#34463d] flex items-center justify-center shrink-0">
                      <Film size={15} />
                    </div>
                    <div>
                      <div className="font-serif text-sm sm:text-base lg:text-lg font-bold text-[#24231f] leading-none">
                        400
                      </div>
                      <p className="eyebrow text-[7.5px] sm:text-[9px] text-[#71695f] mt-0.5 whitespace-nowrap">
                        Videos Delivered
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
