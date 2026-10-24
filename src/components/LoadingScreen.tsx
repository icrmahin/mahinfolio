import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Counter animation
    const obj = { val: 0 };
    const counterTween = gsap.to(obj, {
      val: 100,
      duration: 1.1,
      ease: 'power2.inOut',
      onUpdate: () => {
        setProgress(Math.round(obj.val));
      },
    });

    let lineTween: gsap.core.Tween | undefined;
    let titleTween: gsap.core.Tween | undefined;
    let exitTimeline: gsap.core.Timeline | undefined;

    // Animate line progress
    if (lineRef.current) {
      lineTween = gsap.to(lineRef.current, {
        scaleX: 1,
        duration: 1.1,
        ease: 'power2.inOut',
      });
    }

    // Entrance animation of text
    if (titleRef.current) {
      titleTween = gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    }

    // Exit transition sequence
    const timer = setTimeout(() => {
      exitTimeline = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      exitTimeline.to([titleRef.current, counterRef.current, lineRef.current], {
        opacity: 0,
        y: -10,
        duration: 0.35,
        stagger: 0.05,
        ease: 'power2.in',
      }).to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.75,
          ease: 'power4.inOut',
        },
        '-=0.1'
      );
    }, 1300);

    return () => {
      counterTween.kill();
      lineTween?.revert();
      titleTween?.revert();
      exitTimeline?.kill();
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-page text-text flex flex-col justify-between p-6 sm:p-12 select-none"
      style={{ willChange: 'transform' }}
    >
      {/* Top Header Label */}
      <div className="flex items-center justify-between text-[11px] font-mono text-text-muted uppercase tracking-widest">
        <span>Portfolio & Systems</span>
        <span>A. Mahin</span>
      </div>

      {/* Center Wordmark & Subtitle */}
      <div className="max-w-[640px] w-full mx-auto space-y-3">
        <div className="overflow-hidden">
          <p
            ref={titleRef}
            className="text-3xl sm:text-5xl font-semibold tracking-tight text-text"
          >
            icrmahin
          </p>
        </div>
        <p className="text-xs sm:text-sm font-mono text-text-muted">
          Product Engineer & AI Systems Architect
        </p>
        
        {/* Minimal Progress Bar */}
        <div className="w-full h-0.5 bg-text/10 rounded-full overflow-hidden mt-6">
          <div
            ref={lineRef}
            className="h-full bg-text origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>

      {/* Bottom Counter */}
      <div
        ref={counterRef}
        className="flex items-center justify-between text-xs font-mono text-text-muted"
      >
        <span>INITIALIZING INTERFACE</span>
        <span className="tabular-nums text-text font-semibold">
          {progress.toString().padStart(3, '0')}%
        </span>
      </div>
    </div>
  );
};
