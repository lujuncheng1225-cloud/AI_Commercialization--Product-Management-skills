---
name: write-commercial-prd
description: 通过漏斗诊断、定价逻辑、指标和 rollout 规划来生成商业化 PRD。
argument-hint: "<商业化项目>"
uses:
  - conversion-funnel-diagnostic
  - pricing-packaging-brief
  - revenue-metrics-scorecard
  - commercial-prd
outputs:
  - 商业化 PRD
  - baseline 和 target 指标
  - 定价或转化假设
---

# /write-commercial-prd

为商业化、转化、onboarding 或套餐改版类项目生成 PRD。

## Input Contract / 输入协议

建议至少提供：

- 商业化目标
- 当前指标 baseline
- 目标分群
- 当前套餐/漏斗情况
- 主要商业问题
- 时间范围和 rollout 约束

## Workflow / 流程

1. 用 `conversion-funnel-diagnostic` 定义商业问题。
2. 涉及定价或套餐时，用 `pricing-packaging-brief`。
3. 用 `revenue-metrics-scorecard` 定义 baseline 和 target。
4. 用 `commercial-prd` 生成完整 PRD。

## Checkpoints / 检查点

- 明确具体漏斗阶段或收入问题。
- PRD 必须绑定 baseline 和 target。
- 写清 rollout 风险和 guardrail。

## Decision Output / 决策出口

最后必须收敛到以下之一：

- `继续推进到 PRD`
- `先做实验`
- `补数据后再判断`
- `暂缓`

并说明为什么现在适合直接立 PRD，还是应该先做实验。

## Sample Output / 样例输出

- `examples/write-commercial-prd-sample.md`
