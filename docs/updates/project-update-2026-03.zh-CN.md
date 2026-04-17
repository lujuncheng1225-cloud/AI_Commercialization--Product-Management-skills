# 项目更新说明

## 2026 年 3 月版本

这轮迭代之后，这个仓库已经不再只是一个 `PM skill 文件集合`。

它现在更接近一套给产品经理和 AI agent 共同使用的 `PM AI Skill Toolkit`：

- 既能给人直接上手
- 也能给 agent 稳定调用
- 还具备跨平台接入、评估和个性化上下文能力

一句话概括：

**我们把一个可复用的 PM 技能仓库，升级成了一套更完整的 PM 操作系统。**

## 这次更新带来了什么

### 1. 项目定位升级

仓库现在不再只强调“写得更快”，而是明确强调：

- 更稳定的路由
- 更清晰的判断
- 更可复查的输出
- 更可迁移的工作流

新的对外定位是：

- `Try`：交互式 PM 工具箱
- `Learn`：方法论、案例、路由和输出标准
- `System`：skills、commands、agent policy、adapter、evals、private context

这意味着它既是一个上手工具，也是一个可长期沉淀的工作系统。

### 2. 交互式 PM 工具箱上线

本次新增了交互式页面：

- [PM Skills Interactive Course](../pm-skills-interactive-course.html)

这一层解决的是“第一次接触仓库时门槛太高”的问题。现在可以先从场景化页面上手，再逐步深入到底层 skill 和 command。

这部分还陆续补了多项体验优化：

- 中英文双语切换
- 首页搜索
- 场景快捷入口
- 移动端适配
- 结构化推演复制
- 暗色模式
- 工具箱式首页和一页式体验

### 3. Agent 系统层补齐

新增了完整的 `agent/` 目录，核心文件包括：

- [ROUTING.md](../../agent/ROUTING.md)
- [OUTPUT_STANDARDS.md](../../agent/OUTPUT_STANDARDS.md)
- [DOMAIN_CONTEXT.md](../../agent/DOMAIN_CONTEXT.md)
- [SPARSE_CONTEXT_POLICY.md](../../agent/SPARSE_CONTEXT_POLICY.md)

这一层的目标不是让 agent “自由发挥”，而是让不同平台上的 agent 尽量做出一致的路由、输出和判断。

换句话说，这次迭代开始认真解决：

- 什么时候该走 `command`
- 什么时候只该用单个 `skill`
- 信息不足时应该怎么澄清
- 输出应该如何体现 `Decision / Evidence / Assumptions / Risks / Next Steps`

### 4. 跨平台接入能力增强

新增了 `adapters/`：

- [CODEX.md](../../adapters/CODEX.md)
- [CLAUDE_CODE.md](../../adapters/CLAUDE_CODE.md)
- [CURSOR.md](../../adapters/CURSOR.md)

这让仓库从“某一个环境里能用”，变成“更容易在不同 agent 平台上复用”。

这一步很重要，因为真正的长期资产不是只在单一工具里跑通，而是：

- 可迁移
- 可复用
- 可比较
- 可评估

### 5. 评估机制正式加入

新增了 `evals/` 目录，包括：

- [evals/README.md](../../evals/README.md)
- `8` 个评估 case
- routing rubric
- output rubric
- scorecard template

这意味着仓库开始具备“评测 agent 是否真的用对了系统”的能力，而不只是“看起来回答得很专业”。

评估重点包括：

- 是否命中了正确的 `command` 或 `skill`
- 是否在缺信息时先澄清
- 是否避免臆造数据和背景
- 是否符合输出标准
- 是否在稀疏上下文下仍保持稳健

### 6. 私有上下文能力加入

新增了 `private/` 目录，用于沉淀个人或团队的业务背景，包括：

- 产品上下文模板
- 指标上下文模板
- 决策偏好模板
- 术语表模板

这一层会让仓库逐步从“通用 PM 系统”演进成“更像你自己团队的 PM 系统”。

它也支持两种节奏：

- 先用公共方法层快速开始
- 再逐步补齐私有上下文，提升长期稳定性

### 7. PM 工作流继续强化

这轮还新增并强化了多个关键能力：

- 新增 `task-decomposition`
- 新增 `review-gates`
- 强化 workflow command 的输出格式
- 补齐更多 sample outputs
- 强化商业化策略评审等核心 workflow

现在仓库不仅能“产出内容”，还更强调：

- 先拆解
- 再成文
- 最后审查

这让它更适合真实 PM 工作，而不只是一次性生成。

## 当前项目规模

截至这轮更新，仓库当前包含：

- `22` 个 skills
- `10` 个 commands
- `10` 份 command sample outputs
- `8` 个 eval cases

核心目录包括：

- `skills/`
- `commands/`
- `agent/`
- `adapters/`
- `evals/`
- `private/`
- `catalog/`
- `scripts/`

## 这次更新后的项目阶段

如果用一句更准确的话描述现在的状态：

它已经从一个“PM skill 仓库”，变成了一个“面向 PM 与 AI agent 的可迁移工作系统”。

它现在更像：

- 一个交互式 PM 工具箱
- 一个 AI-native PM 方法论库
- 一个可复用的 agent 工作流底座

## 适合谁使用

这套系统现在尤其适合：

- 想把 PM 工作方式沉淀下来的人
- 想把 AI 用于真实产品决策，而不只是写文档的人
- 想搭建 PM copilot 或内部 agent 的团队
- 想让不同模型在同一套专业标准下工作的团队

## 接下来会继续加强什么

下一阶段最值得继续补强的方向包括：

- 更多真实业务案例
- 更完整的私有上下文填充
- 更强的场景到 command 映射
- 更系统的长期评估基线

## 推荐入口

如果第一次对外介绍这个项目，建议按下面顺序给别人看：

1. [README.zh-CN.md](../../README.zh-CN.md)
2. [docs/pm-skills-interactive-course.html](../pm-skills-interactive-course.html)
3. [MANIFESTO.md](../core/MANIFESTO.md)
4. [CASE_STUDIES.md](../core/CASE_STUDIES.md)
5. [adapters/CODEX.md](../../adapters/CODEX.md)

如果只想用一句话介绍它，可以直接用这句：

**PM AI Skill Toolkit 是一套给产品经理和 AI agent 共同使用的 PM 操作系统，兼顾上手工具、方法论沉淀和跨平台工作流复用。**
