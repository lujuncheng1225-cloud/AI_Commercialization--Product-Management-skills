---
name: prepare-ai-launch
description: 通过评估方案、风险评审和上线清单来准备 AI 功能上线。
argument-hint: "<AI 功能或候选上线项>"
uses:
  - llm-evaluation-plan
  - ai-risk-review
  - ai-launch-checklist
outputs:
  - 评估方案
  - 风险评审
  - 上线清单
  - go/no-go 问题
---

# /prepare-ai-launch

为 AI 功能做更严谨的上线前检查。

## Input Contract / 输入协议

建议至少提供：

- 功能名称
- 目标用户
- 当前完成度
- 已有评估结果
- 已知风险
- 上线时间或 rollout 计划

## Workflow / 流程

1. 用 `llm-evaluation-plan` 定义或补齐评估覆盖面。
2. 用 `ai-risk-review` 看质量、信任和滥用风险。
3. 用 `ai-launch-checklist` 检查运营准备度。
4. 给出 go、no-go 或带保护上线的建议。

## Checkpoints / 检查点

- 阻断风险要明确写出来。
- 低置信度输出必须有恢复路径。
- 大范围放量前必须先有监控。

## Decision Output / 决策出口

最后必须收敛到以下之一：

- `继续推进到 PRD`
- `先做实验`
- `补数据后再判断`
- `暂缓`

并说明 go / no-go 的关键证据。
