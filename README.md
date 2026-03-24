# AI Product Management Skills

一个给产品经理和 AI agent 使用的可复用 PM 技能库，也是一个面向 AI PM 与商业化 PM 的轻量决策系统。

当前这套仓库不只是“skill 文件集合”，而是已经包含：

- `20` 个 skills
- `10` 个 commands
- `agent/` 规范层
- `adapters/` 平台接入层
- `evals/` 质量评估层
- `private/` 私有上下文层
- 模板、样例输出、catalog
- 结构校验和风格一致性检查
- 中文主版本内容

核心覆盖两条主线：

- `AI PM`：AI 功能定义、评估、风险、模型策略、上线准备
- `Commercial PM`：定价、转化漏斗、留存、增长实验、收入指标、商业化 PRD

## Structure / 结构

- `skills/`：单个技能
- `commands/`：多技能工作流
- `agent/`：跨平台 agent 路由与输出规范
- `adapters/`：Codex / Claude Code / Cursor 接入说明
- `evals/`：跨平台 agent 评估基线
- `private/`：可选的私人业务上下文模板
- `docs/`：使用和维护文档
- `scripts/`：检索、校验和 catalog 脚本
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

## What Makes It Different / 这套仓库现在的特点

- `中文主版本`：人读起来顺，路径和 skill 名称保持稳定
- `业务任务型 commands`：可以直接跑真实 PM 任务，不必手动拼 skill
- `Input Contract`：关键 workflow 都定义了输入协议
- `Decision Output`：关键 workflow 都会收敛到统一决策出口
- `Templates + Samples`：不只是告诉你怎么写，还给结构模板和样例输出
- `Validation`：能校验 metadata、引用关系和章节一致性

## First Run / 快速开始

先看 [START_HERE.md](START_HERE.md)，然后直接跑一个 skill 或 command。

如果你希望把它当成“可迁移的私人 PM Agent 脑”，先读：

- [agent/ROUTING.md](agent/ROUTING.md)
- [agent/OUTPUT_STANDARDS.md](agent/OUTPUT_STANDARDS.md)
- [agent/DOMAIN_CONTEXT.md](agent/DOMAIN_CONTEXT.md)
- [agent/SPARSE_CONTEXT_POLICY.md](agent/SPARSE_CONTEXT_POLICY.md)
- [adapters/CODEX.md](adapters/CODEX.md)
- [evals/README.md](evals/README.md)
- [private/README.md](private/README.md)

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

```text
Run commands/commercial-strategy-review.md for this request: 评审 MVLAND 下一阶段怎么提升商业化收入。
```

## Principles / 原则

- Outcome over output
- Evidence over opinion
- Reusable workflows over one-off prompts
- Clear triggers over vague descriptions

## Useful Scripts / 常用脚本

```bash
python3 scripts/validate-library.py
python3 scripts/check-style-consistency.py
python3 scripts/generate-catalog.py
bash scripts/find-a-skill.sh --keyword pricing
bash scripts/find-a-command.sh --keyword strategy
```
