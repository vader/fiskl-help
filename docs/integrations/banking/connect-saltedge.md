---
title: Connect with Salt Edge
sidebar_position: 4
description: "Connect your bank to Fiskl using Salt Edge for automated transaction imports and real-time financial tracking across Europe, Asia, and the Middle East."
keywords: ["Salt Edge integration", "bank connection Fiskl", "transaction imports", "OpenBanking", "Fiskl Banking"]
slug: /integrations/banking/connecting-saltedge
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
   - Integrations
   - Banking
   - Salt Edge
---

This guide explains how to connect your bank account to Fiskl using Salt Edge and helps you automate transaction imports for accurate financial tracking.

Salt Edge connects your bank accounts securely to Fiskl and imports transactions automatically. The integration supports banks across Europe, Asia, and the Middle East through OpenBanking standards. After you connect your account, Fiskl syncs your banking data and updates your transactions daily.

## Why Use Salt Edge

Salt Edge provides extensive coverage for banks across Europe, Asia, and the Middle East. The integration uses OpenBanking standards to create secure, encrypted connections between your bank and Fiskl. After you connect, Fiskl syncs your banking data automatically so your financial records stay current without manual entry.

## Checking Bank Coverage

Before connecting, verify that Salt Edge supports your bank.

**Steps:**

1. Go to the [Salt Edge Bank Coverage](https://www.saltedge.com/products/account_information/coverage) page
2. Search for your bank by name or browse by country
3. Confirm your bank appears in the results

## Connecting Your Bank Account

Before you begin:
- Have your online banking credentials ready
- Ensure you have permission to connect external services (check with your bank if unsure)

**Steps:**

1. **Open Banking**

   In the left sidebar, select **Banking**.

2. **Start the connection**

   Select **Connect bank**.

3. **Choose Salt Edge**

   Select **Salt Edge** as your provider.

4. **Find your bank**

   Search for your bank by name or browse by country. Select your bank from the results.

5. **Authenticate with your bank**

   Follow your bank's connection process. The steps vary by bank but typically include:
   - Enter your online banking credentials
   - Complete any additional security verification
   - Authorize Fiskl to access your account data

   :::info
   Each bank has its own security requirements. The process should be familiar if you use online banking regularly.
   :::

6. **Confirm connection**

   After authentication, Fiskl connects your accounts automatically. The initial sync imports your recent transactions.

### What Happens Next

After connection:
- Fiskl syncs your transactions daily
- New transactions appear automatically in **Banking**
- You can categorize and match transactions to invoices or expenses
- The system updates your ledger accounts based on transaction data

:::info
The first sync may take several minutes depending on your transaction history. Subsequent syncs are faster.
:::

## Maintaining Your Connection

Check your bank connections regularly in the **Banking** section to ensure they remain active. Select the bank account card to view connection status.

Some banks require periodic re-authentication for security. If your connection expires, you'll see a notification in **Banking**. Select **Reconnect** and follow the authentication steps again to restore the connection.

:::tip
Keep your bank connection active to ensure accurate, up-to-date financial data in Fiskl.
:::

## Troubleshooting

<details>
  <summary>My bank doesn't appear in the search</summary>

Verify your bank is in the [Salt Edge coverage list](https://www.saltedge.com/products/account_information/coverage). If your bank is listed but doesn't appear in Fiskl, try these steps:

1. Refresh the bank list by closing and reopening the connection dialog
2. Search using your bank's full official name
3. Check if your bank is listed under a parent company name

If you still can't find your bank, contact Fiskl support.
</details>

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

## Related Topics

- [Reconciling accounts](/accounting/reconciliation/overview.md)
- [Banking overview](/integrations/overview.md)