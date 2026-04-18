---
title: First Public Run
description: The first public benchmark pack for PM Operating System.
permalink: /benchmarks/first-public-run/
---

# First Public Run

This page defines the first public benchmark run for the repository.

Do not expand this run too early.
The goal is not volume.
The goal is a clean first proof point.

## Purpose

The first public run should prove 3 things:

1. this system routes better than generic prompt usage
2. this system produces stronger PM output under task pressure
3. this system stays honest when context is sparse

## Fixed Case Set

Use these 4 cases only:

1. [Eval Case 01: Shape AI Feature](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/evals/cases/01-shape-ai-feature.md)
2. [Eval Case 05: Sparse Context Robustness](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/evals/cases/05-sparse-context-robustness.md)
3. [Eval Case 07: PRD Decomposition And Review](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/evals/cases/07-prd-decomposition-and-review.md)
4. [Eval Case 08: Pricing Packaging Boundary](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/evals/cases/08-pricing-packaging-boundary.md)

Why these 4:

- `01` tests AI feature workflow routing
- `05` tests sparse-context discipline
- `07` tests PRD decomposition instead of shallow document dumping
- `08` tests commercialization reasoning where generic AI often fails

## Required Publication Fields

Every first-run publication must include:

- date
- platform
- model
- adapter used
- fixed case set
- expected route vs actual route for each case
- routing score per case
- output score per case
- total score per case
- top 3 failure patterns
- what changed after the run

## Publication Format

### Public Scorecard

Use one summary table:

| Date | Platform | Model | Adapter | Cases | Routing | Output | Total | Main Failure Pattern |
|------|----------|-------|---------|-------|---------|--------|-------|----------------------|
| `[date]` | `[platform]` | `[model]` | `[adapter]` | `4` | `[0-12]` | `[0-28]` | `[0-40]` | `[short phrase]` |

### Case Notes

For each case, publish:

- expected route
- actual route
- one strong signal
- one failure signal
- one fix recommendation

## Scoring Rule

- keep `Routing` at `0-3` per case
- keep `Output` at `0-7` per case
- total run score is out of `40`

Do not compress route and output into one impression score.

## Anti-Cheating Rule

Do not:

- swap cases mid-run
- hide failed routes
- publish only the strongest cases
- claim benchmark movement without showing the previous run

## Output Files

When the first real run is published, create:

- one result file under `evals/results/`
- one updated row in [Leaderboard](LEADERBOARD.md)
- one external post using the failure pattern, not just the score

## Not Ready Yet

If you have not run the cases yet, say so.

An honest empty leaderboard is stronger than a fake benchmark.
