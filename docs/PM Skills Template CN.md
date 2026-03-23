# PM Skills 中文模板

这个模板用于快速起一个新的 PM skill，风格参考当前仓库。

## 1. Frontmatter

```yaml
---
name: skill-name
description: 这个技能做什么，以及什么时候该用它。
type: component
best_for:
  - "最适合的场景"
scenarios:
  - "一个真实请求示例"
---
```

## 2. 正文结构

```markdown
## Purpose

说明这个技能解决什么问题，输出什么结果。

## Key Concepts

列出这个技能依赖的关键概念、框架、判断原则和反模式。

## Application

给出执行步骤、推荐提问方式、建议输出格式。

## Examples

至少给一个好的例子，必要时给一个坏的例子。

## Common Pitfalls

列出 3-5 个常见误区。

## References

列出关联技能、模板文件或参考资料。
```

## 3. AI PM 技能额外建议

- 如果是 AI 功能，补上输入、输出、失败模式、回退策略
- 如果要上线，补上评估方案和风险审查
- 如果依赖上下文质量，明确用户需要提供哪些材料
- 如果是交互型技能，先问 3-4 个高价值问题，不要一开始就让用户倒所有背景

## 4. 描述怎么写

好的 `description` 必须同时回答两件事：

1. 它能做什么
2. 什么时候该调用它

例如：

- 差的写法：`Help with AI products`
- 好的写法：`Define an AI feature with clear user job, inputs, outputs, fallback behavior, and quality bar. Use when turning an LLM idea into a scoped product concept.`

