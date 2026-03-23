# AI Product Management Skills

Battle-tested product management skills for human PMs and AI agents.

Chinese docs:

- `README.zh-CN.md`
- `START_HERE.zh-CN.md`
- `docs/Using PM Skills with Codex.zh-CN.md`

This repository is designed to do two things at once:

1. Help you produce stronger PM outputs with reusable skill files.
2. Help you learn the reasoning behind the frameworks, not just generate artifacts.

The structure is intentionally simple:

- `skills/` contains reusable PM skills
- `commands/` contains multi-skill workflows
- `docs/` contains onboarding and operating guides
- `scripts/` contains lightweight discovery helpers
- `catalog/` is reserved for generated indexes

## Starter Skills

- `problem-statement` - component skill for framing a customer or business problem
- `prioritization-advisor` - interactive skill for choosing a prioritization approach
- `prd-development` - workflow skill for building a PRD from context to requirements
- `workshop-facilitation` - interaction protocol for guided PM sessions
- `ai-feature-brief` - component skill for defining an AI feature clearly
- `llm-evaluation-plan` - component skill for planning offline and online evaluation
- `experiment-brief` - component skill for designing quick validation experiments
- `ai-risk-review` - component skill for reviewing AI-specific product risks
- `ai-feature-shaping` - workflow skill for shaping an AI initiative end to end
- `north-star-metric` - component skill for defining one core outcome metric and guardrails
- `voice-of-customer-synthesis` - component skill for turning raw user inputs into themes
- `agent-workflow-brief` - component skill for defining an agentic workflow with boundaries
- `model-selection-advisor` - interactive skill for choosing a model strategy
- `ai-launch-checklist` - component skill for pre-launch readiness review

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

## Design Principles

- Outcome over output
- Evidence over opinion
- Reusable workflows over one-off prompts
- Coaching over black-box generation
- Clear triggers over vague descriptions

## Status

This is a starter skeleton modeled after skill-driven PM repositories. Extend it by adding new skills under `skills/<skill-name>/SKILL.md`.

Generate indexes with:

```bash
python3 scripts/generate-catalog.py
```
