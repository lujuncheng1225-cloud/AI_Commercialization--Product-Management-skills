---
title: Leaderboard
description: Public leaderboard for PM Agent Benchmark runs.
permalink: /benchmarks/leaderboard/
---

# Leaderboard

This page is the public scoreboard for PM Agent Benchmark runs.

It should stay small and credible.

## Current Status

The first visible baseline has now been published.

It is a self-run baseline, not an independent external benchmark.

That is acceptable for a first public seed, as long as the limitation stays explicit.

## Credibility Ladder

This page becomes materially more persuasive in this order:

1. one seeded baseline
2. one second run on the same pack
3. one run from a different platform, model, or reviewer
4. one visible failure case, not just a better score

Right now this page is still at step 1.
That is enough to start the category.
It is not enough to claim benchmark leadership yet.

## Scoreboard

| Date | Platform | Model | Adapter | Cases | Routing | Output | Total | Notes |
|------|----------|-------|---------|-------|---------|--------|-------|-------|
| 2026-04-18 | Codex App | GPT-5 Codex runtime | `AGENTS.md` + `agent/` | 4 | 12 / 12 | 25 / 28 | 37 / 40 | self-run baseline; sparse-context can still structure too early |

## First Planned Run

Use the pack in [First Public Run](FIRST_PUBLIC_RUN.md).

The first run should cover:

- AI feature shaping
- sparse-context robustness
- PRD decomposition and review
- pricing and packaging reasoning

## Reading Rule

Do not compare totals alone.

Always compare:

- route quality
- output quality
- failure pattern type
- whether the adapter was changed between runs

## Next Required Proof

The next useful row is not “another self-congratulatory score.”

It is one of these:

- same pack, second platform
- same pack, second reviewer
- same pack, visible failure pattern

## Result File

- [2026-04-18 Codex App Self-Run](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/evals/results/2026-04-18-codex-app-gpt-5-self-run.md)
