import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Custom Cursor - Strict Minimalist Black Dot
 * Adheres strictly to user requirement: "do not add the custom cursor extra effects,
 * i need the custom cursor to be totally just a black dot."
 */
export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices or if cursor is not available
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || prefersReducedMotion || !cursorRef.current) return;

    const cursor = cursorRef.current;
    
    // Smooth GSAP quickTo for 60-120fps fluid tracking with zero lag
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.08, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.08, ease: 'power3.out' });

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to(cursor, { opacity: 1, duration: 0.15 });
        isVisible = true;
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.15 });
      isVisible = false;
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.15 });
      isVisible = true;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      gsap.killTweensOf(cursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#292621] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 opacity-0 hidden md:block"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  );
};
