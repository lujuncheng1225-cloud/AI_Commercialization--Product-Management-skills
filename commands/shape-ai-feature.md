---
name: shape-ai-feature
description: 通过问题定义、功能定义、评估和风险评审来整理 AI 产品项目。
argument-hint: "<AI 项目或功能想法>"
uses:
  - workshop-facilitation
  - problem-statement
  - ai-feature-brief
  - llm-evaluation-plan
  - ai-risk-review
outputs:
  - AI 功能 brief
  - 评估方案
  - 风险评审
  - 上线准备问题
---

# /shape-ai-feature

把一个 AI 功能点子整理成能做决策的产品定义。

## Workflow / 流程

1. 用 `workshop-facilitation` 澄清问题和场景。
2. 用 `problem-statement` 定义用户痛点和业务痛点。
3. 用 `ai-feature-brief` 明确体验、输入、输出和 fallback。
4. 用 `llm-evaluation-plan` 定义质量如何衡量。
5. 用 `ai-risk-review` 列出上线风险和缓解动作。

## Checkpoints / 检查点

- 不要跳过失败模式。
- 低置信度输出必须有 fallback。
- 区分 demo 效果和上线质量。
