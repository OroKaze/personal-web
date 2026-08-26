"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroContent } from "@/components/hero/HeroContent";
import { AboutSection } from "@/components/about/AboutSection";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SkillsSection } from "@/components/skills/SkillGroup";
import { ExperienceSection } from "@/components/experience/Timeline";
import { ContactSection } from "@/components/contact/ContactSection";
import { AmbientOrbs, CursorGlow, ScrollProgress, ScrollToTop } from "@/components/animations/ScrollProgress";
import { RouteTransition } from "@/components/animations/RouteTransition";
import { BackgroundMotion } from "@/components/animations/BackgroundMotion";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { HeroReveal, Reveal } from "@/components/animations/Reveal";
import { education, personJsonLd, websiteJsonLd, highlights } from "@/lib/constants";

const HeroScene3D = dynamic(() => import("@/components/hero/HeroScene3D").then((module) => module.HeroScene3D), {
  ssr: false,
  loading: () => <div className="scene-fallback" aria-hidden="true"><span /></div>,
});

export function HomePage() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />
      <AmbientOrbs />
      <RouteTransition />
      <BackgroundMotion />
      <Header />
      <main>
        <section className="hero-section" id="top">
          <div className="hero-noise" aria-hidden="true" />
          <div className="container hero-layout">
            <HeroReveal><HeroContent /></HeroReveal>
            <HeroScene3D />
          </div>
          <div className="hero-footer container"><span>INTELLIGENT AUTOMATION / AI / QUALITY</span><span>Jakarta, ID · 2026</span></div>
        </section>

        <section className="signal-strip" aria-label="Career highlights">
          <div className="container signal-grid">
            {highlights.map((highlight) => <div className="signal-item" key={highlight.label}><strong>{highlight.value}</strong><span>{highlight.label}</span></div>)}
          </div>
        </section>

        <AboutSection />

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading split-heading"><Reveal><p className="eyebrow">/ 02 — Selected work</p></Reveal><Reveal delay={0.08}><h2>Built for the real world,<br /><em>not just the showcase.</em></h2></Reveal></div>
            <Reveal className="section-intro"><p>Selected systems and products from my work in automation, AI, quality engineering, and web development.</p><Link className="text-link" href="/projects">See all projects <ArrowUpRight size={16} aria-hidden="true" /></Link></Reveal>
            <ProjectGrid featuredOnly />
          </div>
        </section>

        <SkillsSection />
        <ExperienceSection />

        <section className="section education-section">
          <div className="container education-layout"><Reveal><p className="eyebrow">/ 05 — Foundation</p></Reveal><Reveal delay={0.08}><div><h2>{education.degree}</h2><p>{education.institution} <span>·</span> {education.period}</p></div></Reveal></div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
    </>
  );
}
