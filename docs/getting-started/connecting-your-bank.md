---
title: "Connecting Your Bank"
description: "Step-by-step guide to connecting your bank accounts to Fiskl using automated banking connections, Stripe integration, or manual imports."
keywords: ["banking connection", "connect bank", "bank integration", "Salt Edge", "Yodlee", "Wio Bank", "Stripe", "bank import", "transaction sync"]
sidebar_position: 3
---

This guide explains how to connect your bank accounts to Fiskl and helps you select the best connection method for your region and banking provider.

## Why Connect Your Bank?

Connecting your bank is the most critical step for accountants and business owners using Fiskl. Automated banking connections transform your financial management by eliminating manual data entry and ensuring accuracy.

**Key benefits:**
- Transactions import automatically every day
- Real-time visibility into your cash position
- Automated categorization saves hours of bookkeeping
- Multi-currency transactions handled seamlessly
- Secure connections using Open Banking protocols

Once connected, Fiskl handles the tedious work while you focus on running your business.

## Select Your Connection Method

Fiskl offers three ways to connect your financial data. Select the method that best fits your needs and comfort level.

### Option 1: Automated Banking Connections (Recommended)

Automated connections sync transactions directly from your bank to Fiskl using secure Open Banking protocols.

**Best for:**
- Daily transaction imports
- Multiple bank accounts
- International businesses with accounts in different countries
- Users who want zero-touch bookkeeping

**Available providers:**
- **Salt Edge** - Europe, Asia, Middle East banks
- **Yodlee** - USA, Canada, South Africa banks
- **Wio Bank** - Direct UAE banking integration

### Option 2: Stripe Integration

Connect your Stripe account to automatically import payment transactions, payouts, and fees.

**Best for:**
- Businesses accepting online payments
- E-commerce platforms
- SaaS companies
- Freelancers using Stripe for invoicing

Stripe is treated as a banking feed in Fiskl and syncs automatically once connected.

### Option 3: Manual Bank Imports

Upload bank statements manually in CSV, OFX, or QIF formats.

**Best for:**
- Banks not supported by automated providers
- One-time historical data imports
- Users who prefer manual control
- Quarterly reconciliation workflows

## Step-by-Step: Connect Your Bank

### Find the Right Provider for Your Region

Select the provider that covers your bank's location:

**Middle East (UAE, Saudi Arabia, etc.):**
- **Wio Bank** - Direct integration for Wio business accounts
- **Salt Edge** - Most traditional banks in the region

**North America (USA, Canada):**
- **Yodlee** - Comprehensive coverage of US and Canadian banks
- **Stripe** - If you process payments through Stripe

**Europe:**
- **Salt Edge** - Open Banking connections for most European banks
- **Stripe** - Payment processing integration

**Asia and Other Regions:**
- **Salt Edge** - Growing coverage across Asia, Africa, and Latin America
- Check the provider selection screen for your specific bank

**Global Payment Processing:**
- **Stripe** - Works worldwide for payment data

### Connect Using Automated Banking

1. Go to **Banking** in the left navigation
2. Select **Connect Bank**
3. Select your provider (Salt Edge, Yodlee, or Wio Bank)
4. Search for your bank by name
5. Select your bank from the results
6. Follow the secure authentication process on your bank's website
7. Select which accounts to connect
8. Set your sync start date (we recommend 90 days of history)

Your transactions begin syncing immediately. Initial sync takes a few minutes depending on transaction volume.

:::tip
If you operate in multiple regions, connect accounts from different providers in the same Fiskl company. For example, use Yodlee for US accounts and Salt Edge for UK accounts.
:::

**Detailed provider guides:**
- [Connect via Salt Edge](/integrations/banking/connect-saltedge.md)
- [Connect via Yodlee](/integrations/banking/connect-yodlee.md)
- [Connect Wio Bank](/integrations/banking/connect-wio.md)

### Connect Stripe

Stripe integration automatically imports payment data, fees, and payouts.

1. Go to **Integrations** > **Payments**
2. Select **Stripe**
3. Select **Connect Stripe Account**
4. Authorize Fiskl to access your Stripe data
5. Select which Stripe accounts to sync (if you have multiple)

Stripe data syncs daily and appears in your **Banking** tab alongside bank transactions.

**Learn more:** [Connect Stripe](/integrations/banking/connect-stripe.md)

### Manual Bank Statement Import

Upload bank statements when automated connections aren't available.

1. Download your bank statement in CSV, OFX, or QIF format from your bank
2. Go to **Banking** in Fiskl
3. Select **Import Transactions**
4. Select your file format
5. Upload your statement file
6. Map columns (for CSV files) to match Fiskl's format
7. Review and confirm the import

Imported transactions appear in your **Banking** tab for categorization and reconciliation.

:::warning
Manual imports require downloading statements regularly to keep your books current. Automated connections eliminate this manual step and provide daily updates.
:::

## What Happens After Connecting?

Once your bank is connected, transactions flow into Fiskl automatically:

1. **Daily Sync**: New transactions appear in your **Banking** tab each day
2. **Automatic Matching**: Fiskl suggests matches to existing invoices and expenses
3. **Smart Categorization**: The system learns your preferences and suggests ledger accounts
4. **Ready for Reconciliation**: Review and confirm transactions to update your books

Your Chart of Accounts and financial reports update in real time as you categorize transactions.

## Managing Your Connections

### View Connected Accounts

Go to **Banking** > **Accounts** to see all connected accounts. Each account displays:
- Current balance
- Last sync date and time
- Connection status
- Number of pending transactions

### Reconnect Accounts

Banking connections occasionally require reauthorization for security. If a connection expires:

1. Go to **Banking** > **Accounts**
2. Find the account showing **Connection Required**
3. Select **Reconnect**
4. Complete the authentication process

### Disconnect Accounts

To remove a banking connection:

1. Go to **Banking** > **Accounts**
2. Select the account to disconnect
3. Select **Disconnect**
4. Confirm the action

Historical transactions remain in Fiskl. Only future syncing stops.

## Troubleshooting Common Issues

### Bank Not Found in Provider List

If your bank doesn't appear in the search results:

1. Try searching with alternate names or abbreviations
2. Select a different provider (Salt Edge vs. Yodlee)
3. Use manual import as an alternative
4. Contact support to request adding your bank

### Connection Fails During Authentication

Common causes and solutions:

- **Incorrect credentials**: Verify your bank username and password
- **Two-factor authentication**: Complete any security challenges from your bank
- **Bank maintenance**: Try again in a few hours
- **Unsupported account type**: Some business account types require manual setup

### Transactions Not Syncing

If transactions stop appearing:

1. Check connection status in **Banking** > **Accounts**
2. Select **Reconnect** if status shows an error
3. Verify your bank account is active and not locked
4. Check that you haven't reached transaction limits (rare)

## Security and Privacy

Fiskl uses industry-standard Open Banking protocols for all automated connections.

**Key security features:**
- Fiskl never stores your bank login credentials
- Read-only access (Fiskl cannot initiate transfers)
- Bank-grade encryption for all data transmission
- Connections use OAuth tokens that can be revoked anytime
- Regular security audits and compliance checks

Your bank credentials remain private and secure at all times.

## Next Steps

After connecting your bank accounts:

1. **Review imported transactions** in the **Banking** tab
2. **Categorize transactions** by assigning them to ledger accounts
3. **Match transactions** to existing invoices and expenses
4. **Reconcile accounts** to ensure accuracy
5. **Generate reports** to see your updated financial position

:::tip
Set aside 15-30 minutes weekly to review and categorize new transactions. This routine keeps your books current and makes month-end closing effortless.
:::

## Need More Help?

**Explore detailed provider guides:** [Banking Connections Overview](/integrations/banking/overview.md)

**Learn about reconciliation:** [Reconciliation Overview](/accounting/reconciliation/overview.md)

**Import historical data:** [Importing Data](/getting-started/importing-data.md)

**Contact support:** [Get Support](/support/overview.md)