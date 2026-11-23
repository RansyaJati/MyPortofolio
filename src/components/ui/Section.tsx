import type { ReactNode } from "react";
import { Container } from "./Container";
import type { SectionTheme } from "@/types/theme";

type SectionProps = {
  id: string;
  theme?: SectionTheme;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  theme = "light",
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      data-theme={theme}
      className={`scroll-mt-20 bg-bg text-fg md:scroll-mt-24 ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
