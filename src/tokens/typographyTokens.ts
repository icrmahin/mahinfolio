/**
 * Signature Typography Token System — icrmahin
 * 
 * Centralized, portable typography token definitions designed for reuse across
 * future websites, dashboards, SaaS applications, developer tooling, and mobile apps.
 */

export interface TypographyToken {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: number;
  textTransform?: 'none' | 'uppercase' | 'capitalize' | 'lowercase';
  maxWidth?: string;
  description: string;
}

export const typographyTokens = {
  // Brand Typeface Families
  families: {
    // Primary Brand Family (Set upon approval: Albert Sans / Sora / Be Vietnam Pro)
    brandPrimary: 'var(--font-brand-primary, "Albert Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
    // Technical / Monospace Family (JetBrains Mono for metrics, micro-labels, code)
    brandTechnical: 'var(--font-brand-mono, "JetBrains Mono", monospace)',
  },

  // Type Scale Hierarchy
  roles: {
    // Large Hero Display (Landing hero, major statement)
    displayLarge: {
      fontSize: 'clamp(2rem, 4vw + 1rem, 3.25rem)', // 32px - 52px
      lineHeight: '1.1',
      letterSpacing: '-0.035em',
      fontWeight: 650,
      maxWidth: '65ch',
      description: 'Primary hero headers, major case study titles',
    },

    // Page Heading 1 (Section titles, route headlines)
    heading1: {
      fontSize: 'clamp(1.5rem, 2.5vw + 0.75rem, 2.25rem)', // 24px - 36px
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
      fontWeight: 600,
      maxWidth: '65ch',
      description: 'Route and page primary headings',
    },

    // Section Heading 2 (Case study sections, content blocks)
    heading2: {
      fontSize: 'clamp(1.15rem, 1.5vw + 0.5rem, 1.5rem)', // 18px - 24px
      lineHeight: '1.3',
      letterSpacing: '-0.02em',
      fontWeight: 600,
      maxWidth: '65ch',
      description: 'Case study section titles, card headers',
    },

    // Subsection Heading 3
    heading3: {
      fontSize: 'clamp(0.95rem, 1vw + 0.35rem, 1.15rem)', // 15px - 18px
      lineHeight: '1.35',
      letterSpacing: '-0.015em',
      fontWeight: 600,
      maxWidth: '65ch',
      description: 'Architecture component titles, subsection labels',
    },

    // Editorial Body Large (Lead paragraphs, case study introductions)
    bodyLarge: {
      fontSize: 'clamp(0.95rem, 0.5vw + 0.75rem, 1.05rem)', // 15px - 17px
      lineHeight: '1.65',
      letterSpacing: '-0.01em',
      fontWeight: 400,
      maxWidth: '65ch',
      description: 'Editorial introductions, lead summary paragraphs',
    },

    // Standard Body Text (Readable long-form reading)
    bodyRegular: {
      fontSize: '0.875rem', // 14px
      lineHeight: '1.6',
      letterSpacing: '-0.005em',
      fontWeight: 400,
      maxWidth: '68ch',
      description: 'Standard narrative paragraphs, list explanations',
    },

    // Supporting Text & Captions
    caption: {
      fontSize: '0.75rem', // 12px
      lineHeight: '1.5',
      letterSpacing: '0',
      fontWeight: 450,
      maxWidth: '65ch',
      description: 'Image captions, secondary remarks, timestamps',
    },

    // Navigation and Action Controls
    navigation: {
      fontSize: '0.75rem', // 12px
      lineHeight: '1',
      letterSpacing: '-0.01em',
      fontWeight: 500,
      description: 'Compact capsule navigation links, interactive tabs',
    },

    // Button Labels
    button: {
      fontSize: '0.8125rem', // 13px
      lineHeight: '1',
      letterSpacing: '-0.01em',
      fontWeight: 550,
      description: 'Primary, secondary, and ghost button text',
    },

    // Technical Metadata & Monospace Labels
    technicalLabel: {
      fontSize: '0.6875rem', // 11px
      lineHeight: '1.3',
      letterSpacing: '0.04em',
      fontWeight: 500,
      fontFamily: 'brandTechnical',
      description: 'Status badges, project numbers, index marks, code metadata',
    },

    // Inline Code Snippets
    codeInline: {
      fontSize: '0.75rem', // 12px
      lineHeight: '1.4',
      letterSpacing: '0',
      fontWeight: 500,
      fontFamily: 'brandTechnical',
      description: 'Inline code parameters, file paths, API endpoints',
    },
  },

  // Line Width Constraints for Optical Comfort
  constraints: {
    narrativeMeasure: '65ch', // Ideal reading measure for long-form case studies
    compactMeasure: '45ch',   // Ideal for callout boxes and cards
    technicalMeasure: '80ch', // Wide measure for architecture and data tables
  },
} as const;
