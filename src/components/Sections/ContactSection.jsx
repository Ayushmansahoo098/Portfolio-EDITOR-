import { useState } from 'react';
import { Mail, Phone, Instagram, ArrowUpRight, Copy, Check, Send } from 'lucide-react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Edit',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ayushmansahoo614@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:ayushmansahoo614@gmail.com?subject=Project Inquiry: ${encodeURIComponent(formData.projectType)} from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nContact: ' + formData.email)}`;
    }, 1200);
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="site-shell">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a55c43]"></span>
            <p className="eyebrow text-[#a55c43]">Get in Touch &amp; Bookings</p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#24231f] font-normal tracking-tight mb-3">
            Let's create something unforgettable.
          </h2>
          <p className="text-xs sm:text-sm text-[#71695f] font-light leading-relaxed">
            Whether you have a commercial brief, a narrative short, or an ongoing creator series, my timeline is ready. Let’s talk vision, deadlines, and deliverables.
          </p>
        </div>

        {/* 2-Column Contact Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#e8dfd2]/40 border border-[#d4c9ba] shadow-sm hover:border-[#a55c43] transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#a55c43]/10 text-[#a55c43] flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-[#71695f] hover:text-[#24231f] px-2.5 py-1 rounded bg-[#f4efe7] transition-colors"
                  aria-label="Copy Email Address"
                >
                  {copied ? <Check size={11} className="text-[#34463d]" /> : <Copy size={11} />}
                  <span className="text-[11px]">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <span className="eyebrow text-[9px] text-[#71695f] block mb-1">Direct Inquiries</span>
              <a
                href="mailto:ayushmansahoo614@gmail.com"
                className="font-serif text-lg sm:text-xl text-[#24231f] hover:text-[#a55c43] transition-colors break-all"
              >
                ayushmansahoo614@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-[#e8dfd2]/40 border border-[#d4c9ba] shadow-sm hover:border-[#34463d] transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#34463d]/10 text-[#34463d] flex items-center justify-center">
                  <Phone size={16} />
                </div>
                <a
                  href="tel:+917077731427"
                  className="inline-flex items-center gap-1 text-[11px] text-[#71695f] hover:text-[#24231f] px-2.5 py-1 rounded bg-[#f4efe7] transition-colors"
                >
                  <span>Call</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>
              <span className="eyebrow text-[9px] text-[#71695f] block mb-1">Phone / WhatsApp</span>
              <a
                href="tel:+917077731427"
                className="font-serif text-lg sm:text-xl text-[#24231f] hover:text-[#34463d] transition-colors"
              >
                +91 7077731427
              </a>
            </div>

            {/* Instagram Card */}
            <div className="p-5 rounded-2xl bg-[#e8dfd2]/40 border border-[#d4c9ba] shadow-sm hover:border-[#a55c43] transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#a55c43]/10 text-[#a55c43] flex items-center justify-center">
                  <Instagram size={16} />
                </div>
                <a
                  href="https://www.instagram.com/ayushman_098/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#71695f] hover:text-[#24231f] px-2.5 py-1 rounded bg-[#f4efe7] transition-colors"
                >
                  <span>Follow</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>
              <span className="eyebrow text-[9px] text-[#71695f] block mb-1">Social Feed</span>
              <a
                href="https://www.instagram.com/ayushman_098/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg sm:text-xl text-[#24231f] hover:text-[#a55c43] transition-colors"
              >
                @ayushman_098
              </a>
            </div>

            {/* Availability badge */}
            <div className="p-3.5 rounded-xl bg-[#34463d]/10 border border-[#34463d]/20 flex items-center justify-between text-xs">
              <span className="text-[#34463d] font-medium">Availability</span>
              <span className="font-mono text-[#34463d] font-bold">Open for Bookings</span>
            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#e8dfd2]/40 border border-[#d4c9ba] shadow-sm">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#24231f] mb-1.5">
                Send a Project Brief
              </h3>
              <p className="text-xs text-[#71695f] mb-5">
                Tell me about your concept, reference links, and target turnaround.
              </p>

              {formSubmitted ? (
                <div className="p-6 text-center rounded-2xl bg-[#34463d]/10 border border-[#34463d]/30">
                  <div className="w-10 h-10 rounded-full bg-[#34463d] text-white flex items-center justify-center mx-auto mb-3">
                    <Check size={20} />
                  </div>
                  <h4 className="font-serif text-lg text-[#24231f] mb-1.5">Message Prepared!</h4>
                  <p className="text-xs text-[#71695f]">
                    Opening your email client to send your brief directly to Ayushman.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block eyebrow text-[9px] text-[#71695f] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl bg-[#f4efe7] border border-[#d4c9ba] text-[#24231f] text-base sm:text-sm focus:outline-none focus:border-[#a55c43] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block eyebrow text-[9px] text-[#71695f] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl bg-[#f4efe7] border border-[#d4c9ba] text-[#24231f] text-base sm:text-sm focus:outline-none focus:border-[#a55c43] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block eyebrow text-[9px] text-[#71695f] mb-1.5">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl bg-[#f4efe7] border border-[#d4c9ba] text-[#24231f] text-base sm:text-sm focus:outline-none focus:border-[#a55c43] transition-colors"
                    >
                      <option>Commercial / Ad Campaign</option>
                      <option>Showreel / Creator Portfolio</option>
                      <option>Narrative Short Film / Documentary</option>
                      <option>Motion Graphics &amp; Kinetic Typography</option>
                      <option>High-Retention Short Form (Reels/TikTok)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block eyebrow text-[9px] text-[#71695f] mb-1.5">
                      Project Details &amp; Timeline *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Footage status, reference style, target duration, and deadline..."
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl bg-[#f4efe7] border border-[#d4c9ba] text-[#24231f] text-base sm:text-sm focus:outline-none focus:border-[#a55c43] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="action-button w-full py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider bg-[#24231f] text-[#f4efe7] hover:bg-[#a55c43] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>Send Project Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
