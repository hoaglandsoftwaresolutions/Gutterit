import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

type Variant = "primary" | "dark" | "outline" | "tile" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-electric text-white hover:bg-electric-600 active:bg-electric-700 shadow-cta hover:shadow-cta",
  dark:
    "bg-navy text-white hover:bg-navy-700 active:bg-navy-800",
  outline:
    "border-2 border-navy bg-transparent text-navy hover:bg-navy/5 active:bg-navy/5",
  tile:
    "border border-navy/15 bg-white text-navy hover:border-navy/40 hover:bg-white",
  ghost:
    "bg-transparent text-navy hover:bg-navy/5",
};

const sizeClass: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm md:text-base",
  lg: "h-12 px-7 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-60 active:scale-[0.97]";

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & CommonProps
>(({ variant = "primary", size = "md", className, children, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(base, variantClass[variant], sizeClass[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

type AnchorProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonAnchor({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: AnchorProps) {
  return (
    <a
      href={href}
      className={cn(base, variantClass[variant], sizeClass[size], className)}
      {...rest}
    >
      {children}
    </a>
  );
}

type LinkProps = {
  to: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  to,
  variant = "primary",
  size = "md",
  className,
  children,
}: LinkProps) {
  return (
    <Link
      to={to}
      className={cn(base, variantClass[variant], sizeClass[size], className)}
    >
      {children}
    </Link>
  );
}
