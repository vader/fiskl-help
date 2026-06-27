---
title: Choosing a Payment Gateway
description: Compare Stripe, PayPal, and GoCardless to find the right payment
  gateway for your business — covering fees, payment methods, regions, and use
  cases.
sidebar_position: 2
---


This guide helps you select the right payment gateway for your business by comparing payment methods, fees, regional availability, and typical use cases.



## How payment gateways work

When a client selects a payment option on your invoice, they are taken to the gateway's secure payment page. The gateway processes the payment and transfers funds to your bank account on a payout schedule. Fiskl records the payment and updates the invoice status automatically.

No payment card data passes through or is stored in Fiskl. All processing happens on the gateway's own infrastructure.

## Payment methods by gateway

Each gateway supports different ways for clients to pay.

### Stripe

- Credit and debit cards (Visa, Mastercard, Amex)
- Apple Pay and Google Pay
- iDEAL (Netherlands)
- Bancontact (Belgium)

Stripe offers the widest range of payment methods and suits businesses with international clients or those who want to offer card and digital wallet options.

### PayPal

- PayPal balance
- Linked bank account
- Credit and debit cards (processed through PayPal)

PayPal is widely recognised and trusted by clients globally. It suits businesses whose clients already use PayPal or who want a quick setup without a merchant account.

### GoCardless

- Direct Debit (30+ countries)
- Instant Bank Pay via Open Banking (UK only)

GoCardless pulls payments directly from a client's bank account using an authorised mandate. It suits businesses with recurring billing, retainers, or payment schedules, and typically carries lower fees than card processing.

## Transaction fees

Fees vary by region, account type, and transaction volume. The figures below are indicative. Check the provider's website for current rates in your region.


| Gateway | Typical fee | Notes |
| -------------- | ---------------- | ---------------------------------------------------------------------------------------- |
| **Stripe** | 2.9% + fixed fee | Additional fees for international cards and currency conversion |
| **PayPal** | 2.9% + fixed fee | Additional fees for international transactions and currency conversion |
| **GoCardless** | 1% (capped) | UK: capped at £2. EU: capped at €2. Lower than card processing for higher-value invoices |


:::info
Fiskl does not add any fees on top of the gateway provider's own charges.
:::

For high-volume businesses, all three providers offer custom pricing. Contact the provider directly to negotiate rates.

## Choosing by payment type

### One-time payments

Stripe or PayPal are the better fit for one-time invoice payments.

- Use **Stripe** for maximum payment method coverage, international clients, or Apple Pay and Google Pay support
- Use **PayPal** when your clients already use PayPal or you want the fastest setup

### Recurring payments

GoCardless is the better fit for recurring billing. Once a client authorises a payment mandate, GoCardless collects each payment automatically without the client needing to act again. This reduces late payments and manual follow-up.

Stripe and PayPal can support recurring billing via Fiskl's recurring invoice feature, but each collection still depends on the client actively paying each invoice.

### Both payment types

You can connect multiple gateways. A common setup is Stripe or PayPal for one-time payments and GoCardless for recurring clients.

## Regional availability

### United Kingdom

- **Stripe** — Full card and digital wallet support. Supports Bacs Direct Debit.
- **GoCardless** — Bacs Direct Debit with lower capped fees. Instant Bank Pay (Open Banking) available.
- **PayPal** — Available and FCA regulated.

### European Union

- **Stripe** — Pan-European card support. iDEAL (Netherlands) and Bancontact (Belgium) available.
- **GoCardless** — SEPA Direct Debit across the eurozone. Fees capped at €2.
- **PayPal** — Available across the EU.

### United States

- **Stripe** — Comprehensive card and digital wallet support. ACH bank transfers available.
- **GoCardless** — ACH Direct Debit available. Fees vary.
- **PayPal** — Widely used. Suitable for clients who prefer PayPal over card entry.

### Middle East and Asia

- **Stripe** — Available in most countries. Check [Stripe's country availability](https://stripe.com/global) for your region.
- **PayPal** — Available in 200+ countries. Most widely available gateway in this region.
- **GoCardless** — Coverage is more limited. Check [GoCardless's supported countries](https://gocardless.com/direct-debit/countries/) before setting up.

## Security and compliance

All three gateways meet industry security standards. You do not need to manage PCI compliance directly — each gateway handles this on their own infrastructure.


| Gateway | Key certifications |
| -------------- | --------------------------------------------------------------------------- |
| **Stripe** | PCI DSS Level 1, SOC 2 Type II, GDPR compliant, 3D Secure 2.0 |
| **PayPal** | PCI DSS compliant, GDPR compliant, FCA regulated (UK) |
| **GoCardless** | FCA authorised (UK), PSD2 compliant, GDPR compliant, Open Banking certified |


## Common questions

Can I connect more than one gateway?

Yes. Connect all three if needed. Clients see all connected options on the invoice and select their preference. You can also control which gateways appear by default in **Settings** > **Invoice & Quote Settings** > **Payment Methods**.



How quickly do I receive funds?

Payout schedules vary by gateway and region:

- **Stripe** — typically two business days after payment
- **PayPal** — typically one to two business days
- **GoCardless** — typically two business days after collection from the client's account

Check your gateway dashboard for the exact schedule for your account.



What happens if a payment fails?

Fiskl updates the invoice status automatically. For card failures (Stripe, PayPal), the client can retry immediately. For Direct Debit failures (GoCardless), GoCardless retries collection based on the retry settings in your GoCardless account.



## Related Topics

- [Payment Integrations](/integrations/payments/overview) — Overview of all payment integrations in Fiskl
- [Stripe Integration](/integrations/payments/stripe-integration) — Connect Stripe to accept card and digital wallet payments
- [PayPal Integration](/integrations/payments/paypal-integration) — Connect PayPal to accept payments via PayPal accounts and cards
- [GoCardless Integration](/integrations/payments/gocardless-integration) — Connect GoCardless for Direct Debit and recurring payment collection
- [Recurring Invoices](/invoicing/create-recurring-invoices) — Automate billing with recurring invoices

