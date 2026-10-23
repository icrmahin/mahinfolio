import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { MetaSEO } from '../components/MetaSEO';

interface ArchivePageProps {
  onNavigate: (view: string, slug?: string) => void;
}

export const ArchivePage: React.FC<ArchivePageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) =>
        filter === 'mobile'
          ? p.category.toLowerCase().includes('mobile') || p.technologies.some(t => t.toLowerCase().includes('android') || t.toLowerCase().includes('native'))
          : filter === 'web'
          ? p.category.toLowerCase().includes('web')
          : true
      );

  return (
    <article className="space-y-8 sm:space-y-12 pt-3 sm:pt-10 pb-16">
      <MetaSEO
        title={`Work Archive — ${PERSONAL_INFO.name}`}
        description={`Catalog of digital products, operational systems, and mobile applications engineered by ${PERSONAL_INFO.name}.`}
        image={PERSONAL_INFO.portraitUrl}
        urlPath="/archive"
        type="website"
      />

      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-[#292621] active:text-[#435DC9] transition-colors group px-2 py-2 -ml-2 rounded min-h-[44px]"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Work</span>
        </button>
      </div>

      <header className="space-y-2.5">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#292621]">
          Project Archive
        </h1>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          A catalog of digital products, operational systems, and interfaces built by A. Mahin.
        </p>

        {/* Filter controls: functional button tabs with mobile touch padding */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs rounded transition-colors min-h-[38px] flex items-center ${
              filter === 'all'
                ? 'bg-[#292621] text-[#F5EDE2] font-medium'
                : 'text-text-secondary hover:text-[#292621] active:bg-[#EAE1D5] bg-[#EAE1D5]/60'
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setFilter('mobile')}
            className={`px-3 py-1.5 text-xs rounded transition-colors min-h-[38px] flex items-center ${
              filter === 'mobile'
                ? 'bg-[#292621] text-[#F5EDE2] font-medium'
                : 'text-text-secondary hover:text-[#292621] active:bg-[#EAE1D5] bg-[#EAE1D5]/60'
            }`}
          >
            Mobile & Operations
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-3 py-1.5 text-xs rounded transition-colors min-h-[38px] flex items-center ${
              filter === 'web'
                ? 'bg-[#292621] text-[#F5EDE2] font-medium'
                : 'text-text-secondary hover:text-[#292621] active:bg-[#EAE1D5] bg-[#EAE1D5]/60'
            }`}
          >
            Web Systems
          </button>
        </div>
      </header>

      {/* Archive List */}
      <div className="divide-y divide-[#292621]/10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onNavigate('case-study', project.slug)}
            className="py-4 sm:py-6 group cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-colors hover:bg-[#EAE1D5]/20 active:bg-[#EAE1D5]/40 -mx-3 px-3 rounded-lg"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate('case-study', project.slug);
              }
            }}
            aria-label={`Open case study for ${project.title}`}
          >
            <div className="flex items-start gap-3.5">
              <div className="w-16 h-12 rounded overflow-hidden border border-[#292621]/10 bg-[#EAE1D5] shrink-0 shadow-xs">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex items-baseline justify-between sm:justify-start gap-2">
                  <h2 className="text-sm font-semibold text-[#292621] group-hover:text-[#435DC9] active:text-[#435DC9] transition-colors inline-flex items-center gap-1 truncate">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary group-hover:text-[#435DC9] shrink-0" />
                  </h2>
                  <span className="sm:hidden text-xs text-text-secondary font-mono tabular-nums shrink-0">
                    {project.year}
                  </span>
                </div>
                <p className="text-xs text-text-secondary line-clamp-1">
                  {project.tagline}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-text-secondary truncate">
                  <span className="truncate">{project.role}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-[#292621]/70">{project.category}</span>
                </div>
              </div>
            </div>

            <div className="hidden sm:block text-right shrink-0">
              <span className="text-xs text-text-secondary font-mono tabular-nums">
                {project.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
