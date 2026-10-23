# A. Mahin (`icrmahin`) Signature Brand Color System

> **"Almost nothing on the screen should be decorative. Every element must justify its presence."**

---

## 1. Design Philosophy: The Peaceful Interface

The `icrmahin` brand identity is engineered for **prolonged visual comfort and understated distinction**. 

Most modern tech products suffer from one of two extremes:
1. **Harsh Clinical Glare**: High-frequency `#FFFFFF` white surfaces with sharp `#000000` text causing rapid photoreceptor fatigue.
2. **Aggressive High-Chroma Dark Modes**: Neon blues, glowing gradients, and oversaturated accents designed to grab instant attention at the cost of cognitive calm.

### Core Principles
- **Eye-Comfortable Warmth**: The foundation uses an organic alabaster/parchment neutral (`#F5EDE2` in light mode, `#201D19` deep espresso in dark mode) that reduces eye strain over 8+ hour development and design sessions.
- **Controlled Signature Accent**: The calm periwinkle (`#7790ED`) is used with strict discipline—only for intentional focus, selected states, and meaningful actions.
- **Accessibility by Architecture**: Contrast ratios are tested and guaranteed to meet WCAG AA (at least 4.5:1 for body copy and 3:1 for large text/interactive components).
- **The Zero-Box Discipline**: Structure is communicated via typography, whitespace, and gentle 10% opacity borders rather than heavy nested boxes or dramatic drop shadows.

---

## 2. The 60-30-10 Color Distribution Rule

To maintain the signature aesthetic across any product, website, mobile application, or dashboard:

```
┌────────────────────────────────────────────────────────┐
│  60% Foundation Canvas                                 │
│  Light: #F5EDE2  │  Dark: #201D19                      │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │  30% Structural Surfaces & Typography            │  │
│  │  Surfaces: #EAE1D5 / #292621                     │  │
│  │  Text: #292621 (Primary) / #666159 (Secondary)   │  │
│  │  Borders: rgba(41, 38, 33, 0.10)                 │  │
│  │                                                  │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │  10% Signature Accent                      │  │  │
│  │  │  Focus, Active, Selected: #7790ED          │  │  │
│  │  │  Text Links (Light Canvas): #435DC9        │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

---

## 3. Master Token Specification & Hex Tables

### A. Foundations & Surfaces

| Token Name | CSS Custom Property | Hex / RGBA | Role & Application |
|---|---|---|---|
| **Light Canvas** | `--color-bg-primary` | `#F5EDE2` | Primary background for light web and mobile views. Replaces harsh `#FFF`. |
| **Light Elevated** | `--color-bg-elevated` | `#FAF5EE` | Subtle card highlight on light canvas. |
| **Light Soft Surface** | `--color-surface-soft` | `#EAE1D5` | Input fields, secondary cards, gallery carousel cards. |
| **Light Muted Surface** | `--color-surface-muted` | `#DFD4C6` | Hover state on buttons and list rows, drawer backgrounds. |
| **Dark Canvas** | `--color-bg-dark` | `#201D19` | Deep espresso foundation for dark mode and VS Code editor background. |
| **Dark Surface** | `--color-surface-dark` | `#292621` | Dark card surface, sidebar background, modal background. |
| **Dark Muted Surface** | `--color-surface-dark-muted` | `#35312B` | Inset code blocks, active items in dark mode. |
| **Dark Surface Hover** | `--color-surface-dark-hover` | `#423D36` | Interactive hover state in dark mode. |

### B. Typography Hierarchy

| Token Name | CSS Custom Property | Hex Code | WCAG Contrast | Rating | Usage |
|---|---|---|---|---|---|
| **Text Primary (Light)** | `--color-text-primary` | `#292621` | 12.6:1 (on `#F5EDE2`) | **AAA** | Headings, h1–h4, primary labels, main text. |
| **Text Secondary (Light)** | `--color-text-secondary` | `#666159` | 5.4:1 (on `#F5EDE2`) | **AA** | Body copy, descriptions, article text. |
| **Text Muted (Light)** | `--color-text-muted` | `#7E7870` | 3.7:1 (on `#F5EDE2`) | **AA Large** | Uppercase category headers, timestamps, non-critical metadata. |
| **Text Subtle (Light)** | `--color-text-subtle` | `#9E978D` | 2.4:1 (on `#F5EDE2`) | Subtle | Disabled buttons, placeholder text. |
| **Text Primary (Dark)** | `--color-text-primary-dark` | `#F5EDE2` | 14.2:1 (on `#201D19`) | **AAA** | Headings, code identifiers, primary dark text. |
| **Text Secondary (Dark)** | `--color-text-secondary-dark` | `#C2BBB0` | 8.5:1 (on `#201D19`) | **AAA** | Descriptions and secondary dark text. |
| **Text Muted (Dark)** | `--color-text-muted-dark` | `#9E978D` | 5.1:1 (on `#201D19`) | **AA** | Comments, line numbers, subtle metadata. |

### C. Signature Accent (Periwinkle Blue)

| Token Name | CSS Custom Property | Hex / RGBA | Contrast | Rating | Usage |
|---|---|---|---|---|---|
| **Accent Core** | `--color-accent` | `#7790ED` | 5.8:1 (on `#201D19`) | **AA (Dark)** | Focus rings, graphical indicators, progress bars, active icons. |
| **Accent Text Strong** | `--color-accent-strong` | `#435DC9` | 4.6:1 (on `#F5EDE2`) | **AA (Light)** | Inline hyperlinks and text buttons on light background. |
| **Accent Hover** | `--color-accent-hover` | `#647EDD` | Interactive | — | Button hover, active indicator line. |
| **Accent Wash** | `--color-accent-wash` | `rgba(119, 144, 237, 0.12)` | Tint | — | Selected text background, active pill wash. |

### D. Supporting Accent (Warm Earth Clay)

| Token Name | Hex Code | Usage |
|---|---|---|
| **Earth Clay (Light)** | `#C48248` | Warm highlight badge, editorial callouts on light. |
| **Earth Clay (Dark)** | `#E09F67` | Warm syntax highlight in VS Code (functions/properties), dark badges. |

### E. Semantic Status System

| Status | Light Value | Dark Value | Light Contrast | Usage |
|---|---|---|---|---|
| **Success** | `#2A7347` | `#65C189` | 5.3:1 (AA) | Live release status, valid inputs, git additions. |
| **Warning** | `#9A5B15` | `#E8A34E` | 5.1:1 (AA) | Near-expiry warning, cautionary hints. |
| **Error** | `#B3392F` | `#F06C62` | 5.4:1 (AA) | Critical expiry, validation errors, git deletions. |
| **Info** | `#435DC9` | `#7790ED` | 4.6:1 (AA) | Informational tooltips, architectural notes. |

---

## 4. Multi-Platform Implementation

### A. Tailwind CSS v4 Integration
Add to your `@theme` block in `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-foundation-light: #F5EDE2;
  --color-foundation-dark: #201D19;
  
  --color-surface-soft: #EAE1D5;
  --color-surface-muted: #DFD4C6;
  --color-surface-dark: #292621;
  --color-surface-dark-muted: #35312B;
  
  --color-text-primary: #292621;
  --color-text-secondary: #666159;
  --color-text-muted: #7E7870;
  
  --color-accent: #7790ED;
  --color-accent-strong: #435DC9;
  --color-accent-hover: #647EDD;
  --color-accent-wash: rgba(119, 144, 237, 0.12);
  
  --color-supporting-clay: #C48248;
}
```

### B. Mobile Applications (React Native / Expo)
Export the palette to a typed constants module:

```ts
export const Colors = {
  light: {
    background: '#F5EDE2',
    surface: '#EAE1D5',
    text: '#292621',
    textSecondary: '#666159',
    accent: '#435DC9',
    border: 'rgba(41, 38, 33, 0.10)',
  },
  dark: {
    background: '#201D19',
    surface: '#292621',
    text: '#F5EDE2',
    textSecondary: '#C2BBB0',
    accent: '#7790ED',
    border: 'rgba(245, 237, 226, 0.12)',
  }
};
```

---

## 5. Rules of Engagement: Do's & Don'ts

| Do | Don't |
|---|---|
| Use `#F5EDE2` as the light canvas to eliminate screen glare. | Don't use `#FFFFFF` as the main canvas or container background. |
| Use `#435DC9` for text links on light background (passes WCAG AA 4.6:1). | Don't use `#7790ED` for small text on light background (fails AA at 2.8:1). |
| Reserve `#7790ED` for focus rings, buttons, badges, and dark viewports. | Don't color every icon, border, and heading with `#7790ED`. |
| Pair status colors with icons or descriptive text. | Don't use color as the sole indicator of critical status or error. |
| Use subtle 10% opacity borders (`rgba(41,38,33,0.10)`) for separation. | Don't create heavy solid black borders around every element. |
