import { ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { profile } from "@/lib/constants";

export function HeroContent() {
  const titleWords = ["Building", "systems", "that", "move", "work", "forward."];

  return (
    <div className="hero-content">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Available for the right challenge</p>
        <h1 className="hero-title">
          {titleWords.map((word, index) => <span className={index === titleWords.length - 1 ? "accent-word" : ""} key={word}>{word}</span>)}
        </h1>
        <p className="hero-description">{profile.valueProposition}</p>
        <div className="hero-actions">
          <MagneticButton href="/#projects">Explore selected work</MagneticButton>
          <MagneticButton href="/resume.pdf" variant="outline" download>Download resume</MagneticButton>
        </div>
      </div>
      <div className="hero-meta">
        <span>01 / 06</span>
        <span>Scroll to explore <ArrowDown size={14} aria-hidden="true" /></span>
      </div>
    </div>
  );
}
