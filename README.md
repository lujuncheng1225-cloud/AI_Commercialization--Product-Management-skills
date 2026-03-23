# AI Product Management Skills

Battle-tested product management skills for human PMs and AI agents.

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

## Design Principles

- Outcome over output
- Evidence over opinion
- Reusable workflows over one-off prompts
- Coaching over black-box generation
- Clear triggers over vague descriptions

## Status

This is a starter skeleton modeled after skill-driven PM repositories. Extend it by adding new skills under `skills/<skill-name>/SKILL.md`.

