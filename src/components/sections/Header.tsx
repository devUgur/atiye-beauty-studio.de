"use client";

import { Button } from "@/components/ui/Button";
import { Phone, Menu, X, Instagram } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type NavItem = { label: string; href: string; isHome?: boolean };

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);

  // Basishöhen
  const heroHeight = 80;     // Headerhöhe oben
  const compactHeight = 64;  // Headerhöhe nach Scroll
  const baseHeaderHeight = isScrolled ? compactHeight : heroHeight;

  // --- Menü-Höhe messen (für nahtlose Header-Höhen-Animation) ---
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useLayoutEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    const measure = () => setMenuHeight(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    // auch bei Schriftgrößenwechsel / viewport resize
    const onResize = () => requestAnimationFrame(measure);
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // optional: Scroll-Lock (auskommentiert lassen, falls gewünscht aktivieren)
  /*
  useEffect(() => {
    const root = document.documentElement;
    if (isMenuOpen) root.classList.add("overflow-hidden");
    else root.classList.remove("overflow-hidden");
    return () => root.classList.remove("overflow-hidden");
  }, [isMenuOpen]);
  */

  // Scrollstatus
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC schließt Menü
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  // Sections beobachten (deins – leicht gestrafft)
  const navItems: NavItem[] = useMemo(() => [
    { label: "Start", href: "/", isHome: true },
    { label: "Leistungen", href: "#leistungen" },
    { label: "Preise", href: "#preise" },
    { label: "FAQ", href: "#faq" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Kontakt", href: "#kontakt" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter((i) => !i.isHome)
        .map((i) => ({ sel: i.href, index: navItems.findIndex((n) => n.href === i.href) }))
        .map(({ sel, index }) => ({ el: document.querySelector(sel) as HTMLElement | null, index }))
        .filter((s) => s.el) as { el: HTMLElement; index: number }[];
      const pos = window.scrollY + 100;
      let idx = 0;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (pos >= sections[i].el.offsetTop) { idx = sections[i].index; break; }
      }
      if (idx !== activeIndex) { setPrevIndex(activeIndex); setActiveIndex(idx); }
    };
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { handleScroll(); ticking = false; });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeIndex, navItems]);

  // Underline (deins)
  const [underlineRect, setUnderlineRect] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const measureUnderline = useCallback(() => {
    const container = navContainerRef.current;
    const el = itemRefs.current[activeIndex];
    if (!container || !el) return;
    
    const rect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setUnderlineRect({ 
      left: rect.left - containerRect.left, 
      width: rect.width 
    });
  }, [activeIndex]);
  useLayoutEffect(() => {
    const container = navContainerRef.current;
    if (!container) return;
    measureUnderline();
    const ro = new ResizeObserver(() => requestAnimationFrame(measureUnderline));
    ro.observe(container);
    itemRefs.current.forEach((i) => i && ro.observe(i));
    return () => ro.disconnect();
  }, [activeIndex, isScrolled, measureUnderline]);
  useEffect(() => {
    const onResize = () => requestAnimationFrame(measureUnderline);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measureUnderline]);

  useEffect(() => {
    const hash = window.location.hash;
    const idx = navItems.findIndex((n) => (!hash && n.isHome) || (hash && n.href === hash));
    if (idx >= 0) { setActiveIndex(idx); setPrevIndex(idx); }
  }, [navItems]);

  const handleNavClick = (href: string, isHome?: boolean, idx?: number) => {
    if (typeof idx === "number") { setPrevIndex(activeIndex); setActiveIndex(idx); }
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href) as HTMLElement | null;
      if (el) {
        const h = baseHeaderHeight; // beim Scrollen kompakte Höhe berücksichtigen
        const y = el.getBoundingClientRect().top + window.pageYOffset - h;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const movingRight = activeIndex >= prevIndex;

  // --- NAHTLOSE HÖHEN-ANIMATION DES EINZIGEN HEADER-ELEMENTS ---
  const targetHeaderHeight = baseHeaderHeight + (isMenuOpen ? menuHeight : 0);

  return (
     <motion.header
       className={`
         fixed inset-x-0 top-0 z-[70]
         backdrop-blur-md
         supports-[backdrop-filter]:bg-background/80 bg-background/80
         border-b border-border/60
       `}
       initial={false}
       animate={{ 
         height: targetHeaderHeight,
         backgroundColor: isScrolled || isMenuOpen ? "hsl(var(--background) / 0.8)" : "hsl(var(--background) / 0)",
         borderBottomColor: isScrolled || isMenuOpen ? "hsl(var(--border) / 0.6)" : "hsl(var(--border) / 0)"
       }}
       transition={{ 
         type: "spring", 
         stiffness: 300, 
         damping: 30, 
         mass: 0.8,
         duration: 0.4
       }}
       style={{
         WebkitBackdropFilter: "blur(12px)",
         // iOS Notch padding (falls du Safe-Area willst)
         paddingTop: "env(safe-area-inset-top)",
         // Sofortige korrekte Höhe beim Laden
         height: targetHeaderHeight,
       }}
     >
      {/* TOPBAR */}
      <div 
        className="container mx-auto px-4 lg:px-8" 
        style={{ height: baseHeaderHeight }}
      >
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
           <motion.div 
             className="flex items-center"
             animate={{ 
               scale: isScrolled ? 0.95 : 1,
               y: isScrolled ? 1 : 0
             }}
             transition={{ 
               type: "spring", 
               stiffness: 400, 
               damping: 30, 
               mass: 0.6 
             }}
           >
            <button
              onClick={() => handleNavClick("/", true, 0)}
               className="font-serif font-semibold text-primary hover:text-accent transition-all focus:outline-none"
               style={{ 
                 fontSize: isScrolled ? "1.125rem" : "1.25rem", 
                 lineHeight: isScrolled ? "1.5rem" : "1.75rem",
                 transition: "font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1), line-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
               }}
            >
              ATIYE Beauty Studio
            </button>
           </motion.div>

          {/* Desktop Nav */}
          <div className="relative hidden md:flex items-center">
            <nav ref={navContainerRef} className="relative flex items-center space-x-8 pb-2">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-0 h-[2px] bg-primary rounded-full"
                animate={{ x: underlineRect.left, width: underlineRect.width }}
                initial={false}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 35, 
                  mass: 0.8,
                  velocity: movingRight ? 15 : -15
                }}
                style={{ left: 0, willChange: "transform,width" }}
              />
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.label}
                  ref={(el) => { itemRefs.current[idx] = el; }}
                  onClick={() => handleNavClick(item.href, item.isHome, idx)}
                  className={`font-medium transition-all focus:outline-none ${idx === activeIndex ? "text-primary" : "text-foreground hover:text-primary"}`}
                  style={{ 
                    fontSize: isScrolled ? "0.875rem" : "1rem",
                    transition: "font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  animate={{
                    scale: isScrolled ? 0.95 : 1,
                    y: isScrolled ? 1 : 0
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30, 
                    mass: 0.6 
                  }}
                  aria-current={idx === activeIndex ? "page" : undefined}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* CTAs (Desktop) */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            animate={{ 
              scale: isScrolled ? 0.95 : 1,
              y: isScrolled ? 1 : 0
            }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 30, 
              mass: 0.6 
            }}
          >
            <a href="tel:+4912345678900" className="text-primary hover:text-accent transition-colors">
              <Phone className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://www.instagram.com/atiye_beautystudio?igsh=MTM3dDB2dXQ4c2R5cg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <Instagram className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <Button className="bg-primary hover:bg-accent text-primary-foreground">Termin vereinbaren</Button>
            <ThemeToggle />
          </motion.div>

          {/* Mobile Toggle */}
          <motion.button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            animate={{ 
              scale: isScrolled ? 0.95 : 1,
              y: isScrolled ? 2 : 0
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25, 
              mass: 0.8,
              duration: 0.4
            }}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU – liegt IM Header (selber Blur-Layer), keine extra Overlays */}
      <div
        ref={menuRef}
        className={`md:hidden container mx-auto px-4 lg:px-8 overflow-hidden`}
        // Wichtig: menuRef misst seine natürliche Höhe via scrollHeight (visibility via CSS steuern)
        style={{
          // Wenn zu lang, innerhalb des Headers scrollen lassen – keine 100dvh Bugs:
          maxHeight: "calc(100dvh - env(safe-area-inset-top) - 16px)",
          // Sichtbarkeit für Screenreader:
          visibility: isMenuOpen ? "visible" : "hidden",
        }}
        aria-hidden={!isMenuOpen}
        id="mobile-menu"
      >
        <motion.div
          initial={false}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            y: isMenuOpen ? 0 : -8,
            height: isMenuOpen ? "auto" : 0
          }}
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="pt-3 pb-6 border-t border-border/60 overflow-hidden"
        >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, idx) => (
              <motion.button
                  key={item.label}
                onClick={() => handleNavClick(item.href, item.isHome, idx)}
                className={`text-base font-medium transition-colors text-left focus:outline-none ${
                    idx === activeIndex ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  x: isMenuOpen ? 0 : -20 
                }}
                transition={{ 
                  delay: isMenuOpen ? idx * 0.1 : 0,
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
                >
                  {item.label}
              </motion.button>
            ))}
            <motion.div 
              className="pt-3 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                y: isMenuOpen ? 0 : 20 
              }}
              transition={{ 
                delay: isMenuOpen ? navItems.length * 0.1 + 0.1 : 0,
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
                <a href="tel:+4912345678900" className="text-primary hover:text-accent transition-colors">
                  <Phone className="h-5 w-5" />
                </a>
              <a href="https://www.instagram.com/atiye_beautystudio" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <ThemeToggle />
              <Button className="bg-primary hover:bg-accent text-primary-foreground">Termin vereinbaren</Button>
            </motion.div>
            </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
