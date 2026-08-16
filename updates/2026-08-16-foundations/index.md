---
slug: 2026-08-16-foundations
title: Inventory and tax setup arrive, plus four weeks of smaller fixes
authors: [shawn]
tags: [new-release, platform-update]
date: 2026-08-16T09:00
description: Inventory is now available in beta, the first half of the tax rework has landed, and a month of smaller improvements has arrived alongside them.
---

Four weeks between releases is a long gap for us. The reason is that we have had three large pieces of work running at once, and this release is where the first two of them become something you can actually use.

<!-- truncate -->

## Why this took a month

Most of our releases are a steady stream of improvements. This one is not. We have been building out three foundational parts of the platform — a rework of how tax is handled, e-invoicing, and inventory — and each of them touches enough of the system that we did not want to ship them piecemeal.

Inventory is ready, and so is the first half of the tax rework. E-invoicing has had its groundwork laid and will arrive over the coming weeks rather than all at once.

## Inventory, in beta

Inventory tracking is now available, and we are calling it beta deliberately. It is a large feature and we want more real use behind it before we treat it as settled. It is good enough to work with, and we would rather have you using it and telling us what is wrong than sit on it for another month.

Once you track a product, Fiskl records every stock movement and posts the matching accounting entries for you — no manual journals. Purchase orders, goods receipts, bills and adjustments all move stock, and invoicing a tracked product moves its cost into cost of goods sold automatically.

The part worth knowing about before you start is valuation. You can choose weighted average, where every receipt blends into a single average cost, or FIFO, where each receipt keeps its own cost layer and sales consume the oldest first. Weighted average suits most businesses; FIFO is the better fit when your costs move a lot or your accountant asks for it. Choose before you receive any stock — changing it later does not restate what you already hold.

Start with [Setting Up Inventory](/inventory/setting-up-inventory), and [Inventory](/inventory/overview) explains how the whole thing fits together.

## Tax setup

The tax work splits into two halves: describing the taxes you charge, and producing the returns from them. This release is the first half.

A tax rate now records what the tax is, not only what it charges. When you add or edit one you answer a few short questions: whether it is taxed, taxed at 0%, exempt or out of scope, what kind of tax it is, and whether you can reclaim it.

The reason that matters is that a percentage does not say much. Four rates can all show 0% on an invoice and belong in four different places on a tax return. Zero-rated sales are taxable and count towards your sales total. Exempt sales are not taxable, and having them can restrict how much tax you reclaim. Out of scope sales do not belong on the return at all. Reverse charge sales show no tax because your customer accounts for it, and they still have to be declared. The invoice looks right in all four cases, which is why this kind of mistake usually goes unnoticed until someone files a return.

Answering the questions once, on the rate, is what lets everything downstream put each transaction in the right place. The wording is the same wherever you are registered, so a South African VAT rate and a Singapore GST rate are described the same way and only the answers differ.

Tax agencies changed alongside. Each one now records the authority you are registered with, the region you file in, and how often you file. The authority list is filtered to the country, so a Canadian registration offers the CRA and the provincial ministries and nothing else.

Tax rates you created before this release are marked **Needs classification**. Open each one and answer the questions. It takes about a minute per rate and you only do it once. This covers the 27 European Union member states, the United Kingdom, United States, Canada, Australia, Singapore, the United Arab Emirates and South Africa.

Returns themselves are not in this release. We shipped the setup first on purpose: everything you classify now applies to the transactions you record from here on, so by the time returns arrive the history behind them is already correct. The other way round would mean going back over months of transactions.

[Tax Management](/settings/tax-management) covers setting up agencies, rates and groups.

## Everything else

Alongside that, a month of smaller work: chart of accounts templates, prepaid amortisation and deferred revenue schedules that post their own journal entries, recurring fixed entries, and webhooks on the new API. On the fixes side, an amount input that switched between German and US number formats, a GoCardless payment linkage problem, an invoice screen that refreshed in a loop on slower machines, duplicated products dropping fields, and scrollbars ignoring dark mode.

If you sell physical goods and want to try inventory, the guides above are the place to start. If you charge tax, the classification pass is the one thing in this release that needs something from you.

— Shawn Vader, CTO
