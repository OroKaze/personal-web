"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!scene || reducedMotion) return;

    const context = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>(".hero-section");
      const heroCopy = document.querySelector<HTMLElement>(".hero-copy");
      const heroScene = document.querySelector<HTMLElement>(".hero-scene");
      const signalItems = gsap.utils.toArray<HTMLElement>(".signal-item");
      const sectionEyes = gsap.utils.toArray<HTMLElement>(".section-heading .eyebrow, .page-kicker");
      const cards = gsap.utils.toArray<HTMLElement>(".project-card, .skill-group");

      if (hero && heroCopy && heroScene) {
        gsap.to(heroCopy, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 },
        });
        gsap.to(heroScene, {
          yPercent: 16,
          rotate: 4,
          scale: 0.9,
          opacity: 0.22,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1.2 },
        });
        gsap.to(".hero-grid-line", {
          xPercent: -18,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 },
        });
      }

      signalItems.forEach((item, index) => {
        gsap.fromTo(item, { y: 24, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 92%", once: true },
        });
      });

      sectionEyes.forEach((eye) => {
        gsap.fromTo(eye, { x: -24, opacity: 0 }, {
          x: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: eye, start: "top 88%", once: true },
        });
      });

      cards.forEach((card) => {
        gsap.fromTo(card, { y: 38, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
        });
      });
    }, scene);

    return () => context.revert();
  }, []);

  return <div ref={sceneRef} className="scroll-scene" aria-hidden="true" />;
}

export default ScrollScene;
