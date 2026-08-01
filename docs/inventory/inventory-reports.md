---
title: "Inventory Reports"
description: "Run the Stock Valuation and Purchase Price Variance reports in Fiskl, reconcile stock value to your balance sheet, and fix postings made outside the ledger."
keywords: ["stock valuation report", "purchase price variance report", "inventory reconciliation", "stock on hand", "inventory value", "unreconciled postings", "low stock report"]
sidebar_position: 7
toc_min_heading_level: 2
toc_max_heading_level: 3
tags:
  - Inventory
  - Reporting
  - Accounting
---

This guide explains the two inventory reports: **Stock Valuation**, which values your stock at any date and checks it against your balance sheet, and **Purchase Price Variance**, which lists every difference between receipt prices and vendor bills.

## Before You Begin

Both reports are on the Reports page, not in the Inventory menu. Go to **Accounting** > **Reports** and find them under the operational reports.

Each needs report access plus the relevant feature access — inventory access for Stock Valuation, bill access for Purchase Price Variance.

## Stock Valuation

Stock Valuation answers two questions: what stock do I hold and what is it worth, and does that figure agree with my accounts?

Set the **As of** date and select **Run report**. It defaults to today, and you can value your stock at any past date.

The report shows a row per item:

| Column | What it shows |
|---|---|
| **SKU** | The item's SKU, if it has one. |
| **Product** | The product name. |
| **Unit** | The stocking unit. |
| **On hand** | The quantity held at the as-of date. |
| **Avg unit cost** | Value divided by quantity. |
| **Value** | The total value of that item's stock. |

Items below their reorder point carry a **Low stock** badge. Items that were archived without ever moving stock are left out; archived items with history still appear.

The figures come from the permanent record of stock movements rather than a running total, which makes the report reliable for a past date. Changing the as-of date genuinely re-values your stock as at that day.

## The Reconciliation Check

At the top of the report Fiskl compares two numbers:

- **Ledger value** — the total value of stock according to your stock movements.
- **GL balance** — the balance of your inventory asset account on your balance sheet, on an accrual basis, at the same date.

When they agree you see a confirmation that inventory reconciles to the balance sheet. That is the normal state, and it is designed to hold. Fiskl values stock and posts to the ledger using the same arithmetic, so rounding alone can never create a difference.

If you have pointed individual items at different inventory accounts, the report adds up all of those accounts.

## When Inventory Does Not Reconcile

A difference does not mean something is broken. It almost always means a transaction was posted **straight to the Inventory account** instead of going through a goods receipt — most often a vendor bill where someone selected Inventory as the expense category.

The report lists the transactions responsible under **Postings not linked to stock movements**, with the date, description, account and amount. Those are the entries to correct.

To fix them, either:

- **Re-code the transaction** to the right expense account, if the purchase was not stock, or
- **Receive the goods properly** through a purchase order and goods receipt, and remove the direct posting.

Once no unlinked postings remain, the two figures agree.

:::info
This is a bookkeeping issue you can fix yourself, not a system fault. The Inventory account is an ordinary balance-sheet account, so it can be selected on a bill or a journal like any other. The report exists to catch exactly that.
:::

## Purchase Price Variance

This report lists every occasion a vendor billed you at a different price from the one you received the goods at. Set the date range with the period selector and select **Run report**.

| Column | What it shows |
|---|---|
| **Bill** | The bill the variance came from, linking to it. |
| **Vendor** | Who billed you. |
| **Product** | The product involved. |
| **Qty** | The quantity matched between bill and receipt. |
| **Receipt value** | What you received the goods at. |
| **Billed value** | What the vendor charged. |
| **Variance** | The difference. |

A positive variance is **unfavourable** — you were billed more than you received the goods at — and shows in red. A negative variance is **favourable** and shows in green. Only non-zero variances appear, so a bill matching its receipt exactly does not show up.

Use it to spot vendors who quote one price and bill another, and to check that your order prices are still realistic.

:::info
The date range filters on when the bill was **entered into Fiskl**, not on the bill's own date. A bill dated in June but entered in July appears in the July report. If a variance you expect is missing, widen the range to the period when the bill was entered.
:::

## Common Issues

<details>
<summary>My inventory does not reconcile to the balance sheet</summary>

Look at the **Postings not linked to stock movements** list on the report. Those transactions were posted directly to your Inventory account rather than through a goods receipt.

The usual cause is a vendor bill coded to Inventory as its expense category. Re-code it to the correct expense account, or enter the purchase properly through a purchase order and goods receipt and remove the direct posting.

</details>

<details>
<summary>The Purchase Price Variance report is empty but I know prices differed</summary>

Three things to check.

The date range filters on when the bill was entered, not its bill date, so widen the range. The bill must be **matched to a goods receipt** — a bill entered as a plain expense produces no variance. And only non-zero variances appear, so if you entered the bill at the receipt price there is nothing to show.

</details>

<details>
<summary>My stock value looks right but the quantity is wrong</summary>

Run the report at today's date and compare an item against its movement history, which you can open from the item page. Every movement is listed with its journal.

Two common causes are a sale on an archived item, which posts nothing, and a goods receipt left as a draft. A draft receipt has no effect until it is posted.

</details>

<details>
<summary>An item is missing from the Stock Valuation report</summary>

Items that were archived without ever moving stock are excluded. Items that are **Not tracked** never appear, because they hold no stock.

Otherwise check the as-of date: an item first received after that date correctly shows nothing.

</details>

## Related Topics

- [Bills and Purchase Price Variance](/inventory/bills-and-price-variance) — how the variance is calculated and posted.
- [Purchase Orders and Receiving](/inventory/purchase-orders-and-receiving) — the correct way to bring stock in.
- [Balance Sheet](/reporting/balance-sheet) — where your inventory value appears.
- [Reports Overview](/reporting/overview) — the full list of reports in Fiskl.
