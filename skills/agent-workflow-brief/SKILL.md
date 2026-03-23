---
name: agent-workflow-brief
description: Define an agentic workflow with inputs, tools, decision boundaries, handoffs, and human review points. Use when turning an AI automation idea into a safe productized workflow.
type: component
best_for:
  - "Designing an agent workflow"
  - "Clarifying tool use and human checkpoints"
  - "Preventing vague copilot or agent definitions"
scenarios:
  - "Define an agent workflow that drafts PRDs from discovery notes"
  - "Scope a PM copilot that uses docs, tickets, and analytics"
---

## Purpose

Create a workflow brief for an agentic feature so the team knows what the system can do, what it cannot do, and where humans must stay in the loop.

## Chinese Summary

- 用途：定义 agent 工作流的边界、工具和人工介入点。
- 适用：想把 AI 自动化做成产品功能，而不是随便丢一个 copilot 概念时。
- 输出：触发方式、工具访问、允许动作、人工审核点和失败边界。

## Key Concepts

### Every Agent Workflow Needs

- starting trigger
- accessible tools or context
- allowed actions
- blocked actions
- human review points
- success and failure criteria

## Application

Use this structure:

```markdown
## Agent Workflow Brief

### Trigger
[How the workflow begins]

### Inputs and Tools
- [Input]
- [Tool or data source]

### Allowed Actions
- [Action]

### Human Review Points
- [Checkpoint]

### Failure Boundaries
- [What the agent must not do]
```

## Examples

Good:

- "The agent drafts a PRD, but a PM must approve success metrics and scope before anything is shared."

Bad:

- "The agent handles product management automatically."

## Common Pitfalls

- letting the workflow boundary stay vague
- skipping human approval points
- giving tool access without action limits

## References

- `../ai-risk-review/SKILL.md`
- `../ai-feature-brief/SKILL.md`
