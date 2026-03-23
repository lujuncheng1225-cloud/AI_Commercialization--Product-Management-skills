# Skills Catalog

Generated from `skills`.

## agent-workflow-brief

- Path: `skills/agent-workflow-brief/SKILL.md`
- Type: `component`
- Description: 定义 agent 工作流的输入、工具、边界、人工审核点和失败约束。适用于把 AI 自动化思路整理成产品化工作流的场景。
- Best for: 设计 agent 工作流, 明确 AI 自动化的边界, 定义人工审核点
- Example: 定义一个从 discovery notes 生成 PRD 的 agent workflow

## ai-feature-brief

- Path: `skills/ai-feature-brief/SKILL.md`
- Type: `component`
- Description: 定义一个 AI 功能的用户任务、输入、输出、质量标准和 fallback。适用于把模糊 AI 点子整理成可讨论方案的场景。
- Best for: 定义 AI 功能, 在写完整 PRD 前先把 AI 能力说清楚, 减少模糊的 AI 想法
- Example: 定义一个 AI 访谈总结功能

## ai-feature-shaping

- Path: `skills/ai-feature-shaping/SKILL.md`
- Type: `workflow`
- Description: 把一个 AI 产品想法整理成问题定义、功能定义、评估方案和风险评审。适用于 roadmap 前的产品定义场景。
- Best for: 把 AI 点子整理成可决策方案, roadmap 前做 AI 功能定义, 组织跨团队 AI 产品讨论
- Example: 把一个 AI copilot 想法整理成产品方案

## ai-launch-checklist

- Path: `skills/ai-launch-checklist/SKILL.md`
- Type: `component`
- Description: 检查 AI 功能的质量、fallback、监控、支持和回滚准备度。适用于 AI 功能面向真实用户放量前的上线审查场景。
- Best for: AI 上线前检查, go/no-go 评审, 检查 demo 之外的运营准备度
- Example: 为 AI 写作助手做上线清单

## ai-risk-review

- Path: `skills/ai-risk-review/SKILL.md`
- Type: `component`
- Description: 评审 AI 功能的质量、信任、运营、滥用和策略风险，并给出缓解动作。适用于上线前或大范围扩量前的风险审查。
- Best for: AI 上线风险评审, 把抽象担忧变成具体检查项, 梳理 AI 功能失败模式
- Example: 评审 AI 邮件草稿助手的风险

## commercial-prd

- Path: `skills/commercial-prd/SKILL.md`
- Type: `workflow`
- Description: 为定价、套餐、转化、升级、留存等商业化项目写 PRD。适用于商业化产品改动需要成文对齐的场景。
- Best for: 写商业化项目 PRD, 整理 monetization 或 conversion 项目, 对齐 pricing 或 growth 方案
- Example: 为自助升级流程改版写 PRD

## conversion-funnel-diagnostic

- Path: `skills/conversion-funnel-diagnostic/SKILL.md`
- Type: `component`
- Description: 诊断转化漏斗的阶段、掉点、可能原因和下一步核查方向。适用于获客、激活或付费转化出问题的场景。
- Best for: 诊断转化掉点, 找出漏斗里最主要的 leak, 把漏斗数据转成可验证假设
- Example: 用户激活了但没转付费，问题在哪

## experiment-brief

- Path: `skills/experiment-brief/SKILL.md`
- Type: `component`
- Description: 设计一个轻量实验，明确假设、受众、方法、成功标准和决策规则。适用于先验证关键假设再决定是否投入的场景。
- Best for: 快速验证产品假设, 设计 build 前实验, 明确什么信号会改变决策
- Example: 验证用户是否想要 AI 自动发布说明

## growth-experiment-design

- Path: `skills/growth-experiment-design/SKILL.md`
- Type: `component`
- Description: 设计增长实验，明确目标指标、假设、改动、受众和决策规则。适用于商业化产品做转化或留存优化测试的场景。
- Best for: 设计增长实验, 测试转化或留存改动, 让商业化优化更 evidence-based
- Example: 设计一个 trial-to-paid 转化实验

## llm-evaluation-plan

- Path: `skills/llm-evaluation-plan/SKILL.md`
- Type: `component`
- Description: 为 AI 功能定义离线与线上评估方案，包括样本、指标和阻断阈值。适用于上线前需要明确质量标准的场景。
- Best for: 为 AI 功能设计评估方案, 把主观质量讨论变成可测方案, 定义 LLM 功能上线门槛
- Example: 为 AI 会议纪要做评估方案

## model-selection-advisor

- Path: `skills/model-selection-advisor/SKILL.md`
- Type: `interactive`
- Description: 根据任务类型、时延、成本、稳定性和风险容忍度选择模型策略。适用于决定单模型、路由或 fallback 方案的场景。
- Best for: 选模型方案, 平衡质量、时延和成本, 决定是否需要路由和 fallback
- Example: 为 AI 会议纪要功能选模型

## north-star-metric

- Path: `skills/north-star-metric/SKILL.md`
- Type: `component`
- Description: 定义一个北极星指标及其 guardrail。适用于团队需要一个主要结果指标而不是一堆松散 KPI 的场景。
- Best for: 定义北极星指标, 区分主指标和守护指标, 统一团队对价值的理解
- Example: 为 AI 研究助手定义北极星指标

## prd-development

- Path: `skills/prd-development/SKILL.md`
- Type: `workflow`
- Description: 构建一份从问题、用户、方案到成功指标和范围边界都清楚的 PRD。适用于把零散背景整理成工程团队可执行文档的场景。
- Best for: 从零写完整 PRD, 把调研结果整理成文档, 对齐产品、设计、工程
- Example: 我要为 onboarding 改版写一份 PRD

## pricing-packaging-brief

- Path: `skills/pricing-packaging-brief/SKILL.md`
- Type: `component`
- Description: 定义或调整定价与套餐结构，明确目标客户、价值指标、套餐层级与取舍。适用于商业化设计或改版场景。
- Best for: 设计 SaaS 定价和套餐, 重做 plan 结构, 把产品价值和商业模式连起来
- Example: 重做 free、pro、team 套餐

## prioritization-advisor

- Path: `skills/prioritization-advisor/SKILL.md`
- Type: `interactive`
- Description: 根据产品阶段、团队环境和数据条件推荐优先级方法。适用于 RICE、ICE、value-effort 等方法选择场景。
- Best for: 选择优先级框架, 减少 backlog 排序争论, 给团队匹配合适的打分方法
- Example: 我们有很多需求，但不知道该怎么排优先级

## problem-statement

- Path: `skills/problem-statement/SKILL.md`
- Type: `component`
- Description: 定义清晰的客户问题或业务问题。适用于从模糊痛点走向可决策问题定义的场景。
- Best for: 写问题定义, 把零散调研整理成一个明确问题, 统一团队对问题的口径
- Example: 用户在 onboarding 流失，我需要先定义真实问题

## retention-levers-review

- Path: `skills/retention-levers-review/SKILL.md`
- Type: `component`
- Description: 分析留存驱动、流失模式和干预杠杆。适用于产品能获客但复用率和持续留存不足的场景。
- Best for: 分析留存问题, 理解为什么用户不回来, 找留存干预点
- Example: 用户激活一次后不再回来

## revenue-metrics-scorecard

- Path: `skills/revenue-metrics-scorecard/SKILL.md`
- Type: `component`
- Description: 定义一套包含收入、转化、留存和 guardrail 的商业化指标看板。适用于需要统一业务健康指标口径的场景。
- Best for: 定义商业化指标看板, 统一收入和转化指标, 给 monetization 项目建立指标框架
- Example: 为 self-serve SaaS 定义 revenue scorecard

## voice-of-customer-synthesis

- Path: `skills/voice-of-customer-synthesis/SKILL.md`
- Type: `component`
- Description: 把访谈、工单、反馈和用户笔记整理成主题、信号和产品含义。适用于 VOC 原始材料需要结构化归纳的场景。
- Best for: 归纳用户反馈, 把原始访谈整理成主题, 做 discovery synthesis
- Example: 把 20 份访谈整理成主题

## workshop-facilitation

- Path: `skills/workshop-facilitation/SKILL.md`
- Type: `interactive`
- Description: 用结构化提问来引导产品管理会话。适用于需求模糊、背景很乱、需要先澄清再产出的场景。
- Best for: 澄清模糊 PM 需求, 在写文档前先做引导式会话, 组织复杂的产品讨论
- Example: 我有一堆零散背景，先帮我理清问题再写 PRD
