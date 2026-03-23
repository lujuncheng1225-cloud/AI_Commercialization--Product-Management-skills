# AGENTS.md

This repo stores PM skills for both humans and coding agents.

## Operating Philosophy

- Do not optimize away the teaching value.
- Ask clarifying questions when context is thin.
- Use examples and anti-patterns, not generic filler.
- Prefer reusable structures over task-specific prose.
- Keep skill metadata sharp so the right skill triggers at the right time.

## Repo Conventions

- Every skill lives at `skills/<skill-name>/SKILL.md`
- Use YAML frontmatter with at least `name` and `description`
- Keep descriptions trigger-oriented: what the skill does and when to use it
- Cross-reference other skills by relative path when chaining workflows
- Keep bundled detail in `template.md`, `references/`, or `scripts/` only when needed

## Editing Guidance

- Favor concise, specific wording
- Preserve the distinction between component, interactive, and workflow skills
- Do not add filler docs inside skill directories
- When adding commands, keep them as thin orchestrators over skills

