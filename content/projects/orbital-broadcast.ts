import type { ProjectMeta } from "../types";

const project: ProjectMeta = {
  slug: "orbital-broadcast",
  title: "Orbital — Broadcast Package",
  role: "Design Direction",
  client: "Orbital Network",
  year: 2024,
  tags: ["Cinema 4D", "Redshift", "After Effects"],
  summary:
    "Broadcast identity package: bumpers, lower thirds, and a generative end card system.",
  description:
    "Rebuilt the on-air identity for Orbital around a single procedural shape language. Delivered 40+ assets including bumpers, lower thirds, and a Houdini-driven end card generator the network team can extend in-house.",
  cover: {
    src: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1800&q=80",
    alt: "Orbital broadcast still",
  },
  hoverReel: {
    mp4: "https://cdn.coverr.co/videos/coverr-tv-static-noise-2640/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80",
  },
  hero: {
    kind: "mp4",
    src: "https://cdn.coverr.co/videos/coverr-tv-static-noise-2640/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1800&q=80",
  },
  credits: [
    { role: "Design Direction", name: "Kaleu" },
    { role: "Animation", name: "Studio Orbital" },
  ],
  order: 4,
};

export default project;
