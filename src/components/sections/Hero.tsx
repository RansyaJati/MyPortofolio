import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section
      id="introduction"
      theme="light"
      className="flex min-h-dvh items-center pb-20 pt-28 md:pt-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        <div className="hero-enter max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.24em] text-muted">
            Portfolio — 2026
          </p>
          <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-fg sm:text-7xl lg:text-8xl">
            Designing &amp; building digital experiences.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Software development and creative work, brought together in one
            place.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#technical"
              className="inline-flex items-center gap-2 rounded-sm bg-fg px-5 py-3 text-sm font-medium text-bg transition hover:opacity-90 motion-safe:hover:-translate-y-0.5"
            >
              Explore technical work
              <ArrowDownRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="#creative"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-fg"
            >
              View creative work
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="hero-enter hero-enter-delay-1 hidden lg:block"
        >
          <div className="aspect-square border border-border p-4">
            <div className="grid h-full grid-cols-2 grid-rows-2 gap-px bg-border">
              <div className="flex flex-col justify-between bg-bg p-4">
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  Technical
                </span>
                <span className="h-px w-10 bg-accent" />
              </div>
              <div className="flex flex-col justify-between bg-bg p-4">
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  Creative
                </span>
                <span className="h-px w-10 bg-accent" />
              </div>
              <div className="col-span-2 flex items-end justify-between bg-bg p-4">
                <span className="font-heading text-4xl font-semibold tracking-tight text-fg">
                  RM
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  Portfolio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
