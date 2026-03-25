---
name: prd-development
description: 构建一份从问题、用户、方案到成功指标和范围边界都清楚的 PRD。适用于把零散背景整理成工程团队可执行文档的场景。
type: workflow
best_for:
  - "从零写完整 PRD"
  - "把调研结果整理成文档"
  - "对齐产品、设计、工程"
scenarios:
  - "我要为 onboarding 改版写一份 PRD"
  - "我有很多 discovery 笔记，需要整理成 PRD"
estimated_time: "60-120 min"
---

## Purpose / 用途

把问题定义、用户、方案、成功指标和范围边界整理成一份可执行 PRD。

## Key Concepts / 核心概念

一份强 PRD 通常包含：

1. Executive Summary
2. Problem Statement
3. Target Users
4. Strategic Context
5. Solution Overview
6. Success Metrics
7. Requirements
8. Out of Scope
9. Risks and Dependencies
10. Open Questions

### Decision Standard / 决策标准

PRD 不是“把想法写完整”，而是把以下判断写清楚：

1. 为什么值得做
2. 为什么现在做
3. 为什么先做这个版本
4. 为什么不做更大或更小的版本

### Scope Discipline / 范围纪律

如果一个需求不能明显改变主指标、关键风险或核心可用性，默认不要进 must-have。

## Application / 用法

### Phase 1 / 问题澄清

- 用 `../problem-statement/SKILL.md`

### Phase 2 / 用户与业务背景

- 说明目标用户、业务目标、为什么现在做

### Phase 3 / 方案定义

- 说明核心方案、关键流程、约束与取舍
- 明确为什么不是更简单方案，也不是更大方案

### Phase 4 / 成功定义

- 明确 primary metric 和 supporting metrics
- 写出哪些结果会说明这份 PRD 的核心假设错了

### Phase 5 / 需求与范围

- 写 must-have requirements
- 写 out of scope

### Phase 6 / 风险收尾

- 写风险、依赖和开放问题

## Examples / 示例

好：

- 一份把问题、用户、指标、范围和风险都连起来的 PRD。

差：

- 一份只有功能列表、没有问题和成功标准的“伪 PRD”。

## Common Pitfalls / 常见误区

- 方案写得比问题还快
- 没有成功指标
- scope 不受控
- 把希望一次性解决的所有问题都装进同一版 PRD
- 没写“什么结果会证明自己判断错了”

## References / 关联项

- `template.md`
- `../problem-statement/SKILL.md`
- `../workshop-facilitation/SKILL.md`
