/**
 * Top-level navigation entries that drive the Finder-style left sidebar.
 * `kind: "section"` items expand into a second column listing children
 * (e.g. clicking "Projects" reveals the project list).
 */
export type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "section"; label: string; key: "projects" | "about" | "contact" };

export const navItems: NavItem[] = [
  { kind: "link", label: "Index", href: "/" },
  { kind: "section", label: "Projects", key: "projects" },
  { kind: "section", label: "About", key: "about" },
  { kind: "section", label: "Contact", key: "contact" },
];
