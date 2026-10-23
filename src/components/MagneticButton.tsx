import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Maximum offset in pixels (default 6)
  onClick?: () => void;
  title?: string;
  ariaLabel?: string;
}

/**
 * MagneticButton - Subtly attracts toward cursor on pointer devices.
 * Uses bounded displacement and elastic return. Automatically disabled
 * on touch devices and for users with prefers-reduced-motion.
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 6,
  onClick,
  title,
  ariaLabel,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion || !containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      const moveX = Math.max(-strength, Math.min(strength, deltaX * strength));
      const moveY = Math.max(-strength, Math.min(strength, deltaY * strength));

      gsap.to(content, {
        x: moveX,
        y: moveY,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(content, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)',
        overwrite: 'auto',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(content);
    };
  }, [strength]);

  return (
    <div
      ref={containerRef}
      className={`inline-block ${className}`}
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
    >
      <div ref={contentRef} style={{ willChange: 'transform' }}>
        {children}
      </div>
    </div>
  );
};
