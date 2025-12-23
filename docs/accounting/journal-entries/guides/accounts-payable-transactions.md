---
title: Working with Accounts Payable
sidebar_position: 10
description: "Learn how to create and manage Accounts Payable entries and bills in Fiskl, including split transactions and multi-currency entries."
keywords: [ "Accounts Payable", "Fiskl", "bills", "expenses", "financial management", "accrual accounting" ]
slug: /core-features/accounting/journal-entries/guides/accounts-payable-transactions
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Accounting
  - Journal entry
  - Accounts Payable
---

## Understanding Accounts Payable

Accounts Payable (AP) is a key component in accrual accounting. It's a record of what your business owes to suppliers or
vendors, including goods or services you've bought on credit but haven't paid for yet. In Fiskl, Accounts Payable is
used to record future payments that you owe to vendors and suppliers.

While there isn't a specific "Bills" entry screen in Fiskl, you can use the Accounts Payable feature to record and
manage your bills. This approach aligns with accrual accounting principles and provides a comprehensive view of your
future payment obligations.

Fiskl's AP account helps you track these amounts in multiple currencies, displaying the total in your base currency.
This feature allows you to easily see how much you need to pay without any surprises, making financial planning and cash
flow management more efficient.

:::note
For payments that have already occurred, use Operating Expenses or other relevant Expenses accounts instead of Accounts
Payable.
:::

Let's explore how to create and manage Accounts Payable entries, including bills, in Fiskl.

## Creating a Basic Accounts Payable Entry

Follow these steps to create a basic Accounts Payable entry or bill in Fiskl:

1. From the left menu, click on "Purchasing" and select "Accounts Payable".
1. Click on the "+In" button to create a new entry.
1. Complete the following fields:
    - Date
    - Name or number for your entry (e.g., "Broadband bill" or "Office Supplies Invoice #1234")
    - Category (select from the dropdown or create a new one)
    - Tax (if applicable)
    - Amount (in your default currency)
    - Vendor (select or create a new one)
    - Bill number (if applicable)
    - Client (if relevant to a specific client)
1. To attach supporting documents, such as a scanned copy of the bill, click on the attach button.
1. Click "Create" to save your Accounts Payable entry.

<details>
<summary>Why is managing Accounts Payable important?</summary>

Proper AP management helps you:

- Track your short-term obligations.
- Accurately report your financial position.

</details>

:::tip
If the balance in your Accounts Payable account is zero, it means you currently have no future payments or liabilities
recorded.
:::

## Creating an AP Transaction

To record a new Accounts Payable transaction:

<details>
<summary>Take an interactive walkthrough of creating an Accounts Payable transaction</summary>

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/e/cm0to7dr7000gl60cstgelqbl/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>

1. Go to `Accounting > Transactions` from the left menu
2. Select "Accounts Payable" from the account list
3. Click "+In Credit" to create a new AP transaction
4. Enter the transaction details:
    - Name
    - Category
    - Amount
    - Currency (if different from base currency)
    - Vendor
    - Reference number (optional)
    - Description (optional)
5. Attach any relevant documents by clicking the attachment button
6. Click "Create" to save the transaction

Your new AP transaction will now appear in the Accounts Payable list and the corresponding expense account.

## Matching AP Transactions with Payments

<details>
<summary>Take an interactive walkthrough of matching an accounts payable transaction</summary>

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/e/cm0wgvisu0001l20cj12y07xb/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>

When you pay an AP transaction, you need to match it with the payment in your bank or credit card account:

1. Go to the relevant bank or credit card account
2. Find the relevant transaction
3. Select "Show matches"
4. Choose the corresponding AP transaction from the list
5. Select "Update" to confirm the match

In the Accounts Payable section, you will find two transactions associated with this transaction. The initial
transaction logs the future expense, while the subsequent transaction records its payment. Consequently, the outstanding
balance for this payable is zeroed out. These updates are reflected in the account transactions and are visible on your
Balance Sheet, Transactions by Account and Trial Balance reports.

## Matching AP transactions with partial payments

<details>
<summary>Take an interactive walkthrough of processing partial payments</summary>
<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/share/cm8hh9lpe0010l70c9h84pt41/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>

You can partially match an AP transaction with a partial payment in your bank or cash accounts, can be also in home,
foreign currency or multiple currencies:

1. Find the relevant transaction in your Cash & Cash Equivalents account, ie US bank account.
2. Select "Show matches".
3. Choose the corresponding AP transaction from the list for the full amount.
4. Fiskl will automatically adjust the matched amount to the partial payment, along with apply relevant exchange rates.
5. Select "Update" to confirm the match.

Your partial payment will automatically be linked to Accounts Payable.

Repeat the process for all related partial payments until the AP transaction has been fully paid.

### Reporting Considerations

Partial payments affect your financial reports in specific ways:

•    **Balance Sheet**: Shows the remaining liability for partially paid bills.
•    **Transactions by Account**: Displays each partial payment as a separate entry linked to the original bill.
•    **Aging Reports**: Includes the unpaid portion of partially paid bill.
•    **Trial Balance**: Reflects the current outstanding balance for all AP transactions

## Working with Foreign Currency AP Transactions

Fiskl supports AP transactions in multiple currencies:

1. When creating an AP transaction, select the appropriate currency.
2. The transaction will display both the foreign and base currency amounts.
3. When matching, you will be presented with matches in all currencies. You can filter these to specific currencies
   using the currency selector.
4. Select the correct match, and adjust the exchange rate if necessary.

For payments covering multiple foreign currency invoices:

1. Select all relevant matches from the list.
2. Use the "Auto-adjust FX rate" option to proportionally adjust exchange rates if needed.
3. Click "Create" to finalize the matched transaction.

## Splitting AP Transactions

You can split a single AP transaction across multiple categories, currencies, or vendors:

1. Create or open an AP transaction.
2. Click "Split".
3. Add details for each split:
    - Amount
    - Category
    - Currency (if different)
    - Tax information (if applicable)
    - Vendor (if different)
    - Client (if applicable)
4. The "Difference" field shows any remaining amount to be allocated
5. Click "Create" to save the split transaction

Each split will appear in its respective account, providing detailed transaction tracking.

Remember, accurate AP management is crucial for maintaining your business's financial health and relationships with
suppliers.
