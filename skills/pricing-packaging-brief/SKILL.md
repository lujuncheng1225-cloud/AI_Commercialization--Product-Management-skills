---
name: pricing-packaging-brief
description: 用结构化输入定义或调整定价与套餐结构，明确目标客户、价值指标、免费层边界、套餐层级、升级触发点与风险取舍。适用于定价新建、改版、AI 增值包或商业化实验前的推演。
type: component
best_for:
  - "设计 SaaS 定价和套餐"
  - "重做 plan 结构"
  - "把产品价值和商业模式连起来"
  - "把模糊的定价问题拆成可推演的商业 brief"
scenarios:
  - "重做 free、pro、team 套餐"
  - "为 AI 增值包写一份 pricing brief"
  - "为积分制、订阅制或按量付费产品设计第一版定价"
---

## Purpose / 用途

把模糊的“帮我定个价”拆成可推演的定价与套餐简报。先定义产品价值和价值指标，再讨论价格档位。

## Key Concepts / 核心概念

一个 pricing brief 至少说明：

1. 目标客户
2. value metric
3. plan tiers
4. packaging logic
5. upgrade path
6. free tier boundary
7. 风险与取舍

### Input Protocol / 输入协议

优先收集这些信息；信息不足时，把缺口写成假设，不要直接编结论。

1. 产品形态：核心交付物、目标客户、用户按什么维度使用
2. 价值锚点：用户为什么付费、价值是否随用量增长、复购或续费来自哪里
3. 免费/付费边界：免费层给到哪里、付费层卡什么、升级触发点是什么
4. 竞品锚点：竞品价格区间、免费层边界、付费层的功能钩子
5. 业务约束：收入目标、成本限制、老用户保护、上线节奏

### First-Principles Check / 第一性原理检查

在讨论价格档位前，先回到底层商业逻辑：

1. 用户真正购买的价值单位是什么
2. 价值主要随着哪种使用行为增长
3. 免费层是否已经交付了付费层应该承担的核心价值
4. 当前套餐设计继承了哪些历史包袱，而不是当前价值结构

### Occam Guardrail / 奥卡姆约束

如果两个套餐结构都能覆盖主要客群，优先保留：

- 更容易被用户理解的
- 升级路径更直接的
- 对销售、运营和计费系统更简单的

不要默认通过增加档位、限制项和例外规则来制造“精细化”。

## Workflow / 推演顺序

1. 先确认目标客户和购买动机。
2. 再选择 value metric，并说明为什么不选其他指标。
3. 设计套餐层级，明确每档服务哪类用户。
4. 画出免费层边界和升级触发点。
5. 用竞品价格校准定位空间，而不是照抄价格。
6. 输出小范围验证建议和风险取舍。

## Application / 用法

```markdown
## Pricing and Packaging Brief

### Input Snapshot
- Product / core deliverable: [产品和核心交付物]
- Target segment: [目标客群]
- Core value: [核心价值]
- Competitor anchor: [竞品价格和套餐锚点]

### Value Metric Hypothesis
- Primary metric: [按座席 / 按使用量 / 按项目数 / 按结果等]
- Why: [为什么这个指标最贴近价值增长]
- Do not use: [不建议使用的指标及原因]

### Plan Structure
- Free: [免费层边界]
- Pro: [核心付费层]
- Team / Studio: [高阶或团队层]

### Upgrade Trigger
- [用户在什么使用节点会升级]

### Packaging Logic
[为什么这样分层，哪些权益负责转化，哪些权益负责利润]

### Risks and Tradeoffs
- [可能伤害什么]
- [需要保护什么]

### Validation Plan
- [小范围价格实验或灰度策略]
```

## Examples / 示例

好：

- “按 monthly active workspaces 收费，因为协作价值主要在 workspace 层面体现。”
- “免费层保留单人试用和基础导出，批量导出、团队协作和商用授权放入付费层，因为升级动机来自规模化使用。”

差：

- “把热门功能都塞到高价档，看看会不会有人买。”
- “竞品卖 99 元，所以我们也卖 99 元。”

## Common Pitfalls / 常见误区

- value metric 选得很弱
- 套餐太复杂
- 升级逻辑对用户不透明
- 免费层给掉了用户最愿意付费的核心价值
- 只看竞品价格，不看竞品的分层逻辑
- 为了覆盖所有边缘场景，把套餐做成难以解释的拼装结构

## References / 关联项

- `template.md`
- `../revenue-metrics-scorecard/SKILL.md`
- `../commercial-prd/SKILL.md`
