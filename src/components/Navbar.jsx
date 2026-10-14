import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Selected Work', href: '#projects', id: 'projects' },
  { name: 'Client Work', href: '#client-work', id: 'client-work' },
  { name: 'Toolkit', href: '#skills', id: 'skills' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ['contact', 'skills', 'client-work', 'projects', 'about'];
      const scrollPos = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f4efe7]/95 backdrop-blur-md border-b border-[#d4c9ba]/60 py-2.5 sm:py-3 shadow-[0_4px_20px_rgba(36,35,31,0.04)]'
          : 'bg-transparent py-4 sm:py-5 md:py-7'
      }`}
    >
      <div className="site-shell flex items-center justify-between">
        {/* Brand Monogram / Name */}
        <a href="#hero" className="group flex items-center gap-3 text-inherit no-underline">
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-tight text-[#24231f] group-hover:text-[#a55c43] transition-colors">
              Ayushman Sahoo
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34463d] animate-pulse"></span>
              <span className="eyebrow text-[9px] sm:text-[10px] text-[#71695f]">
                Video Editor &amp; Motion
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link text-xs lg:text-sm font-medium tracking-wide uppercase transition-colors ${
                  isActive ? 'text-[#24231f] active font-semibold' : 'text-[#71695f] hover:text-[#24231f]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#contact"
            className="action-button hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#24231f] text-[#f4efe7] hover:bg-[#a55c43] transition-colors"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-[#24231f] hover:text-[#a55c43] hover:bg-[#e8dfd2]/50 active:bg-[#e8dfd2] focus:outline-none transition-colors touch-manipulation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[57px] sm:top-[65px] bg-[#f4efe7]/98 backdrop-blur-xl border-b border-[#d4c9ba] px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-60px)] overflow-y-auto">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2.5 px-3 rounded-xl flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#e8dfd2]/70 text-[#a55c43] font-semibold'
                      : 'text-[#24231f] hover:text-[#a55c43] hover:bg-[#e8dfd2]/30'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={16} className={`transition-opacity ${isActive ? 'opacity-100 text-[#a55c43]' : 'opacity-40'}`} />
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase bg-[#24231f] text-[#f4efe7] active:bg-[#a55c43] shadow-md transition-colors"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
