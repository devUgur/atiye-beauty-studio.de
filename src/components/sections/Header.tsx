"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isTerminPage = pathname === "/termin";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  const navItems = [
    { label: "Leistungen", href: "#services" },
    { label: "Preise", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Über uns", href: "#about" },
  ];

  // Helper function to get the correct href
  const getHref = (hash: string) => {
    // If we're on the termin page, navigate to home page with hash
    if (isTerminPage) {
      return `/${hash}`;
    }
    // Otherwise, use hash anchor
    return hash;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      } bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl backdrop-saturate-150 border-b border-stone-200/50 dark:border-stone-800/50`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-stone-900 dark:text-stone-50 z-50 relative flex-shrink-0"
        >
          <span className="whitespace-nowrap">
            ATIYE <span className="text-stone-500 text-base sm:text-lg italic">Beauty Studio</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm xl:text-base font-medium text-stone-600 dark:text-stone-300 flex-shrink-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={getHref(item.href)}
              className="hover:text-bronze-500 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/termin"
            className="laser-button px-4 xl:px-5 py-2 rounded-full text-white dark:text-stone-900 font-medium relative z-0 text-sm xl:text-base whitespace-nowrap"
          >
            Termin buchen
          </a>
          <ThemeToggle />
        </div>

        {/* Tablet: Show CTA Button + Menu */}
        <div className="hidden md:flex lg:hidden items-center gap-4">
          <a
            href="/termin"
            className="laser-button px-4 py-2 rounded-full text-white dark:text-stone-900 font-medium relative z-0 text-sm whitespace-nowrap"
          >
            Termin buchen
          </a>
          <ThemeToggle />
          <button
            className="z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-stone-900 dark:text-stone-50" />
            ) : (
              <Menu className="w-6 h-6 text-stone-900 dark:text-stone-50" />
            )}
          </button>
        </div>

        {/* Mobile: Show Menu Button + Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-stone-900 dark:text-stone-50" />
            ) : (
              <Menu className="w-6 h-6 text-stone-900 dark:text-stone-50" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden border-t border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-950/95"
          style={{
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-3 sm:space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={getHref(item.href)}
                className="block text-base font-medium text-stone-600 dark:text-stone-300 hover:text-bronze-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/termin"
              className="laser-button block w-full text-center px-5 py-2.5 rounded-full text-white dark:text-stone-900 font-medium relative z-0 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Termin buchen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
