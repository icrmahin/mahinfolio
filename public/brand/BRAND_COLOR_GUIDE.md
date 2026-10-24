# A. Mahin (`icrmahin`) Signature Brand Color System

> **"Almost nothing on the screen should be decorative. Every element must justify its presence."**

---

## 1. Design Philosophy: The Peaceful Interface

The `icrmahin` brand identity is engineered for **prolonged visual comfort and restraint**.

- **Two text tones only.** Hierarchy comes from size, weight, and spacing — not from additional hue families.
- **One accent family.** The calm teal accent (`#2a7570` light / `#6fbfb8` dark) is used with strict discipline: focus, selection, and primary actions only.
- **No semantic colors.** Success, warning, and error hues were retired on purpose. State is conveyed by text and iconography (`CheckCircle` + label), never by a dedicated color.
- **Hairline structure.** The "zero-box" discipline: structure is communicated with typography, whitespace, and quiet borders rather than nested boxes and drop shadows.
- **Accessibility by architecture.** Contrast is measured, not guessed (see the audit in §3).

---

## 2. The 60-30-10 Distribution Rule

To maintain the signature aesthetic across any product, website, or dashboard:

```
┌──────────────────────────────────────────────────────┐
│  60%  Page canvas                                    │
│        --color-page                                  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  30%  Structure & typography                   │  │
│  │        --color-surface, --color-border,        │  │
│  │        --color-text, --color-text-muted        │  │
│  │                                                │  │
│  │  ┌──────────────────────────────────────────┐  │  │
│  │  │  10%  Accent                             │  │  │
│  │  │        --color-accent, --color-accent-   │  │  │
│  │  │        hover, --color-accent-soft,       │  │  │
│  │  │        --color-accent-foreground         │  │  │
│  │  └──────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

Never flood a surface with accent colors.

---

## 3. The Eleven Tokens (Single Source of Truth)

| Token | Utility | Light | Dark | Role |
|---|---|---|---|---|
| `--color-page` | `bg-page` | `#f7f6f3` | `#14191b` | Viewport canvas |
| `--color-surface` | `bg-surface` | `#ffffff` | `#1c2326` | Cards, modals, code blocks |
| `--color-border` | `border-border` | `#e3e1dc` | `#2e383c` | Hairlines and dividers |
| `--color-border-control` | `border-border-control` | `#8c9699` | `#5d6b70` | Control outlines |
| `--color-text` | `text-text` | `#1f2a2e` | `#e9eeef` | Primary typography |
| `--color-text-muted` | `text-text-muted` | `#5c6b70` | `#9aa8ac` | Metadata and labels |
| `--color-accent` | `bg-accent` | `#2a7570` | `#6fbfb8` | Primary actions, active states |
| `--color-accent-hover` | `bg-accent-hover` | `#1f5f5b` | `#8fd3cd` | Hover / pressed accent |
| `--color-accent-soft` | `bg-accent-soft` | `#e3f0ee` | `#1e3436` | Badges, selections, washes |
| `--color-accent-foreground` | `text-accent-foreground` | `#ffffff` | `#14191b` | Content on accent fills |
| `--color-focus` | `ring-focus` | `#2a7570` | `#6fbfb8` | Focus rings and outlines |

Light values are declared on `:root`; dark values on `:root[data-theme="dark"]`. Both resolve through the same variables, so no component ever knows two colors for one token.

### Contrast audit (WCAG 2.1)

| Foreground on background | Light | Dark | Rating |
|---|---|---|---|
| `text` on `page` | 13.6 : 1 | 15.1 : 1 | AAA |
| `text-muted` on `page` | 5.1 : 1 | 7.2 : 1 | AA |
| `accent` on `page` | 5.0 : 1 | 8.3 : 1 | AA |
| `accent-hover` on `page` | 6.8 : 1 | 10.4 : 1 | AA |
| `accent` on `accent-soft` | 4.6 : 1 | 6.1 : 1 | AA |
| `accent-foreground` on `accent` | 5.4 : 1 | 8.3 : 1 | AA |

---

## 4. Usage Rules

1. **Only these eleven tokens.** No raw hex, `rgb()`, `hsl()`, or named colors anywhere in the codebase. Tailwind's default palette is disabled.
2. **One source of truth.** `src/index.css` (`@theme` + `:root[data-theme="dark"]`). Portable copies: `public/brand/brand-tokens.css` and `tokens.json`.
3. **No state-only hues.** Badges pair an icon plus a label with `accent`/`accent-soft`; never rely on color alone to signal state.
4. **If a design needs a different color, change the design.** Extending the token file is the only sanctioned path.
5. **Never abandon the hairline discipline.** Borders carry structure, not filled boxes.

---

## 5. Portability

Include the universal stylesheet in any project:

```html
<link rel="stylesheet" href="/brand/brand-tokens.css">
```

Then reference tokens directly:

```css
body { background: var(--color-page); color: var(--color-text); }
a:hover { color: var(--color-accent-hover); }
:focus-visible { outline: 2px solid var(--color-focus); }
```

Figma/Token Studio consumers can import `tokens.json` directly. Version 2.0.0.
