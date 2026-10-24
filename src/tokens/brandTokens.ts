/**
 * icrmahin Brand Color System — token documentation data.
 *
 * This file mirrors the single source of truth: `src/index.css` (the `--color-*`
 * custom properties) plus the dark overrides in `:root[data-theme="dark"]`.
 * It carries no color values of its own; rendering references the CSS variables
 * directly via `var(--color-...)` so the page always reflects the live tokens.
 */

export interface BrandToken {
  /** Human-facing token name. */
  name: string;
  /** CSS custom property, e.g. --color-page (light + dark variants). */
  variable: string;
  /** Canonical Tailwind utility, e.g. bg-page. */
  utility: string;
  /** What the token is for. */
  role: string;
}

export interface TokenFamily {
  title: string;
  description: string;
  tokens: BrandToken[];
}

export const COLOR_FAMILIES: TokenFamily[] = [
  {
    title: "1. Foundations & Surfaces",
    description:
      "Canvas and elevated layers. Structure comes from spacing and hairlines, not boxes.",
    tokens: [
      {
        name: "Page Canvas",
        variable: "--color-page",
        utility: "bg-page",
        role: "Primary viewport background for every page.",
      },
      {
        name: "Surface",
        variable: "--color-surface",
        utility: "bg-surface",
        role: "Elevated cards, modals, code blocks, and image frames.",
      },
      {
        name: "Border",
        variable: "--color-border",
        utility: "border-border",
        role: "Hairlines, dividers, and structural outlines (10%-opacity discipline).",
      },
      {
        name: "Border (Controls)",
        variable: "--color-border-control",
        utility: "border-border-control",
        role: "Outlines for interactive controls: buttons, inputs, pills.",
      },
    ],
  },
  {
    title: "2. Typography",
    description:
      "Two text tones only. Hierarchy is expressed through size and weight, not extra colors.",
    tokens: [
      {
        name: "Text (Primary)",
        variable: "--color-text",
        utility: "text-text",
        role: "Headings, body copy, and high-contrast values.",
      },
      {
        name: "Text Muted",
        variable: "--color-text-muted",
        utility: "text-text-muted",
        role: "Secondary copy, metadata, labels, and timestamps.",
      },
    ],
  },
  {
    title: "3. Action & Emphasis",
    description:
      "One accent family. Emphasis is earned: focus, selection, and primary actions only.",
    tokens: [
      {
        name: "Accent",
        variable: "--color-accent",
        utility: "bg-accent",
        role: "Primary actions, active indicators, and selected states.",
      },
      {
        name: "Accent Hover",
        variable: "--color-accent-hover",
        utility: "bg-accent-hover",
        role: "Hover and pressed states of accent controls.",
      },
      {
        name: "Accent Soft",
        variable: "--color-accent-soft",
        utility: "bg-accent-soft",
        role: "Tinted backgrounds: badges, selected cards, washes.",
      },
      {
        name: "Accent Foreground",
        variable: "--color-accent-foreground",
        utility: "text-accent-foreground",
        role: "Content sitting on top of an accent fill.",
      },
    ],
  },
  {
    title: "4. Accessibility",
    description:
      "Focus is its own token so keyboard affordance never depends on state colors.",
    tokens: [
      {
        name: "Focus",
        variable: "--color-focus",
        utility: "ring-focus",
        role: "Focus rings and outlines for the entire system.",
      },
    ],
  },
];

export const BRAND_USAGE_RULES = [
  {
    rule: "60-30-10 Distribution",
    detail:
      "Roughly 60% page canvas, 30% structural surfaces/typography via text-text-muted, and 10% accent. Never flood a surface with accent.",
  },
  {
    rule: "No Semantic Color Systems",
    detail:
      "Status is communicated with text and iconography (checkmark + label), not extra success/warning/error hues. The system defines exactly eleven tokens.",
  },
  {
    rule: "Never Add a Color",
    detail:
      "If a design needs a color outside the eleven tokens, change the design or extend the token file — never hard-code hex, rgb(), hsl(), or named colors.",
  },
  {
    rule: "Do Not Use Double Indicators Alone",
    detail:
      "Pair any accent 'Active' indicator with a label so state is never carried by color alone.",
  },
];

/**
 * Light-theme reference values, quoted by the /brand documentation page.
 * Kept here (the token file) so the literals live in exactly one place.
 */
export const TOKEN_HEX = {
  page: "#f7f6f3",
  accent: "#2a7570",
} as const;

/** Contrast audit rows for the /brand page (values recomputed for the new tokens). */
export const CONTRAST_ROWS = [
  {
    fg: "Text",
    bgLabel: "Page",
    ratioLight: "13.6 : 1",
    ratioDark: "15.1 : 1",
    rating: "WCAG AAA",
  },
  {
    fg: "Text Muted",
    bgLabel: "Page",
    ratioLight: "5.1 : 1",
    ratioDark: "7.2 : 1",
    rating: "WCAG AA",
  },
  {
    fg: "Accent",
    bgLabel: "Page",
    ratioLight: "5.0 : 1",
    ratioDark: "8.3 : 1",
    rating: "WCAG AA",
  },
  {
    fg: "Accent Hover",
    bgLabel: "Page",
    ratioLight: "6.8 : 1",
    ratioDark: "10.4 : 1",
    rating: "WCAG AA",
  },
  {
    fg: "Accent",
    bgLabel: "Accent Soft",
    ratioLight: "4.6 : 1",
    ratioDark: "6.1 : 1",
    rating: "WCAG AA",
  },
  {
    fg: "Accent Foreground",
    bgLabel: "Accent",
    ratioLight: "5.4 : 1",
    ratioDark: "8.3 : 1",
    rating: "WCAG AA",
  },
];
