"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches a scroll-triggered reveal animation to all child elements
 * with the class "reveal". When they enter the viewport, the class
 * "revealed" is added, which triggers the CSS transition.
 */
export function useScrollReveal(threshold = 0.1) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  return containerRef;
}
