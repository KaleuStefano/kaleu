import type { ProjectMeta } from "../types";
import aurora from "./aurora-spec";
import north from "./north-titles";
import atlas from "./atlas-product";
import orbital from "./orbital-broadcast";
import halcyon from "./halcyon-game";
import midnight from "./midnight-fashion";

/**
 * The full ordered list of public projects.
 * To publish a new project: import its file here and add it to the array.
 * To unpublish: comment out the line.
 */
const projects: ProjectMeta[] = [
  aurora,
  halcyon,
  north,
  atlas,
  orbital,
  midnight,
];

export const allProjects: ProjectMeta[] = [...projects].sort((a, b) => {
  const aOrder = a.order ?? 999;
  const bOrder = b.order ?? 999;
  if (aOrder !== bOrder) return aOrder - bOrder;
  return b.year - a.year;
});

export const featuredProjects: ProjectMeta[] = allProjects.filter(
  (p) => p.featured
);

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return allProjects.find((p) => p.slug === slug);
}
