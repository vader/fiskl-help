---
title: "Profit and Loss Report"
description: "Learn how to generate and analyze the Profit and Loss report in Fiskl to track revenue, expenses, and net profit over any time period."
keywords: ["profit and loss", "P&L", "income statement", "financial report", "compare periods", "cash accrual"]
sidebar_position: 1
tags:
  - Reporting
  - Accounting
toc_min_heading_level: 2
toc_max_heading_level: 3
---

The Profit and Loss report shows your business's financial performance over a selected period. Use it to understand whether your business is profitable, identify cost-saving opportunities, and meet tax and reporting requirements.

<details>
<summary>Why is the Profit and Loss report important?</summary>

The P&L report helps you:

- Determine if your business is making money
- Identify areas where you can reduce costs
- Fulfill requirements for tax filing and loan applications
- Make informed business decisions based on financial data

</details>

## Before You Begin

Before generating your Profit and Loss report, make sure:

- Your transactions are categorized to the correct ledger accounts
- Any bank feeds are up to date and reconciled for the period you want to report on
- You know which accounting method applies to your business — cash or accrual (see [Cash vs. Accrual accounting](/glossary/accounting-fundamentals))
- Your base currency is set correctly in [**Settings** > **Company Settings**](/settings/company-settings)

:::tip
If you have unreconciled transactions or uncategorized expenses, your report totals may not reflect the true financial position. Reconcile your accounts before sharing the report externally.
:::

## Understanding the Profit and Loss Report

The Profit and Loss report — also known as an Income Statement — tracks financial performance over a period of time. It starts with revenue and subtracts costs and expenses to calculate your net profit or loss.

Think of it as a video of your business finances: it shows how money was earned and spent during a specific timeframe. This is different from the [Balance Sheet](/reporting/balance-sheet), which captures your financial position at a single point in time.

### Key Components

Your report contains these sections:

- **Revenue** — The total amount earned from your primary business activities
- **Cost of Sales** — Direct costs associated with producing your goods or services
- **Gross Profit** — Revenue minus Cost of Sales, showing funds available to cover operating expenses
- **Operating Expenses** — Costs incurred in running your business not directly tied to production
- **Operating Profit** — Gross Profit minus Operating Expenses, reflecting core business profitability
- **Non-Operating Income and Expenses** — Income or costs unrelated to your main business operations
- **Net Profit or Loss** — The final figure showing overall profitability after all income and expenses

:::tip
Monitor your Gross Profit and Operating Profit closely. These figures help you identify whether you need to adjust pricing, reduce costs, or improve operational efficiency.
:::

## Generating Your Report

1. In the left menu, select **Accounting** > **Reports** > **Profit and Loss**
2. Select **Filters & Settings** at the top right
3. Select your date range
4. Adjust the display options as needed (see below)

### Display Options

Use these options to customize how the report appears:

- **Compare Periods** — Show multiple periods side by side
- **Cash / Accrual** — Switch between accounting methods
- **Show Unrealised FX Gains/Losses** — Include or exclude foreign exchange movements
- **Reverse Period Order** — Show periods in reverse chronological order (newest first)
- **Divide by 1000** — Scale large numbers for easier reading
- **Hide Empty Accounts** — Remove accounts with no activity from the view
- **Hide Comparisons** — Show only the primary period without comparison columns
- **Compact** — Reduce spacing between rows for a more condensed display

## Comparing Periods

You can compare up to 20 time periods side by side to track performance trends.

1. Select **Filters & Settings**, then select **Compare Periods**
2. Use the **−** and **+** buttons to set how many previous periods to include. For example, entering 2 adds two earlier periods as extra columns alongside your current period.
3. The report updates to show each period as a separate column, with differences in both monetary values and percentages

Comparing periods helps you identify trends, seasonality patterns, and unusual variances in your business performance.

## Cash vs. Accrual Accounting

Fiskl supports both accounting methods for your Profit and Loss report:

- **Cash** — Records income when payment is received and expenses when paid
- **Accrual** — Records income when earned and expenses when incurred, regardless of when cash changes hands

Select the method in **Filters & Settings** to switch between them. Learn more about [Cash vs. Accrual accounting](/glossary/accounting-fundamentals).

## Analyzing Your Report

To get the most value from your Profit and Loss report:

1. **Review regularly** — Conduct monthly or quarterly reviews to stay on top of financial performance
2. **Compare to previous periods** — Look for trends, patterns, and seasonality in your business
3. **Calculate key ratios** — Determine metrics like gross profit margin and operating profit margin
4. **Investigate variances** — When you notice significant changes, explore the underlying causes
5. **Use for forecasting** — Apply insights from your report to budget planning and financial projections

:::tip
In the detailed view, select any total to see all related transactions. This helps you investigate specific entries and understand the numbers behind your report.
:::

## Exporting and Sharing

To export your report:

1. Select the export button at the top right of the screen
2. Select **Google Sheets** or **Excel** format
3. Choose between **Detailed** and **Summary** views

All exported reports include a timestamp and the selected accounting method for reference.

## Adding Notes

1. Select the note icon at the top right of the screen
2. Enter your comments or explanations
3. Your notes are included when you export the report

## Common Issues

<details>
<summary>My report totals don't match what I expect</summary>

This is usually caused by one of the following:

1. Transactions are assigned to the wrong ledger account — review your [Chart of Accounts](/accounting/chart-of-accounts) and re-categorize any misassigned items
2. You are using a different accounting method (cash vs. accrual) than expected — check the method shown in **Filters & Settings**
3. Bank feeds are out of sync — go to **Banking** and trigger a manual sync, then re-run the report
4. The date range does not include all expected transactions — confirm your start and end dates in **Filters & Settings**

</details>

<details>
<summary>Foreign currency amounts look incorrect</summary>

Fiskl converts foreign currency transactions to your base currency using the exchange rate at the time of the transaction. If you have enabled **Show Unrealised FX Gains/Losses** in **Filters & Settings**, the report also includes unrealized movements from open invoices or balances.

To review exchange rates on specific transactions, select the transaction total in the detailed view to drill down into the underlying entries.

</details>

<details>
<summary>The Compare Periods option is not showing differences</summary>

If the comparison columns appear but show no variance figures, check that **Hide Comparisons** is not enabled in **Filters & Settings**. If variance columns are still missing, confirm that both periods contain transaction data — empty periods do not generate comparison figures.

</details>

<details>
<summary>I can't see certain accounts in the report</summary>

If **Hide Empty Accounts** is enabled in **Filters & Settings**, ledger accounts with no activity during the selected period are hidden. Disable this option to show all accounts. If an account is still missing, confirm it is assigned to the correct account type in your [Chart of Accounts](/accounting/chart-of-accounts).

</details>

## Related Topics

- [Balance Sheet](/reporting/balance-sheet) — View your financial position at a point in time
- [Cash Flow Report](/reporting/cash-flow) — Track cash movements in and out of your business
- [Chart of Accounts](/accounting/chart-of-accounts) — Manage the ledger accounts that drive your reports
- [Accounting Fundamentals](/glossary/accounting-fundamentals) — Understand cash vs. accrual and other key concepts
- [Bank Account Reconciliation](/core-features/accounting/journal-entries/guides/bank-account-reconciliation) — Ensure your transactions are accurate before reporting
