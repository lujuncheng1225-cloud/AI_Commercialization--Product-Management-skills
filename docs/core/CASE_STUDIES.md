# Case Studies

This page turns the repository from a library of files into a library of proof.

These cases are not customer-logo stories.
They are reference PM cases that show how the system should be used, what kind of judgment it produces, and which files to start from.

If `README.md` explains what this repo is, this page shows what the repo looks like in motion.

## How To Read These Cases

Each case includes:

- the business situation
- the main decision to be made
- the best entry point in this repo
- the expected output shape
- a sample file to inspect

Use them in three ways:

1. learn how a strong PM + AI workflow should be structured
2. find the fastest path for a similar real task
3. judge whether the repo is opinionated enough for your own work

## Case 1: Rewrite An Onboarding PRD

### Situation

A self-serve product is losing users before they reach first value.
The team thinks "the onboarding is too long", but the real question is whether the biggest problem is setup friction, delayed value, or scope confusion.

### Decision

Should the team write a PRD now, or go back for more discovery first?

### Best Entry

- [commands/write-prd.md](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/commands/write-prd.md)

### Why This Case Matters

This is a classic PM trap:

- everyone wants a PRD quickly
- the problem statement is still blurry
- scope tends to expand too early

A strong workflow should force:

- problem clarification
- task decomposition
- explicit metrics
- out-of-scope discipline

### Expected Output

- a clear decision on whether to write now
- a structured PRD draft
- assumptions, risks, and next steps

### Sample

- [commands/examples/write-prd-sample.md](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/commands/examples/write-prd-sample.md)

## Case 2: Shape An AI Research Assistant

### Situation

A PM team wants an AI assistant that turns interview transcripts into insights.
The direction sounds strong, but the failure risk is high: unsupported claims, weak evidence, and over-automation of research judgment.

### Decision

Should this go straight into a full feature PRD, or first become a scoped PoC?

### Best Entry

- [commands/shape-ai-feature.md](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/commands/shape-ai-feature.md)

### Why This Case Matters

This case demonstrates whether the repo can prevent shallow AI product thinking.
The best answer is not "AI summary is cool"; it is a disciplined combination of:

- user job definition
- output quality bar
- evaluation thresholds
- risk review

### Expected Output

- a scoped AI feature brief
- an evaluation plan
- a risk review
- a go / no-go direction

### Sample

- [commands/examples/shape-ai-feature-sample.md](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/commands/examples/shape-ai-feature-sample.md)

## Case 3: Review A Commercial Strategy

### Situation

A product has monetization pressure, but the team is not sure whether the real lever is pricing, funnel leakage, retention, packaging, or growth experiments.

### Decision

What is the main commercialization move, and why is it stronger than the alternatives?

### Best Entry

- [commands/commercial-strategy-review.md](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/commands/commercial-strategy-review.md)

### Why This Case Matters

Many PM AI libraries stop at generic product advice.
This case shows whether the repo can support more serious business judgment:

- revenue logic
- funnel diagnosis
- pricing structure
- retention trade-offs
- execution direction

### Expected Output

- a clear strategy judgment
- the strongest evidence and counter-explanations
- a prioritized action direction
- the likely documentation follow-up

### Sample

- [commands/examples/commercial-strategy-review-sample.md](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/commands/examples/commercial-strategy-review-sample.md)

## Case 4: Improve Trial-To-Paid Conversion

### Situation

A self-serve SaaS team sees healthy signups and activation, but poor trial-to-paid conversion.
The organization is split between blaming pricing, weak value communication, and poor lifecycle nudges.

### Decision

Where is the most likely leak, and what should the team test first?

### Best Entry

- [commands/improve-trial-to-paid.md](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/commands/improve-trial-to-paid.md)

### Why This Case Matters

This is a high-value operating case because it sits between product, monetization, and growth.
It shows whether the repo can connect:

- funnel evidence
- pricing logic
- scorecard thinking
- experiment design

### Expected Output

- a likely leak diagnosis
- testable pricing or packaging hypotheses
- a prioritized experiment plan

### Sample

- [commands/examples/improve-trial-to-paid-sample.md](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/commands/examples/improve-trial-to-paid-sample.md)

## Case 5: Prepare An AI Launch

### Situation

An AI feature looks promising in demos, but the team has not yet pressure-tested risk boundaries, fallback behavior, or rollout readiness.

### Decision

Is this feature ready to launch, blocked, or only safe for limited release?

### Best Entry

- [commands/prepare-ai-launch.md](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/commands/prepare-ai-launch.md)

### Why This Case Matters

The quality bar for AI launch work is different from the quality bar for writing a feature doc.
This case shows whether the repo can drive:

- go / no-go judgment
- evaluation discipline
- risk management
- operational readiness

### Expected Output

- launch readiness judgment
- blocking issues
- required safeguards
- monitoring and rollback expectations

### Sample

- [commands/examples/prepare-ai-launch-sample.md](https://github.com/lujuncheng1225-cloud/AI_Commercialization--Product-Management-skills/blob/main/commands/examples/prepare-ai-launch-sample.md)

## What A Strong New Case Should Include

When you add more cases later, keep the bar high.

Include:

- a real business tension, not a toy prompt
- a non-obvious decision point
- the correct entry file in this repo
- a sample output or deliverable
- why this case proves something important about the system

Avoid:

- generic "use AI to improve PM efficiency" stories
- cases with no decision pressure
- cases that only show formatting, not judgment quality

## Suggested Next Cases

If you want this page to become a real trust-builder, the next high-value additions are:

- a pricing-packaging redesign case
- a paid retention recovery case
- a prioritization case with conflicting stakeholders
- a case showing how the same task behaves across different agent platforms

## Signature Cases

If you want to see the author's point of view more directly, start here:

- [Signature Case 01: An Anonymized Commercialization Judgment](docs/brand/signature-case-commercialization.md)
- [Signature Case 02: Why I Did Not Build A Prompt Library](docs/brand/signature-case-pm-system.md)
