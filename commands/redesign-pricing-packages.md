---
name: redesign-pricing-packages
description: 通过价值指标、免费层边界、套餐结构、商业指标和 PRD 规划来重做定价与套餐。
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

## Input Contract / 输入协议

建议至少提供：

- 当前套餐结构
- 当前价格
- 用户分群
- 核心交付物和主要使用维度
- 当前免费/付费边界
- 用户升级触发点
- 目标收入或转化指标
- 当前最大商业摩擦
- 限制条件

## Workflow / 流程

1. 用 `pricing-packaging-brief` 定义 value metric、免费层边界、套餐分层和升级触发点。
2. 用 `revenue-metrics-scorecard` 明确改版要影响的核心指标。
3. 用 `conversion-funnel-diagnostic` 识别现有付费漏斗的关键摩擦。
4. 用 `commercial-prd` 形成执行文档。

## Checkpoints / 检查点

- 先定义目标客群，再定义套餐。
- 避免功能分层和价值指标逻辑冲突。
- 免费层边界必须能解释：为什么这些能力免费，为什么那些能力付费。
- 每个付费层都要有清晰升级触发点。
- rollout 前要有 guardrails。

## Decision Output / 决策出口

最后必须收敛到以下之一：

- `进入 pricing PRD`
- `先做小范围价格实验`
- `先重构套餐表达`
- `补数据后再判断`
- `暂缓`

并说明是先做结构改版，还是先做小范围价格实验。

## Sample Output / 样例输出

- `examples/redesign-pricing-packages-sample.md`
