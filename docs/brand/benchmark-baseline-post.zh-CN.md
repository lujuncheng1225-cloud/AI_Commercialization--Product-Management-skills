# PM Agent Benchmark 第一份基线，已经出来了

我刚把这套库的第一份公开 benchmark 基线跑出来了。

先把最重要的话说在前面：

这不是第三方独立评测。
这是当前 Codex App session 的 `self-run baseline`。

但我还是决定公开。

因为 benchmark 最怕两件事：

- 只讲方法，不给结果
- 只发好看的分数，不讲边界

这次我固定了 4 个 case：

- AI feature shaping
- sparse-context robustness
- PRD decomposition and review
- pricing and packaging boundary

结果是：

- Routing：`12 / 12`
- Output：`25 / 28`
- Total：`37 / 40`

我没有把它写成“模型很强”。

我更关心的是失败模式。

这轮最清楚的两个问题是：

1. 稀疏上下文下，系统还是会有点过早结构化
2. PRD 场景下，review gate 的表达还可以更锋利

这才是 benchmark 真正有价值的地方。

不是自夸。
是找到下一步该修哪里。

如果你对 “PM Operating System 到底怎么证明自己” 感兴趣，可以直接看：

- 基线结果：`evals/results/2026-04-18-codex-app-gpt-5-self-run.md`
- Leaderboard：`docs/benchmarks/LEADERBOARD.md`
- First Public Run：`docs/benchmarks/FIRST_PUBLIC_RUN.md`

这套东西我会继续往前推。

下一步不是多写几个 skill。
而是让 benchmark 真正变成别人可以引用的标准。
