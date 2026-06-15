import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { BUSINESS } from "../../data/business";
import { SERVICES } from "../../data/services";
import { ButtonLink } from "../ui/Button";
import { cn } from "../../lib/utils";

const NAV_AFTER_SERVICES = [
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!servicesOpen) return;
    function handleClick(e: MouseEvent) {
      if (!servicesRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [servicesOpen]);

  const onServicesRoute = location.pathname.startsWith("/services");

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
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onFocus={() => setServicesOpen(true)}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-amber",
                onServicesRoute ? "text-amber" : "text-navy/80",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
              />
            </Link>
            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 overflow-hidden rounded-xl border border-navy/10 bg-white shadow-card before:absolute before:-top-3 before:left-0 before:h-3 before:w-full before:content-['']"
              >
                <Link
                  to="/services"
                  role="menuitem"
                  className="block border-b border-navy/5 px-4 py-3 text-sm font-semibold text-navy hover:bg-cream"
                >
                  Services Overview
                </Link>
                <ul>
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <NavLink
                        to={`/services/${s.slug}`}
                        role="menuitem"
                        className={({ isActive }) =>
                          cn(
                            "block px-4 py-3 text-sm transition-colors hover:bg-cream",
                            isActive
                              ? "font-semibold text-amber"
                              : "text-navy/80",
                          )
                        }
                      >
                        {s.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {NAV_AFTER_SERVICES.map((item) => (
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
            <NavLink
              to="/services"
              className={({ isActive }) =>
                cn(
                  "py-3 text-base font-semibold",
                  isActive ? "text-amber" : "text-navy",
                )
              }
            >
              Services
            </NavLink>
            <div className="flex flex-col border-l-2 border-navy/10 pl-4">
              {SERVICES.map((s) => (
                <NavLink
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className={({ isActive }) =>
                    cn(
                      "py-2.5 text-sm",
                      isActive
                        ? "font-semibold text-amber"
                        : "text-navy/80",
                    )
                  }
                >
                  {s.title}
                </NavLink>
              ))}
            </div>
            {NAV_AFTER_SERVICES.map((item) => (
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
