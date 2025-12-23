---
title: Managing Multi-Currency Transactions
sidebar_position: 8
description: Handle international finances effortlessly with Fiskl's multi-currency transaction feature. Ensure accuracy in global business operations.
keywords: ["Multi-currency transactions Fiskl", "international finance", "currency management", "global business accounting", "Fiskl features"]
slug: /core-features/accounting/journal-entries/guides/multi-currency-transactions
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
 - Accounting
 - Journal entry
 - Multi-currency
 - Foreign exchange
---

## Understanding multi-currency transactions

In today's global business environment, it's common to deal with transactions in multiple currencies. Fiskl provides robust support for recording and managing these multi-currency transactions, ensuring accurate financial reporting and streamlined bookkeeping.

### Why record transactions in different currencies?

Recording transactions in their original currency is crucial for several reasons:

1. **Accuracy**: It reflects the actual amount paid or received in the transaction's currency
2. **Exchange rate tracking**: It allows you to track exchange rate fluctuations over time
3. **Financial reporting**: It enables more accurate financial reporting, especially for businesses operating in multiple countries
4. **Tax compliance**: It helps in meeting tax reporting requirements in different jurisdictions

<details>
<summary>Real-world example</summary>

Imagine you're on a business trip abroad and pay for a hotel with your USD bank card. The hotel bill is €1500, but your bank statement shows a charge of $1,789.35.

In Fiskl, you can record this transaction in Euros (€1500) while still tracking the USD amount ($1,789.35). This approach maintains the accuracy of your records and helps you monitor exchange rate impacts on your expenses.
</details>

## Recording multi-currency transactions in Fiskl

Fiskl offers two primary methods for recording foreign currency transactions:

1. Recording in a different currency within your base currency account
2. Using dedicated foreign currency accounts

### Method 1: Recording in a different currency


<details>
<summary>Take an interactive walkthrough on how to record transactions in a different currency</summary>

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/e/cm0tpcjoe0008jv0cn17l57d9/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>

This method allows you to record a transaction in a foreign currency within your base currency account.


1. Open the required cash or cash equivalent account
1. Click on "+In" (for income) or "+Out" (for expenses)
1. Enter your transaction details
1. Select "Record in different currency?"
1. Choose the required currency from the dropdown
1. Enter the foreign currency amount
    1. The exchange rate will be displayed automatically
    1. You can manually adjust the exchange rate if needed
1. Click "Create" to save the transaction

Your transaction will now appear in your account, showing both the foreign currency amount and the equivalent in your base currency.

### Method 2: Using foreign currency accounts

For businesses frequently dealing with specific foreign currencies, setting up dedicated foreign currency accounts can be beneficial.

1. First, set up a foreign currency account (e.g., Cash on Hand - EUR)
2. Open the foreign currency account
3. Click on "+In Debit" or "+In Credit" as appropriate
4. Enter your transaction details in the foreign currency
    - The equivalent amount in your base currency will be displayed automatically
    - The exchange rate will also be shown and can be adjusted if necessary
5. Click "Create" to save the transaction

The transaction will be recorded in both the foreign currency and your base currency.

## Managing multi-currency transactions

### Viewing multi-currency transactions

You can view your multi-currency transactions in several ways:

1. In the specific account where the transaction was recorded
2. In your Chart of Accounts under the relevant account category
3. In various financial reports, such as the Balance Sheet or Income Statement

These reports will typically show amounts in your base currency but may offer options to view original currency amounts.

### Handling exchange rate fluctuations

When dealing with multi-currency transactions, it's important to be aware of how exchange rate fluctuations can impact your financial statements:

1. **Realized gains/losses**: These occur when you actually convert money from one currency to another, such as when receiving a foreign currency payment into your base currency bank account

2. **Unrealized gains/losses**: These are potential gains or losses on outstanding foreign currency balances due to exchange rate changes. They're typically calculated at the end of a reporting period

Fiskl helps manage these by:
- Automatically calculating exchange rates at the time of transaction
- Allowing manual adjustments to exchange rates when necessary
- Providing reports that can help identify exchange rate impacts on your finances

:::tip
Regularly review your foreign currency transactions and balances to ensure they accurately reflect current exchange rates, especially when preparing financial statements.
:::


By following these guidelines and utilizing Fiskl's multi-currency features, you can effectively manage your international transactions and maintain accurate financial records across multiple currencies.
