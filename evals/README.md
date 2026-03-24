# Evals

这个目录提供一套跨平台、可迁移的 agent 评估基线。

目标不是测“哪个模型更聪明”，而是测：

- 是否命中了正确的 `command` 或 `skill`
- 是否按仓库的专业标准输出
- 是否在缺信息时先澄清
- 是否避免了臆造数据和背景

## What To Evaluate / 评什么

这套 evals 默认评 3 件事：

1. `Routing`
   - 任务是否命中了正确的 `command` 或 `skill`
2. `Output Quality`
   - 输出是否符合 `agent/OUTPUT_STANDARDS.md`
3. `Professional Reliability`
   - 是否出现阶段错配、臆造、空话或错误自信
4. `Sparse-Context Robustness`
   - 在信息很少时是否仍然稳健

## How To Use / 怎么用

在任意 agent 平台上都可以这样使用：

1. 让 agent 先读取：
   - `AGENTS.md`
   - `agent/ROUTING.md`
   - `agent/OUTPUT_STANDARDS.md`
   - `agent/DOMAIN_CONTEXT.md`
2. 给它一份 `evals/cases/*.md` 里的任务
3. 记录它选择的 `command` / `skill`
4. 用 `evals/rubrics/routing-rubric.md` 和 `evals/rubrics/output-rubric.md` 打分
5. 遇到稀疏上下文 case 时，同时检查 `agent/SPARSE_CONTEXT_POLICY.md` 是否被正确遵守

## Scoring Model / 评分模型

建议每个 case 评分拆成两部分：

- `Routing`: 0-3 分
- `Output`: 0-7 分

总分 `10` 分。

### Recommended Threshold / 建议阈值

- `9-10`：可直接复用
- `7-8`：可用，但还需要观察稳定性
- `5-6`：部分可用，规则或 prompt 需要修正
- `<5`：不通过，当前接入方式不可依赖

## Evaluation Discipline / 评估纪律

- 不要临时换题
- 不要因为某个 agent 会说漂亮话就给高分
- 不要只看最终文风，要看路由和判断是否正确
- 必须记录失败原因，而不是只记总分

## Suggested Workflow / 推荐流程

每次接入一个新平台时：

1. 先跑 `4` 个基础 case
2. 再跑 `1` 个稀疏上下文 case
3. 记录 route、结论和主要缺陷
4. 如果有系统性错误，先改 adapter 或启动 prompt
5. 修完后再重跑同一批 case

## Related Files / 相关文件

- `agent/ROUTING.md`
- `agent/OUTPUT_STANDARDS.md`
- `agent/SPARSE_CONTEXT_POLICY.md`
- `evals/rubrics/routing-rubric.md`
- `evals/rubrics/output-rubric.md`
- `evals/SCORECARD_TEMPLATE.md`
