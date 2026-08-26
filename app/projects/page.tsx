import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

export const metadata: Metadata = {
  title: "Selected Projects",
  description: "Selected automation, AI, quality engineering, and web development projects by Muhammad Nurhuda Rusardi.",
};

export default function ProjectsPage() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <main className="projects-page">
        <div className="container">
          <Link className="back-link" href="/"><ArrowLeft size={16} aria-hidden="true" /> Back home</Link>
          <p className="page-kicker">Selected work / 2022—2026</p>
          <h1 className="page-title">Systems built to<br /><em>move work forward.</em></h1>
          <ProjectGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
