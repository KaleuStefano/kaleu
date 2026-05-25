import type { ProjectMeta } from "../types";

const project: ProjectMeta = {
  slug: "north-titles",
  title: "North — Title Sequence",
  role: "Motion Design · Compositing",
  client: "North Films",
  year: 2025,
  tags: ["After Effects", "Cinema 4D", "Octane"],
  summary:
    "Brutalist title sequence built around hand-typeset kinetic typography.",
  description:
    "A 60-second main-on-end sequence designed around brutalist typography and slow, deliberate camera moves. C4D + Octane for the type renders, AE for compositing, with custom expressions driving the ink-bleed transitions.",
  cover: {
    src: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1800&q=80",
    alt: "North title frame",
  },
  hoverReel: {
    mp4: "https://cdn.coverr.co/videos/coverr-typing-on-a-typewriter-2632/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1200&q=80",
  },
  hero: {
    kind: "mp4",
    src: "https://cdn.coverr.co/videos/coverr-typing-on-a-typewriter-2632/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1800&q=80",
  },
  gallery: [
    {
      kind: "image",
      src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1800&q=80",
      alt: "Type detail",
    },
  ],
  credits: [
    { role: "Direction", name: "North Films" },
    { role: "Design & Animation", name: "Kaleu" },
  ],
  featured: true,
  order: 2,
};

export default project;
