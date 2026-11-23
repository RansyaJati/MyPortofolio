import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/content";

const statusLabels: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In progress",
  experimental: "Experimental",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col border-t border-border pt-5">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={project.coverImage}
          alt={`${project.title} cover`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.02] motion-safe:group-focus-within:scale-[1.02]"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h4 className="font-heading text-xl font-medium text-fg">
            {project.title}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>
        <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-muted">
          {statusLabels[project.status]}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-sm border border-border px-2 py-1 text-xs text-muted"
          >
            {technology}
          </span>
        ))}
      </div>

      {project.demoUrl || project.repositoryUrl ? (
        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-fg transition-colors hover:text-muted"
            >
              Live demo
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          ) : null}
          {project.repositoryUrl ? (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-fg transition-colors hover:text-muted"
            >
              Repository
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function ProjectCardPlaceholder({ index }: { index: number }) {
  return (
    <article className="flex h-full flex-col border-t border-border pt-5">
      <div className="flex aspect-[16/10] items-center justify-center border border-dashed border-border bg-surface text-xs uppercase tracking-[0.2em] text-muted">
        [ADD PROJECT SCREENSHOT]
      </div>

      <div className="mt-5">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Project {String(index).padStart(2, "0")}
        </p>
        <h4 className="mt-2 font-heading text-xl font-medium text-fg">
          [ADD PROJECT NAME]
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          [ADD PROJECT SUMMARY]
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-sm border border-border px-2 py-1 text-xs text-muted">
          [ADD STACK]
        </span>
        <span className="rounded-sm border border-border px-2 py-1 text-xs text-muted">
          [ADD STATUS]
        </span>
      </div>
    </article>
  );
}
