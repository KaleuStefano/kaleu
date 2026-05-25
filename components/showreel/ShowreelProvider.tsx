"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface ShowreelCtx {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const Ctx = createContext<ShowreelCtx | null>(null);

export function ShowreelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Close on Escape, lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useShowreel() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    return { isOpen: false, open: () => {}, close: () => {} };
  }
  return ctx;
}
