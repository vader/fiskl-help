---
title: "Recording Manual Transactions"
description: "Learn how to create manual journal entries in Fiskl to record cash purchases, future payments, and other transactions not captured automatically."
keywords: ["manual transaction", "journal entry", "account transaction", "chart of accounts", "manual entry", "debit", "credit"]
sidebar_position: 1
slug: /core-features/accounting/journal-entries/guides/manual-transactions
tags:
  - Accounting
  - Journal entry
  - Account transaction
  - Chart of Accounts
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This guide explains how to record manual transactions in Fiskl — money moving in and out of your cash accounts. This is sometimes called an account transaction. It is different from a [Multi-journal Entry](/accounting/journal-entries/multi-journal-entries), which records transactions across multiple ledger accounts simultaneously.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before You Begin

- You have access to your Chart of Accounts
- You know which ledger account the transaction belongs to
- You have the transaction amount and date ready

## Common Reasons for Creating Manual Transactions

Not all transactions are captured automatically. Here are two common examples of when you need to create a manual transaction:

1. **Cash purchases** — When you buy office supplies with petty cash, record this to update your **Cash on Hand** and **Office Supplies** expense ledger account
2. **Future payments** — If you receive inventory now but pay later, record this upcoming expense in **Accounts Payable** for accurate budgeting

<details>
<summary>See more reasons for creating manual transactions</summary>

1. **Recording cash transactions** — Essential for keeping an accurate record of cash flows not processed through electronic means, such as petty cash expenses
2. **Adjusting entries at month-end or year-end** — Ensures financial statements reflect the correct revenues and expenses within the appropriate accounting period
3. **Depreciation of assets** — Reflects the consumption of economic benefits of fixed assets over their useful lives
4. **Accruals for unpaid expenses or unearned revenue** — Ensures expenses and revenues are matched to the period in which they are incurred or earned, regardless of cash movement
5. **Recording non-monetary transactions such as bartering** — Captures the exchange of goods or services where no cash is involved
6. **Correcting errors in previously recorded transactions** — Maintains the integrity and accuracy of accounting records
7. **Creating opening and closing balances** — Ensures new accounting periods start correctly and books are closed at period end

</details>

## How to Record a Manual Transaction

<details>
<summary>Step-by-step instructions for creating a manual transaction</summary>

1. In the left sidebar, select **Accounting** > **Chart of Accounts**
2. Select **Assets** > **Cash & Cash Equivalents** to expand and view all accounts
3. Select the account you want to add the transaction to
4. Select whether to debit or credit the account. In Fiskl, **debit (IN/+)** means money coming into the account and **credit (OUT/-)** means money going out. Use the **IN/OUT** toggle when working from cash accounts
5. Enter a name for your transaction
6. Enter the transaction amount
7. Select a category. The category represents the other side of the transaction — for example, the expense or income account being affected. The category must already exist in your Chart of Accounts. If left unassigned, the transaction is recorded as Uncategorised Income or Uncategorised Expense with no VAT applied. Selecting a category is mandatory
8. Add a tax or create a new tax if applicable. Tax cannot be applied to credit (OUT) entries — if you are recording a payment to a vendor, the tax field will not be available
9. Select a client or vendor if this transaction is associated with either
10. Enter a reference number in the number field if needed
11. To add an attachment, select the paperclip icon
12. Select **Save** to save your transaction

Your transaction appears in your account and your balance updates. The transaction is also saved to the selected category ledger account.

</details>

## Multi-Currency Transactions

Fiskl offers two ways to record foreign currency transactions:

- In any **Cash and Cash Equivalent** account, record the transaction directly by selecting a category in either foreign or base currency
- Open a foreign currency **Cash or Cash Equivalent** account and enter the transaction amount in that specific foreign currency

<details>
<summary>Step-by-step instructions for recording in a different currency</summary>

1. Follow steps 1–4 from the How to Record a Manual Transaction section above
2. Select **Record in different currency?**
3. Select the required currency
4. Enter the foreign currency amount. The exchange rate displays automatically and can be adjusted if needed
5. Complete the remaining details as in the standard instructions
6. Select **Save** to save your transaction

Your transaction appears in your account displaying both the foreign and base currencies.

</details>

:::info
When viewing a transaction, you may also see options for **Split**, **Match**, and **Internal Transfer**. These are separate features not covered in this guide. See [Matching and Splitting Transactions](/core-features/accounting/journal-entries/guides/match-and-split-transactions) for more information.
:::

## Common Issues

<details>
<summary>I can't find the right category for my transaction</summary>

The category you need may not exist yet in your Chart of Accounts. Go to **Accounting** > **Chart of Accounts** and add the relevant ledger account before returning to record your transaction.

</details>

<details>
<summary>My foreign currency amount isn't converting correctly</summary>

The exchange rate displayed is pulled automatically but can be adjusted manually. In step 4 of the multi-currency instructions, select the exchange rate field and enter your preferred rate. This is useful when you want to use your bank's rate rather than the live rate.

</details>

## Related Topics

- [Journal Entry Guides Overview](/accounting/journal-entries/guides/overview) — Browse all transaction guide types
- [Multi-journal Entries](/accounting/journal-entries/multi-journal-entries) — Record complex transactions across multiple ledger accounts
- [Chart of Accounts](/accounting/chart-of-accounts) — Manage and organise your ledger accounts
- [Multi-Currency Transactions](/core-features/accounting/journal-entries/guides/multi-currency-transactions) — Detailed guidance on foreign currency entries
