---
title: How Fiskl Handles Account Reconciliation
description: Discover how Fiskl's automated reconciliation feature streamlines
  bank statement matching with bulk transaction processing and smart error
  detection.
sidebar_position: 13
---
This guide covers how to identify and resolve discrepancies between your bank statement and Fiskl records. You can handle multiple corrections in a single session.

## Types of Discrepancies

During reconciliation, you may encounter four main types of discrepancies:

- **Missing transactions in Fiskl** — transactions that appear on your bank statement but are not recorded in Fiskl
- **Transactions not yet on your bank statement** — transactions recorded in Fiskl that are still pending at the bank
- **Duplicate transactions** — transactions recorded twice in Fiskl or duplicated in the bank feed
- **Incorrect amounts or dates** — transactions that exist in both places but with different values or dates, often from manual entry errors

## Missing Transactions in Fiskl

Transactions that appear on your bank statement but are absent from Fiskl are typically:

- Bank fees or charges
- Interest payments or earnings
- Automatic payments or deposits
- Wire transfer or currency conversion fees

### Add a Missing Transaction

1. Select the **+** icon next to the bank statement transaction
2. Enter the category and any relevant details
3. Select **Create** — the transaction is added to the reconciliation
4. Select the checkboxes on both transactions to match them

## Transactions Not Yet on Your Bank Statement

Some Fiskl transactions may not yet appear on your bank statement due to timing differences. These typically include:

- Cheques issued but not yet cashed
- Pending electronic transfers
- Deposits in transit
- Outstanding payments

Leave these transactions unmatched during reconciliation. They will appear in your next reconciliation period.

## Incorrect Amounts or Dates

Transactions exist in both Fiskl and your bank statement, but with different values. Common causes include:

- Manual data entry errors
- Currency conversion discrepancies
- Partial payments recorded as full payments
- Incorrect dates on manually imported transactions

To correct a transaction amount, select the edit icon on the Fiskl transaction and update the value. For duplicates, create a reversing entry or remove the extra transaction.

## Resolving Discrepancies Step by Step

:::tip
Save your reconciliation as a draft at any point and return to it later. Select **Reconcile** only when you are ready to finalise.
:::

1. **Review the difference** — Fiskl displays the outstanding balance difference automatically
2. **Add missing transactions** — Select the **+** button above the Fiskl transaction list to add any transactions not yet in Fiskl
3. **Correct amounts and dates** — Select the edit icon on any Fiskl transaction with an incorrect value or date
4. **Remove duplicates** — Select the **−** button to remove any duplicate Fiskl transactions
5. **Leave timing differences** — Leave outstanding cheques and pending deposits unmatched; they carry forward to your next reconciliation
6. **Finalise** — Once the difference shows zero, select **Reconcile** to complete

## Common Issues

<details className="blue-box">
<summary>The difference does not reach zero after corrections</summary>

Check for transactions that are partially matched or have rounding differences. Look for any unmatched transactions on either side and confirm all amounts match exactly. Currency conversion transactions may require a manual adjustment entry if exchange rates differ between systems.

</details>

<details className="blue-box">
<summary>A transaction appears on both sides but will not match</summary>

This can happen when dates differ between Fiskl and the bank feed. Select the edit icon on the Fiskl transaction to align the date with the bank statement date, then try matching again.

</details>

## Related Topics

- [Bank Account Reconciliation](/accounting/reconciliation/guides/bank-account-reconciliation) — Step-by-step guide to running a reconciliation
- [How Fiskl Handles Reconciliation](/accounting/reconciliation/guides/how-fiskl-handles-reconciliation) — Overview of how the reconciliation process works
- [Reconciliation Best Practices](/accounting/reconciliation/guides/reconciliation-best-practices) — Tips for keeping reconciliations accurate and efficient
- [Reconciliation Reports](/accounting/reconciliation/guides/reconciliation-reports) — View and export reconciliation history
