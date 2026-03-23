---
name: prioritization-advisor
description: Choose a prioritization framework based on product stage, team context, and data quality. Use when deciding between RICE, ICE, value-effort, weighted scoring, or a simpler alternative.
type: interactive
best_for:
  - "Choosing a prioritization framework"
  - "Reducing debate about backlog or roadmap decisions"
  - "Matching a scoring model to the team's maturity"
scenarios:
  - "We have too many requests and no consistent way to rank them"
  - "Help me choose between RICE and value-effort"
---

## Purpose

Recommend a prioritization approach that fits the current context instead of applying one framework by default.

## Key Concepts

### Framework Fit Matters

- RICE works best when you have usable data
- ICE works when you need a lighter-weight heuristic
- Value-effort works when tradeoffs need to be visual and fast
- Weighted scoring works when multiple stakeholders need transparent criteria

### Anti-Patterns

- Treating one framework as universally correct
- Using precision theater when the inputs are weak
- Confusing strategy selection with backlog ordering

## Application

Ask up to 4 short questions:

1. What stage is the product in?
2. What is the team or stakeholder context?
3. What is the main prioritization problem?
4. How much data is available?

Then output:

```markdown
# Prioritization Recommendation

## Recommended Framework
[Framework]

## Why It Fits
- [Reason 1]
- [Reason 2]
- [Reason 3]

## When Not To Use It
- [Limitation]

## How To Implement
1. [Step]
2. [Step]
3. [Step]

## Fallback Option
[Alternative framework and why]
```

## Examples

Good recommendation pattern:

- "Use value-effort for the next planning cycle because your data is limited, stakeholders need visibility, and the team needs a simple tradeoff tool now."

Bad recommendation pattern:

- "Use RICE because serious product teams use RICE."

## Common Pitfalls

- Overfitting to one executive preference
- Recommending data-heavy models without reliable inputs
- Returning a framework name without implementation advice

## References

- `../workshop-facilitation/SKILL.md`

