---
title: Bank Account Reconciliation
description: Step-by-step guide to performing bank account reconciliation in
  Fiskl, from setup to completion with perfect transaction matching.
sidebar_position: 14
---
This guide explains how to reconcile a bank or cash account in Fiskl. Reconciliation confirms that your Fiskl records match your bank statement and keeps your accounts accurate.

## Before You Begin

- Make sure your bank account is connected or transactions are imported.
- Have your bank statement available, including the closing date and ending balance.

:::info
The first reconciliation covers all transactions from the earliest entry in the account up to your chosen end date. For the reconciliation to balance, the General Ledger balance must match the statement balance at the end of that period.
:::

## Setting Up Your Reconciliation

1. Go to **Accounting** > **Reconciliation** in the left menu.
2. Select the bank or cash account you want to reconcile from the dropdown.
3. Select **Reconcile** to open the reconciliation screen.
4. Enter the closing date from your bank statement in the **End date** field.
5. Enter the ending balance from your bank statement in the **Statement end balance** field.

Fiskl automatically checks for discrepancies against your statement balance. The **Reconcile In** total shows money coming in; the **Reconcile Out** total shows money going out.

### Your First Reconciliation

If this is your first reconciliation in Fiskl and you have historical transactions, follow these steps to establish a clean starting point:

1. Identify the last month when your General Ledger balance matched your statement balance.
2. Set the end date to that month.
3. Enter the statement ending balance for that period.
4. The difference should show as zero — this reconciliation captures all prior transactions.
5. Select **Reconcile** to save it.

Saving this first reconciliation lets you move to a more frequent reconciliation schedule going forward.

## Matching Transactions

Once you enter the statement details, Fiskl automatically identifies matched transactions. Review the results in the transaction list before finalising.

### Transactions That Match

When a Fiskl transaction matches an entry on your bank statement, Fiskl highlights the match automatically. Select the checkbox next to each matched pair to confirm it.

### Bank Statement Transactions Not in Fiskl

If a transaction appears on your statement but is missing from Fiskl:

1. Locate the unmatched item on the bank statement side.
2. Select the **+** button next to it.
3. Select the appropriate ledger account category (for example, Bank Fees or Interest Income).
4. Select **Create** to add the transaction.
5. Select the checkboxes on both sides to confirm the match.

### Fiskl Transactions Not on Your Statement

If a transaction is in Fiskl but not on your statement, it is likely a timing difference — for example, an outstanding cheque or a deposit in transit.

Leave these transactions unselected for this reconciliation period. They will appear in your next reconciliation when the bank processes them.

## Finalising the Reconciliation

When all matched transactions are confirmed and the difference shows as zero, select **Reconcile** to finalise.

:::tip
If the difference is not zero, select the difference amount to upload your bank statement in CSV format. This helps identify any remaining discrepancies.
:::

## After Reconciliation

After you finalise a reconciliation, you can view the reconciliation report online or export it as a PDF.

:::warning
If you add, remove, or edit transactions within a reconciled period, the reconciliation status changes to **Attention**. You will need to return to that reconciliation and resolve the difference before the period is considered reconciled again.
:::

## Common Issues

The reconciliation difference is not zero

A non-zero difference usually means one or more transactions are missing, duplicated, or entered with the wrong amount.

1. Compare your Fiskl transaction list with your bank statement line by line.
2. Look for transactions on the statement that have no matching entry in Fiskl and add them using the **+** button.
3. Check for duplicate transactions in Fiskl and delete any that appear twice.
4. Verify that transaction amounts match your statement exactly, including bank fees or interest entries.



A previously reconciled period now shows "Attention"

This status appears when a transaction inside a closed reconciliation period has been added, changed, or deleted.

1. Go to **Accounting** > **Reconciliation** and open the affected reconciliation.
2. Review the transaction list to identify what changed.
3. Correct or remove the transaction, or add any missing entry.
4. Confirm the difference returns to zero and select **Reconcile** again.



## Related Topics

- [Reconciliation Overview](/accounting/reconciliation/overview) — Introduction to reconciliation in Fiskl
- [Handling Reconciliation Discrepancies](/accounting/reconciliation/guides/handling-reconciliation-discrepancies) — Steps to resolve differences
- [How Fiskl Handles Reconciliation](/accounting/reconciliation/guides/how-fiskl-handles-reconciliation) — How the matching process works
- [Reconciliation Best Practices](/accounting/reconciliation/guides/reconciliation-best-practices) — Tips for keeping reconciliation on track
- [Reconciliation Reports](/accounting/reconciliation/guides/reconciliation-reports) — Viewing and exporting reconciliation reports

