---
name: prioritization-advisor
description: 根据产品阶段、团队环境和数据条件推荐优先级方法。适用于 RICE、ICE、value-effort 等方法选择场景。
type: interactive
best_for:
  - "选择优先级框架"
  - "减少 backlog 排序争论"
  - "给团队匹配合适的打分方法"
scenarios:
  - "我们有很多需求，但不知道该怎么排优先级"
  - "帮我在 RICE 和 value-effort 之间做选择"
---

## Purpose / 用途

根据上下文推荐最适合的优先级方法，而不是默认套一个流行框架。

## Key Concepts / 核心概念

- RICE：适合有一定数据基础
- ICE：适合快速轻量判断
- Value-Effort：适合快速做取舍
- Weighted Scoring：适合多方对齐

### Occam Rule / 奥卡姆剃刀规则

优先级讨论里，如果两个框架或两套排序逻辑都能支持当前决策，优先选：

- 假设更少的
- 解释成本更低的
- 团队更容易持续执行的

默认不要在信息稀疏时引入过度精细的打分系统。

## Application / 用法

最多问 4 个短问题：

1. 产品处在什么阶段
2. 团队和利益相关方环境如何
3. 当前主要卡在哪类优先级问题
4. 数据基础如何

输出结构：

```markdown
## Prioritization Recommendation

### Recommended Framework
[推荐框架]

### Why It Fits
- [原因]

### When Not To Use It
- [限制]

### How To Implement
1. [步骤]

### Fallback Option
[备选框架]
```

## Examples / 示例

好：

- “你们数据有限、利益相关方多、需要快速可视化取舍，因此更适合 value-effort 而不是 RICE。”

差：

- “专业团队都用 RICE。”

## Common Pitfalls / 常见误区

- 数据不足却推荐复杂框架
- 把战略取舍和 backlog 排序混在一起
- 只报框架名，不说落地方法
- 为了显得严谨而上复杂模型，但团队根本不会长期使用

## References / 关联项

- `../workshop-facilitation/SKILL.md`
