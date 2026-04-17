# Using PM Skills With Codex

Codex can read this repository directly and follow the skill and command files.

If you want Codex to behave like a portable PM agent instead of reading one file and improvising, start with:

- `AGENTS.md`
- `agent/ROUTING.md`
- `agent/OUTPUT_STANDARDS.md`
- `agent/DOMAIN_CONTEXT.md`
- `agent/SPARSE_CONTEXT_POLICY.md`
- `adapters/CODEX.md`
- `evals/README.md`
- `private/README.md`

## Basic Pattern

Point Codex to one skill or command file, then describe the task and output rules.

Example:

```text
Using skills/problem-statement/SKILL.md, help me define why new-user activation is low. Ask up to 3 clarifying questions first, then return the final output in markdown.
```

## Skill Types

- `component`: produces one artifact.
- `interactive`: asks questions before making a recommendation.
- `workflow`: completes a multi-stage PM task.

## Command Workflows

When you do not want to call skills one by one, run a command file:

```text
Run commands/write-prd.md for this request: write a PRD for improving onboarding completion.
```

For monetization work, start with one of these:

- `commands/commercial-growth-review.md`
- `commands/commercial-strategy-review.md`
- `commands/redesign-pricing-packages.md`
- `commands/write-commercial-prd.md`

## Recommended Prompt Shape

```text
Using skills/<skill-name>/SKILL.md:
1. Ask up to 3 clarifying questions.
2. Follow the skill sections.
3. Show output in markdown.
4. End with assumptions, risks, and next steps.
```

For a larger request:

```text
Run commands/<command-name>.md for this request:
<Describe the product, user, goal, data, constraints, and required output.>
```

## Troubleshooting

- If the output is too generic, add product stage, user segment, KPI, timeframe, and constraints.
- If the structure drifts, ask Codex to follow the sections in the skill file exactly.
- If the task is too large, run one stage first instead of asking for everything in one pass.
- If business context is sensitive, put reusable context in `private/` and provide only the minimum needed for the current task.
