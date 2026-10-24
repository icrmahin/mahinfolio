"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, slug?: string) => void;
}

const navLinks = [
  { label: "Work", view: "home" },
  { label: "About", view: "about" },
  { label: "Contact", view: "contact" },
];

const LG_BREAKPOINT = 1024;

export const Navbar = ({ currentView, onNavigate }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openRef = useRef(false);

  const rootRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const topLineRef = useRef<HTMLSpanElement>(null);
  const midLineRef = useRef<HTMLSpanElement>(null);
  const bottomLineRef = useRef<HTMLSpanElement>(null);
  const menuTlRef = useRef<gsap.core.Timeline | null>(null);
  const iconTlRef = useRef<gsap.core.Timeline | null>(null);

  const activeIndex = navLinks.findIndex((link) => link.view === currentView);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const s = reduceMotion ? 0 : 1;

      gsap.set(menuRef.current, { autoAlpha: 0, y: -8 });
      gsap.set("[data-menu-item]", { autoAlpha: 0, y: 6 });
      gsap.set(indicatorRef.current, { opacity: 0 });

      menuTlRef.current = gsap
        .timeline({
          paused: true,
          defaults: { duration: 0.35 * s, ease: "power3.out" },
        })
        .to(menuRef.current, { autoAlpha: 1, y: 0 }, 0)
        .to(
          "[data-menu-item]",
          { autoAlpha: 1, y: 0, stagger: 0.03 * s },
          0.05,
        );

      iconTlRef.current = gsap
        .timeline({
          paused: true,
          defaults: { duration: 0.3 * s, ease: "power2.inOut" },
        })
        .to(topLineRef.current, { y: 5, rotate: 45 }, 0)
        .to(bottomLineRef.current, { y: -5, rotate: -45 }, 0)
        .to(midLineRef.current, { autoAlpha: 0, scaleX: 0 }, 0);
    },
    { scope: rootRef },
  );

  const setMenu = useCallback((next: boolean) => {
    if (openRef.current === next) return;
    openRef.current = next;
    setOpen(next);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      menuTlRef.current?.progress(next ? 1 : 0).pause();
      iconTlRef.current?.progress(next ? 1 : 0).pause();
      gsap.set(menuRef.current, { autoAlpha: next ? 1 : 0, y: next ? 0 : -8 });
      gsap.set("[data-menu-item]", {
        autoAlpha: next ? 1 : 0,
        y: next ? 0 : 6,
      });
      gsap.set(topLineRef.current, {
        y: next ? 5 : 0,
        rotate: next ? 45 : 0,
      });
      gsap.set(bottomLineRef.current, {
        y: next ? -5 : 0,
        rotate: next ? -45 : 0,
      });
      gsap.set(midLineRef.current, {
        autoAlpha: next ? 0 : 1,
        scaleX: next ? 0 : 1,
      });
    } else if (next) {
      menuTlRef.current?.play();
      iconTlRef.current?.play();
    } else {
      menuTlRef.current?.reverse();
      iconTlRef.current?.reverse();
    }
  }, []);

  const moveIndicator = useCallback((index: number, animate = true) => {
    const indicator = indicatorRef.current;
    const link = linkRefs.current[index];
    if (!indicator) return;

    if (!link) {
      gsap.to(indicator, { opacity: 0, duration: animate ? 0.2 : 0 });
      return;
    }

    gsap.to(indicator, {
      x: link.offsetLeft,
      width: link.offsetWidth,
      opacity: 1,
      duration: animate ? 0.45 : 0,
      ease: "power3.out",
      overwrite: "auto",
    });
  }, []);

  useEffect(() => {
    moveIndicator(activeIndex, false);
  }, [activeIndex, moveIndicator]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= LG_BREAKPOINT) setMenu(false);
      moveIndicator(activeIndex, false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, moveIndicator, setMenu]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && openRef.current) {
        setMenu(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setMenu]);

  const handleNavigate = (view: string) => {
    setMenu(false);
    onNavigate(view);
  };

  const handleResume = () => {
    setMenu(false);
    // Directly download the PDF resume
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "A.Mahin-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const headerSurface =
    scrolled || open
      ? "border-surface bg-page"
      : "border-page bg-page";

  return (
    <header
      ref={rootRef}
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${headerSurface}`}
    >
      <div className="relative mx-auto flex h-16 max-w-[640px] items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => handleNavigate("home")}
          aria-label="Go to homepage"
          className="rounded-md text-sm font-medium tracking-tight text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent -ml-2"
        >
          icrmahin
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          <nav
            aria-label="Main navigation"
            className="relative flex items-center gap-6"
          >
            {navLinks.map((link, index) => {
              const isActive = currentView === link.view;

              return (
                <button
                  key={link.view}
                  ref={(el) => {
                    linkRefs.current[index] = el;
                  }}
                  type="button"
                  onClick={() => handleNavigate(link.view)}
                  onMouseEnter={() => moveIndicator(index)}
                  onMouseLeave={() => moveIndicator(activeIndex)}
                  onFocus={() => moveIndicator(index)}
                  onBlur={() => moveIndicator(activeIndex)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1 text-sm transition-colors focus-visible:outline-none ${
                    isActive
                      ? "text-text"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <span
              ref={indicatorRef}
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1.5 left-0 h-[2px] w-0 rounded-full bg-accent opacity-0"
            />
          </nav>

          <button
            type="button"
            onClick={handleResume}
            className="inline-flex items-center rounded-full border border-border-control px-4 py-1.5 text-sm text-text transition-colors hover:border-accent hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Download resume
          </button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMenu(!openRef.current)}
          aria-expanded={open}
          aria-controls="navbar-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative flex size-10 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
        >
          <span className="relative block size-5">
            <span
              ref={topLineRef}
              className="absolute left-0 top-[4px] h-0.5 w-5 rounded-full bg-text"
            />
            <span
              ref={midLineRef}
              className="absolute left-0 top-[9px] h-0.5 w-5 rounded-full bg-text"
            />
            <span
              ref={bottomLineRef}
              className="absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-text"
            />
          </span>
        </button>
      </div>

      <div
        ref={menuRef}
        id="navbar-menu"
        aria-hidden={!open}
        className="navbar-menu absolute inset-x-0 top-full border-b border-surface bg-surface lg:hidden"
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-[640px] flex-col px-4 py-3 sm:px-6"
        >
          {navLinks.map((link) => {
            const isActive = currentView === link.view;

            return (
              <button
                key={link.view}
                type="button"
                data-menu-item
                onClick={() => handleNavigate(link.view)}
                aria-current={isActive ? "page" : undefined}
                className={`flex w-full items-center justify-between rounded-lg px-2 py-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "text-accent-hover"
                    : "text-text-muted hover:text-text"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-accent"
                  />
                )}
              </button>
            );
          })}

          <div className="my-2 h-px bg-surface" />

          <button
            type="button"
            data-menu-item
            onClick={handleResume}
            className="w-full rounded-lg px-2 py-3 text-left text-sm font-medium text-text transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Download resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
