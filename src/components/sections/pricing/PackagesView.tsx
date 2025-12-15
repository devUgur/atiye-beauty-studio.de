"use client";

import { Sparkles, Calculator } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { calculateTotalPrice, getPriceForArea } from "./prices";

interface Package {
  name: string;
  areas: string[];
  originalPrice: number; // Berechnet aus Einzelpreisen
  discountedPrice: number; // Paketpreis
  savings: number; // Berechnet
  savingsPercent: number; // Berechnet
  note?: string;
}

// Pakete für Damen - basierend auf neuen Daten
const paketeFrauRaw = [
  {
    name: "PAKETPREIS 1",
    areas: ["Achseln", "Arme", "Bauch ab", "Brustwarzen", "Bikini / Intimbereich", "Füße", "Gesicht komplett", "Hände", "Rücken"],
    discountedPrice: 245,
    note: "Damen",
  },
  {
    name: "PAKETPREIS 2",
    areas: ["Unterschenkel", "Achseln", "Bauch ab", "Bikini / Intimbereich", "Brustwarzen", "Füße", "Gesicht komplett", "Rücken"],
    discountedPrice: 290,
    note: "Damen",
  },
  {
    name: "PAKETPREIS 3",
    areas: ["Oberschenkel", "Achseln", "Bauch ab", "Bikini / Intimbereich", "Brustwarzen", "Füße", "Gesicht komplett", "Rücken"],
    discountedPrice: 299,
    note: "Damen",
  },
  {
    name: "PAKETPREIS 4",
    areas: ["Oberschenkel", "Achseln", "Bauch ab", "Bikini / Intimbereich", "Brustwarzen", "Füße", "Gesicht komplett", "Rücken"],
    discountedPrice: 350,
    note: "Damen",
  },
  {
    name: "PAKETPREIS 5",
    areas: ["Oberschenkel", "Achseln", "Bauch ab", "Bikini / Intimbereich", "Brustwarzen", "Füße", "Gesicht komplett", "Rücken"],
    discountedPrice: 390,
    note: "Damen",
  },
];

// Pakete für Herren - basierend auf neuen Daten
const paketeMannRaw = [
  {
    name: "PAKETPREIS 1",
    areas: ["Augenbrauen", "Bauch ab", "Brust", "Hals", "Nacken", "Oberarme", "Schultern", "Wangenkontur"],
    discountedPrice: 300,
    note: "Herren",
  },
  {
    name: "PAKETPREIS 2",
    areas: ["Augenbrauen", "Hals", "Nacken", "Oberarme", "Rücken komplett mit Schulter", "Wangenkontur"],
    discountedPrice: 300,
    note: "Herren",
  },
  {
    name: "PAKETPREIS 3",
    areas: ["Augenbrauen", "Bauch ab", "Brust", "Hals", "Nacken", "Oberarme", "Rücken komplett mit Schulter", "Wangenkontur"],
    discountedPrice: 490,
    note: "Herren",
  },
];

// Berechne Pakete mit automatischer Preisberechnung
function calculatePackages(rawPackages: typeof paketeFrauRaw): Package[] {
  return rawPackages.map(pkg => {
    try {
      const originalPrice = calculateTotalPrice(pkg.areas);
      const savings = Math.max(0, originalPrice - pkg.discountedPrice);
      const savingsPercent = originalPrice > 0 ? Math.round((savings / originalPrice) * 100) : 0;
      
      return {
        name: pkg.name,
        areas: pkg.areas,
        originalPrice: originalPrice || pkg.discountedPrice, // Fallback falls Berechnung fehlschlägt
        discountedPrice: pkg.discountedPrice,
        savings,
        savingsPercent,
        note: pkg.note,
      };
    } catch (error) {
      console.error(`Fehler beim Berechnen von Paket ${pkg.name}:`, error);
      // Fallback: Verwende discountedPrice als originalPrice
      return {
        name: pkg.name,
        areas: pkg.areas,
        originalPrice: pkg.discountedPrice,
        discountedPrice: pkg.discountedPrice,
        savings: 0,
        savingsPercent: 0,
        note: pkg.note,
      };
    }
  });
}

const paketeFrau = calculatePackages(paketeFrauRaw);
const paketeMann = calculatePackages(paketeMannRaw);
const unifiedPakete = [...paketeFrau, ...paketeMann];

export function PackagesView() {
  const [selectedGender, setSelectedGender] = useState<"women" | "men">("women");

  const filteredPakete = unifiedPakete.filter(
    (paket) => (selectedGender === "women" && paket.note === "Damen") ||
                (selectedGender === "men" && paket.note === "Herren")
  );

  // Debug: Log wenn keine Pakete gefunden werden
  if (filteredPakete.length === 0) {
    console.warn("Keine Pakete gefunden für:", selectedGender, "Alle Pakete:", unifiedPakete);
  }

  return (
    <div className="space-y-8">
      {/* Pricing Toggle */}
      <div className="flex justify-center reveal">
        <div className="bg-white/80 dark:bg-stone-800/80 p-1.5 rounded-full border border-stone-200 dark:border-stone-700 flex relative shadow-sm">
          <button
            onClick={() => setSelectedGender("women")}
            className={cn(
              "px-8 py-2 rounded-full text-sm font-medium transition-[background-color,color,box-shadow] duration-200 relative z-10",
              selectedGender === "women"
                ? "text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 shadow-md"
                : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
            )}
          >
            Damen
          </button>
          <button
            onClick={() => setSelectedGender("men")}
            className={cn(
              "px-8 py-2 rounded-full text-sm font-medium transition-[background-color,color,box-shadow] duration-200 relative z-10",
              selectedGender === "men"
                ? "text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 shadow-md"
                : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
            )}
          >
            Herren
          </button>
        </div>
      </div>

      {/* Packages Grid */}
      {filteredPakete.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filteredPakete.map((paket, index) => (
        <div
          key={`${paket.note || "all"}-${paket.name}-${index}`}
          className="group relative p-8 rounded-2xl border border-stone-200/50 dark:border-stone-800/50 bg-white/40 dark:bg-stone-900/40 hover:bg-white/60 dark:hover:bg-stone-800/60 transition-[background-color,transform,box-shadow] duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
        >
          {/* Savings badge */}
          <div className="absolute -top-3 -right-3 flex items-center gap-1 px-3 py-1.5 bg-bronze-500 text-white rounded-full text-xs font-semibold shadow-lg">
            <Sparkles className="w-3 h-3" />
            -{paket.savingsPercent}%
          </div>

          <h3 className="font-serif text-2xl font-medium text-stone-900 dark:text-white mb-2">
            {paket.name}
          </h3>

          {paket.note && (
            <span className="text-xs font-semibold uppercase tracking-wider text-bronze-500 mb-4 block">
              {paket.note}
            </span>
          )}

          <div className="flex-grow">
            <ul className="space-y-2 mb-6">
              {paket.areas.map((area) => {
                const areaPrice = getPriceForArea(area);
                return (
                  <li key={area} className="text-sm text-stone-600 dark:text-stone-400 flex items-center justify-between gap-2 group/item">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze-400/60 flex-shrink-0" />
                      <span className="truncate">{area}</span>
                    </div>
                    <span className="text-xs text-stone-500 dark:text-stone-500 font-medium flex-shrink-0">
                      {areaPrice}€
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="pt-4 border-t border-stone-100 dark:border-stone-800 mt-auto space-y-3">
            {/* Preisvergleich */}
            <div className="flex items-end gap-3">
              <span className="text-3xl font-display font-semibold text-stone-900 dark:text-white">
                {paket.discountedPrice}€
              </span>
              <div className="flex flex-col leading-none mb-1">
                <span className="text-sm text-stone-400 line-through">
                  {paket.originalPrice}€
                </span>
                <span className="text-[10px] text-bronze-500 font-medium uppercase tracking-wide">
                  Paketpreis
                </span>
              </div>
            </div>
            
            {/* Ersparnis */}
            <div className="flex items-center gap-2 text-sm bg-bronze-50/50 dark:bg-bronze-950/20 px-3 py-2 rounded-lg border border-bronze-200/30 dark:border-bronze-800/30">
              <Calculator className="w-4 h-4 text-bronze-600 dark:text-bronze-400 flex-shrink-0" />
              <span className="text-stone-600 dark:text-stone-400">
                <span className="font-semibold text-bronze-700 dark:text-bronze-400">Sie sparen {paket.savings}€</span>
                {" "}(statt {paket.originalPrice}€ einzeln)
              </span>
            </div>
          </div>
        </div>
      ))}
        </div>
      ) : (
        <div className="text-center py-12 text-stone-500 dark:text-stone-400">
          <p>Keine Pakete verfügbar.</p>
        </div>
      )}
    </div>
  );
}
