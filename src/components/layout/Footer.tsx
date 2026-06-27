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
            Gutter Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/residential-gutter-services"
                className="font-semibold hover:text-white"
              >
                Residential Gutter Services
              </Link>
            </li>
            <li>
              <Link to="/services/cleaning" className="hover:text-white">
                Gutter Cleaning
              </Link>
            </li>
            <li>
              <Link to="/services/gutter-repair" className="hover:text-white">
                Gutter Repair
              </Link>
            </li>
            <li>
              <Link to="/services/installation" className="hover:text-white">
                Seamless Installation
              </Link>
            </li>
            <li>
              <Link to="/services/gutter-guards" className="hover:text-white">
                Gutter Guards
              </Link>
            </li>
            <li>
              <Link to="/residential-gutter-services/downspout-services" className="hover:text-white">
                Downspout Services
              </Link>
            </li>
            <li>
              <Link to="/residential-gutter-services/drainage-solutions" className="hover:text-white">
                Drainage Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/gutter-cleaning-chattanooga"
                className="hover:text-white"
              >
                Gutter Cleaning in Chattanooga
              </Link>
            </li>
          </ul>

          <h4 className="mt-8 text-xs font-semibold uppercase tracking-wider text-cream">
            Exterior Cleaning
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/exterior-cleaning"
                className="font-semibold hover:text-white"
              >
                Exterior Cleaning
              </Link>
            </li>
            <li>
              <Link to="/services/pressure-washing" className="hover:text-white">
                Pressure Washing
              </Link>
            </li>
            <li>
              <Link to="/exterior-cleaning/house-washing" className="hover:text-white">
                House &amp; Soft Washing
              </Link>
            </li>
            <li>
              <Link to="/exterior-cleaning/roof-cleaning" className="hover:text-white">
                Roof Cleaning
              </Link>
            </li>
            <li>
              <Link to="/exterior-cleaning/driveway-cleaning" className="hover:text-white">
                Driveway &amp; Concrete
              </Link>
            </li>
            <li>
              <Link to="/exterior-cleaning/deck-fence-cleaning" className="hover:text-white">
                Deck &amp; Fence Cleaning
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
          <iframe
            title="Gutter-It LLC location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667186.2086434828!2d-85.32276045!3d35.3004385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472a3c34fb6a7cf3%3A0xc5feb40263a52d42!2sGutter%20It!5e0!3m2!1sen!2sus!4v1781489259288!5m2!1sen!2sus"
            className="mt-4 h-40 w-full rounded-lg border border-white/10"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
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
              <Link to="/service-areas" className="hover:text-white">
                Service Areas
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQ
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
