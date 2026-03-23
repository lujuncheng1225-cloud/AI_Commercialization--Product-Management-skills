---
name: agent-workflow-brief
description: 定义 agent 工作流的输入、工具、边界、人工审核点和失败约束。适用于把 AI 自动化思路整理成产品化工作流的场景。
type: component
best_for:
  - "设计 agent 工作流"
  - "明确 AI 自动化的边界"
  - "定义人工审核点"
scenarios:
  - "定义一个从 discovery notes 生成 PRD 的 agent workflow"
  - "给 PM copilot 设计工具访问和审核点"
---

## Purpose / 用途

把“做个 agent”这种模糊想法整理成可执行、可约束的工作流定义。

## Key Concepts / 核心概念

每个 agent workflow 都要说明：

- trigger
- inputs and tools
- allowed actions
- blocked actions
- human review points
- success and failure criteria

## Application / 用法

```markdown
## Agent Workflow Brief

### Trigger
[怎么开始]

### Inputs and Tools
- [输入/工具]

### Allowed Actions
- [允许动作]

### Human Review Points
- [人工审核点]

### Failure Boundaries
- [不能做什么]
```

## Examples / 示例

好：

- “agent 可以先起草 PRD，但 success metrics 和 scope 必须由 PM 审核后才能共享。”

差：

- “让 agent 自动做产品管理。”

## Common Pitfalls / 常见误区

- 边界太模糊
- 没有人工审核
- 给了工具访问但没写动作限制

## References / 关联项

- `../ai-risk-review/SKILL.md`
- `../ai-feature-brief/SKILL.md`

