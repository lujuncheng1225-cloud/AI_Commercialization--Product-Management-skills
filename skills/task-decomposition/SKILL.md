---
name: task-decomposition
description: 把一个较大的 PM、AI PM 或商业化任务拆成可快速验证的执行步骤。适用于任务过大、容易失控、需要先把执行顺序和检查点想清楚的场景。
type: component
best_for:
  - "把大任务拆成小步骤"
  - "降低 PRD、评审或分析任务的失控风险"
  - "给 agent 或团队生成可执行计划"
scenarios:
  - "把一份复杂 PRD 写作任务拆成 30 分钟内可推进的步骤"
  - "把一次商业化诊断拆成若干可验证的小任务"
---

## Purpose / 用途

在真正执行前，先把大任务拆成一串足够小、足够清楚、每步都能检查的动作，避免“直接开做然后一路漂移”。

## Key Concepts / 核心概念

### Atomic Step Rule / 原子步骤规则

每一步都应该：

- 只解决一个主要问题
- 有清楚输出
- 完成后能立即检查是否过关

如果一个步骤完成后仍然不知道“算不算做完”，说明还不够小。

### Risk-First Ordering / 风险优先排序

优先做：

1. 能暴露方向错误的步骤
2. 能减少后续返工的步骤
3. 能显著影响方案选择的步骤

不要把最关键的不确定性留到最后。

### Review Hook / 审查挂钩

好拆解不只是顺序清单，还要写出：

- 哪一步之后应该停下来复核
- 哪些结果会导致回退
- 哪些步骤可以并行，哪些必须串行

## Application / 用法

```markdown
## Task Decomposition

### Goal
[这次任务最终要交付什么]

### Assumptions
- [关键假设]

### Work Steps
1. [步骤]
   - Output: [产出]
   - Check: [如何判断过关]

2. [步骤]
   - Output: [产出]
   - Check: [如何判断过关]

### Review Points
- [在哪些节点复核]

### Stop / Rework Conditions
- [什么情况下暂停或返工]
```

## Examples / 示例

好：

- “先确认问题定义，再拆成功指标和范围，最后才写详细需求；每一步结束后都能检查是否过关。”

差：

- “先写一版再慢慢改。”

### Strong Example / 强样例

```markdown
## Task Decomposition

### Goal
产出一份面向新用户 onboarding 改版的 PRD 草案，并能支持设计和工程进入细化讨论。

### Assumptions
- 当前最大问题发生在首次价值出现前
- 本轮先解决激活，不同时处理邀请后的协作问题

### Work Steps
1. 重新确认问题定义
   - Output: 一段明确的问题陈述
   - Check: 能回答“谁卡住、卡在哪、为什么现在要解决”

2. 拆出 success metrics 和 guardrails
   - Output: 1 个主指标 + 2-3 个配套指标
   - Check: 指标能支持 go / no-go 判断，而不只是观察

3. 收敛本轮 scope
   - Output: must-have / out-of-scope 清单
   - Check: 每个 must-have 都能解释它如何影响主指标

4. 写核心流程和需求
   - Output: PRD 主体
   - Check: 方案、范围、风险之间没有明显冲突

5. 做交付前复核
   - Output: 返工点或可交付结论
   - Check: 至少经过一次 fit / reasoning / integration 审查

### Review Points
- Step 1 后复核是否把方案误写成问题
- Step 3 后复核是否 scope 失控
- Step 5 后决定是否可直接交付

### Stop / Rework Conditions
- 如果问题定义无法支撑主指标，停止写 PRD，回到 discovery
- 如果 must-have 超过本轮资源上限，回到 scope 收敛
```

## Common Pitfalls / 常见误区

- 步骤太大，一步里混了多个决策
- 只写动作，不写产出和检查点
- 明明存在高风险假设，却把验证放到最后

## References / 关联项

- `../workshop-facilitation/SKILL.md`
- `../problem-statement/SKILL.md`
- `../prd-development/SKILL.md`
- `../experiment-brief/SKILL.md`
