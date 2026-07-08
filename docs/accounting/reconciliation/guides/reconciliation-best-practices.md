---
title: Reconciliation Best Practices
description: Description of Reconciliation Best Practices
sidebar_position: 1
---
This section covers proven practices to help you reconcile accurately and efficiently in Fiskl, from preparation and timing to handling edge cases and maintaining a clean audit trail.

## Reconcile Regularly

The single most effective practice is reconciling every account on a fixed schedule — monthly is the standard for most businesses, aligned to your bank statement period. Leaving reconciliation for quarterly or annual reviews means more transactions to sort through, harder-to-trace discrepancies, and a greater chance that errors compound over time.

**Recommended schedule by account type:**

- **Bank accounts**: Monthly, immediately after receiving your statement
- **Credit card accounts**: Monthly, matching the statement closing date
- **PayPal and Stripe accounts**: Monthly or after each settlement payout
- **Cash accounts**: Weekly or monthly depending on transaction volume

:::tip
Set a recurring reminder in your calendar for the same date each month — typically two to three days after your statement period closes, giving your bank time to process any late transactions.
:::

## Prepare Before You Start

A few minutes of preparation before opening the reconciliation screen saves significant time during the process.

**Before you begin each reconciliation:**

1. Download or access your bank statement for the period
2. Note the statement closing date and closing balance
3. Confirm all transactions from that period are recorded in Fiskl — including bank fees, interest, and automatic payments
4. Check for any pending entries from the previous reconciliation period that may now have cleared

Having your statement open alongside Fiskl means you can verify individual transactions quickly without switching context.

## Enter Transactions Before Reconciling

Reconciliation works by comparing what your bank recorded against what Fiskl recorded. If transactions are missing from Fiskl before you start, you will spend the session adding them rather than verifying them.

**Common transactions to record before reconciling:**

- Bank charges and monthly fees
- Interest received or paid
- Automatic payment deductions (subscriptions, loan repayments)
- Direct debits that don't generate invoices
- Transfers between accounts

If you connect your bank via Fiskl Banking or import statements, review and categorise imported transactions before starting your reconciliation session.

## Understand Outstanding Items

Not every reconciliation difference is an error. Outstanding items are transactions that are legitimate and correctly recorded in Fiskl but haven't yet appeared on your bank statement.

**Common outstanding items:**

- Cheques issued but not yet cashed by the recipient
- Bank transfers still in transit at the statement date
- Deposits recorded on the last day of the period that post the following day

Leave outstanding items unmatched during the current reconciliation. They will appear on your bank statement in the next period and match at that point. Do not delete or adjust them to force the reconciliation to balance.

:::warning
Deleting a transaction to clear a reconciliation difference removes it permanently from your records. Investigate any unexplained difference before taking any corrective action.
:::

## Reconcile One Period at a Time

Work chronologically and complete one period before starting the next. Skipping periods or reconciling out of order creates gaps in your audit trail and can make it harder to identify where a discrepancy originated.

If you're starting reconciliation for the first time with historical data, work forward from the earliest period. Set up your opening balances first via the journal entries guides, then reconcile each month in sequence.

## Use Fiskl's Automatic Matching

When you open a reconciliation session, Fiskl automatically matches transactions between your records and the imported bank data. Review these matches before confirming them — automatic matching is accurate for straightforward transactions but check the following:

- **Split transactions**: A single bank entry may correspond to multiple Fiskl transactions
- **Timing offsets**: Transactions recorded on slightly different dates may match but need manual review
- **Round-number amounts**: Multiple transactions for the same amount can produce false matches

For transactions that don't match automatically, use the manual match process described in the [Bank Account Reconciliation](/accounting/reconciliation/guides/bank-account-reconciliation) guide.

## Investigate Every Difference

When your reconciliation shows a difference, work through a consistent investigation sequence rather than guessing:

1. Check for transposition errors — amounts like 150 and 510 are a common source
2. Look for a transaction exactly equal to half the difference — this can indicate a missed reversal
3. Search for the exact difference amount as an unrecorded transaction
4. Review recent transactions for duplicates
5. Check whether the opening balance from the previous reconciliation matches

A structured approach finds most discrepancies within a few minutes. The [Handling Reconciliation Discrepancies](/accounting/reconciliation/guides/handling-reconciliation-discrepancies) guide covers specific resolution steps for each scenario.

## Keep Your Chart of Accounts Tidy

Accurate reconciliation depends on transactions being assigned to the correct ledger account. If transactions are regularly posted to incorrect accounts, your reconciliation may balance while your reports remain inaccurate.

**Practices that help:**

- Review account assignments when categorising imported bank transactions
- Use consistent accounts for recurring transaction types (e.g., always post bank fees to the same expense account)
- Archive ledger accounts that are no longer in use to prevent accidental posting

See [Chart of Accounts](/accounting/chart-of-accounts) for guidance on managing your account structure.

## Handle Multi-Currency Accounts Carefully

If you hold foreign currency accounts, reconcile them in the account's native currency. Compare your Fiskl balance in that currency against your bank statement — do not convert to your base currency for comparison purposes, as exchange rate fluctuations will create artificial differences.

Exchange rate gains and losses are accounting entries, not reconciliation discrepancies. These are handled through your multi-currency journal entries and will appear in your reports correctly once the reconciliation is complete.

## Generate a Report After Each Reconciliation

After completing a reconciliation, generate and save the reconciliation report before closing the session. This creates a point-in-time record of the matched transactions, the statement balance, and the final reconciled balance.

Reconciliation reports are your primary audit evidence. Store them systematically — by account and period — so they are accessible for year-end reviews, tax filings, or accountant queries.

See [Reconciliation Reports](/accounting/reconciliation/guides/reconciliation-reports) for steps on generating and exporting reports.

## Work with Your Accountant

If you work with an accountant, align on a reconciliation schedule and agree on who is responsible for each account. Share reconciliation reports at the end of each period rather than waiting for year-end. Issues identified monthly take minutes to resolve; the same issues identified annually can require hours of investigation.

:::tip
Use **Ask Fi** (top right of the screen) if you're unsure how to handle an unusual transaction type during reconciliation. Fi can guide you through the correct process for your specific situation.
:::

## Common Issues

<details className="blue-box">
<summary>My reconciliation balanced last month but has a difference this month</summary>

A new difference in a previously clean account usually indicates one of the following:

- A transaction from a prior period was edited or deleted after it was reconciled
- An opening balance was changed
- A new transaction was backdated into a prior period

Go to **Accounting** > **Reconciliation** and review the previous period's report. Compare the closing balance from that report against the opening balance shown in the current session. If they don't match, identify which transaction was changed and correct it before restarting the current reconciliation.

</details>

<details className="blue-box">
<summary>I have a large number of small unmatched transactions</summary>

Small unmatched items are often bank fees, interest charges, or rounding differences from currency conversion. Work through them systematically:

1. Sort unmatched items by amount to group similar values
2. Check your bank statement for corresponding entries
3. Add any missing transactions in Fiskl before attempting to match
4. For genuine rounding differences on multi-currency transactions, post the difference to an exchange rate gains/losses account

</details>

<details className="blue-box">
<summary>I accidentally finalised a reconciliation with an error</summary>

Contact your accountant before making changes to a finalised reconciliation. Editing a completed reconciliation period affects your audit trail and can alter prior-period balances. In Fiskl, you can re-open a finalised reconciliation, but do so with care — correct only the specific transaction causing the issue and regenerate the reconciliation report afterwards.

</details>

---

## Related Topics

- [Bank Account Reconciliation](/accounting/reconciliation/guides/bank-account-reconciliation) — Step-by-step guide to completing a reconciliation in Fiskl
- [Handling Reconciliation Discrepancies](/accounting/reconciliation/guides/handling-reconciliation-discrepancies) — How to identify and resolve common reconciliation differences
- [Reconciliation Reports](/accounting/reconciliation/guides/reconciliation-reports) — Generating and exporting reconciliation reports for your records
- [How Fiskl Handles Account Reconciliation](/accounting/reconciliation/guides/how-fiskl-handles-reconciliation) — Overview of Fiskl's automatic matching and reconciliation process
- [Chart of Accounts](/accounting/chart-of-accounts) — Managing your ledger account structure for accurate reporting