"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, profile } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label={`${profile.name} home`} onClick={() => setIsOpen(false)}>
          <span className="brand-mark">MR</span>
          <span className="brand-name">Huda Rusardi</span>
        </Link>

        <nav className={`desktop-nav ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a className="nav-resume" href="/resume.pdf" download>
            Resume <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>
    </header>
  );
}
