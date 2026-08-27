"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function MotionCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!cursor || !follower || !finePointer || reducedMotion) return;

    const cursorX = gsap.quickTo(cursor, "x", { duration: 0.12, ease: "power3.out" });
    const cursorY = gsap.quickTo(cursor, "y", { duration: 0.12, ease: "power3.out" });
    const followerX = gsap.quickTo(follower, "x", { duration: 0.45, ease: "power3.out" });
    const followerY = gsap.quickTo(follower, "y", { duration: 0.45, ease: "power3.out" });
    const interactive = "a, button, [data-cursor-label]";

    const move = (event: PointerEvent) => {
      cursorX(event.clientX);
      cursorY(event.clientY);
      followerX(event.clientX);
      followerY(event.clientY);
    };
    const enter = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      follower.dataset.label = target.dataset.cursorLabel || "view";
      follower.classList.add("is-active");
    };
    const leave = () => follower.classList.remove("is-active");

    window.addEventListener("pointermove", move, { passive: true });
    const elements = Array.from(document.querySelectorAll<HTMLElement>(interactive));
    elements.forEach((element) => {
      element.addEventListener("pointerenter", enter);
      element.addEventListener("pointerleave", leave);
    });

    return () => {
      window.removeEventListener("pointermove", move);
      elements.forEach((element) => {
        element.removeEventListener("pointerenter", enter);
        element.removeEventListener("pointerleave", leave);
      });
    };
  }, []);

  return (
    <>
      <span ref={cursorRef} className="motion-cursor" aria-hidden="true" />
      <span ref={followerRef} className="motion-cursor-follower" aria-hidden="true" />
    </>
  );
}
