"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useColumnNav } from "./useColumnNav";
import { allProjects } from "@/content/projects";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { useShowreel } from "@/components/showreel/ShowreelProvider";

const COLUMN_VARIANTS = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "var(--col-list)", opacity: 1 },
  exit: { width: 0, opacity: 0 },
} as const;

const COLUMN_TRANSITION = {
  type: "spring",
  stiffness: 320,
  damping: 36,
  mass: 0.6,
} as const;

export function ColumnNav() {
  const { activeKey } = useColumnNav();

  return (
    <AnimatePresence initial={false}>
      {activeKey && (
        <motion.aside
          key={activeKey}
          variants={COLUMN_VARIANTS}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={COLUMN_TRANSITION}
          className="relative h-full shrink-0 overflow-hidden border-r border-ink-400/80 bg-ink-50"
        >
          <div
            style={{ width: "var(--col-list)" }}
            className="flex h-full flex-col"
          >
            {activeKey === "projects" && <ProjectsColumn />}
            {activeKey === "about" && <AboutColumn />}
            {activeKey === "contact" && <ContactColumn />}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

function ColumnHeader({
  title,
  count,
}: {
  title: string;
  count?: number | string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-ink-400/80 px-5 py-4">
      <div>
        <div className="eyebrow">Index</div>
        <div className="mt-0.5 text-[13px] font-medium text-ink-1000">
          {title}
        </div>
      </div>
      {count !== undefined && (
        <div className="font-mono text-[11px] text-ink-700">{count}</div>
      )}
    </div>
  );
}

function ProjectsColumn() {
  const router = useRouter();
  const pathname = usePathname();
  const activeSlug = pathname.startsWith("/projects/")
    ? pathname.split("/")[2]
    : null;

  return (
    <>
      <ColumnHeader
        title="Projects"
        count={String(allProjects.length).padStart(2, "0")}
      />
      <ul className="scroll-thin flex-1 overflow-y-auto py-2">
        {allProjects.map((p) => {
          const active = activeSlug === p.slug;
          return (
            <li key={p.slug}>
              <button
                type="button"
                onMouseEnter={() => router.prefetch(`/projects/${p.slug}`)}
                onClick={() => router.push(`/projects/${p.slug}`)}
                className={cn(
                  "group relative grid w-full grid-cols-[1fr_auto] items-center gap-3 px-5 py-3 text-left transition-colors",
                  active
                    ? "bg-ink-200"
                    : "hover:bg-ink-100"
                )}
              >
                <div className="min-w-0">
                  <div
                    className={cn(
                      "truncate text-[13px] font-medium",
                      active ? "text-ink-1000" : "text-ink-900"
                    )}
                  >
                    {p.title}
                  </div>
                  <div className="mt-0.5 truncate text-[11px] text-ink-700">
                    {p.client ?? p.role}
                  </div>
                </div>
                <div
                  className={cn(
                    "shrink-0 font-mono text-[10.5px]",
                    active ? "text-ink-1000" : "text-ink-700"
                  )}
                >
                  {p.year}
                </div>
                {active && (
                  <motion.span
                    layoutId="column-active"
                    className="absolute inset-y-0 left-0 w-px bg-ink-1000"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="border-t border-ink-400/80 px-5 py-3 font-mono text-[10.5px] uppercase tracking-wider text-ink-700">
        ↑↓ Navigate · ↵ Open
      </div>
    </>
  );
}

function AboutColumn() {
  const items = [
    { label: "Bio", href: "/about" },
    { label: "Experience", href: "/about#experience" },
    { label: "Software", href: "/about#software" },
    { label: "Awards", href: "/about#awards" },
  ];
  return (
    <>
      <ColumnHeader title="About" count={String(items.length).padStart(2, "0")} />
      <ul className="scroll-thin flex-1 overflow-y-auto py-2">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="block px-5 py-3 text-[13px] text-ink-900 transition-colors hover:bg-ink-100 hover:text-ink-1000"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function ContactColumn() {
  const { open: openShowreel } = useShowreel();
  return (
    <>
      <ColumnHeader title="Contact" />
      <div className="flex flex-1 flex-col">
        <a
          href={`mailto:${site.email}`}
          className="border-b border-ink-400/80 px-5 py-4 transition-colors hover:bg-ink-100"
        >
          <div className="eyebrow">Email</div>
          <div className="mt-0.5 text-[13px] font-medium text-ink-1000">
            {site.email}
          </div>
        </a>
        <button
          type="button"
          onClick={openShowreel}
          className="border-b border-ink-400/80 px-5 py-4 text-left transition-colors hover:bg-ink-100"
        >
          <div className="eyebrow">Reel</div>
          <div className="mt-0.5 text-[13px] font-medium text-ink-1000">
            {site.showreel.title}
          </div>
        </button>
        <ul className="px-2 py-2">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-md px-3 py-2 text-[13px] text-ink-900 transition-colors hover:bg-ink-100 hover:text-ink-1000"
              >
                <span>{s.label}</span>
                <ArrowOut />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function ArrowOut() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
    >
      <path d="M2.5 8.5L8.5 2.5M8.5 2.5H4M8.5 2.5V7" strokeLinecap="round" />
    </svg>
  );
}
