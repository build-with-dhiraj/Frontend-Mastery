# Dhiraj Frontend Standards

This document outlines the evidence-backed standards for Dhiraj-branded frontend development.

## T0: Foundation (No-Brainer)

| Standard | Role | Why |
| --- | --- | --- |
| **Next.js 15+** | Framework | Standard for 2025 performance, SEO, and developer velocity. |
| **React 19+** | UI Library | Primary component-driven architecture. |
| **TypeScript** | Language | Mandatory for professional, agent-ready codebases. |
| **Tailwind CSS 4.0** | Styling | Utility-first tokens and maximum component portability. |
| **Radix / Base UI** | Primitives | Accessible foundations. Base UI emerging for performance. |
| **GSAP / useGSAP** | Motion | Absolute standard for complex motion and scroll orchestration. |
| **Fluid Typography**| Design | clamp() + cqi + rem base for robust, modular type scaling. |
| **WCAG 2.2** | A11y | Mandatory focus-visible, keyboard nav, and semantic landmarks. |
| **Cookie Persistence**| Auth/Theme | Superior SSR performance for dark mode and auth states. |

## T1: Premium Standard (Recommended)

| Standard | Role | Why |
| --- | --- | --- |
| **Three.js / R3F** | Immersive | Industry standard for award-winning 3D experiences. |
| **Better-Auth** | Auth | Rising star 2025: open-source, extensible, and RSC-native. |
| **Drizzle ORM** | Data | Performance-first serverless data access. |
| **Command Palette** | Navigation | Cmd+K patterns for high-density pro-tools (Linear style). |
| **Tremor Raw** | Dashboard | Copy-paste charts for full Tailwind control over KPIs. |
| **Shared Elements** | Transitions | View Transitions API for seamless route-to-route motion. |

## T2: Taste Layer (Signature)

| Standard | Role | Why |
| --- | --- | --- |
| **Victory Visuals** | Psychology | Peak-End Rule: rewarding user milestones with high polish. |
| **3D-to-2D Morph** | Interaction | High-end transition from immersive intro to functional UI. |
| **Depth Map Parallax**| Visuals | 3D depth on static images with low asset weight. |
| **Opinionated Density**| Layout | High information density for efficient pro-tool workflows. |

## Anti-Patterns (Avoid)

- **Scroll Hijacking:** Native-breaking scroll behavior without accessibility/Lenis guardrails.
- **Over-Animation:** Animating every element; creates toy-like feel and degrades UX.
- **useState for Tracking:** Using React state for high-frequency tracking (use `useMotionValue`).
- **Generic shadcn:** Using shadcn defaults without Dhiraj-signature tokens/composition.
- **Sound without Consent:** Auto-playing audio or audio without a clear mute toggle.
