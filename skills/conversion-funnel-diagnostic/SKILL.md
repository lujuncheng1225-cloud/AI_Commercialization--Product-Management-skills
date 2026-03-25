---
name: conversion-funnel-diagnostic
description: 诊断转化漏斗的阶段、掉点、可能原因和下一步核查方向。适用于获客、激活或付费转化出问题的场景。
type: component
best_for:
  - "诊断转化掉点"
  - "找出漏斗里最主要的 leak"
  - "把漏斗数据转成可验证假设"
scenarios:
  - "用户激活了但没转付费，问题在哪"
  - "帮我诊断 onboarding funnel 掉点"
---

## Purpose / 用途

在盲目改漏斗之前，先结构化找出主要流失点和最可能的原因。

## Key Concepts / 核心概念

漏斗诊断要区分：

- 漏在哪里
- 是流量质量、产品问题、定价问题还是信息传达问题
- 还缺什么证据

### Causal Discipline / 因果纪律

漏斗掉点不是原因，最多只是“异常发生的位置”。

在下判断前，至少区分：

1. 这是量的问题还是质的问题
2. 这是进入该阶段的人不对，还是阶段体验本身有问题
3. 这是感知价值不足，还是支付摩擦、信任摩擦或定价结构问题

### Disconfirming Checks / 反证检查

在把问题归因到某一层之前，先找最可能推翻它的证据：

- 如果怀疑流量质量差，先看高意图分群是否也同样掉
- 如果怀疑 onboarding 差，先看到达价值时刻的人是否仍不转化
- 如果怀疑定价有问题，先看用户是否真正感知到价值和 upgrade trigger

## Application / 用法

```markdown
## Funnel Diagnostic

### Funnel Stages
- [阶段]

### Largest Drop-Off
[最大掉点]

### Likely Causes
- [原因]

### Best Alternative Explanation
- [最强备选解释]

### Evidence Needed Next
- [下一步要看的数据或研究]
```

## Examples / 示例

好：

- “主要漏点发生在价值时刻之后到 upgrade prompt 之前，更像感知价值或套餐设计问题，而不是流量质量问题。”

差：

- “转化低，所以营销不行。”

## Common Pitfalls / 常见误区

- 把所有漏斗问题都归到 onboarding
- 不看分群
- 还没定位 leak 就开始设计实验
- 把阶段位置直接当成根因
- 只找支持自己判断的证据，不找反证

## References / 关联项

- `../growth-experiment-design/SKILL.md`
- `../revenue-metrics-scorecard/SKILL.md`
