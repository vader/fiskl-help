---
title: "Transactions by Account Report"
description: "Generate the Transactions by Account report in Fiskl to view all transactions across your ledger accounts, with full multi-currency detail."
keywords: ["transactions by account", "multi-currency report", "ledger transactions", "FX rate", "accounting reports", "cash accrual"]
sidebar_position: 10
tags:
  - Accounting
  - Reports
  - Multi-currency
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to generate and use the Transactions by Account report in Fiskl. Use this report to review all transactions across your ledger accounts with full multi-currency detail for any period.

## What is the Transactions by Account Report?

The Transactions by Account report shows every transaction recorded across your ledger accounts within a chosen date range. Each transaction displays gross, net, and tax amounts across three currency views — original, account, and base currency — making it especially useful for businesses that operate in multiple currencies.

<details>
<summary>Why is this report important?</summary>

The Transactions by Account report helps you:

- Review all transactions for one or more ledger accounts in a single view
- Track and reconcile amounts across different currencies
- Verify tax amounts and exchange rates on individual transactions
- Analyse account activity over any time period

</details>

## Before You Begin

Before generating your Transactions by Account report, confirm that:

- Your transactions are posted and up to date
- You know which ledger accounts you want to review
- You know the date range you want to analyse
- You know whether you want to view results on a cash or accrual basis

## Generating the Report

1. Select **Accounting** in the left menu.
2. Select **Reports**, then select **Transactions by Account**.
3. Select a date range from the pre-set periods or choose a custom range.
4. Select **Filters & Settings** to choose your accounts and apply any additional options.

To run the report immediately, select **Run With Defaults**. This uses a four-week date range, all accounts, and your default cash or accrual basis.

## Report Options

You can customise the report using the following options in **Filters & Settings**. Use the account selector at the top of the panel to choose all accounts or one or more specific ledger accounts.

- **Cash or Accrual** — Switch between cash and accrual accounting methods
- **Summary or Detail** — Toggle between a high-level summary and a full transaction-level view
- **Divide by 1000** — Scale large amounts for easier reading
- **Hide empty accounts** — Remove ledger accounts with no transactions in the selected period from the report
- **Show opening and closing balances** — Display the opening and closing balance for each account

:::tip
Your default cash or accrual basis can be set in [Accounting Settings](/settings/accounting-settings).
:::

## Understanding Report Columns

The report shows amounts in up to three currencies for each transaction:

- **Original currency** — the currency used when the transaction was recorded
- **Account currency** — the currency of the ledger account
- **Base currency** — your company's base accounting currency

Each transaction also shows a breakdown of **gross amount** (total), **net amount** (excluding tax), and **tax amount**.

## Customising Columns

In the **Column Visibility** section of **Filters & Settings**, toggle each column on or off to show only what you need. Your selection is also applied when you export the report.

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
- **Base Currency Amount** — your company's base accounting currency

**Additional:**

- **Balance** — the running balance of the account (shown when opening and closing balances are enabled)
- **Tax rate** — the tax rate applied to the transaction
- **FX Rate** — the exchange rate between base currency and account currency at the time of the transaction

</details>

## Exporting the Report

To export your Transactions by Account report:

1. Select the export button at the top right of the report.
2. Select **Google Sheets** or **Excel** as your export format.

The exported file reflects your current column selection and filters.

## Need Help Interpreting Your Report?

Select the **Ask Fi** icon in the top right of the screen to get help from Fiskl's built-in AI advisor. Fi can help you interpret transaction data, explain currency differences, and answer accounting questions based on your specific figures.

## Common Issues

<details>
<summary>I expected to see a transaction but it does not appear in the report</summary>

Check the following:

1. Confirm the date range covers the transaction date.
2. Confirm you have selected the correct ledger account in the account selector, or select all accounts to search across everything.
3. Check whether you are on cash or accrual basis — some transactions appear on different dates depending on the method selected.
4. Confirm the transaction has been posted and is not still in draft.

</details>

<details>
<summary>The original currency and base currency amounts look the same</summary>

If the transaction was recorded in your base currency, all three currency columns will show the same amount. This is expected behaviour. Differences between columns only appear when a transaction involves a foreign currency.

</details>

## Related Topics

- [Trial Balance Report](/core-features/accounting/reports/trial-balance) — Verify that total debits equal total credits across all accounts
- [General Ledger Report](/reporting/general-ledger) — View a full record of all journal entries by account
- [Chart of Accounts](/accounting/chart-of-accounts) — View and manage your ledger accounts
- [Multi-currency Transactions](/core-features/accounting/journal-entries/guides/multi-currency-transactions) — Understand how Fiskl records and converts foreign currency amounts
