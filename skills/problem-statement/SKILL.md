---
name: problem-statement
description: 定义清晰的客户问题或业务问题。适用于从模糊痛点走向可决策问题定义的场景。
type: component
best_for:
  - "写问题定义"
  - "把零散调研整理成一个明确问题"
  - "统一团队对问题的口径"
scenarios:
  - "用户在 onboarding 流失，我需要先定义真实问题"
  - "写 PRD 前先把问题说清楚"
---

## Purpose / 用途

把“哪里不对劲”整理成一个结构化问题定义，说明谁受影响、发生了什么、为什么重要、证据是什么。

## Key Concepts / 核心概念

一个好的问题定义要回答：

1. 谁遇到了这个问题
2. 问题具体是什么
3. 为什么痛
4. 有什么证据
5. 为什么现在要处理

### First-Principles Lens / 第一性原理视角

当团队已经带着方案、功能点或组织边界来描述问题时，先把表层说法拆回到底层事实。

优先检查：

1. 用户真正卡住的任务是什么
2. 当前问题描述里，哪些其实是在描述现有方案失效
3. 如果不沿用当前方案语言，这个问题本身该怎么表述

## Application / 用法

推荐结构：

```markdown
## Problem Statement

### Target User
[谁有这个问题]

### Problem
[问题是什么]

### Why It Matters
- [用户影响]
- [业务影响]

### Evidence
- [定性证据]
- [定量证据]

### Why Now
[为什么现在值得做]
```

## Examples / 示例

好：

- “新团队管理员在首次配置阶段流失，因为初始设置成本高且没有引导，导致无法快速到达价值时刻，压低试用转付费。”

差：

- “Onboarding 很差，用户不喜欢。”

## Common Pitfalls / 常见误区

- 把解决方案写成问题
- 没有证据
- 写得太泛，无法指导后续工作
- 被现有流程或现有功能命名绑住，导致把表象当成根因

## References / 关联项

- `../prd-development/SKILL.md`
- `../workshop-facilitation/SKILL.md`
