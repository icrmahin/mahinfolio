/**
 * @license
 * A. Mahin (icrmahin) Signature Brand Color System
 * Canonical Token Definition & Design System Specification
 */

export interface ColorToken {
  name: string;
  variable: string;
  hex: string;
  rgba?: string;
  role: string;
  intendedUsage: string;
  wcagContrastLight?: number; // against #F5EDE2
  wcagContrastDark?: number;  // against #201D19
  wcagRating?: 'AAA' | 'AA' | 'AA Large' | 'UI Component' | 'Subtle';
}

export interface ColorFamily {
  title: string;
  description: string;
  tokens: ColorToken[];
}

export const BRAND_PALETTE = {
  // Foundation Neutrals (Light & Dark)
  foundations: {
    light: '#F5EDE2',       // Warm parchment / alabaster
    lightElevated: '#FAF5EE', // Subtle card highlight
    dark: '#201D19',        // Deep espresso charcoal (background)
    darkElevated: '#292621', // Primary dark surface
  },

  // Surfaces & Layers
  surfaces: {
    lightSoft: '#EAE1D5',   // Sand surface contrast
    lightMuted: '#DFD4C6',  // Hover / active surface
    darkSoft: '#292621',    // Dark elevated card surface
    darkMuted: '#35312B',   // Dark secondary surface
    darkHover: '#423D36',   // Dark hover state
  },

  // Typography
  typography: {
    primaryLight: '#292621',     // High contrast dark text on light
    secondaryLight: '#666159',   // Refined secondary text (WCAG AA compliant: 5.4:1)
    mutedLight: '#7E7870',       // Muted metadata & labels (3.7:1)
    subtleLight: '#9E978D',      // Subtle / disabled text (2.4:1)
    primaryDark: '#F5EDE2',      // High contrast light text on dark (14.2:1)
    secondaryDark: '#C2BBB0',    // Secondary text on dark (8.5:1)
    mutedDark: '#9E978D',        // Muted text on dark (5.1:1)
    subtleDark: '#706B62',       // Subtle text on dark (3.2:1)
  },

  // Signature Accent (Periwinkle Blue)
  accent: {
    core: '#7790ED',             // The signature visual periwinkle
    textLight: '#435DC9',        // Contrast-safe accent for text links on light bg (4.6:1)
    hover: '#647EDD',            // Interactive hover state
    active: '#526DCF',           // Interactive pressed state
    tintLight: 'rgba(119, 144, 237, 0.12)', // Subtle surface wash on light
    tintDark: 'rgba(119, 144, 237, 0.20)',  // Subtle surface wash on dark
  },

  // Supporting Accent (Warm Earth Clay)
  supporting: {
    clayLight: '#C48248',        // Warm ochre / terracotta highlight on light
    clayDark: '#E09F67',         // Warm amber highlight on dark
    clayTint: 'rgba(196, 130, 72, 0.12)',
  },

  // Borders & Structure
  borders: {
    light: 'rgba(41, 38, 33, 0.10)',
    lightStrong: 'rgba(41, 38, 33, 0.20)',
    dark: 'rgba(245, 237, 226, 0.12)',
    darkStrong: 'rgba(245, 237, 226, 0.22)',
  },

  // Semantic Status Tokens (Eye-comfortable & distinctive)
  semantic: {
    success: {
      light: '#2A7347',
      dark: '#65C189',
      tintLight: 'rgba(42, 115, 71, 0.10)',
      tintDark: 'rgba(101, 193, 137, 0.18)',
    },
    warning: {
      light: '#9A5B15',
      dark: '#E8A34E',
      tintLight: 'rgba(154, 91, 21, 0.10)',
      tintDark: 'rgba(232, 163, 78, 0.18)',
    },
    error: {
      light: '#B3392F',
      dark: '#F06C62',
      tintLight: 'rgba(179, 57, 47, 0.10)',
      tintDark: 'rgba(240, 108, 98, 0.18)',
    },
    info: {
      light: '#435DC9',
      dark: '#7790ED',
      tintLight: 'rgba(67, 93, 201, 0.10)',
      tintDark: 'rgba(119, 144, 237, 0.18)',
    }
  }
};

export const COLOR_FAMILIES: ColorFamily[] = [
  {
    title: "1. Foundation & Surfaces",
    description: "Backgrounds and structural layers calibrated for prolonged reading comfort without eye strain.",
    tokens: [
      {
        name: "Light Background (Parchment)",
        variable: "--color-bg-light",
        hex: "#F5EDE2",
        role: "Primary background for light interfaces",
        intendedUsage: "Main viewport background, body canvas. Replaces sterile #FFFFFF.",
        wcagContrastDark: 14.2,
        wcagRating: "AAA"
      },
      {
        name: "Light Soft Surface",
        variable: "--color-surface-soft",
        hex: "#EAE1D5",
        role: "Secondary container surface",
        intendedUsage: "Card surfaces, input fields, gallery blocks, subtle dividers.",
        wcagContrastDark: 11.2,
        wcagRating: "AAA"
      },
      {
        name: "Light Muted Surface",
        variable: "--color-surface-muted",
        hex: "#DFD4C6",
        role: "Elevated & hover surface",
        intendedUsage: "Button hover backgrounds, active navigation tabs, drawer surfaces.",
        wcagContrastDark: 9.8,
        wcagRating: "AAA"
      },
      {
        name: "Dark Canvas Foundation",
        variable: "--color-bg-dark",
        hex: "#201D19",
        role: "Primary background for dark interfaces",
        intendedUsage: "Dark-theme viewport, VS Code editor background, terminal canvas.",
        wcagContrastLight: 14.2,
        wcagRating: "AAA"
      },
      {
        name: "Dark Primary Surface",
        variable: "--color-surface-dark",
        hex: "#292621",
        role: "Elevated dark card surface",
        intendedUsage: "Sidebar, modal dialogue, card containers, dark header bar.",
        wcagContrastLight: 12.6,
        wcagRating: "AAA"
      },
      {
        name: "Dark Muted Surface",
        variable: "--color-surface-dark-muted",
        hex: "#35312B",
        role: "Dark secondary surface",
        intendedUsage: "Code block backgrounds, active item in dark mode, inset containers.",
        wcagContrastLight: 10.1,
        wcagRating: "AAA"
      }
    ]
  },
  {
    title: "2. Typography Hierarchy",
    description: "Contrast-audited text tokens guaranteeing readability across light and dark viewports.",
    tokens: [
      {
        name: "Text Primary (Light)",
        variable: "--color-text-primary",
        hex: "#292621",
        role: "Primary headings and body copy on light surfaces",
        intendedUsage: "Page titles, h1-h4, main paragraph text, primary labels.",
        wcagContrastLight: 12.6,
        wcagRating: "AAA"
      },
      {
        name: "Text Secondary (Light - Refined)",
        variable: "--color-text-secondary",
        hex: "#666159",
        role: "Secondary body and explanations (WCAG AA Compliant)",
        intendedUsage: "Supporting paragraphs, card subtitles, descriptions.",
        wcagContrastLight: 5.4,
        wcagRating: "AA"
      },
      {
        name: "Text Muted (Light)",
        variable: "--color-text-muted",
        hex: "#7E7870",
        role: "Metadata, timestamps, and section headers",
        intendedUsage: "Uppercase section titles, timestamps, breadcrumbs, tags.",
        wcagContrastLight: 3.7,
        wcagRating: "AA Large"
      },
      {
        name: "Text Primary (Dark)",
        variable: "--color-text-primary-dark",
        hex: "#F5EDE2",
        role: "Primary copy on dark surfaces",
        intendedUsage: "Headings and body text in dark mode / VS Code code tokens.",
        wcagContrastDark: 14.2,
        wcagRating: "AAA"
      },
      {
        name: "Text Secondary (Dark)",
        variable: "--color-text-secondary-dark",
        hex: "#C2BBB0",
        role: "Secondary copy on dark surfaces",
        intendedUsage: "Dark mode descriptions, secondary labels, parameters.",
        wcagContrastDark: 8.5,
        wcagRating: "AAA"
      },
      {
        name: "Text Muted (Dark)",
        variable: "--color-text-muted-dark",
        hex: "#9E978D",
        role: "Metadata and comments on dark surfaces",
        intendedUsage: "Code comments, line numbers, subtle metadata.",
        wcagContrastDark: 5.1,
        wcagRating: "AA"
      }
    ]
  },
  {
    title: "3. Signature Accent (Periwinkle Blue)",
    description: "The defining brand color. Used selectively to guide attention without visual fatigue.",
    tokens: [
      {
        name: "Periwinkle Accent Core",
        variable: "--color-accent",
        hex: "#7790ED",
        role: "Signature visual brand accent",
        intendedUsage: "Focus rings, active icons, progress bars, visual indicators.",
        wcagContrastDark: 5.8,
        wcagRating: "AA"
      },
      {
        name: "Periwinkle Text Strong",
        variable: "--color-accent-strong",
        hex: "#435DC9",
        role: "Contrast-safe text links on light background",
        intendedUsage: "Inline hyperlinks, active text states on #F5EDE2 (4.6:1 AA).",
        wcagContrastLight: 4.6,
        wcagRating: "AA"
      },
      {
        name: "Periwinkle Hover",
        variable: "--color-accent-hover",
        hex: "#647EDD",
        role: "Accent button hover & active links",
        intendedUsage: "Interactive hover states, active indicator lines.",
        wcagContrastDark: 5.2,
        wcagRating: "AA"
      },
      {
        name: "Periwinkle Subtle Wash",
        variable: "--color-accent-wash",
        hex: "#7790ED1F",
        rgba: "rgba(119, 144, 237, 0.12)",
        role: "Selected background and selection highlight",
        intendedUsage: "Text selection highlight, active tab background, badge background.",
        wcagRating: "UI Component"
      }
    ]
  },
  {
    title: "4. Supporting Accent (Warm Earth Clay)",
    description: "Secondary editorial accent grounding the system in warmth.",
    tokens: [
      {
        name: "Earth Clay (Light)",
        variable: "--color-clay",
        hex: "#C48248",
        role: "Editorial secondary accent on light",
        intendedUsage: "Special badge borders, warning badges, subtle callout lines.",
        wcagContrastLight: 3.2,
        wcagRating: "UI Component"
      },
      {
        name: "Earth Clay (Dark)",
        variable: "--color-clay-dark",
        hex: "#E09F67",
        role: "Warm accent in dark mode & VS Code",
        intendedUsage: "JSON keys, regex tokens, warm highlights in editor.",
        wcagContrastDark: 8.1,
        wcagRating: "AAA"
      }
    ]
  },
  {
    title: "5. Semantic Status System",
    description: "Consistent functional indicators designed to harmonize with the warm aesthetic.",
    tokens: [
      {
        name: "Success (Forest Sage)",
        variable: "--color-success",
        hex: "#2A7347",
        role: "Successful states, live badges, completed steps",
        intendedUsage: "Live product badge, status checkmarks, diff additions.",
        wcagContrastLight: 5.3,
        wcagRating: "AA"
      },
      {
        name: "Warning (Warm Amber)",
        variable: "--color-warning",
        hex: "#9A5B15",
        role: "Cautionary notices, near-expiry alerts",
        intendedUsage: "Warning banners, caution icons, review required badges.",
        wcagContrastLight: 5.1,
        wcagRating: "AA"
      },
      {
        name: "Error (Terracotta Crimson)",
        variable: "--color-error",
        hex: "#B3392F",
        role: "Errors, critical expiry, destructive actions",
        intendedUsage: "Validation errors, critical expiry tags, error diagnostics.",
        wcagContrastLight: 5.4,
        wcagRating: "AA"
      },
      {
        name: "Info (Serene Periwinkle)",
        variable: "--color-info",
        hex: "#435DC9",
        role: "Informational alerts, tooltips, hints",
        intendedUsage: "Info toasts, tip callouts, informational notices.",
        wcagContrastLight: 4.6,
        wcagRating: "AA"
      }
    ]
  }
];

export const BRAND_USAGE_RULES = [
  {
    rule: "The 60-30-10 Distribution Rule",
    detail: "60% Light Canvas (#F5EDE2 or #201D19), 30% Structural Surfaces & Typography (#292621, #EAE1D5, #666159), 10% Controlled Accent (#7790ED / #435DC9). Never flood surfaces with accent colors."
  },
  {
    rule: "Eye Comfort Over Extreme Contrast",
    detail: "Avoid harsh pure white (#FFFFFF) and pure black (#000000). The natural warm parchment (#F5EDE2) and deep espresso (#201D19) prevent photoreceptor fatigue during extended 8+ hour screen sessions."
  },
  {
    rule: "Context-Safe Accent Text",
    detail: "Use #435DC9 for text links and text buttons on light backgrounds to meet WCAG AA (4.6:1). Reserve #7790ED for graphical accents, focus rings, badges, and dark surfaces where it achieves 5.8:1 contrast."
  },
  {
    rule: "Restrained Structure (Zero-Box Discipline)",
    detail: "Prefer whitespace, typographic hierarchy, and subtle 10% opacity borders over heavily boxed, multi-nested cards or drop shadows."
  },
  {
    rule: "Dual-Indicator Accessibility",
    detail: "Never rely on color alone to communicate state. Pair status colors with iconography or clear text labels (e.g. checkmark + 'Active', dot + 'Critical')."
  }
];
