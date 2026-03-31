---
title: "AI Expense Reconciliation"
description: "Understand how Fiskl automatically matches AI Expenses with bank transactions for seamless expense reconciliation."
keywords: ["expense reconciliation", "automatic matching", "bank transactions", "expense matching", "AI reconciliation"]
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how AI Expenses automatically reconcile with bank transactions and helps you understand the matching process.

## How Automatic Reconciliation Works

When you upload an expense through AI Expenses, Fiskl monitors your connected bank accounts for matching transactions. When a match is found, the expense reconciles automatically without manual intervention.

**The matching process:**

1. **Expense created** — AI extracts data from the uploaded receipt
2. **Saved to Accounts Payable** — The expense enters your records as unpaid
3. **Monitoring begins** — The system watches for matching bank transactions
4. **Match identified** — The system finds a transaction matching vendor, amount, and date
5. **Automatic reconciliation** — The expense links to the transaction and accounting records update

## What the System Matches

Fiskl uses multiple data points to identify matching transactions.

**Primary matching criteria:**
- **Amount** — Transaction amount matches expense amount (exact or within tolerance)
- **Date** — Transaction date within a reasonable range of the expense date
- **Vendor** — Bank transaction description contains the vendor name

**Secondary criteria:**
- **Currency** — Transaction currency matches expense currency
- **Account** — Transaction is in the expected payment account
- **Category** — Transaction category aligns with the expense type

## Reconciliation Status

AI Expenses display their reconciliation status:

| Status | What It Means | Next Steps |
|--------|---------------|------------|
| **Unreconciled** | No matching transaction found yet | Wait for the bank transaction to appear |
| **Potential Match** | System identified a likely match | Review and confirm the match |
| **Reconciled** | Confirmed match with bank transaction | No action needed |
| **Manual Review** | Multiple possible matches found | Select the correct transaction |

## Viewing Reconciliation Details

To see reconciliation status:

1. **Open AI Expenses**

   Select **AI Expenses** from the left sidebar.

2. **Check status column**

   The status column shows each expense's reconciliation state.

3. **View match details**

   Select an expense to see:
   - Matched bank transaction
   - Match confidence score
   - Matching criteria used
   - Reconciliation timestamp

## Confirming Potential Matches

When the system identifies a potential match:

1. **Review suggestion**

   Select the expense to view the suggested bank transaction match.

2. **Verify accuracy**

   Compare:
   - Amounts match
   - Dates are close
   - Vendor names correspond
   - Currency is correct

3. **Confirm or reject**

   - Select **Confirm Match** if correct
   - Select **Find Different Match** if incorrect

## Manual Reconciliation

If automatic matching does not find the transaction:

1. **Select the expense**

   Select the unreconciled expense.

2. **Select Manual Match**

   Select **Find Transaction** or **Manual Match**.

3. **Search transactions**

   Browse or search your bank transactions to find the correct one.

4. **Select transaction**

   Select the matching transaction from the list.

5. **Confirm match**

   Select **Confirm** to reconcile the expense.

## Why Matches Might Not Happen Automatically

Common reasons for non-matching:

**Transaction not yet imported:**
- Bank transaction has not appeared in your account yet
- Bank sync has not run recently
- Transaction is still pending

**Vendor name mismatch:**
- Bank shows a different business name
- Receipt shows a subsidiary or parent company
- Transaction description is abbreviated or cryptic

**Amount difference:**
- Receipt shows pre-tip amount, bank shows total with tip
- Currency conversion occurred
- Partial payment or split transaction

**Date discrepancy:**
- Transaction posted days after the expense date
- International transaction with delayed processing
- Pre-authorised vs. final charge dates differ

## Handling Split Transactions

If an expense was paid across multiple transactions:

1. **Select the expense**

   Select the expense that was split.

2. **Select Split Match**

   Select **Match Multiple Transactions**.

3. **Select transactions**

   Select all bank transactions that together equal the expense total.

4. **Verify total**

   Confirm the combined transaction amounts match the expense.

5. **Confirm split match**

   Select **Confirm** to reconcile the expense across multiple transactions.

## Tips for Better Automatic Matching

**Keep vendor names consistent:**
- Edit vendor names to match bank descriptions
- Use common abbreviations
- Note parent company vs. subsidiary names

**Upload promptly:**
- Upload receipts soon after purchase
- Don't wait weeks or months
- Fresh uploads match more reliably

**Connect bank accounts:**
- Ensure all payment accounts are connected
- Enable automatic bank syncs
- Keep bank connections active

**Review regularly:**
- Check unreconciled expenses weekly
- Investigate expenses unreconciled for seven or more days
- Manually match problematic transactions

## Common Issues

<details>
<summary>Credit card expenses that reconcile to bank transfer</summary>

If you paid with a credit card but the bank transaction shows a payment to the credit card company:

1. Ensure the credit card account is connected to Fiskl
2. The expense should match with the credit card transaction
3. The credit card payment to your bank shows separately
4. Don't manually match the expense to the bank transfer

</details>

<details>
<summary>Foreign currency transactions</summary>

If the expense amount in a foreign currency does not exactly match the bank transaction due to exchange rate differences:

1. The system accounts for exchange rate variations
2. Match tolerance allows for small differences
3. Confirm the match if amounts are close (within two to three percent)
4. Foreign exchange variance is recorded separately

</details>

<details>
<summary>Subscription payments that recur</summary>

For monthly subscriptions that create recurring expenses and transactions:

1. Upload the receipt for the first month
2. Subsequent months auto-match to recurring transactions
3. Alternatively, upload each month's receipt if needed for records
4. The system learns the pattern and improves matching over time

</details>

<details>
<summary>Expense will not reconcile despite matching transaction</summary>

1. Check that the bank account is properly connected
2. Verify the transaction was imported successfully
3. Ensure amounts match (including currency)
4. Check the vendor name in both records
5. Try manual match if automatic matching fails
6. Contact support if the issue persists

</details>

<details>
<summary>Wrong transaction was automatically matched</summary>

1. Select the expense
2. Select **Unmatch Transaction**
3. The system returns the expense to unreconciled status
4. Manually find and match the correct transaction
5. Confirm the new match

</details>

<details>
<summary>Multiple expenses match the same transaction</summary>

This indicates a split transaction scenario:

1. Verify whether a single receipt covers multiple items
2. Check whether items should be separate expenses
3. Either keep as multiple expenses (split match) or combine into a single expense
4. Match appropriately based on your business logic

</details>

## What Happens After Reconciliation

Once an expense reconciles with a bank transaction:

**Accounting updates:**
- Expense moves from Accounts Payable to paid status
- The connected bank account balance decreases
- The expense category updates with actual payment
- Financial reports reflect the reconciled expense

**Record keeping:**
- The original receipt image remains attached
- The bank transaction links to the expense permanently
- An audit trail shows the reconciliation timestamp
- Both expense and transaction appear in reports

**No further action needed:**
- The expense is complete
- No manual entries are required
- Reports update automatically

## Related Topics

- [Managing AI Expenses](/expenses/ai-expenses/managing-ai-expenses) — Edit and review expenses
- [Uploading AI Expenses](/expenses/ai-expenses/uploading) — Upload receipt images
- [Banking Connections](/integrations/banking/overview) — Connect bank accounts
- [Traditional Expenses](/expenses/traditional-expenses/overview) — Legacy expense system (view only)