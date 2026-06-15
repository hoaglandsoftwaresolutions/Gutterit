export type ServiceCategory =
  | "installation"
  | "cleaning"
  | "gutter-repair"
  | "gutter-guards"
  | "pressure-washing";

export type Service = {
  slug: ServiceCategory;
  title: string;
  blurb: string;
  bullets: string[];
  priceLabel: string;
  priceShort: string;
  icon: "Droplets" | "Wrench" | "Hammer" | "Sparkles" | "Shield";
};

export const SERVICES: Service[] = [
  {
    slug: "installation",
    title: "Gutter Installation",
    blurb:
      "Seamless aluminum gutters formed on your driveway, cut to fit your roof line exactly.",
    bullets: [
      "Seamless gutters formed on-site to your roof line",
      "Hidden hangers spaced for snow/ice load",
      "Properly pitched downspouts and splash blocks",
      "Tear-off and haul-away of old gutter material",
      "5-year workmanship warranty in writing",
    ],
    priceLabel: "Free Quote",
    priceShort: "Free Quote",
    icon: "Hammer",
  },
  {
    slug: "cleaning",
    title: "Gutter Cleaning",
    blurb:
      "Hand-clear leaves, pine needles, and debris. Flush every downspout. Bag and haul away.",
    bullets: [
      "Hand-removal of all debris from every section",
      "Flush downspouts to confirm clean flow",
      "Bag and haul away — we don't leave piles in your yard",
      "Quick visual inspection for leaks or sagging",
    ],
    priceLabel: "as low as $100",
    priceShort: "from $100",
    icon: "Droplets",
  },
  {
    slug: "gutter-repair",
    title: "Gutter Repair",
    blurb:
      "Sagging sections, leaky seams, broken downspouts — fixed without selling you a full replacement.",
    bullets: [
      "Re-hang sagging sections with new hidden hangers",
      "Reseal leaky seams and end caps",
      "Replace damaged downspouts and elbows",
      "Re-pitch sections that hold water",
    ],
    priceLabel: "starting at $50",
    priceShort: "from $50",
    icon: "Wrench",
  },
  {
    slug: "gutter-guards",
    title: "Gutter Guards",
    blurb:
      "Leaf-protection systems installed honestly — we'll tell you when they make sense and when they don't.",
    bullets: [
      "Micro-mesh and reverse-curve options",
      "Sized to your roof pitch and tree load",
      "Installed over new or existing gutters",
      "No high-pressure sales — straight talk on tradeoffs",
    ],
    priceLabel: "Free Quote",
    priceShort: "Free Quote",
    icon: "Shield",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    blurb:
      "Gutter exteriors, driveways, sidewalks, and siding — cleaned without damage.",
    bullets: [
      "Gutter exterior streaks (tiger striping)",
      "Driveways and sidewalks",
      "House siding (vinyl, brick, fiber cement)",
      "Decks and patios",
    ],
    priceLabel: "Free Quote",
    priceShort: "Free Quote",
    icon: "Sparkles",
  },
];
