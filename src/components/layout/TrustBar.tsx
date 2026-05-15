import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "Licensed & insured" },
  { icon: Phone, label: "We answer the phone" },
  { icon: MapPin, label: "Based in Chattanooga" },
  { icon: Clock, label: "Same-day call backs" },
] as const;

export function TrustBar() {
  return (
    <section className="border-y border-navy/10 bg-white">
      <div className="container py-4 md:py-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-navy/80">
            <Icon className="h-4 w-4 text-electric" />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
