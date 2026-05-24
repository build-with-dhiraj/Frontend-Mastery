# Dhiraj Frontend Starter

Runnable Next.js starter for the Dhiraj Frontend Standards Corpus and Skeleton Kit.

## Routes

- `/` - marketing/site layer: hero, nav, bento grid, pricing/tier cards, testimonial, CTA, footer.
- `/app` - product/app layer: form validation, tabs, dialog, popover, tooltip, toast, loading/empty/error/success states.

## Run

```bash
npm run dev -- --port 3000
```

Open [http://localhost:3000](http://localhost:3000).

## Validate

```bash
npm run lint
npm run build
```

## Dhiraj Rules Represented

- One canonical component per interaction.
- Motion has duration, easing, and reduced-motion behavior.
- Radix primitives handle accessibility-sensitive UI.
- Toast is non-blocking feedback; form errors stay inline.
- Lenis/3D/WebGL are not included in the default rendered pages.
- Optional spectacle is documented, not forced into the product layer.
