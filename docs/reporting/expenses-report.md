---
title: "Expenses Report"
description: "Generate the Expenses report in Fiskl to see all business expenses grouped by category, with payment status, vendor filters, and totals."
keywords: ["expenses report", "expense report", "spending by category", "vendor expenses", "unpaid bills", "expense totals"]
sidebar_position: 4
tags:
  - Reports
  - Expenses
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This guide explains how to generate and use the Expenses report in Fiskl. Use this report to see every business expense grouped by category, with totals, payment status, and vendor filtering — without reading accountant-style reports.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## What is the Expenses Report?

The Expenses report shows all your expenses for a chosen period, grouped by expense category. Each category shows its own subtotal, and the report shows a grand total at the top. Every line shows the date, vendor, description, amount, and whether the expense is paid.

This is the easiest way to answer everyday questions like:

- How much did I spend this quarter, and on what?
- Which bills are still unpaid or overdue?
- How much have I paid a specific vendor this year?

The totals in this report always match your other financial reports, such as [Profit and Loss](/reporting/profit-and-loss) and [Transactions by Account](/reporting/transactions-by-account), for the same period and settings. It is the same accounting data, presented in a simpler way.

:::tip
If you find the [General Ledger](/reporting/general-ledger) report too technical, use the Expenses report instead. It shows the same expense activity in plain language.
:::

## Before You Begin

Before generating your Expenses report, confirm that:

- Your expenses are recorded in Fiskl — see [How to Add Expenses](/expenses/adding-expenses)
- You know the date range you want to review
- You know whether you want to include unpaid bills

## Generating the Report

1. Select **Accounting** in the left menu.
2. Select **Reports**, then select **Expenses**.
3. Select a **Date Range** from the pre-set periods or choose a custom range.
4. Under **Categories**, select one or more expense categories, or leave it empty to include all of them.
5. Select **Run Report**.

## Report Settings

The settings panel has two groups of options. The first group changes what data is included and requires running the report again. The second group filters what is shown and applies immediately.

### Report Data Settings

- **Date Range** — The period the report covers. You can pick a pre-set period or a custom range.
- **Categories** — Choose specific expense categories, such as Fuel & Mileage or Office Supplies. Leave empty to include all expense categories.
- **Include unpaid bills** — When on, the report shows expenses when they were incurred, including bills you have not paid yet (accrual basis). When off, the report shows only paid expenses (cash basis).

### Filters

- **Vendor or payee** — Type a name to show only expenses for that vendor. Matching is not case sensitive.
- **Status** — Show **All**, **Paid only**, or **Unpaid only** expenses. Unpaid includes due, overdue, and partially paid expenses.

Vendor and status filters apply immediately, without re-running the report.

## Reading the Report

The report groups expenses by category. Each category header shows the category name, the number of expenses, and the subtotal. The grand total sums all visible categories.

Each expense line shows:

- **Date** — When the expense was incurred
- **Vendor** — The vendor or payee name
- **Description** — The expense description
- **Status** — **Paid**, **Due**, **Overdue**, or **Partial**
- **Amount** — The amount in your base currency

For multi-currency expenses, the line also shows the original amount and currency alongside the base currency amount.

### Expanding and Collapsing Categories

Select a category header to expand or collapse it. Select **Expand All** or **Collapse All** in the toolbar to open or close every category at once. For very large reports, expand categories individually for better performance.

### Searching Within the Report

Press `Ctrl+F` (or `Cmd+F` on Mac) to open the report's built-in search. This is a Fiskl feature, not your browser's search. Enter a term to highlight every matching expense across all categories. Matching categories expand automatically, and you can step through the results one by one.

### Opening a Transaction

Select an expense line to open the underlying transaction. This takes you to the transaction in your accounting, where you can review or edit the full details.

## Exporting the Report

Select **Export** to download the report. The export contains exactly what you see on screen, including your current filters and category grouping.

## Common Issues

<details>
<summary>An expense I expected is missing from the report</summary>

Check these settings:

1. Confirm the **Date Range** covers the expense date.
2. If **Include unpaid bills** is off, unpaid expenses are hidden. Turn it on to see them.
3. Clear the **Vendor or payee** and **Status** filters.
4. Confirm the expense was recorded — see [How to Add Expenses](/expenses/adding-expenses).

</details>

<details>
<summary>An expense shows no status, or shows Overdue unexpectedly</summary>

The status comes from the expense's due date in Accounts Payable. If the Accounts Payable transaction has no due date, Fiskl treats the transaction date as the due date. This means an unpaid expense without a due date shows as **Overdue** once its transaction date has passed. To change this, open the transaction and set the correct due date.

Expenses recorded directly from bank transactions have no Accounts Payable entry and always show as **Paid**.

If the whole Status column is missing, re-run the report so Fiskl can reload the Accounts Payable payment data.

</details>

<details>
<summary>The totals look different from my Profit and Loss report</summary>

The two reports match when they cover the same period and the same basis. Check that both reports use the same date range. Then check that **Include unpaid bills** matches the cash or accrual setting on your Profit and Loss report.

</details>

## Related Topics

- [How to Add Expenses](/expenses/adding-expenses) — The three ways to record an expense in Fiskl
- [AI Expenses Overview](/expenses/ai-expenses/overview) — Automated expense capture from receipts and invoices
- [Profit and Loss Report](/reporting/profit-and-loss) — Revenue, costs, and profit for a period
- [Transactions by Account Report](/reporting/transactions-by-account) — Full transaction detail across ledger accounts
