import React, { useEffect, useState } from 'react';
import { X, CalendarBlank, EnvelopeSimple, Check, ArrowSquareOut, Clock } from '@phosphor-icons/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CalBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalBookingModal: React.FC<CalBookingModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-text/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="bg-page text-text w-full max-w-[540px] max-h-[92vh] rounded-xl border border-text/15 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-text/10 bg-surface/40">
          <div className="flex items-center gap-2">
            <CalendarBlank className="w-4 h-4 text-accent" />
            <h2 id="booking-title" className="text-xs sm:text-sm font-semibold text-text">Schedule a Conversation</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded text-text-muted hover:text-text hover:bg-text/5 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center -mr-1"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-8 space-y-5 sm:space-y-6">
          <div>
            <h3 className="text-lg font-medium text-text">Let's discuss your product</h3>
            <p className="text-xs text-text-muted mt-1 leading-relaxed">
              I collaborate with early-stage founders, design teams, and businesses to build dependable web & mobile applications.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-surface/50 border border-text/10 space-y-3">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Clock className="w-4 h-4 text-text" />
              <span>30-minute introductory call via Google Meet</span>
            </div>
            <p className="text-xs text-text/90">
              Direct calendar reservation via Cal.com. Pick a slot that works across your local timezone.
            </p>
            <a
              href={PERSONAL_INFO.calBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded bg-text text-page text-xs font-medium hover:bg-text/90 transition-colors"
            >
              <span>Open Cal.com Calendar</span>
              <ArrowSquareOut className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-text-muted block">Prefer direct asynchronous communication?</span>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 inline-flex items-center gap-2 px-3 py-2 rounded border border-text/15 text-xs text-text hover:border-accent/50 transition-colors"
              >
                <EnvelopeSimple className="w-3.5 h-3.5 text-text-muted" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded border border-text/15 text-xs text-text hover:bg-surface transition-colors shrink-0"
              >
                {copied ? (
                  <span className="inline-flex items-center gap-1 text-accent-hover font-medium">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  "Copy"
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 py-3 border-t border-text/10 bg-surface/30 text-right">
          <button
            onClick={onClose}
            className="text-xs text-text-muted hover:text-text transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
