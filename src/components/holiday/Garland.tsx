import type { CSSProperties } from "react";
import { cn } from "../../lib/utils";
import { bulbColor, twinkleTiming } from "./StringLights";

// Draped evergreen garland: a row of fixed-size swags, each hung from a red
// bow, with twinkling C9 bulbs dangling along the curve. The row is wider
// than any screen and clipped, so it always spans edge to edge.
//
// The fluffy greenery is a few stacked round-capped dotted strokes along the
// swag curve. That stays crisp at any size and needs no image assets.

const SWAG_W = 160;
const SWAG_H = 60;
const HANG_Y = 8;
const DIP_Y = 52; // quadratic control point → lowest point of swag at y=30
const SWAG_PATH = `M0 ${HANG_Y} Q ${SWAG_W / 2} ${DIP_Y} ${SWAG_W} ${HANG_Y}`;
const SWAGS = 16;

// Point on the swag curve at t ∈ [0,1].
function swagPoint(t: number) {
  const u = 1 - t;
  return {
    x: SWAG_W * t,
    y: HANG_Y * u * u + 2 * DIP_Y * u * t + HANG_Y * t * t,
  };
}

const BULB_TS = [0.2, 0.4, 0.6, 0.8];

function Bow() {
  return (
    <g transform={`translate(0 ${HANG_Y})`}>
      {/* tails */}
      <path d="M-1 1 L-7 14 L-4 13 L-3 16 L1 2 Z" fill="#b91c1c" />
      <path d="M1 1 L7 14 L4 13 L3 16 L-1 2 Z" fill="#b91c1c" />
      {/* loops */}
      <ellipse cx="-6" cy="-2" rx="6.5" ry="4" fill="#dc2626" transform="rotate(-18 -6 -2)" />
      <ellipse cx="6" cy="-2" rx="6.5" ry="4" fill="#dc2626" transform="rotate(18 6 -2)" />
      <ellipse cx="-6" cy="-2" rx="3" ry="1.6" fill="#991b1b" transform="rotate(-18 -6 -2)" />
      <ellipse cx="6" cy="-2" rx="3" ry="1.6" fill="#991b1b" transform="rotate(18 6 -2)" />
      {/* knot */}
      <circle cx="0" cy="-1" r="3" fill="#b91c1c" />
    </g>
  );
}

function Swag({ index }: { index: number }) {
  return (
    <svg
      width={SWAG_W}
      height={SWAG_H}
      viewBox={`0 0 ${SWAG_W} ${SWAG_H}`}
      overflow="visible"
      className="shrink-0"
    >
      {/* greenery, back to front */}
      <path d={SWAG_PATH} fill="none" stroke="#14462a" strokeWidth="15" strokeLinecap="round" strokeDasharray="0 6" />
      <path d={SWAG_PATH} fill="none" stroke="#1f6b3d" strokeWidth="11" strokeLinecap="round" strokeDasharray="0 5" strokeDashoffset="2.5" />
      <path d={SWAG_PATH} fill="none" stroke="#2f8a52" strokeWidth="7" strokeLinecap="round" strokeDasharray="0 7" strokeDashoffset="4" />
      <path d={SWAG_PATH} fill="none" stroke="#4aa86c" strokeWidth="3" strokeLinecap="round" strokeDasharray="0 9" strokeDashoffset="1" />

      {/* bulbs */}
      {BULB_TS.map((t, j) => {
        const { x, y } = swagPoint(t);
        const n = index * BULB_TS.length + j;
        const color = bulbColor(n);
        return (
          <g key={j}>
            <rect x={x - 1.6} y={y + 4} width="3.2" height="3.5" rx="0.6" fill="#3b3b3b" />
            <g
              className="animate-twinkle"
              style={{ ...twinkleTiming(n), "--glow": "transparent" } as CSSProperties}
            >
              <circle cx={x} cy={y + 12.5} r="8" fill={color} opacity="0.3" />
              <ellipse cx={x} cy={y + 12.5} rx="3.6" ry="5.2" fill={color} />
            </g>
          </g>
        );
      })}

      <Bow />
    </svg>
  );
}

export function Garland({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none flex h-[60px] w-full justify-center overflow-hidden",
        className,
      )}
    >
      {Array.from({ length: SWAGS }).map((_, i) => (
        <Swag key={i} index={i} />
      ))}
    </div>
  );
}

// Drop-in divider that overlaps the top padding of the next section, so it
// adds no extra vertical space between existing sections.
export function GarlandDivider() {
  return (
    <div className="relative z-10 h-0">
      <Garland className="absolute inset-x-0 top-0" />
    </div>
  );
}
