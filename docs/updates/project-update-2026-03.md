# Project Update

## March 2026 Release

This repository is no longer just a collection of PM skill files.

It has evolved into a more complete `PM AI Skill Toolkit` for both product managers and AI agents:

- directly usable by humans
- reusable by agents
- portable across tools
- structured for evaluation and personalization

In one sentence:

**we upgraded a reusable PM skills repo into a more complete PM operating system.**

## What Changed In This Iteration

### 1. The repo positioning became much sharper

The project now clearly positions itself around three layers:

- `Try`: an interactive PM toolkit for immediate use
- `Learn`: reasoning, workflows, cases, and standards
- `System`: portable skills, commands, routing, evals, and private context

That shift matters because the repo is no longer framed as "prompt content".
It is framed as a reusable working system.

### 2. The interactive PM toolkit is now a core entry point

We added:

- [PM Skills Interactive Course](../pm-skills-interactive-course.html)

This makes the repo much easier to approach for first-time users.
Instead of reading the whole structure first, people can start from guided scenarios and work backward into the system.

The toolkit layer now includes:

- bilingual UI
- scenario-based navigation
- homepage search
- mobile-friendly layout
- copy-ready prompts
- PDF export
- dark mode

### 3. The agent layer is now explicit

We added a full `agent/` layer, including:

- [agent/ROUTING.md](../../agent/ROUTING.md)
- [agent/OUTPUT_STANDARDS.md](../../agent/OUTPUT_STANDARDS.md)
- [agent/DOMAIN_CONTEXT.md](../../agent/DOMAIN_CONTEXT.md)
- [agent/SPARSE_CONTEXT_POLICY.md](../../agent/SPARSE_CONTEXT_POLICY.md)

This is one of the biggest upgrades in the repo.
It means the system now specifies:

- when to route to a `command`
- when to use a single `skill`
- when to clarify first
- what a professionally acceptable output should look like

### 4. Cross-platform adapter support was added

We added:

- [adapters/CODEX.md](../../adapters/CODEX.md)
- [adapters/CLAUDE_CODE.md](../../adapters/CLAUDE_CODE.md)
- [adapters/CURSOR.md](../../adapters/CURSOR.md)

This moves the repo closer to a portable PM agent system rather than a single-tool setup.

### 5. Evals are now part of the system

We added:

- [evals/README.md](../../evals/README.md)
- `7` eval cases
- routing and output rubrics
- a scorecard template

This matters because the repo can now be tested for:

- routing correctness
- output quality
- sparse-context behavior
- professional reliability

That is a meaningful step up from "the answers sound good."

### 6. Private context became a first-class layer

We added `private/` templates for:

- product context
- metrics context
- decision preferences
- glossary / terms

This makes it easier to turn the repo from a general PM system into a team- or company-specific system over time.

### 7. The workflow layer got stronger

We added and strengthened:

- `task-decomposition`
- `review-gates`
- stronger workflow command samples
- more explicit workflow outputs
- stronger commercialization strategy review flows

This improves the repo in an important way:
it no longer focuses only on generating artifacts, but also on decomposition and review.

## Current Repository Scale

As of this update, the repo includes:

- `22` skills
- `10` commands
- `10` command sample outputs
- `7` eval cases

The main system layers now include:

- `skills/`
- `commands/`
- `agent/`
- `adapters/`
- `evals/`
- `private/`
- `catalog/`
- `scripts/`

## What Stage The Project Is In Now

The most accurate description now is:

this project has moved from a PM skills repository into a portable working system for PMs and AI agents.

It now behaves like:

- an interactive PM toolkit
- an AI-native PM reasoning library
- a reusable workflow foundation for agents

## Who This Is For

This repo is now especially useful for:

- PMs who want stronger structure, not just faster output
- teams building AI PM copilots or internal agents
- teams that want reusable PM workflows across tools and models
- practitioners who want evals and standards, not just prompts

## What Comes Next

The next high-value upgrades would likely be:

- more real business cases
- richer private context for specific products
- tighter mapping between scenarios and commands
- longer-term eval baselines

## Recommended Entry Points

If you want to introduce this repo to someone else, the best order is:

1. [README.md](../../README.md)
2. [docs/pm-skills-interactive-course.html](../pm-skills-interactive-course.html)
3. [MANIFESTO.md](../core/MANIFESTO.md)
4. [CASE_STUDIES.md](../core/CASE_STUDIES.md)
5. [adapters/CODEX.md](../../adapters/CODEX.md)

If you want a one-line description, use this:

**PM AI Skill Toolkit is a PM operating system for humans and AI agents, combining practical tooling, reusable reasoning, and portable workflow infrastructure.**
