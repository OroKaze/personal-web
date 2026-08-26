"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/lib/constants";
import { Reveal } from "@/components/animations/Reveal";

gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const line = element?.querySelector<HTMLElement>(".timeline-progress");
    if (!element || !line || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(line, { height: 0 }, {
      height: "100%",
      ease: "none",
      scrollTrigger: { trigger: element, start: "top 70%", end: "bottom 75%", scrub: 1 },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) trigger.kill();
      });
    };
  }, []);

  return (
    <div ref={ref} className="timeline">
      <span className="timeline-track" aria-hidden="true" /><span className="timeline-progress" aria-hidden="true" />
      {experiences.map((experience, index) => (
        <Reveal key={`${experience.company}-${experience.period}`} className="timeline-item" delay={index * 0.04}>
          <div className="timeline-dot" aria-hidden="true" />
          <div className="timeline-period mono-label">{experience.period}</div>
          <div className="timeline-content">
            <div className="timeline-title"><h3>{experience.role}</h3><span>{experience.type}</span></div>
            <p className="company-name">{experience.company}</p>
            <p className="timeline-summary">{experience.summary}</p>
            <ul>{experience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-heading split-heading"><Reveal><p className="eyebrow">/ 04 — Experience</p></Reveal><Reveal delay={0.08}><h2>A track record of<br /><em>making things better.</em></h2></Reveal></div>
        <Timeline />
      </div>
    </section>
  );
}
