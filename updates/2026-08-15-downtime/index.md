---
slug: 2026-08-15-downtime
title: Planned downtime for a major release
authors: [shawn]
tags: [announcement, platform-update]
date: 2026-08-15T09:00
description: Fiskl will be unavailable for a period on [DATE] while we complete a major release that requires a database upgrade and restart.
---

Fiskl will be unavailable on **16th August** from **8AM** to **11AM** GMT while we complete a major release. This one includes a significant database upgrade, which means the platform has to come down rather than update in place.

<!-- truncate -->

## Why we did this

We release most weeks without you noticing, and that is deliberate — almost everything we ship goes out while the platform stays up. This release is different. It involves an upgrade to the database itself, and a database cannot be upgraded and restarted while it is serving your work. There is no version of this we can do live.

Downtime of this kind happens roughly once a year, and we do not schedule it lightly. We would rather take the platform down cleanly for a defined window and take the time to do the work properly than rush it and risk your data.

## What this means for you

Fiskl will not be reachable during the window — the web app, the mobile apps, and anything connected through the API. Work saved before the window is safe and will be there when we are back. Nothing is lost, and there is nothing you need to move or export beforehand.

If you have a filing deadline or a payment run falling on that day, do it outside the window.

## What to do next

Nothing. We will bring the platform back as soon as the work is verified, and we will update this post if the window changes.

— Shawn Vader, CTO
