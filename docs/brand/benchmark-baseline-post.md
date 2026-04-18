# The first PM Agent Benchmark baseline is live

The first public benchmark baseline for this repository is now live.

Most important caveat first:

This is **not** an independent third-party evaluation.
It is a `self-run baseline` from the current Codex App session.

I still decided to publish it.

Because benchmark work becomes useless when it does one of two things:

- talks only about methodology and never shows results
- publishes flattering scores without showing the limits

This run used 4 fixed cases:

- AI feature shaping
- sparse-context robustness
- PRD decomposition and review
- pricing and packaging boundary

Current result:

- Routing: `12 / 12`
- Output: `25 / 28`
- Total: `37 / 40`

The interesting part is not the score.

The interesting part is the failure pattern.

This run exposed two clear weaknesses:

1. under sparse context, the system can still become structured too early
2. in PRD work, the review-gate language can still become sharper

That is why benchmark matters.

Not because it helps claim “the model is strong”.
Because it makes the next fix obvious.

If you want to inspect the baseline directly:

- Result file: `evals/results/2026-04-18-codex-app-gpt-5-self-run.md`
- Leaderboard: `docs/benchmarks/LEADERBOARD.md`
- First Public Run pack: `docs/benchmarks/FIRST_PUBLIC_RUN.md`

The next step is not adding more skills.

The next step is turning this into a benchmark others can compare against.
