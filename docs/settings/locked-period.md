---
title: "Locked Period"
description: "Learn how the locked period in Fiskl closes your accounts up to a set date, what it prevents, and why matching transactions into a locked period still works."
keywords: ["locked period", "close accounts", "period lock", "accounting settings", "year end", "financial close"]
sidebar_position: 4
tags:
  - Accounting
  - Settings
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains the locked period in Fiskl — what it is, how to set it, and what it prevents. Use a locked period to protect finalised accounts from accidental changes after you close a financial period.

## What Is a Locked Period?

A locked period marks the point up to which your accounts are considered closed. It is a single date: everything on or before that date is locked, and everything after it remains open.

For example, if you close your 2025 accounts, you set the locked period to 31 December 2025. From that point, Fiskl treats all activity dated on or before 31 December 2025 as final.

Locking a period protects finalised figures after you have reviewed them, filed your taxes, or shared reports with your accountant. It prevents changes that would alter accounts you have already closed.

## What a Locked Period Prevents

When a period is locked, you cannot add or change anything dated within it that affects your accounting. This includes:

- Accounting transactions and journal entries
- Invoices and invoice payments
- Expenses and vendor payments
- Moving transactions between ledger accounts within the locked period

In short, any action that would change the accounting figures for a locked date is blocked.

:::info
The locked period applies to the transaction date, not the date you enter it. An entry dated within the locked period is blocked even if you create it today.
:::

## Setting the Locked Period

1. Go to **Settings** > **Accounting Settings**
2. Find the **Locked Period** setting
3. Select the date up to which you want to close your accounts
4. Select **Save**

All activity dated on or before this date is now locked. To reopen a period, change the locked period date to an earlier date, or clear it.

:::warning
Only change the locked period date once you are sure the accounts for that period are final. Reopening a locked period allows changes to figures you may have already reported to tax authorities.
:::

## Matching Transactions Into a Locked Period

You can still match a transaction to an existing transaction inside a locked period, even though the period is closed.

This works because matching does not change the accounting figures. It links two records that represent the same economic event — so there is no economic difference to the closed accounts.

**Example:** You have a transaction in November 2025, inside your locked 2025 period. In January 2026, a related bank transaction arrives. You can match the January transaction to the November one. The match is allowed because it records no new economic activity in the locked period — it only reconciles records that already exist.

:::info
Matching into a locked period is permitted because it reconciles existing records rather than adding new economic activity. Creating, editing, or deleting transactions in a locked period remains blocked.
:::

## Common Issues

<details>
<summary>I cannot save an invoice, expense, or transaction</summary>

Check the date on the record. If it falls on or before your locked period date, the action is blocked. Either change the date to fall after the locked period, or ask your accountant whether the period can be reopened.

</details>

<details>
<summary>I need to correct something in a closed period</summary>

Changes within a locked period are blocked by design to protect finalised accounts. If a correction is genuinely required, reopen the period by changing the locked period date in **Settings** > **Accounting Settings**, make your correction, then lock the period again. Check with your accountant first, as this affects figures you may have already reported.

</details>

<details>
<summary>A transaction from a new period will not match to one in the locked period</summary>

Matching into a locked period is allowed. If a match is not appearing, the cause is usually unrelated to the lock — check that both transactions exist, are uncategorised where required, and have amounts close enough for Fiskl to suggest the match. See [Matching and Splitting Transactions](/accounting/journal-entries/guides/match-and-split-transactions).

</details>

## Related Topics

- [Audit Log](/settings/audit-log) — See who changed what, including changes to the locked period itself
- [Accounting Settings](/settings/accounting-settings) — Configure the locked period and other accounting preferences
- [Matching and Splitting Transactions](/accounting/journal-entries/guides/match-and-split-transactions) — Reconcile transactions, including into a locked period
- [Moving Transactions Between Accounts](/accounting/journal-entries/guides/move-transactions) — Reassign transactions outside a locked period
- [Account Reconciliation](/accounting/reconciliation/overview) — Verify your accounts before locking a period
