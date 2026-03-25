---
name: ai-feature-shaping
description: 把一个 AI 产品想法整理成问题定义、功能定义、评估方案和风险评审。适用于 roadmap 前的产品定义场景。
type: workflow
best_for:
  - "把 AI 点子整理成可决策方案"
  - "roadmap 前做 AI 功能定义"
  - "组织跨团队 AI 产品讨论"
scenarios:
  - "把一个 AI copilot 想法整理成产品方案"
  - "在立项前先把 AI 功能定义清楚"
estimated_time: "45-90 min"
---

## Purpose / 用途

把一个模糊的 AI 想法整理成能做决策、能进 roadmap 讨论的产品定义。

## Key Concepts / 核心概念

这条 workflow 产出四个核心结果：

1. 问题定义
2. 功能定义
3. 评估方案
4. 风险评审

### First-Principles Check / 第一性原理检查

在进入功能定义前，先避免被现有产品形态或 demo 想象锁死。

至少检查这三件事：

1. 用户真正想完成的任务是什么
2. 当前想法继承了哪些旧交互、旧流程或旧组织约束
3. 如果从零设计，最小可行且可验证的 AI 能力是什么

## Application / 用法

### Phase 1 / 问题定义

- 用 `../problem-statement/SKILL.md`
- 必要时先做 `First-Principles Check`

### Phase 2 / 功能定义

- 用 `../ai-feature-brief/SKILL.md`

### Phase 3 / 评估方案

- 用 `../llm-evaluation-plan/SKILL.md`

### Phase 4 / 风险评审

- 用 `../ai-risk-review/SKILL.md`

### Phase 5 / 建议动作

输出以下之一：

- proceed to PRD
- run an experiment first
- hold until risk is reduced

## Examples / 示例

好：

- 一个同时说明了价值、质量门槛和出错处理方式的 AI 功能定义。

差：

- “加个 AI 助手”这种没有问题、没有评估、没有 fallback 的请求。

## Common Pitfalls / 常见误区

- demo 导向而不是产品导向
- 跳过评估
- 忽略 bad output 时怎么办
- 把现有人工流程原样包一层 AI，当成创新方案

## References / 关联项

- `../problem-statement/SKILL.md`
- `../ai-feature-brief/SKILL.md`
- `../llm-evaluation-plan/SKILL.md`
- `../ai-risk-review/SKILL.md`
