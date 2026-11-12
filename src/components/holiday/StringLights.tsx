import type { CSSProperties } from "react";
import { cn } from "../../lib/utils";

// Shared holiday bulb palette: warm white, red, green, warm white, brand blue.
export const BULB_COLORS = ["#f8d77a", "#e5484d", "#30a46c", "#f8d77a", "#0ea5e9"];

export const bulbColor = (i: number) => BULB_COLORS[i % BULB_COLORS.length];

// Deterministic, uneven timing so neighboring bulbs never pulse in unison.
// Negative delay = bulbs start mid-cycle, so the mix is visible immediately.
export function twinkleTiming(i: number) {
  return {
    animationDelay: `-${((i * 7) % 11) * 0.21}s`,
    animationDuration: `${1.2 + ((i * 5) % 7) * 0.2}s`,
  };
}

// A single glowing HTML bulb. `shape` "c9" is the tapered hanging bulb;
// "round" is a mini light used for framing cards.
export function Bulb({
  index,
  shape = "c9",
  className,
}: {
  index: number;
  shape?: "c9" | "round";
  className?: string;
}) {
  const color = bulbColor(index);
  return (
    <span
      className={cn(
        "block animate-twinkle",
        shape === "c9"
          ? "h-4 w-2.5 rounded-b-full rounded-t-sm"
          : "h-2.5 w-2.5 rounded-full",
        className,
      )}
      style={
        {
          backgroundColor: color,
          boxShadow: `0 0 10px 2px ${color}88`,
          "--glow": `${color}cc`,
          ...twinkleTiming(index),
        } as CSSProperties
      }
    />
  );
}

// Decorative row of C9-style bulbs hanging from a wire. Purely visual,
// so it's hidden from screen readers.
export function StringLights({
  count = 18,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none relative h-8 w-full", className)}
    >
      <svg
        className="absolute inset-x-0 top-0 h-4 w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 10"
      >
        <path
          d="M0 1 Q 2.5 6 5 1 T 10 1 T 15 1 T 20 1 T 25 1 T 30 1 T 35 1 T 40 1 T 45 1 T 50 1 T 55 1 T 60 1 T 65 1 T 70 1 T 75 1 T 80 1 T 85 1 T 90 1 T 95 1 T 100 1"
          fill="none"
          stroke="rgba(250,248,243,0.35)"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="absolute inset-x-0 top-1 flex justify-around">
        {Array.from({ length: count }).map((_, i) => (
          <Bulb key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
