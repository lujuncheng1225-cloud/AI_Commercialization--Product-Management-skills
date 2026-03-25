# Eval Case 06: Commercial Growth False Precision

## Task

我们是一个 self-serve AI SaaS，最近 6 周遇到这些情况：

- 总 trial start 上升了 `38%`
- activation rate 从 `41%` 降到 `36%`
- activated 用户到 paid 的转化也在下滑
- 新增流量里，付费广告占比明显提高
- organic 用户的付费转化一直明显高于 paid acquisition 用户
- 到达“导出 3 次成果”这个高意图动作的用户，付费转化没有明显变差
- 最近支持工单里有人说套餐页复杂、价格看不懂

团队内部现在有 3 种声音：

1. “就是价格太贵了，赶紧降价”
2. “是 onboarding 变差了，先重做引导”
3. “增长投放把低质量流量带进来了”

请帮我判断下一步该怎么做。

## Expected Route

- Primary route:
  - `commands/commercial-growth-review.md`

## Why This Route

- 这是一个带混杂信号的商业化增长诊断问题
- 需要同时看漏斗、流量质量、升级转化和实验策略
- 不能直接当成 pricing brief，也不能直接落成 PRD

## Must-Have Signals

- 应指出现有信息还不足以直接下结论说“价格就是主因”
- 应识别 `organic vs paid acquisition` 与 `高意图动作后转化稳定` 这两个关键信号
- 应给出一个主判断，同时说明最强替代解释
- 应提出“最便宜但最锋利”的下一步，而不是大改一整套

## Failure Conditions

- 直接建议全面降价
- 直接建议重写 onboarding
- 忽略流量结构变化
- 没有给出替代解释或反证思路
- 一上来给出高置信度根因判断
