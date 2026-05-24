# Stack Frequency Pass

Date: 2026-05-24

This pass adds 26 public stack signals across Awwwards inspiration/case pages, Codrops case/tutorial articles, and studio case studies. The machine-readable table is in [stack-frequency.json](stack-frequency.json).

## Summary

| Stack signal | Count in 25 rows | Interpretation |
| --- | ---: | --- |
| GSAP | 25 | Strongest creative-web animation standard in this pass |
| Three.js / R3F | 16 | Common in award-style 3D/WebGL work, but not a base app default |
| Lenis / smooth scroll | 13 | Common with scroll scenes, but risky enough to stay signature/creative-only |
| ScrollTrigger / ScrollSmoother | 9 | Core scroll-linked creative-web primitive |
| Next.js / React | 9 | Strong enough for the default Dhiraj web implementation stack |
| Tailwind CSS | 4 | Common across modern tutorials/component ecosystems, not universal across awards |
| SVG / GLSL / WebGL | 8 | Premium surface for logos, masks, shaders, and immersive scenes |
| Motion / Framer Motion | 2 | Better represented in component ecosystems than award case-study stacks |

## Decision Impact

- Keep Next.js, React, TypeScript, Tailwind, and Radix/shadcn-style primitives as the app skeleton.
- Keep Motion as the React UI animation default because component ecosystems and official docs support it strongly.
- Keep GSAP as the creative animation engine because award/Codrops evidence is overwhelming.
- Keep Lenis as a Dhiraj signature option, not a default for dashboards/forms.
- Keep Three.js/R3F and shaders as optional premium layers.
