# Start Here

This is the main English entry point for the repository.

If you remember only three things:

1. Start with a `command`; use a single `skill` only for narrow tasks.
2. Bring a real business or product problem, not a vague direction.
3. Default to `Clarify -> Decompose -> Produce -> Review`.

## Default Workflow

If you are not sure how to use the library, start with this sequence:

1. `workshop-facilitation`
   Clarify the request, audience, constraints, and missing context.
2. `task-decomposition`
   Break a large task into checkable steps.
3. Target `skill` or `command`
   Produce the artifact, decision, diagnosis, or plan.
4. `review-gates`
   Check whether the output is usable before delivery.

This rhythm is especially useful for:

- Writing PRDs
- Defining AI features
- Diagnosing monetization problems
- Running complex analysis or reviews

If you want to connect this repo to different agents or machines, read:

- `agent/ROUTING.md`
- `agent/OUTPUT_STANDARDS.md`
- `agent/DOMAIN_CONTEXT.md`
- `agent/SPARSE_CONTEXT_POLICY.md`
- `adapters/CODEX.md`
- `adapters/CLAUDE_CODE.md`
- `adapters/CURSOR.md`
- `evals/README.md`
- `private/README.md`

## Where To Start

### I Need A PM Artifact

- `skills/problem-statement/SKILL.md`
- `skills/prd-development/SKILL.md`
- `skills/ai-feature-brief/SKILL.md`
- `skills/pricing-packaging-brief/SKILL.md`
- `skills/revenue-metrics-scorecard/SKILL.md`
- `skills/llm-evaluation-plan/SKILL.md`
- `skills/task-decomposition/SKILL.md`
- `skills/review-gates/SKILL.md`

### I Need A Judgment Or Diagnosis

- `skills/prioritization-advisor/SKILL.md`
- `skills/model-selection-advisor/SKILL.md`
- `skills/ai-risk-review/SKILL.md`
- `skills/conversion-funnel-diagnostic/SKILL.md`
- `skills/retention-levers-review/SKILL.md`

### I Need A Full Workflow

- `commands/write-prd.md`
- `commands/shape-ai-feature.md`
- `commands/prepare-ai-launch.md`
- `commands/commercial-strategy-review.md`
- `commands/commercial-growth-review.md`
- `commands/redesign-pricing-packages.md`
- `commands/write-commercial-prd.md`

## Recommended Usage

```text
Using skills/problem-statement/SKILL.md, help me define why trial-to-paid conversion is declining. Ask clarifying questions first, then return the output in markdown.
```

```text
Using skills/task-decomposition/SKILL.md, help me break "rewrite the onboarding PRD" into checkable steps.
```

```text
Run commands/shape-ai-feature.md for this request: design an AI copilot that turns interview notes into product insights for PM teams.
```

```text
Run commands/write-prd.md for this request: write a PRD for improving self-serve onboarding completion. Decompose first, draft the PRD, then run review gates.
```

```text
Run commands/commercial-growth-review.md for this request: diagnose why activated users are not converting to paid plans.
```

```text
Run commands/commercial-strategy-review.md for this request: review our monetization growth strategy for next quarter.
```

## Repository Structure

- `component`: produces one concrete artifact.
- `interactive`: asks questions before making recommendations.
- `workflow`: handles a multi-stage PM task.
- `command`: chains multiple skills into a reusable workflow.

The recommended pattern is not to pick skills at random:

- Use a `command` first for ambiguous tasks.
- Add `task-decomposition` for large tasks.
- Run `review-gates` before delivery.

## Common Scripts

```bash
bash ./scripts/find-a-skill.sh --list-all
bash ./scripts/find-a-skill.sh --keyword pricing
bash ./scripts/find-a-command.sh --list-all
python3 ./scripts/validate-library.py
python3 ./scripts/check-style-consistency.py
python3 ./scripts/generate-catalog.py
```
