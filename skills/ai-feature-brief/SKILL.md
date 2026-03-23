---
name: ai-feature-brief
description: Define an AI feature with clear user job, inputs, outputs, quality bar, and fallback behavior. Use when turning an LLM idea into a scoped product concept.
type: component
best_for:
  - "Shaping an AI feature before writing a full PRD"
  - "Clarifying what an AI capability should actually do"
  - "Reducing vague AI feature ideas"
scenarios:
  - "Define an AI summarization feature for customer interview notes"
  - "Turn an AI copilot idea into a scoped product brief"
---

## Purpose

Create a concise feature brief for an AI-powered capability before the team commits to build.

## Chinese Summary

- 用途：在写完整 PRD 前，先把 AI 功能定义清楚。
- 适用：只有一个 AI 点子，还没明确输入、输出和质量标准时。
- 输出：用户任务、触发点、输入、输出、质量门槛、回退策略。

## Key Concepts

### An AI Feature Brief Should Clarify

1. User job to be done
2. Trigger or entry point
3. Inputs the model needs
4. Outputs the product should return
5. Quality bar for a useful result
6. Failure modes
7. Fallback or recovery behavior

### What This Is Not

- Not a model architecture decision document
- Not a vague brainstorm about AI possibilities
- Not a substitute for evaluation planning

## Application

Use this structure:

```markdown
## AI Feature Brief

### User Job
[What the user is trying to get done]

### Trigger
[When the feature is invoked]

### Inputs
- [Required input]
- [Optional context]

### Outputs
- [Primary output]
- [Secondary output]

### Quality Bar
- [What makes the result useful]
- [What failure looks like]

### Fallback Behavior
- [What happens when confidence is low or output is weak]

### Open Product Questions
- [What still needs validation]
```

## Examples

Good:

- "Summarize an interview transcript into pains, workarounds, and opportunity themes, with source snippets and confidence notes."

Bad:

- "Use AI to make research easier."

## Common Pitfalls

- Treating a model capability as the user value
- Ignoring fallback behavior
- Defining outputs without a quality bar

## References

- `../llm-evaluation-plan/SKILL.md`
- `../ai-risk-review/SKILL.md`
- `../problem-statement/SKILL.md`
