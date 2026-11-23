import { AnimationGallery } from "@/components/creative/AnimationGallery";
import { ArtworkGallery } from "@/components/creative/ArtworkGallery";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { animations } from "@/data/animations";
import { artworks } from "@/data/artworks";

export function Creative() {
  return (
    <Section
      id="creative"
      theme="dark"
      className="min-h-[70vh] border-t border-border py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="02 — Creative"
        title="Visual work, experiments, and motion."
        description="[ADD CREATIVE INTRODUCTION] Graphic design, artwork, and 3D animation will be presented here."
      />

      <div className="mt-16 space-y-24">
        <div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-heading text-2xl font-medium tracking-tight text-fg">
              Graphic design &amp; artwork
            </h3>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              [ADD ARTWORKS]
            </span>
          </div>
          <div className="mt-8">
            <ArtworkGallery artworks={artworks} />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-heading text-2xl font-medium tracking-tight text-fg">
              3D animation
            </h3>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              [ADD ANIMATIONS]
            </span>
          </div>
          <div className="mt-8">
            <AnimationGallery animations={animations} />
          </div>
        </div>
      </div>
    </Section>
  );
}
