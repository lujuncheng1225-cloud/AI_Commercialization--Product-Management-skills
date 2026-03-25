---
name: pricing-packaging-brief
description: 定义或调整定价与套餐结构，明确目标客户、价值指标、套餐层级与取舍。适用于商业化设计或改版场景。
type: component
best_for:
  - "设计 SaaS 定价和套餐"
  - "重做 plan 结构"
  - "把产品价值和商业模式连起来"
scenarios:
  - "重做 free、pro、team 套餐"
  - "为 AI 增值包写一份 pricing brief"
---

## Purpose / 用途

把产品价值、目标客群和商业结构整理成一份定价与套餐简报。

## Key Concepts / 核心概念

一个 pricing brief 至少说明：

1. 目标客户
2. value metric
3. plan tiers
4. packaging logic
5. upgrade path
6. 风险与取舍

### First-Principles Check / 第一性原理检查

在讨论价格档位前，先回到底层商业逻辑：

1. 用户真正购买的价值单位是什么
2. 价值主要随着哪种使用行为增长
3. 当前套餐设计继承了哪些历史包袱，而不是当前价值结构

### Occam Guardrail / 奥卡姆约束

如果两个套餐结构都能覆盖主要客群，优先保留：

- 更容易被用户理解的
- 升级路径更直接的
- 对销售、运营和计费系统更简单的

不要默认通过增加档位、限制项和例外规则来制造“精细化”。

## Application / 用法

```markdown
## Pricing and Packaging Brief

### Target Segment
[目标客群]

### Value Metric
[按座席 / 按使用量 / 按项目数等]

### Plan Structure
- [套餐]

### Packaging Logic
[为什么这样分层]

### Risks
- [风险]
```

## Examples / 示例

好：

- “按 monthly active workspaces 收费，因为协作价值主要在 workspace 层面体现。”

差：

- “把热门功能都塞到高价档，看看会不会有人买。”

## Common Pitfalls / 常见误区

- value metric 选得很弱
- 套餐太复杂
- 升级逻辑对用户不透明
- 为了覆盖所有边缘场景，把套餐做成难以解释的拼装结构

## References / 关联项

- `template.md`
- `../revenue-metrics-scorecard/SKILL.md`
- `../commercial-prd/SKILL.md`
