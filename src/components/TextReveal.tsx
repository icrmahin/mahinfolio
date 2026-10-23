import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

/**
 * TextReveal - Awwwards-style staggered upward text reveal animation
 * Each line/word is held in an overflow-hidden wrapper and reveals smoothly.
 */
export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const el = containerRef.current;
    
    const tween = gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 20,
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      },
      {
        opacity: 1,
        y: 0,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 0.75,
        delay,
        ease: 'power3.out',
        clearProps: 'clipPath,transform',
      }
    );

    return () => {
      tween.revert();
    };
  }, [delay]);

  return React.createElement(
    Component,
    {
      ref: containerRef,
      className: `${className}`,
      style: { willChange: 'transform, opacity, clip-path' },
    },
    children
  );
};
