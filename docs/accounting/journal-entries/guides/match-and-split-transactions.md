---
title: "Matching and Splitting Transactions"
description: "Learn how to match bank transactions to invoices and expenses, and split transactions across multiple accounts in Fiskl."
keywords: ["transaction matching", "split transaction", "reconcile", "bank transactions", "multi-currency", "accounting"]
sidebar_position: 5
tags:
  - Accounting
  - Journal entry
  - Transactions
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to match bank transactions to your recorded financial activities and split transactions across multiple accounts in Fiskl.

## Before You Begin

- Your bank account is connected and transactions have been imported into Fiskl
- The record you want to match has already been created — an invoice to a client, a vendor bill (added via Accounts Payable or AI Expense), or an incoming or outgoing payment
- For multi-currency matching, the relevant currencies are enabled in [Currency Management](/settings/currency-management)

## What is transaction matching?

Transaction matching lets you reconcile your recorded financial activities with your bank transactions. This keeps your accounting records accurate and ensures your financial data reflects your actual position.

Common matching scenarios include:

- Matching an expense to a bank transaction
- Matching an invoice to a received payment
- Matching an invoice payment to a received payment
- Reconciling a batch payment (such as a Stripe payout) with multiple invoices
- Matching a received payment to an Accounts Receivable transaction

## How to match transactions

1. In the left sidebar, select **Accounting** > **Chart of Accounts** or **Accounting** > **Transactions**
2. Find the ledger account you want to work on and open it
3. Select **Show matches** on the transaction
4. Choose the corresponding transaction or transactions from the list
5. Review the match details
6. Select **Save** to complete the process

:::info
When you match a payment to an invoice, Fiskl automatically creates a payment record for that invoice.
:::

## How to match transactions in different currencies

The process is the same as a standard match. When working with multi-currency transactions, Fiskl displays the applicable exchange rates. You can adjust amounts or rates as needed to balance the transaction.

## What is transaction splitting?

Splitting lets you divide a single transaction into multiple parts, assigning each part to a different ledger account or category. This is useful for accurately recording complex expenses or income.

<details>
<summary>See an example of a real world split transaction</summary>

Imagine you're a freelance marketing consultant who attends a professional conference. You pay a single fee of $1,500 for the event, but this fee covers multiple aspects of your business expenses.

Here's how you might split this transaction:

- $800 for conference registration (Expenses > Operating Expenses > Education and Training)
- $400 for workshop materials (Expenses > Operating Expenses > Office Supplies)
- $300 for included accommodation (Expenses > Operating Expenses > Travel — Accommodation)

This split lets you accurately categorise your expenses for both accounting and tax purposes:

- The conference registration fee is a direct professional development expense
- The workshop materials are office supplies you'll use beyond the conference
- The accommodation portion is a travel expense

By splitting the transaction this way, you can:

- More accurately track different types of business expenses
- Better understand where your professional development budget is being allocated
- Potentially claim different tax deductions based on expense categories
- Gain insights into the cost breakdown of attending professional events

</details>

## How to split transactions

1. In the left sidebar, select **Accounting** > **Chart of Accounts** or **Accounting** > **Transactions**
2. Find the transaction you want to split and open it
3. Select **Split**
4. Add new split lines, specifying the amount, ledger account, and optionally a vendor or client for each
5. Verify the split amounts match the total transaction amount
6. Select **Save** to confirm

:::info
Fiskl displays transaction amounts as positive by default. For credit transactions, enter split amounts as negative numbers to record them correctly.
:::

<details>
<summary>Tips for effective splitting</summary>

- If the sum of the splits don't balance, Fiskl shows the remaining difference. Select the difference to automatically add a new split line for that amount
- Use meaningful descriptions and attach supporting files and images
- To make changes, open the transaction and edit the split lines directly

</details>

## Matching and splitting with multiple currencies

Fiskl supports matching and splitting across different currencies. When you match or split a multi-currency transaction, Fiskl displays the exchange rates for each currency involved. You can adjust amounts or rates to balance the transaction, and choose which currency rate to adjust when working with multi-currency splits.

Accurate matching and splitting is the foundation of reliable financial reporting in Fiskl.

## Common Issues

<details>
<summary>No matches appear when I select Show matches</summary>

This usually means the transactions on both sides have not been imported or recorded yet. Check that:

1. Your bank feed has synced — go to **Accounting** > **Transactions** and trigger a manual sync if needed
2. The corresponding invoice, expense, or payment exists and is in the correct status
3. The transaction amounts are close enough for Fiskl to suggest a match (small discrepancies due to fees are normal — you can adjust manually)

</details>

<details>
<summary>My split amounts do not add up to the total</summary>

Fiskl displays the unallocated difference at the top of the split panel. Select the difference amount to automatically create a new split line for the remaining balance. All split lines must total the original transaction amount before you can save.

</details>

<details>
<summary>The exchange rate shown for a multi-currency match looks incorrect</summary>

Fiskl uses the exchange rate at the time the transaction was recorded. You can manually adjust the rate or the converted amount directly in the match panel. If you need a specific rate for compliance purposes, enter it before selecting **Finish**.

</details>

<details>
<summary>A bank transaction appeared after I already recorded it manually — now I have a duplicate</summary>

This can happen when automatic bank feeds are delayed by a few days. If you recorded a transaction manually and the same transaction then imports automatically, both will appear in your unmatched list.

Select **Show matches** on the manually recorded transaction and match it to the imported bank transaction. This reconciles them and clears both from your unmatched list. To avoid this situation, check your unmatched bank transactions before adding entries manually.

</details>

<details>
<summary>How do I review or adjust automatically matched or categorised transactions?</summary>

Fiskl can automatically match bank transactions to invoices and expenses, and categorise transactions based on learned patterns. Both settings are found in **Accounting** > **Accounting Settings**.

We recommend reviewing automatically matched and categorised transactions regularly to ensure everything is recorded as expected. If you prefer to manage matching and categorisation manually, you can turn either setting off in **Accounting Settings**.

</details>

## Related Topics

- [Manual Transactions](/accounting/journal-entries/guides/manual-transactions) — Record transactions manually in your ledger accounts
- [Moving Transactions Between Accounts](/accounting/journal-entries/guides/move-transactions) — Transfer transactions to the correct ledger account
- [Multi-currency Transactions](/accounting/journal-entries/guides/multi-currency-transactions) — Understand how Fiskl handles exchange rates and currency conversion
- [Chart of Accounts](/accounting/chart-of-accounts) — View and manage your ledger account structure
