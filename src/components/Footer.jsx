import { ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24231f] text-[#f4efe7] py-14 sm:py-20 border-t border-[#d4c9ba]/20">
      <div className="site-shell">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <span className="eyebrow text-[#e8dfd2]/60 text-[10px] block mb-2">
              Editorial Portfolio &amp; Film Suite
            </span>
            <p className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Ayushman Sahoo
            </p>
            <p className="text-xs text-[#e8dfd2]/70 mt-1">
              Cinematic Video Editor &amp; Motion Designer
            </p>
          </div>


          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono uppercase bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 text-white transition-all"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#e8dfd2]/60 font-light">
          <p>
            © {new Date().getFullYear()} Ayushman Sahoo. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart size={12} className="text-[#a55c43] fill-current" />
            <span>for storytellers &amp; creators</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
