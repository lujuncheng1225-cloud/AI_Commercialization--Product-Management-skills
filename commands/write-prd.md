---
name: write-prd
description: 通过问题定义、需求整理和初步故事拆解来生成 PRD。
argument-hint: "<项目或功能>"
uses:
  - workshop-facilitation
  - problem-statement
  - prd-development
outputs:
  - 结构化 PRD
  - 成功指标
  - 范围边界
---

# /write-prd

生成一份从问题到需求、范围清晰的 PRD。

## Workflow / 流程

1. 如果背景不清楚，先用 `workshop-facilitation`。
2. 用 `problem-statement` 澄清用户问题和业务问题。
3. 用 `prd-development` 产出完整文档。
4. 结尾补 assumptions、risks 和 next steps。

## Checkpoints / 检查点

- 在展开方案前先确认问题。
- 至少保留一个可衡量的成功指标。
- 明确写出 out of scope。
