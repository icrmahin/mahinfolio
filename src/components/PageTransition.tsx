import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PageTransitionProps {
  viewKey: string;
}

/**
 * PageTransition - Smooth curtain wipe effect on route/view changes.
 * Elegant 0.35s veil animation that masks the transition between views,
 * preventing abrupt flashes and reinforcing the editorial presentation.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ viewKey }) => {
  const veilRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip transition on initial page mount so loading screen handles entrance
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !veilRef.current) return;

    const veil = veilRef.current;

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });

    // Wipe down to cover, then wipe down to reveal
    tl.set(veil, { display: 'block', scaleY: 0, transformOrigin: 'top center' })
      .to(veil, {
        scaleY: 1,
        duration: 0.22,
        ease: 'power2.in',
      })
      .set(veil, { transformOrigin: 'bottom center' })
      .to(veil, {
        scaleY: 0,
        duration: 0.28,
        ease: 'power3.out',
        onComplete: () => {
          gsap.set(veil, { display: 'none' });
        },
      });

    return () => {
      tl.kill();
    };
  }, [viewKey]);

  return (
    <div
      ref={veilRef}
      className="fixed inset-0 z-[90] bg-text pointer-events-none hidden"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  );
};
