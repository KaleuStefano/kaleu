import type { ProjectMeta } from "../types";

/**
 * TEMPLATE — duplicate this file, rename it (e.g. `aurora-spec.ts`), then
 * edit the fields. Make sure to also export it from `content/projects/index.ts`.
 *
 * Required fields: slug, title, role, year, tags, summary, cover, hero.
 * Everything else is optional.
 */
const template: ProjectMeta = {
  slug: "template",
  title: "Project Title",
  role: "Director · 3D · Compositing",
  client: "Client Name",
  year: 2026,
  tags: ["Unreal", "After Effects", "Blender"],
  summary: "One-line description that appears on hover in the column.",
  description:
    "Long-form description. Use double line breaks to separate paragraphs.\n\nThis is the second paragraph.",
  cover: {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=80",
    alt: "Project cover",
  },
  hoverReel: {
    mp4: "",
    poster: "",
  },
  hero: {
    kind: "vimeo",
    id: "76979871",
    hash: "8272103f6e",
  },
  gallery: [],
  credits: [
    { role: "Direction", name: "Kaleu" },
    { role: "Production", name: "—" },
  ],
  featured: false,
};

export default template;
