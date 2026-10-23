import React, { useEffect } from 'react';
import { X, Printer, ArrowUpRight } from '@phosphor-icons/react';
import { PERSONAL_INFO, EXPERIENCE_HISTORY, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-[#292621]/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="bg-[#F5EDE2] text-[#292621] w-full max-w-[680px] max-h-[92vh] sm:max-h-[90vh] rounded-xl border border-[#292621]/15 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#292621]/10 bg-[#EAE1D5]/40">
          <div className="flex items-center gap-2">
            <span id="resume-title" className="text-xs sm:text-sm font-semibold text-[#292621]">A. Mahin — CV</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-xs text-[#292621] hover:text-[#7790ED] px-2.5 py-1.5 rounded border border-[#292621]/15 hover:border-[#7790ED]/40 bg-[#F5EDE2] transition-colors min-h-[38px]"
              title="Print or Save Resume as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded text-[#827D75] hover:text-[#292621] hover:bg-[#292621]/5 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center -mr-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto px-4 sm:px-10 py-6 sm:py-8 space-y-6 sm:space-y-8 text-xs sm:text-sm leading-relaxed">
          {/* Header */}
          <div className="border-b border-[#292621]/10 pb-6">
            <h1 className="text-2xl font-bold tracking-tight text-[#292621]">{PERSONAL_INFO.name}</h1>
            <p className="text-sm text-[#827D75] mt-1">{PERSONAL_INFO.role}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#827D75] mt-3">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#292621] hover:text-[#7790ED] underline">
                {PERSONAL_INFO.email}
              </a>
              <span>·</span>
              <a href="https://github.com/icrmahin" target="_blank" rel="noopener noreferrer" className="hover:text-[#292621]">
                github.com/icrmahin
              </a>
              <span>·</span>
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Statement */}
          <section className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#827D75]">Profile</h2>
            <p className="text-[#292621]">
              Product Engineer and UI/UX builder specialized in crafting lean, reliable web and mobile applications.
              I operate across product definition, interface design, and full-stack implementation using React, TypeScript,
              Expo, and Supabase.
            </p>
          </section>

          {/* Experience */}
          <section className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#827D75]">Experience</h2>
            <div className="space-y-5">
              {EXPERIENCE_HISTORY.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                    <span className="font-semibold text-[#292621] text-sm">{exp.role}</span>
                    <span className="text-[#827D75] font-mono tabular-nums">{exp.period}</span>
                  </div>
                  <div className="text-xs text-[#827D75]">{exp.company}</div>
                  <p className="text-xs text-[#292621]/90 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Projects */}
          <section className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#827D75]">Key Shipped Projects</h2>
            <div className="space-y-4">
              {PROJECTS.map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex items-baseline justify-between text-xs">
                    <span className="font-medium text-[#292621] text-sm">{p.title}</span>
                    <span className="text-[#827D75] font-mono tabular-nums">{p.year}</span>
                  </div>
                  <p className="text-xs text-[#827D75]">{p.tagline}</p>
                  <div className="text-xs text-[#827D75]">
                    Technologies: {p.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-3 border-t border-[#292621]/10 pt-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#827D75]">Technical & Design Capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-semibold text-[#292621] block mb-1">Frontend & Mobile</span>
                <p className="text-[#827D75]">TypeScript, React, React Native, Expo, Tailwind CSS, Vite, Next.js, GSAP</p>
              </div>
              <div>
                <span className="font-semibold text-[#292621] block mb-1">Backend & Systems</span>
                <p className="text-[#827D75]">Supabase, PostgreSQL, Node.js, REST APIs, EAS Build, Git</p>
              </div>
              <div>
                <span className="font-semibold text-[#292621] block mb-1">Product & Design</span>
                <p className="text-[#827D75]">Design Systems, Information Architecture, Wireframing, User Testing, Prototyping</p>
              </div>
              <div>
                <span className="font-semibold text-[#292621] block mb-1">Operating Mindset</span>
                <p className="text-[#827D75]">Minimalist craft, low-friction UX, tactile feedback, code-first design iteration</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#292621]/10 bg-[#EAE1D5]/30 flex items-center justify-between text-xs text-[#827D75]">
          <span>Verified portfolio document</span>
          <a
            href={PERSONAL_INFO.calBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#292621] hover:text-[#7790ED]"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
