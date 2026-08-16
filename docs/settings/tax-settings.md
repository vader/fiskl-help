---
title: Tax Management
description: Set up and manage tax agencies, tax rates, and tax groups in Fiskl
  to ensure accurate tax compliance across your transactions.
sidebar_position: 5
---

This guide explains how to set up the tax agencies, rates, and groups that apply to your transactions. Fiskl supports multiple jurisdictions, currencies, single rates, and compound taxes.

## Before You Begin

You must create a tax agency before you can add tax rates. The agency determines the country and currency for every rate assigned to it.

## Tax Agencies

A tax agency represents the authority you pay taxes to — for example, HMRC, the IRS, or a regional VAT office. Each agency is linked to a specific country and currency.

When you create a tax agency, Fiskl automatically creates a matching **Liability** ledger account in your [Chart of Accounts](/accounting/chart-of-accounts). All transactions involving taxes for that agency are recorded as journal entries in this ledger account. If you rename a tax agency, the corresponding ledger account is also renamed.

### Set up a tax agency

1. Go to **Settings** > **Tax Management**
2. Select **Tax Agencies**
3. Select **New Tax Agency**
4. Enter the tax number
5. Select a country and currency from the dropdown menus
6. Enter a prefix (optional)
7. Choose whether to include the tax number in generated reports
8. Select the filing period, for example monthly or quarterly
9. Select a filing date
10. Select **Create**

:::tip
If your business operates in multiple countries, create a separate tax agency for each jurisdiction. For example, create one agency for UK VAT (GBP) and another for French VAT (EUR).
:::

## Tax Rates

Tax rates define the percentage applied to your transactions. Each rate must be assigned to a tax agency, and its currency is determined by that agency. You can assign multiple rates to a single agency. Rates can be designated as sales tax or non-sales tax.

### Add a tax rate

1. Go to **Settings** > **Tax Management** > **Tax Rates**
2. Select **New Tax Rate**
3. Enter the tax name, for example "VAT 20%"
4. Enter the percentage in the **Rate (%)** field
5. Select the **Tax Agency** to assign this rate to
6. Choose whether this is a sales or non-sales tax
7. Review the tax agency summary displayed on screen
8. Select **Create**

## Tax Groups

Tax groups let you combine two or more tax rates into a single selection. This is useful when multiple taxes apply to the same transaction. You can configure groups as standard or compound.

### Standard tax group

In a standard group, each tax is calculated independently on the original amount.

### Compound tax group

In a compound group, one tax is calculated on the original amount plus the preceding tax. This is used for tax systems like Quebec's GST/QST.

### Create a tax group

1. Go to **Settings** > **Tax Management** > **Tax Groups**
2. Select **New Tax Group**
3. Enter a name for the group
4. Select two or more tax rates to include
5. Select the **Compound** checkbox if you need stacked calculation
6. Select **Create**

## Managing Tax Records

Select **Refresh** to make sure you are viewing the most up-to-date information.

From any list in Tax Management, you can:

- **Set a default** — Select the star icon next to a rate, group, or agency
- **Edit** — Select the edit icon. To protect the accuracy of past transactions, you can only update the name and default status after creation
- **Archive** — Archive records you no longer need. Filter by **Status** to show active or inactive records
- **Filter by tax type** — Available from the **Tax Rates** list

:::warning
To change the composition or percentage of a tax group, archive the existing group and create a new one. For example, if a tax rate changes, create a new tax group with the updated rate.
:::

## Common Issues

<details>
<summary>Cannot create a new tax rate</summary>

You must create a tax agency before adding tax rates. Go to **Settings** > **Tax Management** > **Tax Agencies** and set up at least one agency first. The agency defines the country and currency for the rate.

</details>

<details>
<summary>Tax rate shows the wrong currency</summary>

A tax rate inherits its currency from the assigned tax agency. To use a different currency, create a new tax agency with the correct currency and assign the rate to that agency.

</details>

<details>
<summary>Liability ledger account is missing for a tax agency</summary>

Fiskl creates a **Liability** ledger account automatically when you add a tax agency. If the account is missing, check your [Chart of Accounts](/accounting/chart-of-accounts) for an account with the same name as the tax agency.

</details>

## Related Topics

- [Chart of Accounts](/accounting/chart-of-accounts) — Manage your ledger accounts, including auto-created tax liability accounts
- [Accounting Settings](/settings/accounting-settings) — Configure your accounting preferences
- [Creating Invoices](/invoicing/creating-invoices) — Apply tax rates when billing clients
- [Sales Tax Report](/reporting/sales-tax) — Review your tax liabilities and filings

