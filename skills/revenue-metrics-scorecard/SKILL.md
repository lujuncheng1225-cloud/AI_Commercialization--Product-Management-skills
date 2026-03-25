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

### Decision Hierarchy / 决策层级

scorecard 不是“把指标列全”，而是定义：

1. 哪个指标最能代表当前商业目标
2. 哪些指标是解释主指标变化的中间信号
3. 哪些指标只用来防止副作用

默认应区分：

- `Primary metric`
- `Diagnostic metrics`
- `Guardrails`

### Interpretation Rule / 解读规则

如果主指标改善，但 guardrail 明显恶化，不应简单判定项目成功。

如果主指标没有改善，但诊断指标显著改善，也不应立刻判定方案失败，应看：

- 当前阶段是在验证路径还是验证最终结果
- 指标之间是否本来就存在时间滞后

### Disconfirming Checks / 反证检查

在定义 scorecard 时，先防止三种常见误判：

- 把结果指标和过程指标混在一起，最后谁都不能决策
- 选一个容易涨但不代表真实商业价值的指标
- 用过多指标掩盖“其实没有主判断”的问题

## Application / 用法

```markdown
## Revenue Metrics Scorecard

### Primary Metric
- [最主要的商业结果指标]

### Revenue
- [指标]

### Conversion
- [指标]

### Retention
- [指标]

### Diagnostic Metrics
- [解释主指标变化的关键诊断指标]

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
- 没有 primary metric，最后所有指标都很重要
- 主指标涨了就庆祝，却没看副作用是否吞掉长期价值
- 选了 dashboard 上最顺手的指标，而不是最能改变决策的指标

## References / 关联项

- `template.md`
- `../north-star-metric/SKILL.md`
- `../conversion-funnel-diagnostic/SKILL.md`
- `../commercial-prd/SKILL.md`
