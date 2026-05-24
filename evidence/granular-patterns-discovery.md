# Granular Patterns Discovery

This document captures high-density technical patterns extracted from world-class creative developers and design systems.

| Pattern Name | Source ID | Evidence/Claim | Technical Spec |
| --- | --- | --- | --- |
| **UV Distortion Ripple** | yt-akella-creative-coding-1 | Distance-based UV offset in fragment shaders for "bulge" effects. | `float dist = distance(vUv, uMouse);` `uv += normalize(vUv - uMouse) * strength * exp(-dist * 10.0);` |
| **Chromatic Aberration (Cinematic)** | yt-akella-creative-coding-1 | RGB channel offsets for analog/glass feel. | `float r = texture2D(t, uv + offset).r; float g = texture2D(t, uv).g; float b = texture2D(t, uv - offset).b;` |
| **Stateful Camera Dolly** | yt-wrong-akram-spatial-ui | Camera position as state, interpolated in `useFrame`. | `state.camera.position.lerp(targetPos, 0.1);` `state.camera.lookAt(targetLookAt);` |
| **The "X-Ray" View** | yt-wrong-akram-spatial-ui | 3D object ghosting (opacity 0.05) to reveal 2D UI. | `material.transparent = true; material.opacity = MathUtils.damp(material.opacity, 0.05, 4, delta);` |
| **Distance-Triggered Spawn** | yt-hyperplexed-viral-interactions | Preventing DOM bloat by only spawning on movement threshold. | `if (distance(mouse, lastPos) > 100) { spawn(); lastPos = mouse; }` |
| **Deterministic Randomness** | yt-hyperplexed-viral-interactions | Controlled "natural" variety via pre-defined arrays. | `const colors = ['#f00', '#0f0', '#00f']; const pick = colors[Math.floor(Math.random() * colors.length)];` |
| **Skeletal Page Flip** | yt-wawa-3d-book-slider | Realistic paper bending using `SkinnedMesh` and `Bones`. | `bone.rotation.y = useSpring({ to: targetAngle, config: { mass: 1, tension: 170, friction: 26 } });` |
| **Roughness UI Pop** | yt-wawa-3d-book-slider | High-contrast roughness maps to make ink/logos glossy. | `roughnessMap: tex; metalness: 0.1;` (Logo: 0.0, Paper: 1.0 in map). |
| **Scrub-Linked Progress** | yt-codegrid-3d-scroll-product | GSAP ScrollTrigger driving R3F animation progress. | `ScrollTrigger.create({ scrub: 2, onUpdate: (self) => { mesh.rotation.y = self.progress * Math.PI * 2; } });` |
| **3D-to-2D Projection** | yt-codegrid-3d-scroll-product | Sticking HTML tooltips to specific 3D mesh coordinates. | `vector.set(x, y, z).project(camera);` `tooltip.style.transform = \`translate3d(\${x}px, \${y}px, 0)\`;` |
| **Pixel-Perfect Fluid Type** | yt-kevin-powell-fluid-type-2025 | Using `round()` to eliminate sub-pixel jitter in text. | `font-size: clamp(1rem, round(nearest, 1rem + 2.5cqi, 1px), 3rem);` |
| **Container Style Queries** | yt-kevin-powell-modern-responsive | Component response to parent custom properties. | `@container style(--theme: dark) { .btn { background: #fff; } }` |
| **Surface Ladder (Linear)** | analysis-linear-design | Depth via background colors rather than shadows. | `Base: #080A0A; Raised: #0F1111; Overlay: #161818;` |
| **Hairline Borders** | analysis-linear-design | Precise 1px borders with low-alpha white. | `border: 1px solid rgba(255, 255, 255, 0.1);` |
| **Stripe Snappy Ease** | analysis-linear-design | Custom cubic-bezier for aggressive, organic motion. | `cubic-bezier(0.165, 0.84, 0.44, 1)` (Quart Out). |
| **Stripe Entrance (Expo)** | analysis-linear-design | Maximum deceleration for entrance animations. | `cubic-bezier(0.19, 1, 0.22, 1)` (Expo Out). |
| **Vercel Snappy Spring** | official-shadcn-components-json | High stiffness, zero bounce for tool-like feel. | `{ stiffness: 300, damping: 30, mass: 1 }` (Framer Motion). |
| **Vercel Bouncy Spring** | official-shadcn-components-json | Playful overshoot for notifications/toasts. | `{ stiffness: 200, damping: 10, mass: 1 }` (Framer Motion). |
| **Magnetic Center Logic** | yt-hyperplexed-hover-effect | Calculating cursor offset from element center. | `const x = (e.clientX - rect.left) - rect.width / 2;` `gsap.to(el, { x: x * 0.3, y: y * 0.3 });` |
| **Glow Border (Radial)** | yt-hyperplexed-hover-effect | Following mouse with a radial gradient on a pseudo-element. | `background: radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.2), transparent);` |
| **Infinite Marquee Sync** | yt-olivier-infinite-text-marquee | Dual-element xPercent loop at -100%. | `gsap.to(".text", { xPercent: -100, repeat: -1, duration: 10, ease: "none" });` |
| **Aspect-Ratio Shader Fit** | yt-akella-creative-coding-1 | Fixing texture stretching inside custom shaders. | `float aspect = uRes.x / uRes.y; uv.x *= aspect;` (or complex "cover" math). |
| **Noise-Based UV Jitter** | yt-akella-creative-coding-1 | Using noise textures to distort static images. | `vec2 noise = texture2D(uNoise, vUv + uTime).rg; uv += noise * 0.05;` |
