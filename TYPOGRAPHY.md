# Signature Typography System — icrmahin

A permanent, reusable typographic identity engineered for software products, developer tooling, web applications, and editorial case studies.

---

## 1. Brand Font Philosophy

1. **Anti-Default Discipline:** Never default to overused corporate grotesques (*Inter, Roboto, Arial, Helvetica, Geist, DM Sans, Poppins, Montserrat*). The identity must feel bespoke, intentional, and unmistakably `icrmahin`.
2. **Two-Family Boundary:** A maximum of two families:
   - **Primary Brand Family:** Headings, body text, UI controls, navigation, and form inputs.
   - **Technical Monospace Family:** Micro-metadata, sequence indices (`01`, `02`), metric badges, and code blocks.
3. **Screen-Native Readability:** Crisp optical performance at 10px–14px, open counters, distinguished glyph shapes, and clear tabular figures.

---

## 2. Typeface Hierarchy

| Role | Family | Fallback Stack | Use Cases |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | *Approved Selection* (e.g., Albert Sans / Sora / Be Vietnam Pro) | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | Hero headings, section titles, reading text, buttons, navigation pills |
| **Technical Mono** | **JetBrains Mono** | `ui-monospace, SFMono-Regular, Menlo, monospace` | Route index tags, architectural specs, dates, commit hashes, code blocks |

---

## 3. Typographic Scale & Semantic Tokens

| Token | Size | Line Height | Tracking | Weight | Role & Measure |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `displayLarge` | `clamp(2rem, 4vw + 1rem, 3.25rem)` | `1.1` | `-0.035em` | `650` | Hero page statement (max 65ch) |
| `heading1` | `clamp(1.5rem, 2.5vw + 0.75rem, 2.25rem)` | `1.2` | `-0.025em` | `600` | Major case study / view title |
| `heading2` | `clamp(1.15rem, 1.5vw + 0.5rem, 1.5rem)` | `1.3` | `-0.02em` | `600` | Section headings |
| `heading3` | `clamp(0.95rem, 1vw + 0.35rem, 1.15rem)` | `1.35` | `-0.015em` | `600` | Component / card headings |
| `bodyLarge` | `clamp(0.95rem, 0.5vw + 0.75rem, 1.05rem)` | `1.65` | `-0.01em` | `400` | Lead editorial summary |
| `bodyRegular` | `0.875rem` (14px) | `1.6` | `-0.005em` | `400` | Primary reading measure (max 68ch) |
| `caption` | `0.75rem` (12px) | `1.5` | `0` | `450` | Secondary annotations, captions |
| `navigation` | `0.75rem` (12px) | `1.0` | `-0.01em` | `500` | Capsule navigation pills |
| `button` | `0.8125rem` (13px) | `1.0` | `-0.01em` | `550` | Interactive trigger controls |
| `technicalLabel` | `0.6875rem` (11px) | `1.3` | `+0.04em` | `500` | JetBrains Mono: status badges, tags |

---

## 4. Reading Measure & Optical Comfort Rules

- **Long-form Narrative Measure:** Never exceed `68ch`. Paragraphs wider than 68 characters create cognitive fatigue.
- **Line Heights:** Body text must maintain `1.6` to `1.65` line height to ensure comfortable eye tracking in warm-palette environments.
- **Letter Spacing:** Headings use negative letter spacing (`-0.02em` to `-0.035em`) for optical cohesion; monospace metadata uses positive tracking (`+0.04em`) for legibility.

---

## 5. Implementation in Future Products

### Tailwind CSS v4 Theme
```css
@theme {
  --font-sans: "Albert Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```

### Next.js / Vite HTML Link
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,300..800;1,300..800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```
