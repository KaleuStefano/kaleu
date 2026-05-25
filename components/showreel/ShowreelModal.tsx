"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useShowreel } from "./ShowreelProvider";
import { site } from "@/content/site";

export function ShowreelModal() {
  const { isOpen, close } = useShowreel();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="showreel-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-0/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
        >
          <motion.div
            key="showreel-frame"
            className="relative aspect-video w-[min(94vw,1400px)] overflow-hidden rounded-lg border border-ink-500 bg-ink-100 shadow-2xl"
            initial={{ scale: 0.96, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.97, opacity: 0, y: 8 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
          >
            {site.showreel.mp4 ? (
              <video
                className="h-full w-full bg-black"
                src={site.showreel.mp4}
                poster={site.showreel.poster}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <iframe
                className="h-full w-full border-0 bg-black"
                src={`${site.showreel.embed}${
                  site.showreel.embed.includes("?") ? "&" : "?"
                }autoplay=1&title=0&byline=0&portrait=0`}
                title={site.showreel.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            )}

            <button
              type="button"
              onClick={close}
              aria-label="Close showreel"
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-ink-500 bg-ink-100/80 text-ink-1000 backdrop-blur transition-colors hover:bg-ink-1000 hover:text-ink-0"
            >
              <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
                <path
                  d="M1 1L10 10M10 1L1 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </motion.div>

          <div className="pointer-events-none absolute bottom-6 left-0 right-0 flex justify-center">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-700">
              ESC to close · {site.showreel.title}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
