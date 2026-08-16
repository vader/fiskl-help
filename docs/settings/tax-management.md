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

Fiskl classifies tax rates in the 27 European Union member states, the United Kingdom, United States, Canada, Australia, Singapore, the United Arab Emirates, and South Africa. In these countries a rate carries a full classification, and the tax types offered are filtered to the country of the tax agency.

For help with other accounting settings, see [Accounting Settings](/settings/accounting-settings).


## Tax Agencies


A tax agency represents the authority you pay taxes to — for example, HMRC, the IRS, or a regional VAT office. Each agency is linked to a specific country and currency.


Tax agencies live on the **Taxes** screen, which lists each agency with the rates that report through it. Select **Manage** on an agency to edit it, or **Add rate** to create a rate under it.


When you create a tax agency, Fiskl automatically creates a matching **Liability** ledger account in your [Chart of Accounts](/accounting/chart-of-accounts). Fiskl records all transactions involving taxes for that agency as journal entries in this ledger account. If you rename a tax agency, Fiskl renames the ledger account too.


### Set Up a Tax Agency


1. Go to **Settings** > **Tax Management**
2. Select **Taxes**
3. Select **New Tax Agency**
4. Select a country and currency from the dropdown menus
5. Enter the tax number
6. Enter a registration name to recognise this registration across Fiskl (optional)
7. Select the **Authority** you are registered with
8. Select the **Province / territory** or region where the country files below national level
9. Select an accounting scheme, if the country offers one
10. Enter a prefix (optional)
11. Select whether to include the tax number in generated reports
12. Select the filing period, for example monthly or quarterly
13. Select a filing date
14. Select **Create**


:::tip
If your business operates in multiple countries, create a separate tax agency for each jurisdiction. For example, create one agency for UK VAT (GBP) and another for French VAT (EUR).
:::


Fiskl includes tax authorities for more than 200 countries, so the authority list is populated even where rate classification is not available. It is filtered to the country you selected, and grouped into national and regional bodies. A Canadian agency offers the Canada Revenue Agency and the provincial ministries, and nothing else. Some countries require a region as well as an authority, because the registration files below national level.


## Tax Rates


Tax rates define the percentage applied to your transactions. Each rate must be assigned to a tax agency, and its currency is determined by that agency. You can assign multiple rates to a single agency. As well as the name and the percentage, you classify the rate. You record the kind of tax, how it behaves, its rate band, and whether you can reclaim it.


Fiskl builds a jurisdiction code from your answers when you save. The code is how your reporting identifies the rate.


### Add a Tax Rate


1. Go to **Settings** > **Tax Management** > **Taxes**
2. Find the tax agency the rate belongs to, then select **Add rate**
3. Enter the tax name, for example "VAT 20%"
4. Enter the percentage in the **Rate (%)** field
5. Select the **Tax Agency** to assign this rate to
6. Select the **Behaviour**, **Tax type**, **Rate band**, **Base**, and **Reclaimable** answers that classify the rate
7. Review the tax agency summary displayed on screen
8. Select **Create**


See [Classifying Tax Rates](/settings/tax-rate-classification) for what each question means.


Outside the countries listed above, the form is simpler. You enter a name, a percentage, and a tax agency, then set **This is a sales tax**. The classification step does not appear.


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


## All Taxes by Behaviour


The **All taxes by behaviour** screen collects every classified rate across your agencies and groups it by what the tax does. Each rate shows its jurisdiction code, its percentage, and whether it is reclaimable.


Rates marked **Needs classification** do not appear here. The screen fills out as you classify them.


## Managing Tax Records


The **Taxes** and **Tax Groups** screens work differently, because they list different things.


On **Taxes**, each agency carries its own controls:


- **Edit an agency** — Select **Manage**
- **Make an agency the default** — Select the star icon
- **Work with a rate** — Select the actions menu beside it, then **Edit**, **Classify**, **Make Default**, or **Archive**
- **See archived records** — Select **Archived** for agencies, or the archived rates link inside an agency


A rate has to be classified before it can become the default. Until it is, **Make Default** is unavailable.


On **Tax Groups**, select **Refresh** to reload the list and filter by **Status** to show active or archived groups. Select **Edit** or **Make Default** on a group.


To protect the accuracy of past transactions, some fields lock after creation. On a tax agency, the country and currency cannot be changed; the authority, region, filing period and filing date can. A tax agency cannot be archived while it still has active tax rates, so archive its rates first.


:::warning
To change the composition or percentage of a tax group, archive the existing group and create a new one. For example, if a tax rate changes, create a new tax group with the updated rate.
:::


## Common Issues


<details>
<summary>Cannot create a new tax rate</summary>

You must create a tax agency before adding tax rates. Go to **Settings** > **Tax Management** > **Taxes** and set up at least one agency first. The agency defines the country and currency for the rate.

</details>


<details>
<summary>Tax rate shows the wrong currency</summary>

A tax rate inherits its currency from the assigned tax agency. To use a different currency, create a new tax agency with the correct currency and assign the rate to that agency.

</details>


<details>
<summary>A tax rate is marked Needs classification</summary>

The rate was created before classification was introduced. It still calculates tax, and it does not report correctly until you complete it. Open the rate, answer the classification questions, and select **Save**. See [Classifying Tax Rates](/settings/tax-rate-classification).

</details>


<details>
<summary>Liability ledger account is missing for a tax agency</summary>

Fiskl creates a **Liability** ledger account automatically when you add a tax agency. If the account is missing, check your [Chart of Accounts](/accounting/chart-of-accounts) for an account with the same name as the tax agency.

</details>


## Related Topics


- [Classifying Tax Rates](/settings/tax-rate-classification) — What each question on a tax rate means
- [Chart of Accounts](/accounting/chart-of-accounts) — Manage your ledger accounts, including auto-created tax liability accounts
- [Accounting Settings](/settings/accounting-settings) — Configure your accounting preferences
- [Creating Invoices](/invoicing/creating-invoices) — Apply tax rates when billing clients
- [Sales Tax Report](/reporting/sales-tax) — Review your tax liabilities and filings