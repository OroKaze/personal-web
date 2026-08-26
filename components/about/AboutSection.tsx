import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { profile, strengths } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-heading about-heading">
          <Reveal><p className="eyebrow">/ 01 — About the approach</p></Reveal>
          <Reveal delay={0.08}><h2>The best systems make<br /><em>complexity feel simple.</em></h2></Reveal>
        </div>
        <div className="about-layout">
          <Reveal className="about-copy">
            <p className="large-copy">
              I&apos;m {profile.name}, an analytical technology professional working at the intersection of intelligent automation, AI, quality assurance, and web development.
            </p>
            <p>
              My work starts with understanding how people and processes actually operate. From there, I design technical systems that remove repetitive effort, improve accuracy, and remain dependable as they grow.
            </p>
            <a className="text-link" href={`mailto:${profile.email}`}>Let&apos;s talk about a problem <ArrowUpRight size={16} aria-hidden="true" /></a>
          </Reveal>
          <div className="strength-list">
            {strengths.map((strength, index) => (
              <Reveal key={strength.index} delay={index * 0.1} className="strength-item">
                <span className="mono-label">{strength.index}</span>
                <div><h3>{strength.title}</h3><p>{strength.description}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
