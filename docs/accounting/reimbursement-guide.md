---
title: Managing Reimbursements
description: Learn how to record and process reimbursements for business
  expenses paid with personal funds using Fiskl's accounting system.
sidebar_position: 5
---
This guide explains how to record and process reimbursements for business expenses paid with personal funds. You record the expense directly against a Reimbursables ledger account, then clear it when the company pays you back.



## Before You Begin

Go to **Accounting** > **Chart of Accounts** and verify you have a **Reimbursables** ledger account (Liabilities > Other Current Liabilities).

If it doesn't exist, create it before proceeding.

:::info

When you pay for a business expense with personal funds, your company owes you money. The Reimbursables ledger account tracks this liability from the moment you record the expense until the company pays you back.

:::

## Record the Expense

1. Go to **Accounting** > **Chart of Accounts**
2. Select the **Reimbursables** ledger account
3. Select **+Credit**
4. Enter a description and the expense amount
5. Select the expense category, such as "Travel" or "Office Supplies"
6. Select **Save**

Fiskl creates these ledger entries:

- **Debit:** Expense category (for example, Travel)
- **Credit:** Reimbursables (Liability)

This records that you spent personal money on a business expense and the company now owes you.

## Process the Reimbursement Payment

When the company pays you back:

1. Go to **Accounting** > **Chart of Accounts**
2. Select your **Bank Account** ledger account
3. Select **-Debit**
4. Enter the reimbursement amount
5. Select **Reimbursables** as the category
6. Select **Save**

Fiskl creates these ledger entries:

- **Debit:** Reimbursables (Liability)
- **Credit:** Bank Account

This clears the liability and reduces your bank balance.

## How Your Accounts Change

**Reimbursables ledger account:** Starts at zero, increases when you record expenses (the company owes you), and decreases when the company pays you back. It returns to zero when fully reimbursed.

**Bank Account:** Decreases when the company pays the reimbursement, reflecting actual cash leaving the business.

After reimbursement, your financial statements show:

- Expense categories reflect true business costs
- The Reimbursables ledger account returns to zero
- Bank balance reflects the reimbursement payment
- A clear audit trail from expense to payment

## Common Issues



The Reimbursables ledger account balance seems wrong

Check that you completed all steps:

1. Verify the expense was recorded using **+Credit** on the **Reimbursables** ledger account
2. Confirm the reimbursement payment was recorded using **-Debit** on your bank account ledger with **Reimbursables** as the category
3. Check that amounts match between the expense and the payment

If amounts don't match, you may have partial reimbursements. The remaining balance shows what is still owed.



&nbsp;

I entered the wrong expense amount

You can edit or delete transactions directly from the ledger account:

1. Go to **Accounting** > **Chart of Accounts**
2. Select the ledger account where you recorded the transaction
3. Find and select the transaction to open it
4. Make your corrections
5. Select **Save**

If the expense was already reimbursed, adjust both the original entry and the reimbursement payment.



&nbsp;

Can I reimburse multiple expenses at once?

Yes. When processing the reimbursement payment:

1. Calculate the total amount owed across all unreimbursed expenses
2. Record a single **-Debit** on your bank account ledger for the total amount
3. Add a description listing which expenses are included

The **Reimbursables** ledger account balance returns to zero when all expenses are reimbursed.



## Related Topics

- [Chart of Accounts](/accounting/chart-of-accounts) — Learn about ledger account types and setup
- [Manual Transactions](/accounting/journal-entries/guides/manual-transactions) — Understanding transaction entries
- [Expenses Overview](/expenses/overview) — Complete guide to tracking expenses

