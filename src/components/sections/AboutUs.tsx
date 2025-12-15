"use client";

import Image from "next/image";
import { Shield, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import studio01 from "@/assets/studio/01.png";
import studio02 from "@/assets/studio/02.png";
import studio03 from "@/assets/studio/03.png";
import studio04 from "@/assets/studio/04.png";

// Studio Bilder
const studioImages = [
  { src: studio01, alt: "Studio Bild 1" },
  { src: studio02, alt: "Studio Bild 2" },
  { src: studio03, alt: "Studio Bild 3" },
  { src: studio04, alt: "Studio Bild 4" },
];

const AboutUs = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll('#about .reveal');
    
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

  // Auto-slide functionality
  useEffect(() => {
    if (isHovered) return; // Pause on hover

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % studioImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + studioImages.length) % studioImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % studioImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="about" className="py-32 bg-white/60 dark:bg-stone-950/60 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div 
          className="relative reveal" 
          ref={imageRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-tr from-stone-200 to-bronze-400/20 dark:from-stone-800 dark:to-stone-900">
            {/* Image Slider */}
            {studioImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-[2s]"
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 group"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 group"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {studioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "w-8 bg-white/80"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Gehe zu Bild ${index + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Stats Badge */}
          <div className="absolute -bottom-6 -right-6 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 p-8 rounded-2xl shadow-xl z-30">
            <p className="text-4xl font-serif font-medium">500+</p>
            <p className="text-sm font-medium opacity-80 mt-1">Zufriedene Kunden</p>
          </div>
        </div>

        <div className="reveal delay-200" ref={contentRef}>
          <div className="inline-flex items-center space-x-2 bg-white/40 dark:bg-stone-900/40 backdrop-blur-sm border border-stone-200/50 dark:border-stone-800 px-3 py-1 rounded-full text-sm text-stone-600 dark:text-stone-400 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-bronze-500"></span>
            <span>Unsere Geschichte</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 dark:text-stone-100">
            Über Uns
          </h2>
          <div className="space-y-6">
            {/* Hero Statement */}
            <div className="mb-6 flex flex-wrap items-center gap-3 md:gap-4">
              <p className="text-xl md:text-2xl font-serif font-medium text-stone-900 dark:text-stone-100 leading-tight">
                Dauerhaft schön.
              </p>
              <span className="text-stone-300 dark:text-stone-700">•</span>
              <p className="text-xl md:text-2xl font-serif font-medium text-bronze-600 dark:text-bronze-400 italic leading-tight">
                Persönlich.
              </p>
              <span className="text-stone-300 dark:text-stone-700">•</span>
              <p className="text-xl md:text-2xl font-serif font-medium text-stone-900 dark:text-stone-100 leading-tight">
                Professionell.
              </p>
            </div>

            {/* Main Content - Moderner strukturiert */}
            <div className="space-y-6 text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              <div className="p-6 rounded-xl bg-gradient-to-br from-stone-50/80 to-bronze-50/40 dark:from-stone-900/40 dark:to-bronze-950/20 border border-stone-200/60 dark:border-stone-800/60 backdrop-blur-sm">
                <p className="text-lg md:text-xl text-stone-700 dark:text-stone-300 leading-relaxed">
                  Willkommen bei{" "}
                  <span className="font-serif font-semibold text-stone-900 dark:text-stone-100 text-xl md:text-2xl">
                    ATIYE Beauty Studio
                  </span>
                  {" "}– Ihrem vertrauensvollen Partner für dauerhaft schöne Haut.
                </p>
              </div>

              {/* Highlight Box für Erfahrung */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-bronze-50/50 to-stone-50/50 dark:from-bronze-950/20 dark:to-stone-900/30 border border-bronze-200/30 dark:border-bronze-800/30 backdrop-blur-sm">
                <p className="text-stone-700 dark:text-stone-300">
                  Mit über <span className="font-bold text-bronze-700 dark:text-bronze-400 text-lg">2 Jahren Erfahrung</span> in der 
                  professionellen Laser-Haarentfernung haben wir bereits Hunderte von zufriedenen Kunden 
                  auf ihrem Weg zu seidig glatter Haut begleitet.
                </p>
              </div>
            </div>

            {/* Quote - Moderner gestylt */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-stone-100/60 to-bronze-50/40 dark:from-stone-900/40 dark:to-bronze-950/20 border border-bronze-200/40 dark:border-bronze-800/30 backdrop-blur-md shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-1 h-12 bg-gradient-to-b from-bronze-500 to-bronze-300 rounded-full"></div>
                </div>
                <p className="text-lg md:text-xl font-serif italic text-stone-800 dark:text-stone-200 leading-relaxed">
                  "Jeder Mensch ist einzigartig – und so sollte auch jede Behandlung sein."
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="flex gap-4 group">
              <Shield className="w-10 h-10 text-bronze-500 group-hover:scale-110 transition-transform flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-stone-900 dark:text-stone-100">
                  NISV-Zertifiziert
                </h4>
                <p className="text-sm text-stone-500 mt-1">
                  Höchste Sicherheitsstandards nach deutscher Verordnung.
                </p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <Users className="w-10 h-10 text-bronze-500 group-hover:scale-110 transition-transform flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-stone-900 dark:text-stone-100">Individuell</h4>
                <p className="text-sm text-stone-500 mt-1">
                  Maßgeschneiderte Behandlungspläne für jeden Hauttyp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
