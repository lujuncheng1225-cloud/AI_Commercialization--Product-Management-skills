# 这套库最能打的，不是 PRD，是定价和套餐判断

很多 PM AI 内容，一上来就去写 PRD。

但我越来越觉得，
真正能拉开差距的，不是文档写得快不快，
而是商业判断做得准不准。

所以这套库里我最看重的代表作，不是 PRD。

是这条：

`pricing-strategy -> commands/redesign-pricing-packages.md`

它处理的不是“给我一个价格”。

而是这些更难的问题：

- value metric 到底是什么
- 免费层边界应该画在哪
- 会员、积分、导出能力、商用授权分别承担什么角色
- 升级触发点到底是什么
- rollout 前该保护哪些 guardrails

这类问题一旦做对，
商业化会变得顺很多。

一旦做错，
你会发现：

- 用户看不懂为什么要买
- 高意图用户没有被正确承接
- 免费层和付费层互相打架
- 团队最后只能反复讨论“要不要涨价”

我想做的不是“定价 prompt”。

我想做的是把这类商业判断，沉淀成一套能复用、能被 agent 正确执行的系统。

如果你只看一个案例，
我建议先看这个：

- `docs/core/FLAGSHIP_CASES.md`
- `commands/redesign-pricing-packages.md`
- `commands/examples/redesign-pricing-packages-sample.md`

这比“再看一个 prompt 合集”更接近真实商业化工作。
