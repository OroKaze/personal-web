"use client";

import Link from "next/link";
import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  download?: boolean;
};

export function MagneticButton({ href, children, variant = "solid", download = false }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <Link
      ref={ref}
      href={href}
      className={`magnetic-button magnetic-${variant}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      download={download}
    >
      <span>{children}</span>
      <span className="button-arrow" aria-hidden="true">↗</span>
    </Link>
  );
}
