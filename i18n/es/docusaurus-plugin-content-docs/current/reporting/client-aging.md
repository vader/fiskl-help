---
title: "Client Aging Report"
description: "Track outstanding client balances and manage accounts receivable with the Fiskl Client Aging Report. Customise periods, filter by client, and export."
keywords: ["client aging report", "accounts receivable", "outstanding transactions", "cash flow", "collections"]
sidebar_position: 15
tags:
  - Reporting
  - Accounts Receivable
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to use the Client Aging Report in Fiskl to track outstanding client balances and manage your accounts receivable.

<details>
<summary>Why use the Client Aging Report?</summary>

The Client Aging Report helps you:

- See all outstanding client transactions at a glance
- Identify slow-paying clients or potential bad debts
- Manage and forecast cash flow more effectively
- Prioritise which transactions need immediate follow-up
- Make informed decisions about client credit policies

</details>

## Before You Begin

- Invoices generate an accounts receivable entry when sent. Draft invoices do not appear in the report.
- To filter by a specific client, make sure that client has been added in Fiskl. See [Managing Clients](/clients-vendors/clients).

## What the Client Aging Report Shows

The Client Aging Report shows all outstanding AR transactions and how long each has been unpaid. Use it to monitor cash flow, spot collection issues early, and prioritise which transactions need follow-up.

The report organises outstanding balances into configurable periods — for example, one month, two months, three months. Transactions older than your last defined period appear in a final **Older** column so nothing is missed.

## Generating the Report

1. Select **Accounting** in the left menu.
2. Select **Reports**.
3. Select **Client Aging Report** from the reports list.
4. Select **Filters & Settings** to open the settings panel.
5. Configure your report settings (see [Report Settings](#report-settings) below).
6. The report updates automatically as you adjust settings.

## Report Settings

The settings panel has two sections: **Report Data Settings** and **Display Options**.

### Report Data Settings

- **As Of Date** — Set the date the report is calculated from. Select a preset from the dropdown or enter a custom date. Available presets include **Today**, **This Week-to-date**, **This Month**, **This Month-to-date**, and **This Quarter**. Presets resolve to the last day of the selected period — for example, **This Month** sets the As Of Date to May 31.
- **Clients** — Select a specific client or leave empty to include all clients.
- **Period** — Controls the size of each overdue column. **Month** creates monthly columns, **Week** gives a more granular view, and **Quarter** gives a broader one.
- **Number of Periods** — Controls how many overdue columns appear. With **Period** set to **Month** and **Number of Periods** set to **4**, the report shows four columns: 1 month, 2 months, 3 months, and 4 months overdue. Anything older appears in the **Older** column automatically.

### Display Options

- **Divide by 1,000** — Toggle on to display large amounts divided by 1,000 for easier reading.
- **Show Original Currency** — Toggle on to display transaction amounts in their original currency alongside your base currency.
- **Compact** — Toggle on to condense the report layout.

:::tip
Set **Period** to **Month** and **Number of Periods** to match your standard payment terms. For example, use three periods for 90-day terms. This aligns the columns with your terms and makes overdue transactions easier to identify.
:::

## Understanding the Report Views

### Summary View

The summary view shows one row per client with their total outstanding balance across date-based columns.

| Column | Description |
|---|---|
| **Client** | Client name |
| **Date columns** | Outstanding amounts by period. Column headings are based on your **Period** and **Number of Periods** settings — for example, May 2026, Apr 2026, Mar 2026, Feb 2026 |
| **Older** | Transactions beyond your last date column |
| **Total** | Total outstanding balance for that client |

### Detailed View

The detailed view shows one row per transaction so you can see exactly what makes up each client's balance.

| Column | Description |
|---|---|
| **Client** | Client name |
| **Type** | Transaction type (e.g. Invoice) |
| **Name** | Transaction number and name |
| **Date** | Date the transaction was issued |
| **Date columns** | The period the outstanding amount falls into, based on your **Period** and **Number of Periods** settings |
| **Older** | Transactions beyond your last date column |
| **Total** | Total outstanding balance for that client across all transactions |

## Adding Notes

Select **Notes** at the bottom left of the report to add notes to your report. Notes appear in both the summary and detailed views and are included when you export.

## Exporting the Report

1. Select the export icon in the top-right corner of the report.
2. Select **Google Sheets**, **Excel**, or **CSV** as your export format.

The exported file includes all rows and columns from the report.

:::info
Exporting lets you combine aging data with other financial reports or create custom charts for presentations.
:::

## Analysing the Report

Use these strategies to get the most from your Client Aging Report:

- **Identify payment patterns** — Notice which clients consistently pay on time and which tend to delay.
- **Spot potential problems** — Pay close attention to transactions moving into older columns.
- **Prioritise collections** — Focus on larger balances and older outstanding transactions first.
- **Review credit policies** — Use payment patterns to inform decisions about credit terms for individual clients.
- **Forecast cash flow** — Estimate when you are likely to receive payments based on the aging data.

We recommend reviewing your Client Aging Report weekly or monthly to catch collection issues early.

## Ask Fi

Fi, Fiskl's built-in AI CFO, can help you interpret your aging data. Select the **Ask Fi** icon in the top right of the screen to ask questions about your outstanding balances, identify trends, or get guidance on next steps.

## Common Issues

<details>
<summary>A transaction is not appearing in the report</summary>

The Client Aging Report only includes AR transactions with an outstanding balance. Check the following:

1. Confirm the invoice has been sent, not left in draft.
2. Confirm the transaction date falls on or before your **As Of Date**.
3. Confirm the transaction has not been fully paid or written off.

</details>

<details>
<summary>All transactions are showing in the Older column</summary>

This usually means the **Number of Periods** or **Period** setting is too narrow. Try increasing the number of periods or switching to a longer period such as month or quarter.

</details>

<details>
<summary>The report shows no data</summary>

If the report appears empty, check the following:

1. Confirm your **As Of Date** covers the period when transactions were posted.
2. Confirm the **Clients** filter includes the clients you expect to see.
3. Confirm at least one sent invoice has an outstanding balance.

</details>

## Related Topics

- [Statement of Accounts](/core-features/accounting/reports/statement-of-accounts) — Send clients a summary of their outstanding balances and payment history
- [Managing Clients](/clients-vendors/clients) — Add and manage client records in Fiskl
- [Invoice Management](/invoicing/invoice-management) — View, edit, and track the status of your invoices
- [Accounts Receivable Transactions](/core-features/accounting/journal-entries/guides/accounts-receivable-transactions) — Understand how AR transactions are recorded in your ledger
