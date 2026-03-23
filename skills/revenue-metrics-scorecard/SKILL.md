---
name: revenue-metrics-scorecard
description: 定义一套包含收入、转化、留存和 guardrail 的商业化指标看板。适用于需要统一业务健康指标口径的场景。
type: component
best_for:
  - "定义商业化指标看板"
  - "统一收入和转化指标"
  - "给 monetization 项目建立指标框架"
scenarios:
  - "为 self-serve SaaS 定义 revenue scorecard"
  - "商业化项目应该盯哪些指标"
---

## Purpose / 用途

用最少但最关键的一组指标来观察商业化健康度，而不是被大量 dashboard 指标淹没。

## Key Concepts / 核心概念

一套好 scorecard 通常包含：

- 一个收入指标
- 一个转化指标
- 一个留存指标
- 一组 guardrails

## Application / 用法

```markdown
## Revenue Metrics Scorecard

### Revenue
- [指标]

### Conversion
- [指标]

### Retention
- [指标]

### Guardrails
- [指标]

### Review Notes
- [解读规则]
```

## Examples / 示例

好：

- “按 cohort 看 expansion MRR，并与 upgrade conversion 和 90-day retention 配套。”

差：

- “把现有 dashboard 里的所有数都列出来。”

## Common Pitfalls / 常见误区

- leading 和 lagging metrics 混着用但不定义
- 指标太多
- 没有 guardrails

## References / 关联项

- `../north-star-metric/SKILL.md`
- `../conversion-funnel-diagnostic/SKILL.md`
- `../commercial-prd/SKILL.md`
