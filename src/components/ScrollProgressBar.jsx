import { useEffect, useState, useRef } from 'react';

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = totalHeight > 0 ? Math.min(Math.max(scrollY / totalHeight, 0), 1) : 0;
      setProgress(p);

      if (barRef.current) {
        barRef.current.style.width = `${(p * 100).toFixed(2)}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9990] pointer-events-none">
      {/* Top thin line track */}
      <div className="relative h-[2px] bg-[#d4c9ba]/30 w-full">
        <div
          ref={barRef}
          className="absolute top-0 left-0 h-full"
          style={{
            width: `${(progress * 100).toFixed(2)}%`,
            background: 'linear-gradient(90deg, #a55c43, #34463d)',
            transition: 'width 0.05s linear',
          }}
        />
      </div>
    </div>
  );
}
