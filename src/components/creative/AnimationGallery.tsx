import type { AnimationWork } from "@/types/content";
import { AnimationCard } from "./AnimationCard";

type AnimationGalleryProps = {
  animations: AnimationWork[];
};

export function AnimationGallery({ animations }: AnimationGalleryProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {animations.length > 0
        ? animations.map((animation) => (
            <AnimationCard key={animation.slug} animation={animation} />
          ))
        : Array.from({ length: 2 }, (_, index) => (
            <AnimationCardPlaceholder key={index} index={index + 1} />
          ))}
    </div>
  );
}

function AnimationCardPlaceholder({ index }: { index: number }) {
  return (
    <article className="border-t border-border pt-5">
      <div className="flex aspect-video items-center justify-center border border-dashed border-border bg-surface text-xs uppercase tracking-[0.2em] text-muted">
        [ADD VIDEO POSTER]
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Animation {String(index).padStart(2, "0")}
          </p>
          <h4 className="mt-2 font-heading text-xl font-medium text-fg">
            [ADD ANIMATION TITLE]
          </h4>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
            [ADD SOFTWARE]
          </p>
        </div>
        <span className="shrink-0 text-xs text-muted">[ADD DURATION]</span>
      </div>
    </article>
  );
}
