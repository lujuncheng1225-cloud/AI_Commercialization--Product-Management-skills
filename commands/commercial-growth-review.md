---
name: commercial-growth-review
description: 通过漏斗诊断、留存分析、指标审视和增长实验来审查商业化问题。
argument-hint: "<商业化问题或增长问题>"
uses:
  - conversion-funnel-diagnostic
  - retention-levers-review
  - revenue-metrics-scorecard
  - growth-experiment-design
outputs:
  - 漏斗诊断
  - 留存评审
  - 商业指标视图
  - 实验建议
---

# /commercial-growth-review

用增长和商业化视角审视一个产品问题。

## Workflow / 流程

1. 用 `conversion-funnel-diagnostic` 找出主要掉点。
2. 如果问题发生在激活之后，用 `retention-levers-review` 看留存。
3. 用 `revenue-metrics-scorecard` 把诊断锚定到商业指标上。
4. 用 `growth-experiment-design` 产出下一步实验。

## Checkpoints / 检查点

- 区分获客问题和留存问题。
- 每个实验只绑定一个主指标和一个决策。
- 不要同时改价格、onboarding 和文案。
