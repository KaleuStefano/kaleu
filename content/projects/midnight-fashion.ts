import type { ProjectMeta } from "../types";

const project: ProjectMeta = {
  slug: "midnight-fashion",
  title: "Midnight — Fashion Film",
  role: "VFX Supervisor · Compositing",
  client: "Midnight Atelier",
  year: 2023,
  tags: ["Nuke", "Houdini", "After Effects"],
  summary:
    "Fashion film with practical-meets-CG cloth simulations and surreal compositing.",
  description:
    "Supervised on-set capture and led the post pipeline. Cloth sims in Houdini Vellum, comped in Nuke, with a final pass of grain and halation in After Effects.",
  cover: {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=80",
    alt: "Fashion film still",
  },
  hoverReel: {
    mp4: "https://cdn.coverr.co/videos/coverr-silk-flowing-in-water-2628/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
  },
  hero: {
    kind: "mp4",
    src: "https://cdn.coverr.co/videos/coverr-silk-flowing-in-water-2628/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=80",
  },
  credits: [
    { role: "VFX Supervision", name: "Kaleu" },
    { role: "Direction", name: "Midnight Atelier" },
  ],
  order: 6,
};

export default project;
