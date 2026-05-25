"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import React from "react";

export type ColumnKey = "projects" | "about" | "contact" | null;

interface ColumnNavCtx {
  activeKey: ColumnKey;
  setActiveKey: (k: ColumnKey) => void;
  toggle: (k: NonNullable<ColumnKey>) => void;
}

const Ctx = createContext<ColumnNavCtx | null>(null);

export function ColumnNavProvider({ children }: { children: ReactNode }) {
  const [activeKey, setActiveKey] = useState<ColumnKey>(null);
  const toggle = useCallback(
    (k: NonNullable<ColumnKey>) =>
      setActiveKey((prev) => (prev === k ? null : k)),
    []
  );
  const value = useMemo(
    () => ({ activeKey, setActiveKey, toggle }),
    [activeKey, toggle]
  );
  return React.createElement(Ctx.Provider, { value }, children);
}

export function useColumnNav() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    // Allow components to render outside the provider with a no-op fallback.
    return {
      activeKey: null as ColumnKey,
      setActiveKey: () => {},
      toggle: () => {},
    };
  }
  return ctx;
}
