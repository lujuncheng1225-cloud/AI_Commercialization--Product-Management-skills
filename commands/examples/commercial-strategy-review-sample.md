# Sample Output: Commercial Strategy Review

## 1. Decision

- `先做实验`

主判断：

- 当前收入增长的主约束不是获客规模，而是高意图用户在首单和复购之间的变现效率不够高。
- 因此最优先的不是立刻重构整个商业模式，而是先验证几个能显著提升高意图变现效率的动作。

为什么不是其他选项：

- 不是 `进入商业化 PRD`：
  现在还没有足够证据支持一次大范围 pricing / packaging 重构。
- 不是 `先重构套餐或价格策略`：
  套餐表达是问题的一部分，但还不确定是不是当前最主要约束。
- 不是 `暂缓`：
  已经有真实收入和高意图用户，说明增长空间是可验证的，不应停在讨论层。

## 2. Business Snapshot

- 当前收入已经被验证，但主要增长空间不在获客规模，而在收入结构优化。
- 高意图用户已经存在，关键问题是如何更高效地让他们完成首单和复购。

## 3. Task Decomposition

### Goal

- 把一次商业化策略评审收敛成明确主约束、优先动作和是否需要立 PRD 的判断。

### Work Steps

1. 锚定主指标和增长目标
   - Output: primary metric + supporting metrics
   - Check: 能清楚说明“这轮评审到底想提升什么”

2. 找出主要收入摩擦
   - Output: 核心漏斗区间和最强假设
   - Check: 不把所有问题都列成同等优先级

3. 判断是价格、包装、路径还是留存为主
   - Output: 主解释 + 替代解释
   - Check: 有最强替代解释，不是单线叙事

4. 收敛最小战略动作
   - Output: 2-3 个高杠杆实验或下一步动作
   - Check: 不同时改太多变量

5. 交付前审查
   - Output: 是否可进入 PRD / 实验 / 暂缓
   - Check: 经过 fit / reasoning / integration 审查

## 4. Core Diagnosis

- 主要收入摩擦集中在高价值结果出现之后的购买路径。
- 当前商业模式具备基础合理性，但“积分 + 会员”表达还没有充分贴合用户任务。
- 留存问题不是不存在，但目前更像首单效率和重复购买路径没有被设计好。

### Best Alternative Explanation

- 最强替代解释是：真正的问题不是包装和路径，而是当前高意图用户池并没有想象中大，所以看起来像收入结构问题。

## 5. Strategic Recommendation

- 第一优先：做结果页和高意图时刻的任务型付费设计
- 第二优先：测试套餐和 top-up 结构重构
- 第三优先：围绕“下一次创作”而不是泛 CRM 做留存干预

## 6. Priority Experiments

### P1

- 结果页推荐“完成当前作品”的任务型购买包

### P2

- 会员试吃一次高级模型

### P3

- 重做中档 top-up 档位和默认推荐项

## 7. Review Gates

### Gate 1: Fit Check

- Pass
- 当前输出回答的是“商业化策略下一步怎么做”，不是泛泛列一堆增长建议。

### Gate 2: Reasoning Check

- Pass with caution
- 已有主约束判断，但还需要后续实验来确认“收入结构问题”是否强于“高意图用户不足”。

### Gate 3: Integration Check

- Pass
- 指标、主判断、优先动作和后续路径基本一致。

## 8. Next 1-2 Weeks

- 定义 3 个实验
- 为每个实验绑定 1 个主指标和 1 个决策规则
- 先验证结果页与额度不足时刻的 uplift，再决定是否立更大范围的 commercial PRD
