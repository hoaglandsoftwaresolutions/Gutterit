import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// One IntersectionObserver per page lifetime watches every .reveal element
// and toggles .is-visible as they scroll into view. Elements already in the
// viewport on mount are revealed immediately so nothing stays hidden if it
// happens to load above the fold.
export function useGlobalReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"),
    );
    if (elements.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    const failSafe = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    }, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failSafe);
    };
  }, [pathname]);
}
