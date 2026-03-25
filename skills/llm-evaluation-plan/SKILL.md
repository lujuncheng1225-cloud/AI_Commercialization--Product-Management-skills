---
name: llm-evaluation-plan
description: 为 AI 功能定义离线与线上评估方案，包括样本、指标和阻断阈值。适用于上线前需要明确质量标准的场景。
type: component
best_for:
  - "为 AI 功能设计评估方案"
  - "把主观质量讨论变成可测方案"
  - "定义 LLM 功能上线门槛"
scenarios:
  - "为 AI 会议纪要做评估方案"
  - "怎么评估 AI 支持助手的质量"
---

## Purpose / 用途

用一套可执行的评估方案，把“这个 AI 好不好”从感觉题变成证据题。

## Key Concepts / 核心概念

- Offline evaluation：上线前用代表性样本测
- Online evaluation：上线后看真实行为和纠错信号

常见维度：

- 准确性
- 完整性
- groundedness
- latency
- 用户接受度
- 出错恢复能力

### Evaluation Discipline / 评估纪律

评估计划不是为了证明“模型不错”，而是为了判断：

1. 这项能力在真实任务上是否足够可靠
2. 哪些失败会阻断上线
3. 哪些场景需要 fallback 或人工接管

### Test Set Design Rule / 样本设计规则

测试集至少应覆盖三类样本：

- 常见高频样本
- 高价值高风险样本
- 容易翻车或边界模糊的样本

如果只有“正常样本”，评估结果通常会虚高。

### Disconfirming Checks / 反证检查

在评估计划里，必须主动加入会削弱结论可信度的检查：

- 分布外或低质量输入是否显著拉低表现
- 少量高风险 case 是否足以改变上线判断
- 好结果是不是靠提示词、样本筛选或人工预处理堆出来的

### Launch Confidence Rule / 上线置信度规则

如果一个功能在常见样本上表现不错，但在高风险样本上失败代价过高：

- 可以保留方向性信心
- 不能直接给出高置信度放量结论

## Application / 用法

```markdown
## Evaluation Plan

### Feature
[功能]

### Offline Test Set
- [样本场景]

### Metrics
- [指标]

### Failure Thresholds
- [什么情况不能上线]

### Stress Cases
- [最容易翻车的样本]

### Online Signals
- [线上信号]

### What Would Change The Launch Decision
- [哪些额外结果会让 go 变 no-go，或让 no-go 变 limited rollout]
```

## Examples / 示例

好：

- “抽 50 份代表性会议记录，评估 action-item 抽取准确率、幻觉率和最终 edit rate。”

差：

- “找几个人试一下感觉好不好。”

## Common Pitfalls / 常见误区

- 用玩具样本评估
- 只看速度不看 usefulness
- 没有 blocking threshold
- 只测平均表现，不测高风险 case
- 用筛过的数据集证明质量，却不检查真实输入分布
- 评估结果看起来不错，但没有说明什么会推翻上线信心

## References / 关联项

- `template.md`
- `../ai-feature-brief/SKILL.md`
- `../ai-risk-review/SKILL.md`
