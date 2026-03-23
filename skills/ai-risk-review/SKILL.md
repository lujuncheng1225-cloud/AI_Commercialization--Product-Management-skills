---
name: ai-risk-review
description: 评审 AI 功能的质量、信任、运营、滥用和策略风险，并给出缓解动作。适用于上线前或大范围扩量前的风险审查。
type: component
best_for:
  - "AI 上线风险评审"
  - "把抽象担忧变成具体检查项"
  - "梳理 AI 功能失败模式"
scenarios:
  - "评审 AI 邮件草稿助手的风险"
  - "上线 AI 总结功能前需要一份风险表"
---

## Purpose / 用途

系统性审查 AI 功能的关键风险，帮助团队判断是否具备上线条件。

## Key Concepts / 核心概念

常见风险面：

- 质量风险
- 信任风险
- 运营风险
- 滥用风险
- 法务或政策风险

## Application / 用法

```markdown
## AI Risk Review

| Risk | Failure Mode | Impacted User | Severity | Likelihood | Mitigation | Monitoring |
|------|--------------|---------------|----------|------------|------------|------------|
| [风险] | [失败模式] | [受影响用户] | [高/中/低] | [高/中/低] | [缓解动作] | [监控信号] |
```

最后补：

- top blockers
- acceptable risks
- unresolved questions

## Examples / 示例

好：

- “低置信度 action-item 抽取可能凭空捏造承诺，导致团队按照不存在的决定执行。”

差：

- “AI 可能有风险。”

## Common Pitfalls / 常见误区

- 只列风险不写缓解
- 忽略滥用和过度依赖
- 把所有风险看成一样严重

## References / 关联项

- `../ai-feature-brief/SKILL.md`
- `../llm-evaluation-plan/SKILL.md`

