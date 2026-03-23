---
name: revenue-metrics-scorecard
description: Define a commercial scorecard with revenue, conversion, retention, and guardrail metrics. Use when a product team needs a concise business-health view for decisions and reviews.
type: component
best_for:
  - "Building a commercial KPI scorecard"
  - "Defining revenue and conversion metrics"
  - "Aligning teams on business-health measures"
scenarios:
  - "Create a revenue scorecard for our self-serve SaaS product"
  - "What metrics should we track for monetization work?"
---

## Purpose

Create a concise metrics scorecard for commercial product work so teams can review revenue health without drowning in dashboards.

## Chinese Summary

- 用途：定义商业化指标看板的最小集合。
- 适用：收入、转化、留存指标太散，缺少统一口径时。
- 输出：核心商业指标、守护指标、定义和复盘逻辑。

## Key Concepts

### A Good Scorecard Usually Includes

- one revenue metric
- one conversion metric
- one retention metric
- guardrails for quality or trust

## Application

Use this structure:

```markdown
## Revenue Metrics Scorecard

### Revenue
- [Metric]

### Conversion
- [Metric]

### Retention
- [Metric]

### Guardrails
- [Metric]

### Review Notes
- [Interpretation rule]
```

## Examples

Good:

- "Expansion MRR by active workspace cohort" tied with upgrade conversion and 90-day retention.

Bad:

- "Track every dashboard metric that already exists."

## Common Pitfalls

- mixing leading and lagging metrics without definitions
- tracking too many metrics
- leaving guardrails undefined

## References

- `../north-star-metric/SKILL.md`
- `../conversion-funnel-diagnostic/SKILL.md`
- `../commercial-prd/SKILL.md`

