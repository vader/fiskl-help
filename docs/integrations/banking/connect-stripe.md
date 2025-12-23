---
title: Connect Stripe
sidebar_position: 1
description: "Simplify banking and automated transactions using the Fiskl-Stripe integration: Enjoy seamless accounting and improved cash flow management."
keywords: ["Stripe integration Fiskl", "payment processing", "invoicing software", "small business payments", "banking", "Fiskl tools"]
slug: /integrations/banking/connecting-stripe
tags:
 - Integrations
 - Banking
 - Stripe
---

Connecting your Stripe account to Fiskl Banking streamlines your financial management, making it a huge time-saver for all users. This integration simplifies the traditionally complex process of reconciling Stripe pay-outs, reducing errors and saving you valuable time. For those handling multi-currency transactions, it’s essential for accurate reconciliation.

## How it Works

When you connect Stripe to Fiskl Banking:

1. Fiskl imports all transactions from your Stripe account(s)
2. We create accurate ledger entries for each transaction, including:
    - Transaction amounts
    - Fees
    - Currency conversion rates
3. Ledger accounts are automatically created and updated
4. You only need to match the single Stripe pay-out to your bank account as an internal transfer

This process eliminates the need to reconcile hundreds of individual transactions, greatly simplifying your accounting workflow.

## Benefits

- **Accurate multi-currency support**: Handles transactions and conversions across different currencies
- **Comprehensive transaction handling**: Manages all Stripe transactions, including:
    - Fiskl invoices paid via Stripe
    - Transactions initiated outside Fiskl
    - Issuing card transactions
    - Fees, refunds, charges, and chargebacks
- **Automatic account creation**: Creates new balance accounts in Fiskl when new pay-out accounts are added in Stripe
- **Multiple account support**: Connect and manage multiple Stripe accounts
- **Cross-platform functionality**: Works seamlessly across iOS, Android, and Web
- **Permission-based access**: Control who can view and manage Stripe transactions

## Connecting Your Stripe Account

1. Go to Banking in the left menu or visit the [Banking page](https://my.fiskl.com/banking).
2. Select "Stripe" from the available options.
3. Configure sync settings:
    - Choose a start date for importing transactions
    - Decide whether to import all transactions from the selected date

:::info[caution]
Avoid selecting `ALL` transactions if possible. Consider using your current financial year's start date. We'll create an Opening Balance ledger transaction as needed. Selecting `ALL` may result in numerous unnecessary ledger entries due to the detailed nature of this feed.
:::

4. Change your categories if required:
    - Choose a category for charges (e.g., "Payment processing fees")
    - Optionally, enable "Create clients" and "Create vendors"

:::info
Enabling "Create vendors" may add many new vendors to your account.
:::

5. Connect to Stripe:
    - Log in to your existing Stripe account or create a new one
6. Verify the connection:
    - Your Stripe accounts will appear automatically in Fiskl
    - You can connect multiple Stripe accounts, including those with multiple currencies

## After Connecting

- The initial download may display temporary warning icons while we calculate the balances
- To view transactions, click "Transactions" on the account card or access the matching ledger account from Fiskl Chart of Accounts

:::info
Connecting Stripe as a payment gateway is a separate process from this banking integration.
:::

Remember to regularly review your Stripe connection to ensure accurate transaction import and categorization.
