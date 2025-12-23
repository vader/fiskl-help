---
title: GoCardless
sidebar_position: 4
description: Simplify recurring payments with Fiskl-GoCardless integration. Automate direct debits for smoother billing and improved cash flow.
keywords: ["GoCardless integration Fiskl", "direct debit payments", "automated billing", "payment processing"]
slug: /integrations/payments/gocardless
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Integrations
  - Payment gateways
  - GoCardless
---

Connecting GoCardless to Fiskl transforms how you collect payments, especially for businesses with recurring client invoices. This integration simplifies the process of setting up automated payments via Direct Debit, improving your cash flow and reducing late payments.

Learn more about [GoCardless](https://gocardless.com/) and their [Fees](#what-are-the-fees).

## Benefits and Use Cases

- **Automated payments**: Set up Direct Debits for recurring invoices or payment schedules
- **International support**: Collect payments in over 30 countries and multiple currencies
- **Improved cash flow**: Reduce late payments with automated collection
- **Currency flexibility**: Collect in your customer's currency and settle in your own

### GoCardless is Particularly Suited for?

[//]: # (- Regular payments &#40;e.g., subscriptions, recurring services, payment schedules&#41; and integrates well with [Fiskl Recurring Invoices]&#40;../../Core-Features/Invoicing/Recurring%20Invoices/creating-recurring-invoices.md&#41;)
- Customers with ongoing relationships
- Service invoicing (e.g., consultancy, professional services)

It's less suitable for:

- Transactions requiring instant clearing
- High-value, one-off payments

## How it Works and Payment Types

When you connect GoCardless to Fiskl:

1. Fiskl integrates with your GoCardless account for seamless payment collection
1. You set up automated Direct Debit payments for your invoices
1. Customers authorize payments once, allowing for automatic future collections
1. Fiskl monitors payment statuses and updates invoice information accordingly

GoCardless offers two main payment types:

1. **Direct Debit**: For recurring or one-off payments:
    - Create an invoice in Fiskl with GoCardless as the payment option
    - Your customer completes the bank debit form (first time only)
    - Fiskl notifies you when the customer mandate is authorized
    - For subsequent invoices, payments are collected automatically

2. **Instant Bank Pay** (UK only): Uses Open Banking for immediate bank-to-bank payments:
    - Available alongside Direct Debit for UK customers
    - Ideal for first payments in recurring invoices or payment schedules
    - Subsequent payments use the established Direct Debit mandate

## Connecting GoCardless to Fiskl

1. Select Integrations from the left menu and choose "Connect to GoCardless"
1. Complete the GoCardless Account Activation form and create your account
1. Wait for account approval (You'll be notified of any status changes)

## Payment Timings and Limits

- Funds are typically paid out two working days after collection
- Transaction limits vary by country (e.g., £5000 for UK, $5000 for US)

## FAQs

### How does my customer authorize a payment?
Your customer only needs to authorize the first payment. Subsequent invoices will be paid automatically under the same mandate.

### When do I receive my payment?
GoCardless typically pays out funds to your bank account two working days after collection from your customer. You can see your estimated pay-out in your GoCardless dashboard which you can link to directly from the payment in Fiskl.

### Can I collect payments in different currencies?
Yes, GoCardless supports multiple currencies including GBP, EUR, USD, SEK, DKK, AUD, NZD, and CAD.

### What are the fees?

See GoCardless' detailed up-to-date information on [GoCardless pricing](https://gocardless.com/pricing/).
Note: Unlike other platforms, Fiskl does **not** add any additional fees.

For international payments, visit the [GoCardless international payments](https://gocardless.com/international-payments) page.

:::tip
Use the [GoCardless calculator](https://gocardless.com/pricing/) to understand the fee structure. Pay attention to invoices over $2000 as an additional fee is added.
:::

## Disconnecting GoCardless for Fiskl

There are two ways to disconnect GoCardless from Fiskl:

1. In Fiskl, go to the `Integrations` page and select the X on the connected GoCardless card
1. You can also disconnect Fiskl from within GoCardless
