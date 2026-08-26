import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillGroup";
import { education, profile, certifications } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "About Muhammad Nurhuda Rusardi and his approach to automation, AI, QA, and web development.",
};

export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <main className="projects-page about-page">
        <div className="container">
          <Link className="back-link" href="/"><ArrowLeft size={16} aria-hidden="true" /> Back home</Link>
          <p className="page-kicker">About / How I work</p>
          <h1 className="page-title">Technology should<br /><em>make progress visible.</em></h1>
          <div className="about-page-intro"><p>{profile.valueProposition}</p><a className="text-link" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
        <div className="about-page-sections">
          <AboutSection />
          <SkillsSection />
        </div>
        <section className="section certification-section"><div className="container"><p className="eyebrow">/ Learning continuously</p><div className="certification-layout"><div><h2>Courses &<br /><em>certifications.</em></h2></div><ul>{certifications.map((certification) => <li key={certification}>{certification}</li>)}</ul></div><p className="education-note">{education.degree} · {education.institution} · {education.period}</p></div></section>
      </main>
      <Footer />
    </>
  );
}
