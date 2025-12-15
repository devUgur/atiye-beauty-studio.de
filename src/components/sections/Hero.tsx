"use client";

import { ArrowRight, Shield, Zap, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
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

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Check if elements are already in viewport and activate them
    const checkAndActivate = (element: HTMLElement | null) => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200;
      
      if (isVisible) {
        element.classList.add("active");
      } else {
        observer.observe(element);
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      checkAndActivate(textRef.current);
      checkAndActivate(visualRef.current);
    });

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (visualRef.current) observer.unobserve(visualRef.current);
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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
      {/* Mobile Background Images - Full Background */}
      <div className="absolute inset-0 lg:hidden z-0">
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
              className="object-cover opacity-60 dark:opacity-50"
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 0px"
            />
          </div>
        ))}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/50 dark:from-black/40 dark:via-transparent dark:to-black/60 z-10 pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 z-10 reveal" ref={textRef}>
          <div className="inline-flex items-center space-x-2 bg-white/40 dark:bg-stone-900/40 backdrop-blur-sm border border-stone-200/50 dark:border-stone-800 px-3 py-1 rounded-full text-sm text-stone-600 dark:text-stone-400 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>NISV-Zertifiziertes Studio</span>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl tracking-tight font-medium text-stone-900 dark:text-white leading-[1.1]">
            Dauerhaft <br />
            <span className="text-gradient italic pr-2">hautschön.</span>
          </h1>

          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-lg">
            Erleben Sie die Freiheit seidig glatter Haut. Modernste Laser-Technologie für Sie & Ihn – sicher, schonend und effektiv.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/termin"
              className="group flex items-center justify-center gap-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-950 px-8 py-4 rounded-full text-base font-medium hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-stone-200/50 dark:shadow-none"
            >
              <span>Kostenlose Beratung</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 bg-white/30 dark:bg-stone-800/30 backdrop-blur-md border border-stone-200/50 dark:border-stone-700/50 text-stone-900 dark:text-stone-100 px-8 py-4 rounded-full text-base font-medium hover:bg-white/50 dark:hover:bg-stone-800/50 transition-all duration-300"
            >
              Preise ansehen
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 flex gap-8 border-t border-stone-200/40 dark:border-stone-800/40">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/40 dark:bg-stone-800/40">
                <Shield className="w-5 h-5 text-stone-700 dark:text-stone-300" />
              </div>
              <div className="text-sm leading-tight">
                <p className="font-semibold text-stone-900 dark:text-white">Geprüft</p>
                <p className="text-stone-500">NISV-Norm</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/40 dark:bg-stone-800/40">
                <Zap className="w-5 h-5 text-stone-700 dark:text-stone-300" />
              </div>
              <div className="text-sm leading-tight">
                <p className="font-semibold text-stone-900 dark:text-white">High-Tech</p>
                <p className="text-stone-500">Diodenlaser</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual / Image Slider - Desktop */}
        <div
          className="relative h-full min-h-[500px] w-full hidden lg:block reveal delay-200"
          ref={visualRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-stone-200 to-bronze-400/20 dark:from-stone-800 dark:to-stone-900 rounded-[2rem] overflow-hidden shadow-2xl shadow-bronze-900/10">
            {/* Image Slider Container */}
            <div className="absolute inset-0 opacity-80 mix-blend-overlay">
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
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 group"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 group"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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

            {/* Floating card overlay */}
            <div className="absolute bottom-10 left-10 right-10 bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl animate-float shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium opacity-80">Behandlungserfolg</p>
                  <p className="text-white text-2xl font-serif">Sichtbar glatter.</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-lg shadow-white/10">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
