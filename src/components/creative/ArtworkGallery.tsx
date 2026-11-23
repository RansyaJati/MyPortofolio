import type { Artwork } from "@/types/content";
import { ArtworkCard } from "./ArtworkCard";

const artworkSpans = [
  "md:col-span-7",
  "md:col-span-5 md:mt-16",
  "md:col-span-5",
  "md:col-span-7 md:mt-16",
];

type ArtworkGalleryProps = {
  artworks: Artwork[];
};

export function ArtworkGallery({ artworks }: ArtworkGalleryProps) {
  return (
    <div className="grid items-start gap-6 sm:grid-cols-2 md:grid-cols-12">
      {artworks.length > 0
        ? artworks.map((artwork, index) => (
            <ArtworkCard
              key={artwork.slug}
              artwork={artwork}
              className={artworkSpans[index % artworkSpans.length]}
            />
          ))
        : artworkSpans.map((span, index) => (
            <ArtworkCardPlaceholder
              key={index}
              index={index + 1}
              className={span}
            />
          ))}
    </div>
  );
}

function ArtworkCardPlaceholder({
  index,
  className = "",
}: {
  index: number;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden border border-border bg-surface ${className}`}
    >
      <div className="flex aspect-[4/5] items-center justify-center border-b border-dashed border-border p-4 text-center text-xs uppercase tracking-[0.2em] text-muted">
        [ADD ARTWORK]
      </div>
      <figcaption className="p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Artwork {String(index).padStart(2, "0")}
        </p>
        <h4 className="mt-2 font-heading text-lg font-medium text-fg">
          [ADD ARTWORK TITLE]
        </h4>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
          [ADD CATEGORY]
        </p>
      </figcaption>
    </figure>
  );
}
