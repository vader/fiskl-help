---
title: "Tax Management"
description: "Set up tax agencies, tax rates, and tax groups in Fiskl. Manage VAT, GST, and compound taxes across multiple jurisdictions, currencies, and filing periods."
keywords: ["tax management", "tax agency", "tax rates", "tax groups", "VAT", "GST", "compound tax", "sales tax", "Fiskl tax settings"]
sidebar_position: 4
tags:
  - Settings
  - Tax
  - Accounting
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to set up the tax agencies, rates, and groups that apply to your transactions. Fiskl supports multiple jurisdictions, currencies, single rates, and compound taxes.

## Before You Begin


Before you begin, ensure you have:

- At least one tax agency created — the agency determines the country and currency for every rate assigned to it

For help with other accounting settings, see [Accounting Settings](/settings/accounting-settings).


## Tax Agencies


A tax agency represents the authority you pay taxes to — for example, HMRC, the IRS, or a regional VAT office. Each agency is linked to a specific country and currency.


When you create a tax agency, Fiskl automatically creates a matching **Liability** ledger account in your [Chart of Accounts](/accounting/chart-of-accounts). All transactions involving taxes for that agency are recorded as journal entries in this ledger account. If you rename a tax agency, the corresponding ledger account is also renamed.


### Set Up a Tax Agency


1. Go to **Settings** > **Tax Management**
2. Select **Tax Agencies**
3. Select **New Tax Agency**
4. Enter the tax number
5. Select a country and currency from the dropdown menus
6. Enter a prefix (optional)
7. Select whether to include the tax number in generated reports
8. Select the filing period, for example monthly or quarterly
9. Select a filing date
10. Select **Create**


:::tip
If your business operates in multiple countries, create a separate tax agency for each jurisdiction. For example, create one agency for UK VAT (GBP) and another for French VAT (EUR).
:::


## Tax Rates


Tax rates define the percentage applied to your transactions. Each rate must be assigned to a tax agency, and its currency is determined by that agency. You can assign multiple rates to a single agency. Rates can be designated as sales tax or non-sales tax.


### Add a Tax Rate


1. Go to **Settings** > **Tax Management** > **Tax Rates**
2. Select **New Tax Rate**
3. Enter the tax name, for example "VAT 20%"
4. Enter the percentage in the **Rate (%)** field
5. Select the **Tax Agency** to assign this rate to
6. Select whether this is a sales or non-sales tax
7. Review the tax agency summary displayed on screen
8. Select **Create**


## Tax Groups


Tax groups let you combine two or more tax rates into a single selection. This is useful when multiple taxes apply to the same transaction. You can configure groups as standard or compound.


### Standard Tax Group


In a standard group, each tax is calculated independently on the original amount.


### Compound Tax Group


In a compound group, one tax is calculated on the original amount plus the preceding tax. This is used for tax systems like Quebec's GST/QST.


### Create a Tax Group


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
- **Edit** — Select the edit icon to update the name and default status
- **Archive** — Select the archive icon to hide records you no longer need
- **Filter by tax type** — Select a filter from the **Tax Rates** list to narrow results


To protect the accuracy of past transactions, you can only update the name and default status after creation. Filter by **Status** to show active or archived records.


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