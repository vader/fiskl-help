---
title: Opening Balances
description: Learn what opening balances are in Fiskl, when and why to create
  them, how to add them to your ledger accounts, and how to verify they balance
  correctly.
sidebar_position: 5
---


This guide explains what opening balances are, why they matter, and how to create and verify them in Fiskl.



## What Are Opening Balances?

An opening balance is the starting amount in a ledger account at the beginning of a financial period. It forms the foundation for recording all financial activity during that period — sales, purchases, expenses, and payments.

Opening balances serve several important purposes:

- Ensuring your account balances are correct from day one
- Maintaining continuity when starting a new accounting period
- Preparing accurate financial statements
- Supporting compliance with accounting standards

**Opening balances for banking ledger accounts**

When you import transactions for the current financial year, they may not add up to your actual bank balance. Your bank balance includes every transaction since the account was created, not just the imported ones.

An opening balance represents all activity before your imported data. This ensures your ledger matches your bank balance and confirms that all transactions are accurately recorded.

:::info
For connected bank accounts, Fiskl automatically adds the opening balance as a transaction. You do not need to create one manually.
:::

## Before You Begin

Before creating opening balances, confirm the following:

- You have access to your previous accounting records or bank statements
- You know the date of your earliest imported transaction
- You have identified which ledger accounts need opening balances

## Creating an Opening Balance

The steps differ slightly depending on whether the account is new or already has transactions.

**New account with no transactions**

If your bank account is not connected, use this when setting up a new ledger account that needs a starting balance:

1. In the left menu, select **Accounting** > **Transactions**
2. Select the account from the **Select account** dropdown
3. Select **+ Debit** or **- Credit** depending on the sign of your opening balance
4. In the **Name** field, enter "Opening Balance"
5. Enter the opening balance amount
6. Select **Opening Balance** as the category
7. Set the date to the start of your financial period
8. Select **Save**

The account balance shown at the top of the screen updates immediately to reflect the amount entered.

**Existing account with transactions**

Use this when your account already has transactions recorded, for example when you are switching from a previous accounting system. The opening balance should reflect the closing balance from your previous system. Alternatively, use the balance on your last bank statement before your earliest transaction in Fiskl:

1. In the left menu, select **Accounting** > **Transactions**
2. Select the account from the **Select account** dropdown
3. Find your earliest existing transaction and note its date
4. Select **+ Debit** or **- Credit** depending on the sign of your opening balance
5. In the **Name** field, enter "Opening Balance"
6. Enter the opening balance amount
7. Select **Opening Balance** as the category
8. Set the date to one day before your earliest transaction date
9. Select **Save**

:::tip
If you are migrating from another accounting system, enter opening balances for every account before recording any new transactions. This keeps your records consistent from the start.
:::

## Viewing Opening Balances

You can view opening balance transactions in several places:

**In a specific ledger account:** Go to the account and filter transactions by the **Opening Balance** category.

**Across all accounts:** In the left menu, select **Accounting** > **Transactions** and select the **Opening Balance** ledger account to see all entries together.

**In reports:** Opening balances appear in the Trial Balance, Transactions by Account, and General Ledger reports.

## Opening Balances — Migrating from Another Accounting System

When switching accounting software, you need to replicate your closing position from the old system as opening balances in Fiskl.

**How to Do It**

1. Export the **Trial Balance** from your previous system (for example, Xero)
2. In Fiskl, enter each account's **opening balance** to match the **closing balance** from the old system
3. Once all balances are entered correctly, the **Opening Balances ledger account** in Fiskl should show **zero** — confirming the entries are balanced

If you are unsure which accounts need opening balances or why your Trial Balance isn't zeroing out, select **Ask Fi** in the top right of the screen to ask for guidance specific to your accounts.

:::caution
If the Opening Balance account does not show zero, review each entry for missing or incorrect amounts. An unbalanced opening can affect every report going forward.
:::

## Common Issues

My opening balance does not match my bank statement

This usually means the date or amount is incorrect. Check the following:

1. Confirm the opening balance date is set to one day before your earliest imported transaction
2. Check your bank statement for the balance on that date
3. Ensure no duplicate transactions exist around the cutover date
4. If the discrepancy remains, review the transaction history in your bank's records and adjust the opening balance amount accordingly



The Opening Balance account does not show zero after migration

Each debit entry in your opening balances must have a matching credit entry. A non-zero balance means at least one account is missing or incorrectly entered.

1. Go to **Reporting** > **Trial Balance** and identify accounts with unexpected balances
2. Cross-reference each balance against your records from the previous system
3. Add or correct opening balance entries until the Opening Balance account reaches zero



I cannot find the Opening Balance category when adding a transaction

The **Opening Balance** category is only available when you are adding a transaction directly inside a ledger account. Make sure you are in **Accounting** > **Transactions**, have selected a specific account, and are using the **+ Debit** or **- Credit** button to create the transaction.



## Related Topics

- [Chart of Accounts](/accounting/chart-of-accounts) — View and manage your ledger accounts
- [Journal Entries Overview](/accounting/journal-entries/overview) — Learn how journal entries work in Fiskl
- [Trial Balance](/core-features/accounting/reports/trial-balance) — Verify that your accounts are balanced
- [General Ledger](/reporting/general-ledger) — Review all transactions across your accounts
- [Transactions by Account](/reporting/transactions-by-account) — View transactions filtered by ledger account

