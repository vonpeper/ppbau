"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    // Check if the browser supports native CSS scroll-driven animations
    if (typeof window !== "undefined" && typeof CSS !== "undefined") {
      const supportsScrollTimeline = CSS.supports(
        "(animation-timeline: view()) and (animation-range: entry)"
      );

      if (!supportsScrollTimeline) {
        // Fallback: Use IntersectionObserver to add a class when elements enter the viewport
        const observerOptions = {
          root: null, // Viewport
          threshold: 0.15, // Trigger when 15% of the element is visible
          rootMargin: "0px 0px -50px 0px", // Offset triggering slightly before entering full view
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("observed");
              // Once animated, we can unobserve if we only want entrance animations
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        // Find all elements marked for JS scroll fallback
        const animatedElements = document.querySelectorAll(".js-scroll-element");
        animatedElements.forEach((el) => observer.observe(el));

        return () => {
          animatedElements.forEach((el) => observer.unobserve(el));
        };
      }
    }
  }, []);

  return null; // This component has no visual UI, it only hooks lifecycle triggers
}
