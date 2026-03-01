import { useEffect, useRef } from "react";

export function useFadeIn<T extends HTMLElement = HTMLDivElement>(
  onVisible?: (el: T) => void,
) {
  const ref = useRef<T>(null);
  const onVisibleRef = useRef(onVisible);

  useEffect(() => {
    onVisibleRef.current = onVisible;
  }, [onVisible]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          if (onVisibleRef.current) {
            onVisibleRef.current(el as T);
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
