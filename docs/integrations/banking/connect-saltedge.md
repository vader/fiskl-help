---
title: "Connect with Salt Edge"
description: "Connect your bank to Fiskl using Salt Edge for automated transaction imports and real-time financial tracking across Europe, Asia, and the Middle East."
keywords: ["Salt Edge", "bank connection", "transaction imports", "OpenBanking", "Fiskl Banking"]
sidebar_position: 2
slug: /integrations/banking/connecting-saltedge
tags:
  - Integrations
  - Banking
  - Salt Edge
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to connect your bank to Fiskl using Salt Edge for automated transaction imports. Salt Edge covers around 5,000 banks across 45 countries in Europe, Asia, and the Middle East, through OpenBanking standards.

## Before You Begin

- Confirm your bank is covered by Salt Edge using the [Salt Edge bank coverage checker](https://www.saltedge.com/products/account_information/coverage).
- Have your online banking credentials ready.
- Ensure your bank allows connections to third-party services.

## Connecting Your Bank Account

1. In the left sidebar, select **Banking**.
2. Select **Connect bank**.
3. Select **Salt Edge** as your provider.
4. Search for your bank by name or browse by country, then select it from the results.
5. Follow your bank's authentication steps. These typically include entering your online banking credentials, completing any security verification, and authorising Fiskl to access your account data.
6. After authentication, Fiskl connects your accounts and imports your recent transactions.

:::info
Each bank has its own security requirements. The process mirrors your normal online banking login, including any two-factor authentication your bank uses.
:::

### What Happens After Connecting

- Fiskl syncs your transactions daily.
- New transactions appear in the transactions card in **Banking** and in your **Chart of Accounts**.
- Fiskl automatically categorises and matches transactions to invoices or expenses.
- The initial sync may take several minutes depending on your transaction history.

## Maintaining Your Connection

Some banks require periodic re-authentication for security. If your connection expires, a notification appears in **Banking**. Select **Reconnect** and complete the authentication steps again to restore the connection.

:::tip
Check your bank connection status regularly in **Banking** to keep your financial data current.
:::

## Common Issues

<details>
<summary>My bank doesn't appear in the search</summary>

Confirm your bank is listed in the [Salt Edge coverage checker](https://www.saltedge.com/products/account_information/coverage). If it appears in Salt Edge's list but not in Fiskl:

1. Close and reopen the connection dialog to refresh the bank list.
2. Search using your bank's full official name.
3. Check whether your bank is listed under a parent company name.

If you still can't find your bank, contact Fiskl support.

</details>

<details>
<summary>Connection failed during authentication</summary>

Common causes include incorrect credentials, bank security settings blocking third-party access, or a two-factor authentication timeout.

1. Log into your bank's website directly to verify your credentials.
2. Check your bank's security settings to confirm external connections are allowed.
3. Retry the connection and complete all security steps promptly before any timeout.

</details>

<details>
<summary>Transactions aren't syncing</summary>

1. Go to **Banking** and check your bank account card for a warning or error.
2. If you see "Connection expired" or similar, select **Reconnect**.
3. If the connection shows as active, wait 24 hours for the automatic daily sync.
4. Select **Refresh** on the bank account card to trigger a manual sync.

Contact Fiskl support if transactions are still missing after 48 hours.

</details>

## Related Topics

- [Banking overview](/integrations/banking/overview) — View and manage all your connected bank accounts
- [Connect with Yodlee](/integrations/banking/connect-yodlee) — Alternative banking connection for supported regions
- [Account reconciliation](/accounting/reconciliation/overview) — Match imported transactions against your records
