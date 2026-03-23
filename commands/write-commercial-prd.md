---
name: write-commercial-prd
description: Create a commercial PRD by chaining funnel diagnosis, pricing logic, metrics, and rollout planning.
argument-hint: "<commercial initiative>"
uses:
  - conversion-funnel-diagnostic
  - pricing-packaging-brief
  - revenue-metrics-scorecard
  - commercial-prd
outputs:
  - Commercial PRD
  - Baseline and target metrics
  - Pricing or conversion assumptions
---

# /write-commercial-prd

Generate a PRD for a monetization, conversion, onboarding, or packaging initiative.

## Workflow

1. Use `conversion-funnel-diagnostic` to define the main commercial problem.
2. Use `pricing-packaging-brief` if monetization structure is involved.
3. Use `revenue-metrics-scorecard` to define baseline and target metrics.
4. Use `commercial-prd` to write the full document.

## Checkpoints

- Name the exact funnel stage or revenue problem.
- Tie the PRD to baseline and target metrics.
- Include rollout risks and guardrails.

