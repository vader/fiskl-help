---
title: Connect with Yodlee
description: Connect your bank to Fiskl using Yodlee for automated transaction
  imports across the United States, Canada, and South Africa.
sidebar_position: 1
---
This guide explains how to connect your bank accounts to Fiskl using Yodlee for automated transaction imports.

Yodlee supports banks across the United States, Canada, and South Africa. After you connect, Fiskl syncs your banking data daily.

## Before You Begin

- Have your online banking credentials ready
- Confirm your bank is in a supported region (United States, Canada, or South Africa)
- Ensure your bank allows third-party connections — check your bank's security settings if unsure

## Connect Your Bank Account

1. In the left sidebar, select **Banking**
2. Select **Connect bank**
3. Select **Yodlee** as your provider
4. Search for your bank by name or browse by region, then select it from the results
5. Follow your bank's authentication process — this typically includes entering your online banking credentials and completing any security verification your bank requires
6. Review the list of accounts returned. All accounts are selected by default — deselect any you don't want to sync
7. Select **Save & Finish** to complete the setup, or select **Save & link more accounts** to add another bank

:::info
The first sync may take up to 12 hours depending on your transaction history. Subsequent daily syncs are faster.
:::

### What Happens After Connecting

- New transactions appear automatically — select a bank account card in **Banking** to view them, or find them in your **Chart of Accounts**
- Fiskl automatically matches transactions to existing invoices and expenses where possible
- You can review and categorize any unmatched transactions manually

You can connect multiple accounts from different institutions. Each account syncs independently.

## Maintain Your Connection

Some banks require periodic re-authentication for security. If your connection expires, a notification appears in **Banking**. Select **Reconnect** on the affected account card and complete the authentication steps to restore the connection.

:::tip
Check your bank connections every 30 days to avoid interruptions to your transaction sync.
:::

## Common Issues

Connection failed during authentication

This is usually caused by incorrect credentials, a bank security setting blocking third-party access, or a two-factor authentication timeout.

1. Log into your bank's website directly to verify your credentials are correct
2. Check your bank's security settings for third-party or external access permissions
3. Retry the connection and complete all security steps promptly without navigating away

If the issue persists, contact Fiskl support with the error message you received.



Transactions aren't syncing

1. Go to **Banking** and check the status on your bank account card
2. If you see a "Connection expired" or similar message, select **Reconnect**
3. If the connection shows as active, wait 24 hours for the next automatic sync
4. Select **Refresh** on the account card to trigger a manual sync

If transactions are still missing after 48 hours, contact Fiskl support.



My bank isn't listed

Yodlee covers most banks in the United States, Canada, and South Africa. If your bank doesn't appear in search results:

1. Search using your bank's full official name
2. Try searching under a parent company name if your bank is part of a larger group
3. Browse by region instead of searching

If you still can't find your bank, [Salt Edge](/integrations/banking/connecting-saltedge) may cover it as an alternative provider.



I see a "Consent expired" message

Some banks require periodic consent renewal as part of their security compliance. This is expected behaviour.

1. Go to **Banking**
2. Select **Reconnect** on the affected account card
3. Complete the authentication steps to renew consent

Your transactions will resume syncing automatically after reconnection.



## Related Topics

- [Banking overview](/integrations/banking/overview) — Learn about Fiskl Banking features and supported providers
- [Connect with Salt Edge](/integrations/banking/connecting-saltedge) — Alternative banking provider with broader international coverage
- [Account reconciliation](/accounting/reconciliation/overview) — Reconcile imported transactions against your records
- [Journal entry guides](/accounting/journal-entries/guides/overview) — Categorize and manage transactions in your ledger

