import { cn } from "@/lib/utils";

interface GenderTabsProps {
  selected: "female" | "male";
  onSelect: (gender: "female" | "male") => void;
}

export function GenderTabs({ selected, onSelect }: GenderTabsProps) {
  return (
    <div className="flex gap-4 sm:gap-8 justify-center mb-8 border-b border-stone-200 dark:border-stone-800 w-full sm:w-fit mx-auto px-8">
      <button
        onClick={() => onSelect("female")}
        className={cn(
          "pb-4 font-serif text-lg tracking-wide transition-all duration-300 border-b-2",
          selected === "female"
            ? "border-bronze-500 text-stone-900 dark:text-white"
            : "border-transparent text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
        )}
      >
        Damen
      </button>
      <button
        onClick={() => onSelect("male")}
        className={cn(
          "pb-4 font-serif text-lg tracking-wide transition-all duration-300 border-b-2",
          selected === "male"
            ? "border-bronze-500 text-stone-900 dark:text-white"
            : "border-transparent text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
        )}
      >
        Herren
      </button>
    </div>
  );
}
