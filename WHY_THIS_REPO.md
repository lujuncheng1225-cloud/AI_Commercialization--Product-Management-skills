# Why This Repo

## 中文

市面上已经有很多 AI for PM 的资源了。

但大多数内容都卡在这几种形态里：

- 一组 Prompt
- 一堆模板
- 一篇篇零散方法论
- 看起来很全面，但很难长期复用

这个仓库想解决的是另一个问题：

**如何把优秀产品经理的工作方式，沉淀成一套能长期复用、能跨工具迁移、能被 agent 正确执行的系统。**

所以它和普通提示词库不一样。

### 1. 它不是“收集 Prompt”，而是“设计工作系统”

这里的重点不是多给几个提问句式，而是把 PM 工作拆成：

- `skills`
- `commands`
- `routing`
- `review gates`
- `evals`
- `private context`

也就是说，关注点从“怎么写一句 prompt”转向“怎么稳定完成一类工作”。

### 2. 它不只追求更快产出，而是更强判断

很多 AI PM 内容的默认目标是：

- 更快写 PRD
- 更快给建议
- 更快生成框架

这个仓库更关心的是：

- 有没有先澄清问题
- 有没有命中正确 workflow
- 有没有明确主判断
- 有没有把证据和假设分开
- 有没有给出可执行的下一步

### 3. 它把“专业可靠性”放在“内容数量”前面

仓库不是靠堆 100 个场景来显得强，而是靠下面这些东西提高稳定性：

- 明确的 command / skill 路由
- 输出标准
- review gates
- eval cases
- 稀疏上下文策略

这让它更像一个专业系统，而不只是一个内容库。

### 4. 它同时服务人和 agent

大多数 PM 资源只适合人读，或者只适合模型消费。

这个仓库同时考虑：

- 人怎么理解
- agent 怎么调用
- 不同平台怎么接
- 输出怎么保持一致

这就是为什么它不仅有 `skills/` 和 `commands/`，还有：

- `agent/`
- `adapters/`
- `evals/`
- `private/`

### 5. 它更接近 AI 时代的 PM 操作系统

如果你只是要几个提示词，这个仓库会显得有点“重”。

但如果你想要的是：

- 一套长期复用的 PM 工作方式
- 一套能服务 AI PM 与商业化 PM 的系统
- 一套能逐步长成你自己团队工作底座的资产

那这套仓库就更接近你真正需要的东西。

## English

There are already many AI-for-PM resources out there.

Most of them fall into one of these patterns:

- prompt collections
- template bundles
- disconnected frameworks
- broad content that is hard to reuse in real work

This repository is trying to solve a different problem:

**how to turn strong product management practice into a reusable system that can travel across tools, teams, and agents.**

That is why this repo is different.

### 1. It is not a prompt library. It is a working system.

The main unit here is not "a clever prompt."
It is a structured workflow layer made of:

- `skills`
- `commands`
- `routing`
- `review gates`
- `evals`
- `private context`

### 2. It prioritizes judgment, not just output speed.

The goal is not just to write faster.
The goal is to improve:

- clarification quality
- routing quality
- decision quality
- evidence discipline
- next-step quality

### 3. It optimizes for professional reliability.

This repo tries to be more dependable by using:

- explicit routing
- output standards
- review gates
- eval cases
- sparse-context rules

### 4. It is designed for both humans and agents.

The repository is meant to work for:

- people learning and applying PM thinking
- agents executing reusable PM workflows
- teams trying to keep output standards consistent across tools

### 5. It is closer to a PM operating system than a content collection.

If you only want prompts, this repo will feel overbuilt.

If you want a reusable PM operating system for the AI era, that is exactly what it is trying to become.
