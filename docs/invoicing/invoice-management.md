---
title: Invoice Management
sidebar_position: 3
description: "Streamline your billing process with Fiskl's invoice management: From creation to payment tracking, improve your cash flow management."
keywords: ["Invoice management Fiskl", "billing software", "payment tracking", "cash flow management"]
slug: /core-features/invoicing/invoice-management
tags:
 - Invoice
 - Client
 - Invoice payment
 - Stripe
---

After creating an invoice, select it to open the preview screen. You'll see how your client will view the invoice on the left, and management options on the right.

## Draft Invoices

For draft invoices, you can:

- Configure email delivery settings
- Verify, update, or create payment methods
- Add attachments to be included with the invoice
- Change the associated brand

Draft invoices don't have a shared link available.

## Sent Invoices

Once an invoice is sent, you can view its history, track payments, manage payment methods, and add or remove attachments. If you didn't set your overdue reminders when you sent the invoice, you can open the overdue invoice, edit the email as you see fit, and press resend. The overdue status will automatically appear in your customers email title.

## Editing invoices

You can only edit invoices in "Draft" status directly. To edit a sent invoice, set it to draft mode or select the pen icon, make your changes, then save. You can remove or add payment/gateways methods when editing a sent invoice.

:::info[caution]
Editing a sent invoice temporarily disables existing payments. These are usually restored when you save, unless you change invoice dates so that payment dates are before the invoice date. This can potentially trigger overdue reminders.
:::

## Cancelling Invoices

When you need to cancel an invoice, it's important to consider your invoice numbering sequence and any legal requirements in your country. Fiskl offers several options for handling cancelled invoices:

### Option 1: Mark as Rejected (Recommended)

The best practice for cancelling an invoice is to change its status to `Rejected`:

1. Locate the invoice in your invoice list
2. Select the current status
3. Choose `Rejected` from the dropdown menu

Benefits:

- Maintains a record of the invoice
- Preserves your invoice number sequence
- Complies with legal requirements in many countries

### Option 2: Revert to Draft

If you need to make changes to the invoice:

1. Find the invoice in your list
2. Select the current status
3. Change the status to `Draft`

This allows you to edit the invoice details.

### Option 3: Delete the Invoice

As a last resort, you can delete the invoice:

1. Locate the invoice in your invoice list
2. Select the dropdown options on the right
3. Choose `Delete`

:::caution
Deleting an invoice permanently removes it from your records. This may cause gaps in your invoice numbering sequence and might not comply with record-keeping requirements in some jurisdictions.
:::

:::tip
Always consult with your accountant or local tax authority about the proper way to handle cancelled invoices in your region.
:::

## Additional actions

You can print, duplicate, or delete invoices as needed. Deletion is available from the invoice list.

## Best Practices

Regularly review your invoice statuses and double-check changes before saving edited invoices. Be cautious when changing dates on invoices with existing payments to maintain accurate records and ensure smooth transactions with your clients.
