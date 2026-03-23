# Sample Output: Shape AI Feature

## 1. Problem Statement

- PM 团队在整理访谈记录时耗时高，且洞察质量不稳定。
- 他们需要快速得到 pains、workarounds 和 themes，而不是只要摘要。

## 2. AI Feature Brief

- Trigger：上传访谈记录或粘贴 transcript 后触发
- Inputs：原始 transcript、受访人角色、研究主题
- Outputs：问题主题、支持原句、机会点
- Quality Bar：不得凭空捏造原文没有表达的结论
- Fallback：低置信度时只返回 candidate themes，不直接下结论

## 3. Evaluation Plan

- Offline：50 份真实访谈逐字稿
- Metrics：theme accuracy、unsupported claims、edit rate
- Blocking threshold：unsupported claims 超过阈值则不能上线

## 4. Risk Review

- 风险：过度抽象导致丢失原始语境
- 缓解：每个主题必须附原文片段

## 5. Recommendation

- 先做“洞察提炼辅助”而不是“自动研究结论”

