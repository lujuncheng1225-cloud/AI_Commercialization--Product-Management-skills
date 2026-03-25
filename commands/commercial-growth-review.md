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

## Input Contract / 输入协议

建议至少提供：

- 产品和商业模式
- 当前关键收入指标
- 主要增长问题
- 已知漏斗数据
- 当前价格或套餐
- 时间范围和限制

## Workflow / 流程

1. 用 `conversion-funnel-diagnostic` 找出主要掉点。
2. 如果问题发生在激活之后，用 `retention-levers-review` 看留存。
3. 用 `revenue-metrics-scorecard` 把诊断锚定到商业指标上。
4. 用 `growth-experiment-design` 产出下一步实验。

## Advanced Review Rules / 进阶评审规则

### One-Core-Problem Rule / 单核心问题规则

每轮评审优先收敛一个主问题，不要同时把获客、激活、定价、留存都当成同等优先级。

### Disconfirm-Your-Story Rule / 反证你的故事

当你形成初步解释后，必须补一句：

- 什么证据会推翻这个解释
- 哪个最强替代解释目前也成立

### Cheapest-Sharpest-Next-Step / 最便宜但最锋利的下一步

下一步动作优先满足：

- 能最快区分两个主要解释
- 能影响下一次资源分配
- 不要求同时改太多变量

## Checkpoints / 检查点

- 区分获客问题和留存问题。
- 每个实验只绑定一个主指标和一个决策。
- 不要同时改价格、onboarding 和文案。

## Decision Output / 决策出口

最后必须收敛到以下之一：

- `优先修漏斗转化`
- `优先修留存与复购`
- `先做增长实验`
- `补数据后再判断`
- `暂缓`

并说明主要依据和下一步。

如果选择 `补数据后再判断`，必须明确：

- 缺的不是泛数据，而是哪一个关键判别证据
- 这条证据会改变哪一个决策

## Sample Output / 样例输出

- `examples/commercial-growth-review-sample.md`
