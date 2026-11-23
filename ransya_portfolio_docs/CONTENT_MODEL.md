# Content Model

Simpan data terpisah dari komponen UI agar konten mudah diperbarui.

## Project

``` ts
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
```

## Tech stack

``` ts
export interface TechItem {
  name: string;
  category: "language" | "framework" | "database" | "tool" | "platform";
  icon?: string;
  description?: string;
  featured?: boolean;
}
```

## Artwork

``` ts
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
```

## 3D animation

``` ts
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
```

## Data integrity

Nama Fox, WILLE ZUR MACHT, Blossom, KasirKu, dan Android Music Player
adalah kandidat konten yang pernah disebut, bukan data publikasi final.
Konfirmasi aset, deskripsi, status, tahun, dan URL sebelum ditampilkan.
Jangan membuat statistik atau klaim dampak.
