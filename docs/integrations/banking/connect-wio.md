---
title: Connect WIO Bank
sidebar_position: 6
description: Connect your WIO Bank account to Fiskl for automatic transaction imports, zero-touch reconciliation, and seamless multi-currency transfer management.
keywords: ["WIO Bank integration", "Fiskl Banking", "bank transactions", "multi-currency transfers", "automated reconciliation", "OpenBanking"]
slug: /integrations/banking/connecting-wio
tags:
   - Integrations
   - Banking
   - WIO
---

This guide explains how to connect your WIO Bank account to Fiskl and automate your financial management. The integration provides zero-touch reconciliation for multi-currency transfers, eliminating manual reconciliation work and reducing errors.

## How it Works

When you connect WIO Bank to Fiskl, the system automatically imports all transactions from your connected accounts. Fiskl creates ledger entries for each transaction, including transaction amounts and currency conversion rates for multi-currency transfers.

The system automatically creates and updates ledger accounts as needed. For transfers between WIO accounts, Fiskl performs zero-touch reconciliation, matching transactions across accounts including multi-currency transfers. Opening balances are created automatically when you first connect.

This automation eliminates manual reconciliation of account transfers and simplifies your accounting workflow.

## Benefits

The WIO Bank integration provides several advantages:

- **Zero-touch reconciliation**: Automates reconciliation of transfers between WIO accounts, including multi-currency transactions
- **Multi-currency support**: Handles transactions and conversions across different currencies automatically
- **Time savings**: Reduces finance administration time for you and your accountant
- **Improved cash flow management**: Accurately categorizes internal transfers for better financial insights
- **Multiple account support**: Connect and manage multiple WIO Bank accounts from one place
- **Secure data sharing**: Uses OpenBanking standards to ensure safe and efficient connection

## Connect Your WIO Bank Account

Before you begin, ensure you have your WIO Bank account credentials ready.

To connect your WIO Bank account:

1. **Access the Banking feature**

   In the left sidebar, select **Banking**.

2. **Select your bank**

   Select **WIO Bank** from the available banking providers.

3. **Configure your connection**

   Choose your preferred settings:
   - **Consent duration**: Select how long Fiskl can access your account
   - **Start date**: Select the date from which to import transactions

4. **Sign in to WIO Bank**

   Enter your WIO Bank credentials when prompted.

5. **Select accounts to connect**

   Choose which WIO Bank accounts you want to sync with Fiskl. You can select multiple accounts.

6. **Grant access**

   Select **Allow** to authorize the connection.

### What Happens Next

After you grant access, Fiskl begins importing your transaction history from the selected start date. The initial sync may take several minutes depending on your transaction volume. Once complete, your WIO Bank accounts appear in the **Banking** section.

:::info
You can connect multiple WIO Bank accounts by repeating this process for each account.
:::

## Manage Connected Accounts

After connecting your WIO Bank account, you can customize how it appears in Fiskl.

To edit account details:

1. Go to **Banking** in the left sidebar
2. Locate the WIO Bank account you want to edit
3. Select the **Edit** button on the account card
4. Modify the account name for easier identification
5. Select **Save** to apply your changes

Renaming accounts helps you quickly identify them, especially when you have multiple WIO Bank accounts connected.

## Automatic Transaction Categorization

Fiskl automatically categorizes your WIO Bank transactions based on transaction descriptions and patterns. The system learns from your previous categorizations to improve accuracy over time.

You can review and adjust automatic categorizations in the **Banking** section. Select any transaction to change its category or add additional details.

Learn more about [managing bank transactions](/docs/banking/transactions) in Fiskl.

## Maintain Your Connection

Keep your WIO Bank connection active to ensure continuous data sync.

**Check your connection status:**
- Review the connection indicator on your account card in the **Banking** section
- Look for any warning messages about expired consent
- Verify that transactions are syncing regularly

**Renew consent when needed:**

The consent you grant has an expiration date based on the duration you selected during setup. When consent expires, you need to reauthorize Fiskl to access your account. Fiskl notifies you before consent expires.

To renew consent:

1. Go to **Banking**
2. Select the WIO Bank account showing expired consent
3. Select **Reconnect**
4. Follow the authorization steps again

:::tip
Set a reminder to check your WIO Bank connection monthly. This ensures your financial data stays current and reconciliation remains automatic.
:::

## Common Issues

<details>
  <summary>My WIO Bank account won't connect</summary>

**Solution:**

Verify the following:
1. Check that you're using the correct WIO Bank credentials
2. Ensure your WIO Bank account is active and in good standing
3. Verify that you have sufficient permissions on the WIO Bank account
4. Try disconnecting and reconnecting the account

If the issue persists, contact Fiskl support with details about the error message you received.
</details>

<details>
  <summary>Transactions aren't syncing from WIO Bank</summary>

**Solution:**

Check these common causes:
1. Verify your consent hasn't expired in **Banking** > **WIO Bank account** > **Connection status**
2. Check your internet connection
3. Ensure the WIO Bank servers are operational (check WIO Bank status page)
4. Try triggering a manual sync by selecting **Refresh** on the account card

Transactions typically sync within a few hours. If transactions are missing after 24 hours, contact support.
</details>

<details>
  <summary>How do I disconnect my WIO Bank account?</summary>

**Solution:**

To disconnect WIO Bank from Fiskl:
1. Go to **Banking**
2. Select the WIO Bank account you want to disconnect
3. Select **Settings** or the gear icon
4. Select **Disconnect account**
5. Confirm your choice

Note: Disconnecting removes future transaction syncing but doesn't delete historical transactions already imported into Fiskl.
</details>

## Related Topics

- [Manage bank transactions](/docs/banking/transactions) - Categorize and reconcile imported transactions
- [Multi-currency accounting](/docs/accounting/multi-currency) - Handle transactions in multiple currencies
- [Reconciliation](/docs/accounting/reconciliation) - Reconcile your accounts and verify accuracy
- [Banking overview](/docs/banking/overview) - Learn about Fiskl Banking features