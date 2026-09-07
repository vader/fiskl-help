---
title: "Document Storage and Billing"
description: "What document storage each Fiskl plan includes, which files count towards it, and how storage above your plan is charged per whole gigabyte each month."
keywords: ["document storage", "storage allowance", "storage overage", "price per GB", "storage billing", "storage limit", "plan storage", "archived documents"]
sidebar_position: 8
tags:
  - Documents
  - Plans & Billing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Each Fiskl plan includes an amount of document storage. This guide explains how much you get, which files count towards it, and what happens when you go over.

## Before You Begin

Document storage requires a paid plan. Every paid plan includes storage and the full set of document features, including content search.

## What Each Plan Includes

| Plan | Included document storage |
|---|---|
| Solo | 1 GB |
| Pro | 2 GB |
| Prime | 5 GB |

Your allowance follows your plan immediately. Upgrading raises it the moment the change takes effect, and downgrading lowers it the same way.

## What Counts Towards Your Allowance

Only files in your document library count. Files elsewhere in Fiskl are stored separately and do not affect your allowance.

**Counts:**

- Every file you upload to **Documents**, in any folder
- Deleted documents, for the 90 days Fiskl keeps them

**Does not count:**

- Receipts and bills you send to AI Expenses for scanning
- Attachments added to a transaction or journal entry with the paperclip icon
- Your company logo, brand assets and invoice templates
- Uploads that never finished transferring

:::warning
Deleting a document does not free up space straight away. Fiskl keeps the file for 90 days so you can restore it, and it keeps counting for that whole period. After 90 days Fiskl deletes it permanently and the space is released.
:::

To reduce your usage today, you have to wait out the retention window on files you have already deleted, or upgrade your plan.

## Storage Above Your Plan

Going over your allowance does not stop you working. Fiskl charges for the extra space instead.

Storage above your plan is billed **per whole gigabyte, per month, rounded up**. One byte over a gigabyte boundary is charged as a full gigabyte.

| Currency | Price per GB per month |
|---|---|
| USD | $0.50 |
| EUR | €0.50 |
| GBP | £0.40 |
| AUD | $0.80 |

Other billing currencies have their own rate, shown on the **Storage** tab in your billing screen.

### Worked Examples

| Plan | Storage used | Charged for |
|---|---|---|
| Solo (1 GB) | 0.9 GB | Nothing |
| Solo (1 GB) | 1.0 GB exactly | Nothing |
| Solo (1 GB) | 1.01 GB | 1 GB |
| Pro (2 GB) | 3.4 GB | 2 GB |
| Prime (5 GB) | 7.4 GB | 3 GB |

Nothing is charged while you stay within your allowance.

## When Storage Is Billed

Fiskl measures your usage on your bill date, not continuously. A file you upload and delete between bill dates is never charged for.

- **Monthly plans** — the storage line is added to your renewal charge, after any discount and before tax
- **Annual plans** — Fiskl charges storage monthly between renewals. A month with no overage moves the date on without charging anything

The charge appears on your subscription invoice as a line reading "Document storage above plan", with the number of gigabytes and the rate applied.

## Watching Your Usage

Two places show where you stand.

The Documents screen shows a figure beside the breadcrumb trail, reading "1.2 GB of 5.0 GB used". It turns amber once you pass 80% of your allowance, and red once you go over. When you are over, it also states how much extra you are being charged for.

For the full picture, go to **Subscriptions & Billing** > **Usage** > **Storage**. That tab shows:

- A progress bar and the percentage of your allowance used
- How much space remains
- The gigabytes you will be charged for and the amount, with the date it will be added to your bill
- Your per-gigabyte rate

## Common Issues

<details>
<summary>I deleted files but my usage has not changed</summary>

Deleted documents count for 90 days. Fiskl is still holding the file so you can restore it, so the space is not released until the retention period ends and Fiskl deletes it permanently.

If you need space now, upgrade your plan. Your allowance changes as soon as the upgrade takes effect.

</details>

<details>
<summary>Fiskl will not let me upload anything</summary>

Uploads pause when you have used all your included storage and your billing currency has no per-gigabyte rate. In that case Fiskl cannot charge for the extra space, so it stops accepting new files instead.

Delete documents you no longer need, or upgrade your plan. The **Storage** tab states which situation applies to you.

</details>

<details>
<summary>My bill is higher than I expected</summary>

Check the **Storage** tab for the gigabytes charged. Two things commonly cause a surprise: rounding, since one byte over a boundary costs a full gigabyte, and deleted files, which count until their 90 days are up.

The invoice line names the number of gigabytes and the rate, so the arithmetic is on the invoice itself.

</details>

<details>
<summary>Do receipts I scan count towards this</summary>

No. Receipts sent to AI Expenses have their own allowance, measured in pages rather than gigabytes, and shown on the **Scanning** tab. Only files in **Documents** count towards document storage.

</details>

## Related Topics

- [Managing Documents](/documents/managing-documents) — upload files and delete or restore documents.
- [Documents Overview](/documents/overview) — how the document library fits together.
- [Compare Fiskl Plans](/plans-billing/selecting-plans) — plan pricing, user limits and other allowances.
- [Managing Your Subscription](/plans-billing/managing-subscription) — change plan or billing period.
