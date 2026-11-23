import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const aboutDetails = [
  {
    term: "Interests",
    detail: "[ADD INTERESTS — topics, mediums, or disciplines you return to.]",
  },
  {
    term: "Background",
    detail: "[ADD BACKGROUND — relevant education, practice, or experience.]",
  },
  {
    term: "Principles",
    detail: "[ADD PRINCIPLES — how you approach craft, collaboration, and detail.]",
  },
];

export function About() {
  return (
    <Section
      id="about"
      theme="light"
      className="border-t border-border py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="03 — About"
        title="Two disciplines, one perspective."
        description="[ADD PERSONAL INTRODUCTION] A short introduction to the person behind the technical and creative work."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <blockquote className="border-l-2 border-accent pl-6 sm:pl-8">
            <p className="font-heading text-2xl font-medium leading-snug tracking-[-0.02em] text-fg sm:text-3xl">
              [ADD PERSONAL STATEMENT]
            </p>
          </blockquote>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
            <p>
              [ADD BACKGROUND — where the interest in software and creative work
              began, and what has shaped it since.]
            </p>
            <p>
              [ADD APPROACH — how structure and experimentation meet in your
              process, and what you care about in the work you make.]
            </p>
          </div>
        </div>

        <dl className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          {aboutDetails.map((item) => (
            <div key={item.term}>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                {item.term}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-fg">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2">
        <div className="bg-bg p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Technical
          </p>
          <p className="mt-3 font-heading text-xl font-medium tracking-tight text-fg">
            Structure
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            [ADD HOW STRUCTURE SHOWS UP IN THE SOFTWARE WORK.]
          </p>
        </div>
        <div className="bg-bg p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Creative
          </p>
          <p className="mt-3 font-heading text-xl font-medium tracking-tight text-fg">
            Direction
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            [ADD HOW DIRECTION SHOWS UP IN THE VISUAL AND MOTION WORK.]
          </p>
        </div>
      </div>
    </Section>
  );
}
