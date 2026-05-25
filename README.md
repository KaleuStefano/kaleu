# Kaleu Motion Portfolio

Premium dark-mode portfolio for a Senior Motion Designer and 3D Generalist. The site is built as a CMS-driven React/Vite experience with Finder-inspired columns, showreel playback, hover video previews, lazy-loaded media, and responsive slide-over navigation.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Editing content without touching layout code

All editable portfolio content lives in:

```text
src/content/portfolio.ts
```

Duplicate a project object inside `projects`, then replace:

- `slug`
- `title`
- `year`
- `discipline`
- `client`
- `summary`
- `description`
- `coverImage`
- `previewVideo`
- `media`

Media entries support:

- `type: "image"` for still renders
- `type: "video"` for native MP4/WebM loops
- `type: "embed"` for Vimeo or YouTube iframe embeds

The layout, navigation column, mobile switcher, hover preview, and project detail page update automatically from this content file.