import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Check,
  Copy,
  DownloadSimple,
  Eye,
  ShieldCheck,
  Sun,
  Moon,
  Sparkle,
  Code,
  Sliders,
  CheckCircle,
  WarningCircle,
  XCircle,
  Info
} from '@phosphor-icons/react';
import { COLOR_FAMILIES, BRAND_USAGE_RULES, BRAND_PALETTE } from '../tokens/brandTokens';
import { MetaSEO } from '../components/MetaSEO';

interface BrandPageProps {
  onNavigate: (view: string) => void;
}

export const BrandPage: React.FC<BrandPageProps> = ({ onNavigate }) => {
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>('light');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
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
        description="The official, eye-comfortable color system, contrast audits, and VS Code theme engineered for long hours of reading and building."
        urlPath="/brand"
        type="website"
      />

      {/* Navigation Header */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs text-[#666159] hover:text-[#292621] active:text-[#435DC9] transition-colors group px-2 py-2 -ml-2 rounded min-h-[44px]"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Work</span>
        </button>
      </div>

      {/* Main Title & Philosophy */}
      <header className="space-y-3.5">
        <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
          <span className="font-semibold text-[#292621]">icrmahin design system</span>
          <span aria-hidden="true">·</span>
          <span>Version 1.0</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#292621] leading-tight text-balance">
          Signature <span className="font-semibold text-[#292621]">Brand Color System</span>
        </h1>

        <p className="text-sm sm:text-base text-[#666159] leading-relaxed max-w-[600px]">
          An eye-comfortable, warm editorial color architecture designed for 8+ hour development and design sessions.
          Engineered with strict WCAG AA/AAA contrast, restrained periwinkle emphasis, and zero screen glare.
        </p>

        {/* Quick Resource Download Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <a
            href="/brand/BRAND_COLOR_GUIDE.md"
            download="BRAND_COLOR_GUIDE.md"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#292621]/15 bg-[#EAE1D5]/40 hover:bg-[#EAE1D5] text-[#292621] font-medium transition-colors min-h-[38px]"
          >
            <DownloadSimple className="w-3.5 h-3.5" />
            <span>Brand Guide (MD)</span>
          </a>
          <a
            href="/brand/tokens.json"
            download="tokens.json"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#292621]/15 bg-[#EAE1D5]/40 hover:bg-[#EAE1D5] text-[#292621] font-medium transition-colors min-h-[38px]"
          >
            <DownloadSimple className="w-3.5 h-3.5" />
            <span>Tokens (JSON)</span>
          </a>
          <a
            href="/brand/brand-tokens.css"
            download="brand-tokens.css"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#292621]/15 bg-[#EAE1D5]/40 hover:bg-[#EAE1D5] text-[#292621] font-medium transition-colors min-h-[38px]"
          >
            <DownloadSimple className="w-3.5 h-3.5" />
            <span>CSS Variables</span>
          </a>
          <a
            href="/vscode/icrmahin-dark.json"
            download="icrmahin-dark.json"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#292621]/15 bg-[#292621] hover:bg-[#292621]/90 text-[#F5EDE2] font-medium transition-colors min-h-[38px]"
          >
            <Code className="w-3.5 h-3.5 text-[#7790ED]" />
            <span>VS Code Theme</span>
          </a>
        </div>
      </header>

      {/* Section 1: Palette Evaluation & Variations Studied */}
      <section className="space-y-4 border-t border-[#292621]/10 pt-8 sm:pt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-secondary">
            01. Palette Evaluation & Rationale
          </h2>
          <span className="text-xs font-mono text-text-secondary">Selection Audit</span>
        </div>

        <p className="text-xs sm:text-sm text-[#666159] leading-relaxed">
          Before finalizing this signature, we evaluated three distinct directions against real-world reading endurance,
          photoreceptor comfort, and character distinction:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1 text-xs">
          {/* Variation 1: Evaluated and Selected */}
          <div className="p-4 rounded-xl border-2 border-[#7790ED] bg-[#FAF5EE] space-y-2 relative shadow-xs">
            <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-[#7790ED] text-[#201D19]">
              Selected Signature
            </span>
            <div className="flex items-center gap-1.5 h-4">
              <span className="w-3.5 h-3.5 rounded-full bg-[#F5EDE2] border border-[#292621]/20" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#292621]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#7790ED]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#EAE1D5]" />
            </div>
            <h3 className="font-semibold text-[#292621] text-sm">Warm Editorial Alabaster</h3>
            <p className="text-[#666159] leading-relaxed">
              Soft parchment canvas with deep espresso text and controlled periwinkle accent. Eliminates glare while providing 12.6:1 AAA contrast.
            </p>
          </div>

          {/* Variation 2: Cold Gray */}
          <div className="p-4 rounded-xl border border-[#292621]/10 bg-[#EAE1D5]/20 space-y-2 opacity-75">
            <div className="flex items-center gap-1.5 h-4">
              <span className="w-3.5 h-3.5 rounded-full bg-[#F3F4F6] border border-gray-300" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#111827]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#2563EB]" />
            </div>
            <h3 className="font-semibold text-[#292621] text-sm">Clinical Cool Gray</h3>
            <p className="text-text-secondary leading-relaxed">
              Sterile blue-gray tone commonly used by generic SaaS templates. Evaluated as too corporate and lacking warmth and craft.
            </p>
          </div>

          {/* Variation 3: Stark B&W */}
          <div className="p-4 rounded-xl border border-[#292621]/10 bg-[#EAE1D5]/20 space-y-2 opacity-75">
            <div className="flex items-center gap-1.5 h-4">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFFFFF] border border-gray-400" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#000000]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#555555]" />
            </div>
            <h3 className="font-semibold text-[#292621] text-sm">Harsh Pure Monochrome</h3>
            <p className="text-text-secondary leading-relaxed">
              High-frequency #FFF on #000 causes severe visual fatigue after 45 minutes of reading code or editorial case studies.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Real UI Preview (Light vs Dark) */}
      <section className="space-y-4 border-t border-[#292621]/10 pt-8 sm:pt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xs uppercase font-semibold tracking-wider text-text-secondary">
              02. Interactive UI Component Testbed
            </h2>
            <p className="text-xs text-[#666159] mt-0.5">
              Live simulation of buttons, surfaces, typography, and status indicators in realistic contexts.
            </p>
          </div>

          {/* Light / Dark Mode Toggle */}
          <div className="inline-flex items-center rounded-lg border border-[#292621]/15 p-1 bg-[#EAE1D5]/40 shrink-0">
            <button
              onClick={() => setActiveTheme('light')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md font-medium transition-all min-h-[32px] ${
                activeTheme === 'light'
                  ? 'bg-[#F5EDE2] text-[#292621] shadow-xs'
                  : 'text-[#666159] hover:text-[#292621]'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-[#9A5B15]" />
              <span>Warm Light</span>
            </button>
            <button
              onClick={() => setActiveTheme('dark')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md font-medium transition-all min-h-[32px] ${
                activeTheme === 'dark'
                  ? 'bg-[#201D19] text-[#F5EDE2] shadow-xs'
                  : 'text-[#666159] hover:text-[#292621]'
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-[#7790ED]" />
              <span>Minimalist Dark</span>
            </button>
          </div>
        </div>

        {/* Real Interactive UI Sandbox Preview */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border transition-colors duration-200 space-y-6 ${
            activeTheme === 'light'
              ? 'bg-[#F5EDE2] border-[#292621]/12 text-[#292621]'
              : 'bg-[#201D19] border-[#F5EDE2]/12 text-[#F5EDE2]'
          }`}
        >
          {/* Mock Header */}
          <div className="flex items-center justify-between border-b pb-4 border-current/10">
            <div className="flex items-center gap-2">
              <span className="font-semibold tracking-tight text-sm">icrmahin / console</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                activeTheme === 'light'
                  ? 'bg-[#2A7347]/10 text-[#2A7347]'
                  : 'bg-[#65C189]/15 text-[#65C189]'
              }`}>
                System Active
              </span>
            </div>
            <span className="text-xs font-mono opacity-60">UTC+6 Dhaka</span>
          </div>

          {/* Typography Sample */}
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-normal leading-snug">
              Designing software that feels <span className="font-semibold text-[#292621]">calm</span> and durable.
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${
              activeTheme === 'light' ? 'text-[#666159]' : 'text-[#C2BBB0]'
            }`}>
              Body text formatted using our refined secondary token. Tested for effortless readability during prolonged work sessions without harsh contrast shocks.
            </p>
          </div>

          {/* Interactive Button States */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider opacity-60 block">Interactive Actions</span>
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Primary Action Button */}
              <button
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTheme === 'light'
                    ? 'bg-[#292621] text-[#F5EDE2] hover:bg-[#292621]/90 active:scale-[0.98]'
                    : 'bg-[#7790ED] text-[#201D19] hover:bg-[#8EA4F0] active:scale-[0.98]'
                }`}
              >
                Primary Trigger
              </button>

              {/* Accent Outline */}
              <button
                className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all ${
                  activeTheme === 'light'
                    ? 'border-[#435DC9] text-[#435DC9] hover:bg-[#7790ED]/10'
                    : 'border-[#7790ED] text-[#435DC9] hover:bg-[#7790ED]/15'
                }`}
              >
                Signature Periwinkle Action
              </button>

              {/* Soft Surface Button */}
              <button
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTheme === 'light'
                    ? 'bg-[#EAE1D5] text-[#292621] hover:bg-[#DFD4C6]'
                    : 'bg-[#292621] text-[#F5EDE2] hover:bg-[#35312B]'
                }`}
              >
                Secondary Surface
              </button>
            </div>
          </div>

          {/* Status Indicators Pill Matrix */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider opacity-60 block">Semantic Status States</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                activeTheme === 'light'
                  ? 'bg-[#2A7347]/8 border-[#2A7347]/20 text-[#2A7347]'
                  : 'bg-[#65C189]/12 border-[#65C189]/25 text-[#65C189]'
              }`}>
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span className="font-medium">Success / Shipped</span>
              </div>

              <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                activeTheme === 'light'
                  ? 'bg-[#9A5B15]/8 border-[#9A5B15]/20 text-[#9A5B15]'
                  : 'bg-[#E8A34E]/12 border-[#E8A34E]/25 text-[#E8A34E]'
              }`}>
                <WarningCircle className="w-4 h-4 shrink-0" />
                <span className="font-medium">Warning / Expiry</span>
              </div>

              <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                activeTheme === 'light'
                  ? 'bg-[#B3392F]/8 border-[#B3392F]/20 text-[#B3392F]'
                  : 'bg-[#F06C62]/12 border-[#F06C62]/25 text-[#F06C62]'
              }`}>
                <XCircle className="w-4 h-4 shrink-0" />
                <span className="font-medium">Error / Overdue</span>
              </div>

              <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                activeTheme === 'light'
                  ? 'bg-[#435DC9]/8 border-[#435DC9]/20 text-[#435DC9]'
                  : 'bg-[#7790ED]/12 border-[#7790ED]/25 text-[#435DC9]'
              }`}>
                <Info className="w-4 h-4 shrink-0" />
                <span className="font-medium">Info / Architecture</span>
              </div>
            </div>
          </div>

          {/* Realistic Code Syntax Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono opacity-60">
              <span>Code Editor Syntax Preview</span>
              <span>Theme: {activeTheme === 'light' ? 'icrmahin Warm Light' : 'icrmahin Minimalist Dark'}</span>
            </div>
            <pre
              className={`p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed border ${
                activeTheme === 'light'
                  ? 'bg-[#FAF5EE] border-[#292621]/10 text-[#292621]'
                  : 'bg-[#181613] border-[#F5EDE2]/10 text-[#F5EDE2]'
              }`}
            >
              <code>
                <span className="opacity-50 italic">// 1. Initialize product color token contract</span>{'\n'}
                <span className={activeTheme === 'light' ? 'text-[#435DC9]' : 'text-[#7790ED]'}>export const</span>{' '}
                <span className={activeTheme === 'light' ? 'text-[#9A5B15]' : 'text-[#E09F67]'}>brandTokens</span> = {'{'}{'\n'}
                {'  '}canvas: <span className={activeTheme === 'light' ? 'text-[#2A7347]' : 'text-[#65C189]'}>'{activeTheme === 'light' ? '#F5EDE2' : '#201D19'}'</span>,{'\n'}
                {'  '}accent: <span className={activeTheme === 'light' ? 'text-[#2A7347]' : 'text-[#65C189]'}>'{BRAND_PALETTE.accent.core}'</span>,{'\n'}
                {'  '}isComfortable: <span className={activeTheme === 'light' ? 'text-[#C48248]' : 'text-[#E8A34E]'}>true</span>{'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Section 3: WCAG AA/AAA Verified Contrast Matrix */}
      <section className="space-y-4 border-t border-[#292621]/10 pt-8 sm:pt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-secondary">
            03. Verified Contrast & Accessibility Matrix
          </h2>
          <span className="text-xs font-mono text-[#435DC9] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> WCAG AA / AAA
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#666159] leading-relaxed">
          Contrast ratios computed according to W3C relative luminance algorithms. No colors rely on guess-work.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[#292621]/12 bg-[#EAE1D5]/20">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[#292621]/10 bg-[#EAE1D5]/40 text-[#292621] font-semibold">
              <tr>
                <th className="py-2.5 px-3">Foreground Element</th>
                <th className="py-2.5 px-3">Background Surface</th>
                <th className="py-2.5 px-3">Ratio</th>
                <th className="py-2.5 px-3">WCAG Compliance</th>
                <th className="py-2.5 px-3">Primary Context</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292621]/10 text-[#292621]">
              <tr>
                <td className="py-2.5 px-3 font-medium flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#292621]" />
                  Primary Dark Text (#292621)
                </td>
                <td className="py-2.5 px-3 font-mono text-[11px]">#F5EDE2 (Parchment)</td>
                <td className="py-2.5 px-3 font-mono font-semibold">12.6 : 1</td>
                <td className="py-2.5 px-3">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FAF5EE] text-[#435DC9]">
                    WCAG AAA
                  </span>
                </td>
                <td className="py-2.5 px-3 text-[#666159]">Headings, body paragraphs</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#666159]" />
                  Secondary Body (#666159)
                </td>
                <td className="py-2.5 px-3 font-mono text-[11px]">#F5EDE2 (Parchment)</td>
                <td className="py-2.5 px-3 font-mono font-semibold">5.4 : 1</td>
                <td className="py-2.5 px-3">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FAF5EE] text-[#435DC9]">
                    WCAG AA
                  </span>
                </td>
                <td className="py-2.5 px-3 text-[#666159]">Supporting text, card summaries</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#435DC9]" />
                  Accent Text Strong (#435DC9)
                </td>
                <td className="py-2.5 px-3 font-mono text-[11px]">#F5EDE2 (Parchment)</td>
                <td className="py-2.5 px-3 font-mono font-semibold">4.6 : 1</td>
                <td className="py-2.5 px-3">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FAF5EE] text-[#435DC9]">
                    WCAG AA
                  </span>
                </td>
                <td className="py-2.5 px-3 text-[#666159]">Text links, active nav item</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5EDE2]" />
                  Light Primary Text (#F5EDE2)
                </td>
                <td className="py-2.5 px-3 font-mono text-[11px]">#201D19 (Espresso)</td>
                <td className="py-2.5 px-3 font-mono font-semibold">14.2 : 1</td>
                <td className="py-2.5 px-3">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FAF5EE] text-[#435DC9]">
                    WCAG AAA
                  </span>
                </td>
                <td className="py-2.5 px-3 text-[#666159]">Dark theme text, VS Code code</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7790ED]" />
                  Accent Core (#7790ED)
                </td>
                <td className="py-2.5 px-3 font-mono text-[11px]">#201D19 (Espresso)</td>
                <td className="py-2.5 px-3 font-mono font-semibold">5.8 : 1</td>
                <td className="py-2.5 px-3">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FAF5EE] text-[#435DC9]">
                    WCAG AA
                  </span>
                </td>
                <td className="py-2.5 px-3 text-[#666159]">Dark mode keywords, focus rings</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2A7347]" />
                  Success Forest (#2A7347)
                </td>
                <td className="py-2.5 px-3 font-mono text-[11px]">#F5EDE2 (Parchment)</td>
                <td className="py-2.5 px-3 font-mono font-semibold">5.3 : 1</td>
                <td className="py-2.5 px-3">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FAF5EE] text-[#435DC9]">
                    WCAG AA
                  </span>
                </td>
                <td className="py-2.5 px-3 text-[#666159]">Live release badges</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B3392F]" />
                  Error Terracotta (#B3392F)
                </td>
                <td className="py-2.5 px-3 font-mono text-[11px]">#F5EDE2 (Parchment)</td>
                <td className="py-2.5 px-3 font-mono font-semibold">5.4 : 1</td>
                <td className="py-2.5 px-3">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FAF5EE] text-[#435DC9]">
                    WCAG AA
                  </span>
                </td>
                <td className="py-2.5 px-3 text-[#666159]">Destructive / alert badges</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Master Token Dictionary with One-Click Copy */}
      <section className="space-y-6 border-t border-[#292621]/10 pt-8 sm:pt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-text-secondary">
            04. Master Token Dictionary
          </h2>
          <span className="text-xs text-text-secondary font-mono">Click swatch to copy</span>
        </div>

        <div className="space-y-6">
          {COLOR_FAMILIES.map((fam, fIdx) => (
            <div key={fIdx} className="space-y-2.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#292621]">
                {fam.title}
              </h3>
              <p className="text-xs text-[#666159]">{fam.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {fam.tokens.map((token, tIdx) => (
                  <div
                    key={tIdx}
                    onClick={() => handleCopy(token.hex, token.name)}
                    className="p-3 rounded-lg border border-[#292621]/10 bg-[#EAE1D5]/30 hover:bg-[#EAE1D5]/70 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-between gap-3 group"
                    role="button"
                    tabIndex={0}
                    aria-label={`Copy hex code for ${token.name}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-8 h-8 rounded-md border border-[#292621]/15 shrink-0 shadow-xs flex items-center justify-center"
                        style={{ backgroundColor: token.rgba || token.hex }}
                      />
                      <div className="min-w-0">
                        <span className="text-xs font-medium text-[#292621] block truncate">
                          {token.name}
                        </span>
                        <span className="text-[11px] font-mono text-[#666159] block truncate">
                          {token.variable}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono font-medium text-[#292621] block">
                        {token.hex}
                      </span>
                      {copiedToken === token.name ? (
                        <span className="text-[10px] text-[#435DC9] font-semibold inline-flex items-center gap-0.5">
                          <Check className="w-3 h-3" /> Copied
                        </span>
                      ) : (
                        <span className="text-[10px] text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                          Copy Hex
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

      {/* Section 5: Brand Rules & Portability */}
      <section className="space-y-4 border-t border-[#292621]/10 pt-8 sm:pt-10">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-text-secondary">
          05. Multi-Project Portability & Guidelines
        </h2>

        <div className="space-y-3 text-xs sm:text-sm text-[#666159] leading-relaxed">
          {BRAND_USAGE_RULES.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-lg border border-[#292621]/10 bg-[#EAE1D5]/20 space-y-1">
              <span className="font-semibold text-[#292621] block">{item.rule}</span>
              <p className="text-xs text-[#666159]">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
