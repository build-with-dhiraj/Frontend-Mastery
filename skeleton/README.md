# Dhiraj Agent Skeleton Pack

Use this pack when asking Cursor, Antigravity, Codex, or another coding agent to build a Dhiraj-style website or web app.

## What To Give The Agent

1. [default-stack.json](default-stack.json)
2. [component-specs.json](component-specs.json)
3. [motion-specs.json](motion-specs.json)
4. [design-tokens.css](design-tokens.css)
5. [DHIRAJ_AGENT_INSTRUCTIONS.md](DHIRAJ_AGENT_INSTRUCTIONS.md)
6. [prompts.md](prompts.md)
7. Reference implementation files under [reference-implementation](reference-implementation)

## Base Versus Signature

- Base layer: evidence-backed defaults that should appear in serious modern web apps.
- Signature layer: Dhiraj-specific motion and visual rhythm.
- Optional layer: 3D, shaders, Lenis, SVG motion, and other high-taste additions.

## Non-Negotiables

- Preserve accessibility from Radix/shadcn-style primitives.
- Every component must include mobile, desktop, reduced-motion, focus, and async/error states where applicable.
- No second component for the same interaction.
- Do not add WebGL, custom cursors, smooth scroll, or text splitting unless the page concept earns it.
