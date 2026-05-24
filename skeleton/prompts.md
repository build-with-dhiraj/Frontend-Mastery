# Dhiraj Agent Prompts

## System Prompt For A New Dhiraj Web App

You are building a Dhiraj-standard web app in Next.js App Router, React, TypeScript, Tailwind CSS, Radix/shadcn-style primitives, Motion, GSAP, and Lenis only where appropriate.

Use the provided `default-stack.json`, `component-specs.json`, `motion-specs.json`, `design-tokens.css`, and `design-tokens-typography.css`.

Rules:

- One canonical component per interaction.
- Do not invent competing components for button, card, dialog, toast, tabs, tooltip, hero, pricing, footer, or async state.
- Use Motion for normal React UI animation.
- Use GSAP only for complex timelines, ScrollTrigger, SVG/path, or text splitting. Always use @gsap/react useGSAP hook with scope parameter.
- Use Lenis only on creative/marketing pages, never dashboards/forms/data workflows.
- Preserve focus, keyboard behavior, mobile layout, and reduced-motion behavior.
- Keep radii at 8px or less unless a primitive requires otherwise.
- Do not use decorative gradient orbs, bokeh blobs, card-inside-card layouts, or one-hue palettes.
- Use fluid typography with clamp() and rem units. Reference design-tokens-typography.css.
- Use next-themes for dark/light mode with suppressHydrationWarning.
- Use next/font for self-hosted font loading with font-display: swap.
- Performance budget: <80KB gzipped animation JS. Never animate LCP element with JS.
- WCAG AA contrast in both themes. prefers-reduced-motion respected everywhere.

## Hero Prompt

Build a Dhiraj-standard hero section.

Requirements:

- First viewport clearly identifies the product/person/place/object.
- Use an editorial headline with the Dhiraj header text reveal: line masked, opacity 0, y 40, blur 8 to opacity 1, y 0, blur 0, 720ms, cubic-bezier(0.16, 1, 0.3, 1), 60ms stagger.
- Include concise supporting copy, one primary action, one secondary action at most, and a proof/meta strip.
- Use Motion for animation and reduced-motion fallback.
- Use the Dhiraj token colors and 8px-or-less radius.
- Use fluid typography from design-tokens-typography.css. Hero heading uses --dhiraj-text-4xl.
- Do not use a generic SaaS hero, decorative orbs, or a split hero card layout.
- Text splitting: use aria-label on parent, aria-hidden on split spans for screen reader accessibility.

## Component Prompt

Implement the requested component using `component-specs.json`.

For the component:

- Use the existing interaction ID.
- Include all states listed in the spec.
- Use the motion IDs listed in the spec.
- Use Radix primitives for accessibility-sensitive interactions.
- Use Tailwind with Dhiraj CSS variables.
- Use lucide-react icons where an icon makes the command clearer.
- Do not add a duplicate component for the same interaction.
- Ensure WCAG AA contrast in both light and dark themes.
- Touch targets minimum 48px on mobile.
- Keyboard navigation: Tab, Enter, Escape, Arrow keys where appropriate.

## Motion Prompt

Implement animation using `motion-specs.json`.

Rules:

- Every animation must have duration, easing, and reduced-motion behavior.
- Use Motion for component entrance, hover, layout, modal, and toast motion.
- Use GSAP only when the animation needs timelines, ScrollTrigger, text splitting, SVG paths, or scrubbed scroll.
- Use CSS sticky before GSAP pinning when possible.
- Never hide critical content behind JS-only animation.
- Use gsap.matchMedia() for prefers-reduced-motion branching in GSAP.
- For page transitions, prefer the View Transitions API with next.config experimental.viewTransition.
- Performance: only animate transform and opacity. Never animate width/height/top/left.

## Dashboard / Product Page Prompt

Build a Dhiraj-standard product/dashboard page.

Requirements:

- App shell with sidebar navigation (collapsible on mobile).
- Command palette (⌘K) for global search/actions.
- 8px spacing grid, consistent throughout.
- Bold typography with high contrast (Linear design principles).
- Keyboard-first UX: all actions reachable via keyboard shortcuts.
- Skeleton loading for data-backed UI (shimmer with reduced-motion fallback).
- Inline form errors, toast for secondary feedback only.
- Dark mode that passes WCAG AA contrast.
- No creative animation on dashboards. No Lenis. No scroll hijacking.
- Performance: lazy load heavy components. Modular GSAP imports if used at all.

## Review Prompt

Review this UI against the Dhiraj standards.

Check:

- Does every component map to exactly one canonical interaction ID?
- Are all required states implemented (including loading, error, empty, mobile, desktop, reduced-motion)?
- Is reduced motion respected? Is gsap.matchMedia() used for GSAP animations?
- Is text splitting accessible (aria-label on parent, aria-hidden on spans)?
- Is the motion helping hierarchy, causality, state change, or brand rhythm?
- Is anything overanimated, scroll-hijacked, inaccessible, too slow, or too template-like?
- Are there any duplicate components for the same interaction?
- Are optional 3D/WebGL/Lenis features justified by the product concept?
- Does the typography use the fluid type scale from design-tokens-typography.css?
- Do both light and dark themes pass WCAG AA contrast?
- Is the total animation JS under 80KB gzipped?
- Is LCP under 2.5s? Is the LCP element free from JS animation?
- Are fonts loaded via next/font with appropriate font-display?
- Are touch targets at least 48px on mobile?
- Is keyboard navigation complete (Tab, Enter, Escape)?
- Is there a skip-to-main-content link?
