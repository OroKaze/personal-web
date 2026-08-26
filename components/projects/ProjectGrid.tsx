import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/constants";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/animations/Reveal";

export function ProjectGrid({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const visibleProjects = featuredOnly ? projects.slice(0, 3) : projects;

  return (
    <div className="project-grid">
      {visibleProjects.map((project, index) => (
        <Reveal key={project.slug} delay={index * 0.06}>
          <ProjectCard project={project} index={index} />
        </Reveal>
      ))}
      {featuredOnly && (
        <Reveal className="project-more" delay={0.18}>
          <Link href="/projects">
            View all projects <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      )}
    </div>
  );
}
