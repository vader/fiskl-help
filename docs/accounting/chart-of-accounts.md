---
title: "Chart of Accounts"
description: "Understand and manage your Fiskl Chart of Accounts. Learn about account types, sub-accounts, creating custom accounts, and organising your finances."
keywords: ["chart of accounts", "COA", "account types", "ledger accounts", "sub-accounts", "accounting", "fiskl"]
sidebar_position: 2
tags:
  - Accounting
  - Chart of Accounts
  - Financial Reports
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This guide explains the Chart of Accounts in Fiskl — what it is, how it's structured, and how to manage it for your business.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## What Is a Chart of Accounts?

The Chart of Accounts (CoA) is the foundation of your accounting in Fiskl. It's the complete list of ledger accounts used to categorise every financial transaction in your business.

Fiskl provides a default set of commonly used accounts to get you started. You can customise this list by adding, editing, or archiving accounts to match your business structure.

To access your Chart of Accounts:

1. Select **Accounting** in the left menu
2. Select **Chart of Accounts**

You can view accounts filtered by type using the tabs at the top, or view the full list together.

## Account Types

Your Chart of Accounts is organised into five account types. Each type groups related ledger accounts and determines how transactions are reported.

### Assets

Assets are resources your business owns that have economic value. They appear on your Balance Sheet.

Examples include:

- Cash and bank accounts
- Accounts receivable (amounts owed to you by clients)
- Inventory
- Equipment and property

Assets are classified by liquidity — how quickly they can be converted to cash. Current assets (such as cash) are more liquid than non-current assets (such as equipment).

### Liabilities

Liabilities are financial obligations your business owes to others. They also appear on your Balance Sheet.

Examples include:

- Bank loans and mortgages
- Accounts payable (amounts you owe to vendors)
- Sales taxes collected but not yet remitted

Liabilities are classified as current (due within a year) or non-current (long-term obligations).

### Equity

Equity represents the net worth of your business — the difference between your assets and liabilities. It appears on your Balance Sheet.

Equity increases through profitable operations or capital contributions. It decreases through losses, dividend payments, or share buybacks.

### Income

Income accounts track revenue earned through your business activities. They appear on your Profit and Loss report.

A credit increases an income account. A debit decreases it.

### Expenses

Expense accounts track the costs of running your business. They also appear on your Profit and Loss report.

A debit increases an expense account. A credit decreases it. Expenses are subtracted from income to calculate your net profit or loss.

## Sub-Accounts

Sub-accounts let you break a parent account into more detailed categories. This gives you finer control over how transactions are grouped without cluttering your top-level account list.

For example, you might create sub-accounts under a parent **Travel Expenses** account for **Flights**, **Accommodation**, and **Meals**.

Sub-accounts roll up into their parent account in reports, so your totals remain clean at the summary level.

## Managing Your Chart of Accounts

### Adding a New Account

1. Select **Accounting** > **Chart of Accounts**
2. Select **Add account**
3. Select a **Parent account** if this is a sub-account
4. Enter the **Account name**
5. Add a **Description** to help identify the account's purpose
6. Select a **Currency** for the account
7. Select an **Account type**
8. Select **Create Account**

### Editing an Account

1. Select **Accounting** > **Chart of Accounts**
2. Find the account you want to edit
3. Select the edit icon
4. Update the relevant fields
5. Select **Save Changes**

:::info
Editing an account name updates it everywhere in Fiskl, including existing transactions and reports.
:::

### Archiving an Account

You cannot delete an account that has transactions linked to it. Instead, you can archive it to hide it from active use.

1. Select **Accounting** > **Chart of Accounts**
2. Find the account you want to archive
3. Select the archive icon

Archived accounts no longer appear in dropdowns when categorising transactions. To view and restore archived accounts, select the **Archived** tab.

## Default Accounts

Fiskl assigns certain ledger accounts as defaults for specific transaction types — for example, the account used for sales income or bank fees. You can review and update these defaults in **Settings** > **Accounting Settings**.

<details>
<summary>Why does account structure matter for reporting?</summary>

The way your Chart of Accounts is structured directly affects how your financial reports look. Reports like the Profit and Loss and Balance Sheet group transactions by account type and sub-type. A well-organised CoA means your reports reflect your business accurately and make it easier to spot trends, prepare tax filings, or work with an accountant.

If accounts are miscategorised — for example, an expense recorded under assets — your Balance Sheet and Profit and Loss will both show incorrect figures.

</details>

## Related Topics

- [Accounting Overview](/accounting/overview) — How accounting works in Fiskl
- [Accounting Settings](/settings/accounting-settings) — Configure default accounts and accounting preferences
- [Journal Entries Overview](/accounting/journal-entries/overview) — Record manual transactions against ledger accounts
- [General Ledger Report](/reporting/general-ledger) — View all transactions by ledger account

- [Trial Balance Report](/docs/reporting/trial-balance.md) — Review account balances across your Chart of Accounts
