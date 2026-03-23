---
name: prepare-ai-launch
description: Prepare an AI feature for launch by chaining evaluation planning, risk review, and launch checklist work.
argument-hint: "<AI feature or launch candidate>"
uses:
  - llm-evaluation-plan
  - ai-risk-review
  - ai-launch-checklist
outputs:
  - Evaluation plan
  - Risk review
  - Launch checklist
  - Go/no-go questions
---

# /prepare-ai-launch

Prepare an AI feature for a more disciplined launch review.

## Workflow

1. Define or refine evaluation coverage with `llm-evaluation-plan`.
2. Review quality, trust, and misuse risks with `ai-risk-review`.
3. Review operational readiness with `ai-launch-checklist`.
4. End with a go, no-go, or launch-with-guards recommendation.

## Checkpoints

- Blocking risks should be called out explicitly.
- Low-confidence behavior needs a recovery path.
- Monitoring should exist before broad rollout.

