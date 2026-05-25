"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { navItems, type NavItem } from "./nav";
import { cn } from "@/lib/cn";
import { useColumnNav } from "./useColumnNav";
import { useShowreel } from "@/components/showreel/ShowreelProvider";

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { activeKey, setActiveKey } = useColumnNav();
  const { open: openShowreel } = useShowreel();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }) + " GMT"
      );
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  // Auto-open the matching column based on the route
  useEffect(() => {
    if (pathname.startsWith("/projects")) setActiveKey("projects");
    else if (pathname.startsWith("/about")) setActiveKey("about");
    else if (pathname.startsWith("/contact")) setActiveKey("contact");
    else setActiveKey(null);
  }, [pathname, setActiveKey]);

  const handleNav = (item: NavItem) => {
    if (item.kind === "link") {
      router.push(item.href);
      setActiveKey(null);
      return;
    }
    if (activeKey === item.key) {
      setActiveKey(null);
      return;
    }
    setActiveKey(item.key);
    if (item.key === "projects") router.push("/projects");
    if (item.key === "about") router.push("/about");
    if (item.key === "contact") router.push("/contact");
  };

  const isActive = (item: NavItem) => {
    if (item.kind === "link") {
      if (item.href === "/") return pathname === "/";
      return pathname.startsWith(item.href);
    }
    return activeKey === item.key;
  };

  return (
    <aside
      style={{ width: "var(--col-nav)" }}
      className="relative flex h-full shrink-0 flex-col border-r border-ink-400/80 bg-ink-50"
    >
      {/* Brand */}
      <div className="flex items-center justify-between border-b border-ink-400/80 px-5 py-4">
        <Link href="/" onClick={() => setActiveKey(null)} className="group">
          <div className="flex items-center gap-2.5">
            <BrandMark />
            <div className="leading-tight">
              <div className="text-[13px] font-medium tracking-tight text-ink-1000">
                {site.fullName}
              </div>
              <div className="text-[10.5px] tracking-wider uppercase text-ink-700">
                {site.role.split("&")[0].trim()}
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Showreel CTA */}
      <button
        type="button"
        onClick={openShowreel}
        className="group flex items-center justify-between border-b border-ink-400/80 px-5 py-4 text-left transition-colors hover:bg-ink-100"
      >
        <div>
          <div className="eyebrow">Showreel</div>
          <div className="mt-0.5 text-[13px] font-medium text-ink-1000">
            {site.showreel.title}
          </div>
        </div>
        <span className="grid h-7 w-7 place-items-center rounded-full border border-ink-500 text-ink-900 transition-all group-hover:border-ink-1000 group-hover:bg-ink-1000 group-hover:text-ink-0">
          <PlayGlyph />
        </span>
      </button>

      {/* Nav */}
      <nav className="flex flex-1 flex-col px-2 py-3">
        {navItems.map((item) => {
          const active = isActive(item);
          return (
            <button
              key={item.kind === "link" ? item.href : item.key}
              type="button"
              onClick={() => handleNav(item)}
              className={cn(
                "group relative flex items-center justify-between rounded-md px-3 py-2 text-left text-[13px] transition-colors",
                active
                  ? "bg-ink-200 text-ink-1000"
                  : "text-ink-800 hover:bg-ink-100 hover:text-ink-1000"
              )}
            >
              <span className="flex items-center gap-2.5">
                <span
                  className={cn(
                    "h-1 w-1 rounded-full transition-colors",
                    active ? "bg-ink-1000" : "bg-ink-600 group-hover:bg-ink-800"
                  )}
                />
                {item.label}
              </span>
              {item.kind === "section" && (
                <ChevronRight
                  className={cn(
                    "h-3.5 w-3.5 text-ink-700 transition-transform",
                    active && "translate-x-0.5 text-ink-1000"
                  )}
                />
              )}
              {active && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-y-1 left-0 w-px bg-ink-1000"
                  transition={{ type: "spring", stiffness: 360, damping: 32 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-ink-400/80 px-5 py-4 text-[10.5px] uppercase tracking-wider text-ink-700">
        <div className="flex items-center justify-between">
          <span>{time}</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available
          </span>
        </div>
        <div className="mt-2 truncate">
          <a href={`mailto:${site.email}`} className="hover:text-ink-1000">
            {site.email}
          </a>
        </div>
      </div>
    </aside>
  );
}

function BrandMark() {
  return (
    <div className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-ink-500 bg-ink-100 text-[13px] font-semibold tracking-tight text-ink-1000">
      K
    </div>
  );
}

function PlayGlyph() {
  return (
    <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden>
      <path d="M0 0L9 5.5L0 11V0Z" fill="currentColor" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
