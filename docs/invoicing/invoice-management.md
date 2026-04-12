---
title: "Invoice Management"
description: "Manage invoices throughout their lifecycle in Fiskl — edit drafts, send to clients, cancel with status tracking, and handle paid or overdue invoices."
keywords: ["invoice management", "edit invoice", "cancel invoice", "invoice status", "paid invoice", "draft invoice", "sent invoice"]
sidebar_position: 3
tags:
  - Invoicing
  - Payments
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This page explains how to manage invoices throughout their lifecycle in Fiskl — from editing drafts to cancelling sent invoices and tracking payments.

As you complete the fields in an invoice, the preview on the left of the screen updates in real time. This lets you see exactly how your invoice will appear to your client before you send it.

Fiskl updates invoice status automatically based on the due date and payments received.

![Invoice management screen showing the invoice preview panel on the left and the editing fields on the right](/img/invoice/invoice-management.jpg)

## Draft Invoices

While an invoice is in **Draft** status, you can:

- Edit invoice details
- Configure email delivery settings
- Verify, update, or create payment methods
- Add attachments to include with the invoice
- Change the associated brand
- Add overdue reminders
- View history and payments

Draft invoices do not have a shareable link available.

## Sent Invoices

There are two ways to mark an invoice as sent:

- **Generate Share Link** — marks the invoice as **Sent** and gives you a link to share manually via your preferred channel, such as a messaging app or email.
- **Send by email** — sends the invoice directly to your client and marks it as **Sent** automatically.

Once an invoice is sent, you can view its history, track payments, manage payment methods, and add or remove attachments.

If you did not set overdue reminders when you sent the invoice, open the overdue invoice, edit the email as needed, and select **Resend**. The overdue status appears automatically in the email subject line for your client.

## Editing Sent Invoices

You can only edit invoices in **Draft** status directly. To edit a sent invoice:

1. Open the invoice from your invoice list
2. Select the current status and change it to **Draft**
3. Make your changes
4. Select **Save**

You can also add or remove payment methods and gateways while editing a sent invoice.

:::caution
Editing a sent invoice temporarily disables existing payments. These are usually restored when you save. If you change invoice dates so that payment dates fall before the invoice date, payments may not restore correctly and overdue reminders could be triggered.
:::

## Editing Paid or Partially Paid Invoices

When your client pays using a payment gateway, Fiskl marks the invoice as **Paid** or **Partial** automatically. If you used a manual payment method, add the payment manually — once saved, Fiskl updates the status correctly.

To edit a paid or partially paid invoice:

1. If the payment has been matched in Accounting, go to **Accounting** and unmatch the transaction first
2. Open the invoice and change its status to **Draft**
3. Make your changes and save

Once the invoice is sent or marked as paid again, Fiskl will automatch it in Accounting.

## Cancelling Invoices

When you need to cancel an invoice, consider your invoice numbering sequence and any legal requirements in your region. Fiskl provides three options.

### Option 1: Mark as Rejected (Recommended)

Changing the status to **Rejected** is the recommended approach for most situations.

1. Open the invoice from your invoice list
2. Select the current status
3. Select **Rejected** from the dropdown

This option maintains a record of the invoice, preserves your invoice number sequence, and complies with legal requirements in many countries.

### Option 2: Revert to Draft

Use this option if you need to make changes before re-sending.

1. Open the invoice from your invoice list
2. Select the current status
3. Select **Draft** from the dropdown

### Option 3: Delete the Invoice

Delete an invoice only as a last resort.

1. Locate the invoice in your invoice list
2. Select the dropdown options on the right
3. Select **Delete**

:::warning
Deleting an invoice permanently removes it from your records. This may create gaps in your invoice numbering sequence and may not comply with record-keeping requirements in some jurisdictions.
:::

:::tip
Consult your accountant or local tax authority about the correct way to handle cancelled invoices in your region.
:::

## Changing Invoice Status in Bulk

You can change the status of one or more invoices directly from the invoice list without opening each one.

1. Select one or more invoices from the list
2. Select **Status**
3. Select the new status from the dropdown

## Additional Actions

From the invoice list, you can print, duplicate, or delete invoices. Deletion is only available from the invoice list view.

## Common Issues

<details>
<summary>Existing payments were not restored after editing a sent invoice</summary>

This can happen if you changed the invoice dates so that one or more payment dates fall before the new invoice date. Fiskl cannot restore payments in this situation.

To resolve this:

1. Revert the invoice to **Draft**
2. Correct the invoice date so it is earlier than all payment dates
3. Save the invoice

If the issue persists, contact Fiskl support.

</details>

<details>
<summary>I cannot edit a paid invoice — the option to change status to Draft is greyed out</summary>

This usually means the payment has been matched to a transaction in Accounting. You need to unmatch it first.

1. Go to **Accounting**
2. Find the matched transaction and unmatch it
3. Return to the invoice and change the status to **Draft**

</details>

## Related Topics

- [Creating Invoices](creating-invoices.md) — How to create and configure a new invoice
- [Sending Invoices](sending-invoices.md) — Options for delivering invoices to your clients
- [Invoice Payment Schedules](invoice-payment-schedules.md) — Set up payment schedules for large invoices
- [Payments — Stripe Integration](../integrations/payments/stripe-integration.md) — Connect Stripe to accept card payments
- [Accounting Overview](../accounting/overview.md) — How Fiskl handles transaction matching and reconciliation
