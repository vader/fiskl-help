---
title: "Setting Up Invoice Payment Schedules"
description: "Learn how to split a single invoice into multiple scheduled payments with up to 12 instalments using amounts or percentages."
keywords: ["payment schedule", "invoice instalments", "split payments", "invoice payment plan", "deposit", "payment terms"]
sidebar_position: 4
---

This guide explains how to set up payment schedules on invoices in Fiskl, so you can split a single invoice into multiple instalments for your clients.

## What Is a Payment Schedule?

A payment schedule divides a single invoice into two to 12 scheduled payments. Each payment has its own due date and amount, giving your client a clear plan for paying over time. Payment schedules extend the deposit feature — instead of one upfront payment, you define multiple payments against the same invoice.

:::info

[//]: # (Payment schedules apply to a single invoice with multiple payments. If you need a separate invoice for each billing period, use [recurring invoices]&#40;/docs/core-features/invoicing/recurring/recurring-invoice-management&#41; instead.)
:::

## Payment Schedule vs Recurring Invoice

Before you create a payment schedule, consider which option suits your needs.

| Feature | Payment schedule | Recurring invoice |
|---|---|---|
| Number of invoices | One invoice | One invoice per period |
| Payments | Two to 12 instalments | One payment per invoice |
| Best for | Short-term instalment plans | Ongoing subscriptions or retainers |

## How to Add a Payment Schedule

To add a payment schedule when creating or editing an invoice:

1. **Open the invoice**

   Create a new invoice or open an existing draft. Go to **Invoicing** in the left sidebar and select **New Invoice** or select an existing draft.

2. **Expand Payment Terms**

   Scroll to the **Payment Terms** section and expand it. You will see options for **Deposit**, **Discount**, and **Payment Schedule**.

3. **Select Payment Schedule**

   Select **Payment Schedule** to reveal the instalment configuration.

4. **Set the number of payments**

   Choose between two and 12 payments. Fiskl automatically distributes the invoice total equally across each instalment.

5. **Adjust amounts or percentages**

   You can define each payment as a flat amount or a percentage of the invoice total. If you edit any instalment manually, Fiskl switches to manual mode and you need to ensure the payments add up to the invoice total. Fiskl warns you if the total does not match and prevents you from saving until it does.

6. **Set payment dates**

   Assign a due date to each instalment. The final payment date becomes the invoice due date.

7. **Select Save**

   Select **Save** to apply the payment schedule to your invoice.

## How Clients See Payment Schedules

When a client opens the invoice, they see only the payments currently due. If a client opens the invoice after one or more payment dates have passed, those overdue amounts combine into a single payment due. The client also has the option to pay all remaining instalments at once.

For example, if an invoice has three scheduled payments and the client opens it after the second payment date, they see one combined amount for the first two instalments.

:::tip
Use percentage-based payments when the invoice total may change before you finalise it. Switch to flat amounts when you need precise control over each instalment.
:::

## Related Topics

- [Creating invoices](creating-invoices) — Learn how to create and send invoices
- [Invoice deposits](creating-invoices) — Collect upfront payments before delivering work

[//]: # (- [Recurring invoices]&#40;settings/template-brand-settings&#41; — Automate repeated billing with separate invoices)
