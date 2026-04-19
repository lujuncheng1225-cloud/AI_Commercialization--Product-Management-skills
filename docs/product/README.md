---
title: Product Surface
description: The product-facing entry layer for PM AI Skill Toolkit.
permalink: /product/
---

# Product Surface

This page is the zero-friction entry for people who do not want to understand the repository first.

It is not meant to behave like a prompt generator.
It is meant to behave like a judgment layer that starts a PM workflow cleanly.

The goal is simple:

- start in under 3 minutes
- use the toolkit online
- form a decision brief before touching an agent
- hand a kickoff brief to Codex, Claude Code, or Cursor
- preview the underlying skill or command
- move into a reusable team workspace when needed

## 3-Minute Start

### 1. Use Online

- [Interactive Toolkit](../pm-skills-interactive-course.html)
- [Start with Pricing Strategy](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html?scenario=pricing-strategy)
- [Pricing Strategy demo result](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html?scenario=pricing-strategy&demo=1)
- [Start with PRD Draft](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html?scenario=prd-draft)
- [PRD Draft demo result](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html?scenario=prd-draft&demo=1)
- [Start with Monetization Plan](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html?scenario=monetization)
- [Monetization demo result](https://lujuncheng1225-cloud.github.io/AI_Commercialization--Product-Management-skills/pm-skills-interactive-course.html?scenario=monetization&demo=1)

Pick a scenario, answer the questions, and form a structured decision brief.

### 2. Copy To Your Agent

The toolkit now exposes the underlying `skill` or `command` path for every scenario.
The result page now renders a decision view first, with the raw brief tucked behind a disclosure block.

Use the built-in copy actions in the toolkit result page to hand agent-ready kickoff text to:

- Codex
- Claude Code
- Cursor

### 3. Preview The System File

Each toolkit scenario now shows a system mapping:

- direct: the scenario maps cleanly to one underlying `skill` or `command`
- adjacent: the scenario is a lighter public entry that points to the closest reusable system file

Use that mapping to inspect the source and move from “web use” to “repo use”.

## Product Layers

### Layer 1: Online Toolkit

- best for first-time users
- no Git knowledge required
- guided questions instead of free-form prompting
- decision briefs instead of loose prompt fragments

### Layer 2: Reusable System Files

- [Commands Catalog](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/catalog/commands.md)
- [Skills Catalog](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/catalog/skills.md)

Best for users who want repeatability and agent execution.

### Layer 3: Team Workspace

- [Private Context README](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/private/README.md)
- [Team Workspace Template](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/private/TEAM_WORKSPACE_TEMPLATE.md)

Best for teams that want shared context, shared terms, and more stable output across agents.

### Operator Layer: Instrumentation

- [Toolkit Usage Dashboard](../toolkit-usage-dashboard.html)

This is a browser-local debug dashboard for:

- page views
- scenario opens
- brief generations
- copy actions into agents
- quick-link clicks

It is useful before shared analytics is wired in.

## What This Product Layer Must Do

This project should not require users to:

- understand repository structure before first use
- know where skills live
- know how different agent tools install or load skills
- write prompts from scratch

It should let them:

- start with a scenario
- form a judgment brief with assumptions, risks, and next steps
- copy a ready-to-run instruction
- preview the source system file
- escalate into commands, evals, and team context only when needed

## Related Pages

- [Benchmark Center](../benchmarks/README.md)
- [Category Language](../core/CATEGORY_LANGUAGE.md)
- [Distribution Engine](../brand/DISTRIBUTION_ENGINE.md)
- [Flagship Cases](../core/FLAGSHIP_CASES.md)
