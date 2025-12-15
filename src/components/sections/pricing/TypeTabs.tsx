import { cn } from "@/lib/utils";

interface TypeTabsProps {
  selected: "einzelbehandlungen" | "pakete";
  onSelect: (type: "einzelbehandlungen" | "pakete") => void;
}

export function TypeTabs({ selected, onSelect }: TypeTabsProps) {
  return (
    <div className="bg-white/80 dark:bg-stone-800/80 p-1.5 rounded-full border border-stone-200 dark:border-stone-700 flex relative shadow-sm">
      <button
        onClick={() => onSelect("einzelbehandlungen")}
        className={cn(
          "px-8 py-2 rounded-full text-sm font-medium transition-[background-color,color,box-shadow] duration-200 relative z-10",
          selected === "einzelbehandlungen"
            ? "text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 shadow-md"
            : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
        )}
      >
        Einzelbehandlungen
      </button>
      <button
        onClick={() => onSelect("pakete")}
        className={cn(
          "px-8 py-2 rounded-full text-sm font-medium transition-[background-color,color,box-shadow] duration-200 relative z-10",
          selected === "pakete"
            ? "text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 shadow-md"
            : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
        )}
      >
        Pakete
      </button>
    </div>
  );
}
