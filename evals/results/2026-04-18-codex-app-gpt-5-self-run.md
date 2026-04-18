# PM Agent Benchmark Result

## Metadata

- Date: 2026-04-18
- Platform: Codex App
- Model: GPT-5 Codex runtime in the current Codex App session
- Adapter used: `AGENTS.md` + `agent/` policy layer + repo structure
- Evaluator: self-run benchmark in the current repository session

## Benchmark Integrity Note

This result is publishable as a baseline.

It is **not** an independent third-party benchmark.

Reasons:

- the run was executed in the same session that knows the repository well
- the Codex App client does not expose a more precise underlying model version string in this session
- no second evaluator reviewed the scores yet

Use this result as:

- the first visible baseline
- a benchmark format proof
- a routing and output quality seed for future comparison

Do not oversell it as final proof of category leadership.

## Case Set

- `evals/cases/01-shape-ai-feature.md`
- `evals/cases/05-sparse-context-robustness.md`
- `evals/cases/07-prd-decomposition-and-review.md`
- `evals/cases/08-pricing-packaging-boundary.md`

## Score Summary

| Case | Expected Route | Actual Route | Routing | Output | Total |
|------|----------------|--------------|---------|--------|-------|
| `01` | `commands/shape-ai-feature.md` | `commands/shape-ai-feature.md` | `3` | `6` | `9` |
| `05` | `commands/shape-ai-feature.md` + sparse-context policy | `commands/shape-ai-feature.md` + bounded sparse-context handling | `3` | `6` | `9` |
| `07` | `commands/write-prd.md` | `commands/write-prd.md` | `3` | `6` | `9` |
| `08` | `commands/redesign-pricing-packages.md` | `commands/redesign-pricing-packages.md` | `3` | `7` | `10` |

## Run Total

- Cases: `4`
- Routing: `12 / 12`
- Output: `25 / 28`
- Total: `37 / 40`

## Case Notes

### Case 01: Shape AI Feature

- Strong signal:
  - correctly treated the task as an AI feature workflow instead of a PRD request
  - kept the scope at a lightweight version
  - included evaluation and hallucination-risk thinking
- Main weakness:
  - could ask one sharper clarification on transcript volume, privacy sensitivity, or evaluation dataset shape before tightening the recommendation
- Score rationale:
  - route was correct
  - output was strong, but not perfect enough for `7`

### Case 05: Sparse Context Robustness

- Strong signal:
  - acknowledged that the evidence bar is weak
  - avoided inventing KPI, user segments, or quantified benefit
  - stayed in a bounded judgment mode instead of writing a full PRD
- Main weakness:
  - still tends to move into structured recommendation quickly
  - could force one mandatory clarification before any stronger investment direction
- Score rationale:
  - route was correct
  - sparse-context discipline was good, but not maximally strict

### Case 07: PRD Decomposition And Review

- Strong signal:
  - did not accept “cut the steps in half” as the problem definition
  - decomposed the onboarding problem before expanding the document
  - preserved scope discipline for a medium-sized iteration
- Main weakness:
  - review-gate language could be more explicit near the final recommendation
  - the output can still feel slightly solution-forward before enough diagnostic evidence is named
- Score rationale:
  - correct route
  - useful PRD shape, but not yet the sharpest possible review framing

### Case 08: Pricing Packaging Boundary

- Strong signal:
  - started with value metric instead of price
  - handled free-tier boundary, upgrade triggers, member role, credit role, and rollout guardrails correctly
  - kept missing commercial facts labeled as assumptions rather than pretending certainty
- Main weakness:
  - no material structural miss in this run
  - remaining uncertainty comes from absent cost, segment, and conversion data, which was correctly acknowledged
- Score rationale:
  - this was the strongest case in the run

## Main Failure Patterns

1. In sparse-context work, the system can still become structured a little too early before asking one final decisive clarification.
2. In PRD work, the review-gate language is present but could be made more explicit and more forceful.
3. This benchmark is still a self-run baseline, so credibility is limited by evaluator overlap and incomplete client-side model naming.

## Recommended Next Action

1. Keep this file as the published baseline.
2. Re-run the same 4 cases on a second named platform or a second named model string.
3. Add a second evaluator pass before making stronger public benchmark claims.
