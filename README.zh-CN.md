# PM AI Skill 工具箱

给 AI 时代产品经理使用的开源操作系统。

它不是一个“提示词大全”，而是一个把 PM 工作方式系统化的仓库：

- 给人直接用的交互式工具箱
- 给学习者用的方法论与工作流
- 给 agent 用的 skills / commands / routing / evals

如果你要的是“更快生成一份东西”，这个库已经够用。
如果你要的是“把 PM 判断、结构和工作流沉淀成系统”，这个库更适合你。

## 三个入口

### 1. 先上手

- [在线工具箱](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html)
- 20 个高频 PM 场景
- 中英文双语
- 适合直接生成高质量 Prompt

### 2. 再理解

- [MANIFESTO.md](MANIFESTO.md)
- [CASE_STUDIES.md](CASE_STUDIES.md)
- [本轮更新说明](docs/project-update-2026-03.zh-CN.md)
- [START_HERE.md](START_HERE.md)
- [agent/ROUTING.md](agent/ROUTING.md)
- [agent/OUTPUT_STANDARDS.md](agent/OUTPUT_STANDARDS.md)

适合想理解这套系统为什么这样设计、优秀 AI PM 工作应该长什么样的人。

### 3. 再接系统

- `skills/`
- `commands/`
- `agent/`
- `adapters/`
- `evals/`
- `private/`

适合把这套库接进 Codex、Claude Code、Cursor 或内部 agent 工作流。

## 作者与发布

- [ABOUT_AUTHOR.md](ABOUT_AUTHOR.md)
- [WHY_THIS_REPO.md](WHY_THIS_REPO.md)
- [LAUNCH_POST.zh-CN.md](LAUNCH_POST.zh-CN.md)

## 这套库的核心差异

多数 AI PM 仓库在做“内容堆积”。
这套库更想做“专业可靠性”。

它强调的不是把答案写长，而是：

- 先路由对
- 先澄清对
- 先下判断
- 再做产物
- 最后过 review gate

默认输出关注：

- `Decision`
- `Evidence`
- `Assumptions`
- `Risks`
- `Next Steps`

## 仓库里有什么

- `docs/pm-skills-interactive-course.html`：交互式 PM 工具箱
- `skills/`：22 个可复用 PM 技能
- `commands/`：10 条多技能工作流
- `agent/`：跨平台路由与输出规范
- `adapters/`：Codex / Claude Code / Cursor 接入说明
- `evals/`：质量评估基线
- `catalog/`：自动生成索引
- `scripts/`：校验与生成脚本
- `private/`：可选私有上下文模板

## 快速路径

- 写 PRD：[commands/write-prd.md](commands/write-prd.md)
- 定义 AI 功能：[commands/shape-ai-feature.md](commands/shape-ai-feature.md)
- 商业化策略评审：[commands/commercial-strategy-review.md](commands/commercial-strategy-review.md)
- 转化漏斗诊断：[commands/commercial-growth-review.md](commands/commercial-growth-review.md)
- 参考案例：[CASE_STUDIES.md](CASE_STUDIES.md)
- 接入 Codex：[adapters/CODEX.md](adapters/CODEX.md)

## 本地运行

```bash
git clone https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills.git
cd AI_Commercialization--Product-Management-skills/docs
python3 -m http.server 8888
# 打开 http://localhost:8888/pm-skills-interactive-course.html
```

## 校验命令

```bash
python3 scripts/validate-library.py
python3 scripts/check-style-consistency.py
python3 scripts/generate-catalog.py
```

如果你只看一份文档，先看 [MANIFESTO.md](MANIFESTO.md)。
如果你只跑一个入口，先用 [在线工具箱](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html)。
