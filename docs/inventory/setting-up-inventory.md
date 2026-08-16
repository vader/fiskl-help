---
title: "Setting Up Inventory"
description: "Set your inventory valuation method and negative stock policy in Fiskl, and learn the system accounts Fiskl uses to post every stock movement for you."
keywords: ["inventory valuation", "weighted average cost", "FIFO", "negative stock", "inventory accounts", "GRNI", "purchase price variance", "inventory setup", "Fiskl settings"]
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 3
tags:
  - Inventory
  - Accounting
  - Settings
---

Setting up inventory takes two steps: turning it on for the company, and granting each person permission to use it. This guide covers both.

It then explains the two settings that govern how inventory behaves — the valuation method and the negative stock policy — and lists the ledger accounts Fiskl uses to post stock movements. Set both settings before you receive any stock.

## Before You Begin

Setting up inventory takes two separate steps, in two different places. Both are needed. Turning inventory on does not give anyone access to it, and granting permissions does nothing until inventory is on.

| Step | Where | What it does | Who can do it |
|---|---|---|---|
| 1. Turn inventory on | **Settings** > **Accounting** | Enables inventory for the whole company and sets how it behaves | Anyone with company write access |
| 2. Grant permissions | **Settings** > **Team Members** | Decides which people can use it, one person at a time | Anyone with user write access |

Do them in that order. The rest of this page covers step 1.

### Step 1 — Turn inventory on for the company

Go to **Settings** > **Accounting** and scroll to the **Inventory** card at the bottom of the page. This is a single company-wide setting: it applies to everyone, and there is one valuation method and one negative stock policy for the whole account.

You need **company write access** to change it. Without it the **Save Changes** button is disabled and shows a lock.

### Step 2 — Grant permissions to each person

Go to **Settings** > **Team Members**, select a person, and open their permissions. Permissions are set per person, so repeat this for everyone who needs access.

Inventory adds three separate groups. Someone can hold one group without the others — a warehouse assistant might receive goods without ever seeing a purchase order.

| Group | Permissions | What it lets someone do |
|---|---|---|
| **Inventory** | `inventory.read` / `.write` / `.adjust` | View items and stock, maintain item settings, and adjust or count stock |
| **Purchase Order** | `purchase_order.read` / `.write` / `.send` / `.delete` | View, raise, send, and delete purchase orders |
| **Goods Receipt** | `goods_receipt.read` / `.write` / `.post` | View and record receipts, and post them to move stock |

You need **user write access** to change someone's permissions, and it is a different permission from the one that turns inventory on. Being able to enable inventory does not mean you can grant people access to it.

:::note
In the permission grid these three groups currently appear under **Admin & access** rather than alongside Purchases. Look for the **Inventory**, **Purchase Order**, and **Goods Receipt** headings there.
:::

Two things are worth knowing before you start assigning:

- **Read access is the floor.** Someone with `inventory.write` but no `inventory.read` cannot open the screens at all.
- **The menu follows the permissions.** The **Inventory** menu only appears once a person holds at least one of `inventory.read`, `purchase_order.read`, or `bill.read`, and each item inside it is shown or hidden separately.

Most presets already include what people need — see [Roles and Permissions](/team/roles-permissions) for the breakdown by preset, and the [Permissions Reference](/team/permissions-reference) for what each permission controls. None of these permissions are available to OAuth apps.

## Setting a Valuation Method

Your valuation method decides what a sale costs. When you invoice a tracked product, Fiskl has to decide which cost to move out of stock, and the method makes that decision.

Two methods are available:

- **Weighted average** — the default. Every receipt blends into a single average cost for the item. A sale is costed at that average. Simple to follow, and the value of your stock is always quantity multiplied by one average figure.
- **FIFO (first in, first out)** — each receipt keeps its own cost as a separate layer. A sale consumes the oldest layers first, so it is costed at what you actually paid for the earliest units still on hand.

Weighted average suits most businesses. FIFO is the better fit when your costs move a lot and each sale needs matching to its specific batch. Your accountant or local rules may also require it.

:::warning
Set your valuation method **before you receive any stock**, and treat changing it afterwards as a decision to take with your accountant.

Changing the method does not restate stock you already hold. Switching from **Weighted average** to **FIFO** is the risky direction. FIFO needs cost layers to consume, and no layers exist for stock received under weighted average.

The next sale is then costed at the average as a best estimate and marked **Estimated cost**, even though the goods are physically on your shelf. It is corrected when new stock arrives. If you must change method, do it when the item is at zero stock.
:::

## Allowing Negative Stock

**Allow negative stock** is off by default, which means you cannot sell more than you hold. If an invoice would take a tracked item below zero, sending it fails and nothing is saved — no stock movement, no journal, no email to your client.

Turn it on if you routinely sell ahead of delivery. Fiskl then lets the sale through and estimates its cost, because it does not yet know what the goods will cost. The movement is marked **Estimated cost**. When the goods arrive, Fiskl compares the real cost to the estimate and posts a correction automatically.

That correction is dated at the **goods receipt**, not at the original sale, so a sale in a closed period never gets reopened. See [Selling more than you have](/inventory/stock-adjustments-and-counts) for the detail.

## The Accounts Fiskl Uses

Inventory posts to ten ledger accounts. Fiskl creates them for you and uses them without any configuration, but knowing what each one is for makes your reports far easier to read.

| Account | Sits under | Used for |
|---|---|---|
| **Inventory** | Inventory | The value of stock you hold. Debited when goods arrive, credited when they sell. |
| **Cost of Goods Sold** | Cost of Sales | The cost of stock you have sold. |
| **Goods Received Not Invoiced** | Other Current Liabilities | Goods on your shelf that the vendor has not yet billed you for. |
| **Purchase Price Variance** | Cost of Sales | The difference between the receipt price and the price the vendor billed. |
| **Inventory Adjustments** | Cost of Sales | Stock removed by an adjustment or a stock count shortfall. |
| **Inventory Adjustment Gain** | Other Income | Stock added by an adjustment or a stock count surplus. |
| **Inventory Write-off** | Cost of Sales | Returned goods that came back damaged and never re-entered stock. |
| **COGS Adjustment** | Cost of Sales | Cost corrections after a sale was made on estimated cost. |
| **Inventory Rounding** | Cost of Sales | Sub-cent residue cleared when an item reaches zero stock. |
| **Input Tax Receivable** | Other Current Assets | Recoverable purchase tax on goods received. |

Nine of these are system accounts, so you cannot delete them but you can change the display name in **Chart of Accounts**.

:::info
If your company was created before inventory was released, these accounts are added the first time each one is needed rather than all at once. An account you have not used yet may not appear in your chart of accounts. It is created automatically the moment it is first required.
:::

You can point an individual item at different accounts if you need to separate stock by type. See the **Advanced accounting** options in [Tracking Products](/inventory/tracking-products).

## Common Issues

<details>
<summary>I changed the valuation method and my sales are now marked "Estimated cost"</summary>

You switched from weighted average to FIFO while holding stock. FIFO consumes cost layers, and stock received under weighted average has none, so Fiskl fell back to the average cost as an estimate.

The estimate is corrected automatically when your next goods receipt for that item posts. To avoid it entirely, switch method only when the item is at zero stock.

</details>

<details>
<summary>I cannot save the Inventory settings</summary>

The **Save Changes** button needs company write access. Without it the button is disabled and shows a lock. Ask your account owner to change the setting or to grant you the permission.

This is a different permission from the one that grants people access to inventory. Company write access lets you turn inventory on; user write access lets you give team members permission to use it. See the [Permissions Reference](/team/permissions-reference).

</details>

<details>
<summary>I turned inventory on but my team cannot see it</summary>

Turning inventory on is only the first step. It enables inventory for the company, but it does not give anyone access. Each person also needs permissions, set individually under **Settings** > **Team Members**.

Check that the person holds at least `inventory.read`. Without a read permission the **Inventory** menu does not appear for them at all, even though inventory is on for the company.

</details>

<details>
<summary>I cannot find the Inventory Rounding account in my chart of accounts</summary>

It has not been needed yet. Fiskl creates each inventory account the first time it posts to it, so accounts appear as you use the features behind them. No action is needed.

</details>

## Related Topics

- [Inventory](/inventory/overview) — how stock, purchasing and your ledger fit together.
- [Tracking Products](/inventory/tracking-products) — start tracking stock on a product.
- [Chart of Accounts](/accounting/chart-of-accounts) — how your accounts are organised.
- [Inventory Reports](/inventory/inventory-reports) — check your stock value ties to your balance sheet.
