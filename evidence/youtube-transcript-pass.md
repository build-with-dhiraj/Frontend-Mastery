# YouTube Transcript Pass

Date: 2026-05-24

Transcript tooling succeeded for the seed videos and discovered videos. Full transcripts are not stored; only extracted evidence and counts are kept.

## Processed Videos

| Channel | Video | Transcript snippets | Strong signals |
| --- | --- | ---: | --- |
| Olivier Larose | My Top 5 Techniques for Web Animation | 274 | scroll progress, viewport detection, sticky, easing, text splitting, interpolation, shaders |
| Warp / Raphael Salaja | The Rise of Design Engineering | 1068 | design engineering, states, taste, implementation detail |
| Syntax / Cassie Evans | GSAP: Killer Web Animations | 1356 | GSAP, SVG, React cleanup, performance, accessibility |
| Tim Gabe | I Studied 500+ Gamified Apps | 265 | competence feedback, gamification anti-patterns |
| Olivier Larose | Top 10 Web Animation Trends of 2024 | 184 | trends, accessibility, scroll, sticky |
| Olivier Larose | My Top 10 Resources for Web Animations | 328 | creative dev resource map |
| Olivier Larose | Awwwards Floating Image Gallery with Nextjs and GSAP | 211 | mouse gallery, Next.js, GSAP |
| Tim Gabe | Our World Class App Design Formula | 328 | systemized app design process |
| JavaScript Mastery | Build and Deploy an Awwwards Winning Website | 3534 | React, Tailwind, GSAP, bento, hero, scroll, text |
| JavaScript Mastery | Master Web Animations in 2 Hours | 3351 | GSAP, scroll, hero, parallax, Tailwind |
| JavaScript Mastery | Master Creative Frontend with React, Three.js & GSAP | 3321 | React, Next, GSAP, Three.js, performance |
| Prismic | 3D Ecommerce Landing Page with Next.js, GSAP, Three.js and Prismic | 8236 | Next, React, Tailwind, GSAP, Three.js, TypeScript, performance |
| DesignCourse | Pro Level ShadCN & Cursor Landing Page | 503 | shadcn, Cursor, non-generic landing-page composition |
| Codegrid | 3D Scroll Product Animation | 501 | scroll, Next, Motion, Three.js, GSAP |
| Wawa Sensei | 3D Book Slider with Three.js & React | 888 | React, Three.js, interaction prototype |
| Oxeni | Awwwards Winning 3D Website | 437 | shaders, Next, Three.js, WebGL |

## Decision Impact

- Next.js/React/Tailwind/TypeScript are justified as the default web implementation stack.
- GSAP is justified as the creative animation engine.
- Motion is justified for React-native UI transitions and component animation.
- Three.js/R3F and shaders are recurring but remain optional because risk and asset complexity are high.
- Dhiraj needs a system, not isolated components: states, motion tokens, review rules, and source-backed defaults.
