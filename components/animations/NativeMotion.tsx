"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function NativeMotion() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const firstOrb = document.querySelector<HTMLElement>(".ambient-orb-one");
      const secondOrb = document.querySelector<HTMLElement>(".ambient-orb-two");
      const orbs = document.querySelector<HTMLElement>(".ambient-orbs");

      if (firstOrb) gsap.to(firstOrb, { x: 60, y: 35, duration: 14, repeat: -1, yoyo: true, ease: "sine.inOut" });
      if (secondOrb) gsap.to(secondOrb, { x: -45, y: -55, duration: 17, repeat: -1, yoyo: true, ease: "sine.inOut" });
      if (orbs) gsap.to(orbs, { rotate: 360, duration: 90, repeat: -1, ease: "none" });

      document.querySelectorAll<HTMLElement>(".reveal-on-scroll").forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: Math.min(index * 0.025, 0.2),
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 86%", once: true },
          },
        );
      });

      const timeline = document.querySelector<HTMLElement>(".timeline");
      const line = document.querySelector<HTMLElement>(".timeline-progress");
      if (timeline && line) {
        gsap.fromTo(
          line,
          { height: 0 },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: { trigger: timeline, start: "top 70%", end: "bottom 75%", scrub: 1 },
          },
        );
      }
    }, root);

    ScrollTrigger.refresh();
    return () => context.revert();
  }, []);

  return <div ref={rootRef} aria-hidden="true" />;
}
