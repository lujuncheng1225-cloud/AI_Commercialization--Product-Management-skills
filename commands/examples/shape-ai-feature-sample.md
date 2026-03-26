# Sample Output: Shape AI Feature

## 1. Decision

- `先做 PoC 或小实验`

主判断：

- 这个方向值得继续，但现在还不适合直接进入 AI PRD。
- 当前最有价值的不是做“自动给结论的研究助手”，而是先做“洞察提炼辅助工具”。

为什么不是其他选项：

- 不是 `进入 AI PRD`：
  评估和风险边界还不够清楚，尤其是 unsupported claims 的容忍度和 fallback 体验。
- 不是 `暂缓`：
  这个问题真实存在，而且 AI 在“提炼结构化洞察”上有明显潜力。

## 2. Problem Statement

- PM 团队在整理访谈记录时耗时高，且不同人提炼出来的洞察质量不稳定。
- 用户真正需要的不是“一段 AI 摘要”，而是更快地得到 pains、workarounds 和 opportunity themes，并保留原文依据。

## 3. Task Decomposition

### Goal

- 把一个模糊的 AI 研究助手点子，收敛成可评估、可做风险判断的 feature definition。

### Work Steps

1. 先确认真实用户任务
   - Output: 问题定义
   - Check: 能说明为什么用户要的是结构化洞察而不是摘要

2. 定义 AI feature brief
   - Output: 输入、输出、质量门槛、失败模式、fallback
   - Check: brief 不是在展示模型能力，而是在定义产品价值

3. 定义评估方案
   - Output: offline test set、metrics、blocking threshold
   - Check: 能说明什么结果会让项目从 go 变 no-go

4. 做风险评审
   - Output: 主要风险和缓解动作
   - Check: 至少覆盖 hallucination、脱离原文语境、错误自信

## 4. AI Feature Brief

### User Job

- 把访谈逐字稿快速整理成结构化研究洞察，并保留可追溯证据。

### Trigger

- 上传访谈 transcript 或粘贴逐字稿后触发。

### Inputs

- transcript
- 受访人角色
- 研究主题或研究问题

### Outputs

- pains
- workarounds
- opportunity themes
- 每条结论对应的原文片段

### Quality Bar

- 不得输出原文中没有表达过的强结论
- 每个 theme 至少附一个支持片段

### Failure Modes

- 过度抽象，导致原文语境丢失
- 把弱信号写成确定性结论

### Fallback Behavior

- 低置信度时只返回 candidate themes 和 supporting quotes，不直接总结成正式 insight

### Why This Should Exist As A Product Feature

- 团队的真实瓶颈在“把访谈材料变成可讨论洞察”，这属于稳定、重复、高耗时任务，值得产品化。

## 5. Evaluation Plan

### Offline Test Set

- 50 份真实访谈逐字稿
- 覆盖常见样本、边界模糊样本、低质量表达样本

### Metrics

- theme accuracy
- unsupported claims
- edit rate

### Failure Thresholds

- unsupported claims 超过阈值则不能上线

### Stress Cases

- 访谈内容自相矛盾
- 受访者表达含糊且信息稀疏

## 6. Risk Review

- 主要风险不是“做得不够炫”，而是把研究辅助工具误做成自动替代研究判断的工具
- 缓解动作：
  - 每条结论必须附原文片段
  - 默认要求人工确认再进入正式研究结论

## 7. Review Gates

### Gate 1: Fit Check

- Pass
- 当前输出回答的是“该做成什么样的 AI 功能”，不是泛泛介绍模型能力

### Gate 2: Reasoning Check

- Pass with caution
- 已有主判断，但真正的上线边界仍依赖 PoC 结果来确认

### Gate 3: Integration Check

- Pass
- 问题定义、feature brief、评估和风险彼此一致
