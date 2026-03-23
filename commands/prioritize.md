---
name: prioritize
description: Diagnose prioritization context and recommend a fitting framework with next steps.
argument-hint: "<backlog or decision context>"
uses:
  - workshop-facilitation
  - prioritization-advisor
outputs:
  - Recommended framework
  - Why it fits
  - Implementation guidance
---

# /prioritize

Recommend a prioritization method that matches product stage, team context, and data quality.

## Workflow

1. Use `workshop-facilitation` if the request is vague or overloaded.
2. Run `prioritization-advisor` to gather adaptive context.
3. Return one recommended framework and one fallback option.

## Checkpoints

- Do not recommend a complex framework without enough data.
- Separate strategic tradeoffs from backlog scoring.
- Show when not to use the recommendation.

