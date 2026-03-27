import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Suspense, lazy, useMemo } from 'react';
import { CameraController } from './CameraController';
import { HeroSection } from './Sections/HeroSection';
import { useSectionVisibility } from '../hooks/useSectionVisibility';

// Lazy-load heavier sections
const AboutSection = lazy(() => import('./Sections/AboutSection').then(m => ({ default: m.AboutSection })));
const ProjectsSection = lazy(() => import('./Sections/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const SkillsSection = lazy(() => import('./Sections/SkillsSection').then(m => ({ default: m.SkillsSection })));
const ContactSection = lazy(() => import('./Sections/ContactSection').then(m => ({ default: m.ContactSection })));

function SceneContent() {
  const visible = useSectionVisibility();

  return (
    <>
      <CameraController />
      
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Cinematic lighting setup */}
      <pointLight position={[-10, 0, -20]} color="#FF8C00" intensity={2} />
      <pointLight position={[10, -10, 5]} color="#7B3FE4" intensity={2} />

      {/* Particle background — reduced count for performance */}
      <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />

      {/* SECTIONS IN 3D SPACE */}
      <group position={[0, 0, 0]}>
        <HeroSection />
      </group>

      {visible.about && (
        <Suspense fallback={null}>
          <group position={[30, 0, -30]}>
            <AboutSection />
          </group>
        </Suspense>
      )}

      {visible.projects && (
        <Suspense fallback={null}>
          <group position={[-30, 0, -60]}>
            <ProjectsSection />
          </group>
        </Suspense>
      )}

      {visible.skills && (
        <Suspense fallback={null}>
          <group position={[0, -30, -90]} rotation={[0, Math.PI / 8, 0]}>
            <SkillsSection />
          </group>
        </Suspense>
      )}

      {visible.contact && (
        <Suspense fallback={null}>
          <group position={[0, 0, -120]}>
            <ContactSection />
          </group>
        </Suspense>
      )}
    </>
  );
}

export function ThreeScene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 bg-transparent">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        performance={{ min: 0.5 }}
      >
        <fog attach="fog" args={['#000000', 10, 40]} />
        <color attach="background" args={['#050505']} />

        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
