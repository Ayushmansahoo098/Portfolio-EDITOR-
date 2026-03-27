import { useState, useEffect, useRef } from 'react';

/**
 * Counts from 0 to `target` over `duration` ms with an ease-out curve.
 * `decimals` controls significant decimal places.
 * Triggered once when the component mounts (i.e. when scroll makes it visible).
 */
export function useCountUp(target, duration = 1800, decimals = 0) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Small delay so the panel is visible before counting starts
    const timer = setTimeout(() => {
      const animate = (timestamp) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(parseFloat((eased * target).toFixed(decimals)));

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };
      rafRef.current = requestAnimationFrame(animate);
    }, 300);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, decimals]);

  return count;
}
