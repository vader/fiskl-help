---
title: "Trial Balance Report"
description: "Generate and analyse the Trial Balance report in Fiskl to verify bookkeeping accuracy and prepare financial statements."
keywords: ["trial balance", "debit", "credit", "accrual", "cash basis", "financial reports", "bookkeeping"]
sidebar_position: 5
slug: /core-features/accounting/reports/trial-balance
tags:
  - Accounting
  - Reports
  - Trial Balance
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to generate and analyse the Trial Balance report in Fiskl. Use this report to verify that your total debits equal your total credits and to prepare your other financial statements. Reviewing it regularly helps you maintain clean books, catch issues early, and keep your financial statements on solid ground.

## What is the Trial Balance Report?

The Trial Balance report lists every ledger account with its debit or credit balance. It confirms that your books are mathematically balanced before you produce other financial statements.

<details>
<summary>Why is the Trial Balance important?</summary>

The Trial Balance report helps you:

- Identify accounting errors and discrepancies before they affect your financial statements
- Serve as the starting point for preparing your Balance Sheet and Profit and Loss report
- Get a quick overview of all ledger account balances
- Spot unusual balances or trends that may need investigation

</details>

## Trial Balance vs. Other Financial Reports

The Trial Balance differs from your other financial reports in important ways.

- **Trial Balance** — A working document that lists all ledger accounts with their debit or credit balances. It confirms mathematical accuracy but does not categorise accounts.
- **Balance Sheet** — Organises accounts into assets, liabilities, and equity. It shows your company's financial position at a specific point in time.
- **Profit and Loss report** — Shows income and expenses over a period. It demonstrates your company's profitability.

Think of the Trial Balance as the behind-the-scenes check that underpins your Balance Sheet and Profit and Loss report.

## Key Report Components

Your Trial Balance report includes these elements:

- **Account names** — Every ledger account in your general ledger
- **Account numbers** — The unique identifier for each account
- **Debit column** — The debit balance for each account
- **Credit column** — The credit balance for each account
- **Totals** — The sum of all debits and all credits, which must be equal

:::info
If total debits do not equal total credits, there is a bookkeeping error that needs to be identified and corrected before proceeding.
:::

## Before You Begin

Before generating your Trial Balance report, confirm that:

- Your transactions are posted and up to date
- You know which accounting basis (cash or accrual) you want to use
- Your reporting period is set correctly in your date selector

## Generating the Trial Balance Report

1. Select **Accounting** in the left menu.
2. Select **Reports**, then select **Trial Balance**.
3. Select **Filters & Settings** to open the configuration panel.
4. Under **Report Data Settings**, set the **As of Date** — select a preset period or enter a custom date.
5. Under **Report Basis**, toggle **Accrual Basis** on or off depending on your preferred method.
6. Toggle **Unrealized FX Gain/Loss** on to include open foreign currency balances.
7. Under **Display Options**, adjust how the report appears:
   - **Divide by 1,000** — Scales large figures for easier reading
   - **Hide Empty Accounts** — Removes accounts with no activity from the view
   - **Show Subsections** — Breaks accounts into subsections within each category
   - **Compact** — Reduces spacing for a condensed view
8. Select **Run Report** to generate the report.

<details>
<summary>Which accounting basis should I use?</summary>

Fiskl supports both cash and accrual reporting:

- **Cash basis** — Balances reflect when cash was actually received or paid. Use this if you manage your books on a cash basis or want to see your actual cash position.
- **Accrual basis** — Balances reflect when transactions were earned or incurred, regardless of when cash changed hands. Use this if your business operates on accrual accounting, or if your accountant requires it.

If you are unsure which method applies to your business, refer to [Accounting Fundamentals](/glossary/accounting-fundamentals) or check with your accountant.

</details>

:::tip
Your default cash or accrual basis can be set in [Accounting Settings](/settings/accounting-settings).
:::

## Analysing the Report

Once your report is generated:

1. **Check the totals** — Confirm that total debits equal total credits. Any difference indicates a bookkeeping error.
2. **Review account balances** — Look for unusual or unexpected balances that may need investigation.
3. **Drill into transactions** — Select any amount in the report to see the related transactions behind that balance.
4. **Compare periods** — Re-run the report for a different date to identify changes or trends over time.
5. **Prepare financial statements** — Use the balanced Trial Balance as your starting point for the Balance Sheet and Profit and Loss report.

:::tip
Select any amount in the report to see the transactions behind that figure. This helps you trace errors back to their source quickly.
:::

If you need help interpreting your balances, select the **Ask Fi** icon in the top right of the screen. Fi can help you understand what your figures mean and suggest where to investigate.

## Exporting and Sharing

To export your Trial Balance report:

1. Select the **Export** button at the top right of the screen.
2. Choose **Google Sheets**, **Excel**, or **CSV** format.

All exported reports include the report date, time, and the accounting basis used.

## Adding Notes

To add context or explanations to your report:

1. Select the **Note** icon at the bottom left of the screen.
2. Enter your comments in the text field.

Notes are included when you export the report.

## Common Issues

<details>
<summary>Total debits and credits do not match</summary>

A mismatch means there is an error in your bookkeeping. To investigate:

1. Select any amount in the report to view the related transactions.
2. Look for transactions that were posted to only one side of an entry.
3. Check for manual journal entries that may be missing a corresponding line.
4. Review recent imports or bank feed transactions for duplicates or mispostings.

If you cannot identify the source, select the **Ask Fi** icon in the top right of the screen for help tracing the discrepancy. If the issue persists, contact Fiskl support.

</details>

<details>
<summary>Expected accounts are not showing in the report</summary>

Accounts with no activity during the selected period may be hidden. Toggle **Hide Empty Accounts** off in **Filters & Settings**, then select **Run Report** again to show all ledger accounts.

</details>

<details>
<summary>Accrual and cash figures are different</summary>

This is expected. Cash basis shows balances based on actual cash movement. Accrual basis includes transactions that have been earned or incurred but not yet settled. The difference typically relates to unpaid invoices and outstanding bills.

</details>

<details>
<summary>Unrealized FX Gain/Loss is not appearing</summary>

The **Unrealized FX Gain/Loss** toggle is off by default. Open **Filters & Settings**, toggle **Unrealized FX Gain/Loss** on under **Report Basis**, then select **Run Report** to include open foreign currency balances in your report.

</details>

## Related Topics

- [Balance Sheet](/reporting/balance-sheet) — View your assets, liabilities, and equity at a point in time
- [Profit and Loss](/reporting/profit-and-loss) — Review income and expenses over a period
- [General Ledger](/reporting/general-ledger) — See a full transaction-level view of every ledger account
- [Accounting Fundamentals](/glossary/accounting-fundamentals) — Learn about cash vs. accrual accounting and core bookkeeping concepts
- [Chart of Accounts](/accounting/chart-of-accounts) — Manage the ledger accounts that appear in your Trial Balance
