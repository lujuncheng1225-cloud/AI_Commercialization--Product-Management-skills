---
name: analyze-paid-retention
description: 通过留存分析、收入指标和增长实验来审视付费留存与复购问题。
argument-hint: "<付费留存问题>"
uses:
  - retention-levers-review
  - revenue-metrics-scorecard
  - voice-of-customer-synthesis
  - growth-experiment-design
outputs:
  - 留存诊断
  - VOC 线索
  - 商业指标判断
  - 干预实验
---

# /analyze-paid-retention

针对付费用户留存、复购和扩容问题做分析。

## Input Contract / 输入协议

建议至少提供：

- 付费用户分群
- 复购或续费数据
- 主要流失节点
- 用户反馈线索
- 当前希望提升的收入相关指标

## Workflow / 流程

1. 用 `retention-levers-review` 看重复价值和流失模式。
2. 用 `revenue-metrics-scorecard` 看收入和留存指标的联动。
3. 用 `voice-of-customer-synthesis` 整理用户反馈和流失线索。
4. 用 `growth-experiment-design` 设计干预动作。

## Checkpoints / 检查点

- 先确认核心价值是否重复发生。
- 区分续费问题和使用深度问题。
- 实验要优先针对高价值分群。

## Decision Output / 决策出口

最后必须收敛到以下之一：

- `先修 repeat value`
- `先做召回或复购实验`
- `补分群和行为数据后再判断`
- `暂缓`

并说明是先修 repeat value，还是先做召回和复购干预。

## Sample Output / 样例输出

- `examples/analyze-paid-retention-sample.md`
