# PM AI Skill 工具箱

> 产品经理的 AI 技能库。20 个即用场景，对话式引导，填几个问题就生成完整的 Prompt。

**不需要理解 Prompt 工程。不需要复制粘贴模板。**

选择场景 → 回答 2-3 个问题 → 点击生成 → 复制到 ChatGPT / DeepSeek → 得到专业结果。

👉 **[在线体验](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/docs/pm-skills-interactive-course.html)**

---

## 覆盖场景（20 个 Skill，8 大分类）

| 分类 | 场景 |
|------|------|
| **竞品分析** | 功能对比 · 定价分析 · 动态追踪 |
| **用户研究** | 用户画像 · 反馈分析 · 流失分析 |
| **需求管理** | 优先级排序 · PRD 初稿 · 评审模拟 |
| **定价策略** | 定价方案 · AB 实验设计 |
| **数据分析** | 异常解读 · 周报月报 · 看板设计 |
| **商业化** | 商业化方案 · 续订挽回 |
| **增长策略** | 增长实验 · 市场进入 |
| **项目沟通** | 跨部门邮件 · 项目复盘 |

## 为什么做这个

产品经理用 AI 最大的门槛不是"不会写 Prompt"，而是：

1. **不知道该问什么** — 一个竞品分析该包含哪些维度？需求优先级有哪些框架？
2. **Prompt 模板不够用** — 模板是死的，你的产品是活的。填占位符不如对话式引导
3. **没有体系** — 20 个场景覆盖了 PM 日常 80% 的高频工作，不用每次从零开始

**Skill ≠ 提示词。** Skill 是封装好的能力——内部的 Prompt 工程由专业 PM 设计，用户只需要回答自己的业务问题。

## 快速开始

1. 打开 [在线体验页面](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/docs/pm-skills-interactive-course.html)
2. 选择一个场景（如"竞品功能对比"）
3. 填写你的产品信息（产品名、竞品、背景等）
4. 点击"生成" → 复制 → 粘贴到任意 AI 工具

**支持暗色模式和移动端。**

## 技术实现

- 单文件 HTML，数据驱动渲染
- 对话式分步引导（text / textarea / checkbox / radio）
- 一键复制生成的 Prompt
- 搜索和分类筛选
- 暗色模式 + 响应式

## 本地运行

```bash
git clone https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills.git
cd AI_Commercialization--Product-Management-skills/docs
python3 -m http.server 8888
# 打开 http://localhost:8888/pm-skills-interactive-course.html
```

## 仓库完整结构

这个仓库不只是工具箱页面，还包括完整的 PM 技能文件体系：

- `docs/pm-skills-interactive-course.html` — **交互式 Skill 工具箱（主入口）**
- `skills/` — 22 个 PM 技能文件（Markdown，可直接用于 AI Agent）
- `commands/` — 多技能工作流
- `agent/` — 跨平台 Agent 路由与输出规范
- `adapters/` — Codex / Claude Code / Cursor 接入说明
- `evals/` — Agent 质量评估基线

详见 [START_HERE.md](START_HERE.md)。

## License

MIT
