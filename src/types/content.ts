export type ProjectStatus = "completed" | "in-progress" | "experimental";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  role?: string;
  description?: string;
  technologies: string[];
  features?: string[];
  coverImage: string;
  gallery?: string[];
  status: ProjectStatus;
  year?: number;
  repositoryUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface TechItem {
  name: string;
  category: "language" | "framework" | "database" | "tool" | "platform";
  icon?: string;
  description?: string;
  featured?: boolean;
}

export interface Artwork {
  slug: string;
  title: string;
  category: string;
  year?: number;
  description?: string;
  image: string;
  alt: string;
  featured: boolean;
}

export interface AnimationWork {
  slug: string;
  title: string;
  year?: number;
  description?: string;
  thumbnail: string;
  video: string;
  duration?: string;
  software?: string[];
  alt: string;
  featured: boolean;
}
