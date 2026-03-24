# Output Standards

这个文件定义 agent 在本仓库里产出结果时的统一专业标准。

目标不是让所有回答长得一样，而是让它们在专业判断上口径一致、结构稳定、可复查。

## Core Principle / 核心原则

- `Decision before decoration`
- `Evidence before confidence`
- `Structure before style`
- `Actionability before completeness`

## Universal Output Contract / 通用输出合同

除非任务明确只要求极短回答，否则结果默认应包含：

1. `结论 / Decision`
2. `关键依据 / Evidence`
3. `假设 / Assumptions`
4. `风险 / Risks`
5. `下一步 / Next Steps`

如果任务是成文类，则把这些内容嵌入对应文档结构中，而不是额外堆一层重复总结。

## Task-Specific Standard / 分任务标准

### 诊断类

适用于：

- 漏斗诊断
- 留存分析
- 风险评审
- 商业化健康检查

必须包含：

- 主要问题判断
- 最关键证据
- 备选解释或不确定点
- 推荐动作

禁止：

- 只列现象，不下判断
- 把所有问题都说成“都有可能”

### 决策类

适用于：

- 优先级推荐
- 模型选择
- 商业策略评审
- 是否上线

必须包含：

- 明确主结论
- 为什么不是其他选项
- 决策条件
- 何时需要重新判断

禁止：

- 同时给多个主结论且不排序
- 没有决策规则只有泛泛建议

### 成文类

适用于：

- PRD
- AI feature brief
- pricing brief
- evaluation plan

必须包含：

- 目标对象
- 业务或用户问题
- 目标结果或指标
- 范围边界
- 风险或 guardrail

禁止：

- 把 PRD 写成功能点堆砌
- 缺 success metrics
- 缺 out of scope

### 上线类

适用于：

- AI launch review
- rollout readiness

必须包含：

- 是否能上
- 阻断项
- 保护措施
- 监控和回滚要求

禁止：

- 没有 go/no-go 判断
- 只有风险清单，没有上线条件

## Evidence Standard / 证据标准

高质量输出必须区分：

- `已知事实`
- `推断`
- `待验证假设`

如果输入没有给出数据，不要伪装成“数据驱动结论”。

推荐写法：

- `已知：...`
- `推断：...`
- `待验证：...`

## Confidence Rule / 置信度规则

当输入不完整时：

- 可以给方向性判断
- 不能给过度确定的执行结论

此时必须明确写出：

- 哪些信息缺失
- 缺失信息会影响什么判断

## Style Rule / 表达规则

- 优先短句和明确判断
- 先结论，再展开
- 少用空泛修饰词
- 不用“可能、也许、或许”连续堆叠来回避判断
- 不要为了显得专业而写空话

## Refusal Rule / 拒绝规则

如果任务超出当前仓库覆盖范围，应明确说：

- 本仓库没有直接对应 skill / command
- 最接近的替代路径是什么
- 哪部分需要人工判断

## Output Checklist / 交付前检查

输出前至少自检这 7 项：

- 是否有明确主结论
- 是否给出关键依据
- 是否说明关键假设
- 是否点出主要风险
- 是否给出下一步动作
- 是否符合当前 command / skill 的任务阶段
- 是否避免了臆造数据和背景
