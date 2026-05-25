import type { ProjectMeta } from "../types";

const project: ProjectMeta = {
  slug: "halcyon-game",
  title: "Halcyon — Game Cinematic",
  role: "Cinematic Director · 3D",
  client: "Halcyon Studios",
  year: 2024,
  tags: ["Unreal Engine 5", "MetaHuman", "Niagara"],
  summary:
    "Pre-rendered cinematic for an unreleased AAA title, captured live in UE5.",
  description:
    "Worked alongside Halcyon's in-house team to direct a 2-minute opening cinematic, captured entirely in-engine. Sequencer, Niagara fluid sims, and a custom toolkit for camera-shake-on-character-impact.",
  cover: {
    src: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1800&q=80",
    alt: "Game cinematic still",
  },
  hoverReel: {
    mp4: "https://cdn.coverr.co/videos/coverr-glowing-jellyfish-2614/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80",
  },
  hero: {
    kind: "mp4",
    src: "https://cdn.coverr.co/videos/coverr-glowing-jellyfish-2614/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1800&q=80",
  },
  credits: [
    { role: "Cinematic Direction", name: "Kaleu" },
    { role: "Engine", name: "Halcyon Studios" },
  ],
  featured: true,
  order: 5,
};

export default project;
