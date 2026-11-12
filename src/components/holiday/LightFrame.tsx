import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Bulb } from "./StringLights";

// Wraps content in a border of twinkling mini lights, centered on the
// wrapper's edges like a strand run around a window frame.
export function LightFrame({
  children,
  across = 10,
  down = 16,
  className,
}: {
  children: ReactNode;
  /** bulbs along top and bottom */
  across?: number;
  /** bulbs along each side (corners excluded) */
  down?: number;
  className?: string;
}) {
  let n = 0;
  const row = (count: number) =>
    Array.from({ length: count }).map(() => {
      const i = n++;
      return <Bulb key={i} index={i} shape="round" />;
    });

  return (
    <div className={cn("relative", className)}>
      {children}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 justify-between">
          {row(across)}
        </div>
        <div className="absolute inset-y-4 right-0 flex translate-x-1/2 flex-col justify-around">
          {row(down)}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 flex-row-reverse justify-between">
          {row(across)}
        </div>
        <div className="absolute inset-y-4 left-0 flex -translate-x-1/2 flex-col-reverse justify-around">
          {row(down)}
        </div>
      </div>
    </div>
  );
}
