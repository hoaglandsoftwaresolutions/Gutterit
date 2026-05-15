import { FileText, MessageSquareText, Phone, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Seo } from "../components/seo/Seo";
import { TrustBar } from "../components/layout/TrustBar";
import { QuoteForm } from "../components/ui/QuoteForm";

const PILLARS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Phone,
    title: "I answer the phone",
    body: "When you call (423) 475-3158, you get me — not a call center, not a voicemail tree. If I can't pick up because I'm on a roof, I call back the same day.",
  },
  {
    icon: MessageSquareText,
    title: "We show up when we say we will",
    body: "If I told you Tuesday at 9, we're there Tuesday at 9. If something changes — weather, an emergency on another job — I call you, I don't ghost you.",
  },
  {
    icon: Wrench,
    title: "I'll tell you when you don't need the work",
    body: "If your gutters just need a $50 repair instead of a full replacement, that's what I'll tell you. I'd rather earn your trust now and your next job than oversell once.",
  },
  {
    icon: FileText,
    title: "Written quote, fixed price",
    body: "Whatever I quote on-site is what you pay. No surprise add-ons after we start. If we find something we didn't expect, I stop and talk to you before the meter runs.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About | Gutter-It LLC"
        description="Family-owned gutter and pressure washing company in Chattanooga, TN. Meet Jakob and learn how we run every job."
        canonical="https://gutter-itllc.com/about"
      />

      <section className="bg-navy">
        <div className="container py-16 md:py-20">
          <p className="eyebrow text-amber-200">Who we are</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-cream md:text-4xl">
            Your gutter needs,{" "}
            <span className="italic text-amber-200">covered.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-cream/80">
            Gutter-It LLC is a locally-owned Chattanooga company specializing in
            seamless gutter installations, cleaning, and repairs — plus pressure
            washing to keep the rest of your exterior looking just as sharp.
            Competitive pricing, quick turnaround, and work that actually lasts.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-cream">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">A note from the owner</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
              Hey — I'm <span className="text-amber">Jakob.</span>
            </h2>
            <div className="prose-body mt-6 text-base text-navy/80 leading-relaxed">
              <p>
                I started Gutter-It LLC because I'd seen too many people get
                burned by gutter contractors who over-quoted, never called back,
                or did sloppy work and disappeared. I knew there had to be a
                better way to run this kind of business in Chattanooga.
              </p>
              <p>
                These days it's me and my crew handling cleanings, repairs, full
                installs, and pressure washing across the area. We're not the
                biggest outfit in town and we're not trying to be. What we are
                is the company that picks up the phone, shows up on time, and
                does the job the way we'd want it done on our own homes.
              </p>
              <p>
                If your gutters are giving you trouble, give me a call. If we're
                a fit, great. If we're not the right call for the job, I'll tell
                you that too.
              </p>
            </div>
            <p className="mt-6 font-display text-lg font-bold text-navy">
              — Jakob Demoss
            </p>
            <p className="text-sm text-muted">Owner, Gutter-It LLC</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What you can count on</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
              Four things, every job.
            </h2>
            <p className="mt-3 text-base text-navy/70">
              These aren't slogans. They're how we run.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-xl border border-navy/5 bg-cream p-6 reveal"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber/10 text-amber">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Ready to talk gutters?</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
              Get a free quote.
            </h2>
            <p className="mt-3 text-base text-navy/70">
              Three fields. We'll get back to you within 1 business day.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
