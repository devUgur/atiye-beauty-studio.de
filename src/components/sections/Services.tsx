"use client";

import { Sparkles, Heart, UserCheck, Sun, User, Check } from "lucide-react";
import { useEffect, useRef } from "react";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const revealElements = document.querySelectorAll('#services .reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 100);
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
    revealElements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        setTimeout(() => {
          el.classList.add("active");
        }, index * 100);
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
    <section id="services" className="py-32 bg-stone-50/30 dark:bg-stone-950/40 backdrop-blur-md relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal" ref={sectionRef}>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6 dark:text-stone-100">
            Unsere Leistungen
          </h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-xl">
            Präzision trifft auf Pflege. Wir bieten maßgeschneiderte Lösungen für jeden Hauttyp und jedes Bedürfnis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className="group relative p-8 rounded-3xl bg-white/60 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 hover:border-bronze-400/50 transition-colors duration-300 overflow-hidden reveal"
            ref={(el) => {
              cardsRef.current[0] = el;
            }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Sun className="w-32 h-32 text-stone-400" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-stone-800 flex items-center justify-center mb-6 shadow-sm ring-1 ring-stone-900/5 dark:ring-white/10">
                <Sparkles className="w-6 h-6 text-bronze-500" />
              </div>
              <h3 className="font-serif text-2xl font-medium mb-3 dark:text-stone-100">
                Gesicht & Hals
              </h3>
              <p className="text-stone-600 dark:text-stone-400 mb-6 text-base">
                Präzise Behandlung sensibler Bereiche. Ideal für Oberlippe, Kinn und Wangen.
              </p>
              <div className="flex items-center text-sm font-medium text-stone-900 dark:text-stone-200">
                <span>Ab 35€</span>
                <span className="mx-2 text-bronze-400">•</span>
                <span>Ca. 15 Min</span>
              </div>
            </div>
          </div>

          {/* Card 2 (Featured) */}
          <div
            className="group relative p-8 rounded-3xl bg-stone-900 dark:bg-stone-800 text-white border border-stone-800 md:-mt-4 shadow-2xl shadow-stone-200/20 dark:shadow-none overflow-hidden reveal delay-100"
            ref={(el) => {
              cardsRef.current[1] = el;
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm ring-1 ring-white/20">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="bg-bronze-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-bronze-900/20">
                  Beliebt
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium mb-3">Körper Damen</h3>
              <p className="text-stone-300 mb-6 text-base">
                Komplettpakete für ein rundum seidiges Gefühl. Achseln, Beine und Bikini-Zone.
              </p>
              <ul className="space-y-2 mb-8 text-stone-300 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-bronze-400" />
                  Inklusive Nachsorge
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-bronze-400" />
                  Schmerzarm
                </li>
              </ul>
              <a
                href="/termin"
                className="inline-block w-full text-center py-3 rounded-2xl bg-white text-stone-900 font-medium hover:bg-stone-100 transition-colors"
              >
                Termin vereinbaren
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="group relative p-8 rounded-3xl bg-white/60 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 hover:border-bronze-400/50 transition-colors duration-300 overflow-hidden reveal delay-200"
            ref={(el) => {
              cardsRef.current[2] = el;
            }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <User className="w-32 h-32 text-stone-400" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-stone-800 flex items-center justify-center mb-6 shadow-sm ring-1 ring-stone-900/5 dark:ring-white/10">
                <UserCheck className="w-6 h-6 text-bronze-500" />
              </div>
              <h3 className="font-serif text-2xl font-medium mb-3 dark:text-stone-100">
                Körper Herren
              </h3>
              <p className="text-stone-600 dark:text-stone-400 mb-6 text-base">
                Effektive Haarentfernung für Rücken, Brust und Schultern. Definierter Look.
              </p>
              <div className="flex items-center text-sm font-medium text-stone-900 dark:text-stone-200">
                <span>Ab 55€</span>
                <span className="mx-2 text-bronze-400">•</span>
                <span>Individuelle Pakete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
