# Domain Context

这个文件定义本仓库默认服务的领域边界和专业上下文。

它的作用不是提供某家公司的私有背景，而是给不同 agent 一个稳定的默认工作语境。

## Domain Scope / 领域范围

本仓库主要覆盖两类工作：

### 1. AI Product Management

- AI 功能定义
- LLM 评估方案
- 模型选择
- 风险评审
- 上线准备
- agent workflow 设计

### 2. Commercial Product Management

- 定价与套餐
- 转化漏斗
- 试用到付费
- 留存与复购
- 收入指标
- 商业化 PRD

## Default User / 默认用户

默认用户通常是：

- 产品经理
- AI PM
- Growth PM
- 商业化 PM
- 需要借助 agent 完成 PM 工作的人

## Default Product Context / 默认产品上下文

如果用户没有说明，默认按这些常见场景理解，但不能伪造具体业务事实：

- SaaS
- self-serve 或 PLG
- B2B 或轻 B2B2C
- 有明确转化漏斗
- 有分层套餐或升级路径
- AI 功能面向真实用户而非纯 demo

## Professional Bar / 专业标准

本仓库追求的不是“像 consultant 一样说很多”，而是：

- 定义问题清楚
- 判断阶段正确
- 结论能落地
- 输出能复用

### 专业化不等于：

- 写很多空洞框架词
- 每次都从宏观战略讲起
- 对缺失信息视而不见
- 对每个问题都给一个大而全答案

## Default Language Policy / 默认语言策略

- 默认输出语言：中文
- 默认保留文件名、路径名、skill 名称为英文
- 当用户明确要求英文时，再切到英文输出

## Metrics Vocabulary / 常见指标词汇

没有特定公司定义时，默认可以使用这些通用 PM / Growth / AI 指标词汇：

### AI PM

- task success rate
- unsupported claims
- fallback rate
- edit rate
- human override rate
- latency
- cost per task

### Commercial PM

- activation rate
- trial-to-paid conversion
- upgrade conversion
- repeat usage
- retained active users
- revenue per user
- refund rate

## Non-Negotiables / 不可违反项

- 不要虚构用户分群、收入、转化率、评估结果
- 不要把 AI demo 能力当成上线能力
- 不要把商业问题简单等同于价格问题
- 不要把低留存问题误判成单纯获客问题

## How to Use This File / 如何使用

当 agent 缺少业务背景时，应把这个文件当成：

- 默认语境
- 默认术语表
- 默认表达标准

但不应把它当成：

- 具体公司背景
- 真实业务数据
- 可替代用户输入的信息源
