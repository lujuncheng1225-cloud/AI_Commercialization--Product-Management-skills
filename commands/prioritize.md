---
name: prioritize
description: 诊断优先级上下文并推荐合适框架与下一步动作。
argument-hint: "<backlog 或决策背景>"
uses:
  - workshop-facilitation
  - prioritization-advisor
outputs:
  - 推荐框架
  - 适配原因
  - 落地建议
---

# /prioritize

推荐一个和产品阶段、团队环境、数据质量匹配的优先级方法。

## Workflow / 流程

1. 如果需求很模糊，先用 `workshop-facilitation`。
2. 用 `prioritization-advisor` 收集上下文。
3. 返回一个主推荐框架和一个备选框架。

## Checkpoints / 检查点

- 数据不足时不要推荐复杂框架。
- 区分战略取舍和 backlog 打分。
- 说明什么时候不该用这个推荐。
