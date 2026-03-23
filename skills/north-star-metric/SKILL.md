---
name: north-star-metric
description: Define a north star metric with guardrails and usage logic. Use when a product team needs one primary outcome metric without losing sight of quality and risk.
type: component
best_for:
  - "Defining a product north star metric"
  - "Clarifying primary outcome versus guardrail metrics"
  - "Aligning teams on what good looks like"
scenarios:
  - "Help me define the north star metric for an AI research assistant"
  - "We have too many KPIs and need one primary outcome"
---

## Purpose

Create a clear north star metric definition that helps a team align on the primary value outcome while protecting against harmful optimization.

## Chinese Summary

- 用途：定义一个真正代表用户价值的核心指标。
- 适用：团队 KPI 太多、方向分散、需要一个主目标时。
- 输出：北极星指标、为什么代表价值、守护指标和复盘方式。

## Key Concepts

### A Good North Star Metric

- captures delivered user value
- can be influenced by product work
- is not easily gamed
- is paired with guardrails

## Application

Use this structure:

```markdown
## North Star Metric

### Primary Metric
[Metric and definition]

### Why It Represents Value
[Why this metric matters]

### Guardrails
- [Quality guardrail]
- [Trust or business guardrail]

### Review Logic
- [How often it is reviewed]
- [Who owns it]
```

## Examples

Good:

- "Weekly accepted AI-generated outputs per active PM" with edit-rate and trust complaints as guardrails.

Bad:

- "Number of prompts sent to the AI."

## Common Pitfalls

- choosing a vanity metric
- skipping guardrails
- defining a metric the team cannot influence

## References

- `../ai-launch-checklist/SKILL.md`
