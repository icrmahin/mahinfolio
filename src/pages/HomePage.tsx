import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, CalendarBlank, EnvelopeSimple, FileText } from '@phosphor-icons/react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCE_HISTORY } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { InterfaceGallery } from '../components/InterfaceGallery';
import { MetaSEO } from '../components/MetaSEO';
import { MagneticButton } from '../components/MagneticButton';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface HomePageProps {
  onNavigate: (view: string, slug?: string) => void;
  onOpenResume: () => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenResume,
  onOpenBooking,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Use gsap.matchMedia for clean responsive & reduced-motion orchestration
    const mm = gsap.matchMedia();

    mm.add(
      {
        allowMotion: '(prefers-reduced-motion: no-preference)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
        isMobile: '(max-width: 639px)',
        isDesktop: '(min-width: 640px)',
      },
      (context) => {
        const { reduceMotion, isMobile } = context.conditions as {
          reduceMotion: boolean;
          allowMotion: boolean;
          isMobile: boolean;
          isDesktop: boolean;
        };

        if (reduceMotion) {
          // Instantly show content with zero animation for users requesting reduced motion
          gsap.set('.gsap-hero-item, .project-card-wrapper', {
            opacity: 1,
            y: 0,
            clearProps: 'all',
          });
          return;
        }

        // Master coordinated timeline for the introductory section with text reveal
        const heroTimeline = gsap.timeline({
          defaults: { ease: 'power3.out' },
        });

        heroTimeline
          .from('.gsap-hero-badge', {
            opacity: 0,
            y: 8,
            duration: 0.45,
          })
          .fromTo(
            '.gsap-hero-title',
            {
              opacity: 0,
              y: '100%',
            },
            {
              opacity: 1,
              y: '0%',
              duration: 0.8,
              ease: 'power4.out',
            },
            '-=0.2'
          )
          .from(
            '.gsap-hero-bio',
            {
              opacity: 0,
              y: 12,
              duration: 0.6,
            },
            '-=0.4'
          )
          .from(
            '.gsap-hero-links',
            {
              opacity: 0,
              y: 8,
              duration: 0.45,
            },
            '-=0.3'
          );

        // Subtle, staggered entrance animation for project list items
        gsap.from('.project-card-wrapper', {
          scrollTrigger: {
            trigger: '.project-list-container',
            start: isMobile ? 'top 90%' : 'top 85%',
            once: true,
          },
          opacity: 0,
          y: isMobile ? 14 : 22,
          duration: isMobile ? 0.5 : 0.65,
          stagger: isMobile ? 0.1 : 0.16,
          ease: 'power2.out',
          clearProps: 'transform',
        });

        // Section header reveal animations
        gsap.utils.toArray<HTMLElement>('.gsap-section-header').forEach((header) => {
          gsap.from(header, {
            scrollTrigger: {
              trigger: header,
              start: 'top 92%',
              once: true,
            },
            opacity: 0,
            y: 14,
            duration: 0.6,
            ease: 'power3.out',
          });
        });
      },
      containerRef
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="space-y-16 sm:space-y-28">
      <MetaSEO
        title={`${PERSONAL_INFO.name} (${PERSONAL_INFO.handle}) — ${PERSONAL_INFO.role}`}
        description={PERSONAL_INFO.bio}
        image={PERSONAL_INFO.portraitUrl}
        urlPath="/"
        type="website"
      />

      {/* Section A & B: Compact Introduction & Social Links */}
      <section className="space-y-5 pt-3 sm:pt-12">
        <div className="space-y-2.5">
          <div className="gsap-hero-badge flex items-center gap-2 text-xs text-[#827D75]">
            <span className="font-semibold text-[#292621]">{PERSONAL_INFO.name}</span>
            <span aria-hidden="true">·</span>
            <span>{PERSONAL_INFO.role}</span>
          </div>

          <div className="overflow-hidden py-0.5">
            <h1 className="gsap-hero-title text-[28px] sm:text-4xl font-normal tracking-tight text-[#292621] leading-tight text-balance">
              I design and build <span className="font-medium text-[#292621]">digital products</span>.
            </h1>
          </div>

          <p className="gsap-hero-bio text-sm sm:text-base text-[#827D75] leading-relaxed max-w-[580px]">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Small social / profile links (touch-friendly targets on mobile) */}
        <div className="gsap-hero-links flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#827D75] pt-1">
          {PERSONAL_INFO.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#292621] active:text-[#7790ED] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7790ED] rounded py-1.5 min-h-[38px]"
            >
              <span>{social.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#827D75]" />
            </a>
          ))}
          <span className="text-[#292621]/20 hidden sm:inline">·</span>
          <MagneticButton strength={5}>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1 text-[#292621] hover:text-[#435DC9] active:text-[#435DC9] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#435DC9] rounded font-medium py-1.5 min-h-[38px]"
            >
              <span>Book a call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#435DC9]" />
            </button>
          </MagneticButton>
        </div>
      </section>

      {/* Section C: Selected Work */}
      <section className="space-y-6 sm:space-y-8">
        <div className="gsap-section-header flex items-baseline justify-between border-b border-[#292621]/10 pb-3">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-[#827D75]">
            Selected Work
          </h2>
          <button
            onClick={() => onNavigate('archive')}
            className="text-xs text-[#827D75] hover:text-[#292621] active:text-[#7790ED] inline-flex items-center gap-1 transition-colors group min-h-[36px] py-1"
          >
            <span>View archive</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="project-list-container space-y-12 sm:space-y-16">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="project-card-wrapper">
              <ProjectCard
                project={project}
                index={idx}
                onOpenCaseStudy={(slug) => onNavigate('case-study', slug)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section D: Selected Interfaces (Horizontally browsable gallery) */}
      <InterfaceGallery />

      {/* Section E: About Preview */}
      <section className="space-y-5 border-t border-[#292621]/10 pt-12 sm:pt-16">
        <h2 className="gsap-section-header text-xs uppercase font-semibold tracking-wider text-[#827D75]">
          About
        </h2>

        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-[#292621]/15 bg-[#EAE1D5] shrink-0 shadow-xs">
            <img
              src={PERSONAL_INFO.portraitUrl}
              alt="A. Mahin portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-2.5 flex-1 text-sm text-[#827D75] leading-relaxed">
            <p className="text-[#292621] font-medium">
              Bridging product strategy, interface design, and full-stack software.
            </p>
            <p>
              I build products with high sensitivity to detail, clean typography, and solid engineering foundations.
              Rather than maintaining a rigid wall between design and development, I design in code to test interactions,
              performance, and physical device ergonomics early.
            </p>
            <div>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-1.5 text-xs text-[#292621] font-medium hover:text-[#7790ED] active:text-[#7790ED] transition-colors group mt-1 min-h-[44px] py-2"
              >
                <span>Read more about my background</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section F: Work Experience or Background */}
      <section className="space-y-5 border-t border-[#292621]/10 pt-12 sm:pt-16">
        <div className="gsap-section-header flex items-baseline justify-between">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-[#827D75]">
            Experience & Background
          </h2>
          <span className="text-xs text-[#827D75] font-mono">2022 — Present</span>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {EXPERIENCE_HISTORY.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-0.5">
                <span className="font-semibold text-sm text-[#292621]">{item.role}</span>
                <span className="text-[#827D75] font-mono tabular-nums">{item.period}</span>
              </div>
              <div className="text-xs text-[#827D75]">{item.company}</div>
              <p className="text-xs sm:text-sm text-[#827D75] leading-relaxed pt-0.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section G: Contact */}
      <section id="contact-section" className="space-y-5 border-t border-[#292621]/10 pt-12 sm:pt-16 pb-8">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-[#827D75]">
          Get in Touch
        </h2>

        <div className="space-y-4 max-w-[540px]">
          <p className="text-xl sm:text-2xl font-normal text-[#292621] leading-snug text-balance">
            Available for select product engineering, UI/UX architecture, and freelance collaborations.
          </p>

          <p className="text-xs sm:text-sm text-[#827D75] leading-relaxed">
            Whether you are launching an early-stage venture, refining a mobile workflow, or rebuilding an operational tool, feel free to reach out.
          </p>

          {/* Action buttons (mobile-first stacked or responsive row with minimum 44px height) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#292621] text-[#F5EDE2] text-xs font-medium hover:bg-[#292621]/90 active:scale-[0.98] transition-all min-h-[44px]"
            >
              <EnvelopeSimple className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <MagneticButton strength={4}>
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-[#292621]/15 text-[#292621] text-xs font-medium hover:bg-[#EAE1D5] active:scale-[0.98] transition-all min-h-[44px]"
              >
                <CalendarBlank className="w-4 h-4 text-[#435DC9]" />
                <span>Book a 30-min call</span>
              </button>
            </MagneticButton>

            <MagneticButton strength={4}>
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-[#292621]/15 text-[#292621] text-xs font-medium hover:bg-[#EAE1D5] active:scale-[0.98] transition-all min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-[#827D75]" />
                <span>View Resume</span>
              </button>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
