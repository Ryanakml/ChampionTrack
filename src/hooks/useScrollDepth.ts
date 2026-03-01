import { useEffect } from "react";
import { trackScrollDepth } from "@/lib/analytics";

const THRESHOLDS = [25, 50, 75, 100];

export const useScrollDepth = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrolled =
          docHeight > 0 ? (window.scrollY / docHeight) * 100 : 100;
        const percent = Math.min(100, Math.round(scrolled));

        THRESHOLDS.forEach((threshold) => {
          if (percent >= threshold) {
            trackScrollDepth(threshold);
          }
        });

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
