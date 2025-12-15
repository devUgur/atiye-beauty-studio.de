import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PriceItem {
  bereich: string;
  preis: string;
  category?: string;
}

const damenPreise: PriceItem[] = [
  { bereich: "Augenbrauen", preis: "25€" },
  { bereich: "Oberlippe", preis: "25€" },
  { bereich: "Kinn", preis: "30€" },
  { bereich: "Koteletten", preis: "30€" },
  { bereich: "Brustwarzen", preis: "30€" },
  { bereich: "Wangenkontur", preis: "35€" },
  { bereich: "Hals", preis: "35€" },
  { bereich: "Nacken", preis: "45€" },
  { bereich: "Hände", preis: "45€" },
  { bereich: "Dekolleté ab", preis: "50€" },
  { bereich: "Füße", preis: "50€" },
  { bereich: "Gesicht komplett (alternativ)", preis: "60€" },
  { bereich: "Po komplett", preis: "70€" },
  { bereich: "Bikini / Intimbereich", preis: "75€" },
  { bereich: "Achseln", preis: "80€" },
  { bereich: "Gesicht komplett", preis: "90€" },
  { bereich: "Schultern", preis: "90€" },
  { bereich: "Bauch ab", preis: "120€" },
  { bereich: "Brust", preis: "120€" },
  { bereich: "Arme", preis: "120€" },
  { bereich: "Oberarme", preis: "120€" },
  { bereich: "Unterarme", preis: "120€" },
  { bereich: "Unterschenkel", preis: "130€" },
  { bereich: "Oberschenkel", preis: "150€" },
  { bereich: "Rücken", preis: "200€" },
  { bereich: "Beine komplett", preis: "250€" },
  { bereich: "Rücken komplett mit Schulter", preis: "250€" },
];

const herrenPreise: PriceItem[] = [
  { bereich: "Augenbrauen", preis: "25€" },
  { bereich: "Rücken ab", preis: "25€" },
  { bereich: "Ohren", preis: "30€" },
  { bereich: "Brustwarzen", preis: "30€" },
  { bereich: "Nacken", preis: "45€" },
  { bereich: "Hände", preis: "45€" },
  { bereich: "Füße", preis: "50€" },
  { bereich: "Intimbereich", preis: "75€" },
  { bereich: "Achseln", preis: "80€" },
  { bereich: "Schultern", preis: "90€" },
  { bereich: "Bauch ab", preis: "120€" },
  { bereich: "Brust", preis: "120€" },
  { bereich: "Oberarme", preis: "120€" },
  { bereich: "Unterarme", preis: "120€" },
  { bereich: "Unterschenkel", preis: "130€" },
  { bereich: "Oberschenkel", preis: "150€" },
  { bereich: "Rücken", preis: "200€" },
  { bereich: "Beine komplett", preis: "250€" },
  { bereich: "Rücken komplett mit Schulter", preis: "250€" },
];

interface PriceTableProps {
  gender: "female" | "male";
  highlightedArea?: string;
}

export function PriceTable({ gender, highlightedArea }: PriceTableProps) {
  const preise = gender === "female" ? damenPreise : herrenPreise;

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-stone-200/50 dark:border-stone-800/50 bg-white/40 dark:bg-stone-900/40 backdrop-blur-sm overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50 hover:bg-secondary/50">
              <TableHead className="font-display text-lg text-foreground">Bereich</TableHead>
              <TableHead className="font-display text-lg text-foreground text-right">Preis</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {preise.map((item, index) => (
              <TableRow
                key={item.bereich}
                className={`
                  transition-all duration-300 hover:bg-accent
                  ${highlightedArea && item.bereich.toLowerCase().includes(highlightedArea)
                    ? "bg-highlight"
                    : ""}
                `}
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <TableCell className="font-body text-foreground/90">{item.bereich}</TableCell>
                <TableCell className="font-body font-semibold text-primary text-right">
                  {item.preis}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
