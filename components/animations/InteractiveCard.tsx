"use client";

import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

type InteractiveCardProps = {
  children: ReactNode;
  className?: string;
};

export function InteractiveCard({ children, className = "" }: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    element.style.setProperty("--tilt-x", `${y * -3.5}deg`);
    element.style.setProperty("--tilt-y", `${x * 3.5}deg`);
    element.style.setProperty("--spot-x", `${(x + 0.5) * 100}%`);
    element.style.setProperty("--spot-y", `${(y + 0.5) * 100}%`);
    element.classList.add("is-tilting");
  };

  const handleLeave = () => {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
    element.classList.remove("is-tilting");
  };

  return (
    <div
      ref={ref}
      className={`interactive-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
