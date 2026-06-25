---
title: Multi-Journal Entries
description: Learn how to create multi-journal entries in Fiskl to record
  complex transactions across multiple ledger accounts in a single balanced
  entry.
sidebar_position: 2
---


This guide explains how to create multi-journal entries in Fiskl. Use multi-journal entries when a single transaction touches more than two ledger accounts at once.



## Before You Begin

- Your Chart of Accounts must be set up before creating journal entries. See [Chart of Accounts](/accounting/chart-of-accounts).
- If you're new to debits and credits, expand the **What are debits and credits?** section below before you start.
- If you only need a simple two-line entry, a [manual journal entry](/accounting/journal-entries/guides/manual-transactions) may be all you need.

## What Is a Multi-Journal Entry?

Think of a multi-journal entry as a way to record a single financial event that affects several places in your books at once.

Most everyday transactions are simple — money goes out of one account and into another. But some transactions are more complex. When you run payroll, for example, money leaves your bank account, wages go to employees, and tax liabilities are recorded — all from one event. A multi-journal entry handles all of that in a single, organised record.

Every multi-journal entry must balance: the total on one side must equal the total on the other side. Fiskl won't let you save until it does.

Common uses include:

- Running payroll across wages, tax liabilities, and a bank account
- Splitting a purchase across multiple expense categories
- Recording depreciation across several asset accounts
- Splitting a loan repayment between principal and interest

What are debits and credits?

Every transaction is money moving from one place to another. Debits and credits are how you record both sides of that movement. Every entry needs at least one of each, and the totals must match.

**A real-world example:** Your business pays a $500 electricity bill from your bank account.

- The $500 leaves your bank account → **Credit** Bank Account $500
- The $500 goes towards electricity costs → **Debit** Electricity Expense $500

The $500 debit equals the $500 credit — the entry balances.

It works the same way no matter how many lines an entry has. If a transaction splits across five accounts, all the debits must still add up to the same total as all the credits.

A simple way to remember it:

- **Debit** = where money goes *to*
- **Credit** = where money comes *from*



Multi-journal entries follow standard double-entry bookkeeping rules. Every entry needs at least one debit line and one credit line, and the total must balance to zero before you can save.

## Create a Multi-Journal Entry

1. Go to **Accounting** > **Multi Journal**.
2. Select **New entry**.
3. Enter a name for the journal entry.
4. Enter a **Date** for the transaction.
5. Select **Add internal notes about this journal entry** to add a description (optional but recommended).
6. Add your first line:
  - Select a **Ledger account** from the dropdown.
  - Enter the amount in either the **Debit** or **Credit** column.
  - Select **Client**, **Vendor**, or **Tax** if you want to link the line to a specific client, vendor, or tax rate (optional).
7. Select **Add line** to add the next account.
8. Repeat until all affected accounts are included.
9. Check that the **Difference** indicator at the bottom shows zero.
10. Select the paperclip icon to attach a supporting document (optional).
11. Select **Save**.

After saving, the entry appears in your journal entries list and all affected ledger accounts update straight away. Adding a description to each line — not just the entry header — makes entries easier to understand when reviewing reports or auditing your books later.

## The Balance Indicator

The **Difference** indicator at the bottom of the entry form shows the running gap between total debits and total credits. It updates each time you add or edit a line.

- **Zero** — the entry balances and can be saved
- **Any other value** — the entry is out of balance and cannot be saved

### Add a line to correct the balance

If the difference is not zero, you can add a balancing line in two ways:

**Select the Difference amount** — Fiskl adds a new line automatically with the amount pre-filled. Select the ledger account for that line.

**Select Add line** — A blank line is added. Select the ledger account and enter the remaining amount in the **Debit** or **Credit** column manually.

### Adjust an exchange rate to correct the balance

On multi-currency entries, small differences can result from rounding in the automatic exchange rate conversion. Fiskl includes an auto-adjust option that recalculates the exchange rate on a line to bring the entry to zero.

To use auto-adjust:

1. Select **Auto adjust FX** on the relevant line.
2. Fiskl updates the exchange rate so the entry balances.

To set the rate manually instead:

1. Select the exchange rate field on the relevant line.
2. Enter the rate that matches your records.

Common causes of an out-of-balance entry:

- An amount entered in the wrong column (debit instead of credit, or vice versa)
- A typo in a line amount
- A rounding difference on a multi-currency conversion

## Multi-Currency Entries

If your business uses more than one currency, each line in a multi-journal entry can use a different currency. Fiskl converts each amount to your base currency using the exchange rate on the transaction date.

The currency on bank accounts, asset accounts, and liability accounts is fixed — it uses whichever currency is set on that account. On expense and income accounts, you can choose a different currency for each line.

To enter a foreign-currency line:

1. Add a line and select the ledger account.
2. Select the currency from the currency dropdown on that line.
3. Enter the amount in the foreign currency.
4. Select out of the field — Fiskl shows the converted base currency amount automatically.

You can override the exchange rate on any line if the default doesn't match your records. The balance check always uses base currency amounts across all lines.

For more detail, see [Multi-currency Transactions](/accounting/journal-entries/guides/multi-currency-transactions).

## Edit or Delete a Multi-Journal Entry

### Edit an entry

1. Go to **Accounting** > **Journal Entries**.
2. Find the entry and select it to open it.
3. Make your changes.
4. Select **Save**.

All affected ledger accounts update immediately after saving.

### Delete an entry

1. Open the entry you want to delete.
2. Select **Delete**.
3. Confirm the deletion.

:::warning
Deleting a journal entry cannot be undone. All affected ledger account balances will be reversed. If the entry falls within a closed period, check your reports before deleting.
:::

For deeper insight into how your journal entries are affecting your finances, select the **Ask Fi** icon in the top right of the screen. Fi can answer questions about your accounts, balances, and transaction history.

## Common Issues

The entry won't save — "Entry is not balanced"

The total debits and total credits must be equal before you can save. Check the **Difference** indicator at the bottom of the form.

Common causes:

- An amount was entered in the wrong column (debit instead of credit, or vice versa)
- A line amount contains a typo or small rounding difference
- A multi-currency line has a slightly different base currency conversion than expected — try entering the base currency amount directly on that line

Adjust your lines until the difference shows zero, then save.



A ledger account isn't appearing in the dropdown

Only active ledger accounts appear in the account dropdown. If an account is missing:

1. Go to **Accounting** > **Chart of Accounts**.
2. Find the account and check whether it is marked as archived.
3. Select the **Archived** tab, select the account, then select the unarchive button on the account line.
4. Return to your journal entry — the account should now appear.



The entry saved but I can't see it in my reports

Reports use the **Date** you entered on the journal entry — not the date you saved it. Check that the date on your entry falls within the report period you're viewing. Adjust the report date range if needed.



The exchange rate on a multi-currency line looks wrong

Fiskl uses the exchange rate on the transaction date by default. If the rate shown doesn't match your records, you can override it by entering the rate directly on the line. This is useful when posting historic entries or using a rate agreed with your bank.



## Related Topics

- [Journal Entries Overview](/accounting/journal-entries/overview) — Introduction to journal entries in Fiskl
- [Manual Transactions](/accounting/journal-entries/guides/manual-transactions) — Create simple two-line manual journal entries
- [Multi-currency Transactions](/accounting/journal-entries/guides/multi-currency-transactions) — Handle foreign currency in journal entries
- [Chart of Accounts](/accounting/chart-of-accounts) — Manage your ledger accounts
- [Accounting Settings](/settings/accounting-settings) — Configure your accounting preferences

