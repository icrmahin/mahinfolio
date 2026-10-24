import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Check,
  DownloadSimple,
  ShieldCheck,
  Sparkle,
} from "@phosphor-icons/react";
import {
  COLOR_FAMILIES,
  BRAND_USAGE_RULES,
  CONTRAST_ROWS,
  TOKEN_HEX,
} from "../tokens/brandTokens";
import { MetaSEO } from "../components/MetaSEO";

interface BrandPageProps {
  onNavigate: (view: string) => void;
}

export const BrandPage: React.FC<BrandPageProps> = ({ onNavigate }) => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(label);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <article className="space-y-12 sm:space-y-16 pt-3 sm:pt-10 pb-20">
      <MetaSEO
        title="Signature Brand Color System — A. Mahin (icrmahin)"
        description="An eleven-token color system with light and dark themes, a WCAG contrast audit, and portability rules for every icrmahin interface."
        urlPath="/brand"
        type="website"
      />

      {/* Main Title & Philosophy */}
      <header className="space-y-3.5">
        <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
          <span className="font-semibold text-text">
            icrmahin design system
          </span>
          <span aria-hidden="true">·</span>
          <span>Version 2.0</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text leading-tight text-balance">
          Signature{" "}
          <span className="font-semibold text-text">Brand Color System</span>
        </h1>

        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-[600px]">
          Eleven tokens, two themes, one source of truth. Light values are
          declared on <code className="font-mono text-text">:root</code>, dark
          values on{" "}
          <code className="font-mono text-text">
            :root[data-theme=&quot;dark&quot;]
          </code>
          , and both resolve through the same{" "}
          <code className="font-mono text-text">--color-*</code> custom
          properties.
        </p>

        {/* Quick Resource Download Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <a
            href="/brand/BRAND_COLOR_GUIDE.md"
            download="BRAND_COLOR_GUIDE.md"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-control bg-surface hover:bg-accent-soft text-text font-medium transition-colors min-h-[38px]"
          >
            <DownloadSimple className="w-3.5 h-3.5" />
            <span>Brand Guide (MD)</span>
          </a>
          <a
            href="/brand/tokens.json"
            download="tokens.json"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-control bg-surface hover:bg-accent-soft text-text font-medium transition-colors min-h-[38px]"
          >
            <DownloadSimple className="w-3.5 h-3.5" />
            <span>Tokens (JSON)</span>
          </a>
          <a
            href="/brand/brand-tokens.css"
            download="brand-tokens.css"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-control bg-surface hover:bg-accent-soft text-text font-medium transition-colors min-h-[38px]"
          >
            <DownloadSimple className="w-3.5 h-3.5" />
            <span>CSS Variables</span>
          </a>
        </div>
      </header>

      {/* Section 1: Rationale */}
      <section className="space-y-4 border-t border-border pt-8 sm:pt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
            01. Rationale
          </h2>
          <span className="text-xs font-mono text-text-muted">
            Selection Audit
          </span>
        </div>

        <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
          The system defines exactly eleven tokens. Semantic status colors
          (success, warning, error) were retired on purpose: state is carried by
          text and iconography, never by an extra hue. High-chroma accents and
          pure-white/pure-black canvases were also rejected — measured against
          long reading sessions, the accent{" "}
          <code className="font-mono text-text">{TOKEN_HEX.accent}</code> family
          on warm neutral surfaces stays effective without glare.
        </p>
      </section>

      {/* Section 2: Component Testbed */}
      <section className="space-y-4 border-t border-border pt-8 sm:pt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
            02. Component Testbed
          </h2>
          <span className="text-xs font-mono text-text-muted">
            Token Utilities Only
          </span>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl border border-border bg-page space-y-6 transition-colors">
          {/* Mock Header */}
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold tracking-tight text-sm">
                icrmahin / console
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-soft text-accent">
                System Active
              </span>
            </div>
            <span className="text-xs font-mono text-text-muted">
              UTC+6 Dhaka
            </span>
          </div>

          {/* Typography Sample */}
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-normal leading-snug">
              Designing software that feels{" "}
              <span className="font-semibold text-text">calm</span> and durable.
            </h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Body text formatted using the muted token. Tested for effortless
              readability during prolonged work sessions without harsh contrast
              shocks.
            </p>
          </div>

          {/* Interactive Button States */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block">
              Interactive Actions
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              <button className="px-4 py-2 rounded-lg text-xs font-medium bg-accent text-accent-foreground hover:bg-accent-hover active:scale-[0.98] transition-all">
                Primary Trigger
              </button>
              <button className="px-4 py-2 rounded-lg text-xs font-medium border border-accent text-accent hover:bg-accent-soft active:scale-[0.98] transition-all">
                Accent Outline
              </button>
              <button className="px-4 py-2 rounded-lg text-xs font-medium bg-surface border border-border-control text-text hover:bg-accent-soft active:scale-[0.98] transition-all">
                Secondary Surface
              </button>
            </div>
          </div>

          {/* Code Syntax Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-text-muted">
              <span>Token Reference Preview</span>
              <span>Single Source: src/index.css</span>
            </div>
            <pre className="p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed border border-border bg-surface text-text">
              <code>
                <span className="text-text-muted italic">
                  // 1. The only colors in the codebase
                </span>
                {"\n"}
                <span className="text-accent">:root</span> {"{"}
                {"\n"}
                {"  "}--color-page:{" "}
                <span className="text-accent-hover">{TOKEN_HEX.page}</span>;
                {"\n"}
                {"  "}--color-accent:{" "}
                <span className="text-accent-hover">{TOKEN_HEX.accent}</span>;
                {"\n"}
                {"  "}…{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Section 3: Contrast Matrix */}
      <section className="space-y-4 border-t border-border pt-8 sm:pt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
            03. Verified Contrast Matrix
          </h2>
          <span className="text-xs font-mono text-accent flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> WCAG
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-surface">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-accent-soft text-text font-semibold">
              <tr>
                <th className="py-2.5 px-3">Foreground</th>
                <th className="py-2.5 px-3">Background</th>
                <th className="py-2.5 px-3">Light Ratio</th>
                <th className="py-2.5 px-3">Dark Ratio</th>
                <th className="py-2.5 px-3">Compliance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text">
              {CONTRAST_ROWS.map((row, idx) => (
                <tr key={idx}>
                  <td className="py-2.5 px-3 font-medium">{row.fg}</td>
                  <td className="py-2.5 px-3 font-mono text-[11px]">
                    {row.bgLabel}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-semibold">
                    {row.ratioLight}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-semibold">
                    {row.ratioDark}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-accent-soft text-accent">
                      {row.rating}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Master Token Dictionary with One-Click Copy */}
      <section className="space-y-6 border-t border-border pt-8 sm:pt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
            04. Master Token Dictionary
          </h2>
          <span className="text-xs text-text-muted font-mono">
            Click swatch to copy
          </span>
        </div>

        <div className="space-y-6">
          {COLOR_FAMILIES.map((fam, fIdx) => (
            <div key={fIdx} className="space-y-2.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text">
                {fam.title}
              </h3>
              <p className="text-xs text-text-muted">{fam.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {fam.tokens.map((token, tIdx) => (
                  <div
                    key={tIdx}
                    onClick={() => handleCopy(token.variable, token.name)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleCopy(token.variable, token.name);
                      }
                    }}
                    className="p-3 rounded-lg border border-border bg-surface hover:bg-accent-soft active:scale-[0.99] transition-all cursor-pointer flex items-center justify-between gap-3 group"
                    role="button"
                    tabIndex={0}
                    aria-label={`Copy ${token.variable}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-8 h-8 rounded-md border border-border-control shrink-0"
                        style={{ backgroundColor: `var(${token.variable})` }}
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <span className="text-xs font-medium text-text block truncate">
                          {token.name}
                        </span>
                        <span className="text-[11px] font-mono text-text-muted block truncate">
                          {token.utility}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono font-medium text-text block">
                        {token.variable}
                      </span>
                      {copiedToken === token.name ? (
                        <span className="text-[10px] text-accent font-semibold inline-flex items-center gap-0.5">
                          <Check className="w-3 h-3" /> Copied
                        </span>
                      ) : (
                        <span className="text-[10px] text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                          Copy Var
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Usage Rules */}
      <section className="space-y-4 border-t border-border pt-8 sm:pt-10">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-text-muted">
          05. Usage Rules
        </h2>

        <div className="space-y-3 text-xs sm:text-sm text-text-muted leading-relaxed">
          <div className="inline-flex items-center gap-1.5 text-accent font-medium">
            <Sparkle className="w-3.5 h-3.5" />
            <span>
              Every interface on icrmahin resolves to the same eleven tokens.
            </span>
          </div>
          {BRAND_USAGE_RULES.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg border border-border bg-surface space-y-1"
            >
              <span className="font-semibold text-text block">{item.rule}</span>
              <p className="text-xs text-text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default BrandPage;
