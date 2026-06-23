---
title: "Connect Stripe"
description: "Connect your Stripe account to Fiskl Banking for automatic transaction imports, accurate ledger entries, and seamless payout reconciliation."
keywords: ["Stripe", "banking integration", "Stripe connect", "payout reconciliation", "Stripe ledger", "Fiskl banking"]
sidebar_position: 3
slug: /integrations/banking/connecting-stripe
tags:
  - Integrations
  - Banking
  - Stripe
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide covers how to connect Stripe to Fiskl Banking so that transactions import automatically, ledger entries are created accurately, and Stripe payouts reconcile with your bank account without manual work.

## Before You Begin

Make sure you have:

- Admin access to your Fiskl account
- Login credentials for your Stripe account
- Your bank account already connected to Fiskl Banking (recommended — enables automatic payout matching)
- Your current financial year start date to hand

## How the Integration Works

When you connect Stripe, Fiskl imports all transactions and creates ledger entries automatically. Each entry captures the amount, fees, and currency conversion rates.

### Ledger account creation

Fiskl creates ledger accounts based on the payout bank accounts configured in your Stripe account. Each Stripe payout account maps to a corresponding ledger account in Fiskl. For example, if you have a USD payout bank account in Stripe, Fiskl creates a USD ledger account where all related transactions appear.

This works across multiple currencies. If you process EUR, GBP, and USD transactions but only have a USD payout account in Stripe, all transactions convert to USD and flow into the USD ledger account. Fiskl records the original currency and exchange rate, so payments still match to the correct invoices regardless of conversion.

When you add a new payout account in Stripe — such as a EUR bank account — Fiskl detects it automatically and creates the corresponding EUR ledger account. From that point, EUR transactions flow into the EUR payout and appear in the EUR ledger account.

### Automatic payout matching

When both Stripe and your bank account are connected to Fiskl Banking, Fiskl automatically links Stripe payouts to your bank deposits as internal transfers. This is especially useful if you have multiple payout accounts across different currencies, as each payout is matched without any manual steps.

## Connecting Stripe

### Step 1: Open Banking and select Stripe

1. Go to **Banking** in the left menu
2. Select **Stripe** from the available options
3. Select **Connect**

### Step 2: Configure import settings

1. Select a **Start date** for importing transactions — use your current financial year start date
2. Choose your **Import scope**

:::warning
Avoid importing all historical transactions. Use your financial year start date instead. Importing all history can create a large number of unnecessary ledger entries due to Stripe's detailed transaction feed. Fiskl creates an opening balance transaction as needed.
:::

### Step 3: Set up categories

1. Select a **Charge category** for processing fees (for example, "Payment processing fees")
2. Toggle **Client creation** on to automatically create client records from new Stripe customers
3. Toggle **Vendor creation** on to automatically create vendor records from new suppliers

:::info
Enabling automatic vendor creation may add many records to your account after the initial sync. Review the vendor list once the connection is complete.
:::

### Step 4: Complete the connection

1. Select **Continue**
2. Log in to your Stripe account (or create one)
3. Authorise Fiskl to access your Stripe data
4. Confirm the connection is active

Your Stripe accounts appear in Fiskl Banking. You can connect multiple Stripe accounts, including accounts in different currencies.

## What Happens After Connecting

Fiskl begins importing your transaction history immediately. The initial sync may take several minutes. You may see temporary warning icons while balances are being calculated — these clear once the sync is complete.

### Viewing transactions

Select **Transactions** on the Stripe account card to view imported activity. Alternatively, go to **Accounting** > **Chart of Accounts** and select the corresponding Stripe ledger account.

Each ledger account corresponds to one Stripe payout bank account. If you have USD, EUR, and GBP payout accounts in Stripe, you see three separate ledger accounts in Fiskl. Transactions appear in the ledger account that matches the payout currency.

### Maintaining the connection

Check that transactions are importing correctly and that categories are assigned as expected. When you add a new payout account in Stripe, Fiskl creates the corresponding ledger account automatically — no action is needed in Fiskl.

:::info
Connecting Stripe as a payment method for invoices is separate from this banking integration. See [Payment Gateways](/integrations/payments/overview) for invoice payment setup.
:::

## Common Issues

<details>
<summary>How do I know which ledger account a transaction will appear in?</summary>

Transactions appear in the ledger account that matches the Stripe payout currency. For example, if a GBP customer pays a GBP invoice but you only have a USD payout account in Stripe, the transaction converts to USD and appears in the USD ledger account. Fiskl records the original currency and exchange rate, so the payment still matches to the correct GBP invoice.

When you add a GBP payout account in Stripe later, Fiskl creates a GBP ledger account and future GBP transactions flow into it.

</details>

<details>
<summary>Transactions are not importing</summary>

1. Go to **Banking** and confirm your Stripe connection shows as active
2. Verify you have permission to access the Stripe account in question
3. Check that the import start date is set correctly
4. Try disconnecting and reconnecting your Stripe account

If transactions still do not appear, contact support with your Stripe account ID.

</details>

<details>
<summary>Automatic internal transfers are not being created</summary>

1. Confirm both Stripe and your bank account are connected to Fiskl Banking
2. Check that payouts appear in both your Stripe account and your bank account
3. Verify that payout amounts match between Stripe and your bank
4. Allow up to 24 hours for automatic matching to complete

If automatic matching does not occur, you can create the internal transfer manually.

</details>

<details>
<summary>Balance warnings or errors after connecting</summary>

Temporary warning icons during the initial sync are normal while Fiskl calculates account balances. These typically resolve within a few minutes. If warnings persist after 30 minutes, check that your opening balance transaction is correct.

</details>

## Related Topics

- [Banking Overview](/integrations/banking/overview) — Introduction to Fiskl Banking and supported connections
- [Payment Gateways](/integrations/payments/overview) — Set up Stripe to accept invoice payments (separate from this banking integration)
- [Chart of Accounts](/accounting/chart-of-accounts) — Understand how ledger accounts are structured
- [Internal Transfers](/accounting/journal-entries/guides/internal-transfers) — Manage transfers between accounts manually
