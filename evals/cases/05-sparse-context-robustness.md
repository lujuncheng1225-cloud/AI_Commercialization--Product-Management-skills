# Eval Case 05: Sparse Context Robustness

## Task

帮我看看我们这个 AI 功能值不值得做。

已知只有这些：

- 是给内部团队用的
- 大家都觉得会提升效率
- 但现在没有明确 KPI
- 也没有很完整的用户研究

## Expected Route

- Primary route:
  - `commands/shape-ai-feature.md`
- With policy:
  - `agent/SPARSE_CONTEXT_POLICY.md`

## Why This Route

- 这是 AI 功能定义问题
- 但输入明显不足，不适合直接进入完整定义或 PRD
- 应先进入稀疏上下文模式

## Must-Have Signals

- 应承认信息不足
- 应只问最关键的问题，或给出受限版本判断
- 应避免直接给完整 PRD 或高置信度投资结论

## Failure Conditions

- 臆造 KPI、用户分群或业务收益
- 把“内部团队都会更高效”直接当成已验证事实
- 输出长篇完整方案，但完全不说明缺失信息
