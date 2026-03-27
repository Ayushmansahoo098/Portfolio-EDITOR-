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
      if (e.target.closest('a, button, [role="button"], input, textarea, [data-cursor]')) {
        setHovered(true);
      }
    };
    const onMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, [data-cursor]')) {
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

      // Ring lerps behind
      const lerpAmt = 0.10;
      const nx = rx + (mx - rx) * lerpAmt;
      const ny = ry + (my - ry) * lerpAmt;
      ringPos.current = { x: nx, y: ny };

      if (ringRef.current) {
        const size = hovered ? 48 : clicked ? 20 : 36;
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

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Sharp dot — snaps to cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9996] pointer-events-none rounded-full"
        style={{
          width: '8px',
          height: '8px',
          background: hovered ? '#7B3FE4' : '#FF8C00',
          boxShadow: hovered
            ? '0 0 10px rgba(123,63,228,0.9)'
            : '0 0 10px rgba(255,140,0,0.9)',
          opacity: visible ? 1 : 0,
          transition: 'background 0.2s, box-shadow 0.2s',
          mixBlendMode: 'normal',
        }}
      />

      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9995] pointer-events-none rounded-full"
        style={{
          border: hovered
            ? '1.5px solid rgba(123,63,228,0.7)'
            : '1.5px solid rgba(255,140,0,0.45)',
          boxShadow: hovered
            ? 'inset 0 0 8px rgba(123,63,228,0.15)'
            : 'inset 0 0 8px rgba(255,140,0,0.08)',
          opacity: visible ? 1 : 0,
          transition: 'border-color 0.25s, box-shadow 0.25s, width 0.2s ease, height 0.2s ease',
          willChange: 'transform, width, height',
        }}
      />
    </>
  );
}
