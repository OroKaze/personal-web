"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function RouteTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      gsap.fromTo(overlay, { scaleY: 1, transformOrigin: "top" }, { scaleY: 0, duration: 0.7, delay: 0.05, ease: "power4.inOut" });
    }, overlay);
    return () => context.revert();
  }, [pathname]);

  return <div ref={overlayRef} className="route-transition" aria-hidden="true" />;
}
