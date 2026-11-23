import { ProjectGrid } from "@/components/technical/ProjectGrid";
import { Profile } from "@/components/technical/Profile";
import { TechStackGroup } from "@/components/technical/TechStackGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { techGroups, techStack } from "@/data/tech-stack";

export function Technical() {
  return (
    <Section
      id="technical"
      theme="light"
      className="min-h-[70vh] border-t border-border py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="01 — Technical"
        title="Structured, thoughtful software."
        description="[ADD TECHNICAL INTRODUCTION] A concise overview of the software work, focus, and selected projects."
      />

      <div className="mt-16 space-y-20">
        <Profile />

        <div>
          <h3 className="font-heading text-2xl font-medium tracking-tight text-fg">
            Tech stack
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techGroups.map((group) => (
              <TechStackGroup
                key={group.id}
                label={group.label}
                items={techStack.filter((item) =>
                  group.categories.some(
                    (category) => category === item.category,
                  ),
                )}
                placeholder={group.placeholder}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-heading text-2xl font-medium tracking-tight text-fg">
              Selected projects
            </h3>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              [ADD PROJECTS]
            </span>
          </div>
          <div className="mt-6">
            <ProjectGrid projects={projects} />
          </div>
        </div>
      </div>
    </Section>
  );
}
