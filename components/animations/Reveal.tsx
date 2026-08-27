"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  "data-cursor-label"?: string;
};

export function Reveal({ children, className = "", delay = 0, "data-cursor-label": cursorLabel }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(element, { opacity: 0, y: 32 }, {
      opacity: 1,
      y: 0,
      delay,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 86%", once: true },
    });
  }, { scope: ref });

  return <div ref={ref} className={className} data-cursor-label={cursorLabel}>{children}</div>;
}

export function HeroReveal({ children, className = "" }: Omit<RevealProps, "delay" | "data-cursor-label">) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const words = element.querySelectorAll("h1 span");
    const context = gsap.context(() => {
      gsap.fromTo(words, { opacity: 0, y: 42, rotateX: -35 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.07, delay: 0.2, ease: "power3.out" });
      gsap.fromTo(element.querySelector(".hero-description"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.8, ease: "power2.out" });
      gsap.fromTo(element.querySelectorAll(".hero-actions, .hero-eyebrow"), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, delay: 1, stagger: 0.1, ease: "power2.out" });
    }, element);
    return () => context.revert();
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
