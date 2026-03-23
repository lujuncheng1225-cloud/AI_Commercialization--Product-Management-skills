---
name: model-selection-advisor
description: Choose a model strategy based on task shape, latency, cost, reliability, and risk tolerance. Use when an AI feature needs a practical model choice or routing approach.
type: interactive
best_for:
  - "Choosing a model for a product feature"
  - "Balancing quality, latency, and cost"
  - "Deciding whether routing or fallback is needed"
scenarios:
  - "Help me choose a model for AI meeting note summaries"
  - "Do we need one model or a routed strategy for PM workflows?"
---

## Purpose

Recommend a model selection strategy that fits the product context instead of choosing based on hype, benchmark screenshots, or one-off demos.

## Chinese Summary

- 用途：根据任务、时延、成本和风险来选模型策略。
- 适用：不知道该用单模型、路由还是带 fallback 的组合时。
- 输出：推荐策略、原因、运营约束和下一步验证事项。

## Key Concepts

### Model Choice Depends On

- task complexity
- latency tolerance
- budget
- quality bar
- risk if the output is wrong

## Application

Ask up to 5 short questions:

1. What job is the model doing?
2. How wrong can the output be before it causes harm?
3. What latency is acceptable?
4. What cost constraints matter?
5. Do you need a single model or routing with fallback?

Then output:

```markdown
## Model Strategy Recommendation

### Recommended Approach
[Single model, routed stack, fallback path, or hybrid]

### Why It Fits
- [Reason]
- [Reason]

### Operational Notes
- [Latency]
- [Cost]
- [Reliability]

### What To Validate Next
- [Open question]
```

## Examples

Good:

- "Use a stronger primary model for synthesis, but route short classification tasks to a faster cheaper model."

Bad:

- "Use the biggest model available for everything."

## Common Pitfalls

- optimizing only for demo quality
- ignoring cost at scale
- forgetting fallback behavior

## References

- `../llm-evaluation-plan/SKILL.md`
- `../ai-feature-brief/SKILL.md`
