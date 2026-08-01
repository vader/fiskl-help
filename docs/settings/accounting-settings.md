---
title: Accounting Settings
description: Configure your accounting preferences in Fiskl — set your fiscal
  year, accounting method, tax type, auto matching, and standard income
  accounts.
sidebar_position: 3
---

This guide covers how to configure your accounting preferences and standard ledger accounts for accurate financial reporting across Fiskl.

## Accessing Accounting Settings

Go to **Settings** > **Accounting Settings** in the left sidebar.

## Accounting Settings

| Setting | Description |
|---|---|
| **Company Currency** | Your base currency, set at account creation. Cannot be changed. |
| **Company Tax Type** | Choose **No Tax**, **Single**, or **Multiple**. Applied across the entire platform. |
| **Fiscal Year End** | Sets the date ranges for period filters in reports (this financial year, this quarter, and so on). |
| **Accounting Method** | **Cash** records income and expenses when money changes hands. **Accrual** records them when earned or incurred. |
| **Auto Matching** | Automatically matches imported bank transactions to invoices and expenses. |
| **Auto Categorisation** | Automatically assigns ledger accounts to transactions based on learned patterns. |

**Single tax** means one tax rate applies to all your invoices and expenses — for example, a standard VAT or GST rate. **Multiple tax** allows you to apply different rates to different products, services, or regions — useful if you sell across tax jurisdictions or have mixed-rate products.

:::info
Changing your accounting method can significantly impact your financial reports. However, Fiskl offers unique flexibility:

- This setting determines the initial view for your reports
- Unlike other platforms, Fiskl allows you to switch between Cash and Accrual without affecting your underlying data
- You can start with Cash accounting and later switch to Accrual (or vice versa) at any time
- Fiskl enables you to generate reports in both Cash and Accrual methods, regardless of your chosen setting

This flexibility allows you to adapt your accounting view as your business needs evolve, without the need for data migration or reorganisation.
:::

## Standard Income Accounts

Set the default ledger account for each income type. Fiskl pre-fills these when you create invoices or add billable items.

| Income Type | Example Account |
|---|---|
| **Products** | Sales of Products |
| **Services** | Sales of Services |
| **Time** | Sales Other |
| **Mileage** | Sales Other |
| **Billable Expenses** | Sales — Billed Expenses |

Accounts are drawn from your [Chart of Accounts](/accounting/chart-of-accounts). You can override the standard account at the product, service, or line item level.

Select **Save** to apply your changes.

## Common Issues

<details>
<summary>Report date filters are showing the wrong periods</summary>

Check that **Fiscal Year End** is set correctly and re-run the report.

</details>

<details>
<summary>Auto Matching is creating incorrect matches</summary>

1. Go to the **Bank Account** and open the relevant transaction
2. Delete the incorrect line item
3. Select **Match** and choose the correct match
4. Select **Finish**

Ensure your invoices and expenses have accurate amounts and dates to improve future matching.

</details>

<details>
<summary>A ledger account is missing from the Standard Income Accounts dropdowns</summary>

Add the account in [Chart of Accounts](/accounting/chart-of-accounts) first, then return here to assign it.

</details>

## Related Topics

- [Tax Settings](/settings/tax-settings) — Set up and manage tax rates
- [Currency Management](/settings/currency-management) — Add and manage currencies
- [Chart of Accounts](/accounting/chart-of-accounts) — View and manage your ledger accounts
- [Profit and Loss Report](/reporting/profit-and-loss) — See how your accounting method affects reports
- [Banking Overview](/integrations/banking/overview) — Connect your bank and manage transaction matching

