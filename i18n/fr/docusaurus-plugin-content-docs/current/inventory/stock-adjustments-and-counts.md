---
title: "Stock Adjustments and Counts"
description: "Correct stock quantities in Fiskl with adjustments and stock counts, record client returns, add opening stock, and understand what happens when you oversell."
keywords: ["stock adjustment", "stock count", "stocktake", "opening stock", "write off stock", "client return", "negative stock", "estimated cost", "inventory adjustments account"]
sidebar_position: 6
toc_min_heading_level: 2
toc_max_heading_level: 3
tags:
  - Inventory
  - Accounting
---

import TOCInline from '@theme/TOCInline';

This guide explains how to change stock quantities outside the buying and selling cycle: manual adjustments, stock counts, client returns, and what happens when you sell more than you hold. Every one of these posts to your ledger immediately.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before You Begin

Adjusting stock needs `inventory.adjust`, which is separate from the `inventory.write` permission that lets you create and edit items. You may be able to edit an item but not change its quantity. The same permission covers recording a client return. See the [Permissions Reference](/team/permissions-reference).

Both actions are on the item's own page. Open **Inventory** > **Items** and select the item. They are unavailable for items that are not tracked, or archived.

## Adjusting Stock

Use an adjustment when you know the change you want to make: stock arrived damaged, you found extra units, or you are loading opening stock.

Open the item and select **Adjust stock**.

1. **Enter the quantity change**

   Positive to add stock, negative to remove it. The stocking unit is shown beside the label.

2. **Enter the unit cost**

   This field appears **only when you are adding stock**, because Fiskl needs to know what the new units cost. When removing stock, the cost comes from your valuation method.

3. **Set the date**

   Defaults to today. This drives the accounting period.

4. **Enter a reason**

   Free text, such as `damaged in storage`. It appears on the journal and in the movement history, so write something your accountant will understand later.

Select **Adjust stock** to post it.

## Counting Stock

Use a count when you have physically counted the shelf and want the system to match it. You enter what you counted, not the difference.

Open the item and select **Count stock**. The dialog shows the current quantity on hand. Enter the **Counted quantity**, a date and a reason, then select **Save count**.

Fiskl works out the difference and posts it as a correction. If the count matches the recorded level, nothing is posted. If the count is higher than the recorded level, enter a unit cost for the extra units.

## What Adjustments Post

| Direction | Debit | Credit |
|---|---|---|
| Adding stock | **Inventory** | **Inventory Adjustment Gain** |
| Removing stock | **Inventory Adjustments** | **Inventory** |

Stock counts post exactly the same way. A surplus behaves like adding stock, a shortfall like removing it.

:::warning
Writing off damaged or lost stock posts to **Inventory Adjustments**, not to **Inventory Write-off**, despite the name.

**Inventory Write-off** is used for one thing only: goods a client returns that came back damaged and never re-enter stock. Everything else — breakage, shrinkage, expiry, obsolete stock — is a negative adjustment and lands in **Inventory Adjustments**. Use a clear reason on the adjustment so you can identify write-offs later.
:::

## Adding Opening Stock

To load stock you already hold when you start using Fiskl:

1. Start tracking the product. See [Tracking Products](/inventory/tracking-products).
2. Open the item and select **Adjust stock**.
3. Enter the quantity you hold as a positive number, and the cost per unit you paid.
4. Set the date to your opening balance date, and use a reason such as `opening stock`.

This debits **Inventory** and credits **Inventory Adjustment Gain**. If you are migrating from another system, you may have already recorded the stock value on your balance sheet. Ask your accountant whether the credit should move to your opening equity or suspense account instead.

## Recording Client Returns

Returns are recorded on the invoice, not in inventory. Open the invoice, find the **Returns** section and select **Record return**.

For each line, enter the quantity coming back and set the **Condition**:

- **Restock** — the goods are sellable again and re-enter stock at the exact cost they were sold at.
- **Write off** — the goods came back damaged and never re-enter stock.

| Condition | Debit | Credit | Stock |
|---|---|---|---|
| **Restock** | **Inventory** | **Cost of Goods Sold** | Increases |
| **Write off** | **Inventory Write-off** | **Cost of Goods Sold** | Unchanged |

Returned stock always comes back at the cost it left at, never at the current average. Under FIFO the returned units form a new batch rather than reopening the one they came from.

Recording a return handles the stock and the cost. It does not refund your client — do that by recording a payment or a credit on the invoice.

## Selling More Than You Have

What happens depends on the **Allow negative stock** setting. See [Setting Up Inventory](/inventory/setting-up-inventory).

**When negative stock is not allowed**, which is the default, sending an invoice that would take stock below zero fails. Nothing is saved: no stock movement, no journal, no status change, and no email to your client. Fiskl tells you which item is short and how much is available. Receive or adjust the stock, then send again.

The check uses your **available** quantity, which is on hand minus anything reserved.

**When negative stock is allowed**, the sale goes through. Fiskl does not yet know what the goods will cost, so it estimates:

- Under weighted average, at the current average cost.
- Under FIFO, at the cost of the most recent batch.

The movement is marked **Estimated cost** in the movement history, with a note that it will adjust when stock arrives.

When you next receive that item, Fiskl compares the real cost against the estimate and posts the difference:

| | Account |
|---|---|
| Dr or Cr | **COGS Adjustment** |
| Cr or Dr | **Inventory** |

The correction is dated at the **goods receipt**, not at the original sale. A sale made in a period you have since closed is never reopened, so your closed books stay closed.

## Reviewing Stock Movements

Every tracked item has a **Movement history** card on its page, showing the **Date**, **Type**, **Quantity**, **Unit cost**, **Value** and a link to the **Journal** behind each movement.

Types you will see include **Received**, **Sale**, **Return**, **Adjustment**, **Stock count** and **Cost adjustment (system)**. The last one covers automatic corrections: cost true-ups after an estimated sale, and rounding cleared when an item reaches zero stock.

Select **View journal** on any row to open the accounting entry it posted.

## Common Issues

<details>
<summary>I cannot see the Adjust stock button</summary>

Three possibilities. You may not have `inventory.adjust`, which is separate from `inventory.write`. The item may be **Not tracked**, in which case it has no stock to adjust. Or it may be archived, and archived items cannot move stock.

</details>

<details>
<summary>Fiskl is asking for a unit cost and I only want to remove stock</summary>

The unit cost field appears only when the quantity change is positive. If you are seeing it, your quantity is being read as an increase — check you entered a minus sign.

On a stock count, the field appears when your counted quantity is higher than the recorded level.

</details>

<details>
<summary>I wrote off damaged stock and it went to Inventory Adjustments, not Inventory Write-off</summary>

That is correct behaviour. **Inventory Write-off** is reserved for returned goods that came back damaged. Stock you write off yourself is a negative adjustment and posts to **Inventory Adjustments**.

Both sit under Cost of Sales, so your profit and loss is unaffected either way.

</details>

<details>
<summary>I cannot send an invoice — it says there is insufficient stock</summary>

You are selling more than you hold, and negative stock is not allowed on your account. The message names the item and the available quantity.

Receive the stock, adjust it, or reduce the invoice quantity. If selling ahead of delivery is normal for you, turn on **Allow negative stock** in **Settings** > **Accounting**.

</details>

<details>
<summary>A movement is marked "Estimated cost" — do I need to fix it?</summary>

No. The sale was made when you had insufficient stock, so Fiskl estimated the cost. It corrects itself automatically when you next receive that item, posting the difference to **COGS Adjustment**.

If the item has not been received since, the estimate is still open. Receiving the stock resolves it.

</details>

## Related Topics

- [Tracking Products](/inventory/tracking-products) — set up items and reorder points.
- [Setting Up Inventory](/inventory/setting-up-inventory) — valuation method and negative stock policy.
- [Inventory Reports](/inventory/inventory-reports) — check your stock value against your balance sheet.
- [Journal Entries](/accounting/journal-entries/overview) — how manual journals work in Fiskl.
