---
title: Balance Sheet Report
description: Learn how to generate and analyze your Balance Sheet report in
  Fiskl to understand your business's financial position at any point in time.
sidebar_position: 2
---


This guide explains how to generate and analyze your Balance Sheet report in Fiskl. Use it to review your business's financial position and understand what you own, owe, and retain at any point in time.



## Before You Begin

To generate your Balance Sheet, you need at least one ledger account with transactions recorded. If you are just getting started, review the [chart of accounts](/accounting/chart-of-accounts) before running reports.

## Understanding the Balance Sheet

The Balance Sheet is a financial statement that follows the fundamental accounting equation: Assets = Liabilities + Equity. It shows your financial position at a specific date — like a snapshot — rather than across a period.

**Why is the Balance Sheet important?**

The Balance Sheet helps you:

- Assess your business's financial position at a glance
- Evaluate your liquidity and ability to meet obligations
- Meet requirements for tax filing and loan applications
- Make strategic decisions based on real financial data



### Balance Sheet vs Profit and Loss

The Balance Sheet and Profit and Loss (P&L) report serve different purposes.

The **Balance Sheet** captures your financial position at a specific moment — what you own and owe on a particular date.

The **Profit and Loss** tracks your financial performance over a period. It starts with revenue, subtracts expenses, and shows your net profit or loss over weeks, months, or years.

Use both reports together for a complete view of your business health.

## Key Components

Your Balance Sheet contains three main sections.

### Assets

Assets are what your business owns or controls:

- **Current assets** — Cash, accounts receivable, inventory, and other assets convertible to cash within one year
- **Long-term assets** — Property, equipment, investments, and other assets held for more than one year

### Liabilities

Liabilities are what your business owes:

- **Current liabilities** — Accounts payable, short-term loans, and other debts due within one year
- **Long-term liabilities** — Long-term loans, bonds payable, and other debts due after one year

### Equity

Equity is the residual interest after subtracting liabilities from assets:

- Share capital
- Retained earnings
- Current year profit or loss

:::tip
Monitor your current assets and current liabilities closely. The ratio between these figures shows your short-term ability to meet immediate obligations.
:::

## Generating Your Balance Sheet

1. In the left menu, select **Accounting** > **Reports** > **Balance Sheet**
2. Select **Filters & Settings** at the top right
3. Select your date range
4. Adjust the display options as needed

### Display Options

Use these options to customise how the report appears:

- **Compare Periods** — Show multiple periods side by side
- **Cash / Accrual** — Switch between accounting methods
- **Show Unrealised FX Gains/Losses** — Include or exclude foreign exchange movements
- **Reverse Period Order** — Show periods newest first
- **Divide by 1000** — Scale large numbers for easier reading
- **Hide Empty Accounts** — Remove accounts with no activity
- **Hide Comparisons** — Show only the primary period
- **Compact** — Reduce row spacing for a condensed view

## Comparing Periods

You can compare up to 20 time periods side by side to identify trends.

1. Select **Filters & Settings**, then select **Compare Periods**
2. Use the **−** and **+** buttons to set how many previous periods to include
3. The report updates to show each period as a separate column, with differences in monetary values and percentages

Comparing periods helps you spot seasonality patterns and unusual variances in your financial position.

## Cash vs Accrual Accounting

Fiskl supports both accounting methods for your Balance Sheet:

- **Cash** — Records income when payment is received and expenses when paid
- **Accrual** — Records income when earned and expenses when incurred, regardless of when cash moves

Select your preferred method in **Filters & Settings**. Learn more about [cash vs accrual accounting](/glossary/accounting-fundamentals).

## Analyzing Your Report

Review your Balance Sheet regularly to stay informed about your financial position. These steps help you get the most from the data:

1. **Review monthly or quarterly** — Regular reviews help you catch changes early
2. **Track trends** — Compare current figures to previous periods to identify patterns
3. **Calculate financial ratios** — Use Balance Sheet figures to compute ratios like Current Ratio or Debt-to-Equity Ratio
4. **Investigate changes** — When you notice significant shifts in any category, select the total in the detailed view to see the underlying transactions
5. **Combine with other reports** — Use your Balance Sheet alongside your P&L and Cash Flow statements for complete financial insight

:::info
Select any total in the detailed view to see all related transactions. This helps you understand the details behind any summary figure.
:::

## Exporting and Sharing

To export your Balance Sheet, select **Export** at the top right of the screen and choose one of the four options:

- **Summary Excel** — Totals only, exported to Excel
- **Detailed Excel** — All line items and transactions, exported to Excel
- **Summary Google Sheets** — Totals only, opened in Google Sheets
- **Detailed Google Sheets** — All line items and transactions, opened in Google Sheets

All exported reports include a timestamp and the selected accounting method.

## Adding Notes

Add context directly to your report before sharing it with stakeholders or advisors:

1. Select **Notes** at the bottom of the report
2. Enter your comments or explanations
3. Your notes appear on the export

## Ask Fi

If you need help interpreting your Balance Sheet, ask Fi. Select **Fi** in the top right of the screen and ask questions like "What does my current ratio tell me?" or "Why has my equity changed this month?" Fi can help you understand the figures and suggest next steps.

## Common Issues

My Balance Sheet does not balance (Assets ≠ Liabilities + Equity)

An unbalanced Balance Sheet usually indicates a data entry issue or an unreconciled transaction. To investigate:

1. Run the report in **Accrual** mode to see all posted entries
2. Check your [journal entries](/accounting/journal-entries/overview) for any incomplete or one-sided postings
3. Review any manual adjustments made to ledger accounts
4. Contact support if the imbalance persists after reviewing your entries



Figures look different between Cash and Accrual views

This is expected behaviour. Cash and Accrual methods record transactions at different points in time. Invoices not yet paid appear in Accrual but not in Cash. Switch between methods in **Filters & Settings** to compare the two views.



A ledger account is missing from the report

Ledger accounts with no transactions in the selected period are hidden by default. Select **Filters & Settings** and turn off **Hide Empty Accounts** to show all accounts regardless of activity.



My export is missing data

Check whether you selected a **Summary** option instead of a **Detailed** option. Summary exports show totals only. Select **Export** again and choose either **Detailed Excel** or **Detailed Google Sheets** to include all line items and transactions.



## Related Topics

- [Profit and Loss Report](/reporting/profit-and-loss) — Track revenue and expenses over a period
- [Cash Flow Report](/reporting/cash-flow) — Understand how cash moves through your business
- [Trial Balance](/reporting/trial-balance) — Review all ledger account balances before closing a period
- [Chart of Accounts](/accounting/chart-of-accounts) — Manage the ledger accounts that feed your reports
- [Cash vs Accrual Accounting](/glossary/accounting-fundamentals) — Understand the difference between accounting methods

