# PM AI Skill 工具箱

给 AI 时代产品经理使用的开源操作系统。

它不是提示词库，而是一套把 PM 判断、工作流和 agent 协作沉淀成系统的仓库。

类目词：`PM Operating System`<br>
产品名：`PM AI Skill Toolkit`

## 3 秒懂

- 这是什么：给产品经理和 AI agent 共用的 PM 操作系统
- 解决什么：让 PM 工作不只更快，而是更稳、更可复用
- 现在能干嘛：直接跑 PRD、AI 功能定义、商业化策略评审等 workflow

如果你第一次来，先看这 4 个入口：

- 上手：[在线工具箱](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html)
- 快速入口：[Product Surface](docs/product/README.md)
- 理解：[START_HERE.md](docs/guides/START_HERE.zh-CN.md)
- Benchmark：[Benchmark Center](docs/benchmarks/README.md)

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

## 现在的 4 个公开层

- 在线使用：[在线工具箱](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html)
- 产品入口：[Product Surface](docs/product/README.md)
- Benchmark 层：[Benchmark Center](docs/benchmarks/README.md)
- 类目语言：[CATEGORY_LANGUAGE.md](docs/core/CATEGORY_LANGUAGE.md)
- 分发飞轮：[DISTRIBUTION_ENGINE.md](docs/brand/DISTRIBUTION_ENGINE.md)
- 代表作入口：[FLAGSHIP_CASES.md](docs/core/FLAGSHIP_CASES.md)

## 仓库结构

- `skills/`：单点能力
- `commands/`：多阶段工作流
- `agent/`：路由和输出标准
- `adapters/`：不同 agent 平台接入方式
- `evals/`：评估基线
- `private/`：私有上下文模板
- `docs/product/`：对外产品化入口
- `docs/benchmarks/`：公开 benchmark 和评分层
- `docs/`：工具箱、指南、品牌资料、更新说明

## 适合谁

- 想把 PM 工作流做成系统的人
- 正在做 AI PM 或商业化 PM 的人
- 想把这套库接进 Codex、Claude Code、Cursor 或内部 agent 的团队

## 快速开始

- 写 PRD：[commands/write-prd.md](commands/write-prd.md)
- 定义 AI 功能：[commands/shape-ai-feature.md](commands/shape-ai-feature.md)
- 商业化策略评审：[commands/commercial-strategy-review.md](commands/commercial-strategy-review.md)
- 参考案例：[CASE_STUDIES.md](docs/core/CASE_STUDIES.md)
- 品牌与作者资料：[docs/brand/README.md](docs/brand/README.md)
- 使用指南：[docs/guides/README.md](docs/guides/README.md)
- 社媒传播文案：[docs/brand/social-posts.zh-CN.md](docs/brand/social-posts.zh-CN.md)

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

如果你只跑一个入口，先用 [在线工具箱](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html)。
如果你想快速看懂仓库，先看 [START_HERE.md](docs/guides/START_HERE.zh-CN.md)。
