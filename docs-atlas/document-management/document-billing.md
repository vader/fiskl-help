---
title: "Storage Billing"
description: "Enable paid storage on your Accountant Portal branch to upload past the 1 GB free allowance. Pay only for what you use, billed monthly with your subscription."
keywords: ["storage billing", "paid storage", "document storage", "overage", "accountant portal", "subscription"]
sidebar_position: 2
tags:
  - Accountant Portal
  - Document Management
  - Billing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Each branch in your Accountant Portal includes 1 GB of document storage free. If you need more, you can enable paid storage and pay only for what you actually use beyond the included allowance — billed monthly with your existing subscription.

## Before You Begin

You need:

- The **Manage Billing** permission on the branch
- An active subscription on the branch (paid storage attaches to your existing subscription)
- Document storage already enabled on the branch

If your branch uses the [client-pays billing model](../billing-models/client-pays-model.md), you cannot enable paid storage on the branch itself — there is no branch subscription to attach it to.

## How Paid Storage Works

When you enable paid storage, the 1 GB cap stops blocking uploads. Instead, you are billed each month for any storage above 1 GB based on the actual usage on your billing date.

The model is simple:

- **Free allowance** — 1 GB per branch, shared across every client
- **Paid rate** — a fixed per-GB rate in your branch's billing currency
- **Billed monthly** — added as a line item on your existing branch invoice

You are charged for what is stored at the moment your invoice is drafted each month. If you delete files before the next invoice draft, you are not charged for that storage on the next bill.

:::info
The free 1 GB does not roll over. If you stay under the limit one month, you do not get extra storage the next month — every invoice is calculated against the same 1 GB allowance.
:::

## Enabling Paid Storage

To enable paid storage:

1. Open any client's profile in the branch.
2. In the **Document Management** card, select the **Add storage** link in the usage display.
3. Review the per-GB rate shown for your branch's currency.
4. Select **Enable storage billing**.

The change takes effect immediately. You can upload past 1 GB right after confirming.

The dialog also shows your **Today's bill** as $0.00 — confirming that enabling paid storage does not charge you anything up front. Charges only apply if your usage exceeds 1 GB at the next monthly invoice.

:::tip
You can also enable paid storage from the cap-reached dialog when you try to upload while at 100% used. The dialog appears automatically when you select **Storage full** on the upload button.
:::

## How Billing Is Calculated

Billing is calculated **once per month** at the moment your branch invoice is drafted by Stripe. The system looks at total bytes stored across every client in the branch at that exact moment, subtracts the 1 GB free allowance, and bills the remainder at your per-GB rate.

### Worked Example

Consider a branch on the GBP rate (£0.40 per GB per month):

- 0.8 GB stored on invoice date — under allowance, no charge
- 1.4 GB stored on invoice date — 0.4 GB billed at £0.40/GB = £0.16
- 3.5 GB stored on invoice date — 2.5 GB billed at £0.40/GB = £1.00

Each month is calculated independently. A branch storing 1.4 GB across three months is billed £0.16 each month, not once.

### Volume Discount

If your Atlas account qualifies for a volume discount based on your active client count, the discount also applies to your storage charges. The same percentage off your seat plan applies to your storage line on the same invoice.

For details on volume discounts, see [Billing Models Overview](overview.md).

## Viewing Your Current Usage and Cost

The **Document Management** card on every client profile shows the live usage and cost for the branch:

- **Under 1 GB used, billing enabled** — `8.0 MB used · branch-wide · £0.40/GB above 1 GB` (no charge yet)
- **Over 1 GB used, billing enabled** — `1.4 GB used · branch-wide · billing 0.4 GB at £0.40/GB`

Because the line is branch-wide, every client in the same branch shows the same number. Switching between clients does not change the usage value.

## Disabling Paid Storage

To disable paid storage:

1. Go to your branch billing settings.
2. Find the **Storage Billing** row.
3. Select **Disable**.

After disabling, the 1 GB cap is enforced again. Existing files above the cap are kept but you cannot upload new ones until your usage drops below 1 GB.

:::warning
Disabling does not stop the current month's bill. Any storage above 1 GB at the time of the next invoice draft is still billed for that month, prorated where applicable. The change only affects future months.
:::

## Per-Currency Rates

The per-GB rate depends on your branch's billing currency. Rates are set in round numbers per currency rather than being live-converted from a base rate, so the figure you see is the figure you pay.

When you open the **Enable storage billing** dialog, the exact rate for your branch's currency is shown. If your currency is not yet supported for paid storage, the dialog tells you to contact support.

## Common Issues

<details>
<summary>The Add storage link doesn't appear on the Document Management card</summary>

The link only appears when usage reaches 50% of the allowance. Below 50%, no CTA is shown — there is plenty of room. As you approach the limit, the link appears with progressively more emphasis.

</details>

<details>
<summary>The Enable storage billing button is disabled</summary>

Three possible reasons, each shown in the dialog:

1. **No active subscription** — your branch uses a client-pays billing model or has not completed subscription setup. Set up branch billing first.
2. **No Manage Billing permission** — ask an organization owner to enable storage billing for you.
3. **Pricing not available in your currency** — contact support to request your currency be added.

</details>

<details>
<summary>I enabled paid storage but don't see a charge on my next invoice</summary>

This is normal. You are only charged for storage above 1 GB. If your branch is under 1 GB at the moment your invoice is drafted, no storage line appears on that invoice.

To see if a charge will apply on your next bill, check the **Document Management** card — the **branch-wide** usage display tells you whether you are over the allowance.

</details>

<details>
<summary>I deleted files and was still billed for them</summary>

Deleted files are soft-deleted and remain in storage for 30 days before permanent removal. During those 30 days, they continue to count toward your storage usage and toward billing.

To free storage immediately, contact support — permanent deletion can be requested manually.

</details>

## Related Topics

- [Document Storage Overview](overview.md) — How document storage works and how to use it
- [Billing Models Overview](../billing-models/overview.md) — Bill-us vs client-pays models for your Accountant Portal
- [Bill-Us Billing Model](../billing-models/bill-us-model.md) — How branch-level billing works