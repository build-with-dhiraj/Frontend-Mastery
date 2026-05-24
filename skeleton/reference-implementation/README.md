# Reference Implementation

Copy these files into a Next.js project after installing the packages from `../install.md`.

Suggested locations:

- `lib/dhiraj-utils.ts`
- `lib/dhiraj-motion.ts`
- `components/dhiraj-ui.tsx`
- `components/dhiraj-sections.tsx`
- import `../design-tokens.css` into the app global CSS

The implementation is intentionally a base layer:

- It uses one canonical component per interaction.
- It keeps 3D/WebGL out of the default component code.
- It includes reduced-motion behavior.
- It expects project-specific copy, assets, and data to be passed in through props.
