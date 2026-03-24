---
title: Connect Stripe
sidebar_position: 1
description: "Connect Stripe to Fiskl Banking for automatic transaction imports, accurate multi-currency ledger entries, and seamless payout reconciliation."
keywords: ["Stripe integration Fiskl", "payment processing", "invoicing software", "small business payments", "banking", "Fiskl tools"]
slug: /integrations/banking/connecting-stripe
tags:
  - Integrations
  - Banking
  - Stripe
---

This guide explains how to connect your Stripe account to Fiskl Banking and shows you how this integration simplifies payment reconciliation. The connection automatically imports transactions, creates accurate ledger entries, and links Stripe payouts to your bank account as internal transfers—eliminating hours of manual reconciliation work.

The Stripe integration is essential for businesses that process online payments, especially those handling multi-currency transactions or managing multiple Stripe accounts.

## How it Works

When you connect Stripe to Fiskl Banking, the system imports all transactions from your Stripe accounts and creates accurate ledger entries automatically. Each transaction includes the amount, fees, and currency conversion rates.

### Ledger Account Creation

Fiskl creates ledger accounts based on the payout bank accounts you configure in Stripe. Each payout account in Stripe corresponds to a ledger account in Fiskl. For example, if you have a USD bank account connected in Stripe, Fiskl creates a USD ledger account where all transactions flow.

This works seamlessly across multiple currencies. If you process transactions in EUR, GBP, and USD but only have a USD payout account in Stripe, all transactions convert to USD and appear in your USD ledger account. Fiskl tracks the original currency and exchange rates, so when you match payments to invoices, the system links them correctly regardless of currency conversion.

When you add a new payout account in Stripe (such as a EUR bank account), Fiskl detects this automatically and creates the corresponding EUR ledger account. From that point forward, EUR transactions flow into the EUR payout and appear in the EUR ledger account. The system adapts to your Stripe configuration without manual setup.

### Automatic Payout Matching

When you have both Stripe and your bank account connected to Fiskl Banking, the system automatically links Stripe payouts to your bank deposits as internal transfers. This automation is particularly valuable if you have multiple payout accounts across different currencies.

The integration eliminates manual reconciliation of individual Stripe transactions. You work with clean, organized data instead of hundreds of separate line items.

## Key Benefits

The Stripe integration handles all transaction types including invoices paid through Fiskl, payments initiated outside Fiskl, issuing card transactions, and all associated fees, refunds, charges, and chargebacks. The system processes multi-currency transactions accurately with automatic currency conversions and intelligent matching to the correct invoices.

Fiskl creates ledger accounts automatically based on your Stripe payout configuration. When you add a new payout bank account in Stripe for a different currency, Fiskl detects the change and creates the corresponding ledger account immediately. This means your accounting structure adapts automatically as your business grows and your currency needs change.

You can connect and manage multiple Stripe accounts simultaneously across iOS, Android, and web platforms. Permission settings let you control who can view and manage Stripe transactions in your organization.

The automatic internal transfer feature saves significant time, especially when managing frequent payouts across multiple accounts and currencies.

## Before You Begin

Ensure you have:
- Admin access to your Fiskl account
- Login credentials for your Stripe account
- Your bank account connected to Fiskl Banking (recommended for automatic internal transfers)
- Your current financial year start date

## Connecting Your Stripe Account

### Connect to Stripe

1. Select **Banking** in the left menu or visit the [Banking page](https://my.fiskl.com/banking)
2. Select **Stripe** from the available integration options
3. Select **Connect** to begin the setup

### Configure Import Settings

Choose your transaction import settings:

1. **Start date**: Select the date from which to import transactions
2. **Import scope**: Decide whether to import all transactions from the start date

:::warning
Avoid selecting `ALL` historical transactions when possible. Use your current financial year start date instead. Fiskl creates an Opening Balance ledger transaction as needed. Importing all historical transactions may create numerous unnecessary ledger entries due to Stripe's detailed transaction feed.
:::

### Set Up Categories

Configure how Fiskl categorizes your Stripe transactions:

1. **Charge category**: Select a category for processing fees (such as "Payment processing fees")
2. **Client creation**: Toggle on to automatically create client records from new customers
3. **Vendor creation**: Toggle on to automatically create vendor records from new suppliers

:::info
Enabling automatic vendor creation may add many new vendors to your account. Review this list after the initial sync.
:::

### Complete the Connection

1. Select **Continue** to connect to Stripe
2. Log in to your Stripe account or create a new account
3. Authorize Fiskl to access your Stripe data
4. Verify the connection succeeds

Your Stripe accounts appear automatically in Fiskl Banking. You can connect multiple Stripe accounts, including those with different currencies.

## What Happens Next

After connecting Stripe, Fiskl begins importing your transaction history. The initial sync may take several minutes and display temporary warning icons while the system calculates account balances.

### Automatic Payout Matching

When you have both Stripe and your bank account connected to Fiskl Banking, the system automatically matches Stripe payouts to bank deposits. Fiskl creates internal transfer records linking these transactions, eliminating the need to manually reconcile each payout.

This automation becomes increasingly valuable as payout frequency increases. Multiple payout accounts across different currencies are handled automatically without additional setup.

### Viewing Your Transactions

To view imported transactions, select **Transactions** on the Stripe account card. Alternatively, navigate to **Chart of Accounts** and select the corresponding Stripe ledger account.

Each ledger account corresponds to a payout bank account in Stripe. If you have USD, EUR, and GBP payout accounts in Stripe, you see three separate ledger accounts in Fiskl. Transactions appear in the ledger account that matches the payout currency, making it easy to track how funds flow through your different payout accounts.

### Maintaining Your Connection

Review your Stripe connection regularly to ensure accurate operation. Verify that transactions import correctly and categories are assigned appropriately. Check that automatic internal transfers link correctly to your bank deposits.

Monitor the transaction feed for any sync errors or warnings. When you add new payout accounts in Stripe, Fiskl creates corresponding ledger accounts automatically within minutes. The system adapts to your Stripe configuration without requiring manual updates in Fiskl.

:::info
Connecting Stripe as a payment method for invoices is separate from this banking integration. See [Payment Gateways](/integrations/payments/overview.md) for invoice payment setup.
:::

## Common Issues

<details>
  <summary>How do I know which ledger account a transaction will appear in?</summary>

Transactions appear in the ledger account that matches the Stripe payout account currency. For example, if a GBP customer pays a GBP invoice but you only have a USD payout account in Stripe, the transaction converts to USD and appears in your USD ledger account. Fiskl tracks the original currency and exchange rate, so the payment matches to the correct GBP invoice automatically.

When you add a GBP payout account in Stripe later, Fiskl creates a GBP ledger account. Future GBP transactions flow into the GBP payout and appear in the GBP ledger account.
</details>

<details>
  <summary>Transactions not importing</summary>

**Solution:**
1. Verify your Stripe connection is active in **Banking** settings
2. Check that you have permission to access the Stripe account
3. Confirm the start date for imports is correct
4. Try disconnecting and reconnecting your Stripe account

If transactions still don't import, contact support with your Stripe account ID.
</details>

<details>
  <summary>Automatic internal transfers not creating</summary>

**Solution:**
1. Verify both Stripe and your bank account are connected to Fiskl Banking
2. Ensure payouts appear in both your Stripe account and bank account
3. Check that payout amounts match between Stripe and your bank
4. Allow up to 24 hours for automatic matching to occur

Manual matching is available if automatic transfer creation doesn't work.
</details>

<details>
  <summary>Balance warnings or errors</summary>

**Solution:**

Temporary warning icons during initial sync are normal while Fiskl calculates balances. These typically resolve within a few minutes. If warnings persist after 30 minutes, check that your Opening Balance transaction is correct.
</details>

## Related Topics

- [Fiskl Banking Overview](/integrations/banking/overview.md) - Learn about the complete banking feature
- [Chart of Accounts](/accounting/chart-of-accounts) - Understand how ledger accounts work
- [Internal Transfers](/accounting/journal-entries/guides/internal-transfers.md) - Manage transfers between accounts
- [Payment Gateways](/integrations/payments/overview.md) - Set up Stripe for invoice payments