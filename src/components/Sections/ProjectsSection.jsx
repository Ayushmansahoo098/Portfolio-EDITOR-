import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink, SlidersHorizontal } from 'lucide-react';

const CATEGORIES = ['All', 'Skills Showcase', 'Motion Graphics', 'Video Cuts', 'Mood Edit'];

const PROJECTS = [
  {
    id: 'showreel',
    title: 'Showreel',
    type: 'Skills Showcase',
    category: 'Skills Showcase',
    url: 'https://www.youtube.com/embed/UMZe85QStIA',
    videoId: 'UMZe85QStIA',
    description: 'High-octane compilation displaying precision rhythm cuts, sound design sync, kinetic transitions, and high-energy pacing across commercial and creator edits.',
    tools: ['Premiere Pro', 'After Effects', 'Sound Design'],
    duration: '01:15',
  },
  {
    id: 'behind-craft',
    title: 'Behind the Craft',
    type: 'Motion Graphics',
    category: 'Motion Graphics',
    url: 'https://www.youtube.com/embed/kGM-ahvL7AE',
    videoId: 'kGM-ahvL7AE',
    description: 'Bespoke kinetic typography, layered compositing, stylized split-screens, and custom animation curves created for immersive digital experiences.',
    tools: ['After Effects', 'Illustrator', 'VFX Compositing'],
    duration: '02:04',
  },
  {
    id: 'artist-story',
    title: 'Artist Story',
    type: 'Video Cuts',
    category: 'Video Cuts',
    url: 'https://www.youtube.com/embed/ZgURUzEmB6A',
    videoId: 'ZgURUzEmB6A',
    description: 'Intimate character-driven documentary cut with intentional rhythm, atmospheric color grading, and an emotional musical arc that lets key moments breathe.',
    tools: ['Premiere Pro', 'Color Grading', 'Documentary Arc'],
    duration: '03:22',
  },
  {
    id: 'vibe-edit',
    title: 'Vibe Edit',
    type: 'Mood Edit',
    category: 'Mood Edit',
    url: 'https://www.youtube.com/embed/L2xje44MjMs',
    videoId: 'L2xje44MjMs',
    description: 'Atmospheric mood edit blending stylized sound design, aesthetic color treatment, speed ramps, and seamless audio-visual match cuts.',
    tools: ['CapCut', 'Premiere Pro', 'Rhythm Pacing'],
    duration: '00:58',
  },
];

function ProjectCard({ project, onSelectModal }) {
  const [inlinePlaying, setInlinePlaying] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="project-card group rounded-2xl overflow-hidden bg-[#e8dfd2]/35 border border-[#d4c9ba] hover:border-[#a55c43]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_28px_rgba(36,35,31,0.06)]"
    >
      {/* Video Viewport */}
      <div className="relative w-full aspect-video bg-[#24231f] overflow-hidden">
        {inlinePlaying ? (
          <iframe
            src={`${project.url}?autoplay=1&rel=0`}
            title={project.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full">
            <img
              src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Dark overlay with play trigger */}
            <div className="absolute inset-0 bg-[#24231f]/35 group-hover:bg-[#24231f]/15 transition-colors flex items-center justify-center">
              <button
                onClick={() => setInlinePlaying(true)}
                aria-label={`Play ${project.title} video`}
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#f4efe7] text-[#24231f] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#a55c43] group-hover:text-[#f4efe7] transition-all duration-300"
              >
                <Play size={18} className="fill-current ml-0.5" />
              </button>
            </div>

            {/* Top info tags */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider bg-[#24231f]/85 text-[#f4efe7] backdrop-blur-sm">
                {project.type}
              </span>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#24231f]/70 text-[#f4efe7]/90 backdrop-blur-sm">
                {project.duration}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Editorial Content Info */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#24231f] group-hover:text-[#a55c43] transition-colors">
              {project.title}
            </h3>
            <button
              onClick={() => onSelectModal(project)}
              className="p-1 rounded-md text-[#71695f] hover:text-[#24231f] hover:bg-[#d4c9ba]/40 transition-colors"
              title="Open Cinema Modal"
              aria-label={`Open cinema modal for ${project.title}`}
            >
              <ExternalLink size={15} />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-[#71695f] leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Tools badges */}
        <div className="pt-3 border-t border-[#d4c9ba]/50 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-[10px] font-medium tracking-wide px-2 py-0.5 rounded bg-[#f4efe7] border border-[#d4c9ba] text-[#34463d]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="pt-10 pb-12 md:pt-14 md:pb-16 bg-[#f4efe7]">
      <div className="site-shell">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a55c43]"></span>
              <p className="eyebrow text-[#a55c43]">Selected Work &amp; Cut Highlights</p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#24231f] font-normal tracking-tight">
              Craft in Motion
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#71695f] max-w-md">
            Commercial edits, kinetic typography, narrative arcs, and atmospheric cuts.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-[#d4c9ba]/60 scrollbar-none">
          <SlidersHorizontal size={13} className="text-[#71695f] mr-1 flex-shrink-0" />
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-button px-3 py-1 text-xs sm:text-sm whitespace-nowrap transition-all ${
                  isActive
                    ? 'is-active font-semibold text-[#24231f] border-b-2 border-[#a55c43]'
                    : 'text-[#71695f] hover:text-[#24231f]'
                }`}
              >
                {cat}
                {cat === 'All' && <span className="ml-1 text-[10px] opacity-60">({PROJECTS.length})</span>}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectModal={(p) => setModalProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Theater / Cinema Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalProject(null)}
            className="fixed inset-0 z-[9998] bg-[#24231f]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#24231f] border border-white/10 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl relative max-h-[92vh] flex flex-col"
            >
              <div className="p-3.5 px-4 sm:p-4 sm:px-6 border-b border-white/10 flex items-center justify-between text-white">
                <div className="truncate pr-2">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#a55c43] block">
                    {modalProject.type}
                  </span>
                  <h3 className="font-serif text-base sm:text-2xl text-white truncate">
                    {modalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setModalProject(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
                  aria-label="Close Cinema Player"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="w-full aspect-video bg-black flex-shrink-0">
                <iframe
                  src={`${modalProject.url}?autoplay=1&rel=0`}
                  title={modalProject.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 sm:p-5 bg-[#24231f] text-[#f4efe7] overflow-y-auto">
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-3">
                  {modalProject.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {modalProject.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/10 text-white/90 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
