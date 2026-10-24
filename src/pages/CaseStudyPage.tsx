import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  User,
  Users,
  DeviceMobile,
  Code,
  ShieldCheck,
  Compass,
  ArrowSquareOut,
  Target,
  Sparkle,
} from "@phosphor-icons/react";
import { CASE_STUDIES, PROJECTS, PERSONAL_INFO } from "../data/portfolioData";
import { MetaSEO } from "../components/MetaSEO";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyPageProps {
  slug: string;
  onNavigate: (view: string, slug?: string) => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  slug,
  onNavigate,
}) => {
  const caseStudy = CASE_STUDIES[slug] || CASE_STUDIES["hibbullah-pharmacy"];
  const nextProject = PROJECTS.find(
    (p) => p.slug === caseStudy.nextProjectSlug,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Entrance & Scroll-triggered Section Reveals
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        allowMotion: "(prefers-reduced-motion: no-preference)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
        isMobile: "(max-width: 639px)",
      },
      (context) => {
        const { reduceMotion, isMobile } = context.conditions as {
          reduceMotion: boolean;
          allowMotion: boolean;
          isMobile: boolean;
        };

        if (reduceMotion) {
          gsap.set(".case-study-hero, .case-study-section", {
            opacity: 1,
            y: 0,
          });
          return;
        }

        // Hero staggered entrance
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.from(".case-study-hero-item", {
          opacity: 0,
          y: isMobile ? 8 : 14,
          duration: isMobile ? 0.45 : 0.6,
          stagger: 0.07,
          clearProps: "transform",
        });

        // Hero image soft reveal
        tl.from(
          ".case-study-hero-img",
          {
            opacity: 0,
            scale: 0.98,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform",
          },
          "-=0.25",
        );

        // Scroll reveals for each case-study section
        const sections = gsap.utils.toArray<HTMLElement>(".case-study-section");
        sections.forEach((section) => {
          gsap.from(section, {
            scrollTrigger: {
              trigger: section,
              start: isMobile ? "top 92%" : "top 88%",
              once: true,
            },
            opacity: 0,
            y: isMobile ? 12 : 18,
            duration: isMobile ? 0.45 : 0.6,
            ease: "power2.out",
            clearProps: "transform",
          });
        });
      },
      containerRef,
    );

    return () => {
      mm.revert();
    };
  }, [slug]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <article
      ref={containerRef}
      className="space-y-12 sm:space-y-18 pb-16 relative"
    >
      {/* Dynamic SEO with Person and Project Schemas */}
      <MetaSEO
        title={`${caseStudy.title} — Case Study · ${PERSONAL_INFO.name}`}
        description={`${caseStudy.subtitle} Comprehensive product architecture, design decisions, and engineering.`}
        image={caseStudy.heroImage}
        urlPath={`/case-study/${caseStudy.slug}`}
        type="article"
        projectSchema={{
          name: caseStudy.title,
          description: caseStudy.overview,
          category: caseStudy.clientOrOrg,
          technologies: caseStudy.technologies,
          image: caseStudy.heroImage,
          url: `/case-study/${caseStudy.slug}`,
          dateCreated: "2024",
        }}
      />
      {/* Section 1: Title, Subtitle, & Metadata Header */}
      <header className="space-y-5">
        <div className="space-y-2.5">
          <div className="case-study-hero-item flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-muted">
            <span className="font-semibold text-text">
              {caseStudy.clientOrOrg}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{caseStudy.platform}</span>
            <span aria-hidden="true">·</span>
            <span className="text-accent-hover font-medium">
              {caseStudy.status}
            </span>
          </div>

          <h1 className="case-study-hero-item text-2xl sm:text-4xl font-semibold tracking-tight text-text leading-tight text-balance">
            {caseStudy.title}
          </h1>

          <p className="case-study-hero-item text-sm sm:text-base text-text-muted leading-relaxed max-w-[620px]">
            {caseStudy.subtitle}
          </p>
        </div>

        {/* Structured Metadata Grid (2 cols on mobile, 4 cols on desktop) */}
        <div className="case-study-hero-item grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 py-4 border-y border-text/10 text-xs">
          <div className="space-y-0.5">
            <span className="text-text-muted block text-[11px] flex items-center gap-1">
              <User className="w-3 h-3 text-text" /> Role
            </span>
            <span className="font-medium text-text">{caseStudy.role}</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-text-muted block text-[11px] flex items-center gap-1">
              <Users className="w-3 h-3 text-text" /> Team
            </span>
            <span className="text-text leading-tight">
              {caseStudy.collaborators}
            </span>
          </div>
          <div className="space-y-0.5">
            <span className="text-text-muted block text-[11px] flex items-center gap-1">
              <Clock className="w-3 h-3 text-text" /> Timeline
            </span>
            <span className="font-mono text-text">{caseStudy.timeline}</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-text-muted block text-[11px] flex items-center gap-1">
              <DeviceMobile className="w-3 h-3 text-text" /> Platform
            </span>
            <span className="text-text">{caseStudy.platform}</span>
          </div>
        </div>
      </header>

      {/* Main Hero Visual with Caption */}
      <div className="case-study-hero-img space-y-2">
        <div className="overflow-hidden rounded-xl border border-text/12 bg-surface/60 shadow-xs">
          <img
            src={caseStudy.heroImage}
            alt={`${caseStudy.title} overview interface`}
            referrerPolicy="no-referrer"
            className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover"
            loading="eager"
          />
        </div>
        <p className="text-[11px] sm:text-xs text-text-muted italic px-1 text-center sm:text-left leading-normal">
          {caseStudy.heroCaption}
        </p>
      </div>

      {/* Architectural Document Index - Compact Jump Section */}
      <div className="p-2 sm:p-2.5 rounded-xl bg-surface/60 border border-text/12 space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-mono text-text-muted px-0.5">
          <span className="flex items-center gap-1.5 text-text font-medium">
            <Compass className="w-3.5 h-3.5 text-accent-hover" />
          </span>
          <span className="tabular-nums">7 sections</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <button
            onClick={() => scrollToSection("section-context")}
            className="px-2.5 py-1.5 rounded-md text-xs font-medium text-text bg-page border border-text/12 hover:bg-text hover:text-page active:bg-accent-hover active:text-page transition-colors min-h-[36px] flex items-center gap-1.5"
          >
            <span className="text-[10px] font-mono text-text-muted">01</span>
            <span>Context</span>
          </button>
          <button
            onClick={() => scrollToSection("section-requirements")}
            className="px-2.5 py-1.5 rounded-md text-xs font-medium text-text bg-page border border-text/12 hover:bg-text hover:text-page active:bg-accent-hover active:text-page transition-colors min-h-[36px] flex items-center gap-1.5"
          >
            <span className="text-[10px] font-mono text-text-muted">02</span>
            <span>Goals</span>
          </button>
          <button
            onClick={() => scrollToSection("section-architecture")}
            className="px-2.5 py-1.5 rounded-md text-xs font-medium text-text bg-page border border-text/12 hover:bg-text hover:text-page active:bg-accent-hover active:text-page transition-colors min-h-[36px] flex items-center gap-1.5"
          >
            <span className="text-[10px] font-mono text-text-muted">03</span>
            <span>User Flows</span>
          </button>
          <button
            onClick={() => scrollToSection("section-decisions")}
            className="px-2.5 py-1.5 rounded-md text-xs font-medium text-text bg-page border border-text/12 hover:bg-text hover:text-page active:bg-accent-hover active:text-page transition-colors min-h-[36px] flex items-center gap-1.5"
          >
            <span className="text-[10px] font-mono text-text-muted">04</span>
            <span>Decisions</span>
          </button>
          <button
            onClick={() => scrollToSection("section-tech")}
            className="px-2.5 py-1.5 rounded-md text-xs font-medium text-text bg-page border border-text/12 hover:bg-text hover:text-page active:bg-accent-hover active:text-page transition-colors min-h-[36px] flex items-center gap-1.5"
          >
            <span className="text-[10px] font-mono text-text-muted">05</span>
            <span>Tech Stack</span>
          </button>
          <button
            onClick={() => scrollToSection("section-challenges")}
            className="px-2.5 py-1.5 rounded-md text-xs font-medium text-text bg-page border border-text/12 hover:bg-text hover:text-page active:bg-accent-hover active:text-page transition-colors min-h-[36px] flex items-center gap-1.5"
          >
            <span className="text-[10px] font-mono text-text-muted">06</span>
            <span>Challenges</span>
          </button>
          <button
            onClick={() => scrollToSection("section-outcomes")}
            className="px-2.5 py-1.5 rounded-md text-xs font-medium text-text bg-page border border-text/12 hover:bg-text hover:text-page active:bg-accent-hover active:text-page transition-colors min-h-[36px] flex items-center gap-1.5"
          >
            <span className="text-[10px] font-mono text-text-muted">07</span>
            <span>Outcomes</span>
          </button>
        </div>
      </div>

      {/* Section 2: Project Overview */}
      <section className="case-study-section space-y-3 sm:space-y-4">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
          01. Project Overview
        </h2>
        <p className="text-sm sm:text-base text-text leading-relaxed font-normal">
          {caseStudy.overview}
        </p>
      </section>

      {/* Section 3: Context and The Problem */}
      <section
        id="section-context"
        className="case-study-section space-y-4 sm:space-y-5 border-t border-text/10 pt-8 sm:pt-10"
      >
        <div className="space-y-1.5">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
            02. Context & The Problem
          </h2>
          <p className="text-sm sm:text-base font-medium text-text leading-snug">
            {caseStudy.contextAndProblem.lead}
          </p>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-text-muted leading-relaxed">
          {caseStudy.contextAndProblem.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-surface/40 border border-text/10 space-y-2 mt-2">
          <span className="text-xs font-semibold text-text uppercase tracking-wider block">
            Core Operational Needs Identified
          </span>
          <ul className="space-y-1.5 text-xs text-text/90">
            {caseStudy.contextAndProblem.operationalNeeds.map((need, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-mono text-text-muted mt-0.5">·</span>
                <span className="leading-snug">{need}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 4: Goals & Discovery Research */}
      <section
        id="section-requirements"
        className="case-study-section space-y-5 sm:space-y-6 border-t border-text/10 pt-8 sm:pt-10"
      >
        <div className="space-y-1.5">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
            03. Goals & Discovery
          </h2>
          <p className="text-sm sm:text-base font-medium text-text">
            {caseStudy.goalsAndRequirements.primaryGoal}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 text-xs sm:text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold text-text text-xs uppercase tracking-wider">
              Functional Requirements
            </h3>
            <ul className="space-y-1.5 text-xs text-text-muted">
              {caseStudy.goalsAndRequirements.functionalRequirements.map(
                (req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle
                      className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5"
                      weight="fill"
                    />
                    <span className="leading-snug">{req}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-text text-xs uppercase tracking-wider">
              Operational Constraints
            </h3>
            <ul className="space-y-1.5 text-xs text-text-muted">
              {caseStudy.goalsAndRequirements.constraints.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-text-muted font-mono mt-0.5">·</span>
                  <span className="leading-snug">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Discovery Findings */}
        <div className="p-4 rounded-lg border border-text/10 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-text">
              Discovery Evidence & In-Field Audit
            </span>
            <span className="text-[11px] font-mono text-text-muted">
              Field Findings
            </span>
          </div>
          <p className="text-xs text-text-muted italic">
            Methodology: {caseStudy.discoveryAndResearch.method}
          </p>
          <ul className="space-y-1.5 text-xs text-text/90">
            {caseStudy.discoveryAndResearch.findings.map((f, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-accent-hover font-mono text-xs">→</span>
                <span className="leading-snug">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5: Information Architecture & User Flows - Pinned Storytelling on Desktop (>=640px) */}
      <section
        id="section-architecture"
        className="case-study-section border-t border-text/10 pt-8 sm:pt-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-8 items-start">
          {/* Pinned Left Narrative Rail on Desktop */}
          <div className="sm:col-span-5 sm:sticky sm:top-24 sm:self-start space-y-2">
            <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
              04. User Journeys & Flow Architecture
            </h2>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              {caseStudy.informationArchitecture.description}
            </p>
            <div className="hidden sm:block pt-2">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                Scroll to review{" "}
                {caseStudy.informationArchitecture.flows.length} stages ↓
              </span>
            </div>
          </div>

          {/* Scrolling Flow Cards on Right */}
          <div className="sm:col-span-7 space-y-3">
            {caseStudy.informationArchitecture.flows.map((flow, idx) => (
              <div
                key={idx}
                className="flow-step-card p-3.5 sm:p-4 rounded-lg bg-surface/40 border border-text/10 space-y-1.5 transition-all hover:border-accent-hover/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-text block">
                    {flow.stage}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs text-text-muted">
                  <strong className="text-text font-medium">
                    User Action:
                  </strong>{" "}
                  {flow.action}
                </p>
                <p className="text-xs text-text/90">
                  <strong className="text-text font-medium">
                    System Response:
                  </strong>{" "}
                  {flow.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Key Design Decisions - Pinned Narrative Rationale on Desktop */}
      <section
        id="section-decisions"
        className="case-study-section border-t border-text/10 pt-8 sm:pt-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-8 items-start">
          {/* Pinned Left Strategic Rationale Rail */}
          <div className="sm:col-span-5 sm:sticky sm:top-24 sm:self-start space-y-2">
            <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
              05. Key Design Decisions
            </h2>
            <p className="text-xs text-text-muted leading-relaxed">
              Three pivotal architectural decisions, evaluated against
              real-world operational friction.
            </p>
            <div className="hidden sm:block pt-1 text-[11px] font-mono text-text-muted space-y-1">
              <div>· Zero-latency sync</div>
              <div>· High-density typography</div>
              <div>· Direct hardware bridging</div>
            </div>
          </div>

          {/* Scrolling Decision Cards on Right */}
          <div className="sm:col-span-7 space-y-6">
            {caseStudy.keyDecisions.map((decision, idx) => (
              <div
                key={idx}
                className="space-y-3 p-4 sm:p-5 rounded-xl border border-text/12 bg-page shadow-xs"
              >
                <h3 className="text-sm font-semibold text-text leading-snug">
                  {idx + 1}. {decision.title}
                </h3>

                <div className="grid grid-cols-1 gap-2.5 text-xs pt-0.5">
                  <div className="p-2.5 rounded bg-surface/30 border border-text/6">
                    <span className="text-text-muted block font-mono text-[10px] mb-0.5 uppercase tracking-wide">
                      The Friction
                    </span>
                    <p className="text-text leading-relaxed">
                      {decision.problem}
                    </p>
                  </div>
                  <div className="p-2.5 rounded bg-surface/30 border border-text/6">
                    <span className="text-text-muted block font-mono text-[10px] mb-0.5 uppercase tracking-wide">
                      Alternatives Considered
                    </span>
                    <p className="text-text-muted leading-relaxed">
                      {decision.alternativesConsidered}
                    </p>
                  </div>
                </div>

                <div className="border-t border-text/8 pt-2.5 text-xs space-y-2">
                  <div>
                    <span className="font-semibold text-text block mb-0.5">
                      Chosen Implementation:
                    </span>
                    <p className="text-text/90 leading-relaxed">
                      {decision.chosenApproach}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-text block mb-0.5">
                      Operational Rationale:
                    </span>
                    <p className="text-text-muted leading-relaxed">
                      {decision.rationale}
                    </p>
                  </div>
                  <div className="p-2.5 rounded bg-surface/50 text-text-muted text-[11px] border border-text/6">
                    <strong className="text-text">Incurred Trade-off:</strong>{" "}
                    {decision.tradeOffs}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Visual Design System */}
      <section className="case-study-section space-y-4 sm:space-y-5 border-t border-text/10 pt-8 sm:pt-10">
        <div className="space-y-1.5">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
            06. Visual System & Ergonomics
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            {caseStudy.visualDesignSystem.description}
          </p>
        </div>

        {/* Color & Token Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          {caseStudy.visualDesignSystem.tokens.map((token, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg border border-text/10 flex items-start gap-3 bg-surface/30"
            >
              <span
                className="w-5 h-5 rounded border border-text/20 shrink-0 mt-0.5 shadow-xs"
                style={{ backgroundColor: token.value }}
                aria-hidden="true"
              />
              <div className="space-y-0.5">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-text">{token.label}</span>
                  <span className="font-mono text-[10px] text-text-muted">
                    {token.value}
                  </span>
                </div>
                <p className="text-[11px] text-text-muted leading-tight">
                  {token.usage}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs text-text-muted p-3 rounded bg-surface/40 border border-text/8 leading-relaxed">
          <strong className="text-text">Accessibility Discipline:</strong>{" "}
          {caseStudy.visualDesignSystem.accessibilityNotes}
        </div>
      </section>

      {/* Section 8: Technical Implementation */}
      <section
        id="section-tech"
        className="case-study-section space-y-4 sm:space-y-5 border-t border-text/10 pt-8 sm:pt-10"
      >
        <div className="space-y-1.5">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
            07. Technical Architecture & Data Flow
          </h2>
          <p className="text-xs sm:text-sm text-text leading-relaxed font-medium">
            {caseStudy.technicalImplementation.architectureSummary}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {caseStudy.technicalImplementation.stackDetails.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-lg bg-surface/30 border border-text/10 space-y-1"
            >
              <span className="font-semibold text-text block">
                {item.title}
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-2 pt-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            Engineering Challenges Solved in Code
          </span>
          <ul className="space-y-2 text-xs text-text-muted">
            {caseStudy.technicalImplementation.implementationChallenges.map(
              (ch, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Code className="w-3.5 h-3.5 text-text shrink-0 mt-0.5" />
                  <span className="leading-snug">{ch}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* Section 9: Final Solution Visual Tour */}
      <section className="case-study-section space-y-6 sm:space-y-8 border-t border-text/10 pt-8 sm:pt-10">
        <div className="space-y-1">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
            08. Shipped Workflows & Solution Tour
          </h2>
          <p className="text-xs text-text-muted">
            Verified screens and operating states in production.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {caseStudy.finalSolution.map((sol, idx) => (
            <div key={idx} className="space-y-2.5">
              <div className="overflow-hidden rounded-xl border border-text/12 bg-surface/60 shadow-xs">
                <img
                  src={sol.image}
                  alt={sol.title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/10] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-1.5 px-0.5">
                <h3 className="text-sm font-semibold text-text">{sol.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {sol.caption}
                </p>
                <ul className="space-y-1 text-xs text-text/90 pt-1">
                  {sol.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-accent-hover font-mono text-xs">
                        ·
                      </span>
                      <span className="leading-snug">{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 10: Difficulties, Compromises, & Trade-offs (Deepened) */}
      <section
        id="section-challenges"
        className="case-study-section space-y-4 sm:space-y-5 border-t border-text/10 pt-8 sm:pt-10"
      >
        <div className="space-y-1">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
            09. Real Challenges, Friction, & Pragmatic Trade-offs
          </h2>
          <p className="text-xs text-text-muted">
            Transparent documentation of obstacles encountered in the field and
            how technical constraints were negotiated.
          </p>
        </div>

        <div className="space-y-3.5">
          {caseStudy.challengesAndTradeoffs.map((ct, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-lg border border-text/10 space-y-2 bg-surface/20"
            >
              <span className="font-semibold text-xs text-text block">
                {idx + 1}. {ct.challenge}
              </span>
              <div className="text-xs space-y-1">
                <p className="text-text-muted leading-relaxed">
                  <strong className="text-text font-medium">
                    Incurred Compromise:
                  </strong>{" "}
                  {ct.compromise}
                </p>
                <p className="text-text/90 leading-relaxed">
                  <strong className="text-text font-medium">
                    Engineering Resolution:
                  </strong>{" "}
                  {ct.resolution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 11: Outcomes & Validation (Deepened) */}
      <section
        id="section-outcomes"
        className="case-study-section space-y-5 sm:space-y-6 border-t border-text/10 pt-8 sm:pt-10"
      >
        <div className="space-y-1">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
            10. Delivery, Verified Impact, & Honest Limits
          </h2>
          <p className="text-xs text-text-muted">
            Evidence-based accounting of deliverables, verified metrics, and
            explicit unmeasured areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 text-xs sm:text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold text-text text-xs uppercase tracking-wider">
              Delivered Artifacts
            </h3>
            <ul className="space-y-1.5 text-xs text-text-muted">
              {caseStudy.outcomesAndValidation.delivered.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle
                    className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5"
                    weight="fill"
                  />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-text text-xs uppercase tracking-wider">
              Verified Operational Outcomes
            </h3>
            <ul className="space-y-1.5 text-xs text-text">
              {caseStudy.outcomesAndValidation.verifiedResults.map(
                (item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent-hover font-mono text-xs">
                      →
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Unmeasured Aspects Callout */}
        <div className="p-3.5 sm:p-4 rounded-lg bg-surface/50 border border-text/10 space-y-1.5">
          <span className="text-xs font-semibold text-text-muted uppercase tracking-wider block">
            What Remains Explicitly Unmeasured
          </span>
          <ul className="space-y-1 text-xs text-text-muted">
            {caseStudy.outcomesAndValidation.unmeasuredAspects.map(
              (unm, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-mono text-xs mt-0.5">·</span>
                  <span className="leading-snug">{unm}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* Section 12: Reflection & What I Would Build Next */}
      <section className="case-study-section space-y-4 sm:space-y-5 border-t border-text/10 pt-8 sm:pt-10">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
          11. Retrospective & What's Next
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-text-muted leading-relaxed">
          <div>
            <span className="font-semibold text-text block mb-1">
              Key Engineering & Product Lessons
            </span>
            <ul className="space-y-1.5">
              {caseStudy.reflectionAndNextSteps.learnings.map((lrn, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-text font-mono text-xs mt-0.5">·</span>
                  <span className="leading-snug">{lrn}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <span className="font-semibold text-text block mb-1">
              Future Development Roadmap
            </span>
            <ul className="space-y-1.5">
              {caseStudy.reflectionAndNextSteps.plannedRoadmap.map(
                (rdm, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent-hover font-mono text-xs mt-0.5">
                      →
                    </span>
                    <span className="leading-snug">{rdm}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 13: Next Project Navigation (Mobile-first stacked or responsive row) */}
      <div className="border-t border-text/10 pt-8 sm:pt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <button
          onClick={() => onNavigate("home")}
          className="inline-flex items-center justify-center gap-1.5 text-xs text-text-muted hover:text-text active:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded py-2 px-3 border border-text/10 sm:border-page min-h-[44px]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Case Studies</span>
        </button>

        {nextProject && (
          <button
            onClick={() => onNavigate("case-study", nextProject.slug)}
            className="inline-flex items-center justify-center gap-2 text-xs text-text font-semibold hover:text-accent-hover active:scale-[0.98] transition-all p-3 rounded-lg border border-text/15 hover:border-accent/40 bg-page min-h-[44px]"
          >
            <span>Next Case Study: {nextProject.title}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </article>
  );
};
