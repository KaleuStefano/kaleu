/**
 * About page content. Edit copy here without touching layout code.
 */
export const about = {
  intro:
    "I'm Kaleu — a Senior Motion Designer and 3D Generalist. I direct, design, and finish high-end commercial and cinematic work, with a focus on real-time and offline pipelines that look indistinguishable on screen.",
  paragraphs: [
    "Over the last decade I've led visual identity, broadcast, product, and game-cinematic projects for clients across film, fashion, and tech. I work end-to-end: concept, lookdev, lighting, animation, and final compositing.",
    "My obsession is the seam between disciplines — the place where modeling becomes lighting, where lighting becomes grade, and where motion becomes narrative.",
  ],
  capabilities: [
    "Direction & Art Direction",
    "3D Lookdev & Lighting",
    "Real-time Cinematics (UE5)",
    "Motion Design & Compositing",
    "Title & Broadcast Design",
    "VFX Supervision",
  ],
  software: [
    { name: "Unreal Engine", group: "Real-time" },
    { name: "Blender", group: "3D" },
    { name: "Cinema 4D", group: "3D" },
    { name: "Houdini", group: "3D / FX" },
    { name: "After Effects", group: "Comp / Motion" },
    { name: "Nuke", group: "Comp / Motion" },
    { name: "DaVinci Resolve", group: "Grade" },
    { name: "Figma", group: "Design" },
    { name: "Octane / Redshift", group: "Render" },
  ],
  clients: [
    "Atlas Audio",
    "North Films",
    "Orbital Network",
    "Halcyon Studios",
    "Midnight Atelier",
    "Mercedes",
    "Adidas",
    "Spotify",
  ],
  awards: [
    { year: 2025, title: "Motion Awards — Title Design", project: "North" },
    { year: 2024, title: "Vimeo Staff Pick", project: "Aurora" },
    { year: 2023, title: "ADC Bronze — Craft", project: "Midnight" },
  ],
} as const;
