---
name: ai-feature-brief
description: 定义一个 AI 功能的用户任务、输入、输出、质量标准和 fallback。适用于把模糊 AI 点子整理成可讨论方案的场景。
type: component
best_for:
  - "定义 AI 功能"
  - "在写完整 PRD 前先把 AI 能力说清楚"
  - "减少模糊的 AI 想法"
scenarios:
  - "定义一个 AI 访谈总结功能"
  - "把 AI copilot 点子整理成产品 brief"
---

## Purpose / 用途

在团队真正投入开发前，先把 AI 功能定义清楚。

## Key Concepts / 核心概念

一个 AI feature brief 至少要说明：

1. 用户要完成什么任务
2. 什么时候触发
3. 输入是什么
4. 输出是什么
5. 什么叫“足够好”
6. 失败模式是什么
7. fallback 怎么处理

## Application / 用法

```markdown
## AI Feature Brief

### User Job
[用户任务]

### Trigger
[触发点]

### Inputs
- [输入]

### Outputs
- [输出]

### Quality Bar
- [什么算好]

### Fallback Behavior
- [低置信度时怎么办]
```

## Examples / 示例

好：

- “把访谈逐字稿总结成 pains、workarounds 和 opportunity themes，并附原文片段。”

差：

- “用 AI 让调研更容易。”

## Common Pitfalls / 常见误区

- 把模型能力当成用户价值
- 没有 fallback
- 没有质量门槛

## References / 关联项

- `template.md`
- `../llm-evaluation-plan/SKILL.md`
- `../ai-risk-review/SKILL.md`
