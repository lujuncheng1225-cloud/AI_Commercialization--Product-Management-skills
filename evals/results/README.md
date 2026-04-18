# Eval Results

这个目录用于记录每次实际运行 eval 的结果。

目标不是堆报告，而是留下三类信息：

1. 哪个平台、模型和 adapter 被评估
2. 每个 case 的实际 route 和得分
3. 失败模式是否需要反向修正 `agent/`、`adapters/`、`commands/` 或 `skills/`

## File Naming

建议按日期和平台命名：

```text
YYYY-MM-DD-<platform>-<model>.md
```

示例：

```text
2026-04-18-codex-gpt-5.md
```

## Minimum Record

每份结果至少包含：

- Date
- Platform
- Model
- Adapter used
- Cases run
- Routing score
- Output score
- Total score
- Main failure pattern
- Recommended next action

## Decision Rule

- `9-10`：可以作为稳定接入方式
- `7-8`：可以使用，但需要观察失败模式
- `5-6`：只能局部使用，需要修规则或 adapter
- `<5`：不建议接入正式工作流

## Template

复制 `evals/SCORECARD_TEMPLATE.md` 作为单个 case 的记录模板。
