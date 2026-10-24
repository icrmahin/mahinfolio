import React from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from '@phosphor-icons/react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (slug: string) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy, index }) => {
  const handleMouseEnter = () => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const dispMap = document.getElementById('liquid-displacement');
    if (dispMap) {
      gsap.fromTo(
        dispMap,
        { attr: { scale: 0 } },
        {
          attr: { scale: 14 },
          duration: 0.28,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1,
          overwrite: 'auto',
        }
      );
    }
  };

  return (
    <article className="project-card group space-y-3 sm:space-y-4">
      {/* Project Image Box with liquid displacement hover animation */}
      <div
        onClick={() => onOpenCaseStudy(project.slug)}
        onMouseEnter={handleMouseEnter}
        className="relative overflow-hidden rounded-xl border border-text/12 bg-surface/60 cursor-pointer transition-all duration-300 group-hover:scale-[1.01] active:scale-[0.99] shadow-xs"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenCaseStudy(project.slug);
          }
        }}
        aria-label={`Open case study for ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          referrerPolicy="no-referrer"
          className="w-full aspect-[16/10] sm:aspect-[16/10] object-cover transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-95"
          style={{ filter: 'url(#liquid-distortion)' }}
          loading={index === 0 ? "eager" : "lazy"}
        />
      </div>

      {/* Project Meta Information: Clean, unboxed text */}
      <div className="space-y-1 px-0.5">
        <div className="flex items-baseline justify-between gap-3">
          <button
            onClick={() => onOpenCaseStudy(project.slug)}
            className="text-left font-semibold text-base sm:text-lg text-text group-hover:text-accent-hover active:text-accent-hover transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-hover rounded min-h-[32px]"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-hover group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <span className="text-xs text-text-muted font-mono tabular-nums shrink-0">
            {project.year}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
          {project.tagline}
        </p>

        {/* Clean unboxed metadata with dot separators */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 pt-1 text-xs text-text-muted">
          <span>{project.role}</span>
          <span aria-hidden="true" className="text-text/20">·</span>
          <span>{project.category}</span>
          <span aria-hidden="true" className="text-text/20 hidden sm:inline">·</span>
          <span className="font-mono text-[11px] text-text/60 hidden sm:inline">
            {project.technologies.slice(0, 3).join(', ')}
          </span>
        </div>
      </div>
    </article>
  );
};
