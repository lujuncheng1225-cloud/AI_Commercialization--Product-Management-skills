---
name: llm-evaluation-plan
description: 为 AI 功能定义离线与线上评估方案，包括样本、指标和阻断阈值。适用于上线前需要明确质量标准的场景。
type: component
best_for:
  - "为 AI 功能设计评估方案"
  - "把主观质量讨论变成可测方案"
  - "定义 LLM 功能上线门槛"
scenarios:
  - "为 AI 会议纪要做评估方案"
  - "怎么评估 AI 支持助手的质量"
---

## Purpose / 用途

用一套可执行的评估方案，把“这个 AI 好不好”从感觉题变成证据题。

## Key Concepts / 核心概念

- Offline evaluation：上线前用代表性样本测
- Online evaluation：上线后看真实行为和纠错信号

常见维度：

- 准确性
- 完整性
- groundedness
- latency
- 用户接受度
- 出错恢复能力

## Application / 用法

```markdown
## Evaluation Plan

### Feature
[功能]

### Offline Test Set
- [样本场景]

### Metrics
- [指标]

### Failure Thresholds
- [什么情况不能上线]

### Online Signals
- [线上信号]
```

## Examples / 示例

好：

- “抽 50 份代表性会议记录，评估 action-item 抽取准确率、幻觉率和最终 edit rate。”

差：

- “找几个人试一下感觉好不好。”

## Common Pitfalls / 常见误区

- 用玩具样本评估
- 只看速度不看 usefulness
- 没有 blocking threshold

## References / 关联项

- `../ai-feature-brief/SKILL.md`
- `../ai-risk-review/SKILL.md`

