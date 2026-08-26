import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress, AmbientOrbs, CursorGlow, ScrollToTop } from "@/components/animations/ScrollProgress";
import { RouteTransition } from "@/components/animations/RouteTransition";
import { profile, education, experiences, skillGroups } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name}, Intelligent Automation Engineer and AI Developer.`,
};

export default function ResumePage() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <AmbientOrbs />
      <RouteTransition />
      <Header />
      <main className="resume-page">
        <div className="container resume-shell">
          <div className="resume-toolbar"><Link className="back-link" href="/"><ArrowLeft size={16} aria-hidden="true" /> Back home</Link><a className="download-link" href="/resume.pdf" download>Download PDF <ArrowDownToLine size={16} aria-hidden="true" /></a></div>
          <header className="resume-header"><p className="eyebrow">Curriculum vitae / 2026</p><h1>{profile.name}</h1><p className="resume-role">{profile.role}</p><div className="resume-contact"><span>{profile.email}</span><span>{profile.phone}</span><span>{profile.location}</span></div></header>
          <section className="resume-section"><h2>Profile</h2><p>{profile.valueProposition} An analytical technology professional with 4+ years of experience across the Software Development Life Cycle, bridging IT and business through scalable technical solutions.</p></section>
          <section className="resume-section"><h2>Experience</h2><div className="resume-experience">{experiences.map((experience) => <article key={`${experience.company}-${experience.period}`}><div><span className="mono-label">{experience.period}</span><h3>{experience.role}</h3><p>{experience.company} · {experience.type}</p></div><ul>{experience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></article>)}</div></section>
          <section className="resume-section"><h2>Capabilities</h2><div className="resume-skills">{skillGroups.map((group) => <div key={group.title}><h3>{group.title}</h3><p>{group.items.join(" · ")}</p></div>)}</div></section>
          <section className="resume-section"><h2>Education</h2><p><strong>{education.degree}</strong><br />{education.institution} · {education.period}</p></section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
