"use client";

import {
  useEffect,
  useRef,
  useState,
  type FocusEvent,
} from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import type { AnimationWork } from "@/types/content";

let activeVideo: HTMLVideoElement | null = null;

function canHover() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches
  );
}

function canAutoPreview() {
  return (
    canHover() &&
    typeof window !== "undefined" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function requestPlayback(video: HTMLVideoElement) {
  if (activeVideo && activeVideo !== video) {
    activeVideo.pause();
  }

  activeVideo = video;

  void video.play().catch(() => {
    if (activeVideo === video) {
      activeVideo = null;
    }
  });
}

export function AnimationCard({ animation }: { animation: AnimationWork }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    return () => {
      if (!video) {
        return;
      }

      video.pause();

      if (activeVideo === video) {
        activeVideo = null;
      }
    };
  }, []);

  const play = () => {
    const video = videoRef.current;

    if (!video || hasError) {
      return;
    }

    requestPlayback(video);
  };

  const pause = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.pause();

    if (activeVideo === video) {
      activeVideo = null;
    }
  };

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video || hasError) {
      return;
    }

    if (video.paused) {
      play();
    } else {
      pause();
    }
  };

  const handleMouseEnter = () => {
    if (canAutoPreview()) {
      play();
    }
  };

  const handleMouseLeave = () => {
    if (canHover()) {
      pause();
    }
  };

  const handleFocus = () => {
    if (canAutoPreview()) {
      play();
    }
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (
      event.relatedTarget instanceof Node &&
      event.currentTarget.contains(event.relatedTarget)
    ) {
      return;
    }

    pause();
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={handleFocus}
      onBlurCapture={handleBlur}
      className="border-t border-border pt-5"
    >
      <div className="relative aspect-video overflow-hidden bg-surface">
        <Image
          src={animation.thumbnail}
          alt={animation.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />

        {!hasError ? (
          <video
            ref={videoRef}
            src={animation.video}
            poster={animation.thumbnail}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => {
              const video = videoRef.current;

              if (video && activeVideo === video) {
                activeVideo = null;
              }

              setHasError(true);
              setIsPlaying(false);
            }}
          />
        ) : null}

        {hasError ? (
          <span className="absolute bottom-3 left-3 rounded-sm bg-bg/85 px-2 py-1 text-xs text-fg">
            Preview unavailable
          </span>
        ) : (
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={
              isPlaying
                ? `Pause preview of ${animation.title}`
                : `Play preview of ${animation.title}`
            }
            className="absolute bottom-3 right-3 inline-flex size-11 items-center justify-center rounded-sm bg-fg text-bg transition hover:opacity-90"
          >
            {isPlaying ? (
              <Pause aria-hidden="true" className="size-4" />
            ) : (
              <Play aria-hidden="true" className="size-4" />
            )}
          </button>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h4 className="font-heading text-xl font-medium text-fg">
            {animation.title}
          </h4>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
            {animation.software?.join(" · ") ?? "[ADD SOFTWARE]"}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3 text-xs text-muted">
          {animation.year ? <span>{animation.year}</span> : null}
          {animation.duration ? <span>{animation.duration}</span> : null}
        </div>
      </div>

      {animation.description ? (
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {animation.description}
        </p>
      ) : null}
    </article>
  );
}
