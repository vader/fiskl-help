---
title: "Journal Entries"
description: "Learn how journal entries work in Fiskl, how transactions are recorded automatically, and when to create or edit them manually."
keywords: ["journal entries", "account transactions", "double-entry accounting", "multi-currency", "opening balances", "ledger"]
sidebar_position: 1
tags:
  - Accounting
  - Journal entries
  - Financial reports
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This guide explains how journal entries work in Fiskl and how all financial transactions are recorded and managed in your accounting system.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## What are journal entries?

Journal entries — also called account transactions — are the foundation of your accounting system. Every financial event in Fiskl is recorded as a journal entry in one or more ledger accounts.

You can think of the [Chart of Accounts](/accounting/chart-of-accounts) as your folder structure, and journal entries as the individual transactions filed within it.

## How Fiskl handles journal entries

Fiskl uses double-entry accounting, so every transaction affects at least two ledger accounts. Most journal entries are created automatically when you record invoices, expenses, or bank transactions.

<details>
<summary>Key capabilities</summary>

- **Multi-currency support**: Full multi-currency support with cross-currency matching, splitting, internal transfers, and multi-currency reporting
- **Automatic creation**: Most journal entries are created automatically when you record transactions such as sales, purchases, or bank transfers. Accounts receivable is managed automatically for invoices and payments. Banking feeds and imports generate their respective journal entries
- **Real-time balances**: All reports and balances are generated in real time, so your financial data is always current
- **Mobile access**: You can view and manage journal entries from both the web and mobile app
- **Accounting method flexibility**: You can switch between cash and accrual accounting without affecting the underlying data

</details>

## Types of journal entries

Fiskl supports several types of journal entries to cover all your accounting needs.

| Type | Description |
| --- | --- |
| Standard | Regular income and expense transactions |
| [Multi-journal entries](/accounting/journal-entries/multi-journal-entries) | Create several entries across multiple accounts in one transaction |
| Split transactions | A single transaction that affects multiple accounts |
| Matched transactions | Reconcile bank transactions with your existing records |
| Internal transfers | Move money between your own ledger accounts |
| Multi-currency | Transactions involving more than one currency |
| Opening balances | Set up your initial account balances when migrating to Fiskl |

## Creating and managing journal entries

While Fiskl automates most journal entries, you may need to create or edit them manually — for example, to record adjustments, opening balances, or transactions not captured by a feed.

For step-by-step instructions, see the [journal entry guides](/accounting/journal-entries/guides/overview).

## Viewing journal entries

You can view transactions within each individual ledger account. This is useful when reviewing or making adjustments at the account level.

For a broader view across all accounts, use the [Transactions by Account](/reporting/transactions-by-account) report. For financial summaries, use the [Balance Sheet](/reporting/balance-sheet) or [Profit and Loss](/reporting/profit-and-loss) reports.

:::info
Setting a report to **Detailed** view lets you drill down to transaction level.
:::

## Debit and credit reference

This table shows how common transactions are recorded across your ledger accounts.

| Transaction | Account | Debit | Credit |
| --- | --- | --- | --- |
| Sales invoice raised | Accounts Receivable | ✓ | |
| Sales invoice raised | Income | | ✓ |
| Payment received from client | Bank | ✓ | |
| Payment received from client | Accounts Receivable | | ✓ |
| Expense recorded | Expense account | ✓ | |
| Expense recorded | Accounts Payable | | ✓ |
| Vendor payment made | Accounts Payable | ✓ | |
| Vendor payment made | Bank | | ✓ |
| Internal transfer out | Destination bank account | ✓ | |
| Internal transfer out | Source bank account | | ✓ |

## Related topics

- [Chart of Accounts](/accounting/chart-of-accounts) — Set up and manage your ledger account structure
- [Multi-journal entries](/accounting/journal-entries/multi-journal-entries) — Create complex entries across multiple accounts
- [Journal entry guides](/accounting/journal-entries/guides/overview) — Step-by-step instructions for specific transaction types
- [Transactions by Account](/reporting/transactions-by-account) — View all transactions across your Chart of Accounts
- [Balance Sheet](/reporting/balance-sheet) — Review your assets, liabilities, and equity
- [Profit and Loss](/reporting/profit-and-loss) — Review income and expenses over a period
