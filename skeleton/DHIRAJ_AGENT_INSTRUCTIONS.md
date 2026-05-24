# Dhiraj Frontend Agent Instructions

Use this file as the copy-paste instruction pack for Cursor, Antigravity, Codex, or any coding agent building a Dhiraj-standard web app or website.

## Mission

Build a Dhiraj-standard frontend: polished, product-safe, motion-aware, accessible, and recognizable across projects.

The system has two layers:

- Base layer: evidence-backed defaults that serious modern web apps should have.
- Signature layer: Dhiraj-specific visual and motion rhythm.

Do not invent a second design system. Use the canonical interactions below.

## Default Stack

Use this stack unless the project explicitly requires another one:

```bash
npx create-next-app@latest dhiraj-app --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
npm install @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-tooltip @radix-ui/react-popover
npm install class-variance-authority clsx tailwind-merge lucide-react sonner
npm install react-hook-form zod @hookform/resolvers
npm install motion gsap @gsap/react lenis
```

Optional 3D/WebGL only when the concept requires it:

```bash
npm install three @react-three/fiber @react-three/drei
```

## Package Roles

- Next.js App Router, React, TypeScript: default app/site foundation.
- Tailwind CSS: token-driven styling and component portability.
- Radix/shadcn-style primitives: dialog, sheet, tabs, tooltip, popover, and accessibility-sensitive interactions.
- Motion: React UI transitions, layout animation, hover, modal, toast, scroll reveal.
- GSAP + ScrollTrigger: complex timelines, SVG/path, scrubbed scroll, text splitting, creative-site choreography.
- Lenis: signature smooth scroll on creative/marketing pages only.
- React Hook Form + Zod: real forms, validation, onboarding, settings, checkout, and workflow inputs.
- Sonner: toast feedback.
- Lucide: icon system.

## Canonical Components

Use exactly one component per interaction ID. Variants belong inside the component API.

| Interaction | Canonical Component |
| --- | --- |
| `layout.app-shell` | App shell |
| `navigation.primary` | Navigation/header |
| `section.hero` | Hero |
| `section.standard` | Section layout |
| `action.button` | Button |
| `surface.card` | Card |
| `layout.bento-grid` | Bento/grid |
| `input.form` | Form |
| `overlay.dialog-sheet` | Dialog/sheet |
| `navigation.tabs` | Tabs |
| `overlay.tooltip-popover` | Tooltip/popover |
| `feedback.toast` | Toast |
| `feedback.async-state` | Loading/empty/error/success |
| `section.cta` | CTA |
| `commerce.pricing` | Pricing |
| `proof.testimonial` | Testimonial |
| `navigation.footer` | Footer |

## Required States

Every component must include the states that apply:

- default
- hover
- focus
- active
- disabled
- loading
- empty
- error
- success
- mobile
- desktop
- reduced motion

Never call a component done if its loading, error, empty, focus, mobile, or reduced-motion behavior is missing.

## Dhiraj Visual Language

- Editorial but utilitarian.
- Hairline borders.
- Radius 8px or less.
- Neutral background with blue, coral, and mint accents.
- Dense enough for real product use; not a marketing-template parade.
- No nested cards.
- No decorative gradient orbs, bokeh blobs, or one-hue purple/blue palettes.
- Use icons for tools and commands when available.
- Text must fit its container at mobile and desktop sizes.

## Dhiraj Motion Language

Use these tokens:

- standard ease: `cubic-bezier(0.22, 1, 0.36, 1)`
- entrance ease: `cubic-bezier(0.16, 1, 0.3, 1)`
- exit ease: `cubic-bezier(0.7, 0, 0.84, 0)`
- micro: `160ms`
- base: `240ms`
- section: `560ms`
- hero: `720ms`

Canonical motion:

- page entrance: opacity/y/blur, 560ms, reduced motion = opacity only.
- header text reveal: line-masked words, y 40, blur 8, 720ms, 60ms stagger, reduced motion = immediate/fade.
- scroll reveal: opacity/y/blur, once at 30-35% visibility, reduced motion = opacity only or none.
- card hover: y -4, border/elevation lift, 240ms, reduced motion = border/color only.
- modal transition: overlay fade plus content scale/y, 220ms in, 140ms out.
- toast: bottom-right desktop, bottom mobile, y/opacity/scale, 180ms in, 140ms out.
- smooth scroll: native by default; Lenis only on creative pages and disabled for reduced motion.

## What To Avoid

- Animation everywhere.
- Heavy scroll hijacking.
- WebGL as decoration.
- Hover-only affordances.
- Text splitting without semantic text and reduced-motion fallback.
- Toast-only critical errors.
- Duplicating components for the same interaction.
- Copying Awwwards-style spectacle into dashboards, forms, or dense product workflows.

## Page Defaults

Marketing/site page:

- nav/header
- hero
- bento feature section
- proof/testimonial
- CTA
- footer

Product/app page:

- app shell
- nav/header
- form with inline validation
- tabs
- cards
- dialog/sheet
- toast
- loading/empty/error/success states

## Review Checklist

Before finishing, verify:

- Every component maps to one canonical interaction ID.
- No duplicate component exists for the same interaction.
- All required states are implemented.
- Focus states are visible.
- Form errors are inline.
- Toasts are secondary feedback only.
- Motion has duration, easing, and reduced-motion behavior.
- Lenis is not used in dashboards/forms/data workflows.
- GSAP is used only when Motion/CSS is insufficient.
- Optional 3D/WebGL is justified by the concept and has fallback behavior.
- Mobile layout has no text overlap or unstable dimensions.

## Implementation Seed

If available, start from:

- `skeleton/reference-implementation`
- `starter/src/components/dhiraj-ui.tsx`
- `starter/src/components/dhiraj-sections.tsx`
- `starter/src/lib/motion.ts`
- `starter/src/app/globals.css`

Do not replace the Dhiraj base layer with a generic shadcn, Magic UI, or React Bits component. Those libraries can inspire optional variants, but the Dhiraj skeleton remains canonical.
