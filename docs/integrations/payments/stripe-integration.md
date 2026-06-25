---
title: Stripe
description: Connect Stripe to Fiskl to accept credit cards, debit cards, Google
  Pay, Apple Pay, iDEAL, and Bancontact on your invoices.
sidebar_position: 1
---


This guide explains how to connect Stripe to Fiskl so your clients can pay invoices online.



## Benefits

Connecting Stripe gives you access to a range of payment options for your clients:

- Credit and debit card payments
- Google Pay and Apple Pay (enabled automatically)
- iDEAL for businesses based in the Netherlands
- Bancontact for businesses based in Belgium
- Fast payouts direct to your bank account

## Connect Stripe

You can connect a new Stripe account or link an existing one.

### Create a new Stripe account

1. Go to **Integrations** in the left menu
2. Select **Connect to Stripe**
3. Enter your email address
4. Follow the instructions in Stripe to complete account setup

:::info
New Stripe accounts require KYC verification before you can accept payments. Check the status in your Stripe dashboard or on the **Integrations** page in Fiskl.
:::

### Connect an existing Stripe account

1. Go to **Integrations** in the left menu
2. Select **Connect to Stripe**
3. Sign in to your Stripe account
4. Select the account you want to link to Fiskl
5. Fiskl redirects you back after authorisation

## Use Stripe on invoices

Once connected, Stripe appears as a payment option on all new invoices.

Connected payment gateways are selected by default on every invoice. To change this default, go to **Settings** > **Invoice & Quote Settings**.

You can also switch between payment gateways when creating an individual invoice.

## Enable additional payment methods

### Google Pay and Apple Pay

Google Pay and Apple Pay are available automatically when you connect Stripe. Your clients see these as payment options when viewing your invoice.

### iDEAL (Netherlands)

If your business is based in the Netherlands:

1. Connect your Stripe account
2. Go to **Integrations** and select **Enable iDEAL**
3. iDEAL appears as a payment option on new invoices

### Bancontact (Belgium)

If your business is based in Belgium:

1. Connect your Stripe account
2. Go to **Integrations** and select **Enable Bancontact**
3. Bancontact appears as a payment option on new invoices

## Remove a payment gateway

To remove a payment gateway from your invoices, go to **Integrations** and select the delete icon next to the connected gateway.

## Disconnect Stripe

There are two ways to disconnect Stripe from Fiskl:

- In Fiskl, go to **Integrations** and select the delete icon next to the connected Stripe account
- In Stripe, follow the [Stripe guide for disconnecting a third-party platform](https://support.stripe.com/questions/disconnect-your-stripe-account-from-a-connected-third-party-platform)

## Common Issues

My Stripe account is connected but not accepting payments

Stripe requires KYC verification before processing live payments. Check your verification status in your Stripe dashboard. Until verification is complete, the account is in test mode only.



iDEAL or Bancontact is not appearing on my invoices

These methods must be enabled separately after connecting Stripe. Go to **Integrations**, confirm your Stripe account is connected, then select **Enable iDEAL** or **Enable Bancontact**.



## Related Topics

- [Payment Integrations](/integrations/payments/overview) — Overview of all payment gateways available in Fiskl
- [GoCardless](/integrations/payments/gocardless) — Accept direct debit payments via GoCardless
- [PayPal](/integrations/payments/paypal) — Accept payments via PayPal
- [Invoice & Quote Settings](/settings/invoice-quotes-settings) — Configure default payment methods and invoice behaviour

