# Building PM Skills

Use this repository to encode repeatable PM thinking into reusable skill files.

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

## Quality Bar

- Use clear triggers
- Include anti-patterns
- Prefer concrete examples
- Teach the why, not just the format
- Keep workflows executable

