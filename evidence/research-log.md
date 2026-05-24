# Research Log

Date: 2026-05-24

## Live Pass Completed

- Installed and used `youtube-transcript-api` locally.
- Installed and used `yt-dlp` locally for YouTube discovery search.
- Fetched transcripts for 16 videos without storing full transcripts.
- Searched and referenced official docs, component ecosystems, Awwwards/Codrops case studies, and Reddit threads.
- Checked X search in the browser. X redirected to login, so V1 is public/provided-only for X evidence.

## Transcript Status

All listed videos in [sources/source-registry.md](../sources/source-registry.md) were fetched successfully with `youtube-transcript-api`.

Local extraction was limited to:

- snippet counts
- short samples during processing
- keyword/frequency notes
- extracted claims written into [evidence.json](evidence.json)

No full transcript files were saved.

## YouTube Discovery Output

Searches with `yt-dlp` found additional relevant channels and videos beyond the seed list:

- JavaScript Mastery: Awwwards-style React/Tailwind/GSAP and creative frontend courses.
- Prismic: 3D ecommerce landing page with Next.js, GSAP, Three.js, and Prismic.
- DesignCourse: shadcn/Cursor landing page workflow.
- Codegrid: 3D scroll/product animation.
- Wawa Sensei: React Three Fiber landing page interactions.
- Oxeni: Awwwards-style 3D/shader site.

These were added as processed video transcript sources when transcripts were available.

## Batch B Expansion (2026-05-24)

- **Reddit & Community Mining:**
  - **Performance:** INP is the 2025 metric of record. GSAP (~25KB) vs Motion (~35KB+) bundle size analysis.
  - **View Transitions:** Next.js 15 experimental support confirmed for Shared Element Transitions.
  - **Responsive:** Shift to "Fluid-First" using `clamp()` + `rem` + `cqi`. Standard 2025 breakpoints defined.
  - **A11y:** Focus-visible and semantic landmarks are non-negotiable for mastery.
- **Component Ecosystem Deep-Dive:**
  - **shadcn/ui Blocks:** Structural primitives (`Field`, `Input Group`, `app-sidebar.tsx`) are the new 2025 benchmarks for SaaS.
  - **Tremor Raw:** Move from library to copy-paste charts for full Tailwind 4 control.
- **Persistence & Foundations:**
  - **Dark Mode:** Cookie-based persistence identified as superior for App Router to prevent FOUC.
  - **Font Loading:** `next/font` with `display: 'optional'` for headings and `display: 'swap'` for body is the 2025 gold standard.

## Current Summary Takeaways

- **Copy-Paste as Architecture:** The "Raw" (Tremor/shadcn) model is now the standard for production systems that outgrow library abstractions.
- **INP as North Star:** Animation timing and cleanup (`useGSAP`) are now optimized for Interaction to Next Paint scores.
- **Cookie-First Theming:** Dark mode is moving from client-side scripts to server-side cookie reading for "zero flash" performance.
- **Fluid-First Typography:** Viewport units are being replaced by container query units for truly modular components.
