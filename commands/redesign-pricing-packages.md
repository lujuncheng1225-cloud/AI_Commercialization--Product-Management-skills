---
name: redesign-pricing-packages
description: 通过价值指标、套餐结构、商业指标和 PRD 规划来重做定价与套餐。
argument-hint: "<定价或套餐改版任务>"
uses:
  - pricing-packaging-brief
  - revenue-metrics-scorecard
  - conversion-funnel-diagnostic
  - commercial-prd
outputs:
  - 定价与套餐方案
  - 指标影响假设
  - 商业化 PRD
---

# /redesign-pricing-packages

为定价和套餐改版生成完整方案。

## Workflow / 流程

1. 用 `pricing-packaging-brief` 定义新的分层与价值指标。
2. 用 `revenue-metrics-scorecard` 明确改版要影响的核心指标。
3. 用 `conversion-funnel-diagnostic` 识别现有付费漏斗的关键摩擦。
4. 用 `commercial-prd` 形成执行文档。

## Checkpoints / 检查点

- 先定义目标客群，再定义套餐。
- 避免功能分层和价值指标逻辑冲突。
- rollout 前要有 guardrails。

