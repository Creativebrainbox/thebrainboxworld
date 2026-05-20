import { useEffect } from "react";

/**
 * Observes elements with class `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-zoom`
 * and toggles `.is-visible` on intersection. Mount once near app root.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const selector = ".reveal, .reveal-left, .reveal-right, .reveal-zoom";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    const scan = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains("is-visible")) observer.observe(el);
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);
}
