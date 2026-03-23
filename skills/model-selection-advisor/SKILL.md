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

## References / 关联项

- `../llm-evaluation-plan/SKILL.md`
- `../ai-feature-brief/SKILL.md`

