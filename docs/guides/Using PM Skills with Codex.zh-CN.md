# Using PM Skills with Codex

在 Codex 里，你可以直接引用这个仓库里的技能文件。

## 基本用法

直接告诉 Codex 使用哪个文件，并说明工作方式。

例如：

```text
Using skills/ai-feature-brief/SKILL.md, help me define an AI interview summarization feature for PMs. Ask up to 3 clarifying questions first, then return the final output in markdown.
```

## 推荐提示结构

```text
Using skills/<skill-name>/SKILL.md:
1. Ask up to 3 clarifying questions.
2. Follow the skill sections.
3. Show output in markdown.
4. End with assumptions, risks, and next steps.
```

## 命令工作流

如果你不想一个技能一个技能调用，可以直接让 Codex 跑命令文件：

```text
Run commands/shape-ai-feature.md for this request: AI copilot for product discovery notes.
```

