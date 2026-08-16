---
title: "Integrations"
description: "Connect Fiskl to your bank accounts and payment gateways to automate transaction imports and accept payments on invoices."
keywords: ["integrations", "banking connections", "payment gateways", "Stripe", "PayPal", "GoCardless", "Salt Edge", "Yodlee", "Wio Bank"]
sidebar_position: 1
tags:
  - Integrations
  - Banking
  - Payments
toc_min_heading_level: 2
toc_max_heading_level: 2
---

This section covers Fiskl's integrations with banks and payment providers. Connect your accounts to automate transaction imports and let clients pay invoices online.

## Banking connections

Banking connections link your bank accounts, credit cards, and business accounts to Fiskl. Once connected, transactions import automatically so your records stay current without manual entry.

Fiskl supports four banking providers:

- **Salt Edge** — Europe, Asia, and Middle East banks
- **Yodlee** — USA, Canada, and South Africa banks
- **Wio Bank** — Direct integration for UAE Wio accounts
- **Stripe** — Import transaction data from your Stripe account

:::info
Fiskl uses read-only access for all banking connections. The integration cannot initiate transfers or modify your bank account.
:::

For setup guides and provider details, see [Banking Connections](/integrations/banking/overview).

## Payment gateways

Payment gateways let clients pay invoices online. Once connected, payment buttons appear automatically on your invoices.

Fiskl supports three payment providers:

- **Stripe** — Credit cards, debit cards, Apple Pay, and Google Pay
- **PayPal** — Online payments accepted in 200+ countries
- **GoCardless** — Direct debit and recurring payments in 30+ countries

Payment data syncs back to Fiskl automatically after each transaction.

For setup guides and provider details, see [Payment Gateways](/integrations/payments/overview).

## Related Topics

- [Banking Connections](/integrations/banking/overview) — Connect your bank accounts and manage transaction imports
- [Payment Gateways](/integrations/payments/overview) — Set up online payments on your invoices
- [Connecting Your Bank](/getting-started/connecting-your-bank) — Step-by-step guide for your first banking connection
- [Importing Bank Statements](/getting-started/importing-data) — Manually import transactions when a direct connection isn't available
