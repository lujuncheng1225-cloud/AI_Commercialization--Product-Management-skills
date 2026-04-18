<p align="center">
  <img src="docs/images/hero-en.png" alt="PM AI Skill Toolkit" width="720">
</p>

<p align="center">
  <strong>PM AI Skill Toolkit</strong><br>
  The operating system for AI-native product managers
</p>

<p align="center">
  Guided toolkit for humans · Structured skills for agents · Opinionated PM workflows
</p>

<p align="center">
  <a href="https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html">Try the Toolkit</a>
  ·
  <a href="https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/product/">Product Surface</a>
  ·
  <a href="https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/benchmarks/">Benchmark Center</a>
  ·
  <a href="docs/core/MANIFESTO.md">Manifesto</a>
  ·
  <a href="docs/guides/START_HERE.md">Start Here</a>
  ·
  <a href="README.zh-CN.md">中文</a>
</p>

---

Most AI-for-PM resources help people write faster.

This repo is built to help product managers think better, structure work better, and make stronger decisions with AI.

It is not a prompt dump. It is a reusable PM operating system.

## In 3 Seconds

- What it is: a PM operating system for humans and AI agents
- What it solves: PM work that is not just faster, but more reliable and reusable
- What you can do now: run workflows for PRDs, AI feature shaping, and commercialization reviews

If this is your first visit, start with these 4 entry points:

- Try: [Interactive Toolkit](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html)
- Start fast: [Product Surface](docs/product/README.md)
- Understand: [START_HERE.md](docs/guides/START_HERE.md)
- Benchmark quality: [Benchmark Center](docs/benchmarks/README.md)

## Why This Exists

The biggest barrier for PMs using AI is rarely "prompt syntax".
It is usually one of these:

- they do not know what to ask
- they skip clarification and jump into output
- they generate artifacts without judgment
- they produce polished answers without decision discipline

This library is designed to fix that by encoding not just prompts, but:

- routing rules
- output standards
- review gates
- evaluation discipline
- commercialization and growth judgment

## What Makes This Different

Most PM AI repos optimize for breadth.
This one tries to optimize for professional reliability.

- `Decision before decoration`
- `Evidence before confidence`
- `Structure before style`
- `Actionability before completeness`

In practice, that means this repo emphasizes:

- explicit routing between commands and skills
- structured clarification before output
- documented decision outputs
- assumptions / risks / next steps as defaults
- commercialization depth, not just generic product advice
- evals and validation, not just content volume

## Product Layers

- Online entry: [Interactive Toolkit](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html)
- Product layer: [Product Surface](docs/product/README.md)
- Benchmark layer: [Benchmark Center](docs/benchmarks/README.md)
- Category language: [Category Language](docs/core/CATEGORY_LANGUAGE.md)
- Distribution rhythm: [Distribution Engine](docs/brand/DISTRIBUTION_ENGINE.md)

## Structure

- `skills/` — single capabilities
- `commands/` — multi-step workflows
- `agent/` — routing and output policy
- `adapters/` — setup for different agent tools
- `evals/` — evaluation baselines
- `private/` — optional private context
- `docs/product/` — zero-friction public entry layer
- `docs/benchmarks/` — public benchmark and scorecard layer
- `docs/` — toolkit, guides, brand assets, and updates

## Who This Is For

- PMs who want reusable systems instead of scattered prompts
- practitioners working on AI PM or commercialization PM
- teams that want to connect the repo to Codex, Claude Code, Cursor, or internal agents

## Quick Start

- Write a PRD: [commands/write-prd.md](commands/write-prd.md)
- Shape an AI feature: [commands/shape-ai-feature.md](commands/shape-ai-feature.md)
- Review commercialization strategy: [commands/commercial-strategy-review.md](commands/commercial-strategy-review.md)
- See reference cases: [CASE_STUDIES.md](docs/core/CASE_STUDIES.md)
- Brand and author materials: [docs/brand/README.md](docs/brand/README.md)
- Usage guides: [docs/guides/README.md](docs/guides/README.md)
- Social post starters: [docs/brand/social-posts.md](docs/brand/social-posts.md)

## Local Run

```bash
git clone https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills.git
cd AI_Commercialization--Product-Management-skills/docs
python3 -m http.server 8888
# Open http://localhost:8888/pm-skills-interactive-course.html
```

## Validation

```bash
python3 scripts/validate-library.py
python3 scripts/check-style-consistency.py
python3 scripts/generate-catalog.py
```

## License

MIT
