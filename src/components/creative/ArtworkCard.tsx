import Image from "next/image";
import type { Artwork } from "@/types/content";

type ArtworkCardProps = {
  artwork: Artwork;
  className?: string;
};

export function ArtworkCard({ artwork, className = "" }: ArtworkCardProps) {
  const titleId = `artwork-${artwork.slug}-title`;

  return (
    <figure
      tabIndex={0}
      aria-labelledby={titleId}
      className={`group overflow-hidden border border-border bg-surface ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={artwork.image}
          alt={artwork.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03] motion-safe:group-focus-within:scale-[1.03]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-white/75">
            {artwork.category}
            {artwork.year ? ` · ${artwork.year}` : ""}
          </p>
          <p className="mt-2 font-heading text-lg font-medium text-white">
            {artwork.title}
          </p>
        </div>
      </div>

      <figcaption className="flex items-start justify-between gap-4 p-4">
        <div>
          <h4 id={titleId} className="font-heading text-lg font-medium text-fg">
            {artwork.title}
          </h4>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
            {artwork.category}
          </p>
          {artwork.description ? (
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {artwork.description}
            </p>
          ) : null}
        </div>
        {artwork.year ? (
          <span className="shrink-0 text-xs text-muted">{artwork.year}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}
