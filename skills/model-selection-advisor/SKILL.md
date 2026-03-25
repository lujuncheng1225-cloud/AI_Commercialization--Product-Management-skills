---
name: model-selection-advisor
description: 根据任务类型、时延、成本、稳定性和风险容忍度选择模型策略。适用于决定单模型、路由或 fallback 方案的场景。
type: interactive
best_for:
  - "选模型方案"
  - "平衡质量、时延和成本"
  - "决定是否需要路由和 fallback"
scenarios:
  - "为 AI 会议纪要功能选模型"
  - "我们该用单模型还是路由策略"
---

## Purpose / 用途

推荐一个和产品目标匹配的模型策略，而不是凭 hype 或 demo 效果拍脑袋。

## Key Concepts / 核心概念

模型选择通常取决于：

- 任务复杂度
- latency 容忍度
- 成本约束
- 质量门槛
- 出错代价

### Strategic Rule / 策略规则

模型选择不是“找最强模型”，而是“为当前任务买到足够可靠的能力”。

优先判断这 3 件事：

1. 这个任务的失败代价，决定你该为质量付多少钱
2. 这个任务的调用规模，决定你能不能长期承受当前方案
3. 这个任务的分布是否稳定，决定你需不需要路由和 fallback

### Disconfirming Checks / 反证检查

在推荐更复杂策略前，先检查：

- 是不是 prompt、上下文工程或输出约束没做好，而不是模型本身不够强
- 是不是任务被错误地合并成一个大任务，导致看起来必须上大模型
- 是不是只有少量高风险 case 需要强模型，而不是全量请求都需要

## Application / 用法

最多问 5 个短问题：

1. 模型要完成什么任务
2. 错误输出的代价多高
3. 可接受时延是多少
4. 成本约束是什么
5. 是否需要路由或 fallback

输出：

```markdown
## Model Strategy Recommendation

### Recommended Approach
[单模型 / 路由 / fallback / hybrid]

### Why It Fits
- [原因]

### Why Not The Simpler Option
- [为什么不能更简单]

### Why Not The Stronger Option
- [为什么不用更重的方案]

### Operational Notes
- [时延]
- [成本]
- [稳定性]

### What To Validate Next
- [下一步验证项]
```

## Examples / 示例

好：

- “复杂总结用强模型，短分类任务路由到更快更便宜的模型。”

差：

- “所有任务都用最大的模型。”

## Common Pitfalls / 常见误区

- 只看 demo 效果
- 忽略规模化成本
- 忘记 fallback
- 把 prompt 问题、系统设计问题误判成模型能力问题
- 在没有分布分层的情况下过早上路由

## References / 关联项

- `../llm-evaluation-plan/SKILL.md`
- `../ai-feature-brief/SKILL.md`
