import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/constants";
import { InteractiveCard } from "@/components/animations/InteractiveCard";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <InteractiveCard className={`project-card project-${project.accent}`}>
      <Link className="project-visual" href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}>
        <span className="project-number">0{index + 1}</span>
        <span className="visual-grid" aria-hidden="true" />
        <span className="visual-orb visual-orb-one" aria-hidden="true" />
        <span className="visual-orb visual-orb-two" aria-hidden="true" />
        <span className="visual-code" aria-hidden="true">{`{ build: "better" }`}</span>
        <span className="project-open"><ArrowUpRight size={22} aria-hidden="true" /></span>
      </Link>
      <div className="project-info">
        <div>
          <p className="project-category">{project.category}</p>
          <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
          <p className="project-impact">{project.impact}</p>
        </div>
        <div className="project-bottom">
          <p className="project-role">{project.role}</p>
          <div className="stack-list" aria-label="Technology stack">
            {project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </InteractiveCard>
  );
}

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="inline-links">
      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live demo <ExternalLink size={14} /></a>}
      {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub <ExternalLink size={14} /></a>}
    </div>
  );
}
