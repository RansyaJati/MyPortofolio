import type { SectionTheme } from "@/types/theme";

export type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "technical", label: "Technical" },
  { id: "creative", label: "Creative" },
  { id: "about", label: "About" },
  { id: "connect", label: "Connect" },
];

export const sectionThemes: Record<string, SectionTheme> = {
  introduction: "light",
  technical: "light",
  creative: "dark",
  about: "light",
  connect: "light",
};

export const sectionIds = Object.keys(sectionThemes);
