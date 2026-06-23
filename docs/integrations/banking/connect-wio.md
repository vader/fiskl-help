---
title: "Connect WIO Bank"
description: "Connect your WIO Bank account to Fiskl for automatic transaction imports, zero-touch reconciliation, and multi-currency transfer management."
keywords: ["WIO Bank", "WIO integration", "Fiskl Banking", "bank transactions", "multi-currency transfers", "automated reconciliation", "OpenBanking"]
sidebar_position: 4
slug: /integrations/banking/connecting-wio
tags:
  - Integrations
  - Banking
  - WIO
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide covers how to connect your WIO Bank account to Fiskl to automate transaction imports and reconciliation, including zero-touch reconciliation for multi-currency transfers.

## How it works

When you connect WIO Bank to Fiskl, transactions from your connected accounts import automatically. Fiskl creates ledger entries for each transaction, including currency conversion rates for multi-currency transfers.

Ledger accounts are created and updated as needed. For transfers between WIO accounts, Fiskl performs zero-touch reconciliation — matching transactions across accounts, including multi-currency transfers. Opening balances are created automatically when you first connect.

## Benefits

- **Zero-touch reconciliation** — Automates reconciliation of transfers between WIO accounts, including multi-currency transactions
- **Multi-currency support** — Handles transactions and conversions across different currencies automatically
- **Time savings** — Reduces finance administration time for you and your accountant
- **Multiple account support** — Connect and manage multiple WIO Bank accounts from one place
- **Secure data sharing** — Uses OpenBanking standards for a safe and efficient connection

## Connect your WIO Bank account

Before you begin, have your WIO Bank credentials ready.

To connect your WIO Bank account:

1. In the left sidebar, select **Banking**.
2. Select **WIO Bank** from the available banking providers.
3. Configure your connection settings:
   - **Consent duration** — Select how long Fiskl can access your account
   - **Start date** — Select the date from which to import transactions
4. Enter your WIO Bank credentials when prompted.
5. Select the WIO Bank accounts you want to sync with Fiskl. You can select multiple accounts.
6. Select **Allow** to authorise the connection.

### What happens next

After you grant access, Fiskl begins importing your transaction history from the selected start date. The initial sync may take several minutes depending on your transaction volume. Once complete, your WIO Bank accounts appear in the **Banking** section.

:::info
You can connect multiple WIO Bank accounts by repeating this process for each account.
:::

## Manage connected accounts

After connecting, you can customise how each account appears in Fiskl.

To edit account details:

1. Go to **Banking** in the left sidebar.
2. Locate the WIO Bank account you want to edit.
3. Select **Edit** on the account card.
4. Update the account name for easier identification.
5. Select **Save** to apply your changes.

Renaming accounts helps you identify them quickly, especially when you have multiple WIO Bank accounts connected.

## Maintain your connection

Keep your WIO Bank connection active to ensure continuous data sync.

To check your connection status, go to **Banking** and review the connection indicator on each account card. Look for warning messages about expired consent and verify that transactions are syncing regularly.

The consent you grant has an expiration date based on the duration you selected during setup. Fiskl notifies you before consent expires.

To renew consent:

1. Go to **Banking**.
2. Select the WIO Bank account showing expired consent.
3. Select **Reconnect**.
4. Follow the authorisation steps again.

:::tip
Check your WIO Bank connection monthly to keep your financial data current and reconciliation automatic.
:::

## Common issues

<details>
<summary>My WIO Bank account won't connect</summary>

Check the following:

1. Confirm you're using the correct WIO Bank credentials.
2. Ensure your WIO Bank account is active and in good standing.
3. Verify you have sufficient permissions on the WIO Bank account.
4. Try disconnecting and reconnecting the account.

If the issue persists, contact Fiskl support with details about the error message you received.

</details>

<details>
<summary>Transactions aren't syncing from WIO Bank</summary>

Check these common causes:

1. Go to **Banking**, select your WIO Bank account, and check **Connection status** to confirm consent hasn't expired.
2. Check your internet connection.
3. Verify that WIO Bank services are operational.
4. Select **Refresh** on the account card to trigger a manual sync.

Transactions typically sync within a few hours. If transactions are still missing after 24 hours, contact Fiskl support.

</details>

<details>
<summary>How do I disconnect my WIO Bank account?</summary>

To disconnect WIO Bank from Fiskl:

1. Go to **Banking**.
2. Select the WIO Bank account you want to disconnect.
3. Select the gear icon to open account settings.
4. Select **Disconnect account**.
5. Confirm your choice.

Disconnecting stops future transaction syncing but does not delete historical transactions already imported into Fiskl.

</details>

## Related topics

- [Banking overview](/integrations/banking/overview) — Learn about Fiskl Banking features and connected accounts
- [Journal entries overview](/accounting/journal-entries/overview) — Categorise and manage imported transactions
- [Reconciliation overview](/accounting/reconciliation/overview) — Reconcile your accounts and verify accuracy
- [Multi-currency transactions](/accounting/journal-entries/guides/multi-currency-transactions) — Handle transactions across different currencies
