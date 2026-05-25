"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { useShowreel } from "@/components/showreel/ShowreelProvider";

export function LandingHero() {
  const { open } = useShowreel();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  // Use the showreel mp4 if present, otherwise a poster-only hero.
  const reelMp4 = site.showreel.mp4;
  const poster = site.showreel.poster;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="relative isolate flex min-h-[78vh] w-full flex-col overflow-hidden border-b border-ink-400/80 md:min-h-[84vh]">
      {/* Background media */}
      <div className="absolute inset-0 -z-10">
        {reelMp4 ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={reelMp4}
            poster={poster}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            onCanPlay={() => setVideoReady(true)}
          />
        ) : null}
        {!reelMp4 && (
          <Image
            src={poster}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-0/55 via-ink-0/35 to-ink-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#070708_100%)]" />
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-800 md:px-10">
        <span>Portfolio · 2026</span>
        <span className="hidden md:inline">{site.location}</span>
        <span>v3.0</span>
      </div>

      {/* Headline block */}
      <div className="flex flex-1 flex-col justify-end px-6 pb-10 md:px-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-5xl"
        >
          <div className="eyebrow">Senior Motion Designer · 3D Generalist</div>
          <h1 className="h-display mt-4 text-[clamp(48px,10vw,164px)] font-medium text-ink-1000">
            {site.fullName.split(" ")[0]}
            <span className="text-ink-700">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-800 md:text-[17px]">
            Direction, real-time cinematics, lookdev and finishing for film,
            game, fashion and product. A portfolio of work from{" "}
            <span className="text-ink-1000">2018 → today</span>.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={open}
              data-cursor="link"
              className="group flex items-center gap-3 rounded-full border border-ink-1000 bg-ink-1000 px-5 py-2.5 text-[13px] font-medium text-ink-0 transition-colors hover:bg-transparent hover:text-ink-1000"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-ink-0 text-ink-1000 transition-colors group-hover:bg-ink-1000 group-hover:text-ink-0">
                <svg width="7" height="9" viewBox="0 0 7 9" aria-hidden>
                  <path d="M0 0L7 4.5L0 9V0Z" fill="currentColor" />
                </svg>
              </span>
              Watch the {site.showreel.title}
            </button>
            <a
              href="/projects"
              data-cursor="link"
              className="rounded-full border border-ink-500 px-5 py-2.5 text-[13px] text-ink-900 transition-colors hover:border-ink-1000 hover:text-ink-1000"
            >
              Browse projects
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom meta strip */}
      <div className="grid grid-cols-2 border-t border-ink-400/80 text-[11px] text-ink-700 md:grid-cols-4">
        <Meta label="Available" value="Q3 — Q4 2026" />
        <Meta label="Disciplines" value="Direction · 3D · Motion" />
        <Meta label="Stack" value="Unreal · Blender · AE · Nuke" />
        <Meta label="Inquiries" value={site.email} mono />
      </div>
    </section>
  );
}

function Meta({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="border-r border-ink-400/80 px-5 py-4 last:border-r-0">
      <div className="eyebrow">{label}</div>
      <div
        className={`mt-1 truncate text-[13px] text-ink-1000 ${
          mono ? "font-mono" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
}
