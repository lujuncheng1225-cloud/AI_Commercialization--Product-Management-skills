---
name: improve-trial-to-paid
description: 通过漏斗诊断、定价审视、指标分析和增长实验来提升试用转付费。
argument-hint: "<试用转付费问题>"
uses:
  - conversion-funnel-diagnostic
  - pricing-packaging-brief
  - revenue-metrics-scorecard
  - growth-experiment-design
outputs:
  - 转化诊断
  - 定价/包装假设
  - 指标判断
  - 实验计划
---

# /improve-trial-to-paid

针对试用到付费这段漏斗做收入提升分析。

## Input Contract / 输入协议

建议至少提供：

- 产品和目标用户
- 当前 trial-to-paid 数据
- 关键漏斗阶段
- 套餐和价格结构
- 当前猜测的问题
- 时间范围和资源限制

## Workflow / 流程

1. 用 `conversion-funnel-diagnostic` 找出主要转化掉点。
2. 用 `pricing-packaging-brief` 检查套餐和付费包装是否影响转化。
3. 用 `revenue-metrics-scorecard` 选出主指标和 guardrail。
4. 用 `growth-experiment-design` 设计下一轮实验。

## Checkpoints / 检查点

- 不要把获客问题误判成付费问题。
- 不要同时改 onboarding、价格和升级页。
- 每个实验都要绑定一个决策规则。

## Decision Output / 决策出口

最后必须收敛到以下之一：

- `先改升级路径`
- `先改 trial 激活体验`
- `先做付费转化实验`
- `补数据后再判断`
- `暂缓`

并说明主要证据和下一步动作。

## Sample Output / 样例输出

- `examples/improve-trial-to-paid-sample.md`
