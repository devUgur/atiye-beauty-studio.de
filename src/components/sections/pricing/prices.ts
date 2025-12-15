// Zentrale Preisliste - wird von AreaCards und PackagesView verwendet
export interface PriceItem {
  name: string;
  price: number;
}

// Mapping für Bereichsnamen (Pakete verwenden manchmal andere Namen)
const areaNameMapping: Record<string, string> = {
  "Brustwarze": "Brustwarzen",
  "Brustwarzen": "Brustwarzen",
  "Arme": "Arme komplett",
  "Arme komplett": "Arme komplett",
  "Rücken + Schultern": "Rücken komplett mit Schulter",
  "Rücken komplett mit Schulter": "Rücken komplett mit Schulter",
  "Wangen": "Wangenkontur",
  "Wangenkontur": "Wangenkontur",
  "Oberschenkeln": "Oberschenkel",
  "Oberschenkel": "Oberschenkel",
};

// Einzelbehandlungen - nur feste Preise, keine "(ab)" Preise
export const individualPrices: PriceItem[] = [
  { name: "Augenbrauen", price: 25 },
  { name: "Oberlippe", price: 25 },
  { name: "Kinn", price: 30 },
  { name: "Koteletten", price: 30 },
  { name: "Gesicht komplett", price: 90 },
  { name: "Wangenkontur", price: 35 },
  { name: "Ohren", price: 30 },
  { name: "Hals", price: 35 },
  { name: "Nacken", price: 45 },
  { name: "Hände", price: 45 },
  { name: "Unterarme", price: 120 },
  { name: "Oberarme", price: 120 },
  { name: "Arme komplett", price: 120 },
  { name: "Achseln", price: 80 },
  { name: "Brust", price: 120 },
  { name: "Brustwarzen", price: 30 },
  { name: "Bauch ab", price: 120 },
  { name: "Dekollete ab", price: 50 },
  { name: "Schultern", price: 90 },
  { name: "Rücken ab", price: 25 },
  { name: "Rücken", price: 200 },
  { name: "Rücken komplett mit Schulter", price: 250 },
  { name: "Füße", price: 50 },
  { name: "Unterschenkel", price: 130 },
  { name: "Oberschenkel", price: 150 },
  { name: "Beine komplett", price: 250 },
  { name: "Bikini / Intimbereich", price: 75 },
  { name: "Po komplett", price: 70 },
];

// Helper-Funktion um den Preis für einen Bereich zu finden
export function getPriceForArea(areaName: string): number {
  // Zuerst versuchen, exakten Match zu finden
  const exactMatch = individualPrices.find(p => p.name === areaName);
  if (exactMatch) return exactMatch.price;

  // Dann versuchen, über Mapping zu finden
  const mappedName = areaNameMapping[areaName] || areaName;
  const mappedMatch = individualPrices.find(p => p.name === mappedName);
  if (mappedMatch) return mappedMatch.price;

  // Fallback: Versuche Teilstring-Match (z.B. "Gesicht" für "Gesicht komplett")
  const partialMatch = individualPrices.find(p => 
    p.name.toLowerCase().includes(areaName.toLowerCase()) ||
    areaName.toLowerCase().includes(p.name.toLowerCase())
  );
  if (partialMatch) return partialMatch.price;

  // Wenn nichts gefunden wird, gib 0 zurück (sollte nicht passieren)
  console.warn(`Preis nicht gefunden für Bereich: ${areaName}`);
  return 0;
}

// Berechne Gesamtpreis für eine Liste von Bereichen
export function calculateTotalPrice(areas: string[]): number {
  return areas.reduce((total, area) => total + getPriceForArea(area), 0);
}
