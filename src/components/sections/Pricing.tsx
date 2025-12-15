"use client";

import { useState, useEffect, useRef } from "react";
import { AreaCards } from "./pricing/AreaCards";
import { PackagesView } from "./pricing/PackagesView";
import { TypeTabs } from "./pricing/TypeTabs";
import { Info } from "lucide-react";

const Pricing = () => {
  const [viewType, setViewType] = useState<"einzelbehandlungen" | "pakete">("einzelbehandlungen");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll('#pricing .reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    // Fallback: if elements are already in viewport, activate them immediately
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        el.classList.add("active");
        observer.unobserve(el);
      }
    });

    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-white/50 dark:bg-stone-950/50 backdrop-blur-sm" style={{ contain: "layout style paint" }}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-800 to-transparent" />

      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 mb-12 text-center reveal" ref={headerRef}>
        <div className="inline-flex items-center space-x-2 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 px-3 py-1 rounded-full text-sm text-stone-600 dark:text-stone-400 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-bronze-500"></span>
          <span>Transparenz</span>
        </div>

        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight font-medium text-stone-900 dark:text-white mb-6">
          Unsere <span className="text-gradient italic pr-2">Preise.</span>
        </h2>

        <p className="text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
          Faire Preise für erstklassige Ergebnisse. Inklusive MwSt., kostenloser Beratung und individueller Betreuung.
        </p>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16 reveal" ref={contentRef}>
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Central Switcher */}
          <div className="flex justify-center w-full reveal">
            <TypeTabs selected={viewType} onSelect={setViewType} />
          </div>

          {/* Dynamic Content */}
          <div className="min-h-[400px]">
            {viewType === "einzelbehandlungen" ? (
              <AreaCards />
            ) : (
              <PackagesView />
            )}
          </div>

          {/* Info Box */}
          <div className="flex justify-center reveal">
            <div className="inline-flex items-start gap-3 p-4 rounded-lg bg-stone-100 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 max-w-2xl text-left">
              <Info className="w-5 h-5 text-bronze-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-stone-600 dark:text-stone-400">
                <span className="font-semibold text-stone-900 dark:text-stone-200">Hinweis:</span> Bei starker Behaarung (z.B. Rücken beim Mann) kann der Preis je nach Aufwand variieren. Genaue Einschätzung erfolgt im unverbindlichen Beratungsgespräch.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center reveal opacity-50">
        <p className="text-sm text-muted-foreground font-body">
          Alle Preise inkl. MwSt. · Kostenlose Beratung vor Ort
        </p>
      </footer>
    </section>
  );
};

export default Pricing;
