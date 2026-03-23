---
name: commercial-strategy-review
description: 通过指标、漏斗、定价、留存和实验设计来完成一次完整的商业化策略评审。
argument-hint: "<商业化策略评审任务>"
uses:
  - revenue-metrics-scorecard
  - conversion-funnel-diagnostic
  - pricing-packaging-brief
  - retention-levers-review
  - growth-experiment-design
  - commercial-prd
outputs:
  - 商业化诊断
  - 核心策略判断
  - 实验优先级
  - 执行文档方向
---

# /commercial-strategy-review

用统一流程完成一次商业化策略评审，并把结果收敛成明确决策。

## Input Contract / 输入协议

建议至少提供：

- 产品是什么
- 目标用户是谁
- 当前商业模式
- 当前关键指标
- 主要想提升的收入目标
- 已知问题或疑问
- 时间范围
- 资源和限制

## Workflow / 流程

### Phase 1 / 业务现状

1. 用 `revenue-metrics-scorecard` 明确核心商业指标。

### Phase 2 / 主要漏点

2. 用 `conversion-funnel-diagnostic` 判断主要收入摩擦在哪段漏斗。

### Phase 3 / 商业模式与套餐

3. 用 `pricing-packaging-brief` 评估当前价格和套餐表达。

### Phase 4 / 留存与复购

4. 用 `retention-levers-review` 判断收入问题是否受留存影响。

### Phase 5 / 动作方案

5. 用 `growth-experiment-design` 排出优先实验。
6. 如果需要执行化，用 `commercial-prd` 形成后续文档。

## Checkpoints / 检查点

- 先定位收入问题，再讨论增长动作。
- 不要同时更改太多商业变量。
- 每个建议都要绑定到一个指标和一个决策。

## Decision Output / 决策出口

最后必须收敛到以下之一：

- `继续推进到 PRD`
- `先做实验`
- `补数据后再判断`
- `暂缓`

并说明：

- 为什么是这个结论
- 最关键的一条证据
- 下一步 1-2 周该做什么

## Sample Output / 样例输出

- `examples/commercial-strategy-review-sample.md`

