---
slug: 2026-07-20-schedules
title: Automated schedules — depreciation, amortisation and recurring journals
authors: [shawn]
tags: [new-release, platform-update]
date: 2026-07-20T09:00
description: Fiskl now automates depreciation, prepayments, deferred revenue and recurring journals, with an asset register and reviewable schedules.
---

The adjusting entries that fill a month-end close — depreciation, prepayments, deferred revenue, recurring journals — now run themselves in Fiskl. You set up the schedule once, review the full plan before anything posts, and the entries appear on the right date.

<!-- truncate -->

## Why we did this

These entries are repetitive, easy to forget, and unforgiving when they are missed. They are also mechanically similar: each one spreads or repeats an amount across time on a fixed cadence. So we built a single schedule engine underneath, and put four features on top of it. The accounting is done properly first; the simple view sits on top of it, not instead of it.

## What this means for you

There is now an **asset register** under Accounting > Fixed assets. Each asset shows its cost, net book value, method and progress, and its depreciation posts automatically each period. You can depreciate straight-line, reducing-balance or sum-of-years — or use a **custom rule**: a declarative table such as a jurisdiction rate schedule (40/20/20/20 over four years), authored in percentages or in plain amounts if you think in figures. Rules are approved once and then reused across assets. See [Fixed Assets and Depreciation](/accounting/schedules/fixed-assets).

The same engine drives three more schedules: [prepayments and amortisation](/accounting/schedules/prepayments), [deferred revenue recognition](/accounting/schedules/deferred-revenue), and [recurring journal entries](/accounting/schedules/recurring-entries) for fixed items like rent or retainers.

Every schedule is something you can review, not a rule that fires in the dark. You see each future entry with its date, amount and remaining balance before the first one posts, and what has posted, what is due and what is outstanding at any point. You can pause a schedule, dispose of an asset, and — new this week — undo a disposal or reverse posted entries when you need to correct course. Entries in a closed period are reversed with a balancing entry rather than deleted, so your filed periods stay intact.

Start at the [Schedules Overview](/accounting/schedules/overview) when you are ready.

— Shawn Vader, CTO
