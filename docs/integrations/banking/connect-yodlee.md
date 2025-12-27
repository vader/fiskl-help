---
title: "Connect with Yodlee"
sidebar_position: 2
description: "Connect your bank to Fiskl using Yodlee for automated transaction imports and real-time financial tracking across the United States, Canada, and South Africa."
keywords: ["Yodlee integration", "bank connection Fiskl", "transaction imports", "Fiskl Banking", "US banking"]
slug: /integrations/banking/connecting-yodlee
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
   - Integrations
   - Banking
   - Yodlee
---

This guide explains how to connect your bank account to Fiskl using Yodlee and helps you automate transaction imports for accurate financial tracking.

Yodlee connects your bank accounts securely to Fiskl and imports transactions automatically. The integration supports banks across the United States, Canada, and South Africa. After you connect your account, Fiskl syncs your banking data and updates your transactions daily.

## Why Use Yodlee

Yodlee provides extensive coverage for banks across the United States, Canada, and South Africa. The integration uses bank-grade security to create encrypted connections between your bank and Fiskl. After you connect, Fiskl syncs your banking data automatically so your financial records stay current without manual entry.

You can connect multiple bank accounts from different institutions. Each account syncs independently so you maintain complete visibility across all your financial accounts in one place.

## Connecting Your Bank Account

Before you begin:
- Have your online banking credentials ready
- Ensure you have permission to connect external services (check with your bank if unsure)

**Steps:**

1. **Open Banking**

   In the left sidebar, select **Banking**.

2. **Start the connection**

   Select **Connect bank**.

3. **Choose Yodlee**

   Select **Yodlee** as your provider.

4. **Find your bank**

   Search for your bank by name or browse by region. Select your bank from the results.

5. **Authenticate with your bank**

   Follow your bank's connection process. The steps vary by bank but typically include:
   - Enter your online banking credentials
   - Complete any additional security verification
   - Authorize Fiskl to access your account data

   :::info
   Each bank has its own security requirements. The process should be familiar if you use online banking regularly.
   :::

6. **Select accounts to sync**

   Review the list of connected accounts. Fiskl selects all accounts by default. Deselect any accounts you don't want to sync.

7. **Save your connection**

   Select **Save & Finish**. To connect additional banks, select **Save & link more accounts** instead.

### What Happens Next

After connection:
- Fiskl syncs your transactions daily
- New transactions appear automatically in **Banking**
- You can categorize and match transactions to invoices or expenses
- The system updates your ledger accounts based on transaction data

:::info
The first sync may take up to 12 hours depending on your transaction history. Subsequent syncs are faster.
:::

## Maintaining Your Connection

Check your bank connections regularly in the **Banking** section to ensure they remain active. Select the bank account card to view connection status.

Some banks require periodic re-authentication for security. If your connection expires, you'll see a notification in **Banking**. Select **Reconnect** and follow the authentication steps again to restore the connection.

:::tip
We recommend checking your bank connections at least every 30 days to ensure uninterrupted service.
:::

## Troubleshooting

<details>
  <summary>Connection failed during authentication</summary>

**Common causes:**
- Incorrect credentials - verify your username and password
- Bank security settings - ensure external connections are allowed
- Two-factor authentication timeout - complete the process within the time limit

**Solution:**
1. Verify your credentials by logging into your bank's website directly
2. Check your bank's security settings for third-party access
3. Try the connection again, ensuring you complete all security steps promptly

If the issue persists, contact Fiskl support with details about the error message you received.
</details>

<details>
  <summary>Transactions aren't syncing</summary>

Check your connection status:

1. Go to **Banking**
2. Look for a warning or error message on your bank account card
3. If you see "Connection expired" or similar, select **Reconnect**

If the connection shows as active but transactions don't sync:
- Wait 24 hours for the automatic daily sync
- Select **Refresh** on the bank account card to trigger a manual sync
- Contact Fiskl support if transactions are still missing after 48 hours
</details>

<details>
  <summary>My bank isn't listed</summary>

Yodlee supports most banks in the United States, Canada, and South Africa. If your bank doesn't appear:

1. Search using your bank's full official name
2. Check if your bank is listed under a parent company name
3. Try browsing by region instead of searching

If you still can't find your bank, try [connecting with Salt Edge](/docs/integrations/banking/connecting-saltedge) as an alternative.
</details>

<details>
  <summary>I see a "Consent expired" message</summary>

Some banks require periodic consent renewal for security compliance. This is normal banking security practice.

**Solution:**
1. Go to **Banking**
2. Select **Reconnect** on the affected bank account card
3. Follow the authentication steps to renew your consent
4. Your transactions will resume syncing automatically

Set a calendar reminder to check your connections every 30 days to avoid interruptions.
</details>

## Related Topics

- [Connect with Salt Edge](/docs/integrations/banking/connect-saltedge.md)
- [Manage bank transactions](/docs/accounting/journal-entries/overview.md) - Categorize and reconcile imported transactions
- [Multi-currency accounting](/docs/accounting/journal-entries/guides/multi-currency-transactions.md) - Handle transactions in multiple currencies
- [Reconciliation](/docs/accounting/reconciliation/overview.md) - Reconcile your accounts and verify accuracy
- [Banking overview](/docs/integrations/banking/overview.md) - Learn about Fiskl Banking features