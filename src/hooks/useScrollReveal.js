'use client';
import { useEffect, useRef } from 'react';

/**
 * Adds the 'visible' class to the returned ref's element when it enters
 * the viewport. Pair with the .reveal / .reveal-left / .reveal-right
 * CSS classes defined in globals.css.
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
