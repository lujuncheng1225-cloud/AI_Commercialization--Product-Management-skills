# Codex Adapter

这个文件定义如何把本仓库接入 Codex，并尽量获得稳定的一致表现。

## Startup Read Order / 启动读取顺序

在开始任何任务前，优先读取：

1. `AGENTS.md`
2. `agent/ROUTING.md`
3. `agent/OUTPUT_STANDARDS.md`
4. `agent/DOMAIN_CONTEXT.md`
5. `agent/SPARSE_CONTEXT_POLICY.md`
6. 如存在，再读取 `private/` 下相关文件
7. 对应的 `command` 或 `skill`

## Recommended Bootstrap Prompt / 推荐启动提示词

```text
Use this repository as a portable PM agent brain.

Before doing the task, read:
1. AGENTS.md
2. agent/ROUTING.md
3. agent/OUTPUT_STANDARDS.md
4. agent/DOMAIN_CONTEXT.md
5. agent/SPARSE_CONTEXT_POLICY.md

Then:
- decide whether this task should use a command or a single skill
- ask up to 3 clarifying questions if required inputs are missing
- follow the selected file closely
- keep the output consistent with agent/OUTPUT_STANDARDS.md

Task:
[在这里填具体任务]
```

## Codex-Specific Guidance / Codex 特定建议

- 如果任务复杂，优先让 Codex 明确声明选中的 `command` 或 `skill`
- 如果任务跨多个阶段，优先走 `command`
- 如果用户只要一个产物，才直接走单个 `skill`
- 如果输入明显不足，先提问，不要直接写正式产物
- 如果 `private/` 没有完整内容，仍应按稀疏上下文模式稳定工作

## Good Prompt Pattern / 推荐提示结构

```text
Read AGENTS.md and the files under agent/ first.

Then route this request to the most appropriate command or skill.
State which file you selected and why.
Ask clarifying questions only if the missing information would materially change the answer.
Follow the repository's output standards.

Request:
[你的请求]
```

## Avoid / 避免

- 只读一个 `SKILL.md` 就开始写
- 跳过路由层，直接自由发挥
- 不声明当前走的是哪个 command / skill
- 输出与当前任务阶段不匹配
