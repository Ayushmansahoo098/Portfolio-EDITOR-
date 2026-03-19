import { Html, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function RotatingIcons({ tools, isMobile }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5; // Slow rotation speed
    }
  });

  return (
    <group ref={groupRef}>
      {tools.map((tool, index) => {
        const radius = isMobile ? 3.5 : 6;
        const angle = (index / tools.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const rotateY = -angle + Math.PI / 2;

        return (
          <Float key={tool.name} floatIntensity={2} rotationIntensity={0.5} speed={1}>
            <Html transform position={[x, 0, z]} rotation={[0, rotateY, 0]} className="pointer-events-auto">
              <div className="glass-panel p-6 flex flex-col items-center justify-center border hover:border-accentOrange hover:-translate-y-4 hover:bg-accentOrange/10 transition-all duration-300 w-32 h-32 md:w-40 md:h-40 group">
                <img src={tool.img} alt={tool.name} className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-transform" />
                <p className="mt-4 font-medium text-white text-sm whitespace-nowrap">{tool.name}</p>
              </div>
            </Html>
          </Float>
        );
      })}
    </group>
  );
}

export function SkillsSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const tools = [
    { name: 'Premiere Pro', img: 'https://i.ibb.co/G3BrsXdk/Premier-pro.png' },
    { name: 'After Effects', img: 'https://i.ibb.co/VcGGFJyV/after-effects.png' },
    { name: 'Photoshop', img: 'https://i.ibb.co/twH6tYdS/photoshop.png' },
    { name: 'Illustrator', img: 'https://i.ibb.co/C3D16Lhd/illustrator.png' },
    { name: 'CapCut', img: 'https://i.ibb.co/Tx2tHTNz/capcut.png' }
  ];

  return (
    <>
      <Html transform position={[0, isMobile ? 5 : 4, isMobile ? -1 : -2]} className="w-[90vw] md:w-[600px] text-center select-none">
        <h2 className="font-display text-4xl md:text-7xl text-white tracking-widest uppercase">Tools I Use</h2>
        <p className="text-textSecondary text-sm md:text-base mt-2">Professional software that brings creative visions to life</p>
      </Html>

      <RotatingIcons tools={tools} isMobile={isMobile} />
    </>
  );
}
