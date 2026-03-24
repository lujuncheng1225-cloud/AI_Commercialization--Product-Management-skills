# Eval Case 01: Shape AI Feature

## Task

为 PM 团队设计一个 AI 功能，能够把用户访谈逐字稿整理成：

- 关键痛点
- 支持原句
- 候选机会点

限制：

- 目前没有确定模型
- 很担心 hallucination
- 这个季度只能做一个轻量版本

## Expected Route

- Primary route:
  - `commands/shape-ai-feature.md`

## Why This Route

- 这是典型的 AI 功能定义问题
- 任务天然跨问题定义、功能定义、评估和风险
- 不适合只用单个 `skill`

## Must-Have Signals

- 应识别这是 workflow，不是单点写作任务
- 应提到评估标准或风险控制
- 应避免直接写成完整 PRD

## Failure Conditions

- 直接命中 `commands/write-prd.md`
- 只输出功能清单，没有评估和风险
- 在没有额外信息时臆造质量指标基线
