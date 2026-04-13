# Start Here

这是这个仓库的中文主入口。

如果你只记住三件事：

1. 先选一个 `command`，只有单点任务才直接选 `skill`
2. 给一个真实业务问题，而不是一句空泛方向
3. 默认按 `澄清 -> 拆解 -> 产出 -> 审查` 的顺序推进

## 一条默认工作流

如果你不确定怎么用，默认按这条顺序：

1. `workshop-facilitation`
   用来把模糊需求问清楚
2. `task-decomposition`
   用来把大任务拆成可检查的小步骤
3. 目标 `skill` 或 `command`
   用来真正产出文档、判断或方案
4. `review-gates`
   用来在交付前检查是否真的能用

这套节奏特别适合：

- 写 PRD
- 定义 AI 功能
- 做商业化诊断
- 做复杂分析或评审

如果你要把这个仓库接到不同电脑、不同 agent 上，先读：

- `agent/ROUTING.md`
- `agent/OUTPUT_STANDARDS.md`
- `agent/DOMAIN_CONTEXT.md`
- `agent/SPARSE_CONTEXT_POLICY.md`
- `adapters/CODEX.md`
- `adapters/CLAUDE_CODE.md`
- `adapters/CURSOR.md`
- `evals/README.md`
- `private/README.md`

## 从哪里开始

### 我需要一个 PM 产物

- `skills/problem-statement/SKILL.md`
- `skills/prd-development/SKILL.md`
- `skills/ai-feature-brief/SKILL.md`
- `skills/pricing-packaging-brief/SKILL.md`
- `skills/revenue-metrics-scorecard/SKILL.md`
- `skills/llm-evaluation-plan/SKILL.md`
- `skills/task-decomposition/SKILL.md`
- `skills/review-gates/SKILL.md`

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
- `commands/redesign-pricing-packages.md`
- `commands/write-commercial-prd.md`

## 推荐用法

```text
Using skills/problem-statement/SKILL.md，帮我定义试用到付费转化下降的问题。先问澄清问题，再给出 markdown 输出。
```

```text
Using skills/task-decomposition/SKILL.md，帮我把“写 onboarding 改版 PRD”拆成一串可检查的小步骤。
```

```text
Run commands/shape-ai-feature.md for this request: 为 PM 团队设计一个 AI copilot，帮他们把访谈记录整理成 insight。
```

```text
Run commands/write-prd.md for this request: 为 self-serve 新用户 onboarding 改版写一份 PRD。先拆解，再成文，最后做 review gates。
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

当前最推荐的不是“随机挑 skill”，而是：

- 模糊任务优先走 `command`
- 大任务优先加上 `task-decomposition`
- 交付前优先过 `review-gates`

## 常用脚本

```bash
bash ./scripts/find-a-skill.sh --list-all
bash ./scripts/find-a-skill.sh --keyword pricing
bash ./scripts/find-a-command.sh --list-all
python3 ./scripts/validate-library.py
python3 ./scripts/check-style-consistency.py
python3 ./scripts/generate-catalog.py
```
