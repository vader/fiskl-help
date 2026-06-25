---
title: Managing Multi-Currency Transactions
description: Learn how to record and manage multi-currency transactions in
  Fiskl, track exchange rates, and maintain accurate financial records across
  currencies.
sidebar_position: 1
---


This guide explains how to record and manage multi-currency transactions in Fiskl. Use it when you need to track payments or receipts in a currency other than your base currency.



## Before you begin

- To use dedicated foreign currency ledger accounts, set them up first in your [Chart of Accounts](/accounting/chart-of-accounts).
- Fiskl fetches live exchange rates automatically. You can view, add, and edit custom exchange rates in [Currency Management](/settings/currency-management).

## Why record in the original currency?

Recording transactions in their original currency gives you more accurate books. It lets you track the real amount paid or received, monitor exchange rate changes over time, and meet tax reporting requirements across different countries.

**Example:** You pay a hotel bill of €1,500 on a USD card. Your bank charges $1,789.35. In Fiskl, you record the €1,500 as the transaction amount and enter $1,789.35 as the base currency equivalent. Both amounts are stored, giving you a complete record.

## Recording a multi-currency transaction

Fiskl offers two methods depending on how you manage your accounts.

### Method 1: Record in a different currency

Use this method when the transaction goes through a base currency ledger account but the original amount is in a foreign currency.

1. Go to the relevant cash or cash-equivalent ledger account.
2. Select **+Debit** (income) or **+Credit** (expense).
3. Enter the transaction details.
4. Select **Record in a different currency**.
5. Select the currency from the dropdown. Fiskl automatically enters the amount in that foreign currency.
6. Review the exchange rate shown. Adjust it manually if needed.
7. Select **Save**.

The transaction appears in your account showing both the foreign currency amount and the base currency equivalent.

### Method 2: Use a foreign currency account

Use this method if you regularly deal with a specific foreign currency and maintain a dedicated ledger account for it.

1. Go to the foreign currency ledger account (for example, Cash on Hand — EUR).
2. Select **+Debit** (income) or **+Credit** (expense).
3. Enter the transaction details in the foreign currency.
4. Review the base currency equivalent and exchange rate shown. Adjust manually if needed.
5. Select **Save**.

The transaction is recorded in both the foreign currency and your base currency.

:::tip
If you deal frequently with a particular foreign currency, a dedicated ledger account keeps your records cleaner and makes reporting easier.
:::

## Viewing multi-currency transactions

You can find your multi-currency transactions in several places:

- Inside the specific ledger account where you recorded them
- In your [Chart of Accounts](/accounting/chart-of-accounts) under the relevant category
- In reports such as the [Balance Sheet](/reporting/balance-sheet) or [Profit and Loss](/reporting/profit-and-loss)

Financial reports display amounts in your base currency by default.

## Exchange rate gains and losses

Exchange rate movements can affect your financial statements. There are two types to be aware of:

- **Realised gains and losses** occur when you convert money between currencies — for example, when a foreign currency payment lands in your base currency bank account.
- **Unrealised gains and losses** are potential differences on outstanding foreign currency balances caused by rate changes since the original transaction. These are typically calculated at the end of a reporting period.

:::info
Fiskl calculates exchange rates automatically at the time of each transaction. You can adjust rates manually when your bank rate differs from the system rate.
:::

## Common issues

The exchange rate shown does not match my bank rate

Fiskl fetches a mid-market rate automatically. Your bank may apply a different rate, including fees or a spread. Enter the exact rate from your bank statement in the exchange rate field before selecting **Save**. This ensures your base currency amount matches your actual bank charge.



I recorded the transaction in the wrong currency

Transactions cannot be edited after creation. Delete the incorrect transaction and re-enter it with the correct currency. Go to the ledger account, find the transaction, and select **Delete**. Then follow the steps in [Recording a multi-currency transaction](#recording-a-multi-currency-transaction) again.



My foreign currency account is not appearing in the dropdown

The ledger account must be created before it appears as an option. Go to **Accounting** > **Chart of Accounts** and add a new account with the correct currency assigned. Once saved, it will appear in the account selector.



My base currency total looks incorrect after a foreign currency entry

Check the exchange rate that was applied at the time of entry. Open the transaction and review the rate shown. If it differs from your bank rate, delete the transaction and re-enter it with the correct rate. For historical transactions, check whether any manual rate adjustment was applied.



## Related topics

- [Chart of Accounts](/accounting/chart-of-accounts) — Set up and manage your ledger accounts, including foreign currency accounts
- [Accounting Settings](/settings/accounting-settings) — Configure your base currency and accounting preferences
- [Balance Sheet](/reporting/balance-sheet) — View asset and liability balances across all currencies
- [Profit and Loss](/reporting/profit-and-loss) — Review income and expense totals in your base currency
- [Manual Transactions](/accounting/journal-entries/guides/manual-transactions) — Record transactions manually across ledger accounts

