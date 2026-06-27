---
title: PayPal Integration
description: Connect PayPal to Fiskl to accept online payments on your invoices.
  Set up the integration in minutes and offer clients a familiar payment method.
sidebar_position: 3
---


This guide explains how to connect your PayPal account to Fiskl and offer PayPal as a payment method on your invoices.



## Before You Begin

You need an active PayPal account with a confirmed email address. If you don't have one, visit [paypal.com](https://www.paypal.com) and select **Sign Up** before proceeding.

## Connect PayPal to Fiskl

1. Go to **Integrations** in the left menu
2. Select **Payment Integrations**
3. Select **Connect** next to PayPal
4. Enter the email address associated with your PayPal account
5. Select **Save** to complete the connection

:::tip
Use the email address linked to your primary PayPal business account to ensure payments are routed correctly.
:::

## Use PayPal on Invoices

Once connected, PayPal appears as a payment option on each invoice. Toggle it on to enable it for that invoice.

:::info
To have all connected payment gateways toggled on by default for every new invoice, enable this in **Settings** > **Invoice & Quote Settings**.
:::

## Disconnect PayPal

1. Go to **Integrations** in the left menu
2. Select **Payment Integrations**
3. Select **Disconnect** next to PayPal

Disconnecting removes PayPal as a payment option from future invoices. It does not affect previously sent invoices or recorded payments.

## Common Issues

PayPal payments are not appearing on invoices

Confirm the integration is active under **Integrations** > **Payment Integrations**. If PayPal shows as connected but is not appearing on a specific invoice, check whether payment gateways have been manually adjusted for that invoice in **Invoice & Quote Settings**.



Connection failed during setup

Verify the email address you entered matches your PayPal account exactly. PayPal accounts must be active and in good standing. If the issue persists, disconnect and reconnect the integration.



## Related Topics

- [Payment Integrations](/integrations/payments/overview) — Overview of all payment gateway options in Fiskl
- [Stripe Integration](/integrations/payments/stripe-integration) — Connect Stripe to accept card payments
- [GoCardless Integration](/integrations/payments/gocardless-integration) — Set up direct debit payments via GoCardless
- [Invoice & Quote Settings](/settings/invoice-quotes-settings) — Manage default payment gateway options for invoices

