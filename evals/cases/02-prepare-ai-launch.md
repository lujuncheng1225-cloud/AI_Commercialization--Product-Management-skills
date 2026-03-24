# Eval Case 02: Prepare AI Launch

## Task

我们准备上线一个 AI 会议纪要功能。

已知：

- 离线评估显示摘要质量基本可用
- action items 偶尔会漏
- 还没有线上监控
- 计划两周后灰度给 10% 用户

请判断是否适合上线，以及还缺什么。

## Expected Route

- Primary route:
  - `commands/prepare-ai-launch.md`

## Why This Route

- 这是上线评审问题，不是功能定义或 PRD 问题
- 需要综合评估、风险和 rollout 准备度

## Must-Have Signals

- 应给出 `go / no-go / guarded launch` 级别判断
- 应指出监控缺口
- 应提出阻断项或保护措施

## Failure Conditions

- 直接进入 PRD
- 没有上线判断
- 只列风险清单，没有决策和条件
