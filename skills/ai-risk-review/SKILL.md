---
name: ai-risk-review
description: Review an AI feature for quality, trust, operational, and misuse risks with concrete mitigations. Use before launch or before committing to a broader implementation.
type: component
best_for:
  - "Reviewing AI launch risks"
  - "Surfacing trust and quality failure modes"
  - "Turning vague safety concerns into concrete checks"
scenarios:
  - "Review the risks of an AI assistant that drafts customer emails"
  - "What risks should we assess before launching AI-generated summaries?"
---

## Purpose

Create a practical risk review for an AI feature that helps product, design, engineering, and leadership decide whether the launch conditions are strong enough.

## Chinese Summary

- 用途：系统性审查 AI 功能的质量、信任、运营和滥用风险。
- 适用：上线前评审、范围扩大前评审、领导层要风险说明时。
- 输出：风险表、缓解动作、监控指标、上线阻断项。

## Key Concepts

### Risk Areas

- quality risk
- trust risk
- operational risk
- misuse risk
- legal or policy risk

### Good Risk Reviews Include

- the failure mode
- who is harmed
- how likely it is
- how severe it is
- what mitigation exists
- what signal should be monitored

## Application

Use this structure:

```markdown
## AI Risk Review

| Risk | Failure Mode | Impacted User | Severity | Likelihood | Mitigation | Monitoring |
|------|--------------|---------------|----------|------------|------------|------------|
| [Risk] | [Failure] | [User] | [H/M/L] | [H/M/L] | [Action] | [Signal] |
```

Then summarize:

- top launch blockers
- acceptable risks with mitigation
- unresolved questions

## Examples

Good:

- "Low-confidence action-item extraction may invent commitments, causing teams to act on decisions that were never made."

Bad:

- "AI could be risky."

## Common Pitfalls

- Listing risks without mitigations
- Ignoring misuse or overreliance risk
- Treating all risks as equally important

## References

- `../ai-feature-brief/SKILL.md`
- `../llm-evaluation-plan/SKILL.md`
