"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navItems, sectionIds, sectionThemes } from "@/lib/navigation";
import { useSectionNavigation } from "@/lib/useSectionNavigation";

export function Navbar() {
  const { activeId, topId } = useSectionNavigation(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const theme = sectionThemes[topId] ?? "light";

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const firstLink =
      mobileNavRef.current?.querySelector<HTMLAnchorElement>("a");

    firstLink?.focus();
  }, [mobileOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = () => {
      if (mediaQuery.matches) {
        setMobileOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const closeMobileMenu = () => {
    if (mobileOpen) {
      menuButtonRef.current?.focus();
    }

    setMobileOpen(false);
  };

  return (
    <header
      data-theme={theme}
      className={`fixed inset-x-0 top-0 z-50 border-b border-border transition-colors duration-500 ${
        mobileOpen ? "bg-bg" : "bg-bg/85 backdrop-blur-md"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          <a
            href="#introduction"
            onClick={closeMobileMenu}
            aria-current={activeId === "introduction" ? "location" : undefined}
            className="group flex items-center gap-2.5 rounded-sm py-2 font-heading text-sm font-semibold tracking-tight text-fg transition-colors"
          >
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-accent transition-transform duration-300 motion-safe:group-hover:scale-125"
            />
            Ransya Maulana
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 md:flex"
          >
            {navItems.map((item) => {
              const isActive = activeId === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-sm px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-md text-fg transition-colors hover:bg-surface md:hidden"
          >
            {mobileOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </Container>

      <div
        ref={mobileNavRef}
        id="mobile-navigation"
        hidden={!mobileOpen}
        className="border-t border-border bg-bg md:hidden"
      >
        <Container>
          <nav aria-label="Mobile" className="flex flex-col py-4">
            {navItems.map((item) => {
              const isActive = activeId === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? "location" : undefined}
                  className={`flex items-center justify-between border-b border-border py-3 text-base transition-colors last:border-b-0 ${
                    isActive ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className={`size-1.5 rounded-full bg-accent transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </Container>
      </div>
    </header>
  );
}
