---
title: "Internal Transfers"
description: "Learn how to record internal transfers between your business accounts in Fiskl, including same-currency and multi-currency transfers."
keywords: ["internal transfer", "transfer between accounts", "multi-currency transfer", "accounting", "chart of accounts", "match transactions"]
sidebar_position: 5
tags:
  - Accounting
  - Transactions
  - Banking
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This guide explains how to record internal transfers between your business accounts in Fiskl. Accurate transfer records keep your account balances up to date and distinguish fund movements from income or expenses.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before You Begin

- Your business accounts must be set up in the [Chart of Accounts](/accounting/chart-of-accounts) before you can record transfers between them
- Both transactions must exist in Fiskl — either imported via a connected bank feed or entered manually
- Both transactions must be categorised as **Uncategorised Income** or **Uncategorised Expense** to be eligible for matching

## What Are Internal Transfers?

An internal transfer is the movement of funds between two of your own business accounts — for example, from a current account to a savings account, or between accounts held in different currencies.

There are two aspects to every internal transfer:

- **Business action** — the actual movement of funds, carried out through your bank or financial institution
- **Accounting record** — the entry in Fiskl that reflects that movement and keeps your books accurate

Fiskl helps you with the accounting record. If you have bank feeds connected, Fiskl can automatically match the two sides of a transfer. If no automatic match is found, you can record the transfer manually through the Chart of Accounts.

## Why Record Internal Transfers?

Recording internal transfers correctly ensures your financial records accurately reflect how money moves within your business. Proper records help you:

- Distinguish fund movements from income or expenses
- Maintain a clear audit trail
- Keep ledger account balances up to date across all accounts
- Track cross-currency transfers accurately

:::caution
Record your internal transfers promptly. This is especially important if you make frequent transfers or transfers in different currencies, where the connection between two transactions may not be obvious. Unrecorded transfers can create "ghost" transactions that cause discrepancies between your Fiskl balances and your actual bank statements.
:::

Common reasons businesses use internal transfers include covering operational expenses, paying salaries, purchasing inventory, managing multiple currencies, and maintaining target balances across accounts.

## How Fiskl Matches Transactions

Fiskl searches for potential transfer matches based on the following priority order:

1. Transactions on the same day with the same amount
2. Transactions on the same day with amounts that match closely after currency conversion
3. Transactions within a few days of each other where amounts match or are close

Only transactions categorised as **Uncategorised Income** or **Uncategorised Expense** are eligible for matching.

:::info
If Fiskl cannot find a match for a transfer from account A to account B, try switching the direction — open account B and look for a match to account A. This can happen when a bank takes several days to process a transfer, making the date gap appear too large from one side but recognisable from the other.
:::

:::tip
Not sure why a transfer isn't matching? Ask Fi — select **Fi** in the top right of the screen and describe the accounts and dates involved. Fi can help you identify why a match may not be appearing and suggest next steps.
:::

## Recording an Internal Transfer

### Same-Currency Transfer

To record a transfer between two accounts in the same currency:

1. Go to **Accounting** > **Chart of Accounts**
2. Select the bank account you sent money from or received money into
3. Select the relevant transaction
4. Select **Internal Transfer**
5. Select the matching transaction from the counterpart bank account
6. Select **Save**

The transfer will appear in both the sending and receiving accounts once confirmed. Check both accounts to verify the amount shows as a debit in one and a credit in the other.

### Multi-Currency Transfer

The process for recording a multi-currency transfer is the same as a [same-currency transfer](#same-currency-transfer). When the matched transactions are in different currencies, Fiskl displays the exchange rate your bank applied to the transfer. The transfer appears in both accounts showing the original currency amount alongside the base currency equivalent.

## Common Issues

<details>
<summary>No matching transaction is suggested</summary>

This usually means the two transactions are too far apart in date or amount for Fiskl to recognise them as a pair.

Try these steps:

1. Check that both transactions are categorised as **Uncategorised Income** or **Uncategorised Expense** — transactions in other categories are not eligible for matching
2. Try matching from the opposite account — open the receiving account and match from there instead
3. If the transfer took several days to process, look for the counterpart transaction a few days either side of the expected date

</details>

<details>
<summary>The wrong exchange rate is showing on a multi-currency transfer</summary>

Fiskl displays the exchange rate implied by the two transaction amounts. If this differs from your bank's rate, check that you have selected the correct matching transaction. Different transactions on the same day may have different amounts due to bank fees or rounding. Select the transaction that most closely matches the amount your bank transferred.

</details>

## Related Topics

- [Chart of Accounts](/accounting/chart-of-accounts) — View and manage your ledger accounts
- [Match and Split Transactions](/accounting/journal-entries/guides/match-and-split-transactions) — Other ways to categorise and reconcile transactions
- [Multi-Currency Transactions](/accounting/journal-entries/guides/multi-currency-transactions) — How Fiskl handles foreign currency amounts
- [Bank Account Reconciliation](/accounting/reconciliation/guides/bank-account-reconciliation) — Reconcile your accounts after recording transfers
