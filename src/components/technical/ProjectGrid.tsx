import type { Project } from "@/types/content";
import { ProjectCard, ProjectCardPlaceholder } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {projects.length > 0
        ? projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        : Array.from({ length: 2 }, (_, index) => (
            <ProjectCardPlaceholder key={index} index={index + 1} />
          ))}
    </div>
  );
}
