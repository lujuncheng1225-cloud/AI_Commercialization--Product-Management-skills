# Private Context

这个目录用于存放你的私有上下文。

它不是公共方法层的一部分，而是让 agent 更像“你的专业系统”的个性化层。

## Design Goal / 设计目标

- 让不同平台上的 agent 共享同一套私有背景
- 不要求每次任务都提供完整背景
- 当私有背景存在时优先引用
- 当私有背景缺失时仍能按 `agent/SPARSE_CONTEXT_POLICY.md` 稳定工作

## Files / 文件

- `PRODUCT_CONTEXT_TEMPLATE.md`
- `METRICS_CONTEXT_TEMPLATE.md`
- `DECISION_PREFERENCES_TEMPLATE.md`
- `TERMS_GLOSSARY_TEMPLATE.md`
- `PRODUCT_CONTEXT_STARTER.md`
- `METRICS_CONTEXT_STARTER.md`
- `DECISION_PREFERENCES_STARTER.md`
- `TERMS_GLOSSARY_STARTER.md`

## Starter vs Template / Starter 和 Template 的区别

- `*_TEMPLATE.md`：空白模板，适合从零开始填
- `*_STARTER.md`：带强默认假设的起稿版，适合直接改

注意：

- `STARTER` 不是你的真实业务事实
- 它只是一个可编辑的专业默认版本
- 如果真实信息和 starter 冲突，以真实信息为准

## How To Use / 怎么用

### 方式 1：长期维护

把这些模板逐步填成你自己的真实上下文文件。

适合：

- 你有固定产品
- 有固定业务指标
- 有固定术语体系
- 想让 agent 长期表现更像你

### 方式 2：按需精简

如果业务信息不能说太多，或者很多任务没有完整背景：

- 只填术语表
- 只填指标定义
- 只填决策偏好

不要因为无法提供全量背景，就放弃整个私有层。

## Robustness Rule / 鲁棒性规则

这个目录是 `加分项`，不是 `依赖项`。

如果这些文件为空或未填：

- agent 仍应能基于公共方法层给出稳健输出
- 不能把“没有私有上下文”当成臆造的理由
- 应按 `agent/SPARSE_CONTEXT_POLICY.md` 工作

## Privacy Rule / 隐私规则

- 不要把敏感数据、账号、密钥写进这里
- 不要放无法上传到 Git 仓库的机密材料
- 如果需要保存敏感业务信息，建议保存在私有仓库或本地私有副本中
