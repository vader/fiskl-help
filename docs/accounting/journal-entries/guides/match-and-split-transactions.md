---
title: Matching and Splitting Transactions
sidebar_position: 6
description: "Master complex transaction management in Fiskl: Learn to match and split entries for detailed and accurate financial records."
keywords: ["Match and split transactions Fiskl", "complex transactions", "financial accuracy", "Fiskl tools"]
slug: /core-features/accounting/journal-entries/guides/match-and-split-transactions
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
 - Accounting
 - Journal entry
 - Transactions
---

## What is transaction matching?

Transaction matching in Fiskl allows you to reconcile recorded financial activities with your bank transactions. This process ensures your accounting records accurately reflect your actual financial position and helps maintain the integrity of your financial data.

<details>
<summary>Common matching scenarios</summary>

- Matching an expense to a bank transaction
- Matching an invoice to a received payment
- Matching an invoice payment to a received payment
- Reconciling a batch payment (like a Stripe pay-out) with multiple invoices
- Matching a received payment to an Accounts Receivable transaction

</details>

## How to match transactions

<details>
  <summary>Take an interactive video walkthrough of how to match an accounting transaction</summary>

    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
    <iframe
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
    src="https://demo.fiskl.com/e/cm0tm275x00all50cpp3xqp37/tour"
    allowFullScreen
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowtransparency="true"
    ></iframe>
    </div>

</details>  

1. Navigate to the `Accounting > Chart of Accounts` or `Accounting > Transactions` page from the left menu
1. Find the account you want to work on and open it
1. Select `Show matches` on the transaction
1. Choose the corresponding transaction(s) from the list
1. Review the match details
1. Select `Update` to complete the process

:::info
When you match a payment to an invoice, Fiskl automatically creates a payment record for that invoice.
:::


# How to match transaction(s) in different currencies

The process is exactly the same as a regular match. The only difference is we are selecting some multiple transactions.

<details>

  <summary>Take an interactive video walkthrough of matching multiple transactions in different currencies</summary>

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

## What is transaction splitting?

Splitting allows you to divide a single transaction into multiple parts, assigning each to different accounts or categories. This is useful for accurately recording complex expenses or income.


<details>
  <summary>See an example of a real world split transaction</summary>

Imagine you're a freelance marketing consultant who attends a professional conference. You pay a single fee of $1,500 for the event, but this fee covers multiple aspects of your business expenses.

Here's how you might split this transaction:

  ```
    $800 for Conference registration (Expense > Operating Expenses > Education and Training)
    $400 for workshop materials (Expenses > Operating Expenses > Office Supplies)
    $300 for included accommodation (Expenses > Operating Expenses > Travel - Accommodation)
  ```

This split allows you to accurately categorize your expenses for both accounting and tax purposes. It provides a clearer picture of how you're investing in different aspects of your business:

The conference registration fee is a direct professional development expense.
The workshop materials are office supplies that you'll use beyond the conference.
The accommodation portion could be considered a travel expense.

By splitting the transaction this way, you can:

More accurately track different types of business expenses
Better understand where your professional development budget is being allocated
Potentially claim different tax deductions based on expense categories
Gain insights into the cost breakdown of attending professional events

</details>

## How to split transactions

<details>

  <summary>Take an interactive video walkthrough of how to split a transaction across multiple accounts</summary>

    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
    <iframe
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
    src="https://demo.fiskl.com/e/cm0san1ul000sle0c9u0mxjrz/tour"
    allowFullScreen
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowtransparency="true"
    ></iframe>
    </div>

</details>

1. Navigate to the `Accounting > Chart of Accounts` or `Accounting > Transactions` page from the left menu
1. Find the transaction you want to split and open it
1. Select the "Split" option
1. Add new split lines, specifying the amount and account for each
1. Use the provided tools to ensure the split amounts match the total transaction amount
1. Select "Update" to confirm

<details>
<summary>Tips for effective splitting</summary>

- If the sum of the splits don't balance you will see the difference. Selecting the difference will add a new split line with this amount
- Use meaningful descriptions and attach supporting files and images
- Remember making changes are just as easy, open the transaction and edit

</details>

## Matching and splitting with multiple currencies

Fiskl supports matching and splitting transactions involving different currencies:

1. When matching or splitting transactions with different currencies, Fiskl displays the exchange rates
1. You can adjust amounts or rates to balance the transaction
1. For multi-currency splits, choose which currency rate to adjust for matching

Remember, accurate matching and splitting of transactions forms the foundation of reliable financial reporting in Fiskl.
