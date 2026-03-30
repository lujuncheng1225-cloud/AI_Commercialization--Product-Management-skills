# Signature Case 02: Why I Did Not Build A Prompt Library

## Context

If the goal were simply to help PMs use AI faster, the easiest path would have been obvious:

- collect prompts
- add templates
- publish common scenarios

That would have been enough to make a repository that looked useful.

But I did not stop there.

## The Real Problem I Saw

Many AI-for-PM resources have the same weaknesses:

- they look broad but are hard to reuse
- they generate output but not stable judgment
- they sound professional but do not form a real operating model
- they are readable for humans but not reliably usable by agents

So the real problem was not "lack of content."
It was:

**lack of a system that can be reused across tools, workflows, and agents.**

## The Core Judgment

The core judgment behind this repository was:

**it is more valuable to systematize PM practice than to keep accumulating prompts.**

That meant the repo had to solve at least four things:

1. how tasks should be routed
2. how outputs should be structured
3. how workflows should be broken into phases
4. how reliability should be evaluated across tools

## Why The Repository Evolved The Way It Did

That is why the repo expanded beyond `skills/` into:

- `commands/`
- `agent/`
- `adapters/`
- `evals/`
- `private/`

Each layer answers a real operational question.

### `skills/`

Reusable single capabilities.

### `commands/`

Real PM work is usually multi-step, not single-step.

### `agent/`

Different agents need routing and output discipline.

### `adapters/`

The system should be portable across Codex, Claude Code, and Cursor.

### `evals/`

Good-sounding answers are not the same as reliable outputs.

### `private/`

A general system should be able to grow into a more personal or team-specific one.

## Why This Matters

The easiest layer of PM work to imitate in the AI era is shallow output.

The harder layer to imitate is:

- problem framing
- decision discipline
- evidence structure
- workflow design

If AI only makes PMs write faster, that advantage gets commoditized quickly.
If AI helps PMs systematize judgment and workflow, that becomes a real multiplier.

## Why This Works As A Signature Case

This is not just "I built a repo."

It demonstrates a product judgment:

- choose systems over content piles
- choose routing and evaluation over isolated output
- choose reusable infrastructure over one-off display value

That is the foundation of a stronger long-term personal brand.

## One-Line Version

**If AI only helps product managers write faster, its value compresses quickly; if it helps them systematize judgment and workflow, it becomes a real capability multiplier.**
