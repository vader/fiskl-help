---
title: Reconciliation Reports
description: Generate comprehensive reconciliation reports in Fiskl to maintain
  detailed audit trails and review reconciliation history.
sidebar_position: 16
---
This guide explains how to generate reconciliation statement reports in Fiskl, review their contents, and export them for your records.

## What the Report Contains

A reconciliation statement report presents a complete record of a completed reconciliation period. The report includes:

- Opening and closing balances for the reconciled account
- All matched transactions during the period
- Any adjustments or new transactions created during reconciliation
- Outstanding items not yet cleared
- A summary of the reconciliation results

## Accessing Reconciliation Reports

You can access reconciliation reports in two ways:

- From the reconciliation list — open a completed reconciliation and select **View Report**
- From the main menu — go to **Reports** > **Reconciliation Statement**

## Generating a Report

1. Go to **Reports** > **Reconciliation Statement**
2. In the **Reconciliation Statement Settings** panel, select **Configure Settings**, then select the **Account** you want to report on
3. Under **Reconciliation period**, select a completed reconciliation period from the dropdown
4. Adjust **Column Visibility** toggles as needed — you can show or hide **Date**, **Name**, **Reference**, **Client/Vendor**, and **Amount**
5. Select **Run Report**

:::info
Only completed reconciliation periods appear in the **Reconciliation period** dropdown. If a period is missing, the reconciliation for that account has not been finalised yet.
:::

## Understanding the Settings Panel

The **Reconciliation Statement Settings** panel controls what the report displays:

| Setting | Description |
|---|---|
| **Account** | The ledger account to report on (e.g. a bank or payment account) |
| **Reconciliation period** | A dropdown of all finalised reconciliation periods for that account |
| **Column Visibility** | Toggles to show or hide individual columns in the report — changes apply immediately |

## Exporting Reports

After generating a report, you can export it for your records or share it with your accountant. Select the export option from the report toolbar to export to Excel and Google Sheets.

:::tip
Use **Ask Fi** in the top right of the screen if you need help interpreting your reconciliation report or understanding any discrepancies it shows.
:::

## Common Issues

<details className="blue-box">
<summary>No periods appear in the Reconciliation period dropdown</summary>

The dropdown only lists finalised reconciliation periods for the selected account. If it is empty, no reconciliations have been completed for that account yet. Complete a reconciliation first — see [Bank Account Reconciliation](/accounting/reconciliation/guides/bank-account-reconciliation) for steps.

</details>

<details className="blue-box">
<summary>The report shows unexpected transactions or balances</summary>

If the report contains transactions you did not expect, check whether any adjustments were created during the reconciliation process. Adjustments appear in the report alongside matched transactions. You can also review the full reconciliation history by opening the reconciliation from the reconciliation list.

</details>

<details className="blue-box">
<summary>Column changes are not visible in the report</summary>

Column visibility changes apply immediately — there is no need to re-run the report. If a column is not showing after you toggle it on, scroll the report horizontally, as some columns may be off-screen on narrower displays.

</details>

## Related Topics

- [Bank Account Reconciliation](/accounting/reconciliation/guides/bank-account-reconciliation) — Complete a reconciliation and finalise a period
- [Handling Reconciliation Discrepancies](/accounting/reconciliation/guides/handling-reconciliation-discrepancies) — Resolve differences before generating a report
- [Reconciliation Best Practices](/accounting/reconciliation/guides/reconciliation-best-practices) — Guidance on frequency, preparation, and record-keeping
- [How Fiskl Handles Account Reconciliation](/accounting/reconciliation/guides/how-fiskl-handles-reconciliation) — Understand automatic matching and the reconciliation process