import React, { useRef } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { INTERFACE_SCREENS } from '../data/portfolioData';

export const InterfaceGallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="space-y-3 sm:space-y-4">
      {/* Header with clean label and touch-friendly buttons */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xs uppercase font-semibold tracking-wider text-[#827D75]">
            Selected Interfaces
          </h2>
          <p className="text-xs text-[#827D75] mt-0.5">
            Real product screens, workflows, and state views.
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => scroll('left')}
            className="p-2 sm:p-1.5 rounded border border-[#292621]/15 text-[#292621] hover:bg-[#EAE1D5] active:bg-[#EAE1D5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7790ED] min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Previous interface screen"
          >
            <CaretLeft className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 sm:p-1.5 rounded border border-[#292621]/15 text-[#292621] hover:bg-[#EAE1D5] active:bg-[#EAE1D5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7790ED] min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Next interface screen"
          >
            <CaretRight className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div
        ref={scrollContainerRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 touch-pan-x"
        tabIndex={0}
        aria-label="Interface screens carousel"
      >
        {INTERFACE_SCREENS.map((screen) => (
          <div
            key={screen.id}
            className="shrink-0 w-[260px] sm:w-[380px] space-y-2 group"
          >
            <div className="overflow-hidden rounded-xl border border-[#292621]/12 bg-[#EAE1D5]/70 shadow-xs">
              <img
                src={screen.image}
                alt={`${screen.project} - ${screen.title}`}
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="space-y-0.5 px-0.5">
              <div className="flex items-baseline justify-between text-xs">
                <span className="font-medium text-[#292621] truncate">{screen.title}</span>
                <span className="text-[#827D75] text-[11px] shrink-0 ml-2">{screen.project}</span>
              </div>
              <p className="text-[11px] text-[#827D75] leading-relaxed line-clamp-2">
                {screen.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
