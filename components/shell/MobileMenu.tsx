"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { allProjects } from "@/content/projects";
import { site } from "@/content/site";
import { useShowreel } from "@/components/showreel/ShowreelProvider";
import { cn } from "@/lib/cn";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [pane, setPane] = useState<
    "root" | "projects" | "about" | "contact"
  >("root");
  const { open: openShowreel } = useShowreel();

  useEffect(() => {
    setOpen(false);
    setPane("root");
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-ink-400/80 bg-ink-50/95 px-4 py-3 backdrop-blur">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="grid h-7 w-7 place-items-center rounded-md border border-ink-500 bg-ink-100 text-[13px] font-semibold text-ink-1000">
            K
          </div>
          <div className="leading-tight">
            <div className="text-[13px] font-medium tracking-tight text-ink-1000">
              {site.fullName}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-ink-700">
              {site.role}
            </div>
          </div>
        </Link>
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="grid h-9 w-9 place-items-center rounded-md border border-ink-500"
        >
          <span className="flex flex-col gap-[3px]">
            <span className="h-px w-4 bg-ink-1000" />
            <span className="h-px w-4 bg-ink-1000" />
            <span className="h-px w-4 bg-ink-1000" />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 bg-ink-0/70 backdrop-blur"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 36 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-[88vw] max-w-[400px] flex-col border-l border-ink-400/80 bg-ink-50"
            >
              <div className="flex items-center justify-between border-b border-ink-400/80 px-5 py-4">
                <button
                  type="button"
                  onClick={() =>
                    pane === "root" ? setOpen(false) : setPane("root")
                  }
                  className="text-[13px] text-ink-800"
                >
                  {pane === "root" ? "Close" : "← Back"}
                </button>
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-ink-700">
                  {pane === "root" ? "Menu" : pane}
                </span>
              </div>

              <div className="relative flex-1 overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                  {pane === "root" && (
                    <motion.div
                      key="root"
                      initial={{ x: -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -40, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="absolute inset-0 flex flex-col"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          openShowreel();
                        }}
                        className="border-b border-ink-400/80 px-5 py-5 text-left"
                      >
                        <div className="eyebrow">Watch</div>
                        <div className="mt-1 text-[20px] font-medium tracking-tight text-ink-1000">
                          Showreel ’26 ▸
                        </div>
                      </button>
                      <MobileRow href="/" label="Index" active={pathname === "/"} />
                      <MobileExpand
                        label="Projects"
                        onClick={() => setPane("projects")}
                      />
                      <MobileExpand
                        label="About"
                        onClick={() => setPane("about")}
                      />
                      <MobileExpand
                        label="Contact"
                        onClick={() => setPane("contact")}
                      />
                    </motion.div>
                  )}

                  {pane === "projects" && (
                    <motion.ul
                      key="projects"
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 60, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="absolute inset-0 overflow-y-auto"
                    >
                      {allProjects.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/projects/${p.slug}`}
                            className="flex items-center justify-between border-b border-ink-400/80 px-5 py-4"
                          >
                            <span className="min-w-0">
                              <span className="block truncate text-[15px] font-medium text-ink-1000">
                                {p.title}
                              </span>
                              <span className="block truncate text-[12px] text-ink-700">
                                {p.client ?? p.role}
                              </span>
                            </span>
                            <span className="font-mono text-[11px] text-ink-700">
                              {p.year}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}

                  {pane === "about" && (
                    <motion.div
                      key="about"
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 60, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="absolute inset-0 flex flex-col"
                    >
                      <Link
                        href="/about"
                        className="border-b border-ink-400/80 px-5 py-4 text-[15px] text-ink-1000"
                      >
                        Bio
                      </Link>
                      <Link
                        href="/about#software"
                        className="border-b border-ink-400/80 px-5 py-4 text-[15px] text-ink-1000"
                      >
                        Software
                      </Link>
                      <Link
                        href="/about#awards"
                        className="border-b border-ink-400/80 px-5 py-4 text-[15px] text-ink-1000"
                      >
                        Awards
                      </Link>
                    </motion.div>
                  )}

                  {pane === "contact" && (
                    <motion.div
                      key="contact"
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 60, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="absolute inset-0 flex flex-col"
                    >
                      <a
                        href={`mailto:${site.email}`}
                        className="border-b border-ink-400/80 px-5 py-5"
                      >
                        <div className="eyebrow">Email</div>
                        <div className="mt-1 text-[18px] font-medium text-ink-1000">
                          {site.email}
                        </div>
                      </a>
                      <ul>
                        {site.socials.map((s) => (
                          <li key={s.label}>
                            <a
                              href={s.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block border-b border-ink-400/80 px-5 py-4 text-[15px] text-ink-1000"
                            >
                              {s.label} ↗
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileRow({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "border-b border-ink-400/80 px-5 py-5 text-[18px] font-medium",
        active ? "text-ink-1000" : "text-ink-800"
      )}
    >
      {label}
    </Link>
  );
}

function MobileExpand({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-between border-b border-ink-400/80 px-5 py-5 text-left text-[18px] font-medium text-ink-1000"
    >
      <span>{label}</span>
      <span className="text-ink-700">›</span>
    </button>
  );
}
