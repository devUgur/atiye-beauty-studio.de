"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

interface PriceItem {
    name: string;
    price: number;
    note?: string; // e.g. "Damen", "Herren", "alternativ"
}

interface AreaCategory {
    title: string;
    items: PriceItem[];
}

// Vollständige Preisliste basierend auf den aktuellen Daten - übersichtlich kategorisiert
const unifiedCategories: AreaCategory[] = [
    {
        title: "Gesicht",
        items: [
            { name: "Augenbrauen", price: 25 },
            { name: "Oberlippe", price: 25 },
            { name: "Kinn", price: 30 },
            { name: "Koteletten", price: 30 },
            { name: "Ohren", price: 30 },
            { name: "Wangenkontur", price: 35 },
            { name: "Gesicht komplett (alternativ)", price: 60 },
            { name: "Gesicht komplett", price: 90 },
        ],
    },
    {
        title: "Hals & Nacken",
        items: [
            { name: "Hals", price: 35 },
            { name: "Nacken (alternativ)", price: 30 },
            { name: "Nacken", price: 45 },
        ],
    },
    {
        title: "Oberkörper",
        items: [
            { name: "Brustwarzen", price: 30 },
            { name: "Dekollete ab", price: 50 },
            { name: "Achseln (alternativ)", price: 50 },
            { name: "Achseln", price: 80 },
            { name: "Schultern", price: 90 },
            { name: "Bauch ab", price: 120 },
            { name: "Brust", price: 120 },
            { name: "Rücken ab", price: 25 },
            { name: "Rücken", price: 200 },
            { name: "Rücken komplett mit Schulter", price: 250 },
        ],
    },
    {
        title: "Arme & Hände",
        items: [
            { name: "Hände (alternativ)", price: 50 },
            { name: "Hände", price: 45 },
            { name: "Arme", price: 120 },
            { name: "Unterarme", price: 120 },
            { name: "Oberarme", price: 120 },
        ],
    },
    {
        title: "Intimbereich & Po",
        items: [
            { name: "Po komplett", price: 70 },
            { name: "Bikini / Intimbereich", price: 75 },
        ],
    },
    {
        title: "Beine & Füße",
        items: [
            { name: "Füße (alternativ)", price: 50 },
            { name: "Füße", price: 50 },
            { name: "Unterschenkel", price: 130 },
            { name: "Oberschenkel", price: 150 },
            { name: "Beine komplett", price: 250 },
        ],
    },
];

export function AreaCards() {
    const [openCategories, setOpenCategories] = useState<Set<string>>(new Set([unifiedCategories[0].title])); // Erste Kategorie standardmäßig geöffnet

    // Memoize sorted categories to avoid re-sorting on every render
    const sortedCategories = useMemo(() => {
        return unifiedCategories.map(category => ({
            ...category,
            items: [...category.items].sort((a, b) => a.price - b.price)
        }));
    }, []);

    const toggleCategory = (title: string) => {
        setOpenCategories(prev => {
            const newSet = new Set(prev);
            if (newSet.has(title)) {
                newSet.delete(title);
            } else {
                newSet.add(title);
            }
            return newSet;
        });
    };

    return (
        <div className="space-y-4 max-w-4xl mx-auto">
            {sortedCategories.map((category, index) => {
                const isOpen = openCategories.has(category.title);
                return (
                    <div
                        key={category.title}
                        className="reveal border border-stone-200 dark:border-stone-800 rounded-none overflow-hidden group bg-white/60 dark:bg-stone-900/60 hover:border-bronze-300/50 dark:hover:border-bronze-700/50 transition-all duration-300"
                        style={{ 
                            animationDelay: `${index * 0.06}s`,
                            animationFillMode: "both",
                            willChange: "transform, opacity"
                        }}
                    >
                        {/* Category Header - Toggle Button */}
                        <button
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-white/80 dark:hover:bg-stone-900/80 transition-colors"
                            onClick={() => toggleCategory(category.title)}
                        >
                            <h3 className="font-serif text-2xl md:text-3xl font-medium text-stone-900 dark:text-white pr-4">
                                {category.title}
                            </h3>
                            <ChevronDown
                                className={`w-5 h-5 text-stone-400 dark:text-stone-500 transition-transform duration-300 group-hover:text-bronze-500 flex-shrink-0 ${
                                    isOpen ? "rotate-180 text-bronze-500" : ""
                                }`}
                            />
                        </button>

                        {/* Modern Price List Table - Collapsible */}
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                isOpen ? "max-h-[2000px]" : "max-h-0"
                            }`}
                        >
                            <div className="bg-white/40 dark:bg-stone-900/40 backdrop-blur-sm border-t border-stone-200/60 dark:border-stone-800/60">
                                <div className="divide-y divide-stone-200/60 dark:divide-stone-800/60">
                                    {category.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group/item flex items-center justify-between px-4 sm:px-6 py-4 hover:bg-white/60 dark:hover:bg-stone-800/60 transition-[background-color] duration-200"
                                        >
                                            <div className="flex-1 min-w-0 pr-4">
                                                <span className="font-medium text-stone-900 dark:text-stone-100 text-base sm:text-lg block">
                                                    {item.name}
                                                </span>
                                            </div>
                                            <div className="flex-1 h-px bg-gradient-to-r from-stone-200 via-stone-300 to-transparent dark:from-stone-700 dark:via-stone-600 mx-4 hidden sm:block"></div>
                                            <div className="flex items-baseline gap-2 flex-shrink-0">
                                                <span className="font-serif font-semibold text-xl sm:text-2xl text-stone-900 dark:text-white">
                                                    {item.price}€
                                                </span>
                                                <span className="text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wide hidden sm:inline">
                                                    pro Sitzung
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
