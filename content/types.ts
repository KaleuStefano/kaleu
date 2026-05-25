/**
 * CMS schema for projects. Each project lives in `content/projects/*.ts`
 * and follows this contract. To add a new project, the designer just
 * duplicates an existing file, renames it, and edits the fields below —
 * no layout code needs to change.
 */
export type MediaSource =
  | { kind: "image"; src: string; alt?: string }
  | { kind: "mp4"; src: string; poster?: string }
  | { kind: "vimeo"; id: string; hash?: string }
  | { kind: "youtube"; id: string };

export interface ProjectMeta {
  /** URL-safe slug. Must be unique. */
  slug: string;
  /** Display title in the column. */
  title: string;
  /** Short subtitle / role on the project. */
  role: string;
  /** Client name. */
  client?: string;
  /** Year, used for sorting + display. */
  year: number;
  /** Tag chips shown under the title (Unreal, Blender, AE, …). */
  tags: string[];
  /** One-line summary used on the column hover preview. */
  summary: string;
  /** Long-form copy on the project detail page. Markdown-light (\n for paragraphs). */
  description?: string;
  /** Cover thumbnail (always image, used when nothing else has loaded). */
  cover: { src: string; alt?: string };
  /** Optional looping muted preview that plays on hover in the grid. */
  hoverReel?: { mp4?: string; webm?: string; poster?: string };
  /** The hero media that plays at the top of the project detail viewport. */
  hero: MediaSource;
  /** Additional gallery items shown below the hero. */
  gallery?: MediaSource[];
  /** Optional credits block. */
  credits?: { role: string; name: string }[];
  /** External link (case study, behance, etc). */
  externalUrl?: string;
  /** Mark a project as featured to lift it on the landing grid. */
  featured?: boolean;
  /** Manual sort weight; lower = earlier. Falls back to year DESC. */
  order?: number;
}
