# Agent Routing

这个文件定义 agent 在本仓库里的默认路由规则。

目标不是让 agent “随意发挥”，而是让它在不同平台上都尽量做出一致的 skill / command 选择。

## Routing Goal / 路由目标

- 优先命中正确的 `command`
- 次优命中正确的 `skill`
- 信息不足时先澄清，不直接硬写
- 输出要和任务阶段匹配，不把 discovery、评审、PRD、上线混在一起

## Default Rule / 默认规则

默认优先级：

1. `先判断是否该走 command`
2. `如果只是单点任务，再走单个 skill`
3. `如果任务模糊，先走 workshop-facilitation`

原因：

- `command` 更适合真实 PM 工作
- `skill` 更适合单点产物或单点判断
- 模糊任务直接产出，专业度最不稳定

## Routing Procedure / 路由步骤

每次接到任务时，按这个顺序处理：

1. 先识别任务类型：
   - `定义类`
   - `诊断类`
   - `决策类`
   - `成文类`
   - `上线类`
2. 判断任务是 `single-skill task` 还是 `multi-step workflow`
3. 检查是否缺少关键输入
4. 如果缺少关键输入，先问不超过 3 个澄清问题
5. 选中一个主 `command` 或主 `skill`
6. 必要时声明会串联哪些 skills
7. 按 `agent/OUTPUT_STANDARDS.md` 输出

## Reasoning Heuristics / 推理启发

以下启发不是独立任务类型，而是路由后的辅助判断规则。只有在它们会实质影响结论时才启用。

### First-Principles Trigger / 第一性原理触发条件

优先在以下场景启用：

- 用户的问题已经被现有方案、旧流程或既有组织边界绑住
- 团队默认把“现在怎么做”当成“只能这么做”
- 正在讨论定价、AI 功能定义、流程重构或关键体验改版

启用后先追问：

- 用户真正要完成的任务是什么
- 当前方案默认继承了哪些约束
- 如果不继承这些约束，最小可行方案会是什么

### Socratic Trigger / 苏格拉底提问触发条件

优先在以下场景启用：

- 任务模糊，缺口会实质改变主结论
- 用户把问题、方案和指标混在一起说
- 当前最需要的是澄清，不是立即成文

使用规则：

- 只问 `1-3` 个高价值问题
- 问题必须能改变后续路由、主结论或范围边界
- 不要把澄清阶段变成无限追问

### Occam Trigger / 奥卡姆剃刀触发条件

优先在以下场景启用：

- 对同一现象存在多个可解释原因
- 有多个候选方案都可能成立
- 团队倾向于一次性加很多机制来“确保全面”

使用规则：

- 若两个解释都能解释现象，优先保留依赖假设更少的那个
- 若两个方案效果接近，优先选实施复杂度更低的那个
- 不要为了显得完整而叠加不必要的分析层或方案层

## Prefer Command When / 优先走 Command 的情况

出现以下情形时，优先使用 `commands/`：

- 用户要的是完整工作流，而不是单个产物
- 任务天然跨多个环节，例如问题定义 -> 方案 -> 评估 -> 风险
- 用户要求“帮我判断下一步怎么做”
- 用户没有明确说 skill 名称，只描述了业务问题

### Command Routing Table

#### AI PM

- 模糊 AI 想法，要整理成功能定义：
  - `commands/shape-ai-feature.md`
- AI 功能准备上线，要看评估、风险和 rollout：
  - `commands/prepare-ai-launch.md`
- 要写通用 PRD：
  - `commands/write-prd.md`

#### Commercial PM

- 商业化策略评审：
  - `commands/commercial-strategy-review.md`
- 增长 / 漏斗 / 留存诊断：
  - `commands/commercial-growth-review.md`
- trial 到 paid 转化优化：
  - `commands/improve-trial-to-paid.md`
- 定价和套餐重构：
  - `commands/redesign-pricing-packages.md`
- 商业化项目成文：
  - `commands/write-commercial-prd.md`
- 付费留存专项分析：
  - `commands/analyze-paid-retention.md`

#### General PM

- 优先级框架判断：
  - `commands/prioritize.md`

## Prefer Single Skill When / 优先走单 Skill 的情况

出现以下情形时，优先使用单个 `skills/<name>/SKILL.md`：

- 用户只要一个明确产物
- 用户已经知道自己要哪个框架
- 任务只需要一个判断动作
- 用户明确指定某个 skill

### Skill Routing Table

- 写问题定义：
  - `skills/problem-statement/SKILL.md`
- 写 AI 功能 brief：
  - `skills/ai-feature-brief/SKILL.md`
- 写 LLM 评估方案：
  - `skills/llm-evaluation-plan/SKILL.md`
- 做 AI 风险评审：
  - `skills/ai-risk-review/SKILL.md`
- 选模型策略：
  - `skills/model-selection-advisor/SKILL.md`
- 设计定价套餐：
  - `skills/pricing-packaging-brief/SKILL.md`
- 看转化漏斗：
  - `skills/conversion-funnel-diagnostic/SKILL.md`
- 看留存杠杆：
  - `skills/retention-levers-review/SKILL.md`
- 设计增长实验：
  - `skills/growth-experiment-design/SKILL.md`
- 写收入指标看板：
  - `skills/revenue-metrics-scorecard/SKILL.md`

## Clarify First / 先澄清的情况

遇到下面情况，不要直接生成正式输出：

- 目标用户不清楚
- 业务目标或 KPI 不清楚
- 当前问题和想做方案混在一起
- 上线评审却没有任何评估信息
- 要排序，但候选项都没列出来
- 要写 PRD，但问题定义和范围还明显混乱

默认只问 `1-3` 个澄清问题，避免把交互做成审讯。

## Escalation Rules / 升级规则

### 从 Skill 升级到 Command

如果在 skill 执行过程中发现：

- 需要跨多个判断环节
- 需要多个产物组合起来才能做决定
- 用户真正要的是“下一步动作”而不是当前产物

则升级到更合适的 `command`。

### 从 Direct Output 降级到 Clarification

如果输入缺口已经影响结论可信度，不要硬凑答案。

应明确说明：

- 当前缺什么
- 为什么它影响结论
- 最少还需要什么信息

## Hard Rules / 硬规则

- 不要臆造业务指标、baseline、target
- 不要把“建议上线”写成“建议立 PRD”
- 不要把“写 PRD”任务回答成泛泛建议清单
- 不要在没有证据时给出高置信度结论
- 不要同时给多个互相冲突的主结论

## Read Order / 推荐读取顺序

对于首次接入本仓库的 agent，推荐读取顺序：

1. `AGENTS.md`
2. `agent/ROUTING.md`
3. `agent/OUTPUT_STANDARDS.md`
4. `agent/DOMAIN_CONTEXT.md`
5. 目标 `command` 或 `skill`
