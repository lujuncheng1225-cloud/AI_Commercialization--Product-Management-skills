---
name: experiment-brief
description: Design a lightweight product experiment with hypothesis, audience, success criteria, and next-step decisions. Use when testing a risky assumption before committing broader investment.
type: component
best_for:
  - "Testing a product hypothesis quickly"
  - "Designing a validation experiment before full build"
  - "Clarifying what signal would change the decision"
scenarios:
  - "Create a quick test for whether users want AI-generated release notes"
  - "Design an experiment to validate onboarding guidance demand"
---

## Purpose

Create a concise experiment brief that makes the hypothesis, signal, and decision rule explicit.

## Chinese Summary

- 用途：把验证实验设计成可判断去留的简报。
- 适用：不想先大做特做，想先验证关键假设时。
- 输出：假设、受众、方法、成功阈值、决策规则。

## Key Concepts

### Every Good Experiment Brief Defines

1. Hypothesis
2. Audience
3. Test method
4. Success signal
5. Decision rule

### What This Is Not

- Not a general research plan
- Not a launch plan
- Not a metric list without a decision threshold

## Application

Use this structure:

```markdown
## Experiment Brief

### Hypothesis
[What you believe]

### Audience
[Who to test with]

### Method
[Prototype, concierge test, fake door, survey, interview, etc.]

### Success Criteria
- [Signal]
- [Threshold]

### Decision Rule
[What you will do if the signal is weak, mixed, or strong]
```

## Examples

Good:

- "If at least 30 percent of PMs who view the fake-door entry click through and 5 agree to a follow-up concierge test, we will invest in a prototype."

Bad:

- "Let's test it and see what happens."

## Common Pitfalls

- Testing too many assumptions at once
- Using vanity engagement instead of decision signals
- Running an experiment without a next-step rule

## References

- `../problem-statement/SKILL.md`
- `../ai-feature-brief/SKILL.md`
