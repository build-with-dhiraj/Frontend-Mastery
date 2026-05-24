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

## Initial Evidence Takeaways

- The stable app foundation clusters around React/Next.js, TypeScript, Tailwind, Radix/shadcn-style primitives, accessible form handling, consistent icons, and explicit states.
- The creative website layer clusters around GSAP/ScrollTrigger, Motion, Lenis, Three.js/R3F, SVG motion, shader/WebGL work, sticky sections, text reveals, and scroll-linked animation.
- Component ecosystems repeatedly expose the same section/component types: hero, nav/header, cards, bento grids, pricing, CTA, testimonials, empty/loading states, modals, tooltips, tabs, forms, and footers.
- Community signals strongly warn against copying the flashiest award-site behaviors into real product workflows without accessibility, performance, and reduced-motion guardrails.

## Known Gaps

- X/Twitter: blocked by login during browser search. Add only public/provided X links in the next pass.
- More Awwwards case studies should be mined into a stack frequency table.
- More source classes can improve confidence for mobile-app-specific patterns.
