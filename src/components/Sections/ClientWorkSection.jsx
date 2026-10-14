import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Film, X, ExternalLink, Instagram, Eye, CheckCircle2 } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   PART 1: VERIFIED CLIENTS (11 authentic client spaces)
   ───────────────────────────────────────────────────────────── */
export const CLIENTS = [
  {
    id: 'macdoulani',
    name: 'Mac Doulani',
    handle: '@macdoulani',
    category: 'Luxury Menswear',
    location: 'Panjim & Calangute, Goa',
    logo: '/clients/macdoulani-logo.png',
    banner: '/clients/macdoulani-banner.png',
    url: 'https://www.instagram.com/macdoulani/',
  },
  {
    id: 'lemon-chilli-porvorim',
    name: 'Lemon Chilli',
    handle: '@lemonchilliporvorim',
    category: 'Modern Global Cuisine',
    location: 'Porvorim, Goa',
    logo: '/clients/lemon-chilli-porvorim-logo.png',
    banner: '/clients/lemon-chilli-porvorim-banner.png',
    url: 'https://www.instagram.com/lemonchilliporvorim/',
  },
  {
    id: 'lemon-chilli-arpora',
    name: 'Lemon Chilli Arpora',
    handle: '@lemonchilliarpora',
    category: 'Goan Fusion Dining',
    location: 'Arpora, Goa',
    logo: '/clients/lemon-chilli-arpora-logo.png',
    banner: '/clients/lemon-chilli-arpora-banner.png',
    url: 'https://www.instagram.com/lemonchilliarpora/',
  },
  {
    id: 'gharan-goa',
    name: 'Gharan Backwaters',
    handle: '@gharan_goa',
    category: 'Seafood & Comfort Dining',
    location: 'Mala, Panjim, Goa',
    logo: '/clients/gharan-goa-logo.png',
    banner: '/clients/gharan-goa-banner.png',
    url: 'https://www.instagram.com/gharan_goa/',
  },
  {
    id: 'tambaal-agro',
    name: 'Tambaal Agro Tourism',
    handle: '@tambaalagro',
    category: 'Agro Tourism & Farm Resort',
    location: 'Maharashtra Tourism Certified',
    logo: '/clients/tambaal-agro-logo.png',
    banner: '/clients/tambaal-agro-banner.png',
    url: 'https://www.instagram.com/tambaalagro/',
  },
  {
    id: 'low-and-slow',
    name: 'Low & Slow',
    handle: '@lowandslowgoa',
    category: 'Smoked Barbecue',
    location: 'Goa',
    logo: '/clients/low-and-slow-logo.png',
    banner: '/clients/low-and-slow-banner.png',
    url: 'https://www.instagram.com/lowandslowgoa/',
  },
  {
    id: 'laikas-cafe',
    name: "Laika's Cafe",
    handle: '@_laikas_cafe_',
    category: 'Gourmet Cafe & Bakery',
    location: 'Goa',
    logo: '/clients/laikas-cafe-logo.png',
    banner: '/clients/laikas-cafe-banner.png',
    url: 'https://www.instagram.com/_laikas_cafe_/',
  },
  {
    id: 'clean-kicks',
    name: 'Clean Kicks Goa',
    handle: '@cleankicks.goa',
    category: 'Sneaker & Bag Restoration',
    location: 'Caranzalem, Goa',
    logo: '/clients/clean-kicks-logo.png',
    banner: '/clients/clean-kicks-banner.png',
    url: 'https://www.instagram.com/cleankicks.goa/',
  },
  {
    id: 'trisara-goa',
    name: 'Trisara',
    handle: '@trisara_goa',
    category: 'Multicuisine Restaurant & Bar',
    location: 'Colva, Goa',
    logo: '/clients/trisara-goa-logo.png',
    banner: '/clients/trisara-goa-banner.png',
    url: 'https://www.instagram.com/trisara_goa/',
  },
  {
    id: 'colectiva-goa',
    name: 'Colectiva Goa',
    handle: '@colectivagoa',
    category: 'New Wave Coffee & Speakeasy',
    location: 'Pilerne, Goa',
    logo: '/clients/colectiva-goa-logo.png',
    banner: '/clients/colectiva-goa-banner.png',
    url: 'https://www.instagram.com/colectivagoa/',
  },
  {
    id: 'goat-official',
    name: 'G.O.A.T.',
    handle: '@goatgoaofficial',
    category: 'Signature Culinary & RestroBar',
    location: 'Goa',
    logo: '/clients/goat-official-logo.png',
    banner: '/clients/goat-official-banner.png',
    url: 'https://www.instagram.com/goatgoaofficial/',
  },
];

/* ─────────────────────────────────────────────────────────────
   PART 2: WORKS (10 authentic client video cuts / reels)
   ───────────────────────────────────────────────────────────── */
export const CLIENT_WORKS = [
  {
    id: 1,
    title: 'Bullet 77 & Peoples Lager',
    client: 'G.O.A.T. RestroBar',
    category: 'Commercial',
    views: '63.1K',
    img: '/works/work-01.png',
  },
  {
    id: 2,
    title: 'Bespoke Suit Heritage Reel',
    client: 'Mac Doulani',
    category: 'Fashion & Luxury',
    views: '156K',
    img: '/works/work-02.png',
  },
  {
    id: 3,
    title: 'Artisan Cocktail & Pour',
    client: 'Trisara RestroBar',
    category: 'Mixology',
    views: '92.9K',
    img: '/works/work-03.png',
  },
  {
    id: 4,
    title: 'Goan Seafood Sizzle Reel',
    client: 'Gharan Backwaters',
    category: 'Culinary Reel',
    views: '69.1K',
    img: '/works/work-04.png',
  },
  {
    id: 5,
    title: 'Nightlife Beats & Social Vibe',
    client: 'Colectiva Goa',
    category: 'Social Reel',
    views: '40.1K',
    img: '/works/work-05.png',
  },
  {
    id: 6,
    title: 'Modern Fusion Plating Craft',
    client: 'Lemon Chilli Arpora',
    category: 'Fine Dining',
    views: '81.3K',
    img: '/works/work-06.png',
  },
  {
    id: 7,
    title: 'Wood Smoked Skewer Sizzle',
    client: 'Low & Slow',
    category: 'Smokehouse BBQ',
    views: '123K',
    img: '/works/work-07.png',
  },
  {
    id: 8,
    title: 'Mystery of Lemon Chilli Reveal',
    client: 'Lemon Chilli Porvorim',
    category: 'Spotlight',
    views: '111K',
    img: '/works/work-08.png',
  },
  {
    id: 9,
    title: 'Chef Precision Grill Plating',
    client: 'Culinary Master',
    category: 'Culinary Art',
    views: '99.8K',
    img: '/works/work-09.png',
  },
  {
    id: 10,
    title: 'Crispy Fresh Fish Fry Cut',
    client: 'Gharan Backwaters',
    category: 'Authentic Seafood',
    views: '59K',
    img: '/works/work-10.png',
  },
];

export function ClientWorkSection() {
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <section id="client-work" className="py-12 md:py-16">
      <div className="site-shell">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a55c43]"></span>
              <p className="eyebrow text-[#a55c43]">Collaborations &amp; Deliverables</p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#24231f] font-normal tracking-tight">
              Client Work
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#71695f] max-w-md">
            Trusted by Goa&apos;s leading dining spaces, luxury brands, cafe cultures, and commercial creators.
          </p>
        </div>

        {/* ─── PART 1: CLIENTS ─── */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#d4c9ba]/60">
            <Building2 size={16} className="text-[#34463d]" />
            <h3 className="font-serif text-xl sm:text-2xl text-[#24231f] font-normal">
              Clients
            </h3>
            <span className="text-xs text-[#71695f] ml-auto font-mono">
              ({CLIENTS.length} Brands &amp; Spaces)
            </span>
          </div>

          <p className="text-xs text-[#71695f] mb-6 font-light">
            Verified brands, restaurants, and labels I&apos;ve edited commercial and social content for. Click any card to preview.
          </p>

          {/* Client Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {CLIENTS.map((client) => (
              <motion.div
                key={client.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedClient(client)}
                className="group cursor-pointer p-4 rounded-xl bg-[#e8dfd2]/40 border border-[#d4c9ba] hover:border-[#a55c43] transition-all duration-300 flex flex-col items-center justify-between text-center hover:shadow-sm"
              >
                {/* Logo Avatar */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[#24231f] border-2 border-[#d4c9ba]/80 mb-3 shadow-inner flex items-center justify-center flex-shrink-0 group-hover:border-[#a55c43] transition-colors">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Name & Handle */}
                <div className="w-full">
                  <p className="text-xs font-semibold text-[#24231f] group-hover:text-[#a55c43] transition-colors truncate">
                    {client.name}
                  </p>
                  <p className="text-[10px] text-[#71695f] font-mono truncate">
                    {client.handle}
                  </p>
                  <span className="inline-block mt-1 text-[9px] px-1.5 py-0.5 rounded bg-[#f4efe7] text-[#34463d] border border-[#d4c9ba]/60 uppercase tracking-wider truncate max-w-full">
                    {client.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── PART 2: WORKS (Vertical 9:16 Reels Grid with untouched original images) ─── */}
        <div>
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#d4c9ba]/60">
            <Film size={16} className="text-[#a55c43]" />
            <h3 className="font-serif text-xl sm:text-2xl text-[#24231f] font-normal">
              Works
            </h3>
            <span className="text-xs text-[#71695f] ml-auto font-mono">
              ({CLIENT_WORKS.length} Vertical Video Cuts)
            </span>
          </div>

          <p className="text-xs text-[#71695f] mb-6 font-light">
            High-retention commercial cuts and trending vertical reels edited for client channels. Click any card to expand full view.
          </p>

          {/* 10 Vertical Works Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {CLIENT_WORKS.map((work) => (
              <motion.div
                key={work.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedWork(work)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-[#e8dfd2]/40 border border-[#d4c9ba] hover:border-[#a55c43] transition-all duration-300 flex flex-col shadow-none hover:shadow-[0_12px_28px_rgba(36,35,31,0.09)]"
              >
                {/* 9:16 Vertical Video Frame */}
                <div className="relative aspect-[9/14] w-full overflow-hidden bg-[#1c1b18]">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                    loading="lazy"
                  />

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24231f]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider bg-[#24231f]/85 text-[#f4efe7] backdrop-blur-sm border border-white/10">
                      {work.category}
                    </span>
                  </div>

                  {/* View count tag (retained from reel) */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-[11px] font-semibold text-white drop-shadow-md">
                    <Eye size={12} className="text-[#a55c43]" />
                    <span>{work.views}</span>
                  </div>

                  {/* Expand icon hover hint */}
                  <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-6 h-6 rounded-full bg-[#f4efe7] text-[#24231f] flex items-center justify-center shadow-md">
                      <ExternalLink size={11} />
                    </span>
                  </div>
                </div>

                {/* Card Title & Client */}
                <div className="p-3 bg-[#f4efe7] border-t border-[#d4c9ba]/60 flex flex-col justify-between flex-1">
                  <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#24231f] group-hover:text-[#a55c43] transition-colors line-clamp-1">
                    {work.title}
                  </h4>
                  <p className="text-[10px] text-[#71695f] mt-0.5 truncate">
                    {work.client}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* ─── Client Profile Lightbox Modal ─── */}
      {/* ─── Client Profile Modal ─── */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedClient(null)}
            className="fixed inset-0 z-[9998] bg-[#24231f]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#24231f] border border-white/10 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl relative flex flex-col max-h-[92vh]"
            >
              <div className="p-3.5 px-4 sm:p-4 sm:px-6 border-b border-white/10 flex items-center justify-between text-white">
                <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
                  <img
                    src={selectedClient.logo}
                    alt={selectedClient.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 object-cover flex-shrink-0"
                  />
                  <div className="truncate">
                    <h3 className="font-serif text-base sm:text-lg text-white truncate">
                      {selectedClient.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-white/60 font-mono truncate">
                      {selectedClient.handle} • {selectedClient.location}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedClient(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0 ml-2"
                  aria-label="Close Client Modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Verified Profile Banner */}
              <div className="w-full bg-black p-2 sm:p-4 flex items-center justify-center overflow-y-auto max-h-[55vh] sm:max-h-[60vh]">
                <img
                  src={selectedClient.banner}
                  alt={`${selectedClient.name} Profile`}
                  className="max-h-[50vh] sm:max-h-[60vh] w-auto object-contain rounded-lg shadow-lg border border-white/10"
                />
              </div>

              <div className="p-3.5 px-4 sm:p-4 sm:px-6 bg-[#24231f] text-[#f4efe7] flex flex-col sm:flex-row gap-2.5 sm:gap-0 items-stretch sm:items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-white/80">
                  <CheckCircle2 size={13} className="text-[#a55c43]" />
                  <span>Client Partner</span>
                </div>
                <a
                  href={selectedClient.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs px-3.5 py-2 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white transition-colors"
                >
                  <Instagram size={13} />
                  <span>View Instagram Profile</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Works Lightbox Modal (Displays complete uncropped vertical reel image) ─── */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
            className="fixed inset-0 z-[9998] bg-[#24231f]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#24231f] border border-white/10 rounded-2xl overflow-hidden max-w-md w-full shadow-2xl relative flex flex-col max-h-[92vh]"
            >
              <div className="p-3 px-4 sm:p-3.5 sm:px-5 border-b border-white/10 flex items-center justify-between text-white">
                <div className="truncate pr-2">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#a55c43] block">
                    {selectedWork.category}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base lg:text-lg text-white truncate">
                    {selectedWork.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedWork(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
                  aria-label="Close Lightbox"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Full vertical reel view (100% untouched) */}
              <div className="w-full bg-black flex items-center justify-center p-2 overflow-y-auto max-h-[65vh] sm:max-h-[72vh]">
                <img
                  src={selectedWork.img}
                  alt={selectedWork.title}
                  className="max-h-[60vh] sm:max-h-[72vh] w-auto object-contain rounded-lg shadow-lg"
                />
              </div>

              <div className="p-3 px-4 sm:p-3.5 sm:px-5 bg-[#24231f] text-[#f4efe7] flex items-center justify-between border-t border-white/10">
                <p className="text-xs text-white/80 truncate">
                  Client: <span className="font-semibold text-white">{selectedWork.client}</span>
                </p>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#a55c43] flex-shrink-0 ml-2">
                  <Eye size={12} />
                  <span>{selectedWork.views} Views</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
