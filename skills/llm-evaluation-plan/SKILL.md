---
name: llm-evaluation-plan
description: Define how an AI feature will be evaluated offline and online with representative tasks, metrics, and failure thresholds. Use when an LLM feature needs a quality plan before launch.
type: component
best_for:
  - "Designing evaluation for an AI product feature"
  - "Turning subjective quality concerns into measurable checks"
  - "Defining launch criteria for an LLM feature"
scenarios:
  - "Create an evaluation plan for an AI meeting notes feature"
  - "How should we assess the quality of an AI support draft assistant?"
---

## Purpose

Build a practical evaluation plan for an AI feature so quality can be discussed with evidence instead of opinion.

## Chinese Summary

- 用途：给 AI 功能制定上线前后的评估方案。
- 适用：团队担心“效果好不好”但还没有清晰衡量方式时。
- 输出：离线样本集、指标、阻断阈值、线上监控信号。

## Key Concepts

### Evaluation Needs Two Layers

- Offline evaluation: representative examples and scoring before launch
- Online evaluation: production behavior after release

### Common Evaluation Dimensions

- accuracy
- completeness
- groundedness
- latency
- user acceptance
- recovery from bad outputs

### What This Is Not

- Not a purely technical benchmark
- Not a vague statement like "we will test quality"

## Application

Use this structure:

```markdown
## Evaluation Plan

### Feature
[Feature name]

### Primary Job To Evaluate
[What the feature must do well]

### Offline Test Set
- [Representative scenario 1]
- [Representative scenario 2]
- [Representative scenario 3]

### Metrics
- [Metric]
- [Metric]

### Failure Thresholds
- [What outcome blocks launch]

### Online Signals
- [Acceptance or usage signal]
- [Quality or correction signal]

### Review Cadence
- [Who reviews and how often]
```

## Examples

Good:

- "Score 50 representative meeting transcripts for action-item extraction precision, hallucinated decisions, and edit rate."

Bad:

- "Ask a few people if the AI feels good."

## Common Pitfalls

- Evaluating on toy examples
- Measuring only latency and not usefulness
- Launching without a blocking threshold

## References

- `../ai-feature-brief/SKILL.md`
- `../ai-risk-review/SKILL.md`
