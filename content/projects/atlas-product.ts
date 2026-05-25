import type { ProjectMeta } from "../types";

const project: ProjectMeta = {
  slug: "atlas-product",
  title: "Atlas — Product Film",
  role: "3D Lead · Lookdev",
  client: "Atlas Audio",
  year: 2025,
  tags: ["Blender", "Cycles", "After Effects"],
  summary:
    "Hero product film for the Atlas headphone launch, rendered in Cycles.",
  description:
    "A 30-second hero spot built around macro detail of the Atlas flagship headphone. Modeled and shaded in Blender with displacement-driven micro-fabric, then graded in DaVinci Resolve.",
  cover: {
    src: "https://images.unsplash.com/photo-1518441902113-c1d3d2f0f7f0?auto=format&fit=crop&w=1800&q=80",
    alt: "Headphone macro",
  },
  hoverReel: {
    mp4: "https://cdn.coverr.co/videos/coverr-rotating-vinyl-on-a-record-player-9013/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1518441902113-c1d3d2f0f7f0?auto=format&fit=crop&w=1200&q=80",
  },
  hero: {
    kind: "mp4",
    src: "https://cdn.coverr.co/videos/coverr-rotating-vinyl-on-a-record-player-9013/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1518441902113-c1d3d2f0f7f0?auto=format&fit=crop&w=1800&q=80",
  },
  gallery: [
    {
      kind: "image",
      src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1800&q=80",
      alt: "Lookdev test",
    },
  ],
  credits: [
    { role: "Direction", name: "Atlas Audio" },
    { role: "3D & Lookdev", name: "Kaleu" },
  ],
  featured: false,
  order: 3,
};

export default project;
