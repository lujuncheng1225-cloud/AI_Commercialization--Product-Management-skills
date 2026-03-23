---
name: experiment-brief
description: 设计一个轻量实验，明确假设、受众、方法、成功标准和决策规则。适用于先验证关键假设再决定是否投入的场景。
type: component
best_for:
  - "快速验证产品假设"
  - "设计 build 前实验"
  - "明确什么信号会改变决策"
scenarios:
  - "验证用户是否想要 AI 自动发布说明"
  - "设计一个 onboarding 引导实验"
---

## Purpose / 用途

把“先试试”变成一个真正可判断去留的实验。

## Key Concepts / 核心概念

每个好实验都应说明：

1. 假设
2. 受众
3. 方法
4. 成功信号
5. 决策规则

## Application / 用法

```markdown
## Experiment Brief

### Hypothesis
[假设]

### Audience
[受众]

### Method
[方法]

### Success Criteria
- [信号]

### Decision Rule
[强、中、弱信号下怎么处理]
```

## Examples / 示例

好：

- “如果 fake door 点击率超过 30%，且有 5 个用户愿意进入 concierge test，就继续做原型。”

差：

- “先测一下看感觉。”

## Common Pitfalls / 常见误区

- 一次测太多假设
- 用 vanity metric
- 没有明确决策规则

## References / 关联项

- `../problem-statement/SKILL.md`
- `../ai-feature-brief/SKILL.md`

