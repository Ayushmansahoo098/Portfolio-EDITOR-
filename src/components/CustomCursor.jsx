import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ringPos = useRef({ x: -100, y: -100 });
  const mousePos = useRef({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]')) {
        setHovered(true);
      }
    };
    const onMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]')) {
        setHovered(false);
      }
    };

    const animate = () => {
      const { x: mx, y: my } = mousePos.current;
      const { x: rx, y: ry } = ringPos.current;

      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }

      // Ring smoothly tracks cursor
      const lerpAmt = 0.12;
      const nx = rx + (mx - rx) * lerpAmt;
      const ny = ry + (my - ry) * lerpAmt;
      ringPos.current = { x: nx, y: ny };

      if (ringRef.current) {
        const size = hovered ? 46 : clicked ? 22 : 34;
        const half = size / 2;
        ringRef.current.style.transform = `translate(${nx - half}px, ${ny - half}px)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
      }

      raf = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(raf);
    };
  }, [hovered, clicked, visible]);

  const isTouch = typeof window !== 'undefined' && (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(hover: none)').matches ||
    'ontouchstart' in window ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0)
  );

  if (isTouch) {
    return null;
  }

  return (
    <>
      {/* Sharp dot — snaps to cursor (highest z-index to stay above modals) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[999999] pointer-events-none rounded-full"
        style={{
          width: '8px',
          height: '8px',
          background: hovered ? '#f4efe7' : '#a55c43',
          border: hovered ? '1px solid #a55c43' : '1px solid rgba(244, 239, 231, 0.6)',
          boxShadow: hovered
            ? '0 0 10px rgba(165, 92, 67, 0.8), 0 0 2px rgba(0,0,0,0.5)'
            : '0 0 8px rgba(165, 92, 67, 0.5), 0 0 2px rgba(0,0,0,0.4)',
          opacity: visible ? 1 : 0,
          transition: 'background 0.2s, border 0.2s, box-shadow 0.2s, opacity 0.2s',
        }}
      />

      {/* Trailing ring (highest z-index right below dot) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[999998] pointer-events-none rounded-full"
        style={{
          border: hovered
            ? '1.5px solid rgba(244, 239, 231, 0.9)'
            : '1.5px solid rgba(165, 92, 67, 0.5)',
          background: hovered ? 'rgba(165, 92, 67, 0.15)' : 'transparent',
          boxShadow: hovered
            ? '0 0 12px rgba(165, 92, 67, 0.4), inset 0 0 6px rgba(255,255,255,0.2)'
            : '0 0 6px rgba(0, 0, 0, 0.25)',
          opacity: visible ? 1 : 0,
          transition: 'border-color 0.25s, background 0.2s, box-shadow 0.25s, width 0.2s ease, height 0.2s ease',
          willChange: 'transform, width, height',
        }}
      />
    </>
  );
}
