---
title: Accounting FAQs
sidebar_position: 4
description: Navigate financial management confidently with Fiskl's accounting FAQs. Find quick answers to common questions and optimize your processes.
keywords: ["Accounting FAQs Fiskl", "financial management", "small business accounting", "common questions"]
slug: /core-features/accounting/account-reconciliation/accounting-faq
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - FAQ
  - Accounting
---

## General Accounting Questions

### Is Fiskl a double-entry accounting system?

Yes, Fiskl is a double-entry, multi-currency accounting platform. This ensures accurate and balanced financial records for your business.

[//]: # (For more information, see our [Accounting Core Features]&#40;/docs/category/core-features&#41;.)

### Can I customize my Chart of Accounts in Fiskl?

Yes, you can customize your Chart of Accounts to fit your business needs. Here's how:

1. Go to your Chart of Accounts
2. Click the plus button next to the account you want to add a category to
3. Enter the new category details

[//]: # (For more details, see [Managing your Chart of Accounts]&#40;/docs/core-features/accounting/chart-of-accounts&#41;.)

### How do I delete an account from my Chart of Accounts?

To remove an account:

1. Go to Chart of Accounts
2. Click "Archive" next to the account you want to remove

:::note

- If the account has no transactions, it will be deleted
- Accounts with transactions will be moved to the Archived folder
- Archived accounts remain active in accounting, and their transactions still count towards your company accounts
- Archived accounts are not available in the account selector
- You cannot delete a default system account (eg. all accounts displayed under Operating Income), however, you can rename it.

:::

## Transactions and Payments

### What's the best way to handle an invoice overpayment in Fiskl?

To manage an invoice overpayment:

1. First, create a liability account called "Overpayments" in your Chart of Accounts.
2. When processing the bank transaction with the overpayment:
    - Match the appropriate amount to the original invoice
    - Create a second line for the excess amount and categorize it to the "Overpayments" liability account
3. When creating a future invoice for this client, you have to do the same, when processing the bank transaction:  Match the appropriate amount to the original invoice
4. Create a second line with the negative amount(previous overpayment) and categorize it to the "Overpayments" liability account

This process ensures the overpayment received account reflects a net zero balance.

### How do I record bad debts in Fiskl?

To record bad debts:

1. Mark the invoice as paid using the Cash on Hand account
2. In the Cash on Hand account:
    - Create an OUT entry
    - Select the Bad Debts expenses account

This process will:

- Zero out your Cash on Hand account balance
- Show Bad Debts expenses in your Profit and Loss statement
- Close the Accounts Receivable (AR) invoice status
- Remove the AR balance

### Can I predefine categories for vendors or clients?

Currently, Fiskl doesn't support assigning categories directly to Clients or Vendors. However, you can:

- Customize your Chart of Accounts
- Assign custom categories to Products, Services, Time, and Mileage

We're continually improving Fiskl, so stay tuned for future updates!

### Where can bank rules be set for transaction feeds?
Bank transaction rules are automatic and currently can’t be set or configured. This is on our roadmap

### Can bank rules be auto reconciled without having to approve the set rules?

Fiskl’s AI streamlines bank reconciliation by automatically suggesting relevant categories. You can quickly review and confirm transactions in batches, making the process faster and more efficient.

### Why aren't all my expenses reflected in my accounting reports?

Expenses in Fiskl can be in two states:

1. **Standalone Expenses**: These are expenses you've recorded but haven't yet reconciled with your accounting. They don't appear in your dashboard or reports.

2. **Reconciled Expenses**: These are expenses that have been matched with transactions in your accounting and will appear in your dashboard and reports.

To ensure your expenses are included in your accounting:

- If you've recorded a standalone expense, you need to reconcile it with a transaction in your bank, credit card, or cash account.
- If you're adding expenses directly to your ledger accounts, they will automatically be included in your accounting.

[//]: # (For a detailed explanation of how to record and reconcile expenses, please see our [How to Record Expenses tutorial]&#40;/docs/tutorials/accounting/how-to-record-expenses&#41;.)

### Why do I not see my expenses in my P&L report or dashboard?

[//]: # (Expenses added via the `Expense` section will not automatically appear in your [P&L]&#40;/docs/core-features/accounting/reports/profit-and-loss&#41; or any reports or on the dashboard until they are reconciled. The Expenses are a section to capture the Expense to be reconciled with an accounting transaction or billed to a client as part of an expense.)

[//]: # (To learn more about how to record and reconcile expenses, please see our [How to Record Expenses tutorial]&#40;/docs/tutorials/accounting/how-to-record-expenses&#41;.)

### Why can't I add an expense directly to an Expense Ledger Account?

[//]: # (In Fiskl, you can only add expense transactions through [Money Accounts]&#40;/docs/Tutorials/Banking/how-to-import-bank.md#understanding-money-accounts-in-fiskl&#41;. Here's how it works:)

1. Record the transaction in the appropriate Money Account:
    - For bank payments: `Assets > Cash & Cash Equivalence > [Your Bank Name]`
    - For credit card payments: `Liabilities > Credit Card > [Your Credit Card Name]`

2. Categorize the transaction within the Money Account:
    - Assign the correct expense category (e.g., "Travel Expense")

Example:

If you paid for an airline ticket using your Chase bank account:

1. Find the transaction in `Assets > Cash & Cash Equivalence > Chase Bank`
2. Categorize it as "Travel Expense" within the Chase Bank ledger

This method ensures accurate tracking of both your expenses and the accounts they're paid from.

Can I bulk categorize my accounting transactions?
Currently, we've temporarily disabled the bulk categorization feature. We're enhancing our system to ensure more accurate categorization, given the complex rules and conditions in accounting.

While we work on improvements, you can use this alternative method:

1. Categorize a single transaction
2. Set required vendors and clients for that category
3. The system will suggest similar matches for current and future transactions. The more you scroll through your current transactions, the more suggestions you will get
4. You can then review and accept these suggestions in bulk

We're prioritizing accuracy and plan to reintroduce bulk categorization gradually, starting with easier matches. We appreciate your patience as we work to provide you with a more reliable and efficient categorization process.

### How do I make my expenses recurring?

Recurring expenses aren’t available yet, but they’re on our roadmap. For now, you need to enter them as and when they occur. For more information, go to [Accounts Payable] https://help.fiskl.com/docs/core-features/accounting/journal-entries/guides/accounts-payable-transactions.

### How do I un-reconcile a transactions

To un-reconcile a transaction, go to the account (e.g., bank account), open the transaction, click 'Clear line' on the matched line near the bottom, and save. The transaction will remain in the account but will be unreconciled.

### How do I record a purchase (eg. computer) as a fixed asset in Fiskl.

You have two available options:
- Record the transaction under Assets > Property, Plant & Equipment > Computer Equipment as generally this type of asset is subject to depreciation.
- You can create a custom Fixed Asset account under Other Current Assets, called Fixed Assets, but option 1 is the best given this type of asset.

### How do I create a credit note that I received from my supplier for a refund on an expense?

As Fiskl does not have a dedicated credit note function yet you will need to do:

1. Create a journal entry with:
   Debit: Accounts Payable (reducing what you owe the supplier)
   Credit: The original expense account (reducing the expense)
2. If using a bill or invoice entry screen:
   Enter a "negative bill" or "negative invoice" with a negative amount
   This creates the same effect as a journal entry, reducing both A/P and the expense
   For example, if you originally recorded a $500 office supplies expense and received a $100 credit note:
3. Credit note journal entry:
   Debit: Accounts Payable $100
   Credit: Office Supplies Expense $100

## Reporting

### Can I send statements to my clients showing outstanding invoices and payments?

[//]: # (Yes, you can generate a [Statement of Accounts]&#40;/docs/core-features/accounting/reports/statement-of-accounts&#41; report. This report provides a comprehensive view of your client's account, including:)

- Outstanding invoices
- Payments received
- Current balance

To generate this report:

1. Go to Reports
2. Select "Statement of Accounts"
3. Choose the client and date range
4. Generate and send the report

### How can I create an expense report that compares two fiscal years?

You can view your expenses and compare two fiscal years, by opening the Profit & Loss report, whilst this will show your income it will also display a 2 year comparison of your expenses.

### How can I export my Chart of Accounts?

Exporting the Chart of Accounts is on our roadmap, however you can export individual accounts.

### I have a USD bank account in Fiskl, but due to fluctuations in FX rates, the balance in EUR is showing as a credit. How can I amend this?

This is expected in multi-currency accounting. The negative balance in the EUR equivalent column is automatically offset by the "Unrealised Exchange Gain or Loss" account in your financial statements. This approach is standard for handling currency fluctuations between your transaction currency and your reporting currency.

Fiskl automatically manages this, ensuring your accounts stay properly balanced when considered with the unrealised exchange gains or losses. No manual adjustments or journal entries are required. You can review your Profit and Loss statement, where you'll see an "Unrealised Exchange Gain or Loss" line item that balances out these currency differences.

## Still Have Questions?

If you couldn't find the answer you're looking for, please don't hesitate to [contact Fiskl support team](mailto:support@fiskl.com). We're here to help!
