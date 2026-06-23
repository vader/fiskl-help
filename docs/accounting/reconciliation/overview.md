---
title: "Account Reconciliation"
sidebar_position: 1
description: "Master account reconciliation in Fiskl. Ensure your bank statements match your transaction records for accurate financial reporting and peace of mind."
keywords: ["account reconciliation", "bank reconciliation", "statement matching", "financial accuracy", "transaction verification"]
toc_min_heading_level: 2
toc_max_heading_level: 3
tags:
  - Accounting
  - Reconciliation
  - Bank Statements
---

Account reconciliation is the process of comparing your bank or financial institution statements with the transactions recorded in Fiskl to ensure they match.

Reconciliation verifies that every transaction in your Fiskl account corresponds to an actual transaction on your bank statement, and the other way around. This process helps you identify discrepancies, errors, or missing transactions that affect your financial accuracy.

<details>
<summary>Why is account reconciliation essential?</summary>

Account reconciliation helps you:

- Detect and correct errors in your financial records
- Identify unauthorised or fraudulent transactions
- Ensure accurate cash flow reporting
- Maintain compliance with accounting standards
- Build confidence in your financial data for business decisions

</details>

:::tip
Reconcile monthly at minimum. Regular reconciliation prevents small discrepancies from becoming major issues and keeps your financial reports accurate.
:::

## How Fiskl Handles Account Reconciliation

Fiskl's reconciliation feature lets you compare your bank statements with your recorded transactions, so you can identify matches and resolve discrepancies.

### Types of Reconciliation Scenarios

You typically encounter two main reconciliation scenarios:

1. **Perfect match** — Your bank statement balance matches your Fiskl account balance exactly
2. **Discrepancies present** — Differences exist between your bank statement and Fiskl records that require investigation and resolution

## Performing a Perfect Reconciliation

When your bank statement and Fiskl transactions align perfectly, select **Reconcile** to complete the process.

:::info
If you are reconciling in Fiskl for the first time, reconcile all previous transactions first. Your initial reconciliation should cover the entire period — from your first transaction in Fiskl up to the end date of that period.
:::

<details>
<summary>Take an interactive walkthrough of how reconciliation works in Fiskl</summary>

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/share/cmdhdov1h000004l7eugt0vgw/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>

## Detailed Reconciliation Walkthrough

### Setting Up Your Reconciliation

1. Go to **Accounting** > **Reconciliation**
2. Select the bank or cash account you want to reconcile from the dropdown
3. Set your reconciliation period (typically monthly) to match your bank statement period

### Entering Statement Information

1. Enter the closing date from your bank statement in **Statement End Date**
2. Enter the final balance from your bank statement in **Statement End Balance**

### Transaction Matching

Once you enter this information, Fiskl automatically identifies and matches transactions that appear in both your records and the statement period, along with any discrepancies.

## Handling Different Transaction States

<details>
<summary>Transactions that match perfectly</summary>

When transactions appear on both your bank statement and in Fiskl with identical amounts and dates, Fiskl highlights these matches automatically.

</details>

<details>
<summary>Bank statement transactions not in Fiskl</summary>

For transactions that appear on your statement but not in Fiskl:

- Look for unchecked items on the bank statement side
- Select the **Plus** button next to the bank statement transaction
- Select an appropriate category (for example, Bank Fees or Interest Income)
- Select **Create** to add the transaction, then tick both items to complete the match

</details>

<details>
<summary>Fiskl transactions not on bank statement</summary>

For transactions recorded in Fiskl but not on your bank statement:

- These are typically outstanding cheques or deposits in transit
- Do not tick these transactions during reconciliation
- Verify these are legitimate timing differences, not data entry errors
- These items should appear in your next reconciliation period

</details>

## Final Reconciliation Steps

Once your reconciliation shows a zero difference, select **Reconcile**.

### After Reconciliation

1. **Generate reports** — View reports within Fiskl or export to PDF if required
2. **Update records** — Ensure any new transactions created during reconciliation are correctly categorised
3. **Schedule the next reconciliation** — Add the date to the Fiskl Calendar as a reminder

## Handling Reconciliation Discrepancies

When differences exist between your bank statement and Fiskl records, identify and resolve each discrepancy systematically.

### Common Types of Discrepancies

1. **Missing transactions in Fiskl** — Bank statement items not recorded in Fiskl
2. **Uncleared transactions** — Fiskl transactions not yet on your bank statement
3. **Incorrect amounts** — Transactions entered with different values in Fiskl and your bank statement, often when amounts are entered manually

### Missing Transactions in Fiskl

These appear on your bank statement but are not recorded in Fiskl:

- Bank fees or charges
- Interest payments or earnings
- Automatic payments or deposits
- Wire transfer fees
- Currency conversion fees

To add a missing transaction:

1. Select the **Plus** next to the bank statement transaction
2. Add the category and any other useful information
3. Select **Create** to add the transaction to the reconciliation
4. Tick both transactions to complete the reconciliation

### Transactions Not Yet on Your Bank Statement

These include cheques issued but not yet cashed, pending electronic transfers, deposits in transit, and outstanding payments. Leave these transactions unmarked during reconciliation, as they represent timing differences.

### Incorrect Transaction Amounts

For transactions that exist in both places but with different amounts, select the edit icon to amend the Fiskl transaction, or create an adjustment entry.

## Steps for Resolving Discrepancies

1. **Identify the difference** — Fiskl displays the difference in amounts automatically
2. **Resolve missing transactions** — Add or remove transactions in Fiskl using the minus/plus button above the Fiskl transactions on the left, using the appropriate expense or income accounts
3. **Handle timing differences** — Leave outstanding cheques and deposits unmarked; they appear in your next reconciliation period
4. **Correct errors** — Edit incorrect amounts or create reversing entries for duplicate transactions
5. **Complete reconciliation** — Select **Reconcile** once all discrepancies are resolved

:::tip
You can save your reconciliation as a draft until you are ready to fully reconcile.
:::

## Viewing Reconciliation Reports

### Creating Reports

1. Create reports from the reconciliation list, or from **Reports** in the **Accounting** menu
2. Select the period of reconciliation for your report
3. Select to generate the report
4. Review your reconciliation in full, including all matched transactions and adjustments

### Report Information

Reconciliation reports include opening and closing balances, all matched transactions during the period, any adjustments or new transactions created, outstanding items not yet cleared, and a summary of reconciliation results.

## Best Practices

1. **Timing** — Reconcile accounts monthly, shortly after receiving bank statements
2. **Documentation** — Keep digital or physical copies of bank statements
3. **Systematic approach** — Start with the largest transactions and work down
4. **Double-check** — Verify that all adjusting entries are correctly categorised

<details>
<summary>Large unexplained differences</summary>

When facing significant discrepancies:

- Break the reconciliation period into smaller segments
- Focus on high-value transactions first
- Check for duplicate entries or missing data

</details>

<details>
<summary>Recurring small differences</summary>

For persistent minor discrepancies:

- Review bank fee structures and automatic charges
- Check for rounding differences in multi-currency transactions
- Verify interest calculations
- Examine recurring payment amounts for changes

</details>

## Multi-Currency Reconciliation

When reconciling foreign currency accounts:

- **Exchange rate fluctuations** — Account for currency conversion differences between the transaction date and statement date
- **Bank conversion rates** — Your bank's exchange rates may differ from Fiskl's default rates
- **Adjustment entries** — Create foreign exchange gain or loss entries to account for rate differences
- **Base currency impact** — Ensure foreign currency adjustments reflect correctly in your base currency reports

## Reporting and Compliance

Reconciliation affects several key financial reports:

- **Balance Sheet** — Ensures cash and bank balances are accurate
- **Cash Flow** — Verifies the accuracy of cash flow calculations
- **Trial Balance** — Confirms that all accounts are properly balanced

:::info
Maintain detailed reconciliation records for audit purposes and to track patterns in discrepancies that might indicate where your process needs improvement.
:::

## Related Topics

- [Chart of Accounts](/accounting/chart-of-accounts) — View and manage your ledger account structure
- [Matching and Splitting Transactions](/accounting/journal-entries/guides/match-and-split-transactions) — Match bank transactions to your records
- [Trial Balance](/core-features/accounting/reports/trial-balance) — Confirm your accounts are balanced
- [Balance Sheet](/reporting/balance-sheet) — Review your assets, liabilities, and equity
