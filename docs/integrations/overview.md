---
title: "Integrations & Automation"
description: "Connect Fiskl to your banks and payment gateways, and build on Fiskl with the public API, OAuth apps, and webhooks."
keywords: ["integrations", "automation", "banking connections", "payment gateways", "public API", "API key", "webhooks", "Stripe", "Salt Edge", "Yodlee"]
sidebar_position: 1
tags:
  - Integrations
  - Banking
  - Payments
  - Public API
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import TOCInline from '@theme/TOCInline';

This section covers how Fiskl connects to the outside world. Connect your bank accounts and payment providers to automate your books, and build on Fiskl with the public API, connected apps, and webhooks.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

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

## Public API and automation

The public API lets you read and update your Fiskl data from your own software, connect third-party apps, and react to events as they happen. It is the foundation for custom integrations and automation tools.

The main building blocks are API keys for your own scripts, connected apps that other users authorise through OAuth, and webhooks that notify your system when data changes.

For concepts, setup, and a developer quickstart, see [Public API](/integrations/public-api/overview).

## Related Topics

- [Banking Connections](/integrations/banking/overview) — Connect your bank accounts and manage transaction imports
- [Payment Gateways](/integrations/payments/overview) — Set up online payments on your invoices
- [Public API](/integrations/public-api/overview) — Build on Fiskl with API keys, OAuth apps, and webhooks
- [Connecting Your Bank](/getting-started/connecting-your-bank) — Step-by-step guide for your first banking connection
- [Importing Bank Statements](/getting-started/importing-data) — Manually import transactions when a direct connection isn't available
