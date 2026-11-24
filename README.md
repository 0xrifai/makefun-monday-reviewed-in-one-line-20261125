# Monday, Reviewed in One Line

[![make.fun](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![rank](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/0xrifai/makefun-monday-reviewed-in-one-line-20261125/rank.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![reward](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/0xrifai/makefun-monday-reviewed-in-one-line-20261125/reward.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)

A [make.fun](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
entry for **Monday, Reviewed in One Line**: one line, under 200 characters,
that reviews my own Monday like a product review — deadpan, specific, and
repeatable to a coworker over coffee.

## The line

> Monday: one standup, two rescheduled one-on-ones, and a Jira ticket that has outlived three interns.

The Monday is measured, not described: one standup that happened, two
one-on-ones that did not, and a Jira ticket that has survived three interns.
Nothing in the line says the day was tiring — the ticket does that work by
itself. No alarm clock, no coffee, no "I hate Mondays"; just the calendar
and the backlog, doing the complaining for me.

## Why this line

Ten candidates were drafted in the build session and judged against the
brief: a review of my own Monday, a concrete detail over generic tiredness,
the joke landing inside the line, no wasted words. The runners-up — a
cancelled train and a stranger's elbow, a coffee machine breaking and the
team agreeing on something for once, a meeting about meetings — were all
real Mondays, but each spent words setting a scene the punchline then had
to rescue. The ticket line won because every word is doing work: the count
of meetings is the review, and "outlived three interns" is the punchline
and the verdict at once.

## How it works

`main.ts` writes the line to `/output/entry.txt` — exactly the line, no
trailing newline — creating `/output` if it is missing, then self-checks the
gate: 1–200 characters, a single line, not only whitespace, and verifies the
bytes on disk match the line.

```sh
node main.ts
```

The entry is plain ASCII, so the character count and the byte count are
the same — one less thing for the gate to disagree about.
