# Claude Code Adapter

这个文件定义如何把本仓库接入 Claude Code，并保持与其他平台尽量一致的行为。

## Startup Read Order / 启动读取顺序

建议 Claude Code 每次处理新任务时先读取：

1. `AGENTS.md`
2. `agent/ROUTING.md`
3. `agent/OUTPUT_STANDARDS.md`
4. `agent/DOMAIN_CONTEXT.md`
5. 目标 `command` 或 `skill`

## Recommended Bootstrap Prompt / 推荐启动提示词

```text
Use this repository as my PM agent operating system.

Read these files first:
- AGENTS.md
- agent/ROUTING.md
- agent/OUTPUT_STANDARDS.md
- agent/DOMAIN_CONTEXT.md

Then route the request to the best command or skill in this repo.
If critical inputs are missing, ask up to 3 clarifying questions first.
Keep the output aligned with the selected file and the output standards.

Task:
[在这里填具体任务]
```

## Claude Code-Specific Guidance / 平台建议

- Claude Code 在多步流程上通常表现稳定，适合优先执行 `commands/`
- 但不要因为它能长链推理，就跳过输入协议和决策出口
- 如果任务跨 discovery、定义、评审多个阶段，应按 command 分阶段输出

## Good Operating Habit / 推荐习惯

- 先声明当前命中的 `command` / `skill`
- 再说明是否需要澄清问题
- 最后按固定结构产出

## Avoid / 避免

- 用一个长 prompt 替代仓库里的方法结构
- 忽略 `Decision Output`
- 在没有评估信息时给上线结论
