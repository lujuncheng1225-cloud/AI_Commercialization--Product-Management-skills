# Start Here

这是这个仓库的中文主入口。

如果你只记住三件事：

1. 先选一个 skill 或 command
2. 给一个真实业务问题
3. 先让 agent 问澄清问题，再开始产出

## 从哪里开始

### 我需要一个 PM 产物

- `skills/problem-statement/SKILL.md`
- `skills/prd-development/SKILL.md`
- `skills/ai-feature-brief/SKILL.md`
- `skills/pricing-packaging-brief/SKILL.md`
- `skills/revenue-metrics-scorecard/SKILL.md`
- `skills/llm-evaluation-plan/SKILL.md`

### 我需要一个判断或诊断

- `skills/prioritization-advisor/SKILL.md`
- `skills/model-selection-advisor/SKILL.md`
- `skills/ai-risk-review/SKILL.md`
- `skills/conversion-funnel-diagnostic/SKILL.md`
- `skills/retention-levers-review/SKILL.md`

### 我需要一条完整工作流

- `commands/write-prd.md`
- `commands/shape-ai-feature.md`
- `commands/prepare-ai-launch.md`
- `commands/commercial-strategy-review.md`
- `commands/commercial-growth-review.md`
- `commands/write-commercial-prd.md`

## 推荐用法

```text
Using skills/problem-statement/SKILL.md，帮我定义试用到付费转化下降的问题。先问澄清问题，再给出 markdown 输出。
```

```text
Run commands/shape-ai-feature.md for this request: 为 PM 团队设计一个 AI copilot，帮他们把访谈记录整理成 insight。
```

```text
Run commands/commercial-growth-review.md for this request: 诊断为什么激活用户没有转成付费。
```

```text
Run commands/commercial-strategy-review.md for this request: 评审我们下一个季度的商业化增长策略。
```

## 仓库里的组织方式

- `component`：做好一个产物
- `interactive`：通过提问来判断和推荐
- `workflow`：把一类 PM 工作拆成多阶段
- `command`：把多个 skill 串起来变成复用流程

## 常用脚本

```bash
bash ./scripts/find-a-skill.sh --list-all
bash ./scripts/find-a-skill.sh --keyword pricing
bash ./scripts/find-a-command.sh --list-all
python3 ./scripts/generate-catalog.py
```
