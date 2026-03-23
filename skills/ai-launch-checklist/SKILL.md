---
name: ai-launch-checklist
description: Review AI launch readiness across quality, fallback behavior, monitoring, support, and rollback. Use before exposing an AI feature to broader real users.
type: component
best_for:
  - "Preparing an AI feature for launch"
  - "Running a go or no-go review"
  - "Checking operational readiness beyond the demo"
scenarios:
  - "Create a launch checklist for an AI writing assistant"
  - "Review launch readiness for AI-generated summaries"
---

## Purpose

Create a practical launch readiness checklist for AI features so teams review operations, monitoring, and recovery behavior before release.

## Chinese Summary

- 用途：在 AI 功能上线前做一轮系统化 readiness 检查。
- 适用：从 demo 走向真实用户、准备灰度或全量发布时。
- 输出：质量、监控、运维、回滚等检查项和 go/no-go 建议。

## Key Concepts

### Launch Readiness Should Cover

- evaluation coverage
- fallback behavior
- trust and disclosure
- monitoring
- support handling
- rollback or kill switch path

## Application

Use this structure:

```markdown
## AI Launch Checklist

### Quality
- [Check]

### User Experience
- [Check]

### Monitoring
- [Check]

### Operations
- [Check]

### Rollback
- [Check]
```

Then state:

- ready now
- ready with guards
- not ready yet

## Examples

Good:

- "Monitoring includes edit rate, explicit negative feedback, and escalation from low-confidence outputs."

Bad:

- "The demo worked, so launch should be fine."

## Common Pitfalls

- treating launch as only a model quality question
- skipping rollback planning
- forgetting support and incident ownership

## References

- `../llm-evaluation-plan/SKILL.md`
- `../ai-risk-review/SKILL.md`
