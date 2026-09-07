---
title: "Credit Notes"
description: "Issue credit notes in Fiskl to reverse all or part of an invoice, apply the credit to open invoices or refund it, and keep revenue, tax and stock correct."
keywords: ["credit note", "credit memo", "refund", "returned goods", "apply credit", "invoice correction", "sales return"]
sidebar_position: 6
tags:
  - Invoicing
  - Credit Notes
  - Refunds
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

A credit note reverses all or part of a sale you have already invoiced. Use one when a client returns goods, when you agree a price reduction, or when an invoice was too high. Fiskl posts the accounting for you. Revenue and tax are reduced in the period of the credit note, the client owes less, and returned stock comes back into inventory.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before You Begin

- You need the invoice permissions to create and issue credit notes, and the payment permissions to apply or refund them.
- To credit a specific invoice, that invoice must be issued (**Sent**, **Overdue**, **Partial** or **Paid**). Draft and void invoices cannot be credited.
- A credit note uses the client and currency of the invoice it credits. You can also raise a standalone credit note against a client without an invoice.

## How Credit Notes Work

A credit note is a document like an invoice, with its own **CN-** number series. It lists the lines you are crediting with positive quantities and prices. When you issue it, Fiskl records the reversal in your books on the credit note date:

- Revenue goes down on the same ledger accounts the invoice used.
- Tax goes down for each rate on the credited lines, so your tax return for that period nets the credit.
- The client's Accounts Receivable balance goes down by the credit note total.

The credit note date is the tax point. A credit note against a sale from an earlier period lands in the current period; it never changes a return you have already filed.

Nothing posts while the credit note is a **Draft**. Issuing it is the accounting event, whether or not you email it to the client.

### Statuses

| Status | Meaning |
|---|---|
| **Draft** | Editable. No effect on your books yet. |
| **Issued** | Posted. The full credit is available to apply or refund. |
| **Partly settled** | Some of the credit has been applied to invoices or refunded. |
| **Settled** | The whole credit has been applied or refunded. |
| **Void** | Cancelled. The reversal is removed from your books. |

A credit note is never overdue and cannot be recurring.

## Create a Credit Note

### From an invoice

1. In the left sidebar, select **Invoices** and open the issued invoice.
2. Select **More** > **Create credit note**.
3. Fiskl opens a new credit note prefilled with the client, currency, and every line from the invoice. Remove the lines you are not crediting and adjust the quantities you are.
4. Add notes if needed and select **Save**.

The credit note total cannot exceed what remains uncredited on the invoice.

### Standalone

1. In the left sidebar, select **Credit Notes**.
2. Select **New Credit Note**.
3. Select the client, then add the lines you are crediting.
4. Select **Save**.

A standalone credit note reduces the client's balance but has no invoice to reverse stock against, so it never moves inventory.

:::tip
Each credit line defaults to the revenue account the original invoice line used, so gross revenue is reduced where it was earned. Change the category on a line to book the credit to **Refunds Given** instead.
:::

## Issue a Credit Note

Issuing finalises the credit note and posts it to your books.

1. Open the draft credit note.
2. Select **Send** to email it to the client with a link to the document. To issue without an email, select **More** > **Issue credit note**.

After issuing, the status changes to **Issued**, the share link is available, and the **Credit settlement** panel shows the credit available.

:::warning
An issued credit note cannot be edited or deleted. If you made a mistake, void it and issue a new one. You can only void a credit note that has not been applied or refunded.
:::

## Settle a Credit Note

An issued credit note gives the client credit. You settle it in one of two ways, or leave it open as credit on account.

### Apply the credit to invoices

Applying credit settles the client's open invoices without any money changing hands.

1. Open the credit note and select **Apply to invoices**.
2. Enter the amount to apply against each open invoice. Only invoices for the same client and currency are listed.
3. Select **Apply credit**.

The invoice balance goes down, the credit remaining goes down by the same amount, and both statuses update. Your Accounts Receivable total does not change, because the two documents already net against each other. To undo an application, select the remove icon next to it on either document.

### Refund the credit

Refunding records money you paid back to the client.

1. Open the credit note and select **Refund**.
2. Enter the amount and the date.
3. Select the bank or cash ledger account the money left. A refund must come from a money account.
4. Select **Record refund**.

Fiskl creates a bank transaction for the refund, so you can match it from your bank feed. The credit note shows the refund under **Refunds**.

### Leave the credit open

If you do nothing, the credit stays available on the client's account. It appears as a negative open item on the client's aging report and on their statement of account, and reduces what they owe.

## Credit Notes and Stock

When you issue a credit note against an invoice that sold tracked products, Fiskl posts a customer return at the same time. The credited units re-enter inventory at the cost they were relieved at when the invoice was sent, and cost of goods sold is reversed. The return appears under **Returns** on the original invoice with the credit note number in its notes.

Each credit line can carry one of three dispositions:

- **Restock** — the default. The goods come back into inventory as a new stock layer.
- **Write off** — the goods came back damaged. The cost moves to the inventory write-off account and stock is untouched.
- **No return** — a price adjustment only. Nothing moves on the cost side.

The web app restocks every tracked line. To write off or skip the return for a line, set the disposition on that line when creating the credit note through the public API. You can also post a stock adjustment after issuing. Standalone credit notes never move stock.

You cannot return more units than the invoice delivered. If the quantities exceed what is left to return, the credit note stays in **Draft** with a validation message so you can correct it.

Voiding the credit note cancels the return and takes the goods back out of stock.

## Credit Notes in Reports

- **Profit and Loss** — revenue is reduced in the period of the credit note date.
- **Sales tax reports** — tax on credited lines is deducted from the period the credit note falls in.
- **Client aging** — an unapplied credit note shows as a negative open item for the client.
- **Statement of Accounts** — credit notes and the credit applied to invoices appear on the client's statement.
- **Trial Balance** and **Balance Sheet** — Accounts Receivable reflects the reduced balance, and refunds reduce the bank account you paid from.

## Common Issues

<details>
<summary>The credit note total exceeds the invoice</summary>

Credit notes against one invoice cannot add up to more than that invoice's total. Check the other credit notes listed under **Credit notes** on the invoice, and reduce the quantities or prices on the new one.

</details>

<details>
<summary>I cannot void the credit note</summary>

A credit note can only be voided while nothing has settled it. Remove any applications from the **Credit settlement** panel first. A refunded credit note cannot be voided; record the client's repayment as a new invoice instead.

</details>

<details>
<summary>The invoice cannot be edited or voided</summary>

An invoice that has credit applied to it is locked until the application is removed. Open the invoice, expand **Credit notes**, and select the remove icon next to the applied credit. Then edit or void the invoice.

</details>

<details>
<summary>The refund was refused</summary>

A refund must be paid from a bank or cash ledger account. Select an account rather than a payment processor in the **Paid from** field. If you have no cash account in the credit note's currency, create one from the same dropdown.

</details>

<details>
<summary>Issuing failed because of stock quantities</summary>

The return quantities exceed what the invoice delivered and has not already been returned. Reduce the quantity on the affected line, or cancel a manual return that already covers those units, then issue again.

</details>

## Related Topics

- [Invoice Management](/invoicing/invoice-management) — Edit, send and track invoices through their lifecycle
- [Creating Invoices](/invoicing/creating-invoices) — Build the invoices that credit notes reverse
- [Client Aging](/reporting/client-aging) — See open invoices and unapplied credits by client
- [Statement of Accounts](/reporting/statement-of-accounts) — Send clients a statement that includes their credit notes
- [Tracking Products](/inventory/tracking-products) — Set up the tracked stock that returns re-enter
- [Sales Tax Report](/reporting/sales-tax) — See how credited tax nets in the period
