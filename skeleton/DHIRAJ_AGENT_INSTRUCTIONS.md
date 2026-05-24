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
npm install next-themes
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
- GSAP + ScrollTrigger: complex timelines, SVG/path, scrubbed scroll, text splitting, creative-site choreography. Use `@gsap/react` useGSAP hook with scope parameter. Centralize config in `lib/gsapConfig.ts`.
- Lenis: signature smooth scroll on creative/marketing pages only.
- React Hook Form + Zod: real forms, validation, onboarding, settings, checkout, and workflow inputs.
- next-themes: dark/light mode switching with SSR support.
- Sonner: toast feedback.
- Lucide: icon system.

## Typography System

Evidence: Utopia.fyi, Kevin Powell, Awwwards font trends 2024-2025.

- **Font stack**: Use `next/font` to self-host Inter (variable) for body/UI. Optional: PP Neue Montreal or Satoshi for display/hero headings.
- **Fluid type scale**: Use `clamp()` with rem units for accessibility. See `design-tokens-typography.css` for the full scale.
- **Line height**: 1.1 for display, 1.3 for headings, 1.5 for body, 1.7 for long-form.
- **Measure**: 65ch max for body text readability.
- **Letter spacing**: -0.02em for display, 0 for body, 0.04em for eyebrow/label/caps.
- **Font loading**: `font-display: swap` for body, `optional` for decorative display. Variable fonts preferred.

## The "Big 10" Canonical Components

Use exactly one component per interaction ID. Variants belong inside the component API.

| Interaction | ID | Role |
| --- | --- | --- |
| `layout.app-shell` | App Shell | Sidebar (desktop) / Bottom Nav (mobile) |
| `action.button` | Button | Primary, Secondary, Ghost, Loading |
| `input.field` | Input | With `Field` primitive (Label, Error, Success) |
| `surface.card` | Card | Hairline borders, radius <= 8px |
| `feedback.skeleton` | Skeleton | Shimmer states for async data |
| `navigation.command` | Command Palette | Cmd+K search and shortcuts |
| `input.select` | Selection | Checkboxes, Radios, Switches |
| `navigation.dropdown` | Dropdown | Popover-style selection menus |
| `feedback.toast` | Toast/Alert | Secondary system-level feedback |
| `overlay.modal` | Modal/Dialog | Focused user interaction |

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

## Accessibility (WCAG 2.2)

Evidence: WCAG 2.3.3, web.dev a11y guides, GSAP matchMedia.

- All animated components must respect `prefers-reduced-motion`.
- Use `gsap.matchMedia()` to branch animation logic for reduced-motion users.
- Provide reduced-motion alternative: opacity fade instead of full transform/blur.
- Text splitting (SplitText): use `aria-label` on parent element with full text, `aria-hidden="true"` on split spans.
- Focus management: visible focus indicators on all interactive elements. Use Radix for accessible dialog/tooltip/popover.
- Touch targets: minimum 48px on mobile.
- Color contrast: WCAG AA minimum (4.5:1 text, 3:1 large text) in both light and dark themes.
- Keyboard navigation: all interactive elements must be reachable via Tab/Enter/Escape.
- Skip links: include skip-to-main-content link in app shell.

## Dark/Light Theme System

Evidence: shadcn production patterns, next-themes.

- Detect system preference via `prefers-color-scheme`.
- Use `next-themes` with `attribute="class"` and `suppressHydrationWarning` on `<html>`.
- CSS custom properties in `:root` and `.dark` toggle all color tokens.
- Persist user choice in cookie for SSR (avoid flash of wrong theme).
- Both themes must pass WCAG AA contrast ratios.
- See `design-tokens.css` for the Dhiraj light and dark palettes.

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
- Consistent 8px spacing scale.

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
- page transition: View Transitions API with `experimental.viewTransition` in next.config. Graceful fallback to instant.
- smooth scroll: native by default; Lenis only on creative pages and disabled for reduced motion.

## Performance Budget

Evidence: web.dev CWV, animation bundle analysis.

- **Total animation JS**: <80KB gzipped (GSAP ~23KB + Motion ~2-46KB + Lenis ~3KB).
- **Modular imports**: Only import GSAP plugins you use. Tree-shake unused code.
- **Lazy load**: Heavy animation components with `next/dynamic({ ssr: false })`.
- **LCP**: Never animate the LCP element with JavaScript. Target <2.5s.
- **INP**: Target <200ms. Avoid scroll-hijacking and excessive `scrub` on long pages.
- **CLS**: Target <0.1. Use skeleton loading. Never animate width/height/top/left.
- **GPU properties**: Only animate `transform` and `opacity` for compositor-thread rendering.
- **GSAP discipline**: Don't overuse ScrollTrigger. Use `invalidateOnRefresh` for responsive. Never nest ScrollTrigger inside ScrollTrigger timeline.
- **Centralize config**: Register GSAP plugins once in `lib/gsapConfig.ts`.

## Responsive Design

Evidence: Kevin Powell, web.dev, modern CSS.

- **Fluid-first**: Use `clamp()`, `min()`, `max()` instead of media queries where possible.
- **Container queries**: Use for component-level responsiveness.
- **Breakpoints** (when needed): 640px (sm), 768px (md), 1024px (lg), 1280px (xl), 1536px (2xl).
- **Touch targets**: 48px minimum on mobile.
- **Mobile navigation**: Tab bar, drawer, or collapsible sidebar. Hamburger alone is insufficient for complex apps.
- **Fluid type scale**: See `design-tokens-typography.css`. Headings scale fluidly; body text may use breakpoints.

## What To Avoid

- Animation everywhere.
- Heavy scroll hijacking.
- WebGL as decoration.
- Hover-only affordances.
- Text splitting without semantic text and reduced-motion fallback.
- Toast-only critical errors.
- Duplicating components for the same interaction.
- Copying Awwwards-style spectacle into dashboards, forms, or dense product workflows.
- Animating LCP elements with JavaScript.
- Layout-triggering CSS animations (width, height, top, left).
- More than 3 animation libraries in one project.

## Page Defaults

Marketing/site page:

- nav/header
- hero with text reveal
- marquee / logo ticker (social proof)
- bento feature section
- proof/testimonial
- CTA
- footer

Product/app page:

- app shell with sidebar navigation
- nav/header with command palette (⌘K)
- form with inline validation
- tabs
- cards
- dialog/sheet
- toast
- skeleton loading
- loading/empty/error/success states
- keyboard shortcuts

## Review Checklist

Before finishing, verify:

- **Foundation:** 8px grid is respected; semantic tokens used; fluid typography in place.
- **Accessibility:** WCAG AA contrast passes in both themes. prefers-reduced-motion tested. Focus states visible. Skip link present. Text splitting uses aria-label.
- **Performance:** Total animation JS <80KB gzip. LCP <2.5s. No JS on LCP element. Modular GSAP imports.
- **Typography:** Fluid type scale with clamp() and rem. Line lengths < 65ch. Font loaded via next/font.
- **Dark mode:** Both themes work. next-themes with suppressHydrationWarning. No flash of wrong theme.
- **Psychology:** Goal Gradient Effect (progress bars) and Peak-End Rule (victory states) applied.
- **Safety:** Form errors are inline; reduced-motion fallback is tested.
- **Signature:** Dhiraj-specific visual voice is evident (hairline borders, radius <= 8px, blue/coral/mint accents).
- Every component maps to one canonical interaction ID.
- No duplicate component exists for the same interaction.
- All required states are implemented.
- Focus states are visible.
- Mobile layout has no text overlap or unstable dimensions.
- Lenis is not used in dashboards/forms/data workflows.
- GSAP is used only when Motion/CSS is insufficient.
- Optional 3D/WebGL is justified by the concept and has fallback behavior.
- View Transitions used for page navigation where supported.

## Implementation Seed

If available, start from:

- `skeleton/reference-implementation`
- `skeleton/design-tokens.css`
- `skeleton/design-tokens-typography.css`
- `skeleton/motion-specs.json`
- `skeleton/component-specs.json`
- `skeleton/default-stack.json`
- `skeleton/prompts.md`

Do not replace the Dhiraj base layer with a generic shadcn, Magic UI, or React Bits component. Those libraries can inspire optional variants, but the Dhiraj skeleton remains canonical.
 React Bits component. Those libraries can inspire optional variants, but the Dhiraj skeleton remains canonical.
