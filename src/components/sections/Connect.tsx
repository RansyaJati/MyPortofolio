import { ArrowUp } from "lucide-react";
import { Section } from "@/components/ui/Section";

const contactChannels = [
  {
    label: "Email",
    value: "[ADD PUBLIC EMAIL]",
  },
  {
    label: "Social",
    value: "[ADD VERIFIED SOCIAL LINKS]",
  },
];

export function Connect() {
  return (
    <Section
      id="connect"
      theme="light"
      className="border-t border-border py-24 md:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-muted">
            04 — Connect
          </p>
          <h2 className="font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-fg sm:text-5xl lg:text-6xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            [ADD CONNECT INTRODUCTION] A short note about the kind of
            conversations, collaborations, or opportunities you are open to.
          </p>
        </div>

        <div className="lg:col-span-5">
          <dl className="border-y border-border">
            {contactChannels.map((channel) => (
              <div
                key={channel.label}
                className="flex flex-col gap-2 border-b border-border py-5 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                  {channel.label}
                </dt>
                <dd className="text-sm text-fg sm:text-right">
                  {channel.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm leading-relaxed text-muted">
            [ADD CONTACT NOTE — preferred channel or response expectations, if
            confirmed.]
          </p>

          <a
            href="#introduction"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors hover:text-muted"
          >
            Back to the beginning
            <ArrowUp aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
