# Dhiraj Frontend Standards Corpus And Skeleton Kit

This workspace is an evidence-gated standards system for building Dhiraj-branded, high-end websites and web apps with coding agents such as Cursor, Antigravity, and Codex.

The goal is not to clone React Bits, 21st.dev, Magic UI, Aceternity, or Awwwards. Those sources already provide inspiration and components. This kit answers a different question:

> Which packages, components, states, and motion behaviors recur often enough across respected sources that they should become Dhiraj's default base layer?

## Current Shape

- [sources/source-registry.md](sources/source-registry.md) - source scope, transcript policy, and processed/candidate source list.
- [sources/sources.json](sources/sources.json) - machine-readable source registry.
- [evidence/evidence.json](evidence/evidence.json) - extracted claims, source links, confidence, and risk.
- [evidence/research-log.md](evidence/research-log.md) - live research notes and transcript attempts.
- [evidence/stack-frequency.json](evidence/stack-frequency.json) - 25-row public stack-frequency table.
- [evidence/community-signals.md](evidence/community-signals.md) - Reddit/community adoption and warning signals.
- [evidence/youtube-transcript-pass.md](evidence/youtube-transcript-pass.md) - transcript pass summary.
- [standards/scoring-model.md](standards/scoring-model.md) - evidence scoring and tier rules.
- [standards/standards.json](standards/standards.json) - scored standards catalog.
- [standards/standards.md](standards/standards.md) - human-readable standard decisions.
- [skeleton/README.md](skeleton/README.md) - how to use the Dhiraj agent pack.
- [skeleton/default-stack.json](skeleton/default-stack.json) - evidence-derived package stack.
- [skeleton/component-specs.json](skeleton/component-specs.json) - canonical component and interaction specs.
- [skeleton/motion-specs.json](skeleton/motion-specs.json) - canonical Dhiraj motion rules.
- [skeleton/prompts.md](skeleton/prompts.md) - prompts for coding agents.
- [skeleton/DHIRAJ_AGENT_INSTRUCTIONS.md](skeleton/DHIRAJ_AGENT_INSTRUCTIONS.md) - single copy-paste instruction pack for agents.
- [skeleton/reference-implementation](skeleton/reference-implementation) - ready-to-adapt React/Tailwind components.
- [starter](starter) - runnable local Next.js proof of the Dhiraj starter.
- [scripts/validate-corpus.js](scripts/validate-corpus.js) - consistency checks for evidence, standards, components, and motion.

## Operating Rules

- One canonical component per interaction. Variants live inside the same component spec.
- No full third-party transcripts are stored here. Only transcript status, short notes, extracted claims, and timestamps are stored.
- The default stack is selected by evidence score, not preference.
- Universal standards and Dhiraj signature behaviors are separate layers.
- X/Twitter evidence is public/provided-only until a logged-in read-only pass is available.

## Validate

Run:

```bash
node scripts/validate-corpus.js
```

The validator checks that standards have evidence, components do not duplicate interaction IDs, component states are present, motion specs include duration/easing/reduced-motion behavior, and package defaults cite scored standards.
