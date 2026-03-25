---
name: ai-feature-brief
description: 定义一个 AI 功能的用户任务、输入、输出、质量标准和 fallback。适用于把模糊 AI 点子整理成可讨论方案的场景。
type: component
best_for:
  - "定义 AI 功能"
  - "在写完整 PRD 前先把 AI 能力说清楚"
  - "减少模糊的 AI 想法"
scenarios:
  - "定义一个 AI 访谈总结功能"
  - "把 AI copilot 点子整理成产品 brief"
---

## Purpose / 用途

在团队真正投入开发前，先把 AI 功能定义清楚。

## Key Concepts / 核心概念

一个 AI feature brief 至少要说明：

1. 用户要完成什么任务
2. 什么时候触发
3. 输入是什么
4. 输出是什么
5. 什么叫“足够好”
6. 失败模式是什么
7. fallback 怎么处理

### Product Reality Check / 产品现实检查

AI feature brief 不是在描述“模型能做什么”，而是在判断“这件事值不值得以 AI 方式交付”。

在成文前先检查：

1. 用户真正购买或使用的，是结果、速度、判断辅助，还是陪伴感
2. 如果拿掉 AI，这个需求是否仍然成立
3. 如果这个功能偶尔出错，用户是否仍愿意继续使用

### Value vs Capability / 价值与能力区分

优先区分：

- `模型会不会做`
- `用户会不会用`
- `产品应不应该把它做成一个正式功能`

如果一个想法只能证明“模型能演示”，不能说明：

- 触发场景稳定存在
- 输出能嵌进真实流程
- 错误成本可接受

则不要把它写成正式 feature。

### Disconfirming Checks / 反证检查

在把一个 AI 点子写成 brief 前，先问：

- 这是不是一个本来就该通过更好 UX、模板、搜索或规则系统解决的问题
- 用户要的到底是自动化，还是更快进入人工可控的下一步
- 如果用户必须大幅编辑结果，这个功能是否只是把工作前移，而不是减少工作

## Application / 用法

```markdown
## AI Feature Brief

### User Job
[用户任务]

### Trigger
[触发点]

### Inputs
- [输入]

### Outputs
- [输出]

### Quality Bar
- [什么算好]

### Failure Modes
- [最重要的失败方式]

### Fallback Behavior
- [低置信度时怎么办]

### Why This Should Exist As A Product Feature
- [为什么值得做成正式功能，而不是 demo / prompt / 内部工具]
```

## Examples / 示例

好：

- “把访谈逐字稿总结成 pains、workarounds 和 opportunity themes，并附原文片段。”

差：

- “用 AI 让调研更容易。”

## Common Pitfalls / 常见误区

- 把模型能力当成用户价值
- 没有 fallback
- 没有质量门槛
- 把“看起来厉害”误当成“值得产品化”
- 没写最关键失败模式，只写理想路径
- 用户必须重度编辑结果，但 brief 里仍假装这是自动化价值

## References / 关联项

- `template.md`
- `../llm-evaluation-plan/SKILL.md`
- `../ai-risk-review/SKILL.md`
