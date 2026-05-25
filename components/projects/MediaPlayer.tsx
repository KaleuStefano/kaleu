"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MediaSource } from "@/content/types";
import { cn } from "@/lib/cn";

interface Props {
  media: MediaSource;
  /** Tailwind aspect-ratio class (defaults to 16/9). */
  aspectClass?: string;
  /** If true, eager-loads on mount instead of waiting for IntersectionObserver. */
  eager?: boolean;
  /** Priority hint for next/image. */
  priority?: boolean;
  className?: string;
}

/**
 * MediaPlayer is a CMS-driven media renderer that handles all four kinds of
 * sources: image, mp4, vimeo, youtube. It lazy-mounts heavy iframes and
 * videos using IntersectionObserver so the grid stays responsive even with
 * many items on a page.
 */
export function MediaPlayer({
  media,
  aspectClass = "aspect-video",
  eager,
  priority,
  className,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(eager ?? false);

  useEffect(() => {
    if (active) return;
    const node = wrapRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(true);
            io.unobserve(node);
          }
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [active]);

  return (
    <div
      ref={wrapRef}
      className={cn(
        "relative w-full overflow-hidden rounded-md border border-ink-400 bg-ink-100",
        aspectClass,
        className
      )}
    >
      <div aria-hidden className="skeleton absolute inset-0" />

      {media.kind === "image" && (
        <Image
          src={media.src}
          alt={media.alt ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          priority={priority}
          className="object-cover"
        />
      )}

      {media.kind === "mp4" && active && (
        <video
          className="absolute inset-0 h-full w-full bg-black object-cover"
          src={media.src}
          poster={media.poster}
          controls
          playsInline
          preload="metadata"
        />
      )}

      {media.kind === "vimeo" && active && (
        <iframe
          className="absolute inset-0 h-full w-full border-0 bg-black"
          src={`https://player.vimeo.com/video/${media.id}${
            media.hash ? `?h=${media.hash}` : ""
          }${media.hash ? "&" : "?"}title=0&byline=0&portrait=0&dnt=1`}
          title="Vimeo video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}

      {media.kind === "youtube" && active && (
        <iframe
          className="absolute inset-0 h-full w-full border-0 bg-black"
          src={`https://www.youtube-nocookie.com/embed/${media.id}?modestbranding=1&rel=0`}
          title="YouTube video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
}
