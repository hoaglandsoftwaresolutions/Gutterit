import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { BUSINESS } from "../../data/business";
import { ButtonLink } from "../ui/Button";
import { cn } from "../../lib/utils";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/5 bg-cream/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="flex items-center gap-2 text-navy"
          aria-label="Gutter-It home"
        >
          <img
            src="/gutterit.logo.png"
            alt=""
            width={36}
            height={36}
            className="h-8 w-8 md:h-9 md:w-9"
          />
          <span className="font-display text-xl font-bold tracking-wider md:text-2xl">
            {BUSINESS.shortName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-amber",
                  isActive ? "text-amber" : "text-navy/80",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-amber"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <ButtonLink to="/contact" size="sm">
            Get Free Quote
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-12 w-12 -mr-2 grid place-items-center text-navy"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-navy/5 bg-cream">
          <div className="container py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-base font-medium",
                    isActive ? "text-amber" : "text-navy",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="mt-2 flex items-center gap-2 py-3 text-base font-semibold text-navy"
            >
              <Phone className="h-4 w-4 text-electric" />
              {BUSINESS.phone}
            </a>
            <ButtonLink to="/contact" className="mt-2 w-full">
              Get Free Quote
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
