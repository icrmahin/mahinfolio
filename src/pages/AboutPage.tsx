import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react';
import { PERSONAL_INFO, EXPERIENCE_HISTORY } from '../data/portfolioData';
import { MetaSEO } from '../components/MetaSEO';

import gsap from 'gsap';

interface AboutPageProps {
  onNavigate: (view: string) => void;
  onOpenResume: () => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenResume,
  onOpenBooking,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tween = gsap.fromTo(
      '.gsap-about-reveal',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.65, stagger: 0.08, ease: 'power3.out', clearProps: 'transform' }
    );

    return () => {
      tween.revert();
    };
  }, []);

  return (
    <article className="space-y-12 sm:space-y-16 pt-3 sm:pt-10 pb-16">
      <MetaSEO
        title={`About — ${PERSONAL_INFO.name} (${PERSONAL_INFO.handle})`}
        description={`Background, working approach, and technical capabilities of ${PERSONAL_INFO.name}, Product Engineer and AI-Native Builder.`}
        image={PERSONAL_INFO.portraitUrl}
        urlPath="/about"
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

      {/* Header Profile Section */}
      <section className="gsap-about-reveal space-y-5">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-[#292621]/15 bg-[#EAE1D5] shrink-0 shadow-xs">
            <img
              src={PERSONAL_INFO.portraitUrl}
              alt="A. Mahin"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#292621]">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary">
              {PERSONAL_INFO.role} · Dhaka, Bangladesh
            </p>
            <div className="flex items-center gap-3 pt-1 text-xs">
              <button
                onClick={onOpenResume}
                className="text-[#292621] hover:text-[#435DC9] underline font-medium py-1.5 min-h-[38px] flex items-center"
              >
                Curriculum Vitae
              </button>
              <span className="text-[#292621]/20">·</span>
              <button
                onClick={onOpenBooking}
                className="text-[#292621] hover:text-[#435DC9] underline font-medium py-1.5 min-h-[38px] flex items-center"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Working Approach */}
      <section className="gsap-about-reveal space-y-3.5 border-t border-[#292621]/10 pt-8 sm:pt-10">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-text-secondary">
          Background & Approach
        </h2>
        <div className="space-y-3.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
          {PERSONAL_INFO.aboutDetailed.map((para, idx) => (
            <p key={idx} className="text-[#292621]/90">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="space-y-4 border-t border-[#292621]/10 pt-8 sm:pt-10">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-text-secondary">
          Capabilities & Practices
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
          <div className="space-y-1.5 p-3.5 rounded-lg bg-[#EAE1D5]/30 border border-[#292621]/8">
            <h3 className="font-semibold text-[#292621]">Product Design & UI/UX</h3>
            <p className="text-text-secondary leading-relaxed">
              System architecture, user flows, responsive layouts, typographic hierarchy, micro-interactions, and accessibility standards.
            </p>
          </div>
          <div className="space-y-1.5 p-3.5 rounded-lg bg-[#EAE1D5]/30 border border-[#292621]/8">
            <h3 className="font-semibold text-[#292621]">Frontend & Mobile Engineering</h3>
            <p className="text-text-secondary leading-relaxed">
              React, TypeScript, Expo / React Native, Tailwind CSS, Vite, performance optimization, and clean state management.
            </p>
          </div>
          <div className="space-y-1.5 p-3.5 rounded-lg bg-[#EAE1D5]/30 border border-[#292621]/8">
            <h3 className="font-semibold text-[#292621]">Backend & Persistence</h3>
            <p className="text-text-secondary leading-relaxed">
              Supabase, PostgreSQL schema design, real-time sync, Row-Level Security (RLS), and RESTful service integrations.
            </p>
          </div>
          <div className="space-y-1.5 p-3.5 rounded-lg bg-[#EAE1D5]/30 border border-[#292621]/8">
            <h3 className="font-semibold text-[#292621]">AI-Native Product Thinking</h3>
            <p className="text-text-secondary leading-relaxed">
              Designing contextual, quiet AI interfaces that assist users without chat gimmicks or intrusive popups.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Experience List */}
      <section className="space-y-4 sm:space-y-6 border-t border-[#292621]/10 pt-8 sm:pt-10">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-text-secondary">
          Verified Track Record
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {EXPERIENCE_HISTORY.map((exp, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-0.5">
                <span className="font-semibold text-sm text-[#292621]">{exp.role}</span>
                <span className="text-text-secondary font-mono tabular-nums">{exp.period}</span>
              </div>
              <div className="text-xs text-text-secondary">{exp.company}</div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pt-0.5">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Connect & Socials */}
      <section className="space-y-3.5 border-t border-[#292621]/10 pt-8 sm:pt-10">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-text-secondary">
          Connect
        </h2>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-text-secondary">
          {PERSONAL_INFO.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target={s.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#292621] active:text-[#435DC9] transition-colors py-2 px-1 min-h-[44px]"
            >
              <span>{s.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </section>
    </article>
  );
};
