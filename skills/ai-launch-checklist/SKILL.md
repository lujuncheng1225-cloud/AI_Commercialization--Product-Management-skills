---
name: ai-launch-checklist
description: 检查 AI 功能的质量、fallback、监控、支持和回滚准备度。适用于 AI 功能面向真实用户放量前的上线审查场景。
type: component
best_for:
  - "AI 上线前检查"
  - "go/no-go 评审"
  - "检查 demo 之外的运营准备度"
scenarios:
  - "为 AI 写作助手做上线清单"
  - "审查 AI 总结功能的上线准备度"
---

## Purpose / 用途

在 AI 功能上线前，系统性检查质量、运营和恢复能力是否到位。

## Key Concepts / 核心概念

上线准备至少覆盖：

- evaluation coverage
- fallback behavior
- trust and disclosure
- monitoring
- support handling
- rollback path

## Application / 用法

```markdown
## AI Launch Checklist

### Quality
- [检查项]

### User Experience
- [检查项]

### Monitoring
- [检查项]

### Operations
- [检查项]

### Rollback
- [检查项]
```

最后给出：

- ready now
- ready with guards
- not ready yet

## Examples / 示例

好：

- “监控里包含 edit rate、明确负反馈和低置信度输出升级率。”

差：

- “demo 看起来不错，所以可以上线。”

## Common Pitfalls / 常见误区

- 把上线只看成模型质量问题
- 没有回滚计划
- 忽略 support ownership

## References / 关联项

- `../llm-evaluation-plan/SKILL.md`
- `../ai-risk-review/SKILL.md`

