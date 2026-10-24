import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  EnvelopeSimple,
  CalendarBlank,
  Check,
  Clock,
  Globe,
} from "@phosphor-icons/react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { MetaSEO } from "../components/MetaSEO";

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
    window.scrollTo({ top: 0, behavior: "instant" });
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

      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text leading-tight text-balance">
          Let's build something{" "}
          <span className="font-semibold text-text">dependable</span>.
        </h1>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-[560px]">
          I collaborate with founders, product teams, and businesses to design
          and engineer web and mobile products. Whether you need end-to-end
          development, UX architecture, or technical prototyping, feel free to
          reach out.
        </p>
      </header>

      {/* Primary Communication Channels */}
      <div className="space-y-4">
        {/* Cal.com Direct Schedule Card */}
        <div className="p-5 sm:p-6 rounded-xl bg-surface/40 border border-text/12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text">
            <CalendarBlank className="w-4 h-4 text-accent" />
            <span>Schedule a 30-Minute Video Call</span>
          </div>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Reserve a time directly on my calendar via Cal.com. Ideal for
            discussing project scopes, technical requirements, and collaboration
            timelines.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 pt-1">
            <a
              href={PERSONAL_INFO.calBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-text text-page text-xs font-medium hover:bg-text/90 active:scale-[0.98] transition-all min-h-[44px]"
            >
              <span>Open Cal.com Calendar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded border border-text/15 text-text text-xs font-medium hover:bg-surface active:scale-[0.98] transition-all min-h-[44px]"
            >
              <span>Quick Preview</span>
            </button>
          </div>
        </div>

        {/* Email Direct Channel Card */}
        <div className="p-5 sm:p-6 rounded-xl bg-surface/20 border border-text/10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text">
            <EnvelopeSimple className="w-4 h-4 text-accent" />
            <span>Direct Email</span>
          </div>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            For asynchronous inquiries, project briefs, or general messages. I
            usually reply within 24 hours on business days.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-text/15 text-text text-xs font-medium hover:border-accent/50 transition-colors min-h-[44px] bg-page"
            >
              <EnvelopeSimple className="w-3.5 h-3.5 text-text-muted" />
              <span className="font-mono">{PERSONAL_INFO.email}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded border border-text/15 text-text text-xs font-medium hover:bg-surface active:scale-[0.98] transition-colors min-h-[44px]"
            >
              {copied ? (
                <span className="inline-flex items-center gap-1 text-accent-hover font-medium">
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
      <section className="space-y-3 border-t border-text/10 pt-8 text-xs text-text-muted">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-text">
          Availability & Logistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-surface/30 border border-text/6">
            <Globe className="w-4 h-4 text-text shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-text block">
                Location & Timezone
              </span>
              <p className="text-[11px] text-text-muted mt-0.5">
                Based in Dhaka, Bangladesh (UTC+6). Regularly collaborate with
                US, European, and Asian teams asynchronously and with planned
                overlap.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-surface/30 border border-text/6">
            <Clock className="w-4 h-4 text-text shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-text block">
                Current Status
              </span>
              <p className="text-[11px] text-text-muted mt-0.5">
                Accepting select freelance contracts, MVP builds, and product
                consulting engagements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Profiles & Resume */}
      <section className="space-y-3 border-t border-text/10 pt-8">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
          Verified Profiles & Documents
        </h2>
        <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted pt-1">
          {PERSONAL_INFO.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target={s.url.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-text active:text-accent-hover transition-colors py-2 px-1 min-h-[44px]"
            >
              <span>{s.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ))}
          <span className="text-text/20 hidden sm:inline">·</span>
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1 text-text hover:text-accent-hover underline font-medium py-2 min-h-[44px]"
          >
            <span>View Resume / CV</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>
      </section>
    </article>
  );
};
