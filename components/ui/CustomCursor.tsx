"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Minimal hollow-circle cursor that tracks the pointer with rAF and inverts
 * over interactive elements. Disabled on touch and reduced-motion users.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<
    "default" | "hover" | "media"
  >("default");

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!supportsHover || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return setVariant("default");
      if (t.closest("[data-cursor='media']")) return setVariant("media");
      if (
        t.closest(
          "a, button, [role='button'], input, textarea, select, [data-cursor='link']"
        )
      ) {
        return setVariant("hover");
      }
      setVariant("default");
    };

    let raf = 0;
    const tick = () => {
      // Lerp the ring towards the target for that "trailing" feel.
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] h-1 w-1 rounded-full bg-white mix-blend-difference"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[199] mix-blend-difference"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      >
        <div
          className="rounded-full border border-white transition-[width,height,background-color,border-color] duration-200 ease-out"
          style={{
            width:
              variant === "media" ? 64 : variant === "hover" ? 36 : 22,
            height:
              variant === "media" ? 64 : variant === "hover" ? 36 : 22,
            backgroundColor:
              variant === "hover" ? "rgba(255,255,255,0.16)" : "transparent",
          }}
        >
          {variant === "media" && (
            <div className="grid h-full w-full place-items-center font-mono text-[10px] uppercase tracking-widest text-white">
              Play
            </div>
          )}
        </div>
      </div>
    </>
  );
}
