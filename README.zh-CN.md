# PM AI Skill 工具箱

给 AI 时代产品经理使用的开源操作系统。

它不是提示词库，而是一套把 PM 判断、工作流和 agent 协作沉淀成系统的仓库。

如果你第一次来，先看这 3 个入口：

- 上手：[在线工具箱](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html)
- 理解：[START_HERE.md](docs/guides/START_HERE.zh-CN.md)
- 全部文档：[docs/README.md](docs/README.md)

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

## 仓库结构

- `skills/`：单点能力
- `commands/`：多阶段工作流
- `agent/`：路由和输出标准
- `adapters/`：不同 agent 平台接入方式
- `evals/`：评估基线
- `private/`：私有上下文模板
- `docs/`：工具箱、指南、品牌资料、更新说明

## 快速开始

- 写 PRD：[commands/write-prd.md](commands/write-prd.md)
- 定义 AI 功能：[commands/shape-ai-feature.md](commands/shape-ai-feature.md)
- 商业化策略评审：[commands/commercial-strategy-review.md](commands/commercial-strategy-review.md)
- 参考案例：[CASE_STUDIES.md](docs/core/CASE_STUDIES.md)
- 品牌与作者资料：[docs/brand/README.md](docs/brand/README.md)
- 使用指南：[docs/guides/README.md](docs/guides/README.md)

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
