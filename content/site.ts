/**
 * Site-wide settings. Edit this single file (or pull from a hosted CMS later)
 * to update branding, contact info, and the showreel video.
 */
export const site = {
  name: "Kaleu",
  fullName: "Kaleu Mota",
  role: "Senior Motion Designer & 3D Generalist",
  location: "Remote · Worldwide",
  email: "hello@kal-motion.com",
  phone: "",
  resumeUrl: "",
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Vimeo", href: "https://vimeo.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Behance", href: "https://www.behance.net/" },
  ],
  /**
   * Showreel: Either an embed (Vimeo/YouTube) or a self-hosted MP4.
   * If `mp4` is set, it takes priority over the embed URL.
   */
  showreel: {
    title: "2026 Reel",
    poster:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2400&q=80",
    embed: "https://player.vimeo.com/video/76979871?h=8272103f6e",
    mp4: "" as string,
  },
} as const;

export type SiteConfig = typeof site;
