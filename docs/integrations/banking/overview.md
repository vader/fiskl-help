---
title: "Banking Connections Overview"
description: "Connect your bank accounts, credit cards, and payment providers to Fiskl for automated transaction imports and zero-touch reconciliation."
keywords: ["banking", "bank connection", "bank sync", "Yodlee", "Salt Edge", "Stripe", "Wio", "open banking", "transaction import"]
sidebar_position: 1
tags:
  - Banking
  - Integrations
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This section covers how to connect your bank accounts, credit cards, and payment providers to Fiskl. Live banking connections eliminate manual data entry by automatically importing transactions, giving you accurate, up-to-date records ready for categorisation and reconciliation.

## What Banking Connections Do

Linking a financial account to Fiskl creates a live feed of your transactions. Once connected, Fiskl imports your transaction history and surfaces each item in the **Banking** tab, where you can categorise, match, and reconcile against your ledger accounts.

Banking connections support the full range of account types: current accounts, savings accounts, credit cards, and payment processor accounts such as Stripe. You can connect accounts in multiple currencies within the same company.

:::info
Fiskl uses industry-standard Open Banking protocols. Your bank login credentials are never stored by Fiskl — authentication is handled entirely by the connection provider.
:::

## Supported Connection Providers

To connect a bank account, go to **Banking** in the left menu and select **Connect bank**. Fiskl partners with four providers to give global coverage. The right provider depends on your bank's location and account type.

| Provider | Primary Regions | Best For |
|---|---|---|
| **Yodlee** | USA, Canada, South Africa | Broad coverage for North American financial institutions |
| **Salt Edge** | Europe, Asia, Middle East | Open Banking connections for traditional retail banks |
| **Stripe** | Global | Payment processing accounts, payouts, and multi-currency sales |
| **Wio Bank** | UAE / Middle East | Digital business banking with automated transaction feeds |

If you operate in multiple regions, you can connect accounts through different providers within the same Fiskl company — for example, Yodlee for a US account and Salt Edge for a UK account.

## Connection Guides

import DocCardList from '@theme/DocCardList';

<DocCardList />

## Related Topics

- [Connecting Your Bank](/getting-started/connecting-your-bank) — Getting started guide for first-time bank setup
- [Account Reconciliation](/accounting/reconciliation/overview) — How to reconcile imported transactions against your ledger
- [Chart of Accounts](/accounting/chart-of-accounts) — Manage the ledger accounts transactions are mapped to
- [Integrations Overview](/integrations/overview) — All available integrations in Fiskl
