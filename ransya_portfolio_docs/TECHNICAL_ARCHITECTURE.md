# Technical Architecture

## Stack

-   Next.js (App Router)
-   TypeScript
-   Tailwind CSS
-   Motion for React
-   Lucide React
-   `next/image`
-   `next/font`

Opsional: GSAP untuk kebutuhan animasi kompleks yang tidak efisien
ditangani Motion/CSS. Cloudinary/object storage hanya jika kebutuhan
media berkembang. Gunakan versi stabil dan kompatibel saat project
dibuat.

## Rendering

-   Utamakan React Server Components.
-   Gunakan Client Components hanya untuk state, event handlers, Motion,
    IntersectionObserver, dan browser APIs.
-   Jangan menjadikan seluruh page sebagai Client Component tanpa
    alasan.
-   Konten statis dapat disimpan sebagai data TypeScript.

## Struktur folder yang disarankan

``` text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── navigation/       # Navbar, MobileMenu
│   ├── sections/         # Hero, Technical, Creative, About, Contact
│   ├── technical/        # ProjectCard, TechStackGroup
│   ├── creative/         # ArtworkCard, AnimationCard, galleries
│   └── ui/               # Container, SectionHeading
├── data/                 # projects, tech-stack, artworks, animations
├── lib/
└── types/
public/
├── images/projects/
├── images/artworks/
└── videos/animations/
```

## Theme system

Gunakan `data-theme="light"` dan `data-theme="dark"` pada section.
Contoh token:

``` css
:root {
  --color-bg: #f8f8f8;
  --color-fg: #171717;
  --color-muted: #777777;
  --color-border: #dedede;
}
[data-theme="dark"] {
  --color-bg: #111111;
  --color-fg: #f5f5f5;
  --color-muted: #999999;
  --color-border: #333333;
}
```

Gunakan IntersectionObserver atau mekanisme setara untuk mengetahui
section aktif dan menyesuaikan navbar. Hindari flicker ketika beberapa
section masuk viewport. Transisi warna cukup melalui CSS.

## Media

Images: gunakan `next/image`, ukuran/aspect ratio eksplisit, thumbnail
yang sesuai, dan alt text. Videos: MP4/WebM terkompresi, poster image,
muted, loop, playsInline. Jangan autoplay semua video. Preview berjalan
saat hover/focus atau melalui kontrol tap pada touch device. Pause saat
keluar dari card dan batasi video aktif. Sediakan fallback poster.

## Performance

-   Lazy-load media di luar viewport.
-   Gunakan transform/opacity untuk animasi.
-   Hindari layout animation berat pada banyak elemen.
-   Perhatikan Core Web Vitals dan ukuran media.

## SEO

Atur metadata Next.js, title, description, Open Graph image, favicon,
semantic headings, dan metadata halaman detail jika kelak dibuat.

## Quality

TypeScript strict, semantic HTML, no broken links, no console errors,
keyboard navigation, reduced-motion support, dan responsive layout.
