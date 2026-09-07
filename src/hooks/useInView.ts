"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Minimal IntersectionObserver hook powering the .reveal utility class.
 * Deliberately dependency-free — the animation vocabulary this site needs
 * (fade + small translate, once) doesn't justify an animation library.
 */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  // Always start false so the first client render matches the server-
  // rendered markup exactly; visibility is only ever flipped from an
  // effect, after mount, which is not a hydration-sensitive path.
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // Rare fallback for browsers without IntersectionObserver: reveal
      // immediately rather than leaving content permanently hidden.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}
