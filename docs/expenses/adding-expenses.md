---
title: "How to Add Expenses"
description: "Learn the two ways to record a business expense in Fiskl — upload or create it in AI Expenses, or categorise the bank transaction directly."
keywords: ["add expense", "record expense", "create expense", "categorise transaction", "accounts payable", "expense receipt", "match bank transaction"]
sidebar_position: 2
tags:
  - Expenses
  - Accounting
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This guide explains how to record a business expense in Fiskl and helps you choose the right method. There are two ways to add an expense, and both post to your accounting immediately — there is no separate posting step.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Choose Your Method

| Your situation | Use this method |
|----------------|-----------------|
| You have a receipt or supplier invoice, and the payment has not appeared in your bank yet | [Method 1: AI Expenses](#method-1-record-the-expense-in-ai-expenses) |
| You want to record a bill you will pay later | [Method 1: AI Expenses](#method-1-record-the-expense-in-ai-expenses) |
| The payment already shows in your bank account in Fiskl | [Method 2: Categorise the bank transaction](#method-2-categorise-the-bank-transaction) |

Both methods produce the same accounting result. The expense appears in your reports as soon as you save — Fiskl posts everything automatically.

:::warning
Do not try to add an expense from inside an expense category, such as Fuel & Mileage, in your Chart of Accounts. Expense categories only display expenses — they are not where you create them. Use one of the two methods below instead.
:::

## Method 1: Record the Expense in AI Expenses

Use this method when you have a receipt or supplier invoice. Fiskl records the expense in **Accounts Payable** — the account that tracks what your business owes and has paid to vendors. This is also how you record bills you have not paid yet.

### Upload a Receipt or Invoice

1. Select **Purchasing** > **AI Expenses** in the left sidebar.
2. Select **Upload** and choose your receipt or invoice file.
3. Fiskl extracts the vendor, date, amounts, and taxes, and suggests a category.
4. Review the extracted details and adjust the category if needed.
5. Select **Save**.

For file formats, scan limits, and batch uploads, see [Uploading Expenses](/expenses/ai-expenses/uploading).

### Or Create the Expense Manually

If you have no document to upload, you can enter the expense directly:

1. Select **Purchasing** > **AI Expenses** in the left sidebar.
2. Select **Create New**.
3. Enter the vendor, date, amount, and category.
4. Select **Save**.

### What Happens Next

The expense is saved to Accounts Payable and posts to your accounting immediately. It appears in your [Expenses report](/reporting/expenses-report) and Profit and Loss right away — as an unpaid bill until the payment is matched.

When the payment appears in your bank account in Fiskl, match it to the expense. Fiskl suggests matches automatically — see [AI Expense Reconciliation](/expenses/ai-expenses/reconciliation). Matching marks the expense as paid. It does not change or remove your categories.

## Method 2: Categorise the Bank Transaction

Use this method when the payment already appears in your bank account in Fiskl and you have not recorded the expense in advance. This is the fastest way to record an expense.

1. Select **Banking** in the left sidebar and open the account with the transaction.
2. Select the transaction.
3. Select the expense category, such as **Fuel & Mileage** or **Office Supplies**.
4. Optionally, upload a receipt image to attach it to the transaction.
5. Select **Save**.

You're done. The expense posts to your accounting immediately and appears in your reports. There is no upload step, no matching step, and nothing further to do.

:::tip
Only use one method per expense. If you uploaded a receipt to AI Expenses, match the bank transaction to it — do not also categorise the bank transaction as an expense, or the expense will be counted twice.
:::

## Understanding What You See in Accounts Payable

Expenses recorded through AI Expenses live in Accounts Payable, and this can look confusing at first. One expense produces two related entries:

- **The expense entry** — Shows the vendor, the amount, and all your expense categories. This is the entry that drives your reports.
- **The balance entry** — Appears when the expense is matched with a bank payment. It records the payment and reduces what you owe. It does not repeat your categories.

Your categorisation is never lost. The categories always stay on the expense entry, even after matching. The balance entry only shows that the bill was paid.

To see all your expenses with their categories in one clear view, use the [Expenses report](/reporting/expenses-report) instead of reading Accounts Payable directly.

### Adding an Expense Directly in Accounts Payable

You can also record an expense from inside the Accounts Payable account in your transactions. An expense increases what you owe, so it is entered as a credit:

1. Open the **Accounts Payable** account in your transactions.
2. Select **+Credit**.
3. Enter the vendor, date, amount, and expense category.
4. Select **Save**.

Do not use the debit side to record an expense — debits in Accounts Payable record payments, not new bills. For comparison, an expense paid straight from a **Cash & Cash Equivalents** account appears there as a **-Credit**, because the money leaves the account.

## Common Issues

<details>
<summary>I matched my bank transaction and my categories seem to have disappeared</summary>

They have not disappeared. After matching, Accounts Payable shows a balance entry that records the payment, and this entry does not list your categories. Your categories remain on the original expense entry.

To confirm, open the [Expenses report](/reporting/expenses-report) — every expense shows under its category with a **Paid** status.

</details>

<details>
<summary>I can't add an expense inside a category like Fuel &amp; Mileage</summary>

This is by design. Expense categories in your Chart of Accounts display expenses but are not where you create them. Record the expense in **Purchasing** > **AI Expenses**, or categorise the bank transaction in **Banking**. The expense then appears under the category automatically.

</details>

<details>
<summary>My expense shows twice in my reports</summary>

This usually means the expense was recorded with both methods — once in AI Expenses and once by categorising the bank transaction. Instead of categorising the bank transaction, match it to the AI expense. To fix a duplicate, remove the category from the bank transaction and match it to the expense instead.

</details>

<details>
<summary>Do I need to post my expense to accounting?</summary>

No. Fiskl has no posting step. Every expense you save — through AI Expenses or by categorising a bank transaction — is in your accounting immediately.

</details>

## Related Topics

- [Expenses Report](/reporting/expenses-report) — See all your expenses by category with payment status
- [AI Expenses Overview](/expenses/ai-expenses/overview) — How automated expense capture works
- [Uploading Expenses](/expenses/ai-expenses/uploading) — File formats, batch uploads, and scan limits
- [AI Expense Reconciliation](/expenses/ai-expenses/reconciliation) — How matching with bank transactions works
- [Expense Categories](/expenses/expense-categories) — Manage the categories you record expenses against
