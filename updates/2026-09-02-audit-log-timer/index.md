---
slug: 2026-09-02-audit-log-timer
title: You can now see who changed what, and why an email never arrived
authors: [shawn]
tags: [new-release, platform-update]
date: 2026-09-02T09:00
description: A full audit log with email delivery reasons, a round of Fi and API improvements, and the timer returns as the last feature of the migration.
---

Fiskl now shows you the history behind your books — what changed, when, and who changed it — along with what happened to every email you sent. Alongside it, a significant round of improvements to Fi, more methods on the public API, and the return of the timer.

<!-- truncate -->

## An audit trail you can actually read

Fiskl has always recorded changes. What it did not do was show them to you. The audit log now surfaces that history in the interface: what changed, when, and who changed it. You can see it across your entire account in your settings, or directly on the transaction itself.

The part we think you will use most is the email side of it. When a client says they never received an invoice, you can now see what happened to that email — whether it was delivered, bounced, or rejected, and the reason why. Previously the honest answer was that we could not tell you without going and looking. Now you can check for yourself.

Our [Audit Log guide](/settings/audit-log) explains what is recorded and how to filter it.

## Fi and the Public API

Fi has had a significant round of improvements this release, and this is the start rather than the end of that work — we will keep pushing on it over the coming months.

The public API has gained more methods. We will have more to say shortly about general MCP availability and our Claude integration, which is close enough that it deserves its own announcement rather than a paragraph here. You can find the current endpoints in the [Public API documentation](/integrations/public-api/overview).

## The timer is back

We were genuinely undecided about whether to bring the timer across from the old platform. It was one of the less used parts of it, and rebuilding a feature is not free. What settled it was how often you asked. The volume of requests made the decision for us, so rather than port it as it was, we took the opportunity to improve it while it was open.

That also completes the migration. Every feature that existed on the old platform now exists on the new one, which means we are no longer maintaining two systems and no longer holding work back to keep them in step. From here, everything we build goes into one place.

See [Time tracking](/time-and-mileage/time-tracking) for details on how the new timer works.

## MTD

We are still waiting on HMRC. Making Tax Digital is built and ready to release, and the only thing standing between it and you is the credentials HMRC has to issue us. That has taken considerably longer than they told us it would. We will release it the day they arrive.

— Shawn Vader, CTO