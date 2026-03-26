# Sample Output: Write PRD

## 1. Decision

- `直接输出 PRD 草案`

主判断：

- 当前信息已经足够支持一版聚焦激活问题的 PRD 草案。
- 但这份 PRD 应限定在“缩短首个价值出现时间、减少前置配置摩擦”这一版，不适合把邀请后的协作问题一起并入。

为什么不是其他选项：

- 不是 `先回到问题定义`：
  当前问题区间已经足够清楚，不需要回到最初 discovery。
- 不是 `先补数据再成文`：
  虽然还有细节待验证，但不影响先产出一份受限版本 PRD。

## 2. Task Decomposition

### Goal

- 产出一份能让设计和工程进入细化讨论的 onboarding 改版 PRD。

### Work Steps

1. 确认问题定义
   - Output: 一段清晰的问题陈述
   - Check: 没把“减少步骤数”误写成问题本身

2. 定义成功指标和 guardrails
   - Output: 主指标、配套指标、守护指标
   - Check: 指标能支持 go / no-go 判断

3. 收敛本轮 scope
   - Output: must-have / out-of-scope
   - Check: 每个 must-have 都能解释为什么影响主指标

4. 写 PRD 主体
   - Output: 目标用户、方案、需求、风险
   - Check: 方案和范围没有互相打架

5. 做交付前审查
   - Output: 可交付结论或返工点
   - Check: 至少经过 fit / reasoning / integration 三道关

## 3. Executive Summary

- 本项目目标是提升新用户 onboarding completion，通过减少首次设置阻力和缩短首个价值出现时间来提高激活率。

## 4. Problem Statement

- 新用户注册后需要完成多步配置，但在看到真实价值前已经流失。
- 当前流程更像资料收集，而不是帮助用户快速完成第一次成功任务。

## 5. Target Users

- 新注册的 self-serve 团队管理员
- 需要在首次登录后快速完成初始配置并邀请成员的用户

## 6. Success Metrics

- Primary metric: onboarding completion rate
- Diagnostic metrics:
  - time to first value
  - invite completion rate
- Guardrails:
  - 客服工单量
  - 设置失败率

## 7. Scope

### Must-Have

- 简化首次设置步骤
- 重构引导文案和默认选项
- 优化首次成功路径

### Out of Scope

- 不重做整套权限系统
- 不改邀请后的协作体验
- 不同时处理老用户的设置迁移问题

## 8. Why This Version

- 这版优先解决“激活前流失”的主问题，而不是一次性重做整个 onboarding 体系。
- 如果本轮把权限、邀请后协作、老用户迁移都一起做，会明显超出当前资源，并稀释主指标。

## 9. Risks And Next Steps

- 风险：过度简化会导致后续配置缺失
- 下一步：
  - 拉齐设计稿
  - 定义埋点
  - 确认实验方案

## 10. Review Gates

### Gate 1: Fit Check

- Pass
- 当前输出确实回答了“是否可以先写一版 PRD”，没有答成泛泛改版建议

### Gate 2: Reasoning Check

- Pass with caution
- 已有主结论，但仍需在后续设计阶段验证“步骤太多”与“价值出现太慢”谁是更强原因

### Gate 3: Integration Check

- Pass
- 问题、指标、范围和下一步基本一致，没有明显冲突
