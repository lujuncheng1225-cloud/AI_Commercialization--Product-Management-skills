---
name: prd-development
description: Build a structured PRD that connects problem, users, solution, success metrics, and scope boundaries. Use when turning discovery notes or scattered decisions into a document an engineering team can work from.
type: workflow
best_for:
  - "Writing a complete PRD from scratch"
  - "Turning discovery outputs into a structured document"
  - "Aligning product, design, and engineering on a major initiative"
scenarios:
  - "I need a PRD for an onboarding redesign"
  - "I have discovery notes and need a decision-ready PRD"
estimated_time: "60-120 min"
---

## Purpose

Guide product managers through a practical PRD workflow that keeps the document tied to user problems and measurable outcomes.

This is not a waterfall specification. It is a structured working document.

## Chinese Summary

- 用途：把零散发现、讨论和决策整理成可执行的 PRD。
- 适用：中大型功能、跨团队协作、需要书面 source of truth 时。
- 输出：从问题、用户、方案到指标、范围、风险的一整套 PRD。

## Key Concepts

### A Strong PRD Covers

1. Executive summary
2. Problem statement
3. Target users
4. Strategic context
5. Solution overview
6. Success metrics
7. Requirements
8. Out of scope
9. Risks and dependencies
10. Open questions

### When To Use It

- Major features
- Cross-functional alignment
- Ambiguous initiatives that need a source of truth

### When Not To Use It

- Small bug fixes
- Trivial UI tweaks
- Work that already has complete alignment and can go straight to stories

## Application

Use `template.md` as the working structure.

### Phase 1: Clarify the Problem

- Use `../problem-statement/SKILL.md`
- Confirm target user, pain, evidence, and urgency

### Phase 2: Define the User and Context

- Name primary user segments
- Clarify business goal and why now

### Phase 3: Shape the Solution

- Describe the proposed approach
- Name key flows, constraints, and tradeoffs

### Phase 4: Define Success

- Choose one primary metric
- Add supporting metrics and targets

### Phase 5: Write Requirements

- Draft requirements clearly
- Separate must-haves from future ideas
- Name what is out of scope

### Phase 6: Final Review

- Check internal consistency
- List risks, dependencies, and open questions

## Examples

Good:

- A PRD that ties onboarding redesign to activation, identifies the target segment, names the success metric, and calls out excluded scope.

Bad:

- A PRD that is really a feature list with no evidence, no tradeoffs, and no success definition.

## Common Pitfalls

- Writing solution details before clarifying the problem
- Missing success metrics
- Letting scope expand without an out-of-scope section

## References

- `template.md`
- `../problem-statement/SKILL.md`
- `../workshop-facilitation/SKILL.md`
