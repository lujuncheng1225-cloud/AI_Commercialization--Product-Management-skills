# Using PM Skills with Codex

Codex can work directly from the files in this repository.

Chinese companion:

- `Using PM Skills with Codex.zh-CN.md`

## Basic Pattern

Point Codex at a specific skill file and tell it how to operate.

Example:

```text
Using skills/problem-statement/SKILL.md, help me frame the problem of low activation for new users. Ask up to 3 clarifying questions first, then produce the final output in markdown.
```

## Skill Types

- `component`: generates one artifact
- `interactive`: asks adaptive questions and then recommends
- `workflow`: breaks a larger PM task into phases

## Commands

Commands are thin workflow wrappers.

Example:

```text
Run commands/write-prd.md for this request: create a PRD for improving onboarding completion.
```

## Recommended Prompt Pattern

```text
Using skills/<skill-name>/SKILL.md:
1. Ask up to 3 clarifying questions.
2. Follow the skill sections.
3. Show output in markdown.
4. End with assumptions, risks, and next steps.
```

## Troubleshooting

- If output is generic, provide product stage, segment, KPI, timeline, and constraints.
- If the structure drifts, instruct Codex to follow the skill sections exactly.
- If the task is large, run one phase at a time instead of asking for everything in a single pass.
