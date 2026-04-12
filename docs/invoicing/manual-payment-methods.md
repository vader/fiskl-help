---
title: "Manual Payment Methods"
description: "Set up manual payment methods like bank transfer or cheque on Fiskl invoices, with custom instructions visible to clients on invoices and payment pages."
keywords: ["manual payment", "bank transfer", "payment instructions", "cheque", "payment methods", "invoice payment"]
sidebar_position: 3
tags:
  - Invoicing
  - Payments
  - Settings
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to set up manual payment methods in Fiskl. Manual payment methods give clients instructions for paying outside of integrated gateways — such as bank transfer or cheque — and appear on invoices and payment pages alongside any connected payment gateways.

## Before You Begin

- If you use payment gateways such as Stripe or GoCardless, confirm they are connected in **Integrations** in the left menu. Manual payment methods appear alongside them on the invoice — they do not replace them.
- To automatically attach available gateways when creating new invoices, enable **Auto-select payment gateways** in **Settings** > **Invoice and Quote Settings** > **Manual Payment Methods**.

## Add a Manual Payment Method

1. Go to **Settings** > **Invoice and Quote Settings** > **Manual Payment Methods**.
2. Select **+ New Payment Method**.
3. Enter a descriptive name your client will see on the invoice — for example, Bank Transfer — Chase ACH.
4. Add clear payment instructions in the **Notes** field.
5. Add relevant account details using name-value pairs such as account number, sort code, or bank name. Use the provided field placeholders as a guide.
6. Select **Save**.

:::tip
Use basic HTML to style your payment instructions for better readability. Supported tags are `<b>`, `<i>`, `<u>`, `<p>`, and `<br>`.

For example:
```
<b>Bank name:</b> Example Bank<br>
<i>Please include your invoice number as the payment reference.</i>
```

Select **Preview** to see how your instructions will appear to clients before saving.
:::

## Edit or Delete a Payment Method

1. Go to **Settings** > **Invoice and Quote Settings** > **Manual Payment Methods**.
2. Select the **Edit** icon on the payment method card to update the name, notes, or details, then select **Save**.
3. Select the **Delete** icon on the payment method card to permanently remove the payment method.

:::warning
Deleting a payment method removes it from any future invoices. It will no longer appear on new invoices or payment pages.
:::

## Common Issues

<details>
<summary>My manual payment method does not appear on the invoice</summary>

Manual payment methods must be selected on each invoice unless you have enabled **Auto-select payment gateways** in **Settings** > **Invoice and Quote Settings**. Open the invoice, select the **Payment Methods** field, and confirm your manual method is selected.

</details>

<details>
<summary>My client cannot see the payment instructions</summary>

Payment instructions only appear when the client views the invoice or opens the payment page. Confirm that you have entered instructions in the **Notes** field and added account details when setting up the payment method. Select **Preview** in the payment method settings to verify how the instructions appear.

</details>

## Related Topics

- [Payment Gateways](../integrations/payments/overview.md) — Connect Stripe, GoCardless, and other integrated gateways to accept online payments.
- [Creating Invoices](../invoicing/creating-invoices.md) — Add payment methods when creating or editing invoices.
- [Invoice and Quote Settings](../settings/invoice-quotes-settings.md) — Configure default invoice behaviour including payment options.