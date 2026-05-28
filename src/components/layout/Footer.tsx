import { Link } from "react-router-dom";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "../../data/business";

export function Footer() {
  return (
    <footer className="bg-navy text-cream/90 mt-20">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display text-xl font-bold text-cream">
            {BUSINESS.shortName}
          </h3>
          <p className="mt-3 text-sm text-cream/75">
            {BUSINESS.tagline}
          </p>
          <p className="mt-3 text-sm text-cream/75">
            Family-owned gutter and pressure washing service in Chattanooga, TN.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-cream">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/services/installation"
                className="hover:text-white"
              >
                Gutter Installation
              </Link>
            </li>
            <li>
              <Link to="/services/cleaning" className="hover:text-white">
                Gutter Cleaning
              </Link>
            </li>
            <li>
              <Link to="/services/repair" className="hover:text-white">
                Gutter Repair
              </Link>
            </li>
            <li>
              <Link
                to="/services/gutter-guards"
                className="hover:text-white"
              >
                Gutter Guards
              </Link>
            </li>
            <li>
              <Link
                to="/services/pressure-washing"
                className="hover:text-white"
              >
                Pressure Washing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-cream">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-electric" />
              <a href={BUSINESS.phoneHref} className="hover:text-white">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-electric" />
              <a href={BUSINESS.emailHref} className="break-all hover:text-white">
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-electric" />
              <span>
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.city}, {BUSINESS.address.region}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-electric" />
              <span>{BUSINESS.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-cream">
            Site
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services & Pricing
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-semibold hover:text-white">
                Get a Quote →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col gap-2 text-xs text-cream/60 sm:flex-row sm:justify-between">
          <p>© 2026 {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/contact" className="hover:text-white">
              Get a Quote
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <a href={BUSINESS.phoneHref} className="hover:text-white">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
        <div className="container pb-5 text-center text-xs text-cream/60">
          Created by{" "}
          <a
            href="https://hoaglandsoftwaresolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Hoagland Software Solutions LLC
          </a>
        </div>
      </div>
    </footer>
  );
}
