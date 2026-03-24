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

## Input Contract / 输入协议

建议至少提供：

- 产品阶段
- 待排序对象
- 团队结构
- 数据基础
- 当前决策冲突点

## Workflow / 流程

1. 如果需求很模糊，先用 `workshop-facilitation`。
2. 用 `prioritization-advisor` 收集上下文。
3. 返回一个主推荐框架和一个备选框架。

## Checkpoints / 检查点

- 数据不足时不要推荐复杂框架。
- 区分战略取舍和 backlog 打分。
- 说明什么时候不该用这个推荐。

## Decision Output / 决策出口

最后必须收敛到以下之一：

- `采用主推荐框架立即排序`
- `先补最小必要数据再排序`
- `先拆分候选项再排序`
- `改用战略评审而不是打分`

并把这一步翻译成具体的优先级实施动作。

## Sample Output / 样例输出

- `examples/prioritize-sample.md`
