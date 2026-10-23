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
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-[#292621]/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="bg-[#F5EDE2] text-[#292621] w-full max-w-[540px] max-h-[92vh] rounded-xl border border-[#292621]/15 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#292621]/10 bg-[#EAE1D5]/40">
          <div className="flex items-center gap-2">
            <CalendarBlank className="w-4 h-4 text-[#7790ED]" />
            <h2 id="booking-title" className="text-xs sm:text-sm font-semibold text-[#292621]">Schedule a Conversation</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded text-text-secondary hover:text-[#292621] hover:bg-[#292621]/5 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center -mr-1"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-8 space-y-5 sm:space-y-6">
          <div>
            <h3 className="text-lg font-medium text-[#292621]">Let's discuss your product</h3>
            <p className="text-xs text-text-secondary mt-1 leading-relaxed">
              I collaborate with early-stage founders, design teams, and businesses to build dependable web & mobile applications.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#EAE1D5]/50 border border-[#292621]/10 space-y-3">
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <Clock className="w-4 h-4 text-[#292621]" />
              <span>30-minute introductory call via Google Meet</span>
            </div>
            <p className="text-xs text-[#292621]/90">
              Direct calendar reservation via Cal.com. Pick a slot that works across your local timezone.
            </p>
            <a
              href={PERSONAL_INFO.calBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded bg-[#292621] text-[#F5EDE2] text-xs font-medium hover:bg-[#292621]/90 transition-colors"
            >
              <span>Open Cal.com Calendar</span>
              <ArrowSquareOut className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-text-secondary block">Prefer direct asynchronous communication?</span>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 inline-flex items-center gap-2 px-3 py-2 rounded border border-[#292621]/15 text-xs text-[#292621] hover:border-[#7790ED]/50 transition-colors"
              >
                <EnvelopeSimple className="w-3.5 h-3.5 text-text-secondary" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded border border-[#292621]/15 text-xs text-[#292621] hover:bg-[#EAE1D5] transition-colors shrink-0"
              >
                {copied ? (
                  <span className="inline-flex items-center gap-1 text-[#435DC9] font-medium">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  "Copy"
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 py-3 border-t border-[#292621]/10 bg-[#EAE1D5]/30 text-right">
          <button
            onClick={onClose}
            className="text-xs text-text-secondary hover:text-[#292621] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
