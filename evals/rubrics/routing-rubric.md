# Routing Rubric

## Purpose

评估 agent 是否把任务路由到了正确的 `command` 或 `skill`。

## Scoring

### 3 分

- 命中正确的主 `command` 或主 `skill`
- 判断了任务阶段
- 如果输入不足，先提出了必要澄清问题

### 2 分

- 命中了可接受的相邻路径
- 最终仍能完成任务
- 但不是最优路由，或者没有明确说明为什么选这个路径

### 1 分

- 路由明显次优
- 把 workflow 问题当成单点 skill
- 或把单点任务错误升级成复杂 workflow

### 0 分

- 命中错误任务阶段
- 例如：
  - 该做 launch review 却写成 PRD
  - 该做商业增长诊断却去写 problem statement
  - 该先澄清却直接生成正式文档

## Failure Patterns / 常见失败模式

- 没有先判断任务类型
- 看见 “AI” 就默认走 `shape-ai-feature`
- 看见 “PRD” 就直接写文档，忽略输入是否足够
- 该走 `command` 时直接选了单个 `skill`
- 该先澄清时没有澄清
