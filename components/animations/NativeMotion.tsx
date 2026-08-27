"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type MotionTween = gsap.core.Tween;

export function NativeMotion() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tweens: MotionTween[] = [];
    const firstOrb = document.querySelector<HTMLElement>(".ambient-orb-one");
    const secondOrb = document.querySelector<HTMLElement>(".ambient-orb-two");
    const orbs = document.querySelector<HTMLElement>(".ambient-orbs");
    const noise = document.querySelector<HTMLElement>(".hero-noise");

    if (firstOrb) tweens.push(gsap.to(firstOrb, { x: 60, y: 35, duration: 14, repeat: -1, yoyo: true, ease: "sine.inOut" }));
    if (secondOrb) tweens.push(gsap.to(secondOrb, { x: -45, y: -55, duration: 17, repeat: -1, yoyo: true, ease: "sine.inOut" }));
    if (orbs) tweens.push(gsap.to(orbs, { rotate: 360, duration: 90, repeat: -1, ease: "none" }));
    if (noise) tweens.push(gsap.to(noise, { opacity: 0.065, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" }));

    return () => tweens.forEach((tween) => tween.kill());
  }, []);

  return <div ref={rootRef} className="native-motion" aria-hidden="true" />;
}
