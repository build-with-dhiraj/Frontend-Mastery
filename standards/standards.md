# Dhiraj Standards Decisions

This is the human-readable version of the scored catalog in `standards.json`.

## Default Base Stack

Use this as the default for Dhiraj websites and web apps unless a project constraint overrides it:

- Next.js App Router, React, TypeScript
- Tailwind CSS with CSS-variable tokens
- Radix/shadcn-style primitives for accessibility-sensitive UI
- Motion for React for component-level animation
- GSAP + ScrollTrigger for complex timelines, scroll scenes, SVG/text motion, and creative-site choreography
- React Hook Form + Zod for real forms
- Lucide icons for consistent iconography

## Premium/Contextual Layer

- Lenis is a Dhiraj signature option for creative/marketing pages, not dashboards or forms.
- Three.js + React Three Fiber is a premium optional layer for 3D/WebGL scenes, not a default app requirement.
- SVG motion is strong for logos, icons, path drawing, masks, and data-viz accents.
- Shaders/WebGL are experimental and require fallbacks.

## Canonical Components

The base kit includes one canonical spec for each interaction:

- app shell
- navigation/header
- hero
- section layout
- button
- card
- bento grid
- form
- dialog/sheet
- tabs
- tooltip/popover
- toast
- loading/empty/error states
- CTA
- pricing
- testimonial
- footer

Variants should be implemented as props or visual modes inside these canonical components. Do not create a second competing component for the same interaction.

## Dhiraj Signature

The universal base stays practical. The signature layer gives Dhiraj work a recognizable rhythm:

- crisp editorial layout with restrained density
- hairline borders and 8px-or-less radius
- neutral surfaces with blue and warm-coral accents
- line-masked headline reveals
- calm scroll reveals with blur/y/opacity
- responsive sticky sections only when they clarify a story
- bottom-right toast feedback with short slide/fade motion
- reduced-motion behavior everywhere

## Anti-Patterns

- animation everywhere
- heavy scroll hijacking
- hover-only affordances
- text splitting without accessible fallback
- WebGL as decoration
- Awwwards imitation without product clarity
