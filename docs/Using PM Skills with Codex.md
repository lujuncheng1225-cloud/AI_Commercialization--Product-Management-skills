# Using PM Skills with Codex

你可以直接让 Codex 读取这个仓库里的文件来工作。

如果你希望 Codex 不只是“读一个 skill 文件”，而是表现得像你跨设备可迁移的私人 PM agent，先读：

- `AGENTS.md`
- `agent/ROUTING.md`
- `agent/OUTPUT_STANDARDS.md`
- `agent/DOMAIN_CONTEXT.md`
- `adapters/CODEX.md`
- `evals/README.md`

## 基本模式

明确指定某个 skill 或 command 文件，然后说明工作方式。

例如：

```text
Using skills/problem-statement/SKILL.md，帮我定义新用户激活率低的问题。先问不超过 3 个澄清问题，再用 markdown 输出结果。
```

## Skill 类型

- `component`：产出一个东西
- `interactive`：先提问再推荐
- `workflow`：分阶段完成一类 PM 工作

## Command 用法

如果你不想一个 skill 一个 skill 地调用，可以直接跑 command：

```text
Run commands/write-prd.md for this request: 为 onboarding completion 提升写一份 PRD。
```

## 推荐提示结构

```text
Using skills/<skill-name>/SKILL.md:
1. Ask up to 3 clarifying questions.
2. Follow the skill sections.
3. Show output in markdown.
4. End with assumptions, risks, and next steps.
```

## 常见问题

- 输出太泛：补充产品阶段、用户分群、KPI、时间范围和约束
- 结构跑偏：明确要求按 skill 的章节来输出
- 任务太大：先跑一阶段，不要一次要全部
