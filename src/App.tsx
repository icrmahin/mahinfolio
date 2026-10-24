/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ArrowLeft } from "@phosphor-icons/react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ArchivePage } from "./pages/ArchivePage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { ContactPage } from "./pages/ContactPage";
import { BrandPage } from "./pages/BrandPage";
import { CalBookingModal } from "./components/CalBookingModal";
import { CustomCursor } from "./components/CustomCursor";
import { LoadingScreen } from "./components/LoadingScreen";
import { LiquidFilter } from "./components/LiquidFilter";
import { PageTransition } from "./components/PageTransition";
import { CASE_STUDIES } from "./data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [currentView, setCurrentView] = useState<
    | "home"
    | "about"
    | "archive"
    | "case-study"
    | "contact"
    | "brand"
    | "not-found"
  >("home");
  const [currentSlug, setCurrentSlug] = useState<string>("hibbullah-pharmacy");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mainRef = useRef<HTMLElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Direct PDF resume download - no modal, no UI interruption
  const handleResume = () => {
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "A.Mahin-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Advanced Smooth Inertial Scrolling with Lenis synchronized with GSAP ScrollTrigger
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    // Connect Lenis scroll to ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Sync Lenis RAF with GSAP's central ticker
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Track scroll percentage for custom scroll indicator bar
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      gsap.ticker.remove(tickerCallback);
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  // Sync with browser URL / history
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith("/case-study/")) {
        const slug = path.replace("/case-study/", "");
        if (CASE_STUDIES[slug]) {
          setCurrentSlug(slug);
          setCurrentView("case-study");
        } else {
          setCurrentView("not-found");
        }
      } else if (path === "/about") {
        setCurrentView("about");
      } else if (path === "/archive") {
        setCurrentView("archive");
      } else if (path === "/contact") {
        setCurrentView("contact");
      } else if (path === "/brand") {
        setCurrentView("brand");
      } else if (path === "/" || path === "") {
        setCurrentView("home");
      } else {
        setCurrentView("not-found");
      }
    };

    handlePopState();
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // GSAP View Transition Animation with Text Reveal Stagger
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion || !mainRef.current) return;

    const tween = gsap.fromTo(
      mainRef.current,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
        clearProps: "transform",
      },
    );

    return () => {
      tween.revert();
    };
  }, [currentView, currentSlug]);

  const handleNavigate = (view: string, slug?: string) => {
    if (view === "case-study" && slug) {
      if (CASE_STUDIES[slug]) {
        setCurrentSlug(slug);
        setCurrentView("case-study");
        window.history.pushState({}, "", `/case-study/${slug}`);
      } else {
        setCurrentView("not-found");
        window.history.pushState({}, "", `/case-study/${slug}`);
      }
    } else if (view === "about") {
      setCurrentView("about");
      window.history.pushState({}, "", "/about");
    } else if (view === "archive") {
      setCurrentView("archive");
      window.history.pushState({}, "", "/archive");
    } else if (view === "contact") {
      setCurrentView("contact");
      window.history.pushState({}, "", "/contact");
    } else if (view === "brand") {
      setCurrentView("brand");
      window.history.pushState({}, "", "/brand");
    } else {
      setCurrentView("home");
      window.history.pushState({}, "", "/");
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <div className="min-h-screen bg-page text-text flex flex-col selection:bg-accent/20 selection:text-text relative">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Seamless Editorial Page Transition Veil */}
      <PageTransition
        viewKey={
          currentView + (currentView === "case-study" ? `-${currentSlug}` : "")
        }
      />

      {/* Liquid Turbulence & Displacement SVG Filter */}
      <LiquidFilter />

      {/* Strict Minimalist Black Dot Custom Cursor */}
      <CustomCursor />

      {/* Custom Horizontal Scroll Indicator Line (Award-winning subtle scroll bar) */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-text z-50 transition-all duration-75 origin-left pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Top Bar Navigation (Centered, 50% width on desktop, compact) */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area - Strict Minimalist Column with clearance for fixed floating navbar */}
      <main
        ref={mainRef}
        className={`flex-1 w-full ${currentView === "case-study" ? "max-w-[740px]" : "max-w-[640px]"} mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12`}
      >
        {currentView === "home" && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenResume={handleResume}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentView === "about" && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenResume={handleResume}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentView === "archive" && (
          <ArchivePage onNavigate={handleNavigate} />
        )}

        {currentView === "case-study" && (
          <CaseStudyPage slug={currentSlug} onNavigate={handleNavigate} />
        )}

        {currentView === "contact" && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenResume={handleResume}
          />
        )}

        {currentView === "brand" && <BrandPage onNavigate={handleNavigate} />}

        {currentView === "not-found" && (
          <div className="py-20 text-center space-y-4">
            <h1 className="text-2xl font-semibold text-text">
              Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-text-muted">
              The project or page you requested does not exist or has been
              archived.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleNavigate("home")}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-text text-page text-xs font-medium hover:bg-text/90 min-h-[44px]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Selected Work</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Cal.com Booking Modal */}
      <CalBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
