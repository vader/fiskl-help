---
title: Managing Reimbursements
description: Learn how to record and process reimbursements for business expenses paid with personal funds using Fiskl's accounting system.
keywords: ["reimbursements", "expense reimbursement", "personal expenses", "liability accounts", "accounting entries"]
sidebar_position: 5
---

# Managing Reimbursements

This guide explains how to record and process reimbursements for business expenses paid with personal funds. Fiskl offers two methods depending on whether you prefer direct accounting entries or expense forms.

## Why Track Reimbursements Properly

When you pay for business expenses with personal funds, your company owes you money. Proper reimbursement tracking ensures accurate financial records, clear audit trails, and proper tax documentation.

**Key benefits:**
- Maintains separation between personal and business transactions
- Handles timing differences between expense and reimbursement
- Provides proper documentation for tax purposes
- Ensures accurate reconciliation

## Before You Begin

Navigate to **Accounting** > **Chart of Accounts** and verify you have these accounts:

**Required for both methods:**
- **Reimbursables** (Liabilities > Other Current Liabilities)

**Required for Method 2 only:**
- **Personal card** (Assets > Cash and Cash Equivalents, Type: Cash on hand)

If these accounts don't exist, create them before proceeding.

---

## Method 1: Direct Accounting Entry

Use this method when you want to record expenses directly into the accounting system without using the expense form.

### Record the Expense

1. Go to **Accounting** > **Chart of Accounts**
2. Select the **Reimbursables** account
3. Select **New Transaction**
4. Create an IN transaction with a positive amount
5. Select the expense category (such as Travel or Office Supplies)
6. Select **Save**

The system creates these ledger entries:
- **Debit:** Travel Expense (or your chosen category)
- **Credit:** Reimbursables (Liability)

This records that you spent personal money on a business expense and the company now owes you.

### Process the Reimbursement Payment

When the company pays you back:

1. Go to your **Bank Account** transactions
2. Select **New Transaction**
3. Create an OUT transaction for the reimbursement amount
4. Select **Reimbursables** as the category
5. Select **Save**

The system creates these ledger entries:
- **Debit:** Reimbursables (Liability)
- **Credit:** Bank Account

This pays off the liability and reduces your bank balance.

---

## Method 2: Using Expense Forms

Use this method when you want to track expenses through Fiskl's expense management system before processing reimbursement.

### Step 1: Record the Expense

1. Go to **Expenses**
2. Select **New Expense** or select an existing expense
3. Enter the expense details
4. Select the expense category (such as Travel)
5. Check the **Paid in cash** box
6. Select **Personal card** from the dropdown
7. Select **Save**

The system creates these ledger entries:
- **Debit:** Travel Expense (or your chosen category)
- **Credit:** Personal Card (Asset)

This records that you spent personal money for a business expense.

### Step 2: Create the Reimbursement Record

After recording the expense:

1. Go to **Accounting** > **Chart of Accounts**
2. Select the **Personal Card** account
3. Select **New Transaction**
4. Create a debit transaction (positive amount) for the expense amount
5. Select **Reimbursables** as the category
6. Select **Save**

The system creates these ledger entries:
- **Debit:** Personal Card (Asset)
- **Credit:** Reimbursables (Liability)

This creates the liability showing the company now owes you money.

### Step 3: Process the Reimbursement Payment

When the company pays you back:

1. Go to your **Bank Account** transactions
2. Select **New Transaction**
3. Create an OUT transaction for the reimbursement amount
4. Select **Reimbursables** as the category
5. Select **Save**

The system creates these ledger entries:
- **Debit:** Reimbursables (Liability)
- **Credit:** Bank Account

This pays off the liability and reduces your bank balance.

---

## Choosing the Right Method

**Use Method 1 (Direct Accounting Entry) when:**
- You want quick, simple entries
- You don't need detailed expense tracking
- You're comfortable working directly with ledger accounts

**Use Method 2 (Expense Forms) when:**
- You want to track expenses separately before reimbursement
- You need detailed expense records for reporting
- You prefer the expense management workflow

Both methods produce accurate accounting records. Choose based on your workflow preference.

---

## What Happens to Your Accounts

### During the Process

**Reimbursables Account:**
- Starts at zero
- Increases when you record expenses (company owes you)
- Decreases when company pays you back
- Returns to zero when fully reimbursed

**Personal Card Account (Method 2 only):**
- Tracks personal funds spent on business
- Increases when you record expenses
- Decreases when you create reimbursement records

**Bank Account:**
- Decreases when company pays reimbursement
- Reflects actual cash leaving the business

### After Reimbursement

Your financial statements show:
- Expense categories reflect true business costs
- Liability accounts return to zero
- Bank balance reflects reimbursement payments
- Clear audit trail from expense to payment

---

## Common Issues

<details>
  <summary>The Reimbursables account balance seems wrong</summary>

Check that you completed all steps:
1. Verify the expense was recorded with Reimbursables as the category
2. Confirm the reimbursement payment was recorded against Reimbursables
3. Check that amounts match between expense and payment

If amounts don't match, you may have partial reimbursements. The remaining balance shows what's still owed.
</details>

<details>
  <summary>I made a mistake in the expense amount</summary>

You can edit or delete transactions:
1. Go to the account where you recorded the transaction
2. Find the transaction in the list
3. Select the transaction to edit or delete
4. Make your corrections
5. Select **Save**

If the expense was already reimbursed, you may need to adjust both the original entry and the reimbursement payment.
</details>

<details>
  <summary>Can I reimburse multiple expenses at once?</summary>

Yes. When processing the reimbursement payment:
1. Calculate the total amount owed across all unreimbursed expenses
2. Create a single reimbursement payment for the total amount
3. Add a note or description listing which expenses are included

The Reimbursables account balance will show zero when all expenses are reimbursed.
</details>

---

## Related Topics

- [Chart of Accounts](/docs/accounting/chart-of-accounts) - Learn about account types and setup
- [Manual Transactions](/docs/accounting/journal-entries/overview) - Understanding transaction entries
- [Expense Management](/docs/expenses/overview) - Complete guide to tracking expenses