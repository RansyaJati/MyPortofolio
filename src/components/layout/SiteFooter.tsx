import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer data-theme="light" className="border-t border-border bg-bg text-fg">
      <Container>
        <div className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
          <div>
            <a
              href="#introduction"
              className="group inline-flex items-center gap-2.5 rounded-sm py-2 font-heading text-sm font-semibold tracking-tight text-fg transition-colors"
            >
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-accent transition-transform duration-300 motion-safe:group-hover:scale-125"
              />
              Ransya Maulana
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Software development and creative work, brought together in one
              place.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Social
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg">
                [ADD VERIFIED SOCIAL LINKS]
              </p>
            </div>

            <a
              href="#introduction"
              className="inline-flex items-center gap-2 self-start rounded-sm py-2 text-sm font-medium text-fg transition-colors hover:text-muted"
            >
              Back to top
              <ArrowUp aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ransya Maulana. All rights reserved.</p>
          <p>Designed and built as a single-page portfolio.</p>
        </div>
      </Container>
    </footer>
  );
}
