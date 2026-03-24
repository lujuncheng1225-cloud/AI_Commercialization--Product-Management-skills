# Cursor Adapter

这个文件定义如何把本仓库接入 Cursor 规则或项目上下文。

## Recommended Read Order / 推荐读取顺序

让 Cursor 在项目规则或工作流提示中优先引用：

1. `AGENTS.md`
2. `agent/ROUTING.md`
3. `agent/OUTPUT_STANDARDS.md`
4. `agent/DOMAIN_CONTEXT.md`
5. `agent/SPARSE_CONTEXT_POLICY.md`

## Recommended Project Rule / 推荐项目规则

可放入 Cursor 的项目规则中：

```text
Use this repository as a PM agent system.

Always read and follow:
- AGENTS.md
- agent/ROUTING.md
- agent/OUTPUT_STANDARDS.md
- agent/DOMAIN_CONTEXT.md
- agent/SPARSE_CONTEXT_POLICY.md

Route requests to the appropriate command or skill before answering.
Prefer commands for multi-step PM work.
Ask clarifying questions when required inputs are missing.
Do not invent metrics, baselines, or company context.
If context is sparse, produce a bounded answer instead of pretending the information is complete.
Keep outputs aligned with the selected file's structure and decision output.
```

## Usage Pattern / 使用模式

- 如果是项目级长期使用，把上面的规则配置成项目规则
- 如果是一次性任务，在 prompt 里再明确指定目标任务

示例：

```text
Route this request using the repository rules, then execute the best command:
诊断我们为什么 activation 很高，但付费转化很低。
```

## Avoid / 避免

- 只把 skill 文件当作参考资料，不当作执行规则
- 不先路由，直接由模型猜任务阶段
- 输出只给建议，不给明确结论
