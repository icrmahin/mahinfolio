import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, EnvelopeSimple, CalendarBlank, Check, Clock, Globe } from '@phosphor-icons/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MetaSEO } from '../components/MetaSEO';

interface ContactPageProps {
  onNavigate: (view: string, slug?: string) => void;
  onOpenBooking: () => void;
  onOpenResume: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenResume,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="space-y-10 sm:space-y-14 pt-3 sm:pt-10 pb-16">
      <MetaSEO
        title={`Contact — ${PERSONAL_INFO.name} (${PERSONAL_INFO.handle})`}
        description={`Get in touch with ${PERSONAL_INFO.name}. Available for freelance product engineering, UI/UX architecture, and technical product building.`}
        image={PERSONAL_INFO.portraitUrl}
        urlPath="/contact"
        type="website"
      />

      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs text-[#827D75] hover:text-[#292621] active:text-[#7790ED] transition-colors group px-2 py-2 -ml-2 rounded min-h-[44px]"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Work</span>
        </button>
      </div>

      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#292621] leading-tight text-balance">
          Let's build something <span className="font-semibold text-[#292621]">dependable</span>.
        </h1>
        <p className="text-sm sm:text-base text-[#827D75] leading-relaxed max-w-[560px]">
          I collaborate with founders, product teams, and businesses to design and engineer web and mobile products.
          Whether you need end-to-end development, UX architecture, or technical prototyping, feel free to reach out.
        </p>
      </header>

      {/* Primary Communication Channels */}
      <div className="space-y-4">
        {/* Cal.com Direct Schedule Card */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#EAE1D5]/40 border border-[#292621]/12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#292621]">
            <CalendarBlank className="w-4 h-4 text-[#7790ED]" />
            <span>Schedule a 30-Minute Video Call</span>
          </div>
          <p className="text-xs sm:text-sm text-[#827D75] leading-relaxed">
            Reserve a time directly on my calendar via Cal.com. Ideal for discussing project scopes, technical requirements, and collaboration timelines.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 pt-1">
            <a
              href={PERSONAL_INFO.calBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#292621] text-[#F5EDE2] text-xs font-medium hover:bg-[#292621]/90 active:scale-[0.98] transition-all min-h-[44px]"
            >
              <span>Open Cal.com Calendar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded border border-[#292621]/15 text-[#292621] text-xs font-medium hover:bg-[#EAE1D5] active:scale-[0.98] transition-all min-h-[44px]"
            >
              <span>Quick Preview</span>
            </button>
          </div>
        </div>

        {/* Email Direct Channel Card */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#EAE1D5]/20 border border-[#292621]/10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#292621]">
            <EnvelopeSimple className="w-4 h-4 text-[#7790ED]" />
            <span>Direct Email</span>
          </div>
          <p className="text-xs sm:text-sm text-[#827D75] leading-relaxed">
            For asynchronous inquiries, project briefs, or general messages. I usually reply within 24 hours on business days.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-[#292621]/15 text-[#292621] text-xs font-medium hover:border-[#7790ED]/50 transition-colors min-h-[44px] bg-[#F5EDE2]"
            >
              <EnvelopeSimple className="w-3.5 h-3.5 text-[#827D75]" />
              <span className="font-mono">{PERSONAL_INFO.email}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded border border-[#292621]/15 text-[#292621] text-xs font-medium hover:bg-[#EAE1D5] active:scale-[0.98] transition-colors min-h-[44px]"
            >
              {copied ? (
                <span className="inline-flex items-center gap-1 text-emerald-800 font-medium">
                  <Check className="w-3.5 h-3.5" /> Copied to Clipboard
                </span>
              ) : (
                "Copy Address"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Availability & Timezone Context */}
      <section className="space-y-3 border-t border-[#292621]/10 pt-8 text-xs text-[#827D75]">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-[#292621]">
          Availability & Logistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#EAE1D5]/30 border border-[#292621]/6">
            <Globe className="w-4 h-4 text-[#292621] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#292621] block">Location & Timezone</span>
              <p className="text-[11px] text-[#827D75] mt-0.5">Based in Dhaka, Bangladesh (UTC+6). Regularly collaborate with US, European, and Asian teams asynchronously and with planned overlap.</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#EAE1D5]/30 border border-[#292621]/6">
            <Clock className="w-4 h-4 text-[#292621] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#292621] block">Current Status</span>
              <p className="text-[11px] text-[#827D75] mt-0.5">Accepting select freelance contracts, MVP builds, and product consulting engagements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Profiles & Resume */}
      <section className="space-y-3 border-t border-[#292621]/10 pt-8">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-[#827D75]">
          Verified Profiles & Documents
        </h2>
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#827D75] pt-1">
          {PERSONAL_INFO.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target={s.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#292621] active:text-[#7790ED] transition-colors py-2 px-1 min-h-[44px]"
            >
              <span>{s.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ))}
          <span className="text-[#292621]/20 hidden sm:inline">·</span>
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1 text-[#292621] hover:text-[#7790ED] underline font-medium py-2 min-h-[44px]"
          >
            <span>View Resume / CV</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#7790ED]" />
          </button>
        </div>
      </section>
    </article>
  );
};
