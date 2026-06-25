---
title: GoCardless Integration
description: Connect GoCardless to Fiskl to collect Direct Debit and Instant
  Bank Pay payments on invoices. Automate recurring payments and reduce late
  payments.
sidebar_position: 2
---


This guide explains how to connect GoCardless to Fiskl, collect payments on invoices, and manage the integration.

## Before You Begin

You need an active GoCardless account before connecting. If you don't have one, you can create it during the connection process in Fiskl.

:::info
GoCardless account approval is not instant. Allow time for GoCardless to review your application before you can collect payments.
:::

## Benefits

Connecting GoCardless to Fiskl lets you:

- Collect Direct Debit payments on recurring invoices and payment schedules
- Accept payments in over 30 countries and multiple currencies
- Reduce late payments through automated collection
- Collect in your client's currency and settle in your own

GoCardless works best for clients with ongoing relationships — for example, consultancy or professional services. It is less suited to one-off, high-value, or instant-clearing transactions.

## Payment Types

GoCardless offers two payment types in Fiskl.

**Direct Debit** — for recurring or one-off payments:

1. Create an invoice in Fiskl and select GoCardless as the payment method.
2. Your client completes the bank debit authorisation form on their first payment.
3. Fiskl notifies you when the client's mandate is authorised.
4. Subsequent invoices under the same mandate are collected automatically.

**Instant Bank Pay** (UK only) — uses Open Banking for immediate bank-to-bank transfers:

- Available alongside Direct Debit for UK clients.
- Suited to first payments on recurring invoices or payment schedules.
- Subsequent payments use the established Direct Debit mandate.

## Connect GoCardless to Fiskl

1. Go to **Integrations** in the left menu.
2. Select **Connect to GoCardless**.
3. Complete the GoCardless account activation form, or sign in to your existing account.
4. Wait for GoCardless to approve your account. Fiskl notifies you of any status changes.

## Payment Timings and Limits

Funds are typically paid out two working days after collection. Transaction limits vary by country — for example, £5,000 for the UK and $5,000 for the US.

You can see your estimated payout in your GoCardless dashboard. Fiskl links directly to the relevant payment from within the app.

## Disconnect GoCardless

There are two ways to remove the integration:

- In Fiskl, go to **Integrations** and select the delete icon next to the action button on the GoCardless card.
- In GoCardless, disconnect Fiskl from within your GoCardless account settings.

## Common Issues

My client has not received the payment authorisation form

Check the invoice was sent successfully and that the client's email address is correct. You can resend the invoice from **Invoicing** > **Invoices**. If the issue persists, ask the client to check their spam folder.



My GoCardless account is not approved yet

GoCardless reviews new accounts before allowing payment collection. You will receive a notification once approved. Contact GoCardless support if approval is taking longer than expected.



## FAQs

### Does my client need to authorise every payment?

No. Your client authorises the mandate once on their first payment. All subsequent invoices under the same mandate are collected automatically.

### Which currencies does GoCardless support?

GoCardless supports GBP, EUR, USD, SEK, DKK, AUD, NZD, and CAD.

### What fees does GoCardless charge?

See [GoCardless pricing](https://gocardless.com/pricing/) for current fee information. Fiskl does not add any additional fees on top of GoCardless charges.

:::tip
Use the GoCardless pricing calculator to understand your fee structure. Invoices over $2,000 may incur an additional fee.
:::

For international payments, see the [GoCardless international payments](https://gocardless.com/international-payments) page.

## Related Topics

- [Payment Integrations](/integrations/payments/overview) — Overview of all payment options available in Fiskl
- [Stripe Integration](/integrations/payments/stripe) — Connect Stripe for card payments on invoices
- [PayPal Integration](/integrations/payments/paypal) — Connect PayPal for online payments on invoices
- [Creating Invoices](/invoicing/creating-invoices) — Add a payment method when creating an invoice
- [Recurring Invoices](/invoicing/create-recurring-invoices) — Automate invoice creation for ongoing clients

