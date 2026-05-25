"use client";

import { CustomCursor } from "@/components/ui/CustomCursor";
import { Sidebar } from "@/components/shell/Sidebar";
import { ColumnNav } from "@/components/shell/ColumnNav";
import { ShowreelProvider } from "@/components/showreel/ShowreelProvider";
import { ShowreelModal } from "@/components/showreel/ShowreelModal";
import { MobileMenu } from "@/components/shell/MobileMenu";
import { ColumnNavProvider } from "@/components/shell/useColumnNav";
import { useEffect } from "react";

export function Shell({ children }: { children: React.ReactNode }) {
  // Set --vh for mobile to dodge 100vh quirks on iOS.
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <ColumnNavProvider>
      <ShowreelProvider>
        <CustomCursor />

        {/* DESKTOP: native-app-style three column shell */}
        <div className="relative hidden h-[100dvh] w-screen md:flex">
          <Sidebar />
          <ColumnNav />
          <main className="relative flex-1 overflow-hidden bg-ink-50">
            {children}
          </main>
        </div>

        {/* MOBILE: stacked, full-width media-first view */}
        <div className="flex min-h-[100dvh] w-screen flex-col bg-ink-50 md:hidden">
          <MobileMenu />
          <main className="flex-1">{children}</main>
        </div>

        <ShowreelModal />
      </ShowreelProvider>
    </ColumnNavProvider>
  );
}
