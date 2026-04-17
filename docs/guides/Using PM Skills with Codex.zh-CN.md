# 在 Codex 中使用 PM Skills

Codex 可以直接读取这个仓库里的 `skill` 和 `command` 文件。

如果你希望 Codex 不只是“读一个文件后自由发挥”，而是像一套可迁移的 PM agent 系统，建议先让它读取：

- `AGENTS.md`
- `agent/ROUTING.md`
- `agent/OUTPUT_STANDARDS.md`
- `agent/DOMAIN_CONTEXT.md`
- `agent/SPARSE_CONTEXT_POLICY.md`
- `adapters/CODEX.md`
- `evals/README.md`
- `private/README.md`

## 基本模式

明确指定一个 skill 或 command 文件，再说明任务、约束和输出方式。

例如：

```text
Using skills/problem-statement/SKILL.md，帮我定义新用户激活率低的问题。先问不超过 3 个澄清问题，再用 markdown 输出。
```

## Skill 类型

- `component`：产出一个具体物料。
- `interactive`：先提问，再给判断或建议。
- `workflow`：分阶段完成一类 PM 工作。

## Command 工作流

如果你不想一个 skill 一个 skill 地调用，可以直接运行 command：

```text
Run commands/write-prd.md for this request: 为 onboarding completion 提升写一份 PRD。
```

商业化任务优先从这些命令开始：

- `commands/commercial-growth-review.md`
- `commands/commercial-strategy-review.md`
- `commands/redesign-pricing-packages.md`
- `commands/write-commercial-prd.md`

## 推荐提示结构

```text
Using skills/<skill-name>/SKILL.md:
1. 先问不超过 3 个澄清问题。
2. 严格按照 skill 里的章节推进。
3. 用 markdown 输出。
4. 最后补充假设、风险和下一步。
```

更大的任务可以这样写：

```text
Run commands/<command-name>.md for this request:
<描述产品、用户、目标、已有数据、约束和你想要的输出。>
```

## 常见问题

- 输出太泛：补充产品阶段、用户分群、KPI、时间范围和约束。
- 结构跑偏：明确要求按 skill 的章节输出。
- 任务太大：先跑一个阶段，不要一次要全部。
- 信息敏感：把长期可复用的信息放在 `private/`，当前任务只提供必要上下文。
