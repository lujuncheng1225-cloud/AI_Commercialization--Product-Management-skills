---
name: workshop-facilitation
description: Guide a product management session with clear questions, progress markers, and structured outputs. Use when a PM task needs a guided conversation before drafting or recommending.
type: interactive
best_for:
  - "Clarifying ambiguous PM requests"
  - "Running a guided session before artifact creation"
  - "Structuring stakeholder or product conversations"
scenarios:
  - "I have a messy problem statement and need to get clear before writing a PRD"
  - "Help me facilitate a prioritization session with limited context"
---

## Purpose

Guide PM work through a structured conversation before producing an output.

This skill is the interaction protocol for facilitation-heavy PM skills. It is designed to reduce context dumping, keep the session focused, and improve output quality.

## Key Concepts

### Entry Modes

- Guided: ask one question at a time
- Context dump: accept a block of context, then summarize gaps
- Best guess: proceed quickly with explicit assumptions

### Facilitation Rules

- Start by naming the mode and expected outcome
- Ask one question per turn when in guided mode
- Keep questions concrete and plain-language
- Reflect back key assumptions before drafting
- Use numbered options when a user is choosing among paths

## Application

### Opening Pattern

Start with:

1. The likely outcome to be produced
2. The entry mode options
3. A request for missing context if needed

### Progress Pattern

Use simple labels such as:

- Context 1/4
- Decision 2/3
- Drafting

### Closing Pattern

Before final output:

1. Summarize the current understanding
2. State assumptions
3. Confirm constraints if any are still uncertain

## Examples

Good:

- "We are choosing a prioritization framework. I will ask 4 short questions, then recommend one method and one fallback."

Bad:

- "Tell me everything about your product, users, roadmap, stakeholders, and strategy."

## Common Pitfalls

- Asking too many questions before narrowing the task
- Hiding assumptions until the end
- Using abstract consulting language instead of direct prompts

## References

- `../prioritization-advisor/SKILL.md`
- `../prd-development/SKILL.md`
- `../problem-statement/SKILL.md`

