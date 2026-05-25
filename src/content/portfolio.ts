export type NativeMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  caption?: string;
};

export type EmbedMedia = {
  type: "embed";
  provider: "vimeo" | "youtube";
  src: string;
  title: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  discipline: string;
  client: string;
  summary: string;
  description: string;
  credits: string[];
  coverImage: string;
  previewVideo?: string;
  accent: string;
  media: Array<NativeMedia | EmbedMedia>;
};

export type PortfolioContent = {
  designer: {
    name: string;
    role: string;
    location: string;
    email: string;
    availability: string;
    intro: string;
    logoMark: string;
  };
  showreel: {
    title: string;
    eyebrow: string;
    summary: string;
    poster: string;
    video: string;
  };
  about: {
    heading: string;
    body: string[];
    services: string[];
    software: string[];
    stats: Array<{ value: string; label: string }>;
  };
  projects: Project[];
};

export const portfolioContent: PortfolioContent = {
  designer: {
    name: "Kaleu Stefano",
    role: "Senior Motion Designer / 3D Generalist",
    location: "Remote / Worldwide",
    email: "hello@kal-motion.com",
    availability: "Available for select 3D, compositing, and motion systems",
    intro:
      "Cinematic 3D art direction, compositing, and motion design for ambitious brands, studios, and digital products.",
    logoMark: "K",
  },
  showreel: {
    title: "Motion systems with cinematic depth.",
    eyebrow: "2026 showreel",
    summary:
      "A focused reel of premium 3D, compositing, and motion design work built around atmosphere, material detail, and precise timing.",
    poster:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1800&q=85",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-futuristic-neon-light-on-a-black-background-39910-large.mp4",
  },
  about: {
    heading: "A senior creative partner for motion-led visual worlds.",
    body: [
      "I design and execute polished 3D sequences, product films, title systems, and composited visual campaigns from look development through final delivery.",
      "The work sits between restrained interface precision and cinematic spectacle: dark canvases, tactile materials, luminous details, and motion that feels intentional.",
      "This portfolio is content-driven. Duplicate a project entry, swap the copy and media URLs, and the Finder-style layout, project detail pages, hover previews, and mobile experience update automatically.",
    ],
    services: [
      "3D art direction",
      "Motion design",
      "Compositing",
      "Look development",
      "Realtime visuals",
      "Product films",
    ],
    software: [
      "Unreal Engine",
      "After Effects",
      "Blender",
      "Cinema 4D",
      "Redshift",
      "DaVinci Resolve",
      "Figma",
      "Photoshop",
    ],
    stats: [
      { value: "10+", label: "years shaping motion systems" },
      { value: "4K", label: "delivery-ready art direction" },
      { value: "360", label: "pipeline from concept to comp" },
    ],
  },
  projects: [
    {
      slug: "nocturne-product-film",
      title: "Nocturne Product Film",
      year: "2026",
      discipline: "3D / Product Motion",
      client: "Independent concept",
      summary: "A high-contrast product launch sequence built from glass, light, and calibrated camera movement.",
      description:
        "A premium product film system exploring reflective surfaces, dark negative space, and restrained kinetic typography. Designed as a hero case study for brands that need a luxury technology feel.",
      credits: ["Direction", "3D design", "Lighting", "Edit", "Compositing"],
      coverImage:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1600&q=85",
      previewVideo:
        "https://assets.mixkit.co/videos/preview/mixkit-abstract-glass-tunnel-visual-effect-2402-large.mp4",
      accent: "#9bfbff",
      media: [
        {
          type: "video",
          src: "https://assets.mixkit.co/videos/preview/mixkit-abstract-glass-tunnel-visual-effect-2402-large.mp4",
          poster:
            "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1600&q=85",
          alt: "Reflective glass tunnel motion study",
          caption: "Looping lighting exploration for the hero product reveal.",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1800&q=85",
          alt: "Abstract luminous material render",
          caption: "Material frame balancing deep blacks and neon edge highlights.",
        },
      ],
    },
    {
      slug: "orbital-title-system",
      title: "Orbital Title System",
      year: "2025",
      discipline: "Motion Identity",
      client: "Streaming pitch",
      summary: "A modular title package combining volumetric typography, HUD details, and atmospheric 3D plates.",
      description:
        "A title system designed to feel like a native operating environment: column layouts, hard dividers, controlled reveals, and ambient 3D energy in the background.",
      credits: ["Creative direction", "Motion toolkit", "Typography", "Compositing"],
      coverImage:
        "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&w=1600&q=85",
      previewVideo:
        "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-traffic-at-night-1173-large.mp4",
      accent: "#b47cff",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&w=1800&q=85",
          alt: "Purple abstract title background",
          caption: "Key art frame for atmospheric title cards.",
        },
        {
          type: "embed",
          provider: "vimeo",
          src: "https://player.vimeo.com/video/76979871?title=0&byline=0&portrait=0",
          title: "Embedded title-system reel",
          caption: "Replace this URL with a Vimeo or YouTube embed for the final case-study cut.",
        },
      ],
    },
    {
      slug: "signal-composite-lab",
      title: "Signal Composite Lab",
      year: "2025",
      discipline: "Compositing / VFX",
      client: "Studio research",
      summary: "A suite of dark-mode visual experiments for signal distortion, practical glows, and UI-led reveals.",
      description:
        "A compositing-focused study that treats every frame as an interface: thin borders, scanline energy, optical overlays, and polished restraint for high-end editorial use.",
      credits: ["VFX design", "Roto/paint", "Comp", "Color"],
      coverImage:
        "https://images.unsplash.com/photo-1520034475321-cbe63696469a?auto=format&fit=crop&w=1600&q=85",
      previewVideo:
        "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-building-30833-large.mp4",
      accent: "#fff36d",
      media: [
        {
          type: "video",
          src: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-building-30833-large.mp4",
          poster:
            "https://images.unsplash.com/photo-1520034475321-cbe63696469a?auto=format&fit=crop&w=1600&q=85",
          alt: "Futuristic building signal composite",
          caption: "Animated signal pass for a UI-driven VFX environment.",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
          alt: "Cinematic landscape plate with atmospheric light",
          caption: "Plate integration study for light, haze, and grade.",
        },
      ],
    },
  ],
};
