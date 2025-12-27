---
title: "AI Expense Reconciliation"
description: "Understand how Fiskl automatically matches AI Expenses with bank transactions for seamless expense reconciliation."
keywords: ["expense reconciliation", "automatic matching", "bank transactions", "expense matching", "AI reconciliation"]
sidebar_position: 4
---

This guide explains how AI Expenses automatically reconcile with bank transactions and helps you understand the matching process.

## How Automatic Reconciliation Works

When you upload an expense through AI Expenses, Fiskl monitors your connected bank accounts for matching transactions. When a match is found, the expense reconciles automatically without manual intervention.

**The matching process:**

1. **Expense created** - AI extracts data from uploaded receipt
2. **Saved to Accounts Payable** - Expense enters your records as unpaid
3. **Monitoring begins** - System watches for matching bank transactions
4. **Match identified** - System finds transaction matching vendor, amount, and date
5. **Automatic reconciliation** - Expense links to transaction and updates accounting records

## What the System Matches

Fiskl uses multiple data points to identify matching transactions:

**Primary matching criteria:**
- **Amount** - Transaction amount matches expense amount (exact or within tolerance)
- **Date** - Transaction date within reasonable range of expense date
- **Vendor** - Bank transaction description contains vendor name

**Secondary criteria:**
- **Currency** - Transaction currency matches expense currency
- **Account** - Transaction is in expected payment account
- **Category** - Transaction category aligns with expense type

## Reconciliation Status

AI Expenses show their reconciliation status:

| Status | What It Means | Next Steps |
|--------|---------------|------------|
| **Unreconciled** | No matching transaction found yet | Wait for bank transaction to appear |
| **Potential Match** | System identified likely match | Review and confirm match |
| **Reconciled** | Confirmed match with bank transaction | No action needed |
| **Manual Review** | Multiple possible matches found | Select correct transaction |

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

If automatic matching doesn't find the transaction:

1. **Select the expense**

   Choose the unreconciled expense.

2. **Select Manual Match**

   Select **Find Transaction** or **Manual Match** button.

3. **Search transactions**

   Browse or search your bank transactions to find the correct one.

4. **Select transaction**

   Choose the matching transaction from the list.

5. **Confirm match**

   Select **Confirm** to reconcile the expense.

## Why Matches Might Not Happen Automatically

Common reasons for non-matching:

**Transaction not yet imported:**
- Bank transaction hasn't appeared in your account yet
- Bank sync hasn't run recently
- Transaction is pending

**Vendor name mismatch:**
- Bank shows different business name
- Receipt shows subsidiary or parent company
- Transaction description is abbreviated or cryptic

**Amount difference:**
- Receipt shows pre-tip amount, bank shows total with tip
- Currency conversion occurred
- Partial payment or split transaction

**Date discrepancy:**
- Transaction posted days after expense date
- International transaction with delayed processing
- Pre-authorized vs. final charge dates differ

## Handling Split Transactions

If an expense was paid across multiple transactions:

1. **Select the expense**

   Choose the expense that was split.

2. **Select Split Match**

   Select **Match Multiple Transactions** option.

3. **Choose transactions**

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
- Investigate expenses unreconciled for 7+ days
- Manually match problematic transactions

## Common Reconciliation Scenarios

<details>
  <summary>Credit card expenses that reconcile to bank transfer</summary>

**Situation:**
You paid with credit card, but bank transaction shows payment to credit card company.

**Solution:**
1. Ensure credit card account is connected to Fiskl
2. Expense should match with credit card transaction
3. Credit card payment to bank shows separately
4. Don't manually match expense to bank transfer
</details>

<details>
  <summary>Foreign currency transactions</summary>

**Situation:**
Expense amount in foreign currency doesn't exactly match bank transaction due to exchange rate differences.

**Solution:**
1. System accounts for exchange rate variations
2. Match tolerance allows for small differences
3. Confirm match if amounts are close (within 2-3%)
4. Foreign exchange variance is recorded separately
</details>

<details>
  <summary>Subscription payments that recur</summary>

**Situation:**
Monthly subscription creates recurring expenses and transactions.

**Solution:**
1. Upload receipt for first month only
2. Subsequent months auto-match to recurring transactions
3. Or upload each month's receipt if needed for records
4. System learns pattern and improves matching
</details>

## What Happens After Reconciliation

Once an expense reconciles with a bank transaction:

**Accounting updates:**
- Expense moves from Accounts Payable to paid status
- Connected bank account decreases
- Expense category updates with actual payment
- Financial reports reflect reconciled expense

**Record keeping:**
- Original receipt image remains attached
- Bank transaction links to expense permanently
- Audit trail shows reconciliation timestamp
- Both expense and transaction appear in reports

**No further action needed:**
- Expense is complete
- No manual entries required
- Reports update automatically
- Books are balanced

## Troubleshooting Reconciliation

<details>
  <summary>Expense won't reconcile despite matching transaction</summary>

**Solution:**
1. Check if bank account is properly connected
2. Verify transaction was imported successfully
3. Ensure amounts match (including currency)
4. Check vendor name in both records
5. Try manual match if automatic fails
6. Contact support if issue persists
</details>

<details>
  <summary>Wrong transaction was automatically matched</summary>

**Solution:**
1. Select the expense
2. Select **Unmatch Transaction**
3. System returns expense to unreconciled status
4. Manually find and match correct transaction
5. Confirm new match
</details>

<details>
  <summary>Multiple expenses match same transaction</summary>

**Solution:**
This indicates a split transaction scenario:
1. Verify if single receipt covers multiple items
2. Check if items should be separate expenses
3. Either keep as multiple expenses (split match)
4. Or combine into single expense if appropriate
5. Match appropriately based on business logic
</details>

## Related Topics

- [Managing AI Expenses](./managing-ai-expenses) - Edit and review expenses
- [Uploading AI Expenses](./uploading) - Upload receipt images
- [Banking Connections](../../integrations/banking/overview) - Connect bank accounts
- [Traditional Expenses](../traditional-expenses/overview) - Legacy expense system (view only)