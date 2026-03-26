# Eval Case 07: PRD Decomposition And Review

## Task

请帮我写一份 PRD，目标是提升我们 self-serve SaaS 新用户的 onboarding completion。

已知背景：

- 用户注册后要完成 5 步设置
- 目前 completion rate 低
- 团队内部已经有人提议“直接把步骤砍半”
- 但还不确定真正问题是步骤太多、信息太早收集，还是价值出现太慢
- 这轮资源只够做一次中等规模改版

## Expected Route

- Primary route:
  - `commands/write-prd.md`

## Why This Route

- 这是标准 PRD 成文任务
- 但在当前信息下，不应该直接一口气展开详细方案
- 应先做任务拆解，再在交付前做结构化审查

## Must-Have Signals

- 应先拆解关键步骤，而不是直接进入长篇 PRD
- 应承认“砍步骤”只是候选方案，不应直接当成问题答案
- 应在最终输出前体现 review gate 思维，至少指出是否存在 reasoning 或 integration 风险
- 应说明在当前资源限制下，为什么是这个版本而不是更大版本

## Failure Conditions

- 直接把“减少步骤数”写成问题定义
- 一上来给完整方案，却没有拆解过程或检查点
- 没有说明为什么不是更大范围改版
- 输出里完全没有审查或返工意识
