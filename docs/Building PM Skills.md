# Building PM Skills

Use this repository to encode repeatable PM thinking into reusable skill files.

Chinese quick template:

- `PM Skills Template CN.md`

## Skill Anatomy

Each skill should contain:

1. Trigger-oriented frontmatter
2. Purpose
3. Key Concepts
4. Application
5. Examples
6. Common Pitfalls
7. References

## Metadata Standard

At minimum:

```yaml
---
name: skill-name
description: What the skill does and when to use it.
type: component
best_for:
  - "Specific use case"
scenarios:
  - "Real example request"
---
```

## Skill Types

### Component

Use for one artifact or framework output.

Examples:

- problem statement
- user story
- positioning statement

### Interactive

Use for diagnosis, choice, or coaching.

Examples:

- prioritization advisor
- framework selector
- readiness assessment

### Workflow

Use for multi-phase PM work.

Examples:

- PRD development
- roadmap planning
- discovery process
- AI feature shaping

## AI PM Additions

For AI product work, the base PM structure usually needs a few extra sections:

- input and output definition
- quality bar and failure modes
- fallback behavior
- human-in-the-loop decisions
- evaluation before launch
- safety, trust, and misuse risks

If the feature relies on an LLM or another probabilistic system, build these into the skill instead of treating them as afterthoughts.

## Quality Bar

- Use clear triggers
- Include anti-patterns
- Prefer concrete examples
- Teach the why, not just the format
- Keep workflows executable

## Suggested Expansion Order

1. Add more component skills before adding more workflows.
2. Add one command only after at least two related skills exist.
3. Add a reference file only when the core `SKILL.md` becomes crowded.
