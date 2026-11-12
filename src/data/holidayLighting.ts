// Content for the /christmas-light-installation page and the seasonal
// homepage banner. Prices come straight from the Gutter-It holiday lighting
// price sheet — update here and the page + banner follow.
//
// FAQ is mirrored in scripts/seo-routes.mjs (FAQ_CHRISTMAS_LIGHTS) for the
// prerendered JSON-LD. Keep the two in sync.

import type { FaqItem } from "./faq";

export const HOLIDAY_LIGHTING_PATH = "/christmas-light-installation";

// The homepage banner and header nav link show automatically during the
// holiday season, every year. The page itself stays live year-round so it
// keeps its search ranking for next season.
//
// Season window (inclusive), as [month, day] with month 1–12:
const SEASON_START: [number, number] = [11, 1]; // November 1
const SEASON_END: [number, number] = [1, 15]; // January 15

// Manual override: set to true/false to force the banner on or off
// regardless of date. Leave as null for automatic.
const SEASON_OVERRIDE: boolean | null = null;

export function isHolidaySeason(date = new Date()): boolean {
  if (SEASON_OVERRIDE !== null) return SEASON_OVERRIDE;
  const md = (date.getMonth() + 1) * 100 + date.getDate();
  const start = SEASON_START[0] * 100 + SEASON_START[1];
  const end = SEASON_END[0] * 100 + SEASON_END[1];
  // Window wraps past New Year, so it's "on or after start OR on or before end".
  return start <= end ? md >= start && md <= end : md >= start || md <= end;
}

// Evaluated in the visitor's browser on each page load, using their date.
export const HOLIDAY_SEASON_ACTIVE = isHolidaySeason();

export type ResidentialPackage = {
  name: string;
  rate: string;
  unit: string;
  minimum: string;
  summary: string;
  includes: string[];
  note?: string;
  featured?: boolean;
};

export const RESIDENTIAL_PACKAGES: ResidentialPackage[] = [
  {
    name: "Customer-Supplied Lighting",
    rate: "$3.75",
    unit: "per linear foot",
    minimum: "$275 minimum",
    summary: "We professionally install the lights you already own.",
    includes: [
      "Professional installation labor",
      "Standard installation clips",
      "Basic timer setup and testing",
    ],
    note: "Lights must be working, compatible, and outdoor-rated. Optional removal: $1.50/ft ($175 minimum).",
  },
  {
    name: "Full-Service LED Package",
    rate: "$7.00",
    unit: "per linear foot",
    minimum: "$750 minimum",
    summary: "We supply everything, install it, maintain it, and take it down.",
    includes: [
      "Commercial-grade C9 LED lighting",
      "Custom-measured and cut lighting strands",
      "Professional clips, wiring, and connections",
      "Timer setup and installation",
      "In-season maintenance",
      "January takedown after the holidays",
    ],
    featured: true,
  },
  {
    name: "Returning Customer Renewal",
    rate: "$5.00",
    unit: "per linear foot",
    minimum: "$500 minimum",
    summary: "For customers reusing their Gutter-It lighting package.",
    includes: [
      "Installation of previously stored, labeled lighting",
      "Testing and setup",
      "In-season maintenance",
      "Post-holiday takedown",
    ],
    note: "Replacement materials, if needed, are additional.",
  },
];

export const RESIDENTIAL_RATE_TABLE = [
  { service: "Customer-supplied light installation", rate: "$3.75/ft", minimum: "$275" },
  { service: "Customer-supplied light removal", rate: "$1.50/ft", minimum: "$175" },
  { service: "Full-service C9 LED package", rate: "$7.00/ft", minimum: "$750" },
  { service: "Returning customer renewal", rate: "$5.00/ft", minimum: "$500" },
];

export const ADD_ONS = [
  { service: "Standard tree wrapping", price: "$150 per tree" },
  { service: "Bush lighting", price: "$35 per bush" },
  { service: "Customer-provided wreath installation", price: "$55 each" },
  { service: "Garland installation", price: "$12 per linear foot" },
  { service: "Seasonal lighting storage", price: "From $125" },
];

export const COMMERCIAL_SERVICES = [
  { service: "Commercial lighting projects", price: "Starting at $1,500" },
  { service: "Multi-building properties", price: "Custom quote" },
  { service: "Large-scale displays", price: "Custom quote" },
  { service: "Specialty equipment / lift access", price: "Additional charge as needed" },
];

export const COMMERCIAL_PRICING_FACTORS = [
  "Total lighting footage and design complexity",
  "Building height and access requirements",
  "Lift or specialty equipment requirements",
  "Electrical layout and connection locations",
  "Installation, maintenance, and removal requirements",
];

export const HOLIDAY_SERVICE_AREA = [
  "Chattanooga",
  "East Brainerd",
  "Hixson",
  "Ooltewah",
  "Cleveland",
  "Athens",
  "Dayton",
  "Ringgold",
  "Dalton",
  "Jasper",
  "Rome",
];

export const HOLIDAY_FAQ: FaqItem[] = [
  {
    q: "Do I need to buy my own Christmas lights?",
    a: "No. Our Full-Service LED Package includes commercial-grade C9 LED lights, custom-measured and cut to your home, plus installation, in-season maintenance, and January takedown. If you already own lights, we can install those instead at $3.75 per linear foot ($275 minimum).",
  },
  {
    q: "How much does Christmas light installation cost?",
    a: "Customer-supplied light installation is $3.75 per linear foot ($275 minimum). The Full-Service LED Package is $7.00 per linear foot ($750 minimum). Returning customers reusing their Gutter-It lights pay $5.00 per linear foot ($500 minimum). Final pricing is set after we measure your roofline.",
  },
  {
    q: "Do you take the lights down after Christmas?",
    a: "Yes. Takedown is included with the Full-Service LED Package and the Returning Customer Renewal. For customer-supplied lights, removal is optional at $1.50 per linear foot ($175 minimum).",
  },
  {
    q: "Is the measurement and estimate free?",
    a: "Yes. We'll measure your property and give you a free estimate based on your roofline footage, access, lighting needs, and project complexity.",
  },
  {
    q: "Do you install holiday lighting for businesses?",
    a: "Yes. Commercial projects start at $1,500, and we provide custom proposals for offices, retail locations, multi-building properties, and commercial facilities. Pricing depends on footage, building height, lift or equipment needs, and electrical layout.",
  },
  {
    q: "What if my own lights don't work?",
    a: "Customer-supplied lights need to be functional, compatible, and rated for outdoor use. If yours aren't, our Full-Service LED Package is the easiest option. We supply everything, and it's all built to fit your home.",
  },
];
