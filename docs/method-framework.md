# Method Framework

## The Core Logic Of PM AI Skill Toolkit

The core idea is not "write a better prompt."
It is to turn PM work into a reusable decision chain:

`Clarify -> Decompose -> Decide -> Document -> Review`

If compressed further:

`Clarify -> Decide -> Operationalize`

## 1. Clarify

The first step is not output.
It is making sure the problem is actually understood.

Common failure modes:

- writing solutions before defining the problem
- setting metrics before understanding the goal
- listing features before seeing the constraints

So the system starts by:

- identifying the task type
- choosing between `command` and `skill`
- asking only the minimum high-value clarification needed

The rule is simple:

- do not over-question
- ask only what can materially change the conclusion

## 2. Decompose

Complex PM work should not be handled as one giant generation step.

Most real PM tasks include multiple phases:

- problem definition
- evidence interpretation
- option evaluation
- risk review
- deliverable creation

That is why the system decomposes first and writes second.

The purpose is practical:

- reduce phase confusion
- control scope expansion
- prevent recommendations, decisions, and documents from collapsing into each other

## 3. Decide

The system values judgment more than volume.

It wants every output to answer:

- what is the main decision
- why this decision is stronger than the alternatives
- what is evidence
- what is assumption
- what is risk
- what should happen next

This is one of the biggest differences from a normal prompt library:

- it forces conclusion clarity
- it separates evidence from assumption
- it expects actionability

## 4. Document

Only after the problem, decomposition, and decision are clear does the system move into artifact creation.

That artifact may be:

- a PRD
- a feature brief
- a commercialization review
- a pricing brief
- a launch review

But the artifact is not the point.
It is the structured container for the judgment.

## 5. Review

Many systems stop at generation.
This one adds a review layer.

It checks:

- whether the right workflow was used
- whether the output invented unsupported facts
- whether critical inputs are still missing
- whether the output contains conflicting recommendations
- whether the next step is actually usable

That review layer is what makes the system more dependable over time.

## Simple Flow

```text
Ambiguous request
  ↓
Clarify
  ↓
Decompose
  ↓
Form a main decision
  ↓
Generate the deliverable
  ↓
Pass review gates
  ↓
Move into execution
```

## Why This Fits The AI Era

The biggest risk with AI is rarely "it cannot produce output."
The bigger risk is:

- it produces too quickly
- it sounds too smooth
- but the judgment is weak

So this system is designed not to generate more content, but to make product work more reviewable, reusable, and reliable.

## One-Line Summary

The core question here is not:

`How do we get AI to write more?`

It is:

`How do we get AI to help PMs work more reliably?`
