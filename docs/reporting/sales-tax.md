---
title: Sales Tax Report
description: Use the Fiskl Sales Tax report to track tax liabilities, review
  transactions by tax period, and export data for filing with tax authorities.
sidebar_position: 7
---


This guide explains how to use the Sales Tax report to review tax activity, calculate liabilities, and export data for tax authorities.



## Before You Begin

- Ensure your tax numbers (tax agencies) are configured in **Settings** > **Tax Management**. Each tax number generates its own report.
- Confirm that your invoices and vendor bills have the correct tax rates applied. Tax amounts are recorded in the month the invoice or bill is created, not when payment is received.

## How the Report Works

The Sales Tax report is generated per tax number, also known as your tax agency. Each report displays data in the currency of that tax number, with an option to show base currency conversions alongside.

You generate the report for a specific tax period. The report includes opening and closing balances for that period, giving you a complete picture of your tax position.

:::info
Tax is calculated at the point of invoice or bill creation. The recorded month is the creation date, regardless of when payment is received.
:::

The Sales Tax report compiles all transactions involving sales and purchases that must be reported to a country's fiscal authority. In Fiskl, "Sales Tax" covers both selling and purchasing taxes within a single tax type.

## Setting Up a Tax Rate

Go to **Settings** > **Tax Management** > **Tax Rates** and create a new tax rate:

1. Under **Tax Name**, enter a descriptive name — for example, *Sales Tax Agriculture* or *Purchase Tax Food*.
2. Enter the rate percentage.
3. Mark it as **Sales Tax**.

Once created, the tax rate becomes available for selection on transactions.

## How Tax Appears on Transactions

- **Invoices** issued to clients — tax appears under Sales
- **Vendor bills** recorded as purchases — tax appears under Purchases

## Accessing the Report

1. Select **Accounting** in the left sidebar.
2. Select **Reports**.
3. Select **Sales Tax** from the list of reports.

## Configuring Your Report

Select **Filters & Settings** to open the configuration panel.

### Sales Tax Account and Report Period

1. Select your tax agency from the **Sales Tax Account** dropdown.
2. Select a reporting period under **Report Period** — for example, "This Quarter-to-date" or a custom date range.

### Report Basis

Two toggles control how transactions are included:

- **Accrual Basis** — records tax when invoices or bills are created, regardless of when payment is received. Toggle off to switch to cash basis, which records tax only when payment is made.
- **Include Unrealised Transactions** — includes transactions that have not yet been settled.

### Display Options

Use the **Display Options** toggles to control how the report is presented. Changes apply immediately.

- **Show Detailed** — switches from summary view to transaction-level detail
- **Show Base Currency** — adds base currency columns alongside the tax account currency
- **Compact** — reduces row spacing for a more condensed view

## Adding Notes to the Report

Select **Notes** at the bottom of the report to add notes to your report. Notes are included in any export or download.

## Exporting the Report

1. Select **Export** at the top right of the screen.
2. Select **Google Sheets**, **Excel**, or **CSV** as your export format.

The exported file reflects your current view (Summary or Detailed) and includes all applied filters.

The report total shows your net tax position for the period. A negative amount means tax is to be reclaimed. A positive amount means tax is to be paid to the fiscal authority.

:::tip
Export in Detailed view when preparing documentation for a tax authority or audit. It includes full transaction-level data.
:::

## Common Issues

My report shows no data for the selected period

This usually means no invoices or vendor bills were created with tax applied during that period.

1. Confirm the correct tax agency is selected in the **Sales Tax Account** dropdown.
2. Check that the **Report Period** covers the dates you expect.
3. Verify that invoices and bills in that period have tax rates applied — untaxed transactions do not appear in this report.



Tax amounts appear in the wrong month

When **Accrual Basis** is enabled, tax is recorded on the date the invoice or bill is created, not the payment date. If a bill was created in March but paid in April, the tax appears in the March report. Adjust your **Report Period** to match the creation date, or toggle off **Accrual Basis** to switch to cash basis reporting.



I cannot find my tax agency in the Sales Tax Account dropdown

The dropdown only shows tax numbers configured in **Settings** > **Tax Management**. If your tax agency is missing, add it there first, then return to the report.



Base currency columns are not showing

Base currency columns are hidden by default. Open **Filters & Settings**, go to **Display Options**, and toggle on **Show Base Currency**.



## Related Topics

- [Tax Management](/settings/tax-management) — Configure tax numbers and rates for your business
- [Reporting Overview](/reporting/overview) — View all available reports in Fiskl
- [Profit and Loss](/reporting/profit-and-loss) — Review overall business performance
- [Creating Invoices](/invoicing/creating-invoices) — Apply tax rates when creating invoices

