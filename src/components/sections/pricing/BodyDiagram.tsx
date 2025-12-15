import { useState } from "react";
import Image from "next/image";
import bodyFemale from "@/assets/body-female.png";
import bodyMale from "@/assets/body-male.png";
import bodyFemaleDark from "@/assets/body-female-dark.png";
import bodyMaleDark from "@/assets/body-male-dark.png";
import { cn } from "@/lib/utils";

interface PricePoint {
  id: string;
  label: string;
  price: string;
  x: number; // Body Dot X (%) relative to image container width (approx 300px)
  y: number; // Body Dot Y (%)
  side: "left" | "right";
  labelY: number; // Manual Y position for the label (%) to ensure perfect spacing
}

interface BodyDiagramProps {
  gender: "female" | "male";
  onAreaSelect?: (area: string) => void;
}

// ----------------------------------------------------------------------
// DATA: Precise Coordinates & Manual Label Spacing
// ----------------------------------------------------------------------

const femalePricePoints: PricePoint[] = [
  // LEFT SIDE LABELS (Connecting to body's left side / screen left)
  { id: "oberlippe", label: "Oberlippe", price: "25€", x: 48, y: 7.5, side: "left", labelY: 5 },
  { id: "hals", label: "Hals", price: "35€", x: 48, y: 11.5, side: "left", labelY: 15 },
  { id: "achseln", label: "Achseln", price: "80€", x: 38, y: 18, side: "left", labelY: 25 },
  { id: "oberarme", label: "Oberarme", price: "120€", x: 32, y: 24, side: "left", labelY: 35 },
  { id: "unterarme", label: "Unterarme", price: "120€", x: 28, y: 35, side: "left", labelY: 45 },
  { id: "bikini", label: "Bikini", price: "75€", x: 48, y: 38, side: "left", labelY: 55 },
  { id: "haende", label: "Hände", price: "45€", x: 26, y: 44, side: "left", labelY: 65 },
  { id: "fuesse", label: "Füße", price: "50€", x: 48, y: 92, side: "left", labelY: 90 },

  // RIGHT SIDE LABELS (Connecting to body's right side / screen right)
  { id: "augenbrauen", label: "Augenbrauen", price: "25€", x: 52, y: 5.5, side: "right", labelY: 5 },
  { id: "kinn", label: "Kinn", price: "30€", x: 52, y: 9, side: "right", labelY: 15 },
  { id: "dekollete", label: "Dekolleté", price: "50€", x: 52, y: 17, side: "right", labelY: 25 },
  { id: "brust", label: "Brust", price: "120€", x: 52, y: 21, side: "right", labelY: 35 },
  { id: "bauch", label: "Bauch", price: "120€", x: 52, y: 30, side: "right", labelY: 45 },
  { id: "oberschenkel", label: "Oberschenkel", price: "150€", x: 55, y: 52, side: "right", labelY: 60 },
  { id: "unterschenkel", label: "Unterschenkel", price: "130€", x: 56, y: 72, side: "right", labelY: 75 },
];

const malePricePoints: PricePoint[] = [
  // LEFT SIDE
  { id: "ohren", label: "Ohren", price: "30€", x: 44, y: 5.5, side: "left", labelY: 5 },
  { id: "schultern", label: "Schultern", price: "90€", x: 35, y: 14, side: "left", labelY: 15 },
  { id: "oberarme", label: "Oberarme", price: "120€", x: 28, y: 24, side: "left", labelY: 25 },
  { id: "unterarme", label: "Unterarme", price: "120€", x: 24, y: 38, side: "left", labelY: 35 },
  { id: "haende", label: "Hände", price: "45€", x: 22, y: 48, side: "left", labelY: 45 },
  { id: "bauch", label: "Bauch", price: "120€", x: 50, y: 34, side: "left", labelY: 55 },
  { id: "fuesse", label: "Füße", price: "50€", x: 52, y: 94, side: "left", labelY: 90 },

  // RIGHT SIDE
  { id: "augenbrauen", label: "Augenbrauen", price: "25€", x: 50, y: 5, side: "right", labelY: 5 },
  { id: "nacken", label: "Nacken", price: "45€", x: 50, y: 10, side: "right", labelY: 15 },
  { id: "brust", label: "Brust", price: "120€", x: 50, y: 20, side: "right", labelY: 25 },
  { id: "ruecken", label: "Rücken", price: "200€", x: 50, y: 26, side: "right", labelY: 35 },
  { id: "intim", label: "Intimbereich", price: "75€", x: 50, y: 42, side: "right", labelY: 45 },
  { id: "oberschenkel", label: "Oberschenkel", price: "150€", x: 56, y: 55, side: "right", labelY: 60 },
  { id: "unterschenkel", label: "Unterschenkel", price: "130€", x: 58, y: 74, side: "right", labelY: 75 },
];

export function BodyDiagram({ gender, onAreaSelect }: BodyDiagramProps) {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const pricePoints = gender === "female" ? femalePricePoints : malePricePoints;

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 lg:py-20 px-4 min-h-[800px] select-none">

      {/* 
        MAIN GRID CONTAINER 
        We use a 3-column Layout: [Labels Left] [Image Center] [Labels Right]
        But we use ABSOLUTE positioning inside to guarantee 'Canvas' precision.
      */}
      <div className="relative w-full h-[800px] mx-auto">

        {/* --- CENTER: IMAGE --- */}
        <div className="absolute inset-x-0 top-0 bottom-0 mx-auto w-[300px] md:w-[400px] z-10 flex items-center justify-center pointer-events-none">
          {/* Light Mode: Multiply Blend to hide White BG */}
          <Image
            src={gender === "female" ? bodyFemale : bodyMale}
            alt="Human Anatomy Light"
            fill
            className="object-contain mix-blend-multiply dark:hidden opacity-90"
            priority
          />
          {/* Dark Mode: Screen Blend to hide Black BG */}
          <Image
            src={gender === "female" ? bodyFemaleDark : bodyMaleDark}
            alt="Human Anatomy Dark"
            fill
            className="object-contain hidden dark:block mix-blend-screen opacity-90"
            priority
          />
        </div>

        {/* --- SVG LAYER (Connectors) --- */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          {pricePoints.map(point => {
            const isHovered = hoveredArea === point.id;
            const isLeft = point.side === "left";

            // IMAGE COORDINATES (The diagram is centered)
            // The image container is approx 400px wide in the center.
            // Calculation: 50% (Center) +/- offset based on point.x
            // Point X is relative to the IMAGE width.
            // 0% X on image = Center - 200px (approx)
            // But relying on px is brittle. Let's use % relative to the FULL container.

            // Better approach: 
            // Container Center = 50%
            // Image Width = ~35% of Container (on desktop).
            // So Image Left Edge = 32.5%, Right Edge = 67.5%

            const imageWidthPercent = 30; // approx
            const imageLeftEdge = 50 - (imageWidthPercent / 2);

            const startX = imageLeftEdge + (point.x * imageWidthPercent / 100);
            // Calibration: point.x is 0..100 relative to image.

            const startY = point.y; // % from top

            // Label Anchor
            const endX = isLeft ? 15 : 85; // Labels sit at 15% and 85% width
            const endY = point.labelY;

            // Bezier Control Points for smooth "S" curve
            const controlX1 = isLeft ? startX - 10 : startX + 10;
            const controlX2 = isLeft ? endX + 10 : endX - 10;

            return (
              <g key={`line-${point.id}`}>
                <path
                  d={`M ${startX}% ${startY}% C ${controlX1}% ${startY}%, ${controlX2}% ${endY}%, ${endX}% ${endY}%`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={isHovered ? 2 : 1}
                  className={cn(
                    "transition-all duration-300",
                    isHovered ? "text-stone-900 dark:text-white opacity-100" : "text-stone-300 dark:text-stone-700 opacity-40"
                  )}
                />
                {/* Body Dot */}
                <circle
                  cx={`${startX}%`}
                  cy={`${startY}%`}
                  r={isHovered ? 4 : 2}
                  className={cn(
                    "transition-all duration-300 pointer-events-auto cursor-pointer",
                    isHovered ? "fill-stone-900 dark:fill-white" : "fill-stone-400 dark:fill-stone-600"
                  )}
                  onMouseEnter={() => setHoveredArea(point.id)}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => onAreaSelect?.(point.id)}
                />
                {/* Label Connector Dot */}
                <circle
                  cx={`${endX}%`}
                  cy={`${endY}%`}
                  r={isHovered ? 3 : 1.5}
                  className={cn(
                    "transition-colors duration-300",
                    isHovered ? "fill-stone-900 dark:fill-white" : "fill-stone-300 dark:fill-stone-700"
                  )}
                />
              </g>
            );
          })}
        </svg>

        {/* --- LABELS LAYER --- */}
        {pricePoints.map(point => {
          const isHovered = hoveredArea === point.id;
          const isLeft = point.side === "left";

          // Position: 
          // Left labels: right aligned to 15% line
          // Right labels: left aligned to 85% line

          return (
            <div
              key={`label-${point.id}`}
              className={cn(
                "absolute top-0 flex items-center group cursor-pointer z-30",
                isLeft ? "right-[85%] justify-end" : "left-[85%] justify-start"
              )}
              style={{ top: `${point.labelY}%`, transform: 'translateY(-50%)', width: '200px' }}
              onMouseEnter={() => setHoveredArea(point.id)}
              onMouseLeave={() => setHoveredArea(null)}
              onClick={() => onAreaSelect?.(point.id)}
            >
              <div className={cn(
                "px-4 py-2 rounded-xl backdrop-blur-md border transition-all duration-300",
                isLeft ? "mr-4 text-right" : "ml-4 text-left",
                isHovered
                  ? "bg-stone-900 border-stone-900 text-white scale-105 shadow-xl"
                  : "bg-white/70 dark:bg-stone-900/40 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-800"
              )}>
                <div className="text-[10px] uppercase tracking-wider font-bold opacity-60 leading-none mb-1">{point.label}</div>
                <div className="text-lg font-serif font-medium leading-none">{point.price}</div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
