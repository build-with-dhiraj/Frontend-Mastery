# Standards Scoring Model

The Dhiraj skeleton uses evidence-gated tiers. A thing becomes part of the base layer only when it is backed by enough source classes and has manageable risk.

## Evidence Points

| Signal | Points |
| --- | ---: |
| Official documentation or maintainer source confirms current capability | 5 |
| Appears in an award/case study with implementation details | 4 |
| Recommended or demonstrated in an expert video transcript | 4 |
| Appears across multiple strong component ecosystems | 3 |
| Discussed repeatedly in credible Reddit/public X practitioner threads | 2 |
| Used in a production product/startup/component showcase | 2 |
| Mentioned once without implementation details | 1 |

## Risk Penalties

| Risk | Penalty |
| --- | ---: |
| Accessibility risk if implemented casually | -3 |
| Mobile performance or scroll behavior risk | -3 |
| Heavy dependency or bundle cost for narrow value | -2 |
| Mostly portfolio/showcase value, weak product value | -2 |
| Trend-dependent aesthetic | -2 |
| Requires specialist asset pipeline | -2 |

## Tier Rules

| Tier | Meaning | Rule |
| --- | --- | --- |
| T0 Foundation | No-brainer base for serious modern frontend work | Score 12+, 3+ source classes, low or managed risk |
| T1 Premium Standard | Common in high-end sites/apps, but context matters | Score 8+, 2+ source classes, clear use/avoid rules |
| T2 Taste Layer | Useful and recurring, but strongly brand-dependent | Score 5+, moderate risk |
| T3 Experimental | Differentiator, not a base default | Narrow use case, high risk, or specialist pipeline |
| Anti-pattern | Do not use by default | Repeated warnings or negative product impact |

## Required Entry Fields

Every standard in `standards/standards.json` must have:

- `id`
- `name`
- `type`
- `tier`
- `score`
- `sourceClasses`
- `evidenceIds`
- `risks`
- `useWhen`
- `avoidWhen`

## Canonical Layering

- `base`: universal Dhiraj defaults.
- `signature`: Dhiraj-specific style and motion identity.
- `optional`: cherry-pick layer for project taste.
- `avoid`: anti-pattern layer.
