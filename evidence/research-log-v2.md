# Research Log — Deep Evidence Expansion Pass v2

**Date**: 2026-05-24
**Scope**: 5-phase research expansion with gap analysis

## Methodology

1. **Gap Analysis**: Reviewed all existing skeleton files (agent instructions, component-specs, motion-specs, design-tokens, default-stack, prompts) and identified 8 missing dimensions.
2. **YouTube Discovery**: Used yt-dlp to search channels, extracted evidence via web search (transcript API blocked by YouTube IP ban).
3. **Web Research**: Systematic web search across Awwwards, studios, Reddit communities, component ecosystems, and official documentation.
4. **Evidence Extraction**: Each search result parsed for claims, signals, and stack mentions.
5. **Standards Synthesis**: New standards created only when backed by ≥2 evidence claims.

## Corpus Growth

| Metric | Before | After | Growth |
|---|---|---|---|
| Sources | ~48 | 80 | +67% |
| Evidence claims | 45 | 61 | +36% |
| Standards | 46 | 57 | +24% |
| Canonical components | 16 | 19 | +19% |
| Motion specs | 8 | 9 | +12% |
| Design token files | 1 | 2 | +100% |

## Key Findings

### Animation Library Landscape (Confirmed)
- GSAP (~23KB) = complex timelines, scroll, SVG, text splitting
- Motion/Framer Motion (~34-46KB) = React UI transitions, layout, exit
- CSS = simple hover, fade, basic transitions
- These three coexist in Awwwards-winning projects

### Studio Stack Consensus
- Next.js + GSAP + Three.js = Awwwards gold standard (SOTY 2024+2025)
- Darkroom Engineering created Lenis; Locomotive created Locomotive Scroll
- Custom WebGL > template-based approaches for top awards

### Typography Standard (NEW)
- Inter = UI standard, Satoshi = modern alternative, PP Neue Montreal = display grotesk
- Variable fonts are standard practice
- Fluid typography with clamp() + rem for accessibility
- Utopia.fyi is the industry tool for type scale generation

### Accessibility Gap (FIXED)
- WCAG 2.3.3 requires user control over non-essential animation
- gsap.matchMedia() is the official pattern for reduced-motion
- Text splitting needs aria-label on parent, aria-hidden on split spans
- Touch targets must be 48px minimum

### SaaS Design Standard (NEW)
- Linear design: clarity/speed/logic > decoration, 8px spacing, bold type, keyboard-first
- "Boring but better" aesthetic for product UI vs creative marketing
- Command palette (⌘K) becoming a product UI standard

### View Transitions API (NEW)
- Widespread browser support in 2025-2026
- Next.js experimental support via React ViewTransition component
- GPU-compositor performance far exceeds JS page transitions
- Progressive enhancement with graceful fallback

## Limitations

- YouTube transcript API was blocked by YouTube IP ban during this pass. Evidence for video sources comes from web search summaries, not full transcript analysis.
- Reddit thread evidence was gathered via web search aggregation, not individual thread reading. Community consensus is well-captured but individual thread nuances may be missing.
- No new stack-frequency.json rows were added this pass (the existing 26 were already strong). Future passes should add specific Awwwards SOTD stack rows.

## Next Steps

1. **Run the starter**: Build a local Next.js app that proves the updated system works end-to-end.
2. **Typography verification**: Test the fluid type scale tokens in a real browser.
3. **Accessibility audit**: Run automated a11y checks (axe-core) against the starter.
4. **Performance benchmark**: Measure actual bundle sizes and CWV scores.
5. **Full transcript pass**: Retry YouTube transcript extraction when IP ban lifts (~4 hours).
