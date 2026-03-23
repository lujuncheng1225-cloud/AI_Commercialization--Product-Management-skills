---
name: ai-feature-shaping
description: Shape an AI product initiative from problem to feature brief, evaluation plan, and risk review. Use when an AI idea needs product definition before roadmap commitment.
type: workflow
best_for:
  - "Turning an AI idea into a decision-ready concept"
  - "Preparing an AI initiative for roadmap discussion"
  - "Structuring cross-functional AI product definition work"
scenarios:
  - "Shape an AI copilot concept before putting it on the roadmap"
  - "Turn a vague AI assistant request into a scoped initiative"
estimated_time: "45-90 min"
---

## Purpose

Guide a PM through the minimum product work needed to shape an AI initiative responsibly.

## Chinese Summary

- 用途：把一个 AI 想法整理成能进 roadmap 讨论的产品定义。
- 适用：还停留在概念阶段，但已经需要进入产品决策时。
- 输出：问题定义、功能定义、评估方案、风险评审和建议动作。

## Key Concepts

### This Workflow Produces

1. problem clarity
2. feature definition
3. evaluation plan
4. risk review

### This Workflow Avoids

- jumping from idea to roadmap commitment
- demo-driven planning
- treating model output quality as somebody else's problem

## Application

### Phase 1: Problem Framing

- Use `../problem-statement/SKILL.md`
- Confirm the user problem and expected value

### Phase 2: Feature Definition

- Use `../ai-feature-brief/SKILL.md`
- Define trigger, input, output, quality bar, and fallback

### Phase 3: Evaluation Planning

- Use `../llm-evaluation-plan/SKILL.md`
- Define offline examples, online signals, and block-release thresholds

### Phase 4: Risk Review

- Use `../ai-risk-review/SKILL.md`
- Surface launch blockers and monitoring needs

### Phase 5: Recommendation

Return one of:

- proceed to PRD
- run an experiment first
- hold until a major risk is reduced

## Examples

Good:

- An AI feature concept that explains why it matters, how good is good enough, and what happens when the model is wrong.

Bad:

- A roadmap request that says "add AI assistant" with no problem, no evaluation, and no fallback.

## Common Pitfalls

- Confusing demo usefulness with production readiness
- Skipping evaluation planning
- Forgetting recovery behavior for bad outputs

## References

- `../workshop-facilitation/SKILL.md`
- `../problem-statement/SKILL.md`
- `../ai-feature-brief/SKILL.md`
- `../llm-evaluation-plan/SKILL.md`
- `../ai-risk-review/SKILL.md`
