---
title: "AI Expense Reconciliation"
description: "Learn how AI Expenses reconcile with bank transactions in Fiskl, including automatic matching, manual reconciliation, and troubleshooting tips."
keywords: ["AI expenses", "expense reconciliation", "bank matching", "reconcile expenses", "Fiskl expenses"]
sidebar_position: 3
tags:
   - Expenses
   - AI Expenses
   - Reconciliation
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how AI Expenses reconcile with bank transactions and how to manage the matching process.

## How Automatic Reconciliation Works

When you upload a receipt/bill through AI Expenses, Fiskl monitors your connected bank accounts for a matching transaction. When a match is found, the expense reconciles automatically.

**The matching process:**

1. **Expense created** — AI extracts data from the uploaded receipt/bill
2. **Saved to Accounts Payable** — The expense enters your records as unpaid
3. **Monitoring begins** — The system watches for matching bank transactions
4. **Match identified** — The system finds a transaction matching vendor, amount, and date
5. **Automatic reconciliation** — The expense links to the transaction and accounting records update

:::info
Reconciliation requires at least one connected bank account. Go to **Banking** to connect your accounts before uploading expenses.
:::

## What the System Matches

Fiskl uses multiple data points to identify matching transactions.

**Primary matching criteria:**

- **Amount** — Transaction amount matches the expense amount (exact or within tolerance)
- **Date** — Transaction date falls within a reasonable range of the expense date
- **Vendor** — Bank transaction description contains the vendor name

**Secondary criteria:**

- **Currency** — Transaction currency matches the expense currency
- **Account** — Transaction is in the expected payment account

## Reconciliation Status

AI Expenses display their processing status in the expense list:

| Status | Meaning | Next steps |
|---|---|---|
| **Processed** | The receipt/bill was successfully extracted and saved | Review the expense details and confirm they are correct |
| **Processing** | The AI is currently extracting data from the receipt/bill | Wait for processing to complete before taking action |
| **Failed** | The AI could not extract data from the receipt/bill | Re-upload the receipt/bill or enter the expense manually |
| **Duplicate** | The receipt/bill matches an expense already in your records | Review and delete the duplicate if not needed |

On the **Transactions** side, a **Linked** status (shown in green) means the transaction has been matched to a bank transaction, either fully or partially.

## Viewing Reconciliation Details

1. Go to **AI Expenses** in the left sidebar
2. Select an expense to view the matched bank transaction and matching details, along with the payment status (Paid or Overdue)

## Confirming Potential Matches

When the system identifies a potential match:

1. Select the expense to view the suggested bank transaction
2. Compare the amounts, dates, vendor names, and currency
3. Select **Confirm** if correct, or reject the match to find a different transaction

## Manual Reconciliation

If automatic matching does not find the correct transaction:

1. Select the unreconciled expense
2. Select the option to match manually
3. Browse or search your bank transactions to find the correct one
4. Select the matching transaction
5. Select **Confirm** to reconcile the expense

## Why Matches May Not Happen Automatically

**Transaction not yet imported:**

- The bank transaction has not appeared in your account yet
- Bank sync has not run recently
- The transaction is still pending

**Vendor name mismatch:**

- The bank shows a different business name from the receipt/bill
- The receipt/bill shows a subsidiary or parent company name
- The transaction description is abbreviated

**Amount difference:**

- The receipt/bill shows a pre-tip amount but the bank shows the total with tip
- Currency conversion occurred
- A partial payment or split transaction was made

**Date discrepancy:**

- The transaction posted several days after the expense date
- International transactions may have delayed processing
- Pre-authorised and final charge dates differ

## Tips for Better Automatic Matching

**Keep vendor names consistent:**

- Edit vendor names to match the descriptions shown in your bank feed
- Note parent company versus subsidiary names where relevant

**Upload promptly:**

- Upload receipts/bills soon after purchase for more reliable matching

**Keep bank connections active:**

- Ensure all payment accounts are connected in **Banking**
- Enable automatic bank syncs

**Review regularly:**

- Check unreconciled expenses weekly
- Manually match any expenses unreconciled for seven or more days

## Common Issues

<details className="blue-box">
<summary>Credit card expenses reconcile to a bank transfer instead of the card transaction</summary>

If you paid with a credit card, the expense should match the credit card transaction — not the later bank transfer to the credit card company.

1. Ensure the credit card account is connected in **Banking**
2. The expense should match the transaction on the credit card account
3. The payment from your bank to the credit card appears as a separate transaction

</details>

<details className="blue-box">
<summary>Foreign currency expense does not match due to exchange rate differences</summary>

Small differences between the expense amount and the bank transaction amount are normal when foreign currency is involved.

1. The system allows for exchange rate variations within a tolerance range
2. Confirm the match if the amounts are close
3. Any foreign exchange variance is recorded separately in your accounting

</details>

<details className="blue-box">
<summary>Expense will not reconcile despite a matching bank transaction</summary>

1. Check that the bank account is properly connected in **Banking**
2. Verify the transaction was imported successfully
3. Confirm amounts and currency match
4. Check the vendor name in both the expense and the bank transaction
5. Try matching manually if automatic matching fails
6. Contact support if the issue persists

</details>

<details className="blue-box">
<summary>Wrong transaction was automatically matched</summary>

1. Select the expense
2. Select the option to unmatch the transaction
3. The expense returns to unreconciled status
4. Manually find and confirm the correct transaction

</details>

<details className="blue-box">
<summary>Multiple expenses match the same transaction</summary>

This may indicate a split transaction scenario.

1. Verify whether a single receipt/bill covers multiple items
2. Check whether the items should be separate expenses
3. Either keep as separate expenses and split-match the transaction, or combine into a single expense
4. Match based on your records

</details>

## What Happens After Reconciliation

Once an expense reconciles with a bank transaction:

**Accounting updates:**

- The expense moves from Accounts Payable to paid status
- The connected bank account balance updates
- Financial reports reflect the reconciled expense

**Record keeping:**

- The original receipt/bill image remains attached to the expense
- The bank transaction links to the expense permanently
- An audit trail records the reconciliation

:::tip
Use **Ask Fi** in the top right of the screen if you need help understanding a reconciliation status or matching outcome.
:::

## Related Topics

- [Managing AI Expenses](/expenses/ai-expenses/managing-ai-expenses) — Edit, review, and manage AI-processed expenses
- [Uploading AI Expenses](/expenses/ai-expenses/uploading) — Upload receipt images for AI processing
- [Banking Connections](/integrations/banking/overview) — Connect bank accounts to enable reconciliation
- [Traditional Expenses](/expenses/traditional-expenses/overview) — View-only legacy expense records
