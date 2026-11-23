"use client";

import { useEffect, useState } from "react";

type SectionNavigation = {
  activeId: string;
  topId: string;
};

export function useSectionNavigation(
  sectionIds: readonly string[],
): SectionNavigation {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const [topId, setTopId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    let frame = 0;

    const update = () => {
      const activeLine = window.innerHeight * 0.35;
      const topLine = window.innerWidth >= 768 ? 80 : 64;

      const activeSection =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= activeLine && rect.bottom > activeLine;
        }) ?? sections[sections.length - 1];

      const topSection =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= topLine && rect.bottom > topLine;
        }) ?? sections[0];

      setActiveId(activeSection.id);
      setTopId(topSection.id);
    };

    const onScroll = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        update();
        frame = 0;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [sectionIds]);

  return { activeId, topId };
}
