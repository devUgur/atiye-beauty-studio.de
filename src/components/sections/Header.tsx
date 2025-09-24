"use client";

import { Button } from "@/components/ui/Button";
import { Phone, Menu, X, Instagram } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type NavItem = { label: string; href: string; isHome?: boolean };

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);

  const navItems: NavItem[] = [
    { label: "Start", href: "/", isHome: true },
    { label: "Leistungen", href: "#leistungen" },
    { label: "Preise", href: "#preise" },
    { label: "FAQ", href: "#faq" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  // --- Smooth scroll state with threshold ---
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      // Smooth transition with threshold to avoid jump
      setIsScrolled(scrollY > 50);
    };
    onScroll(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Auto-detect active section based on scroll position ---
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter(item => !item.isHome)
        .map(item => ({
          id: item.href.replace('#', ''),
          element: document.querySelector(item.href),
          index: navItems.findIndex(navItem => navItem.href === item.href)
        }))
        .filter(section => section.element);

      if (sections.length === 0) return;

      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Find the section that's currently in view
      let activeSectionIndex = 0; // Default to first section (Start)

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop) {
            activeSectionIndex = section.index;
            break;
          }
        }
      }

      // Update active index if it changed
      if (activeSectionIndex !== activeIndex) {
        setPrevIndex(activeIndex);
        setActiveIndex(activeSectionIndex);
      }
    };

    // Initial check
    handleScroll();

    // Throttled scroll listener for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [activeIndex, navItems]);

  // --- Active underline state ---
  const [underlineRect, setUnderlineRect] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const measureUnderline = () => {
    const container = navContainerRef.current;
    const el = itemRefs.current[activeIndex];
    if (!container || !el) return;
    const rect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setUnderlineRect({
      left: rect.left - containerRect.left,
      width: rect.width,
    });
  };

  // Professional ResizeObserver for dynamic underline adjustment
  useLayoutEffect(() => {
    const container = navContainerRef.current;
    if (!container) return;

    // Initial measurement
    measureUnderline();

    // Create ResizeObserver to watch for size changes
    const resizeObserver = new ResizeObserver((entries) => {
      // Use requestAnimationFrame for smooth updates
      requestAnimationFrame(() => {
        measureUnderline();
      });
    });

    // Observe the container and all nav items
    resizeObserver.observe(container);
    itemRefs.current.forEach((item) => {
      if (item) resizeObserver.observe(item);
    });

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, [activeIndex, isScrolled]);

  // Fallback for window resize (covers edge cases)
  useEffect(() => {
    const onResize = () => {
      requestAnimationFrame(() => {
        measureUnderline();
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        const header = document.querySelector("header");
        const actualHeaderHeight = header ? (header as HTMLElement).offsetHeight : 64;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - actualHeaderHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const movingRight = activeIndex >= prevIndex;

  // Heights: top (hero) = 80–96px, scrolled = 64px
  const heroHeight = 80; // Slightly smaller for smoother transition
  const compactHeight = 64;

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b
        ${isScrolled || isMenuOpen ? "border-border backdrop-blur-md bg-white/80 dark:bg-[hsl(20_40%_15%)]/80" : "border-transparent"}
      `}
      initial={false}
      animate={{ 
        height: isScrolled ? compactHeight : heroHeight,
        backgroundColor: (isScrolled || isMenuOpen) ? "var(--header-bg-scrolled)" : "var(--header-bg-transparent)",
        borderBottomColor: (isScrolled || isMenuOpen) ? "var(--header-border-scrolled)" : "var(--header-border-transparent)"
      }}
      style={{ 
        willChange: "height, background-color, border-bottom-color",
        WebkitBackdropFilter: (isScrolled || isMenuOpen) ? "blur(12px)" : "none",
        backdropFilter: (isScrolled || isMenuOpen) ? "blur(12px)" : "none",
      }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 25, 
        mass: 0.8,
        duration: 0.3
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between transition-[padding] duration-300">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick("/", true, 0)}
              className="font-serif font-semibold text-primary hover:text-accent transition-all duration-500 ease-out focus:outline-none"
              style={{
                fontSize: isScrolled ? "1.125rem" : "1.25rem",
                lineHeight: isScrolled ? "1.5rem" : "1.75rem",
                transition: "font-size 0.5s ease-out, line-height 0.5s ease-out"
              }}
            >
              ATIYE Beauty Studio
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="relative hidden md:flex items-center">
            <nav ref={navContainerRef} className="relative flex items-center space-x-8 pb-2">
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
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  onClick={() => handleNavClick(item.href, item.isHome, idx)}
                  className={`font-medium transition-all duration-500 ease-out focus:outline-none ${
                    idx === activeIndex ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                  style={{
                    fontSize: isScrolled ? "0.875rem" : "1rem",
                    transition: "font-size 0.5s ease-out, color 0.3s ease-out"
                  }}
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
              <Phone 
                className="transition-all duration-500 ease-out"
                style={{
                  height: isScrolled ? "1.25rem" : "1.5rem",
                  width: isScrolled ? "1.25rem" : "1.5rem"
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/atiye_beautystudio?igsh=MTM3dDB2dXQ4c2R5cg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <Instagram 
                className="transition-all duration-500 ease-out"
                style={{
                  height: isScrolled ? "1.25rem" : "1.5rem",
                  width: isScrolled ? "1.25rem" : "1.5rem"
                }}
              />
            </a>
            <Button
              className="bg-primary hover:bg-accent text-primary-foreground transition-all duration-500 ease-out"
              style={{
                paddingTop: isScrolled ? "0.5rem" : "0.75rem",
                paddingBottom: isScrolled ? "0.5rem" : "0.75rem",
                paddingLeft: isScrolled ? "1rem" : "1.25rem",
                paddingRight: isScrolled ? "1rem" : "1.25rem",
                fontSize: isScrolled ? "0.875rem" : "1rem"
              }}
            >
              Termin vereinbaren
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 w-full absolute left-0 right-0 top-full z-50
                       backdrop-blur-md border-b border-border"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ 
              backgroundColor: "var(--header-bg-scrolled)",
              WebkitBackdropFilter: "blur(12px)",
              backdropFilter: "blur(12px)",
            }}
          >
            <nav className="flex flex-col space-y-4 w-full px-4">
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
                <a
                  href="https://www.instagram.com/atiye_beautystudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <ThemeToggle />
                <Button className="bg-primary hover:bg-accent text-primary-foreground">Termin vereinbaren</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
