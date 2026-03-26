---
name: review-gates
description: 在正式交付前用结构化关口审查方案、文档或分析结果。适用于避免局部正确但整体跑偏、避免草率交付的场景。
type: component
best_for:
  - "在交付前做结构化审查"
  - "检查文档或分析是否真的能用"
  - "明确返工条件和通过条件"
scenarios:
  - "PRD 写完后做一轮交付前审查"
  - "商业化策略判断输出后，检查是否存在阶段错位或证据不足"
---

## Purpose / 用途

在输出交付前，用几个固定关口做快速但严格的审查，防止“局部看着都对，整体却不能用”。

## Key Concepts / 核心概念

### Gate 1 / Fit Check

检查当前输出是否真的回答了任务，而不是答成了别的东西。

重点看：

- 是否符合当前任务阶段
- 是否回答了用户真正要的决策
- 是否遗漏了关键输入缺口说明

### Gate 2 / Reasoning Check

检查判断是否站得住。

重点看：

- 是否有明确主结论
- 是否区分已知、推断和待验证
- 是否给出最强替代解释或主要反证风险

### Gate 3 / Integration Check

检查整体是否一致、可复用、可交付。

重点看：

- 各部分之间是否互相支持
- 指标、范围、风险和下一步是否一致
- 是否存在局部正确但全局冲突

## Application / 用法

```markdown
## Review Gates

### Gate 1: Fit Check
- Pass / Fail: [结果]
- Notes: [原因]

### Gate 2: Reasoning Check
- Pass / Fail: [结果]
- Notes: [原因]

### Gate 3: Integration Check
- Pass / Fail: [结果]
- Notes: [原因]

### Rework Required
- [需要返工的点]
```

## Examples / 示例

好：

- “这份输出有明确结论，但缺少替代解释，因此 Gate 2 不通过，需要补最强反例再交付。”

差：

- “整体还可以，先这样吧。”

## Common Pitfalls / 常见误区

- 只看文风，不看结论和证据
- 局部都对，却没人检查全局一致性
- 发现问题后没有明确返工条件

## References / 关联项

- `../prd-development/SKILL.md`
- `../commercial-prd/SKILL.md`
- `../llm-evaluation-plan/SKILL.md`
- `../ai-risk-review/SKILL.md`
