import { Canvas } from '@react-three/fiber';
import { Environment, Preload, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import { CameraController } from './CameraController';
import { HeroSection } from './Sections/HeroSection';
import { AboutSection } from './Sections/AboutSection';
import { ProjectsSection } from './Sections/ProjectsSection';
import { SkillsSection } from './Sections/SkillsSection';
import { ContactSection } from './Sections/ContactSection';

export function ThreeScene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 bg-transparent">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <fog attach="fog" args={['#000000', 10, 40]} />
        <color attach="background" args={['#050505']} />

        <Suspense fallback={null}>
          <CameraController />
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

          {/* Cinematic lighting setup */}
          <pointLight position={[-10, 0, -20]} color="#FF8C00" intensity={2} />
          <pointLight position={[10, -10, 5]} color="#7B3FE4" intensity={2} />

          {/* Particle background */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

          {/* SECTIONS IN 3D SPACE */}
          {/* Hero starting around 0,0,0 */}
          <group position={[0, 0, 0]}>
            <HeroSection />
          </group>

          {/* About horizontally panned */}
          <group position={[30, 0, -30]}>
            <AboutSection />
          </group>

          {/* Projects deep zoom down */}
          <group position={[-30, 0, -60]}>
            <ProjectsSection />
          </group>

          {/* Skills orbital / side */}
          <group position={[0, -30, -90]} rotation={[0, Math.PI / 8, 0]}>
            <SkillsSection />
          </group>

          {/* Contact final fade/zoom down */}
          <group position={[0, 0, -120]}>
            <ContactSection />
          </group>

          <Environment preset="city" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
