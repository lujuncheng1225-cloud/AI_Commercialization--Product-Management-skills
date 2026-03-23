# AI Product Management Skills

Reusable PM skills for human product managers and AI agents.

Chinese docs:

- `README.zh-CN.md`
- `START_HERE.zh-CN.md`
- `docs/Using PM Skills with Codex.zh-CN.md`

This repo covers two lanes:

- `AI PM`: feature shaping, evaluation, launch, model strategy
- `Commercial PM`: pricing, funnel, retention, revenue, growth

Core structure:

- `skills/` contains reusable PM skills
- `commands/` contains multi-skill workflows
- `docs/` contains onboarding and operating guides
- `scripts/` contains lightweight discovery helpers
- `catalog/` is reserved for generated indexes

## Featured Skills

- `problem-statement` - component skill for framing a customer or business problem
- `prd-development` - workflow skill for building a PRD from context to requirements
- `ai-feature-brief` - component skill for defining an AI feature clearly
- `llm-evaluation-plan` - component skill for AI quality planning
- `pricing-packaging-brief` - component skill for monetization design
- `conversion-funnel-diagnostic` - component skill for finding funnel leaks
- `growth-experiment-design` - component skill for growth tests
- `retention-levers-review` - component skill for retention analysis
- `revenue-metrics-scorecard` - component skill for commercial health metrics

## First Run

Read `START_HERE.md`, then try one of these:

```text
Using skills/problem-statement/SKILL.md, help me frame the problem of low activation for new B2B users. Ask up to 3 clarifying questions first.
```

```text
Using skills/prioritization-advisor/SKILL.md, help me choose a prioritization framework for 20 roadmap requests and one quarter of capacity.
```

```text
Run commands/write-prd.md for this request: onboarding redesign for first-time AI product managers.
```

```text
Run commands/shape-ai-feature.md for this request: AI meeting notes that extract action items and decision summaries for product teams.
```

```text
Run commands/prepare-ai-launch.md for this request: launch an AI writing assistant for PM weekly updates.
```

```text
Run commands/commercial-growth-review.md for this request: diagnose trial-to-paid drop-off in our self-serve SaaS funnel.
```

```text
Run commands/write-commercial-prd.md for this request: redesign upgrade flow and plan packaging for our pro tier.
```

## Principles

- Outcome over output
- Evidence over opinion
- Reusable workflows over one-off prompts
- Clear triggers over vague descriptions

Generate indexes with:

```bash
python3 scripts/generate-catalog.py
```
