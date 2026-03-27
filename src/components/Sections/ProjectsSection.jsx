import { Html, Float } from '@react-three/drei';
import { motion, useDragControls } from 'framer-motion';
import { useState, useCallback } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

/**
 * Extracts the YouTube video ID from an embed URL.
 */
function getYouTubeId(url) {
  const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : '';
}

/**
 * Lightweight YouTube thumbnail with click-to-play.
 * Avoids loading the heavy iframe (~1-2MB each) until the user actually clicks.
 */
function LazyYouTube({ url, title }) {
  const [playing, setPlaying] = useState(false);
  const videoId = getYouTubeId(url);

  const handlePlay = useCallback(() => setPlaying(true), []);

  if (playing) {
    return (
      <iframe 
        src={`${url}?autoplay=1`} 
        title={title}
        className="w-full h-full border-0 absolute top-0 left-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={handlePlay}
      className="w-full h-full absolute top-0 left-0 cursor-pointer group/play bg-black border-0 p-0"
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/play:bg-black/10 transition-colors">
        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover/play:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </button>
  );
}

function ProjectCard({ project, i, isMobile }) {
  const xOffset = isMobile ? (i % 2 === 0 ? -0.5 : 0.5) : (i % 2 === 0 ? -1 : 1) * 3;
  const yOffset = -i * (isMobile ? 2 : 1.5);
  const zOffset = i * -1.5;
  const rotateY = isMobile ? 0 : (i % 2 === 0 ? 0.2 : -0.2);

  const dragControls = useDragControls();
  const [zIndex, setZIndex] = useState(0);

  return (
    <Float floatIntensity={0.8} rotationIntensity={0.2} speed={1.5}>
      <Html transform position={[xOffset, yOffset, zOffset]} rotation={[0, rotateY, 0]} className="w-[85vw] md:w-[450px] pointer-events-none">
        <motion.div 
          drag 
          dragControls={dragControls} 
          dragListener={false} 
          dragMomentum={false}
          onDragStart={() => setZIndex(100)}
          onDragEnd={() => setZIndex(0)}
          style={{ zIndex }}
          className="group relative glass-panel overflow-hidden border border-white/10 hover:border-white/30 transition-shadow duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] pointer-events-auto"
        >
          {/* Header (Drag Handle) */}
          <div 
            onPointerDown={(e) => dragControls.start(e)}
            className="bg-black/80 px-4 py-3 flex items-center justify-between border-b border-white/5 cursor-grab active:cursor-grabbing touch-none"
          >
            <div>
              <span className={`text-[10px] tracking-widest uppercase block ${project.color === 'accentOrange' ? 'text-accentOrange' : 'text-accentPurple'}`}>
                {project.type}
              </span>
              <h3 className="font-display text-2xl text-white pointer-events-none">{project.title}</h3>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            </div>
          </div>

          {/* Video container — lazy loaded */}
          <div className="w-full aspect-video bg-black relative z-10">
            <LazyYouTube url={project.url} title={project.title} />
          </div>
        </motion.div>
      </Html>
    </Float>
  );
}

export function ProjectsSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const projects = [
    { title: 'Showreel', type: 'Skills Showcase', url: 'https://www.youtube.com/embed/UMZe85QStIA', color: 'accentOrange' },
    { title: 'Behind the Craft', type: 'Motion Graphics', url: 'https://www.youtube.com/embed/kGM-ahvL7AE', color: 'accentPurple' },
    { title: 'Artist Story', type: 'Video Cuts', url: 'https://www.youtube.com/embed/ZgURUzEmB6A', color: 'accentOrange' },
    { title: 'Vibe Edit', type: 'Mood Edit', url: 'https://www.youtube.com/embed/L2xje44MjMs', color: 'accentPurple' },
  ];

  return (
    <>
      <Html transform position={[0, isMobile ? 5 : 4, isMobile ? -2 : -4]} className="w-[90vw] md:w-[800px] text-center select-none pointer-events-none">
        <h2 className="font-display text-4xl md:text-7xl text-white tracking-widest uppercase shadow-2xl">Selected Work</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-accentOrange to-accentPurple mx-auto mt-4"></div>
      </Html>
      
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} i={i} isMobile={isMobile} />
      ))}
    </>
  );
}
