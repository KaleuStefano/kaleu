# kaleu — Portfolio

A premium, dark-mode portfolio for a Senior Motion Designer & 3D Generalist.
Built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and
**Framer Motion**.

The UI is modeled after a native macOS Finder window: a fixed left sidebar,
sliding Miller-style columns, and a media-first viewport — all wrapped in a
strict dark theme with hairline structural borders and crossfade page
transitions.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm run start
```

Other useful scripts:

```bash
npm run typecheck    # tsc --noEmit
npm run lint         # next lint
```

## Project structure

```
app/                    Routes (App Router)
  layout.tsx            Global shell + metadata
  page.tsx              Landing (showreel hero + featured grid)
  projects/             Projects index + dynamic [slug] detail
  about/                Bio, capabilities, software, awards
  contact/              Single-screen contact card
components/
  shell/                Sidebar, ColumnNav (Miller), MobileMenu
  showreel/             Provider + modal that plays the reel anywhere
  projects/             ProjectCard (hover-reel) + MediaPlayer (lazy)
  landing/              Hero, FeaturedGrid, ClientStrip, Footer
  ui/                   CustomCursor, PageTransition, ScrollPane
content/                CMS-style content (see below)
lib/                    Tiny utilities
```

## CMS — adding a new project

The site is **content-driven**: there is no layout work to publish a new
project. Each project lives in its own typed file in `content/projects/`.

1. Duplicate `content/projects/_template.ts` and rename, e.g.
   `content/projects/new-thing.ts`.
2. Edit the fields. The schema (`content/types.ts`) is fully typed —
   TypeScript will tell you what's missing or wrong.
3. Register the project in `content/projects/index.ts` (just import + add
   to the array).

Required fields: `slug`, `title`, `role`, `year`, `tags`, `summary`,
`cover`, `hero`. Optional: `description`, `gallery`, `credits`, `hoverReel`,
`featured`, `order`, `externalUrl`.

### Media kinds

`hero` and gallery items can be any of:

```ts
{ kind: "image",   src, alt? }
{ kind: "mp4",     src, poster? }
{ kind: "vimeo",   id, hash? }
{ kind: "youtube", id }
```

`hoverReel` is the muted preview that plays on hover in the grid — point
it at a small (≤ 5 MB), short, looping mp4. Anything off-screen never
touches the network thanks to `IntersectionObserver`.

### Site-wide settings

`content/site.ts` controls the brand name, role, contact, socials, and the
showreel that powers both the landing hero and the global "play reel" modal.

`content/about.ts` controls the bio, capabilities, software stack, clients,
and awards.

### Plugging in a hosted CMS later

The local content files implement the same schema you'd export from
Sanity, Contentful, or Payload. Swapping in a hosted CMS is a matter of
replacing `content/projects/index.ts` with a fetcher that returns
`ProjectMeta[]`. No layout code changes.

## Performance

- All grids use `IntersectionObserver` to lazy-mount videos and iframes;
  off-screen tiles never download media.
- `next/image` handles cover thumbnails (responsive, AVIF/WebP).
- Hover reels use `preload="none"` and only attach a `<video>` element
  after the card scrolls into view.
- Heavy client islands (cursor, columns, modal) are explicit
  `"use client"` boundaries; the rest is RSC.

## Accessibility

- Strict dark color palette with WCAG-AA body contrast.
- Custom cursor is disabled on touch + reduced-motion users.
- All animations respect `prefers-reduced-motion`.
- Sidebar + columns are full keyboard-navigable; the showreel modal closes
  on Escape and traps body scroll while open.

## Tech stack

- Next.js 14 · React 18 · TypeScript 5
- Tailwind CSS 3
- Framer Motion 11

---
© 2026 Kaleu Mota.
