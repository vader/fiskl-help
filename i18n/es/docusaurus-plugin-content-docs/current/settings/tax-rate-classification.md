---
title: "Classifying Tax Rates"
description: "Learn what each tax rate question in Fiskl means, from behaviour and tax type to reclaimable status, so your transactions report correctly on your tax return."
keywords: ["tax classification", "tax rate", "tax behaviour", "reclaimable tax", "rate band", "tax type", "needs classification"]
sidebar_position: 5
tags:
  - Settings
  - Tax
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

A tax rate in Fiskl records what a tax is, not only what it charges. This page explains each question on the tax rate form and what your answer affects.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Why Classification Matters

A percentage on its own does not say much. Four tax rates can all show 0% on an invoice and belong in four different places on a tax return:

- **Zero-rated** sales are taxable at 0% and count towards your total sales.
- **Exempt** sales are not taxable, and having them can restrict how much tax you reclaim.
- **Out of scope** sales do not belong on the return at all.
- **Reverse charge** sales show no tax because your client accounts for it, and they still have to be declared.

The invoice looks correct in all four cases. Classification is what tells Fiskl which one you meant, so each transaction reports in the right place.

## Before You Begin

Set up a tax agency first. Every tax rate belongs to one. See [Tax Management](/settings/tax-management) for the steps.

## Where This Applies

Fiskl includes the tax authorities and tax types for these countries:

- The 27 European Union member states
- United Kingdom
- United States
- Canada
- Australia
- Singapore
- United Arab Emirates
- South Africa

In these countries the authority list and the tax types on the rate form are filtered to what applies where you are registered, so a Canadian agency offers the Canada Revenue Agency and the provincial ministries, and a German agency offers VAT rather than GST.

## The Classification Questions

Open **Settings** > **Tax Management** > **Taxes**, then select **Add rate**, or select an existing rate to edit it.

### Behaviour

**Behaviour** is the plain-English meaning of the tax. It is the same set of options in every country.

| Option | Use it when |
|--------|-------------|
| **Taxed** | You charge tax at a positive rate. |
| **Taxed at 0%** | The supply is taxable, and the rate is zero. |
| **Exempt** | The supply is not taxable and no tax is charged. |
| **Counterparty accounts** | Your client accounts for the tax, such as a reverse charge. |
| **Out of scope (No tax)** | The supply falls outside the tax system entirely. |
| **Withheld at source** | The payer deducts the tax before paying you. |

:::warning
**Exempt** and **Out of scope (No tax)** are not the same thing, even though both show no tax on the invoice. Exempt supplies usually appear on your return and can reduce how much tax you reclaim. Out of scope supplies do not appear at all. Select the wrong one and your return is wrong in a way the invoice will not show you.
:::

### Tax Type

**Tax type** is the kind of tax, such as VAT, GST, or Sales tax. Fiskl offers only the types that exist in the country of the tax agency, so a Canadian agency offers GST and Sales tax, and a German agency offers VAT.

### Rate Band

**Rate band** groups the rate as **Standard**, **Reduced**, or **Super-reduced**. It appears for VAT and GST style taxes, where governments publish rates in named bands, and it is hidden for sales taxes, which do not use bands.

A charged rate needs a rate band. If you leave it empty, the rate cannot be saved.

### Base

**Base** is how the tax is calculated. **A percentage of value** covers almost every case.

### Reclaimable

**Reclaimable** records whether you can recover the tax you pay.

| Option | Meaning |
|--------|---------|
| **Yes** | Fully recoverable. |
| **Partial** | Recoverable in part. Enter the recovery rate. |
| **No** | Not recoverable. Select a recovery reason. |
| **N/A** | This tax has no recovery mechanism. |

Select **No** and a **Recovery reason** appears, so your return records why the tax was blocked rather than only that it was.

### Jurisdiction Code

You do not enter this. Fiskl builds a code from your answers when you save, and shows it on the rate. The code is how your reporting identifies the rate, which is why the answers above matter more than the rate name.

## Classifying Existing Rates

Tax rates created before classification was introduced are marked **Needs classification**. They still calculate tax on invoices and expenses, and they do not report correctly until you complete them.

To classify one:

1. Open **Settings** > **Tax Management** > **Taxes**.
2. Select the rate marked **Needs classification**.
3. Answer the questions above.
4. Select **Save**.

:::tip
Work through your most used rates first. A rate you apply every day is worth more than one you have used twice.
:::

## Common Issues

<details>
<summary>A rate is marked Needs classification</summary>

The rate was created before classification existed, or it was saved without a complete set of answers. Open the rate, complete the questions, and select **Save**. The badge clears once the rate classifies.

</details>

<details>
<summary>Fiskl will not save a rate without a rate band</summary>

Charged rates need a rate band. Select **Standard**, **Reduced**, or **Super-reduced** and save again. If no rate band field appears, the tax type does not use bands and something else is blocking the save.

</details>

<details>
<summary>Rate band does not appear on the form</summary>

Rate bands apply to VAT and GST style taxes. Sales taxes do not use them, so the field is hidden when you select **Sales tax** as the tax type.

</details>

<details>
<summary>None of the recovery reasons fit</summary>

The recovery reasons cover taxes that have a recovery mechanism with restrictions. If your tax has no recovery mechanism at all, select **N/A** for **Reclaimable** rather than **No**.

</details>

## Related Topics

- [Tax Management](/settings/tax-management) — Set up tax agencies, rates, and tax groups
- [Sales Tax Report](/reporting/sales-tax) — See the tax you have charged and paid
- [Accounting Settings](/settings/accounting-settings) — Set your accounting basis and financial year
- [Chart of Accounts](/accounting/chart-of-accounts) — Where tax control accounts sit in your ledger
