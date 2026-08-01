---
title: "Tracking Products"
description: "Turn a product into a tracked inventory item in Fiskl. Set SKUs, stocking units, reorder points and per-item accounts, then add your opening stock."
keywords: ["track product", "inventory item", "SKU", "stocking unit", "reorder point", "low stock", "opening stock", "archive inventory item", "Fiskl inventory"]
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
tags:
  - Inventory
  - Products
---

import TOCInline from '@theme/TOCInline';

This guide explains how to start tracking stock on a product, what each field on the inventory item does, and how to read the inventory list. It also covers adding your opening stock, which is not part of the item form.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before You Begin

Create the product first. Inventory tracks items from your product catalog, and only products — services cannot hold stock. See [Creating Products](/products-services/creating-products).

You need `inventory.read` to view items and `inventory.write` to create or edit them. Adjusting stock is a separate permission, `inventory.adjust`, because it posts to your ledger while editing an item's settings does not. See the [Permissions Reference](/team/permissions-reference).

## Starting to Track a Product

Go to **Inventory** > **Items** and select **Track a product**.

1. **Select the product**

   Only products that are not already tracked appear in the list. If the product does not exist yet, enter its name and select **Create new product** to create it and start tracking in one step.

2. **Set the tracking type**

   **Tracked** records stock levels and costs in your ledger. **Not tracked** keeps the SKU and reorder details without any stock or accounting effect.

3. **Enter a SKU**

   Optional, but useful for searching and for your reports. A SKU must be unique within your company, and matching ignores capitalisation.

4. **Set the stocking unit**

   The unit stock is counted in, such as `each` or `kg`. This is required, and Fiskl fills it in from the product when it can. All quantities and costs are recorded in this unit.

5. **Set the reorder point and quantity**

   The **reorder point** flags the item as low stock. The **reorder quantity** is a suggested order size for when you restock. Both are optional.

6. **Set the accounts, if you need to**

   Open **Advanced accounting** to point this item at a specific **Inventory asset account**, **Cost of goods sold account** or **Income account**. Leave them blank to use the defaults.

Select **Track product** to finish.

The product cannot be changed afterwards. If you picked the wrong one, archive the item and start tracking the correct product.

## Adding Your Opening Stock

The item form has no opening stock field. A new tracked item starts at zero, and you add what you already hold afterwards in one of two ways:

- **Adjust stock** on the item, entering the quantity and the cost per unit. Best for stock you already own when you start using Fiskl.
- **A goods receipt** against a purchase order. Best when the stock is arriving from a vendor now.

See [Stock Adjustments and Counts](/inventory/stock-adjustments-and-counts) for the adjustment flow.

## Reading the Inventory List

**Inventory** > **Items** opens the list. Three cards summarise it: **Tracked items**, **Total value** and **Low stock**.

Each row shows:

| Column | What it tells you |
|---|---|
| **Product** | The product name, with the SKU underneath. |
| **Unit** | The stocking unit. |
| **On hand** | The quantity you hold, with a **Low stock** badge when relevant. |
| **Available** | On hand minus any reserved quantity. |
| **Avg unit cost** | The current average cost of a unit. |
| **Value** | On hand multiplied by the unit cost. |
| **Status** | **Not tracked** or **Archived** badges, where they apply. |

Items that are not tracked, or archived, show a dash for cost and value.

To order stock, select rows using their checkboxes and then **Create purchase order**, or use **Order** from a single row's action menu.

## How Low Stock Is Flagged

An item is flagged **Low stock** when it has a reorder point and the quantity on hand is **at or below** it. An item sitting exactly at its reorder point counts as low.

Items with no reorder point are never flagged.

:::info
Low stock is a report, not an alert. Fiskl does not email you or send a notification when an item drops below its reorder point. The count appears as a badge next to **Items** in the menu, on the **Low stock** card, and in the [Stock Valuation report](/inventory/inventory-reports).
:::

## Archiving an Item

Open the item and select **Archive**. Archived items disappear from the list and can no longer move stock, but their movement history is kept. An item that has ever moved stock can only be archived, never deleted.

Archiving has a consequence worth understanding: an archived item **no longer relieves stock when you invoice its product**. The invoice still sends and still bills your client, but no stock movement and no cost of goods sold entry is posted. Only archive items you have genuinely stopped selling.

## Common Issues

<details>
<summary>My product does not appear in the product list</summary>

Three things hide a product from that list. It may be a service rather than a product — only products can hold stock. It may already be tracked, in which case it is in your inventory list already. Or it may not exist yet, in which case enter the name and select **Create new product**.

</details>

<details>
<summary>I get an error saying the SKU already exists</summary>

SKUs must be unique within your company, and the check ignores capitalisation, so `BEAN-1KG` and `bean-1kg` collide. Search your inventory list for the SKU to find the item using it. Remember to show archived items, because an archived item still holds its SKU.

</details>

<details>
<summary>I invoiced a tracked product but my stock did not change</summary>

Check three things. The item must be **Tracked**, not **Not tracked**. It must not be archived, because archived items stop relieving stock. And the invoice must have been sent — stock moves when the invoice is issued, not when it is drafted or paid.

</details>

<details>
<summary>My new item shows zero stock</summary>

That is expected. The item form has no opening stock field. Add what you hold using **Adjust stock** on the item, or receive it against a purchase order.

</details>

## Related Topics

- [Setting Up Inventory](/inventory/setting-up-inventory) — valuation method and the accounts Fiskl posts to.
- [Stock Adjustments and Counts](/inventory/stock-adjustments-and-counts) — add opening stock and correct quantities.
- [Purchase Orders and Receiving](/inventory/purchase-orders-and-receiving) — bring stock in from a vendor.
- [Creating Products](/products-services/creating-products) — set up the product catalog behind your items.
