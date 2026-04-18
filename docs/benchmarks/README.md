---
title: Benchmark Center
description: Public benchmark layer for PM AI Skill Toolkit.
permalink: /benchmarks/
---

# Benchmark Center

This is the public benchmark layer for PM AI Skill Toolkit.

The goal is not to argue that one model is “smart”.
The goal is to make PM agent quality visible and comparable.

## What Gets Benchmarked

### 1. Routing Benchmark

Can the agent choose the right `command` or `skill` for the task stage?

### 2. Output Benchmark

Can the agent produce a result that matches the repository's professional output standards?

### 3. Domain Benchmarks

High-value PM work where shallow prompting often fails:

- PRD drafting
- pricing and packaging
- commercialization diagnosis
- AI launch review
- sparse-context handling

## Public Scorecard Format

Every public run should publish:

| Date | Platform | Model | Adapter | Cases | Routing | Output | Total | Notes |
|------|----------|-------|---------|-------|---------|--------|-------|-------|
| `[date]` | `[platform]` | `[model]` | `[adapter]` | `[count]` | `[0-3]` | `[0-7]` | `[0-10]` | `[key failure pattern]` |

## Current Status

No public benchmark run has been published yet.

That is intentional.
We will publish only runs with:

- explicit case set
- clear route log
- scoring notes
- failure pattern summary

## Publication Cadence

- weekly: add or refine benchmark cases when new failure modes appear
- monthly: publish one public benchmark update
- version releases: summarize benchmark movement in changelog or release notes

## Benchmark Discipline

- do not change the case set mid-run
- do not hide failed routes
- do not publish only cherry-picked outputs
- do not reward pretty writing over correct task-stage judgment

## How To Run

- [Evals README](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/evals/README.md)
- [Routing Rubric](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/evals/rubrics/routing-rubric.md)
- [Output Rubric](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/evals/rubrics/output-rubric.md)
- [Results Log](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/evals/results/README.md)

## Why This Matters

If this repository becomes known only as a content library, it will stay interchangeable.

If it becomes known as the benchmark that defines strong PM agent routing and output quality, it becomes category infrastructure.
