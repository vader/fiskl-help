---
title: Payment Integrations
description: Connect Stripe, PayPal, or GoCardless to Fiskl to accept online
  payments on invoices and automate payment reconciliation.
sidebar_position: 1
---


This section covers the payment integrations available in Fiskl. Connect a payment provider to let clients pay invoices online and have payment data sync to your accounts automatically.



## How payment integrations work

When you connect a payment gateway, Fiskl adds a payment button to your invoices. Clients select their preferred payment method and complete payment on the provider's secure page. Fiskl records the payment and updates the invoice status automatically.

You can connect more than one gateway. Clients then see all available options on the invoice and choose which to use.

:::info
Fiskl does not add any fees on top of the gateway provider's own transaction charges.
:::

## Available integrations

### Stripe

Stripe supports credit and debit cards, digital wallets (Apple Pay, Google Pay), and local payment methods including iDEAL and Bancontact. It suits businesses that accept one-time payments from clients worldwide.

[Set up Stripe](/integrations/payments/stripe-integration)

### PayPal

PayPal lets clients pay using their PayPal balance, linked bank account, or card. It is widely recognised and requires no merchant account to get started.

[Set up PayPal](/integrations/payments/paypal-integration)

### GoCardless

GoCardless uses Direct Debit to collect payments from clients' bank accounts. It is well suited to recurring billing, retainers, and payment schedules, and typically has lower transaction fees than card processing.

[Set up GoCardless](/integrations/payments/gocardless-integration)

## Choosing a gateway


|  | Stripe | PayPal | GoCardless |
| ---------------------- | ---------------------------------------- | ------------------------- | ---------------------------- |
| **Card payments** | Yes | Yes | No |
| **Digital wallets** | Apple Pay, Google Pay | PayPal Wallet | No |
| **Direct Debit** | No | No | Yes |
| **Recurring payments** | Via recurring invoices | Via recurring invoices | Automated |
| **Best for** | One-time payments, international clients | Clients who prefer PayPal | Recurring billing, retainers |


## Configuring payment options on invoices

After connecting a gateway, you can have all connected gateways selected automatically on every new invoice.

1. Go to **Settings** > **Invoice & Quote Settings**
2. Select the **Payment Methods** tab
3. Toggle **Auto-select payment gateways** on
4. Select **Save**

When enabled, all connected gateways are pre-selected on each new invoice. You can still enable or disable individual gateways on a per-invoice basis when creating or editing an invoice.

## Related Topics

- [Choosing a Payment Gateway](/integrations/payments/choosing-a-payment-gateway) — Compare gateways by fees, payment methods, and regional availability
- [Stripe Integration](/integrations/payments/stripe-integration) — Connect Stripe to accept card and digital wallet payments
- [PayPal Integration](/integrations/payments/paypal-integration) — Connect PayPal to accept payments via PayPal accounts and cards
- [GoCardless Integration](/integrations/payments/gocardless-integration) — Connect GoCardless for Direct Debit and recurring payment collection
- [Creating Invoices](/invoicing/creating-invoices) — Add payment options when creating an invoice
- [Recurring Invoices](/invoicing/create-recurring-invoices) — Automate billing with GoCardless

