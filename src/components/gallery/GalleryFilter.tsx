import { cn } from "../../lib/utils";
import type { ServiceCategory } from "../../data/services";

type FilterValue = "all" | ServiceCategory;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "cleaning", label: "Cleaning" },
  { value: "installation", label: "Installation" },
  { value: "repair", label: "Repair" },
  { value: "pressure-washing", label: "Pressure Washing" },
];

type Props = {
  value: FilterValue;
  onChange: (v: FilterValue) => void;
};

export function GalleryFilter({ value, onChange }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted">
        Filter:
      </span>
      {FILTERS.map((f) => (
        <button
          key={f.value}
          type="button"
          onClick={() => onChange(f.value)}
          className={cn(
            "inline-flex min-h-[40px] items-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
            value === f.value
              ? "bg-navy text-cream"
              : "border border-navy/15 bg-white text-navy hover:border-navy/40",
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export type { FilterValue };
