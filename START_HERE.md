# Start Here

This repository is a starter kit for PM skills.

Chinese companion:

- `START_HERE.zh-CN.md`

If you only remember three things:

1. Pick one skill.
2. Give it a real business problem.
3. Ask for clarifying questions before drafting.

## Where to Begin

### I need a PM artifact

Use:

- `skills/problem-statement/SKILL.md`
- `skills/prd-development/SKILL.md`
- `skills/ai-feature-brief/SKILL.md`
- `skills/llm-evaluation-plan/SKILL.md`

### I need help making a decision

Use:

- `skills/prioritization-advisor/SKILL.md`
- `skills/ai-risk-review/SKILL.md`

### I need a structured guided session

Use:

- `skills/workshop-facilitation/SKILL.md`

## Suggested Prompts

```text
Using skills/problem-statement/SKILL.md, frame the problem behind declining trial-to-paid conversion. Ask clarifying questions first, then produce a concise markdown output.
```

```text
Using skills/prd-development/SKILL.md, create a PRD for a team inbox redesign. Follow the skill sections exactly and end with assumptions, risks, and next steps.
```

```text
Run commands/prioritize.md for this request: too many stakeholder requests, no clear scoring model, limited engineering capacity.
```

```text
Run commands/shape-ai-feature.md for this request: build an AI copilot for PMs to turn interview notes into opportunity themes.
```

```text
Run commands/prepare-ai-launch.md for this request: launch an AI writing assistant for PM weekly updates.
```

## Operating Pattern

- Component skills create one artifact well.
- Interactive skills diagnose and recommend.
- Workflow skills orchestrate multi-step PM work.
- Commands chain several skills into one repeatable path.

## Helpful Commands

```bash
bash ./scripts/find-a-skill.sh --list-all
bash ./scripts/find-a-skill.sh --keyword evaluation
bash ./scripts/find-a-command.sh --list-all
python3 ./scripts/generate-catalog.py
```
