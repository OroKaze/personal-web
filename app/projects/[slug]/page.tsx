import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { allProjectSlugs, projectBySlug } from "@/lib/constants";

export function generateStaticParams() {
  return allProjectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  return project ? { title: project.title, description: project.description } : {};
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <main className="project-detail-page">
        <div className="container">
          <Link className="back-link" href="/projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
          <p className="page-kicker">{project.category} / Case study</p>
          <h1 className="page-title">{project.title}<br /><em>in practice.</em></h1>
          <div className={`detail-visual project-${project.accent}`} aria-label={`Abstract illustration for ${project.title}`} role="img">
            <span className="visual-grid" aria-hidden="true" /><span className="visual-orb visual-orb-one" aria-hidden="true" /><span className="visual-orb visual-orb-two" aria-hidden="true" /><span className="visual-code" aria-hidden="true">{`{ outcome: "useful" }`}</span>
          </div>
          <div className="project-detail-grid">
            <div className="detail-copy"><p className="eyebrow">The brief</p><h2>{project.impact}</h2><p>{project.description}</p><p>This portfolio entry is structured as a recruiter-friendly overview. A deeper case study can be expanded with the original context, constraints, architecture decisions, and verified production outcomes when those details are available.</p></div>
            <aside className="detail-meta">
              <div className="detail-meta-block"><span className="mono-label">Role</span><strong>{project.role}</strong></div>
              <div className="detail-meta-block"><span className="mono-label">Stack</span><strong>{project.stack.join(" · ")}</strong></div>
              <div className="detail-meta-block"><span className="mono-label">Focus</span><strong>{project.category}</strong></div>
            </aside>
          </div>
          <Link className="back-link" href="/projects"><ArrowLeft size={16} aria-hidden="true" /> Explore another project <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
