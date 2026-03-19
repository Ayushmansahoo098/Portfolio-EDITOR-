import { Html, Float } from '@react-three/drei';

export function HeroSection() {
  return (
    <Float floatIntensity={1.5} rotationIntensity={0.5} speed={2}>
      {/* We use <Html transform> to create a 3D-oriented div */}
      <Html transform position={[0, 0, 0]} className="w-[90vw] md:w-[800px] text-center pointer-events-auto select-none">
        <div className="glass-panel p-6 md:p-12">
          <p className="text-accentOrange tracking-widest uppercase mb-4 text-sm md:text-lg">Cinematic Editor &amp; Visual Storyteller</p>
          <h1 className="font-display text-5xl md:text-8xl tracking-wider leading-none mb-6 gradient-text">
            TURNING FOOTAGE INTO STORIES
          </h1>
          <p className="text-textSecondary text-base md:text-xl font-light">
            Editing videos is like sculpting time. 
            <br/>Welcome to my workspace.
          </p>
        </div>
      </Html>
    </Float>
  );
}
