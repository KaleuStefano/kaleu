import type { ProjectMeta } from "../types";

const project: ProjectMeta = {
  slug: "aurora-spec",
  title: "Aurora — Spec Film",
  role: "Director · 3D · Compositing",
  client: "Self-Initiated",
  year: 2026,
  tags: ["Unreal Engine 5", "After Effects", "Houdini"],
  summary:
    "A spec piece exploring atmospheric lighting and procedural cloud volumes.",
  description:
    "Aurora started as a lighting study and grew into a 90-second short. Built almost entirely in Unreal Engine 5 with Niagara fluids and a Houdini cloud rig, finished in After Effects with a custom DCTL grade.\n\nThe goal was to get cinematic volumetrics rendered in real-time without sacrificing the painterly quality of an offline render.",
  cover: {
    src: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1800&q=80",
    alt: "Aurora — atmospheric mountain landscape",
  },
  hoverReel: {
    mp4: "https://cdn.coverr.co/videos/coverr-mountain-fog-7470/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1200&q=80",
  },
  hero: {
    kind: "mp4",
    src: "https://cdn.coverr.co/videos/coverr-mountain-fog-7470/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1800&q=80",
  },
  gallery: [
    {
      kind: "image",
      src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1800&q=80",
      alt: "Lookdev frame 01",
    },
    {
      kind: "image",
      src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=80",
      alt: "Lookdev frame 02",
    },
  ],
  credits: [
    { role: "Direction", name: "Kaleu" },
    { role: "3D & Lighting", name: "Kaleu" },
    { role: "Sound Design", name: "Studio Tone" },
  ],
  featured: true,
  order: 1,
};

export default project;
