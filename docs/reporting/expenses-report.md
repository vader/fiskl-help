---
title: "Expenses Report"
description: "Generate the Expenses report in Fiskl to see business expenses grouped by category or by vendor, with payment status, tax visibility, and totals."
keywords: ["expenses report", "expense report", "spending by category", "expenses by vendor", "vendor expenses", "unpaid bills", "expense totals"]
sidebar_position: 4
tags:
  - Reports
  - Expenses
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to generate and use the Expenses reports in Fiskl. Use these reports to see every business expense with totals, payment status, and vendor filtering — without reading accountant-style reports.

## What are the Expenses Reports?

Fiskl offers two Expenses reports that show the same underlying data, grouped differently:

- **Expenses** groups every expense by category, sorted alphabetically. Use it to see how much you spent on Fuel & Mileage, Office Supplies, and other categories.
- **Expenses by Vendor** groups the same expenses by vendor or payee, sorted by amount spent, largest first. Use it to see who you spend the most money with.

Both reports show the same line-level detail: date, vendor, category, description, tax, amount, and payment status. Each group shows its own subtotal, and the report shows a grand total at the top. Because both reports draw from the same data, their grand totals always match for the same date range and filters.

These reports are the easiest way to answer everyday questions like:

- How much did I spend this quarter, and on what?
- Which vendor do I spend the most money with?
- Which bills are still unpaid or overdue?
- Did I forget to add tax to an expense?

The totals in these reports always match your other financial reports, such as [Profit and Loss](/reporting/profit-and-loss) and [Transactions by Account](/reporting/transactions-by-account), for the same period and settings. It is the same accounting data, presented in a simpler way.

:::tip
If you find the [General Ledger](/reporting/general-ledger) report too technical, use an Expenses report instead. It shows the same expense activity in plain language.
:::

## Before You Begin

Before generating an Expenses report, confirm that:

- Your expenses are recorded in Fiskl — see [How to Add Expenses](/expenses/adding-expenses)
- You know the date range you want to review
- You know whether you want to include unpaid bills

## Generating the Report

1. Select **Accounting** in the left menu.
2. Select **Reports**, then select **Expenses** or **Expenses by Vendor**.
3. Select a **Date Range** from the pre-set periods or choose a custom range.
4. Under **Categories**, select one or more expense categories, or leave it empty to include all of them.
5. Select **Run Report**.

Once a report has run, this button changes to **Refresh**. Select it again after making changes elsewhere in Fiskl — for example, after editing a transaction in another tab — to reload the report with the latest data. Categories or vendors you have expanded stay expanded after you refresh, so you do not lose your place.

## Report Settings

The settings panel has two groups of options. The first group changes what data is included and requires running the report again. The second group filters what is shown and applies immediately.

### Report Data Settings

- **Date Range** — The period the report covers. You can pick a pre-set period or a custom range.
- **Categories** — Choose specific expense categories, such as Fuel & Mileage or Office Supplies. Leave empty to include all expense categories. This filter is available on both reports, including Expenses by Vendor, so you can see vendor spending within a specific category.
- **Include unpaid bills** — Toggle this on to show expenses when incurred, including unpaid bills. Toggle it off to show only paid expenses.

### Filters

- **Vendor or payee** — Enter a name to show only expenses for that vendor. Matching is not case sensitive.
- **Status** — Show **All**, **Paid only**, or **Unpaid only** expenses. Unpaid includes due, overdue, and partially paid expenses.

Vendor and status filters apply immediately, without re-running the report.

## Reading the Report

**Expenses** groups expenses by category, sorted alphabetically. **Expenses by Vendor** groups the same expenses by vendor or payee, sorted by total amount spent, from largest to smallest. Expenses with no vendor or payee recorded appear together in a **No vendor** group.

Each group header shows the group name, the number of expenses, and the subtotal. The grand total sums all visible groups.

Each expense line shows:

- **Date** — When the expense was incurred
- **Vendor** — The vendor or payee name
- **Category** — The expense category
- **Description** — The expense description
- **Status** — **Paid**, **Due**, **Overdue**, or **Partial**
- **Tax** — The tax amount for the line, or a dash if no tax applies
- **Amount** — The amount in your base currency

For multi-currency expenses, the line also shows the original amount and currency alongside the base currency amount.

:::tip
Use the **Tax** column to spot expenses that are missing tax at a glance, without opening each transaction.
:::

### Expanding and Collapsing Groups

Select a group header to expand or collapse it. Select **Expand All** or **Collapse All** in the toolbar to open or close every group at once. This control is available regardless of how many expenses the report contains.

### Searching Within the Report

Press `Ctrl+F` (or `Cmd+F` on Mac) to open the report's built-in search. This is a Fiskl feature, not your browser's search. Enter a term to highlight every matching expense across all groups. Matching groups expand automatically, and you can step through the results one by one.

### Opening a Transaction

Select an expense line to open the underlying transaction in a dialog. From there, you can review or edit the full details without leaving the report.

## Exporting the Report

Select **Export** to download the report as Excel, CSV, or PDF. The export contains exactly what you see on screen, including your current filters, grouping, and any original foreign-currency amounts shown on multi-currency lines.

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

If the whole Status column is missing, select **Refresh** so Fiskl can reload the Accounts Payable payment data.

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
