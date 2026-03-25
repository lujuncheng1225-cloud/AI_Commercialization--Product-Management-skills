# AI Product Management Skills

这个仓库现在的主 README 已经是中文版本。

如果你要快速理解它，建议看这几个入口：

- [README.md](README.md)
- [START_HERE.md](START_HERE.md)
- [Using PM Skills with Codex.md](docs/Using%20PM%20Skills%20with%20Codex.md)

它现在不是单纯的 skill 仓库，而是：

- 中文主版本 PM 技能库
- AI PM + 商业化 PM 工作流库
- 可迁移的 agent 规范层
- 跨平台 eval 基线
- 可选私有上下文层
- 带模板、样例、校验脚本的轻量决策系统

而且这一版开始明显加强“判断质量”，不只追求结构完整：

- 把 `第一性原理 / 苏格拉底提问 / 奥卡姆剃刀` 写成可触发的推理规则
- 在关键 skill 里加入 `反证检查` 和 `最强替代解释`
- 用更强的样例输出减少模板味
- 用更刁钻的 eval case 检查 agent 会不会过早自信

如果你希望把它当成跨电脑、跨工具复用的私人 PM agent 脑，建议优先读：

- [agent/ROUTING.md](agent/ROUTING.md)
- [agent/OUTPUT_STANDARDS.md](agent/OUTPUT_STANDARDS.md)
- [agent/DOMAIN_CONTEXT.md](agent/DOMAIN_CONTEXT.md)
- [agent/SPARSE_CONTEXT_POLICY.md](agent/SPARSE_CONTEXT_POLICY.md)
- [adapters/CODEX.md](adapters/CODEX.md)
- [adapters/CLAUDE_CODE.md](adapters/CLAUDE_CODE.md)
- [adapters/CURSOR.md](adapters/CURSOR.md)
- [evals/README.md](evals/README.md)
- [private/README.md](private/README.md)
