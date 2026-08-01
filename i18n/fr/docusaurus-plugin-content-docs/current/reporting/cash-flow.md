---
title: "Statement of Cash Flows"
description: "Generate and interpret the Statement of Cash Flows in Fiskl to monitor cash movements across operating, investing, and financing activities."
keywords: ["cash flow", "statement of cash flows", "cash flow report", "operating activities", "investing activities", "financing activities", "Fiskl reports"]
sidebar_position: 3
tags:
  - Reporting
  - Accounting
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to generate and interpret the Statement of Cash Flows report in Fiskl to monitor your business's cash generation and usage patterns.

## Before You Begin

- Your [Chart of Accounts](/accounting/chart-of-accounts) must be configured before running cash flow reports
- Ensure your transactions are recorded and categorised correctly so cash flows appear in the right sections
- If you use multiple currencies, all amounts display in your [base currency](/settings/currency-management)
- Ensure all bank accounts are reconciled

## What Is the Statement of Cash Flows?

The Statement of Cash Flows tracks all cash movements in your business, organised into three categories: operating, investing, and financing activities. It shows where cash comes from and how it is being used — giving you a clear picture of your business's liquidity and financial health.

Unlike the Profit and Loss report, which records income and expenses when they occur, the cash flow report reflects actual cash movement. A profitable business can still face cash shortfalls, so reviewing this report regularly is essential for sound financial management.

<details className="blue-box">
<summary>Why is this report important?</summary>

The Statement of Cash Flows helps you:

- Track the sources and uses of your cash
- Monitor your business's ability to generate cash for future growth
- Identify trends in cash flow patterns
- Make informed decisions about timing of payments and investments

</details>

## How to Generate Your Cash Flow Report

1. In the left menu, select **Accounting** > **Reports** > **Cash Flow**
2. Select **Filters & Settings** at the top right
3. Select your date range
4. Adjust the display options as needed

### Display Options

Use these options to control how the report appears:

- **Show Unrealised FX Gains/Losses** — Include or exclude foreign exchange movements that have not yet been realised
- **Show Account Details** — Display individual ledger accounts within each section for a more granular view
- **Divide by 1000** — Scale large numbers for easier reading in high-volume businesses
- **Compact** — Reduce row spacing for a condensed view

### Customising the Report Layout

1. Select **Cash Flow Report Config** at the top of the report
2. Drag and drop ledger accounts to reorder them within a section or move them between sections
3. Select **Credit Cards as Cash & Cash Equivalents** to include your credit card balances in the opening and closing cash totals. By default, credit cards are treated as liabilities (money owed to the card issuer) and excluded from your cash position. Enable this if your business runs most expenses through a company card and settles it regularly. When enabled, the net change in cash reflects movements across both bank accounts and credit cards. If you are unsure, speak with your accountant
4. To restore the original layout, select **Reset**

This lets you tailor the report structure to match your business or your accountant's preferred format.

:::tip
Discuss the layout with your accountant before making changes. Consistent categorisation across reporting periods makes trend analysis more meaningful.
:::

## Understanding Cash Flow Categories

Fiskl organises your cash flows into three sections.

### Operating Activities

Operating activities capture cash from your day-to-day business operations:

- Payments received from clients
- Payments made to vendors
- Employee wages paid
- Other operating expenses paid

A positive figure here indicates your core business generates cash. A negative figure may signal timing issues with receivables or rising costs.

### Investing Activities

Investing activities reflect cash used for or received from long-term assets:

- Equipment and asset purchases
- Proceeds from asset sales
- Investment purchases and returns

Negative figures in this section are common for growing businesses investing in assets.

### Financing Activities

Financing activities show cash flows related to funding and distributions:

- Loan proceeds received
- Loan repayments made
- Owner contributions
- Owner withdrawals or dividends

## Exporting Your Report

You can export the Statement of Cash Flows in two formats:

- **Excel**
- **Google Sheets**

To export:

1. Select **Export** at the top of the report
2. Select your preferred format
3. Open the file directly or save it to your device

## Adding Notes

You can add context to your report before sharing it with stakeholders or your accountant:

1. Select **Notes** at the bottom of the report
2. Enter your comments or explanations
3. Your notes are included in the exported file

:::info
Notes are useful for explaining one-off cash movements, such as a large equipment purchase or a loan repayment, so reviewers have full context.
:::

## Common Issues

<details>
<summary>Transactions appear in the wrong cash flow section</summary>

This happens when a ledger account is mapped to the incorrect category in the Chart of Accounts or when accounts have been manually moved in the report layout.

To fix this:

1. Go to **Accounting** > **Chart of Accounts**
2. Locate the relevant ledger account and check its account type
3. Return to the cash flow report and drag the account into the correct section
4. If the issue persists across all periods, the account type may need updating — speak with your accountant before making changes

</details>

<details>
<summary>Cash balances do not match my bank balance</summary>

The closing cash balance in the report reflects all accounts categorised as cash or cash equivalents in Fiskl. If your bank balance differs, check the following:

- Unreconciled transactions may be missing from Fiskl
- The **Credit Cards as Cash & Cash Equivalents** setting may need to be toggled on or off depending on your setup
- Transactions recorded in a foreign currency are converted to your base currency, which can cause small differences due to exchange rate movements

</details>

<details>
<summary>Foreign exchange movements appear unexpectedly</summary>

If you transact in multiple currencies, unrealised FX gains and losses appear in the report when exchange rates change between the transaction date and the reporting date. Toggle off **Show Unrealised FX Gains/Losses** in **Filters & Settings** if you want to exclude these from your view.

</details>

<details>
<summary>The report shows no data for my selected date range</summary>

If the report is empty, check that:

- Transactions exist and are recorded within the selected date range
- Your bank or ledger accounts are connected and synced

</details>

## Related Topics

- [Profit and Loss](/reporting/profit-and-loss) — View income and expenses over a period
- [Balance Sheet](/reporting/balance-sheet) — See your assets, liabilities, and equity at a point in time
- [Chart of Accounts](/accounting/chart-of-accounts) — Configure how transactions are categorised
- [Currency Management](/settings/currency-management) — Set your base currency and manage exchange rates
- [Bank Account Reconciliation](/core-features/accounting/journal-entries/guides/bank-account-reconciliation) — Match your Fiskl records to your bank statements
