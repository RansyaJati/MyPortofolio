import type { TechItem } from "@/types/content";

type TechGroup = {
  id: string;
  label: string;
  placeholder: string;
  categories: TechItem["category"][];
};

export const techGroups: TechGroup[] = [
  {
    id: "languages",
    label: "Languages",
    placeholder: "[ADD LANGUAGES]",
    categories: ["language"],
  },
  {
    id: "frameworks",
    label: "Frameworks & libraries",
    placeholder: "[ADD FRAMEWORKS]",
    categories: ["framework"],
  },
  {
    id: "databases",
    label: "Databases",
    placeholder: "[ADD DATABASES]",
    categories: ["database"],
  },
  {
    id: "tools",
    label: "Tools & platforms",
    placeholder: "[ADD TOOLS & PLATFORMS]",
    categories: ["tool", "platform"],
  },
];

// Add confirmed tech stack data here. Do not invent proficiency levels.
export const techStack: TechItem[] = [];
