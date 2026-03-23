# AI Product Management Skills

一个给产品经理和 AI agent 使用的可复用 PM 技能库。

当前覆盖两条主线：

- `AI PM`：AI 功能定义、评估、风险、模型策略、上线准备
- `Commercial PM`：定价、转化漏斗、留存、增长实验、收入指标、商业化 PRD

## Structure / 结构

- `skills/`：单个技能
- `commands/`：多技能工作流
- `docs/`：使用和维护文档
- `scripts/`：检索和 catalog 脚本
- `catalog/`：自动生成索引

## Featured Skills / 代表技能

- `problem-statement`：问题定义
- `prd-development`：通用 PRD 工作流
- `ai-feature-brief`：AI 功能定义
- `llm-evaluation-plan`：AI 评估方案
- `pricing-packaging-brief`：定价与套餐设计
- `conversion-funnel-diagnostic`：转化漏斗诊断
- `retention-levers-review`：留存杠杆分析
- `revenue-metrics-scorecard`：商业化指标看板

## First Run / 快速开始

先看 [START_HERE.md](/Users/yancheng/Documents/AI%20Product%20Management/START_HERE.md)，然后直接跑一个 skill 或 command。

```text
Using skills/problem-statement/SKILL.md，帮我定义新 B2B 用户激活低的问题。先问不超过 3 个澄清问题，再输出 markdown。
```

```text
Run commands/shape-ai-feature.md for this request: 为产品团队设计一个 AI 会议纪要功能，自动提取 action items 和 decisions。
```

```text
Run commands/commercial-growth-review.md for this request: 诊断我们 self-serve SaaS 从激活到付费的转化掉点。
```

```text
Run commands/write-commercial-prd.md for this request: 重做升级流程并重新设计 pro 套餐包装。
```

## Principles / 原则

- Outcome over output
- Evidence over opinion
- Reusable workflows over one-off prompts
- Clear triggers over vague descriptions

生成索引：

```bash
python3 scripts/generate-catalog.py
```
