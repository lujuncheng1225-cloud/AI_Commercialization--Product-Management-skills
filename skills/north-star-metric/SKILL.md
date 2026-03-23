---
name: north-star-metric
description: 定义一个北极星指标及其 guardrail。适用于团队需要一个主要结果指标而不是一堆松散 KPI 的场景。
type: component
best_for:
  - "定义北极星指标"
  - "区分主指标和守护指标"
  - "统一团队对价值的理解"
scenarios:
  - "为 AI 研究助手定义北极星指标"
  - "我们 KPI 太多，需要一个主指标"
---

## Purpose / 用途

定义一个真正代表用户价值的核心指标，并补上 guardrails，避免错误优化。

## Key Concepts / 核心概念

好的北极星指标应该：

- 体现用户价值
- 可被产品工作影响
- 不容易被刷
- 配套 guardrails

## Application / 用法

```markdown
## North Star Metric

### Primary Metric
[主指标]

### Why It Represents Value
[为什么代表价值]

### Guardrails
- [守护指标]

### Review Logic
- [如何复盘]
```

## Examples / 示例

好：

- “每周被 PM 接受的 AI 生成输出数”，同时用 edit rate 和信任投诉做 guardrails。

差：

- “用户发送了多少 prompt。”

## Common Pitfalls / 常见误区

- 选 vanity metric
- 没有守护指标
- 团队根本无法影响这个指标

## References / 关联项

- `../ai-launch-checklist/SKILL.md`
