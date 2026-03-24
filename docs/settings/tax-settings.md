---
title: "Tax Settings"
description: "Set up and manage tax agencies, tax rates, and tax groups in Fiskl to ensure accurate tax compliance across your transactions."
keywords: ["tax settings", "tax rates", "tax agency", "tax groups", "VAT", "sales tax", "tax compliance"]
sidebar_position: 5
tags:
  - Settings
  - Tax settings
toc_min_heading_level: 2
toc_max_heading_level: 3
---

The Tax settings page lets you manage your tax agencies, tax rates, and tax groups. Fiskl supports multiple tax agencies in various currencies, including single rates, multiple rates, and compound taxes.

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

Access Tax settings by selecting the **gear icon** on the top left menu, or go to **Settings** > **Tax Settings** on the web Dashboard.

:::info
Before you can create a tax rate, you must first set up a tax agency. The tax agency determines the currency and country for all rates assigned to it.
:::

## Tax Agencies

A tax agency represents the authority you pay taxes to, such as HMRC, the IRS, or a regional VAT office. Each tax agency is associated with a specific country and currency.

When you create a tax agency, Fiskl automatically creates a matching **Liability** ledger account in your [Chart of Accounts](/accounting/chart-of-accounts). All transactions involving taxes linked to that agency are recorded as journal entries in this ledger account. If you rename a tax agency, the corresponding ledger account is also renamed.

### Set up a tax agency

1. Go to **Settings** > **Tax Settings**
2. Select the **Tax Agencies** tab
3. Select **Add**
4. Enter the agency name, country, and currency
5. Select **Save**

:::tip
If your business operates in multiple countries, create a separate tax agency for each jurisdiction. For example, create one agency for UK VAT (GBP) and another for French VAT (EUR).
:::

## Tax Rates

Tax rates define the percentage applied to your transactions. Each tax rate must be assigned to a tax agency. You can designate rates as either sales tax or non-sales tax.

The currency of a tax rate is determined by its assigned tax agency. You can assign multiple tax rates to a single agency.

### Add a tax rate

1. Go to **Settings** > **Tax Settings**
2. Select the **Tax Rates** tab
3. Select **Add**
4. Enter the tax name and percentage
5. Select the **Tax Agency** to assign this rate to
6. Choose whether this is a sales or non-sales tax
7. Select **Save**

## Tax Groups

Tax groups let you combine two or more tax rates into a single selection. This is useful when multiple taxes apply to the same transaction. You can also configure compound (stacked) taxes within a group.

### Standard tax group

In a standard group, each tax is calculated on the original amount independently.

<details>
<summary>Example: Standard tax group calculation</summary>

A group with three taxes applied to a $100 item:

- Tax A (5%): $100 × 0.05 = $5.00
- Tax B (6%): $100 × 0.06 = $6.00
- Tax C (4%): $100 × 0.04 = $4.00

Total taxes: $5.00 + $6.00 + $4.00 = $15.00

</details>

### Compound tax group

In a compound group, one tax is calculated on the amount plus the preceding tax.

<details>
<summary>Example: Compound tax group calculation (Quebec GST/QST)</summary>

Quebec applies both federal GST and provincial QST. The QST is calculated on the price plus GST:

- Base price: $100
- GST (5%): $100 × 0.05 = $5.00
- QST (9.975%): ($100 + $5) × 0.09975 = $10.47

Total taxes: $5.00 + $10.47 = $15.47

</details>

### Create a tax group

1. Go to **Settings** > **Tax Settings**
2. Select the **Tax Groups** tab
3. Select **Add**
4. Enter a name for the group
5. Select two or more tax rates to include
6. If needed, toggle the **Compound** option for stacked calculation
7. Select **Save**

## Common Issues

<details>
<summary>Cannot create a tax rate</summary>

You must create a tax agency before adding tax rates. Go to the **Tax Agencies** tab and set up at least one agency first. The agency defines the country and currency for the rate.

</details>

<details>
<summary>Tax rate shows the wrong currency</summary>

A tax rate inherits its currency from the assigned tax agency. To use a different currency, create a new tax agency with the correct currency and assign the rate to that agency instead.

</details>

<details>
<summary>Missing ledger account for a tax agency</summary>

Fiskl creates a Liability ledger account automatically when you add a tax agency. If the account is missing, check the [Chart of Accounts](/accounting/chart-of-accounts) for an account with the same name as your tax agency.

</details>

## Related Topics

- [Chart of Accounts](/accounting/chart-of-accounts) — Manage your ledger accounts, including auto-created tax liability accounts
- [Accounting Settings](/settings/accounting-settings) — Configure your accounting preferences
- [Creating Invoices](/invoicing/creating-invoices) — Apply tax rates when billing clients
- [Sales Tax Report](/reporting/sales-tax) — Review your tax liabilities and filings