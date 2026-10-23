import React from 'react';

/**
 * LiquidFilter - Lightweight inline SVG displacement map.
 * Supplies the fluid ripple displacement filter used by ProjectCard and media elements
 * on pointer hover with zero WebGL overhead or memory leaks.
 */
export const LiquidFilter: React.FC = () => {
  return (
    <svg
      className="fixed top-0 left-0 w-0 h-0 pointer-events-none -z-50 opacity-0 overflow-hidden"
      aria-hidden="true"
    >
      <defs>
        <filter id="liquid-distortion" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            id="liquid-turbulence"
            type="fractalNoise"
            baseFrequency="0.015 0.015"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            id="liquid-displacement"
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
};
