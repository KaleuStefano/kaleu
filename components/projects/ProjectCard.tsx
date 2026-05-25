"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProjectMeta } from "@/content/types";
import { cn } from "@/lib/cn";

interface Props {
  project: ProjectMeta;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
}

/**
 * ProjectCard
 *
 * - Shows a static cover image until the user hovers/focuses.
 * - On hover, lazily loads a muted, looping <video> behind the cover and
 *   crossfades to it. Uses IntersectionObserver so off-screen cards never
 *   touch the network.
 */
export function ProjectCard({ project, priority, size = "md" }: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(node);
          }
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hovering) {
      v.play().catch(() => {});
    } else {
      v.pause();
      try {
        v.currentTime = 0;
      } catch {}
    }
  }, [hovering]);

  const aspect =
    size === "lg"
      ? "aspect-[16/9]"
      : size === "sm"
      ? "aspect-[4/3]"
      : "aspect-[16/10]";

  const reel = project.hoverReel?.mp4;

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor="media"
      className="group block focus:outline-none"
      prefetch={false}
    >
      <div
        ref={wrapperRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onFocus={() => setHovering(true)}
        onBlur={() => setHovering(false)}
        className={cn(
          "relative w-full overflow-hidden rounded-md border border-ink-400 bg-ink-100",
          aspect
        )}
      >
        {/* Skeleton */}
        <div
          aria-hidden
          className="skeleton absolute inset-0"
          style={{ opacity: videoReady || inView ? 0 : 1 }}
        />

        {/* Cover */}
        <Image
          src={project.cover.src}
          alt={project.cover.alt ?? project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority={priority}
          className={cn(
            "object-cover transition-[transform,opacity,filter] duration-700 ease-out",
            "group-hover:scale-[1.02]",
            videoReady && hovering ? "opacity-0" : "opacity-100"
          )}
        />

        {/* Hover-reel video */}
        {reel && inView && (
          <video
            ref={videoRef}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
              videoReady && hovering ? "opacity-100" : "opacity-0"
            )}
            src={reel}
            poster={project.hoverReel?.poster}
            muted
            loop
            playsInline
            preload="none"
            onCanPlay={() => setVideoReady(true)}
          />
        )}

        {/* Top-left tag */}
        <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5">
          {reel && (
            <span className="flex items-center gap-1.5 rounded-full border border-ink-500 bg-ink-0/55 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-1000 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              Reel
            </span>
          )}
        </div>

        {/* Year */}
        <div className="pointer-events-none absolute right-3 top-3 font-mono text-[10.5px] uppercase tracking-wider text-ink-1000/85">
          {project.year}
        </div>

        {/* Bottom gradient + label */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-0/85 via-ink-0/30 to-transparent p-4 pt-14">
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">
              <div className="truncate text-[15px] font-medium tracking-tight text-ink-1000">
                {project.title}
              </div>
              <div className="mt-0.5 truncate text-[11.5px] text-ink-800">
                {project.role}
              </div>
            </div>
            <span
              aria-hidden
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink-1000/30 text-ink-1000 transition-all group-hover:border-ink-1000 group-hover:bg-ink-1000 group-hover:text-ink-0"
            >
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden>
                <path
                  d="M1 1H8M8 1V8M8 1L1 8"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
