---
title: "General Ledger Report"
description: "Use the General Ledger report in Fiskl to view, group, and export all financial transactions with full multi-currency detail."
keywords: ["general ledger", "GL report", "financial transactions", "multi-currency", "accounting reports", "Fiskl reports"]
sidebar_position: 6
tags:
  - Reporting
  - Accounting
  - Multi-currency
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This guide explains how to generate and use the General Ledger report to view all financial transactions in your organisation, with flexible grouping and multi-currency detail.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## What is the General Ledger Report?

The General Ledger report gives you a complete view of every financial transaction in your organisation. It is especially useful for businesses managing multiple currencies, offering detailed insights and flexible analysis across accounts, transaction types, and time periods.

<details>
<summary>Why is the General Ledger report important?</summary>

The General Ledger report helps you:

- View all transactions with flexible grouping options
- Track multi-currency transactions with original, account, and base currency amounts
- Analyse activity across accounts, transaction types, and date periods
- Reconcile accounts and support financial reviews

</details>

## Key Features

- **Multiple currency views** — see original currency amounts, ledger account currency, and base accounting currency for every transaction
- **Detailed transaction breakdown** — view gross, net, and tax amounts in each currency
- **FX rate tracking** — monitor exchange rates applied at the time of each transaction
- **Flexible grouping** — group transactions by Ledger Account, Transaction Type, Year, Quarter, Month, or Date

## Before You Begin

- You need access to the **Accounting** section. If this section is not visible, check your permissions with your organisation owner.
- The report only returns results for periods where transactions exist. If you are unsure, check the relevant ledger accounts in [Chart of Accounts](/accounting/chart-of-accounts) first.
- For multi-currency businesses, enable the **FX Rate** column in Column Visibility to see the exchange rate applied to each transaction.

## Generating the Report

1. In the left menu, select **Accounting**, then select **Reports**.
2. Select **General Ledger** from the list of available reports.
3. Select **Configure** to open the settings panel.
4. Set your **date range** for the period you want to analyse.
5. Select a **grouping option** — choose one of: **Ledger Account**, **Transaction Type**, **Year**, **Quarter**, **Month**, or **Date**.
6. Use the account selector to choose all accounts or specific ledger accounts to include.
7. Set any additional display options as needed (see [Display Options](#display-options) below).
8. Select **Run** to generate the report.

## Display Options

These options are available in the **Configure** panel and can be adjusted at any time:

- **Cash or Accrual** — toggle between accounting methods to change how transactions are recognised
- **Unrealised FX Gain/Loss** — toggle on to include unrealised foreign exchange movements
- **Divide by 1,000** — simplifies large figures for easier reading
- **Compact** — condenses the report layout for a tighter, print-friendly view

:::tip
Your default cash or accrual basis can be set in [Accounting Settings](/settings/accounting-settings).
:::

:::tip
Use **Divide by 1,000** combined with **Compact** when presenting the report to stakeholders — it keeps figures readable and the layout clean.
:::

## Understanding Report Columns

The General Ledger report shows amounts in up to three currencies for each transaction:

- **Original currency** — the currency used when the transaction was recorded
- **Account currency** — the currency of the ledger account
- **Base currency** — your organisation's base accounting currency

Each transaction also shows a breakdown of **gross amount** (total), **net amount** (excluding tax), and **tax amount**.

## Customising Columns

In the **Column Visibility** section, toggle each column on or off to show only what you need. Your selection is also applied when you export the report.

<details>
<summary>See a breakdown of the columns available</summary>

**Basic information:**

- **Date** — when the transaction occurred
- **Account** — the ledger account the transaction is posted to
- **Number** — the transaction or document reference number
- **Type** — the transaction type, such as invoice, expense, or transfer
- **Name** — the name associated with the transaction
- **Client/Vendor** — the client or vendor linked to the transaction
- **Category** — the assigned transaction category
- **Description** — a brief description of the transaction

**Amount columns:**

Each amount appears in three currencies:

- **Original Currency Amount** — the currency used when the transaction was recorded
- **Account Currency Amount** — the currency of the ledger account
- **Base Currency Amount** — your organisation's base accounting currency

**Additional:**

- **FX Rate** — the exchange rate between base currency and account currency at the time of the transaction

</details>

## Exporting the Report

1. Select the export button at the top right of the report.
2. Select **Google Sheets** or **Excel** as your format.

:::info
Column customisation is respected on export. Set your preferred columns before exporting for a cleaner spreadsheet.
:::

## Common Issues

<details>
<summary>The report shows no transactions for the selected period</summary>

This usually means no transactions have been recorded in the selected accounts for that date range.

1. Widen the date range and reapply.
2. Check that the correct ledger accounts are selected — use **All Accounts** to rule out an account filter issue.
3. Confirm that transactions exist for the period by checking the relevant ledger account in **Chart of Accounts**.

</details>

<details>
<summary>Currency amounts look incorrect or inconsistent</summary>

The report shows amounts in three currencies: original, account, and base. If a figure looks unexpected:

1. Check the **FX Rate** column to confirm the exchange rate used at the time of the transaction.
2. Toggle **Unrealised FX Gain/Loss** on or off to see whether this accounts for the difference.
3. Verify your accounting method in **Configure** — switching between Cash and Accrual changes which transactions appear.

</details>

<details>
<summary>The export does not include all columns</summary>

The export respects your active column selection. If columns are missing from the export:

1. Select **Filters & Settings** at the top right of the report.
2. Confirm all required columns are toggled on in **Column Visibility**.
3. Re-export the report.

</details>

## Related Topics

- [Chart of Accounts](/accounting/chart-of-accounts) — View and manage your ledger accounts
- [Accounting Settings](/settings/accounting-settings) — Set your base currency and accounting method
- [Trial Balance](/reporting/trial-balance) — View a summary of all account balances
- [Profit and Loss](/reporting/profit-and-loss) — Analyse income and expenses over a period
