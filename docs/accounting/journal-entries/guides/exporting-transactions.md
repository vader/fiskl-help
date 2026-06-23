---
title: "Filtering and Exporting Transactions"
description: "Learn how to filter journal entry transactions by date, source, and category, and export them to Google Sheets, Excel, or CSV in Fiskl."
keywords: ["filter transactions", "export transactions", "journal entries", "Google Sheets export", "CSV export", "accounting", "Fiskl"]
sidebar_position: 9
tags:
  - Accounting
  - Journal entry
  - Reporting
  - Data management
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This guide explains how to filter and export transactions from your ledger accounts in Fiskl. Use these tools to find specific entries quickly and share your data with accountants or external applications.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before you begin

- Filtering and exporting are available inside any ledger account. Go to **Accounting** > **Chart of Accounts** and select the ledger account you want to work with.
- To export to Google Sheets, you need a Google account. Fiskl will ask you to authorise access the first time you use this option.

## Filtering transactions

Filtering helps you narrow your transaction list to find exactly what you need. You can combine multiple filters to refine your results further.

### Available filter options

**Date filters**

- **Date range** — Set a custom start and end date.
- **Predefined periods** — Select a period such as "This financial year" or "Last month" for quick access.

**Transaction source**

Three buttons at the top of the transaction list let you filter by how transactions entered Fiskl:

- **All** — shows every transaction regardless of origin.
- **Manual** — shows only transactions you or your team entered by hand, such as manual invoices, expenses, or journal entries.
- **System** — shows transactions created automatically, including bank feed imports, recurring invoices, and integration syncs.

**Status filters**

- **Categorised / Uncategorised** — Filter by whether a transaction has been assigned to a ledger account.
- **AI Processed** — Select the sparkle icon to toggle between transactions the AI has processed and those it has not processed or that are not applicable.

:::info
If you see a transaction that has been incorrectly categorised, you can override it manually. Corrections help improve AI accuracy for future transactions.
:::

**Advanced filters**

Select **Filter** to access additional options:

- **Category**
- **AI Matched**
- **Matched**
- **Finalised**
- **Sign** — filter by incoming (In) or outgoing (Out)
- **Created by user**
- **Modified by user**

**Text search**

Use the search bar to find transactions by vendor name, invoice number, or description.

:::tip
If you notice discrepancies during bank reconciliation, filter by **System** to check for missing or duplicated bank feed imports. Filter by **Manual** to identify potential data entry errors.
:::

### How to apply filters

1. Go to **Accounting** > **Chart of Accounts**.
2. Select the ledger account you want to review.
3. Select a date preset, a source button (**All**, **Manual**, or **System**), or a status filter directly from the top of the transaction list.
4. To use advanced filters, select **Filter** to open the filter panel and choose your options.
5. Select **Apply** to update the transaction list.

## Exporting transactions

You can export your transaction list to three formats. Exported files reflect any filters you have applied before exporting.

Fiskl supports the following export options:

- **Google Sheets** — Exports directly to a new Google Sheet in your Google Drive.
- **Excel** — Downloads a `.xlsx` file to your device.
- **CSV** — Downloads a `.csv` file to your device.

### Export to Google Sheets

1. Go to **Accounting** > **Chart of Accounts**.
2. Select the ledger account you want to export.
3. Apply any filters you need.
4. Select **Export** at the top of the transaction list.
5. Select **Google Sheets**.
6. Follow the authorisation prompts to allow Fiskl to access your Google account.
7. Your data exports to a new Google Sheet in CSV format.

### Export to Excel or CSV

1. Go to **Accounting** > **Chart of Accounts**.
2. Select the ledger account you want to export.
3. Apply any filters you need.
4. Select **Export** at the top of the transaction list.
5. Select **Excel** or **CSV**.
6. The file downloads to your device.

Exporting is useful for creating custom reports, sharing records with your accountant or tax preparer, and analysing business performance in spreadsheet software. It also gives you an additional backup before making significant adjustments to your data.

## Common issues

<details>
<summary>The Google Sheets export button is not working</summary>

This usually means the authorisation between Fiskl and your Google account has not been completed or has expired.

1. Select **Export** > **Google Sheets** again.
2. Follow the authorisation prompts fully, including granting the required permissions.
3. If the issue persists, try signing out of Fiskl and signing back in, then repeat the export.

</details>

<details>
<summary>My exported file is missing transactions</summary>

Exports reflect the filters currently applied to your transaction list. If transactions are missing, check whether active filters are excluding them.

1. Select **Filter** and review all active filter settings.
2. Clear any filters that may be limiting the results.
3. Select **Apply**, then export again.

</details>

<details>
<summary>I cannot see the Filter or Export buttons</summary>

These controls appear at the top of the transaction list when you are inside a specific ledger account. You will not see them on the Chart of Accounts overview page.

1. Go to **Accounting** > **Chart of Accounts**.
2. Select the specific ledger account you want to work with.
3. The **Filter** and **Export** buttons appear at the top of the transaction list.

</details>

## Related topics

- [Chart of Accounts](/accounting/chart-of-accounts) — View and manage your ledger accounts.
- [Journal Entries Overview](/accounting/journal-entries/overview) — Understand how journal entries work in Fiskl.
- [Bank Account Reconciliation](/accounting/reconciliation/guides/bank-account-reconciliation) — Reconcile your bank feed transactions.
- [Transactions by Account](/reporting/transactions-by-account) — Run a transactions report across your accounts.
