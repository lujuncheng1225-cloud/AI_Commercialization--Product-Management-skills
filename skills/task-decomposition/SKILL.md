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

## Common Pitfalls / 常见误区

- 步骤太大，一步里混了多个决策
- 只写动作，不写产出和检查点
- 明明存在高风险假设，却把验证放到最后

## References / 关联项

- `../workshop-facilitation/SKILL.md`
- `../problem-statement/SKILL.md`
- `../prd-development/SKILL.md`
- `../experiment-brief/SKILL.md`
