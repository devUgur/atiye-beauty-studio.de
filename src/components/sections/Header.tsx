"use client";

import { Button } from "@/components/ui/Button";
import { Phone, Menu, X } from "lucide-react";
import { Instagram } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type NavItem = { label: string; href: string; isHome?: boolean };

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Start", href: "/", isHome: true },
    { label: "Leistungen", href: "#leistungen" },
    { label: "Preise", href: "#preise" },
    { label: "FAQ", href: "#faq" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  // --- Active underline state ---
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);
  const [underlineRect, setUnderlineRect] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Helper: measure underline position from current activeIndex
  const measureUnderline = () => {
    const container = navContainerRef.current;
    const el = itemRefs.current[activeIndex];
    if (!container || !el) return;
    
    // Get the full button dimensions including padding
    const rect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    setUnderlineRect({
      left: rect.left - containerRect.left,
      width: rect.width,
    });
  };

  // Measure on mount & when activeIndex changes
  useLayoutEffect(() => {
    measureUnderline();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // Re-measure on resize
  useEffect(() => {
    const onResize = () => measureUnderline();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Optional: set initial active by hash (falls Nutzer per URL direkt kommt)
  useEffect(() => {
    const hash = window.location.hash;
    const idx = navItems.findIndex((n) => (!hash && n.isHome) || (hash && n.href === hash));
    if (idx >= 0) {
      setActiveIndex(idx);
      setPrevIndex(idx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavClick = (href: string, isHome?: boolean, idx?: number) => {
    if (typeof idx === "number") {
      setPrevIndex(activeIndex);
      setActiveIndex(idx);
    }

    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 64; // Header height (h-16 = 64px)
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Transition: wir lassen die Linie entlang der X-Position + Breite gleiten.
  // Richtungserkennung (nur für evtl. leicht andere Easing je Richtung)
  const movingRight = activeIndex >= prevIndex;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick("/", true, 0)}
              className="text-xl lg:text-2xl font-serif font-semibold text-primary hover:text-accent transition-colors focus:outline-none"
            >
              ATIYE Beauty Studio
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="relative hidden md:flex items-center">
            <nav
              ref={navContainerRef}
              className="relative flex items-center space-x-8 pb-2"
            >
              {/* Active underline FIRST to avoid space-x margin */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-0 h-[2px] bg-primary rounded-full"
                animate={{ x: underlineRect.left, width: underlineRect.width }}
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                  mass: 0.6,
                  velocity: movingRight ? 20 : -20,
                }}
                style={{ left: 0, willChange: "transform,width" }}
              />

              {navItems.map((item, idx) => (
                <button
                  key={item.label}
                  ref={(el) => { itemRefs.current[idx] = el; }}
                  onClick={() => handleNavClick(item.href, item.isHome, idx)}
                  className={`text-sm font-medium transition-colors focus:outline-none ${
                    idx === activeIndex ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                  aria-current={idx === activeIndex ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+4912345678900" className="text-primary hover:text-accent transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/atiyebeautystudio" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <Button className="bg-primary hover:bg-accent text-primary-foreground">
              Termin vereinbaren
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, idx) => (
                <button
                  key={item.label}
                  onClick={() => {
                    handleNavClick(item.href, item.isHome, idx);
                    setIsMenuOpen(false);
                  }}
                  className={`text-sm font-medium transition-colors text-left focus:outline-none ${
                    idx === activeIndex ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 flex items-center space-x-4">
                <a href="tel:+4912345678900" className="text-primary hover:text-accent transition-colors">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/atiyebeautystudio" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <Button className="bg-primary hover:bg-accent text-primary-foreground">
                  Termin vereinbaren
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
