---
name: shape-ai-feature
description: 通过问题定义、功能定义、评估和风险评审来整理 AI 产品项目。
argument-hint: "<AI 项目或功能想法>"
uses:
  - workshop-facilitation
  - problem-statement
  - task-decomposition
  - ai-feature-brief
  - llm-evaluation-plan
  - ai-risk-review
  - review-gates
outputs:
  - AI 功能 brief
  - 评估方案
  - 风险评审
  - 上线准备问题
---

# /shape-ai-feature

把一个 AI 功能点子整理成能做决策的产品定义。

## Input Contract / 输入协议

建议至少提供：

- 功能想法
- 目标用户
- 当前想解决的问题
- 业务目标
- 质量要求
- 风险顾虑

## Workflow / 流程

1. 用 `workshop-facilitation` 澄清问题和场景。
2. 用 `problem-statement` 定义用户痛点和业务痛点。
3. 用 `task-decomposition` 把功能定义、评估和风险问题拆成明确步骤。
4. 用 `ai-feature-brief` 明确体验、输入、输出和 fallback。
5. 用 `llm-evaluation-plan` 定义质量如何衡量。
6. 用 `ai-risk-review` 列出上线风险和缓解动作。
7. 用 `review-gates` 做交付前审查。

## Checkpoints / 检查点

- 不要跳过失败模式。
- 复杂任务先拆解，再进入细化定义。
- 低置信度输出必须有 fallback。
- 区分 demo 效果和上线质量。

## Decision Output / 决策出口

最后必须收敛到以下之一：

- `进入 AI PRD`
- `先做 PoC 或小实验`
- `先补评估方案和风险定义`
- `暂缓`

并说明为什么现在应该进入哪一阶段。

## Sample Output / 样例输出

- `examples/shape-ai-feature-sample.md`
