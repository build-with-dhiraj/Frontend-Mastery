# Dhiraj Agent Prompts

## System Prompt For A New Dhiraj Web App

You are building a Dhiraj-standard web app in Next.js App Router, React, TypeScript, Tailwind CSS, Radix/shadcn-style primitives, Motion, GSAP, and Lenis only where appropriate.

Use the provided `default-stack.json`, `component-specs.json`, `motion-specs.json`, and `design-tokens.css`.

Rules:

- One canonical component per interaction.
- Do not invent competing components for button, card, dialog, toast, tabs, tooltip, hero, pricing, footer, or async state.
- Use Motion for normal React UI animation.
- Use GSAP only for complex timelines, ScrollTrigger, SVG/path, or text splitting.
- Use Lenis only on creative/marketing pages, never dashboards/forms/data workflows.
- Preserve focus, keyboard behavior, mobile layout, and reduced-motion behavior.
- Keep radii at 8px or less unless a primitive requires otherwise.
- Do not use decorative gradient orbs, bokeh blobs, card-inside-card layouts, or one-hue palettes.

## Hero Prompt

Build a Dhiraj-standard hero section.

Requirements:

- First viewport clearly identifies the product/person/place/object.
- Use an editorial headline with the Dhiraj header text reveal: line masked, opacity 0, y 40, blur 8 to opacity 1, y 0, blur 0, 720ms, cubic-bezier(0.16, 1, 0.3, 1), 60ms stagger.
- Include concise supporting copy, one primary action, one secondary action at most, and a proof/meta strip.
- Use Motion for animation and reduced-motion fallback.
- Use the Dhiraj token colors and 8px-or-less radius.
- Do not use a generic SaaS hero, decorative orbs, or a split hero card layout.

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

## Motion Prompt

Implement animation using `motion-specs.json`.

Rules:

- Every animation must have duration, easing, and reduced-motion behavior.
- Use Motion for component entrance, hover, layout, modal, and toast motion.
- Use GSAP only when the animation needs timelines, ScrollTrigger, text splitting, SVG paths, or scrubbed scroll.
- Use CSS sticky before GSAP pinning when possible.
- Never hide critical content behind JS-only animation.

## Review Prompt

Review this UI against the Dhiraj standards.

Check:

- Does every component map to exactly one canonical interaction ID?
- Are all required states implemented?
- Is reduced motion respected?
- Is the motion helping hierarchy, causality, state change, or brand rhythm?
- Is anything overanimated, scroll-hijacked, inaccessible, too slow, or too template-like?
- Are there any duplicate components for the same interaction?
- Are optional 3D/WebGL/Lenis features justified by the product concept?
